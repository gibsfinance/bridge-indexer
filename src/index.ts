import { Context, ponder } from '@/generated'
import * as PonderCore from '@ponder/core'
import {
  AffirmationComplete,
  Block,
  BridgeSide,
  FeeDirector,
  RelayMessage,
  RequiredSignaturesChange,
  SignedForAffirmation,
  SignedForUserRequest,
  Transaction,
  UserRequestForAffirmation,
  UserRequestForSignature,
  ValidatorStatus,
} from '../ponder.schema'
import type { Hex } from 'viem'
import { parseAMBMessage } from './message'
import { eq } from '@ponder/core'
import {
  getBridgeAddressFromValidator,
  ids,
  bridgeInfo,
  orderId,
} from './utils'
import _ from 'lodash'

const upsertBlock = async (context: Context, block: PonderCore.Block) => {
  return await context.db
    .insert(Block)
    .values({
      blockId: ids.block(context, block.hash),
      chainId: context.network.chainId.toString(),
      hash: block.hash,
      number: block.number,
      timestamp: block.timestamp,
      baseFeePerGas: block.baseFeePerGas,
    })
    .onConflictDoUpdate((row) => ({
      hash: row.hash,
    }))
}

const upsertTransaction = async (
  context: Context,
  transaction: PonderCore.Transaction,
) => {
  return await context.db
    .insert(Transaction)
    .values({
      transactionId: ids.transaction(context, transaction.hash),
      blockId: ids.block(context, transaction.blockHash),
      hash: transaction.hash,
      index: transaction.transactionIndex.toString(),
      from: transaction.from,
      to: transaction.to!,
      value: transaction.value,
    })
    .onConflictDoUpdate((row) => ({
      blockId: row.blockId,
    }))
}

const upsertBridge = async (context: Context, address: Hex) => {
  const info = bridgeInfo(address)
  return await context.db
    .insert(BridgeSide)
    .values({
      bridgeId: ids.bridge(context, address),
      chainId: context.network.chainId.toString(),
      address: info!.address,
      provider: info!.provider,
      side: info!.side,
    })
    .onConflictDoUpdate((row) => ({
      address: row.address,
    }))
}

const target = '0xAF2ce0189f46f5663715b0b9ED2a10eA924AB9B0'
  .toLowerCase()
  .slice(2)

const whitelist = new Set<Hex>()

const requiredSignatureChange = new Map<Hex, number>()

ponder.on('ValidatorContract:ValidatorAdded', async ({ event, context }) => {
  const bridgeAddress = await getBridgeAddressFromValidator(event.log.address)
  const bridge = await upsertBridge(context, bridgeAddress)
  await upsertBlock(context, event.block)
  const tx = await upsertTransaction(context, event.transaction)
  const validatorId = ids.validator(bridge.bridgeId, event.args.validator)
  const count =
    (await context.db.sql.$count(
      ValidatorStatus,
      eq(ValidatorStatus.validatorId, validatorId),
    )) || 0
  await context.db
    .insert(ValidatorStatus)
    .values({
      validatorId,
      orderId: BigInt(count),
      bridgeId: bridge.bridgeId,
      address: event.args.validator,
      active: true,
      transactionId: tx.transactionId,
      logIndex: event.log.logIndex,
    })
    .onConflictDoUpdate(() => ({
      active: true,
    }))
})
ponder.on('ValidatorContract:ValidatorRemoved', async ({ event, context }) => {
  const bridgeAddress = await getBridgeAddressFromValidator(event.log.address)
  const bridge = await upsertBridge(context, bridgeAddress)
  await upsertBlock(context, event.block)
  const tx = await upsertTransaction(context, event.transaction)
  const validatorId = ids.validator(bridge.bridgeId, event.args.validator)
  const count =
    (await context.db.sql.$count(
      ValidatorStatus,
      eq(ValidatorStatus.validatorId, validatorId),
    )) || 0
  await context.db
    .insert(ValidatorStatus)
    .values({
      validatorId,
      orderId: BigInt(count),
      bridgeId: bridge.bridgeId,
      address: event.args.validator,
      active: false,
      transactionId: tx.transactionId,
      logIndex: event.log.logIndex,
    })
    .onConflictDoUpdate(() => ({
      active: false,
    }))
})

ponder.on(
  'ValidatorContract:RequiredSignaturesChanged',
  async ({ event, context }) => {
    const bridgeAddress = await getBridgeAddressFromValidator(event.log.address)
    await upsertBridge(context, bridgeAddress)
    await upsertBlock(context, event.block)
    const tx = await upsertTransaction(context, event.transaction)
    const bridgeId = ids.bridge(context, bridgeAddress)
    const count =
      (await context.db.sql.$count(
        RequiredSignaturesChange,
        eq(RequiredSignaturesChange.bridgeId, bridgeId),
      )) || 0
    requiredSignatureChange.set(bridgeId, Number(event.args.requiredSignatures))
    await context.db
      .insert(RequiredSignaturesChange)
      .values({
        id: ids.requiredSignatureChange(context, bridgeId, BigInt(count)),
        bridgeId,
        orderId: BigInt(count),
        requiredSignatures: Number(event.args.requiredSignatures),
        transactionId: tx.transactionId,
        logIndex: event.log.logIndex,
      })
      .onConflictDoNothing()
  },
)

ponder.on(
  'ForeignAMB:UserRequestForAffirmation',
  async ({ event, context }) => {
    if (!event.args.encodedData.includes(target)) {
      return
    }
    const block = await upsertBlock(context, event.block)
    const transaction = await upsertTransaction(context, event.transaction)
    const bridge = await upsertBridge(context, event.log.address)
    const parsed = parseAMBMessage(
      event.transaction.from,
      event.args.encodedData,
    )
    whitelist.add(parsed.messageHash)
    whitelist.add(event.args.messageId)
    await context.db
      .insert(UserRequestForAffirmation)
      .values({
        requiredSignatures: requiredSignatureChange.get(bridge.bridgeId) || 0,
        bridgeId: bridge.bridgeId,
        blockId: block.blockId,
        transactionId: transaction.transactionId,
        messageHash: parsed.messageHash,
        from: parsed.from,
        to: parsed.to,
        amount: parsed.nestedData.amount,
        messageId: event.args.messageId,
        encodedData: event.args.encodedData,
        encounteredSignatures: 0,
        logIndex: event.log.logIndex,
        originationChainId: parsed.originationChainId,
        destinationChainId: parsed.destinationChainId,
        orderId: orderId(context, event),
      })
      .onConflictDoNothing()
  },
)

ponder.on('HomeAMB:UserRequestForSignature', async ({ event, context }) => {
  if (!event.args.encodedData.includes(target)) {
    return
  }
  const block = await upsertBlock(context, event.block)
  const transaction = await upsertTransaction(context, event.transaction)
  const bridge = await upsertBridge(context, event.log.address)
  const parsed = parseAMBMessage(event.transaction.from, event.args.encodedData)
  whitelist.add(parsed.messageHash)
  whitelist.add(event.args.messageId)
  if (parsed.feeDirector) {
    await context.db
      .insert(FeeDirector)
      .values({
        messageId: event.args.messageId,
        recipient: parsed.feeDirector.recipient,
        settings: parsed.feeDirector.settings,
        limit: parsed.feeDirector.limit,
        multiplier: parsed.feeDirector.multiplier,
        feeType: parsed.feeDirector.feeType,
        unwrapped: parsed.feeDirector.unwrapped,
        excludePriority: parsed.feeDirector.excludePriority,
      })
      .onConflictDoNothing()
  }
  await context.db.insert(UserRequestForSignature).values({
    requiredSignatures: requiredSignatureChange.get(bridge.bridgeId) || 0,
    bridgeId: bridge.bridgeId,
    blockId: block.blockId,
    transactionId: transaction.transactionId,
    amount: parsed.nestedData.amount,
    messageId: event.args.messageId,
    from: parsed.from,
    encodedData: event.args.encodedData,
    messageHash: parsed.messageHash,
    to: parsed.to,
    logIndex: event.log.logIndex,
    originationChainId: parsed.originationChainId,
    destinationChainId: parsed.destinationChainId,
    orderId: orderId(context, event),
  })
})

ponder.on('HomeAMB:SignedForAffirmation', async ({ event, context }) => {
  if (!whitelist.has(event.args.messageHash)) {
    return
  }
  const block = await upsertBlock(context, event.block)
  const transaction = await upsertTransaction(context, event.transaction)
  const messageHash = event.args.messageHash
  const bridgeId = ids.bridge(context, event.log.address)
  const validatorId = ids.validator(bridgeId, event.args.signer)
  await context.db.insert(SignedForAffirmation).values({
    id: ids.signature(messageHash, validatorId),
    blockId: block.blockId,
    transactionId: transaction.transactionId,
    messageHash,
    validatorId,
    logIndex: event.log.logIndex,
    orderId: orderId(context, event),
  })
})

ponder.on('HomeAMB:SignedForUserRequest', async ({ event, context }) => {
  if (!whitelist.has(event.args.messageHash)) {
    return
  }
  const block = await upsertBlock(context, event.block)
  const transaction = await upsertTransaction(context, event.transaction)
  const messageHash = event.args.messageHash
  const bridgeId = ids.bridge(context, event.log.address)
  const validatorId = ids.validator(bridgeId, event.args.signer)
  await context.db.insert(SignedForUserRequest).values({
    id: ids.signature(messageHash, validatorId),
    blockId: block.blockId,
    transactionId: transaction.transactionId,
    messageHash,
    validatorId,
    logIndex: event.log.logIndex,
    orderId: orderId(context, event),
  })
})

ponder.on('HomeAMB:AffirmationCompleted', async ({ event, context }) => {
  if (!whitelist.has(event.args.messageId)) {
    return
  }
  await upsertBlock(context, event.block)
  const transaction = await upsertTransaction(context, event.transaction)
  const userRequestForAffirmation = await context.db.find(
    UserRequestForAffirmation,
    {
      messageId: event.args.messageId,
    },
  )!
  await context.db.insert(AffirmationComplete).values({
    transactionId: transaction.transactionId,
    messageHash: userRequestForAffirmation!.messageHash,
    deliverer: event.transaction.from,
    logIndex: event.log.logIndex,
    orderId: orderId(context, event),
  })
})

ponder.on('ForeignAMB:RelayedMessage', async ({ event, context }) => {
  if (!whitelist.has(event.args.messageId)) {
    return
  }
  await upsertBlock(context, event.block)
  const transaction = await upsertTransaction(context, event.transaction)
  const userRequestForSignature = await context.db.find(
    UserRequestForSignature,
    {
      messageId: event.args.messageId,
    },
  )
  await context.db.insert(RelayMessage).values({
    transactionId: transaction.transactionId,
    messageHash: userRequestForSignature!.messageHash,
    deliverer: event.transaction.from,
    logIndex: event.log.logIndex,
    orderId: orderId(context, event),
  })
})
