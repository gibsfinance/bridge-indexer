import { Context, ponder } from '@/generated'
import * as PonderCore from '@ponder/core'
import {
  AffirmationComplete,
  Block,
  BridgeSide,
  FeeDirector,
  LatestRequiredSignaturesChanged,
  RelayMessage,
  RequiredSignaturesChanged,
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
import {
  getBridgeAddressFromValidator,
  ids,
  bridgeInfo,
  orderId,
} from './utils'
import _ from 'lodash'

const upsertBlock = async (context: Context, block: PonderCore.Block) => {
  const blockId = ids.block(context, block.hash)
  const blockInfo = await context.db.find(Block, {
    blockId,
  })
  if (blockInfo) {
    return blockInfo
  }
  return await context.db.insert(Block).values({
    blockId: ids.block(context, block.hash),
    chainId: context.network.chainId.toString(),
    hash: block.hash,
    number: block.number,
    timestamp: block.timestamp,
    baseFeePerGas: block.baseFeePerGas,
  })
}

const upsertTransaction = async (
  context: Context,
  transaction: PonderCore.Transaction,
) => {
  const transactionId = ids.transaction(context, transaction.hash)
  const tx = await context.db.find(Transaction, {
    transactionId,
  })
  if (tx) {
    return tx
  }
  return await context.db.insert(Transaction).values({
    transactionId: transactionId,
    blockId: ids.block(context, transaction.blockHash),
    hash: transaction.hash,
    index: transaction.transactionIndex.toString(),
    from: transaction.from,
    to: transaction.to!,
    value: transaction.value,
  })
}

const upsertBridge = async (context: Context, address: Hex) => {
  const info = bridgeInfo(address)
  const bridgeSide = await context.db.find(BridgeSide, {
    bridgeId: ids.bridge(context, address),
  })
  if (bridgeSide) {
    return bridgeSide
  }
  return await context.db.insert(BridgeSide).values({
    bridgeId: ids.bridge(context, address),
    chainId: context.network.chainId.toString(),
    address: info!.address,
    provider: info!.provider,
    side: info!.side,
  })
}

ponder.on('ValidatorContract:ValidatorAdded', async ({ event, context }) => {
  console.log('validator added', event.args.validator)
  const bridgeAddress = await getBridgeAddressFromValidator(event.log.address)
  const bridge = await upsertBridge(context, bridgeAddress)
  const validatorId = ids.validator(bridge.bridgeId, event.args.validator)
  const eventOrderId = orderId(context, event)
  const [_block, tx, existing] = await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.transaction),
    context.db.find(ValidatorStatus, {
      validatorId,
      orderId: eventOrderId,
    }),
  ])
  if (existing) {
    return
  }
  await context.db.insert(ValidatorStatus).values({
    validatorId,
    orderId: eventOrderId,
    bridgeId: bridge.bridgeId,
    address: event.args.validator,
    active: true,
    transactionId: tx.transactionId,
    logIndex: event.log.logIndex,
  })
})

ponder.on('ValidatorContract:ValidatorRemoved', async ({ event, context }) => {
  console.log('validator removed', event.args.validator)
  const bridgeAddress = await getBridgeAddressFromValidator(event.log.address)
  const bridgeId = ids.bridge(context, bridgeAddress)
  const transactionId = ids.transaction(context, event.transaction.hash)
  const validatorId = ids.validator(bridgeId, event.args.validator)
  const eventOrderId = orderId(context, event)
  await Promise.all([
    upsertBridge(context, bridgeAddress),
    upsertBlock(context, event.block),
    upsertTransaction(context, event.transaction),
    context.db
      .find(ValidatorStatus, {
        validatorId,
        orderId: eventOrderId,
      })
      .then((existing) =>
        existing
          ? null
          : context.db.insert(ValidatorStatus).values({
              validatorId,
              orderId: eventOrderId,
              bridgeId,
              address: event.args.validator,
              active: false,
              transactionId,
              logIndex: event.log.logIndex,
            }),
      ),
  ])
})

ponder.on(
  'ValidatorContract:RequiredSignaturesChanged',
  async ({ event, context }) => {
    console.log('sig changed', event.args.requiredSignatures)
    const bridgeAddress = await getBridgeAddressFromValidator(event.log.address)
    const bridgeId = ids.bridge(context, bridgeAddress)
    const transactionId = ids.transaction(context, event.transaction.hash)
    const eventOrderId = orderId(context, event)
    await Promise.all([
      upsertBridge(context, bridgeAddress),
      upsertBlock(context, event.block),
      upsertTransaction(context, event.transaction),
      context.db
        .delete(LatestRequiredSignaturesChanged, {
          bridgeId,
        })
        .then(() =>
          context.db.insert(LatestRequiredSignaturesChanged).values({
            bridgeId,
            orderId: eventOrderId,
            value: event.args.requiredSignatures,
          }),
        ),
      context.db.insert(RequiredSignaturesChanged).values({
        orderId: eventOrderId,
        bridgeId,
        value: event.args.requiredSignatures,
        transactionId,
        logIndex: event.log.logIndex,
      }),
    ])
  },
)

const getLatestRequiredSignatures = async (
  context: Context,
  bridgeId: Hex,
  event: any,
) => {
  const latest = await context.db.find(LatestRequiredSignaturesChanged, {
    bridgeId,
  })
  if (!latest) {
    if (context.network.chainId === 56) {
      console.log(context.network.chainId, event.transaction.hash)
      const [_latest, current] = await Promise.all([
        context.db.insert(LatestRequiredSignaturesChanged).values({
          bridgeId,
          orderId: orderId(context, event),
          value: 3n,
        }),
        context.db.insert(RequiredSignaturesChanged).values({
          orderId: orderId(context, event),
          bridgeId,
          value: 3n,
          transactionId: ids.transaction(context, event.transaction.hash),
          logIndex: event.log.logIndex,
        }),
        upsertTransaction(context, event.transaction),
        upsertBlock(context, event.block),
      ])
      return current
    } else {
      throw new Error('no latest required signatures')
    }
  }
  const requiredSignatures = await context.db.find(RequiredSignaturesChanged, {
    orderId: latest!.orderId!,
  })
  if (!requiredSignatures) {
    throw new Error('impossible state')
  }
  return requiredSignatures
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
    await Promise.all([
      upsertBlock(context, event.block),
      upsertTransaction(context, event.transaction),
      upsertBridge(context, event.log.address),
      context.db.insert(ReverseMessageHashBinding).values({
        messageHash: parsed.messageHash,
        bridgeId,
        messageId: event.args.messageId,
      }),
      getLatestRequiredSignatures(context, bridgeId, event).then(
        (requiredSignatures) =>
          context.db.insert(UserRequestForAffirmation).values({
            bridgeId,
            blockId,
            transactionId,
            requiredSignatureId: requiredSignatures.orderId,
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
          }),
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
      ? context.db.insert(FeeDirector).values({
          messageId: event.args.messageId,
          recipient: parsed.feeDirector.recipient,
          settings: parsed.feeDirector.settings,
          limit: parsed.feeDirector.limit,
          multiplier: parsed.feeDirector.multiplier,
          feeType: parsed.feeDirector.feeType,
          unwrapped: parsed.feeDirector.unwrapped,
          excludePriority: parsed.feeDirector.excludePriority,
        })
      : null,
    getLatestRequiredSignatures(context, bridgeId, event).then(
      (requiredSignatures) =>
        context.db.insert(UserRequestForSignature).values({
          bridgeId,
          blockId,
          transactionId,
          requiredSignatureId: requiredSignatures.orderId,
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
        }),
    ),
  ])
})

ponder.on('HomeAMB:SignedForAffirmation', async ({ event, context }) => {
  const messageHash = event.args.messageHash
  const bridgeId = ids.bridge(context, event.log.address)
  const validatorId = ids.validator(bridgeId, event.args.signer)
  const blockId = ids.block(context, event.block.hash)
  const transactionId = ids.transaction(context, event.transaction.hash)
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.transaction),
    upsertBridge(context, event.log.address),
    Promise.all([
      getLatestRequiredSignatures(context, bridgeId, event),
      context.db.find(ReverseMessageHashBinding, {
        messageHash,
      }),
    ]).then(([requiredSignatures, messageInfo]) =>
      context.db
        .update(UserRequestForAffirmation, {
          messageId: messageInfo!.messageId,
        })
        .set((row) => ({
          confirmedSignatures: row.confirmedSignatures + 1n,
          finishedSigning:
            row.confirmedSignatures + 1n === requiredSignatures.value,
        })),
    ),
    context.db.insert(SignedForAffirmation).values({
      id: ids.signature(messageHash, validatorId),
      blockId,
      transactionId,
      messageHash,
      validatorId,
      logIndex: event.log.logIndex,
      orderId: orderId(context, event),
    }),
  ])
})

ponder.on('HomeAMB:SignedForUserRequest', async ({ event, context }) => {
  const messageHash = event.args.messageHash
  const bridgeId = ids.bridge(context, event.log.address)
  const validatorId = ids.validator(bridgeId, event.args.signer)
  const blockId = ids.block(context, event.block.hash)
  const transactionId = ids.transaction(context, event.transaction.hash)
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.transaction),
    upsertBridge(context, event.log.address),
    Promise.all([
      getLatestRequiredSignatures(context, bridgeId, event),
      context.db.find(ReverseMessageHashBinding, {
        messageHash,
      }),
    ]).then(([requiredSignatures, messageInfo]) =>
      context.db
        .update(UserRequestForSignature, {
          messageId: messageInfo!.messageId,
        })
        .set((row) => ({
          confirmedSignatures: row.confirmedSignatures + 1n,
          finishedSigning:
            row.confirmedSignatures + 1n === requiredSignatures.value,
        })),
    ),
    context.db.insert(SignedForUserRequest).values({
      id: ids.signature(messageHash, validatorId),
      blockId,
      transactionId,
      messageHash,
      validatorId,
      logIndex: event.log.logIndex,
      orderId: orderId(context, event),
    }),
  ])
})

ponder.on('HomeAMB:AffirmationCompleted', async ({ event, context }) => {
  const transactionId = ids.transaction(context, event.transaction.hash)
  const userRequestForAffirmation = (await context.db.find(
    UserRequestForAffirmation,
    {
      messageId: event.args.messageId,
    },
  ))!
  await Promise.all([
    upsertTransaction(context, event.transaction),
    upsertBlock(context, event.block),
    context.db.insert(AffirmationComplete).values({
      transactionId,
      messageHash: userRequestForAffirmation.messageHash,
      deliverer: event.transaction.from,
      logIndex: event.log.logIndex,
      orderId: orderId(context, event),
    }),
  ])
})

ponder.on('ForeignAMB:RelayedMessage', async ({ event, context }) => {
  const transactionId = ids.transaction(context, event.transaction.hash)
  const userRequestForSignature = (await context.db.find(
    UserRequestForSignature,
    {
      messageId: event.args.messageId,
    },
  ))!
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.transaction),
    context.db.insert(RelayMessage).values({
      transactionId,
      messageHash: userRequestForSignature.messageHash,
      deliverer: event.transaction.from,
      logIndex: event.log.logIndex,
      orderId: orderId(context, event),
    }),
  ])
})
