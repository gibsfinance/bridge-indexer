import { Context, ponder } from '@/generated'
import {
  Chain,
  createPublicClient,
  getContract,
  keccak256,
  Prettify,
  PublicClient,
  type Hex,
} from 'viem'
import { parseAMBMessage } from './message'
import {
  getBridgeAddressFromValidator,
  ids,
  bridgeInfo,
  orderId,
  toTransport,
  Providers,
  ChainId,
  pathways,
  staticRequiredSignatures,
} from './utils'
import _ from 'lodash'
import * as PonderCore from '@ponder/core'
import { Provider } from './utils'
import { bsc, mainnet, pulsechain, pulsechainV4, sepolia } from 'viem/chains'
import ForeignAMB from '../abis/ForeignAMB'

const upsertBlock = async (context: Context, block: PonderCore.Block) => {
  const blockId = ids.block(context, block.hash)
  // should only be looking at 1 block at a time, so this should save us some back and forth
  const memoryBlock = inMemoryCache.get(`block-${context.network.chainId}`)
  if (memoryBlock) {
    if (memoryBlock.blockId === blockId) {
      return memoryBlock
    }
  }
  const blockInfo = await context.db.Block.findUnique({
    id: blockId,
  })
  if (blockInfo) {
    inMemoryCache.set(`block-${context.network.chainId}`, blockInfo)
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
  inMemoryCache.set(`block-${context.network.chainId}`, b)
  return b
}

const upsertTransaction = async (
  context: Context,
  transaction: PonderCore.Transaction,
) => {
  const transactionId = ids.transaction(context, transaction.hash)
  return await context.db.Transaction.upsert({
    id: transactionId,
    create: {
      blockId: ids.block(context, transaction.blockHash),
      hash: transaction.hash,
      index: BigInt(transaction.transactionIndex),
      from: transaction.from,
      to: transaction.to!,
      value: transaction.value,
      gas: transaction.gas,
      nonce: BigInt(transaction.nonce),
      maxFeePerGas: transaction.maxFeePerGas,
      maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
      gasPrice: transaction.gasPrice,
    },
    update: {},
  })
}

const upsertBridge = async (context: Context, address: Hex) => {
  const bridgeId = ids.bridge(context, address)
  let bridgeSidecached = inMemoryCache.get(`bridge-${bridgeId}`)
  if (bridgeSidecached) {
    return bridgeSidecached
  }
  const bridgeSide = await context.db.BridgeSide.findUnique({
    id: bridgeId,
  })
  if (bridgeSide) {
    inMemoryCache.set(`bridge-${bridgeId}`, bridgeSide)
    return bridgeSide
  }

  const info = bridgeInfo(address)
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
        },
        update: {
          orderId: eventOrderId,
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

setInterval(() => {
  const previousSize = inMemoryCache.size
  let deleted = 0
  for (const k of inMemoryCache.keys()) {
    if (
      deleted < 20_000 &&
      inMemoryCache.size > 10_000 &&
      k.startsWith('outstanding-message-id-')
    ) {
      deleted++
      inMemoryCache.delete(k)
    }
  }
  console.log(
    'inMemoryCache previous=%o size=%o',
    previousSize,
    inMemoryCache.size,
  )
}, 60_000)

type RequiredSigs = {
  id: Hex
  value: bigint
}

const getLatestRequiredSignatures = async (
  context: Context,
  bridgeId: Hex,
  event: any,
) => {
  const req = inMemoryCache.get(
    `latest-required-sigs-${bridgeId}`,
  ) as RequiredSigs
  if (req) {
    return req
  }
  let latest = await context.db.LatestRequiredSignaturesChanged.findUnique({
    id: bridgeId,
  })
  if (!latest) {
    console.log(
      'no latest required signatures found for %o on %o',
      bridgeId,
      context.network.chainId,
    )
    const currentEventId = orderId(context, event)
    const value = staticRequiredSignatures(
      context.network.chainId,
      event.log.address,
    )
    const [l] = await Promise.all([
      context.db.LatestRequiredSignaturesChanged.upsert({
        id: bridgeId,
        create: {
          orderId: currentEventId,
        },
        update: {
          orderId: currentEventId,
        },
      }),
      context.db.RequiredSignaturesChanged.create({
        id: currentEventId,
        data: {
          bridgeId,
          value,
          transactionId: event.transaction.hash,
          logIndex: event.log.logIndex,
        },
      }),
    ])
    latest = l
  }
  const requiredSignatures =
    await context.db.RequiredSignaturesChanged.findUnique({
      id: latest!.orderId!,
    })
  if (!requiredSignatures) {
    throw new Error('impossible state')
  }
  inMemoryCache.set(`latest-required-sigs-${bridgeId}`, requiredSignatures)
  return requiredSignatures as RequiredSigs
}

type SignatureEvent = {
  name: string
  args: {
    signer: Hex
    messageHash: Hex
  }
  log: Prettify<PonderCore.Log>
  block: Prettify<PonderCore.Block>
  transaction: Prettify<PonderCore.Transaction>
}

const getOutstandingMessageIdByHash = async (
  context: Context,
  event: SignatureEvent,
  sameChain: boolean,
): Promise<Hex> => {
  const messageHash = event.args.messageHash
  const cached = inMemoryCache.get(
    `outstanding-message-id-${messageHash}`,
  ) as Hex
  if (cached) {
    return cached
  }
  let binding = await context.db.ReverseMessageHashBinding.findUnique({
    id: messageHash,
  })
  if (!binding) {
    if (sameChain) {
      const {
        items: [affirmation],
      } = await context.db.UserRequestForAffirmation.findMany({
        where: {
          messageHash,
        },
      })
      if (affirmation) {
        binding = {
          id: affirmation.messageHash,
          userRequestId: affirmation.id,
          bridgeId: affirmation.bridgeId,
        }
      } else {
        binding = await loadFromChain(context, event, sameChain)
      }
    } else {
      const {
        items: [signature],
      } = await context.db.UserRequestForSignature.findMany({
        where: {
          messageHash,
        },
      })
      if (signature) {
        binding = {
          id: signature.messageHash,
          userRequestId: signature.id,
          bridgeId: signature.bridgeId,
        }
      } else {
        binding = await loadFromChain(context, event, sameChain)
      }
    }
  }
  inMemoryCache.set(
    `outstanding-message-id-${messageHash}`,
    binding!.userRequestId,
  )
  return binding!.userRequestId
}

const foreignPairing = new Map<Provider, Map<ChainId, Chain>>([
  [
    Providers.PULSECHAIN,
    new Map([
      [369, mainnet as Chain],
      [943, sepolia as Chain],
    ]),
  ],
  [Providers.TOKENSEX, new Map([[369, bsc as Chain]])],
])

const homePairing = new Map<Provider, Map<ChainId, Chain>>([
  [
    Providers.PULSECHAIN,
    new Map([
      [369, pulsechain as Chain],
      [943, pulsechainV4 as Chain],
    ]),
  ],
  [Providers.TOKENSEX, new Map([[369, pulsechain as Chain]])],
])

type URF<T> = {
  name: T
  args: {
    messageId: Hex
    encodedData: Hex
  }
  log: Prettify<PonderCore.Log>
  block: Prettify<PonderCore.Block>
  transaction: Prettify<PonderCore.Transaction>
  transactionReceipt?: never | undefined
}

const loadFromChain = async (
  context: Context,
  event: SignatureEvent,
  sameChain: boolean,
) => {
  const messageHash = event.args.messageHash
  let i = 10
  if (sameChain) {
    // get user request for signature
    const homeChain = homePairing
      .get(Providers.PULSECHAIN)!
      .get(context.network.chainId)!
    const client = createPublicClient({
      chain: homeChain,
      transport: toTransport(homeChain.id as ChainId),
    })
    let matching: URF<'UserRequestForSignature'> | undefined = undefined
    const contract = getContract({
      address: event.log.address,
      abi: context.contracts.HomeAMB.abi,
      client: client as PublicClient,
    })
    let toBlock = event.block.number
    do {
      i--
      const fromBlock = toBlock - 999n
      console.log('checking urfs from %o to %o', fromBlock, toBlock)
      const urfs = await contract.getEvents.UserRequestForSignature(
        {},
        {
          fromBlock: fromBlock,
          toBlock: toBlock,
        },
      )
      toBlock = fromBlock - 1n
      const match = urfs.find(
        (urf) => keccak256(urf.args.encodedData!) === messageHash,
      )
      if (match) {
        const block = (await client.request({
          method: 'eth_getBlockByNumber',
          params: [`0x${match.blockNumber.toString(16)}`, false],
        }))!
        const transaction = (await client.request({
          method: 'eth_getTransactionByHash',
          params: [match.transactionHash],
        }))!
        matching = {
          name: 'UserRequestForSignature',
          args: {
            messageId: match.args.messageId!,
            encodedData: match.args.encodedData!,
          },
          log: {
            id: '',
            ...match,
          },
          block: {
            ...block,
            number: BigInt(block.number || 0),
            difficulty: BigInt(block.difficulty || 0),
            extraData: block.extraData!,
            gasLimit: BigInt(block.gasLimit || 0),
            gasUsed: BigInt(block.gasUsed || 0),
            timestamp: BigInt(block.timestamp || 0),
            size: BigInt(block.size || 0),
          } as Prettify<PonderCore.Block>,
          transaction: {
            ...transaction,
            blockNumber: BigInt(transaction.blockNumber || 0),
            transactionIndex: transaction.transactionIndex || 0,
            gas: BigInt(transaction.gas || 0),
            maxFeePerGas: BigInt(transaction.maxFeePerGas || 0),
            maxPriorityFeePerGas: BigInt(transaction.maxPriorityFeePerGas || 0),
            type:
              transaction.type === '0x0'
                ? 'legacy'
                : transaction.type === '0x1'
                ? 'eip2930'
                : 'eip1559',
            nonce: Number(transaction.nonce || 0),
            accessList: transaction.accessList,
            value: BigInt(transaction.value || 0),
            input: transaction.input,
            v: BigInt(transaction.v || 0),
            r: transaction.r,
            s: transaction.s,
          } as Prettify<PonderCore.Transaction>,
        }
        console.log(
          '%s matching urfs %s@%o',
          orderId(context, matching),
          matching.transaction.hash,
          context.network.chainId,
        )
        await handleURFS({ event: matching, context: context as any })
        return {
          id: event.args.messageHash,
          userRequestId: matching.args.messageId,
          bridgeId: '0x' as Hex,
        }
      }
    } while (!matching && i > 0)
    // run matching through insertion handler
  } else {
    const foreignChain = foreignPairing
      .get(Providers.PULSECHAIN)!
      .get(context.network.chainId)!
    // get user request for affirmation
    const client = createPublicClient({
      chain: foreignChain,
      transport: toTransport(foreignChain.id as ChainId),
    })
    const foreignBridgeAddress =
      pathways[Providers.PULSECHAIN]![context.network.chainId]![
        client.chain.id as ChainId
      ]!.foreign
    const contract = getContract({
      address: foreignBridgeAddress,
      abi: ForeignAMB,
      client: client as PublicClient,
    })
    const latestBlock = await client.getBlock({
      blockTag: 'latest',
    })

    let matching: URF<'UserRequestForAffirmation'> | undefined = undefined
    let toBlock = latestBlock.number
    do {
      i--
      const fromBlock = toBlock - 999n
      console.log('checking urfs from %o to %o', fromBlock, toBlock)
      const urfa = await contract.getEvents.UserRequestForAffirmation(
        {},
        {
          fromBlock,
          toBlock,
        },
      )
      toBlock = fromBlock - 1n
      const match = urfa.find(
        (urf) => keccak256(urf.args.encodedData!) === messageHash,
      )
      if (match) {
        matching = {
          name: 'UserRequestForAffirmation',
          args: {
            messageId: match.args.messageId!,
            encodedData: match.args.encodedData!,
          },
          log: {
            id: '',
            ...match,
          },
          block: await client.getBlock({
            blockNumber: match.blockNumber,
          }),
          transaction: (await client.getTransaction({
            hash: match.transactionHash,
          })) as Prettify<PonderCore.Transaction>,
        }
        console.log(
          '%s matching urfa %s@%o',
          orderId(context, matching),
          matching.transaction.hash,
          context.network.chainId,
        )
        await handleURFA({
          event: matching,
          context:
            foreignChain.id === 1
              ? {
                  ...context,
                  client: client as typeof context.client,
                  network: {
                    chainId: foreignChain.id as 1,
                    name: 'ethereum',
                  },
                }
              : {
                  ...context,
                  client: client as typeof context.client,
                  network: {
                    chainId: foreignChain.id as 11155111,
                    name: 'sepolia',
                  },
                },
        })
        return {
          id: event.args.messageHash,
          userRequestId: matching.args.messageId,
          bridgeId: '0x' as Hex,
        }
      }
    } while (!matching && i > 0)
  }
  throw new Error('no matching user request found')
}

type URFAHandler = Parameters<
  typeof ponder.on<'ForeignAMB:UserRequestForAffirmation'>
>[1]

const handleURFA: URFAHandler = async ({ event, context }) => {
  const parsed = parseAMBMessage(event.transaction.from, event.args.encodedData)
  const bridgeId = ids.bridge(context, event.log.address)
  const blockId = ids.block(context, event.block.hash)
  const transactionId = ids.transaction(context, event.transaction.hash)
  const targetOrderId = orderId(context, event)
  inMemoryCache.set(
    `outstanding-message-id-${parsed.messageHash}`,
    event.args.messageId,
  )
  // console.log(targetOrderId, parsed.messageHash)
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
}

ponder.on('ForeignAMB:UserRequestForAffirmation', handleURFA)

type URFSHandler = Parameters<
  typeof ponder.on<'HomeAMB:UserRequestForSignature'>
>[1]

const handleURFS: URFSHandler = async ({ event, context }) => {
  const bridgeId = ids.bridge(context, event.log.address)
  const blockId = ids.block(context, event.block.hash)
  const transactionId = ids.transaction(context, event.transaction.hash)
  const parsed = parseAMBMessage(event.transaction.from, event.args.encodedData)
  const targetOrderId = orderId(context, event)
  inMemoryCache.set(
    `outstanding-message-id-${parsed.messageHash}`,
    event.args.messageId,
  )
  // console.log(targetOrderId, parsed.messageHash)
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
}

ponder.on('HomeAMB:UserRequestForSignature', handleURFS)

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
      getOutstandingMessageIdByHash(context, event, false),
    ]).then(([requiredSignatures, userRequestId]) => {
      if (!userRequestId) {
        console.log('%o missing %o', messageHash, context.network.chainId)
        return
      }
      return Promise.all([
        context.db.UserRequestForAffirmation.update({
          id: userRequestId,
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
            userRequestId,
            deliveryId: userRequestId,
          },
        }),
      ])
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
      getOutstandingMessageIdByHash(context, event, true),
    ]).then(([requiredSignatures, userRequestId]) => {
      if (!userRequestId) {
        console.log('%o missing %o', messageHash, context.network.chainId)
        return
      }
      return Promise.all([
        context.db.UserRequestForSignature.update({
          id: userRequestId,
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
            userRequestId,
            deliveryId: userRequestId,
          },
        }),
      ])
    }),
  ])
})

ponder.on('HomeAMB:AffirmationCompleted', async ({ event, context }) => {
  const transactionId = ids.transaction(context, event.transaction.hash)
  const blockId = ids.block(context, event.block.hash)
  await Promise.all([
    upsertTransaction(context, event.transaction),
    upsertBlock(context, event.block),
    context.db.UserRequestForAffirmation.findUnique({
      id: event.args.messageId,
    }).then((userRequestForAffirmation) => {
      if (!userRequestForAffirmation) {
        return
      }
      return context.db.AffirmationComplete.create({
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
      })
    }),
  ])
})

ponder.on('ForeignAMB:RelayedMessage', async ({ event, context }) => {
  const transactionId = ids.transaction(context, event.transaction.hash)
  const blockId = ids.block(context, event.block.hash)
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.transaction),
    context.db.UserRequestForSignature.findUnique({
      id: event.args.messageId,
    }).then((userRequestForSignature) => {
      if (!userRequestForSignature) {
        return
      }
      return context.db.RelayMessage.create({
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
      })
    }),
  ])
})
