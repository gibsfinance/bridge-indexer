import { Context, ponder } from '@/generated'
// import {
//   AffirmationComplete,
//   Block,
//   BridgeSide,
//   FeeDirector,
//   LatestRequiredSignaturesChanged,
//   RelayMessage,
//   RequiredSignaturesChanged,
//   ReverseMessageHashBinding,
//   SignedForAffirmation,
//   SignedForUserRequest,
//   Transaction,
//   UserRequestForAffirmation,
//   UserRequestForSignature,
//   ValidatorStatus,
// } from '../ponder.schema'
import type { Hex } from 'viem'
import { parseAMBMessage } from './message'
import {
  getBridgeAddressFromValidator,
  ids,
  bridgeInfo,
  orderId,
} from './utils'
import _ from 'lodash'
import * as PonderCore from '@ponder/core'

const upsertBlock = async (context: Context, block: PonderCore.Block) => {
  const blockId = ids.block(context, block.hash)
  if (inMemoryCache.has(`block-${blockId}`)) {
    return inMemoryCache.get(`block-${blockId}`)
  }
  const blockInfo = await context.db.Block.findUnique({
    id: blockId,
  })
  if (blockInfo) {
    inMemoryCache.set(`block-${blockId}`, blockInfo)
    return blockInfo
  }
  const b = await context.db.Block.create({
    id: blockId,
    data: {
      chainId: BigInt(context.network.chainId),
      hash: block.hash,
      number: block.number,
      timestamp: block.timestamp,
      baseFeePerGas: BigInt(block.baseFeePerGas ?? 0),
    },
  })
  inMemoryCache.set(`block-${blockId}`, b)
  return b
}

const upsertTransaction = async (
  context: Context,
  transaction: PonderCore.Transaction,
) => {
  const transactionId = ids.transaction(context, transaction.hash)
  const tx = await context.db.Transaction.findUnique({
    id: transactionId,
  })
  if (tx) {
    return tx
  }
  return await context.db.Transaction.create({
    id: transactionId,
    data: {
      blockId: ids.block(context, transaction.blockHash),
      hash: transaction.hash,
      index: BigInt(transaction.transactionIndex),
      from: transaction.from,
      to: transaction.to!,
      value: transaction.value,
    },
  })
}

const upsertBridge = async (context: Context, address: Hex) => {
  const info = bridgeInfo(address)
  const bridgeId = ids.bridge(context, address)
  if (inMemoryCache.has(`bridge-${bridgeId}`)) {
    return inMemoryCache.get(`bridge-${bridgeId}`)
  }
  const bridgeSide = await context.db.BridgeSide.findUnique({
    id: bridgeId,
  })
  if (bridgeSide) {
    inMemoryCache.set(`bridge-${bridgeId}`, bridgeSide)
    return bridgeSide
  }

  const b = await context.db.BridgeSide.create({
    id: bridgeId,
    data: {
      chainId: BigInt(context.network.chainId),
      address: info!.address,
      provider: info!.provider,
      side: info!.side,
    },
  })
  inMemoryCache.set(`bridge-${bridgeId}`, b)
  return b
}

ponder.on('ValidatorContract:ValidatorAdded', async ({ event, context }) => {
  console.log('validator added', event.args.validator)
  const bridgeAddress = await getBridgeAddressFromValidator(event.log.address)
  const bridgeId = ids.bridge(context, bridgeAddress)
  const validatorId = ids.validator(bridgeId, event.args.validator)
  const eventOrderId = orderId(context, event)
  const blockId = ids.block(context, event.block.hash)
  const transactionId = ids.transaction(context, event.transaction.hash)
  await Promise.all([
    upsertBridge(context, bridgeAddress),
    upsertBlock(context, event.block),
    upsertTransaction(context, event.transaction),
    context.db.ValidatorStatusUpdate.create({
      id: eventOrderId,
      data: {
        bridgeId,
        validatorId,
        blockId,
        address: event.args.validator,
        active: true,
        transactionId,
        logIndex: event.log.logIndex,
      },
    }),
    context.db.LatestValidatorStatusUpdate.upsert({
      id: validatorId,
      create: {
        orderId: eventOrderId,
        bridgeId,
      },
      update: {
        orderId: eventOrderId,
      },
    }),
  ])
})

ponder.on('ValidatorContract:ValidatorRemoved', async ({ event, context }) => {
  console.log('validator removed', event.args.validator)
  const bridgeAddress = await getBridgeAddressFromValidator(event.log.address)
  const blockId = ids.block(context, event.block.hash)
  const bridgeId = ids.bridge(context, bridgeAddress)
  const validatorId = ids.validator(bridgeId, event.args.validator)
  const transactionId = ids.transaction(context, event.transaction.hash)
  const eventOrderId = orderId(context, event)
  await Promise.all([
    upsertBridge(context, bridgeAddress),
    upsertTransaction(context, event.transaction),
    upsertBlock(context, event.block),
    context.db.ValidatorStatusUpdate.create({
      id: eventOrderId,
      data: {
        bridgeId,
        validatorId,
        blockId,
        address: event.args.validator,
        active: false,
        transactionId,
        logIndex: event.log.logIndex,
      },
    }),
    context.db.LatestValidatorStatusUpdate.upsert({
      id: validatorId,
      create: {
        orderId: eventOrderId,
        bridgeId,
      },
      update: {
        orderId: eventOrderId,
      },
    }),
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
      context.db.LatestRequiredSignaturesChanged.upsert({
        id: bridgeId,
        create: {
          orderId: eventOrderId,
          value: event.args.requiredSignatures,
        },
        update: {
          orderId: eventOrderId,
          value: event.args.requiredSignatures,
        },
      }),
      context.db.RequiredSignaturesChanged.create({
        id: eventOrderId,
        data: {
          bridgeId,
          value: event.args.requiredSignatures,
          transactionId,
          logIndex: event.log.logIndex,
        },
      }),
    ])
  },
)

const inMemoryCache = new Map<string, any>()

const getLatestRequiredSignatures = async (
  context: Context,
  bridgeId: Hex,
  event: any,
) => {
  if (inMemoryCache.has(`latest-required-sigs-${bridgeId}`)) {
    return inMemoryCache.get(`latest-required-sigs-${bridgeId}`)
  }
  const latest = await context.db.LatestRequiredSignaturesChanged.findUnique({
    id: bridgeId,
  })
  if (!latest) {
    if (context.network.chainId === 56) {
      console.log(context.network.chainId, event.transaction.hash)
      // this backfills data that is missed because some bridges were not deployed correctly
      const [_latest, current] = await Promise.all([
        context.db.LatestRequiredSignaturesChanged.create({
          id: bridgeId,
          data: {
            orderId: orderId(context, event),
            value: 3n,
          },
        }),
        context.db.RequiredSignaturesChanged.create({
          id: orderId(context, event),
          data: {
            bridgeId,
            value: 3n,
            transactionId: ids.transaction(context, event.transaction.hash),
            logIndex: event.log.logIndex,
          },
        }),
        upsertTransaction(context, event.transaction),
        upsertBlock(context, event.block),
      ])
      inMemoryCache.set(`latest-required-sigs-${bridgeId}`, current)
      return current
    } else {
      throw new Error('no latest required signatures')
    }
  }
  const requiredSignatures =
    await context.db.RequiredSignaturesChanged.findUnique({
      id: latest!.orderId!,
    })
  if (!requiredSignatures) {
    throw new Error('impossible state')
  }
  inMemoryCache.set(`latest-required-sigs-${bridgeId}`, requiredSignatures)
  return requiredSignatures
}

const getOutstandingMessageIdByHash = async (
  context: Context,
  messageHash: Hex,
) => {
  if (inMemoryCache.has(`outstanding-message-id-${messageHash}`)) {
    return inMemoryCache.get(`outstanding-message-id-${messageHash}`)
  }
  const binding = await context.db.ReverseMessageHashBinding.findUnique({
    id: messageHash,
  })
  return binding as { userRequestId: Hex }
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
      context.db.ReverseMessageHashBinding.create({
        id: parsed.messageHash,
        data: {
          bridgeId,
          userRequestId: event.args.messageId,
        },
      }),
      getLatestRequiredSignatures(context, bridgeId, event).then(
        (requiredSignatures) =>
          context.db.UserRequestForAffirmation.create({
            id: event.args.messageId,
            data: {
              bridgeId,
              blockId,
              transactionId,
              requiredSignatureId: requiredSignatures.id,
              messageHash: parsed.messageHash,
              from: parsed.from,
              to: parsed.to,
              amount: parsed.nestedData.amount,
              encodedData: event.args.encodedData,
              logIndex: event.log.logIndex,
              originationChainId: parsed.originationChainId,
              destinationChainId: parsed.destinationChainId,
              orderId: targetOrderId,
              confirmedSignatures: 0n,
              finishedSigning: false,
            },
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
    context.db.ReverseMessageHashBinding.create({
      id: parsed.messageHash,
      data: {
        bridgeId,
        userRequestId: event.args.messageId,
      },
    }),
    parsed.feeDirector
      ? context.db.FeeDirector.create({
          id: event.args.messageId,
          data: {
            userRequestId: event.args.messageId,
            recipient: parsed.feeDirector.recipient,
            settings: parsed.feeDirector.settings,
            limit: parsed.feeDirector.limit,
            multiplier: parsed.feeDirector.multiplier,
            feeType: parsed.feeDirector.feeType,
            unwrapped: parsed.feeDirector.unwrapped,
            excludePriority: parsed.feeDirector.excludePriority,
          },
        })
      : null,
    getLatestRequiredSignatures(context, bridgeId, event).then(
      (requiredSignatures) =>
        context.db.UserRequestForSignature.create({
          id: event.args.messageId,
          data: {
            feeDirectorId: parsed.feeDirector
              ? event.args.messageId
              : undefined,
            bridgeId,
            blockId,
            transactionId,
            requiredSignatureId: requiredSignatures.id,
            amount: parsed.nestedData.amount,
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
          },
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
      getOutstandingMessageIdByHash(context, messageHash),
    ]).then(([requiredSignatures, messageInfo]) =>
      Promise.all([
        context.db.UserRequestForAffirmation.update({
          id: messageInfo!.userRequestId,
          data: ({ current: row }) => {
            const confirmedSignatures = row.confirmedSignatures + 1n
            const finishedSigning =
              confirmedSignatures === requiredSignatures.value
            if (finishedSigning) {
              inMemoryCache.delete(`outstanding-message-id-${messageHash}`)
            }
            return {
              confirmedSignatures: row.confirmedSignatures + 1n,
              finishedSigning,
            }
          },
        }),
        context.db.SignedForAffirmation.create({
          id: ids.signature(messageHash, validatorId),
          data: {
            blockId,
            transactionId,
            messageHash,
            validatorId,
            logIndex: event.log.logIndex,
            orderId: orderId(context, event),
            bridgeId,
            userRequestId: messageInfo!.userRequestId,
            deliveryId: messageInfo!.userRequestId,
          },
        }),
      ]),
    ),
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
      getOutstandingMessageIdByHash(context, messageHash),
    ]).then(([requiredSignatures, messageInfo]) =>
      Promise.all([
        context.db.UserRequestForSignature.update({
          id: messageInfo!.userRequestId,
          data: ({ current: row }) => {
            const confirmedSignatures = row.confirmedSignatures + 1n
            const finishedSigning =
              confirmedSignatures === requiredSignatures.value
            if (finishedSigning) {
              inMemoryCache.delete(`outstanding-message-id-${messageHash}`)
            }
            return {
              confirmedSignatures,
              finishedSigning,
            }
          },
        }),
        context.db.SignedForUserRequest.create({
          id: ids.signature(messageHash, validatorId),
          data: {
            blockId,
            transactionId,
            messageHash,
            validatorId,
            logIndex: event.log.logIndex,
            orderId: orderId(context, event),
            bridgeId,
            userRequestId: messageInfo!.userRequestId,
            deliveryId: messageInfo!.userRequestId,
          },
        }),
      ]),
    ),
  ])
})

ponder.on('HomeAMB:AffirmationCompleted', async ({ event, context }) => {
  const transactionId = ids.transaction(context, event.transaction.hash)
  const blockId = ids.block(context, event.block.hash)
  const userRequestForAffirmation =
    await context.db.UserRequestForAffirmation.findUnique({
      id: event.args.messageId,
    })
  await Promise.all([
    upsertTransaction(context, event.transaction),
    upsertBlock(context, event.block),
    context.db.AffirmationComplete.create({
      id: event.args.messageId,
      data: {
        transactionId,
        blockId,
        messageHash: userRequestForAffirmation!.messageHash,
        deliverer: event.transaction.from,
        logIndex: event.log.logIndex,
        orderId: orderId(context, event),
        userRequestId: userRequestForAffirmation!.id,
      },
    }),
  ])
})

ponder.on('ForeignAMB:RelayedMessage', async ({ event, context }) => {
  const transactionId = ids.transaction(context, event.transaction.hash)
  const blockId = ids.block(context, event.block.hash)
  const userRequestForSignature =
    await context.db.UserRequestForSignature.findUnique({
      id: event.args.messageId,
    })
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.transaction),
    context.db.RelayMessage.create({
      id: event.args.messageId,
      data: {
        transactionId,
        blockId,
        messageHash: userRequestForSignature!.messageHash,
        deliverer: event.transaction.from,
        logIndex: event.log.logIndex,
        orderId: orderId(context, event),
        userRequestId: userRequestForSignature!.id,
      },
    }),
  ])
})
