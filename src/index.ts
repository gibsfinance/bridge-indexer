import { Context, ponder } from '@/generated'
import * as PonderCore from '@ponder/core'
import {
  AffirmationComplete,
  Block,
  BridgeSide,
  FeeDirector,
  RelayMessage,
  RequiredSignaturesChange,
  ReverseMessageHashBinding,
  SignedForAffirmation,
  SignedForUserRequest,
  Transaction,
  UserRequestForAffirmation,
  UserRequestForSignature,
  ValidatorStatus,
} from '../ponder.schema'
import type { Hex } from 'viem'
import { parseAMBMessage } from './message'
import BaseBridgeValidatorsAbi from '../abis/BaseBridgeValidators'
import {
  getBridgeAddressFromValidator,
  ids,
  bridgeInfo,
  orderId,
  getValidatorAddressFromBridge,
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

ponder.on('ValidatorContract:ValidatorAdded', async ({ event, context }) => {
  const bridgeAddress = await getBridgeAddressFromValidator(event.log.address)
  const bridge = await upsertBridge(context, bridgeAddress)
  await upsertBlock(context, event.block)
  const tx = await upsertTransaction(context, event.transaction)
  const validatorId = ids.validator(bridge.bridgeId, event.args.validator)
  await context.db
    .insert(ValidatorStatus)
    .values({
      validatorId,
      orderId: orderId(context, event),
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
  const bridgeId = ids.bridge(context, bridgeAddress)
  const transactionId = ids.transaction(context, event.transaction.hash)
  const validatorId = ids.validator(bridgeId, event.args.validator)
  await Promise.all([
    upsertBridge(context, bridgeAddress),
    upsertBlock(context, event.block),
    upsertTransaction(context, event.transaction),
    context.db
      .insert(ValidatorStatus)
      .values({
        validatorId,
        orderId: orderId(context, event),
        bridgeId,
        address: event.args.validator,
        active: false,
        transactionId,
        logIndex: event.log.logIndex,
      })
      .onConflictDoUpdate(() => ({
        active: false,
      })),
  ])
})

ponder.on(
  'ValidatorContract:RequiredSignaturesChanged',
  async ({ event, context }) => {
    const bridgeAddress = await getBridgeAddressFromValidator(event.log.address)
    const bridgeId = ids.bridge(context, bridgeAddress)
    const transactionId = ids.transaction(context, event.transaction.hash)
    latestSigEventsUnderBridge.set(bridgeId, event.args.requiredSignatures)
    await Promise.all([
      upsertBridge(context, bridgeAddress),
      upsertBlock(context, event.block),
      upsertTransaction(context, event.transaction),
      context.db
        .insert(RequiredSignaturesChange)
        .values({
          orderId: orderId(context, event),
          bridgeId,
          requiredSignatures: event.args.requiredSignatures,
          transactionId,
          logIndex: event.log.logIndex,
        })
        .onConflictDoNothing(),
    ])
  },
)

const latestSigEventsUnderBridge = new Map<Hex, bigint>()

const getLatestRequiredSignatures = async (
  context: Context,
  bridgeId: Hex,
  targetOrderId: Hex,
  validatorAddress: Hex,
) => {
  const latestSigEventUnderBridge = latestSigEventsUnderBridge.get(bridgeId)
  if (latestSigEventUnderBridge) {
    return latestSigEventUnderBridge
  }
  const latestSigEvents = await context.db.sql
    .select({
      requiredSignatures: PonderCore.sql`required_signatures`,
    })
    .from(RequiredSignaturesChange)
    .where(
      PonderCore.and(
        PonderCore.eq(RequiredSignaturesChange.bridgeId, bridgeId),
        PonderCore.lt(RequiredSignaturesChange.orderId, targetOrderId),
      ),
    )
    .orderBy(PonderCore.desc(RequiredSignaturesChange.orderId))
    .limit(1)
  if (!latestSigEvents.length) {
    // probably a reorg
    const requiredSignatures = await context.client.readContract({
      address: validatorAddress,
      abi: BaseBridgeValidatorsAbi,
      functionName: 'requiredSignatures',
    })
    latestSigEvents.push({
      requiredSignatures: requiredSignatures,
    })
    console.log(
      'No latest signatures event found',
      context.network.chainId,
      bridgeId,
      targetOrderId,
    )
  }
  const [latest] = latestSigEvents
  const required = latest?.requiredSignatures as number
  const requiredBigInt = BigInt(required)
  latestSigEventsUnderBridge.set(bridgeId, requiredBigInt)
  return requiredBigInt
}

ponder.on(
  'ForeignAMB:UserRequestForAffirmation',
  async ({ event, context }) => {
    const parsed = parseAMBMessage(
      event.transaction.from,
      event.args.encodedData,
    )
    const bridgeId = ids.bridge(context, event.log.address)
    const blockId = ids.block(context, event.block.hash)
    const transactionId = ids.transaction(context, event.transaction.hash)
    const targetOrderId = orderId(context, event)
    const validatorAddress = await getValidatorAddressFromBridge(
      event.log.address,
    )
    await Promise.all([
      upsertBlock(context, event.block),
      upsertTransaction(context, event.transaction),
      upsertBridge(context, event.log.address),
      context.db.insert(ReverseMessageHashBinding).values({
        messageHash: parsed.messageHash,
        bridgeId,
        messageId: event.args.messageId,
      }),
      getLatestRequiredSignatures(
        context,
        bridgeId,
        targetOrderId,
        validatorAddress,
      ).then((requiredSignatures) =>
        context.db
          .insert(UserRequestForAffirmation)
          .values({
            bridgeId,
            blockId,
            transactionId,
            requiredSignatures,
            messageHash: parsed.messageHash,
            from: parsed.from,
            to: parsed.to,
            amount: parsed.nestedData.amount,
            messageId: event.args.messageId,
            encodedData: event.args.encodedData,
            logIndex: event.log.logIndex,
            originationChainId: parsed.originationChainId,
            destinationChainId: parsed.destinationChainId,
            orderId: targetOrderId,
            confirmedSignatures: 0n,
            finishedSigning: false,
          })
          .onConflictDoNothing(),
      ),
    ])
  },
)

ponder.on('HomeAMB:UserRequestForSignature', async ({ event, context }) => {
  const bridgeId = ids.bridge(context, event.log.address)
  const blockId = ids.block(context, event.block.hash)
  const transactionId = ids.transaction(context, event.transaction.hash)
  const parsed = parseAMBMessage(event.transaction.from, event.args.encodedData)
  const targetOrderId = orderId(context, event)
  const validatorAddress = await getValidatorAddressFromBridge(
    event.log.address,
  )
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.transaction),
    upsertBridge(context, event.log.address),
    context.db.insert(ReverseMessageHashBinding).values({
      messageHash: parsed.messageHash,
      bridgeId,
      messageId: event.args.messageId,
    }),
    parsed.feeDirector
      ? context.db
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
      : null,
    getLatestRequiredSignatures(
      context,
      bridgeId,
      targetOrderId,
      validatorAddress,
    ).then((requiredSignatures) =>
      context.db
        .insert(UserRequestForSignature)
        .values({
          bridgeId,
          blockId,
          transactionId,
          requiredSignatures,
          amount: parsed.nestedData.amount,
          messageId: event.args.messageId,
          from: parsed.from,
          encodedData: event.args.encodedData,
          messageHash: parsed.messageHash,
          to: parsed.to,
          logIndex: event.log.logIndex,
          originationChainId: parsed.originationChainId,
          destinationChainId: parsed.destinationChainId,
          orderId: targetOrderId,
          confirmedSignatures: 0n,
          finishedSigning: false,
        })
        .onConflictDoNothing(),
    ),
  ])
})

ponder.on('HomeAMB:SignedForAffirmation', async ({ event, context }) => {
  const messageHash = event.args.messageHash
  const bridgeId = ids.bridge(context, event.log.address)
  const validatorId = ids.validator(bridgeId, event.args.signer)
  const blockId = ids.block(context, event.block.hash)
  const transactionId = ids.transaction(context, event.transaction.hash)
  const messageInfo = await context.db.find(ReverseMessageHashBinding, {
    messageHash,
  })
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.transaction),
    upsertBridge(context, event.log.address),
    context.db
      .update(UserRequestForAffirmation, {
        messageId: messageInfo!.messageId,
      })
      .set((row) => ({
        confirmedSignatures: row.confirmedSignatures + 1n,
        finishedSigning:
          row.confirmedSignatures + 1n === row.requiredSignatures,
      })),
    context.db
      .insert(SignedForAffirmation)
      .values({
        id: ids.signature(messageHash, validatorId),
        blockId,
        transactionId,
        messageHash,
        validatorId,
        logIndex: event.log.logIndex,
        orderId: orderId(context, event),
      })
      .onConflictDoNothing(),
  ])
})

ponder.on('HomeAMB:SignedForUserRequest', async ({ event, context }) => {
  const messageHash = event.args.messageHash
  const bridgeId = ids.bridge(context, event.log.address)
  const validatorId = ids.validator(bridgeId, event.args.signer)
  const blockId = ids.block(context, event.block.hash)
  const transactionId = ids.transaction(context, event.transaction.hash)
  const messageInfo = await context.db.find(ReverseMessageHashBinding, {
    messageHash,
  })
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.transaction),
    upsertBridge(context, event.log.address),
    context.db
      .update(UserRequestForSignature, {
        messageId: messageInfo!.messageId,
      })
      .set((row) => ({
        confirmedSignatures: row.confirmedSignatures + 1n,
        finishedSigning:
          row.confirmedSignatures + 1n === row.requiredSignatures,
      })),
    context.db
      .insert(SignedForUserRequest)
      .values({
        id: ids.signature(messageHash, validatorId),
        blockId,
        transactionId,
        messageHash,
        validatorId,
        logIndex: event.log.logIndex,
        orderId: orderId(context, event),
      })
      .onConflictDoNothing(),
  ])
})

ponder.on('HomeAMB:AffirmationCompleted', async ({ event, context }) => {
  const transactionId = ids.transaction(context, event.transaction.hash)
  const userRequestForAffirmation = await context.db.find(
    UserRequestForAffirmation,
    {
      messageId: event.args.messageId,
    },
  )
  if (!userRequestForAffirmation) {
    // probably a reorg
    return
  }
  await Promise.all([
    upsertTransaction(context, event.transaction),
    upsertBlock(context, event.block),
    context.db
      .insert(AffirmationComplete)
      .values({
        transactionId,
        messageHash: userRequestForAffirmation!.messageHash,
        deliverer: event.transaction.from,
        logIndex: event.log.logIndex,
        orderId: orderId(context, event),
      })
      .onConflictDoNothing(),
  ])
})

ponder.on('ForeignAMB:RelayedMessage', async ({ event, context }) => {
  const transactionId = ids.transaction(context, event.transaction.hash)
  const userRequestForSignature = await context.db.find(
    UserRequestForSignature,
    {
      messageId: event.args.messageId,
    },
  )
  if (!userRequestForSignature) {
    // probably a reorg
    return
  }
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.transaction),
    context.db
      .insert(RelayMessage)
      .values({
        transactionId,
        messageHash: userRequestForSignature.messageHash,
        deliverer: event.transaction.from,
        logIndex: event.log.logIndex,
        orderId: orderId(context, event),
      })
      .onConflictDoNothing(),
  ])
})
