import { Context, ponder } from '@/generated'
import * as PonderCore from '@ponder/core'
// import { Block } from "viem";
import {
  AffirmationComplete,
  Block,
  Bridge,
  RelayMessage,
  RequiredSignatureChange,
  SignedForAffirmation,
  SignedForUserRequest,
  Transaction,
  UserRequestForAffirmation,
  UserRequestForSignature,
  ValidatorStatus,
} from '../ponder.schema'
import { concatHex, type Hex, keccak256, numberToHex } from 'viem'
import { parseAMBMessage } from './message'
import { eq, sql } from '@ponder/core'
import {
  bridgeValidatorCache,
  getBridgeAddressFromValidator,
  ids,
} from './utils'

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
    .onConflictDoNothing()
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
    .onConflictDoNothing()
}

const getRequiredSignatures = async (context: Context, bridgeAddress: Hex) => {
  const bridgeId = ids.bridge(context, bridgeAddress)
  // console.log('sig check', bridgeAddress, bridgeId)
  return await context.db.sql.query.RequiredSignatureChange.findFirst({
    where: (table, { eq }) => eq(table.bridgeId, bridgeId),
    orderBy: (table, { desc }) => desc(table.orderId),
  })
}

// const infoFromAddress = (chainId: number, address: Hex) => {
//   return {
//     provider: 'pulsechain',
//     side: 'home',
//   }
// }

const upsertBridge = async (context: Context, address: Hex) => {
  return await context.db
    .insert(Bridge)
    .values({
      bridgeId: ids.bridge(context, address),
      chainId: context.network.chainId.toString(),
      address,
      provider: 'pulsechain',
      side: 'home',
    })
    .onConflictDoNothing()
}

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
        RequiredSignatureChange,
        eq(RequiredSignatureChange.bridgeId, bridgeId),
      )) || 0
    await context.db
      .insert(RequiredSignatureChange)
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
    const block = await upsertBlock(context, event.block)
    const transaction = await upsertTransaction(context, event.transaction)
    const latestRequiredSignatures = await getRequiredSignatures(
      context,
      event.log.address,
    )
    const parsed = parseAMBMessage(event.args.encodedData)
    await context.db
      .insert(UserRequestForAffirmation)
      .values({
        blockId: block.blockId,
        transactionId: transaction.transactionId,
        messageHash: parsed.messageHash,
        from: parsed.from,
        to: parsed.to,
        amount: parsed.nestedData.amount,
        messageId: event.args.messageId,
        encodedData: event.args.encodedData,
        encounteredSignatures: 0,
        requiredSignatures: latestRequiredSignatures!.requiredSignatures,
        logIndex: event.log.logIndex,
      })
      .onConflictDoNothing()
  },
)

ponder.on('HomeAMB:UserRequestForSignature', async ({ event, context }) => {
  const block = await upsertBlock(context, event.block)
  const transaction = await upsertTransaction(context, event.transaction)
  const latestRequiredSignatures = await getRequiredSignatures(
    context,
    event.log.address,
  )
  const parsed = parseAMBMessage(event.args.encodedData)
  await context.db.insert(UserRequestForSignature).values({
    blockId: block.blockId,
    transactionId: transaction.transactionId,
    requiredSignatures: latestRequiredSignatures!.requiredSignatures,
    amount: parsed.nestedData.amount,
    messageId: event.args.messageId,
    from: parsed.sender,
    encodedData: event.args.encodedData,
    messageHash: parsed.messageHash,
    to: parsed.to,
    encounteredSignatures: 0,
    logIndex: event.log.logIndex,
  })
})

ponder.on('HomeAMB:SignedForAffirmation', async ({ event, context }) => {
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
  })
  await context.db
    .update(UserRequestForAffirmation, {
      messageHash,
    })
    .set((row) => ({ encounteredSignatures: row.encounteredSignatures + 1 }))
})

ponder.on('HomeAMB:SignedForUserRequest', async ({ event, context }) => {
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
  })
  await context.db
    .update(UserRequestForSignature, {
      messageHash,
    })
    .set((row) => ({ encounteredSignatures: row.encounteredSignatures + 1 }))
})

ponder.on('HomeAMB:AffirmationCompleted', async ({ event, context }) => {
  await upsertBlock(context, event.block)
  const transaction = await upsertTransaction(context, event.transaction)
  const userRequestForAffirmation =
    await context.db.sql.query.UserRequestForAffirmation.findFirst({
      where: (table, { eq }) => eq(table.messageId, event.args.messageId),
    })
  // const messageHash = event.args.messageHash
  await context.db.insert(AffirmationComplete).values({
    transactionId: transaction.transactionId,
    messageHash: userRequestForAffirmation!.messageHash,
    deliverer: event.transaction.from,
    logIndex: event.log.logIndex,
  })
})

ponder.on('ForeignAMB:RelayedMessage', async ({ event, context }) => {
  await upsertBlock(context, event.block)
  const transaction = await upsertTransaction(context, event.transaction)
  const userRequestForSignature =
    await context.db.sql.query.UserRequestForSignature.findFirst({
      where: (table, { eq }) => eq(table.messageId, event.args.messageId),
    })
  await context.db.insert(RelayMessage).values({
    transactionId: transaction.transactionId,
    messageHash: userRequestForSignature!.messageHash,
    deliverer: event.transaction.from,
    logIndex: event.log.logIndex,
  })
})
