import { Context, ponder } from "ponder:registry";
import * as PonderCore from "ponder";
import {
  AffirmationCompleted,
  FeeDirector,
  LatestRequiredSignaturesChanged,
  RelayMessage,
  RequiredSignaturesChanged,
  ReverseMessageHashBinding,
  SignedForAffirmation,
  SignedForUserRequest,
  UserRequestForAffirmation,
  UserRequestForSignature,
  ValidatorStatusUpdate,
  LatestValidatorStatusUpdate,
} from "ponder:schema";
import {
  createPublicClient,
  getContract,
  keccak256,
  Prettify,
  PublicClient,
  type Hex,
} from "viem";
import { parseAMBMessage } from "./message";
import {
  getBridgeAddressFromValidator,
  ids,
  orderId,
  ChainId,
  Providers,
  toTransport,
  pathways,
} from "./utils";
import _ from "lodash";
import ForeignAMB from "../abis/ForeignAMB";
import {
  getLatestRequiredSignatures,
  upsertBridge,
  upsertBlock,
  upsertTransaction,
  cache,
} from "./cache";
import {
  type SignatureEvent,
  type URF,
  homePairing,
  foreignPairing,
} from "./config";

ponder.on("ValidatorContract:ValidatorAdded", async ({ event, context }) => {
  console.log(
    "validator %o on %o added",
    event.args.validator,
    context.network.chainId
  );
  const bridgeAddress = await getBridgeAddressFromValidator(event.log.address);
  const bridgeId = ids.bridge(context, bridgeAddress);
  const transactionId = ids.transaction(context, event.transaction.hash);
  const validatorId = ids.validator(bridgeId, event.args.validator);
  const eventOrderId = orderId(context, event);
  await Promise.all([
    upsertBridge(context, bridgeAddress),
    upsertBlock(context, event.block),
    upsertTransaction(context, event.block, event.transaction),
    context.db
      .insert(LatestValidatorStatusUpdate)
      .values({
        validatorId,
        orderId: eventOrderId,
      })
      .onConflictDoUpdate(() => ({
        orderId: eventOrderId,
      })),
    context.db.insert(ValidatorStatusUpdate).values({
      validatorId,
      orderId: eventOrderId,
      bridgeId,
      address: event.args.validator,
      value: true,
      transactionId,
      logIndex: event.log.logIndex,
    }),
  ]);
});

ponder.on("ValidatorContract:ValidatorRemoved", async ({ event, context }) => {
  console.log(
    "validator %o on %o removed",
    event.args.validator,
    context.network.chainId
  );
  const bridgeAddress = await getBridgeAddressFromValidator(event.log.address);
  const bridgeId = ids.bridge(context, bridgeAddress);
  const transactionId = ids.transaction(context, event.transaction.hash);
  const validatorId = ids.validator(bridgeId, event.args.validator);
  const eventOrderId = orderId(context, event);
  await Promise.all([
    upsertBridge(context, bridgeAddress),
    upsertBlock(context, event.block),
    upsertTransaction(context, event.block, event.transaction),
    context.db
      .insert(LatestValidatorStatusUpdate)
      .values({
        validatorId,
        orderId: eventOrderId,
      })
      .onConflictDoUpdate(() => ({
        orderId: eventOrderId,
      })),
    context.db.insert(ValidatorStatusUpdate).values({
      validatorId,
      orderId: eventOrderId,
      bridgeId,
      address: event.args.validator,
      value: false,
      transactionId,
      logIndex: event.log.logIndex,
    }),
  ]);
});

ponder.on(
  "ValidatorContract:RequiredSignaturesChanged",
  async ({ event, context }) => {
    console.log("sig changed", event.args.requiredSignatures);
    const bridgeAddress = await getBridgeAddressFromValidator(
      event.log.address
    );
    const bridgeId = ids.bridge(context, bridgeAddress);
    const transactionId = ids.transaction(context, event.transaction.hash);
    const eventOrderId = orderId(context, event);
    await Promise.all([
      upsertBridge(context, bridgeAddress),
      upsertBlock(context, event.block),
      upsertTransaction(context, event.block, event.transaction),
      context.db
        .insert(LatestRequiredSignaturesChanged)
        .values({
          bridgeId,
          orderId: eventOrderId, // pointers to required signatures change
        })
        .onConflictDoUpdate((row) => ({
          orderId: eventOrderId,
        })),
      context.db.insert(RequiredSignaturesChanged).values({
        orderId: eventOrderId,
        bridgeId,
        value: event.args.requiredSignatures,
        transactionId,
        logIndex: event.log.logIndex,
      }),
    ]);
  }
);

const getOutstandingMessageIdByHash = async (
  context: Context,
  event: SignatureEvent,
  sameChain: boolean
): Promise<Hex> => {
  const messageHash = event.args.messageHash;
  const cached = cache.get(`outstanding-message-id-${messageHash}`) as Hex;
  if (cached) {
    return cached;
  }
  let binding = await context.db.find(ReverseMessageHashBinding, {
    messageHash,
  });
  if (!binding) {
    if (sameChain) {
      binding = await loadFromChain(context, event, sameChain);
    } else {
      binding = await loadFromChain(context, event, sameChain);
    }
  }
  cache.set(`outstanding-message-id-${messageHash}`, binding!.messageId);
  return binding!.messageId;
};

const loadFromChain = async (
  context: Context,
  event: SignatureEvent,
  sameChain: boolean
) => {
  const messageHash = event.args.messageHash;
  let i = 10;
  if (sameChain) {
    // get user request for signature
    const homeChain = homePairing
      .get(Providers.PULSECHAIN)!
      .get(context.network.chainId)!;
    const client = createPublicClient({
      chain: homeChain,
      transport: toTransport(homeChain.id as ChainId),
    });
    let matching: URF<"UserRequestForSignature"> | undefined = undefined;
    const contract = getContract({
      address: event.log.address,
      abi: context.contracts.HomeAMB.abi,
      client: client as PublicClient,
    });
    let toBlock = event.block.number;
    do {
      i--;
      const fromBlock = toBlock - 999n;
      console.log("checking urfs from %o to %o", fromBlock, toBlock);
      const urfs = await contract.getEvents.UserRequestForSignature(
        {},
        {
          fromBlock: fromBlock,
          toBlock: toBlock,
        }
      );
      toBlock = fromBlock - 1n;
      const match = urfs.find(
        (urf) => keccak256(urf.args.encodedData!) === messageHash
      );
      if (match) {
        const block = (await client.request({
          method: "eth_getBlockByNumber",
          params: [`0x${match.blockNumber.toString(16)}`, false],
        }))!;
        const transaction = (await client.request({
          method: "eth_getTransactionByHash",
          params: [match.transactionHash],
        }))!;
        matching = {
          name: "UserRequestForSignature",
          args: {
            messageId: match.args.messageId!,
            encodedData: match.args.encodedData!,
          },
          log: {
            id: "",
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
            // blockNumber: BigInt(transaction.blockNumber || 0),
            transactionIndex: transaction.transactionIndex || 0,
            gas: BigInt(transaction.gas || 0),
            maxFeePerGas: BigInt(transaction.maxFeePerGas || 0),
            maxPriorityFeePerGas: BigInt(transaction.maxPriorityFeePerGas || 0),
            type:
              transaction.type === "0x0"
                ? "legacy"
                : transaction.type === "0x1"
                ? "eip2930"
                : "eip1559",
            nonce: Number(transaction.nonce || 0),
            accessList: transaction.accessList,
            value: BigInt(transaction.value || 0),
            input: transaction.input,
            v: BigInt(transaction.v || 0),
            r: transaction.r,
            s: transaction.s,
          } as Prettify<PonderCore.Transaction>,
        };
        console.log(
          "%s matching urfs %s@%o",
          orderId(context, matching),
          matching.transaction.hash,
          context.network.chainId
        );
        await userRequestForSignatureHandler({
          event: matching,
          context: context as any,
        });
        return {
          messageHash: event.args.messageHash,
          messageId: matching.args.messageId,
        };
      }
    } while (!matching && i > 0);
    // run matching through insertion handler
  } else {
    const foreignChain = foreignPairing
      .get(Providers.PULSECHAIN)!
      .get(context.network.chainId)!;
    // get user request for affirmation
    const client = createPublicClient({
      chain: foreignChain,
      transport: toTransport(foreignChain.id as ChainId),
    });
    const foreignBridgeAddress =
      pathways[Providers.PULSECHAIN]![context.network.chainId]![
        client.chain.id as ChainId
      ]!.foreign;
    const contract = getContract({
      address: foreignBridgeAddress,
      abi: ForeignAMB,
      client: client as PublicClient,
    });
    const latestBlock = await client.getBlock({
      blockTag: "latest",
    });

    let matching: URF<"UserRequestForAffirmation"> | undefined = undefined;
    let toBlock = latestBlock.number;
    do {
      i--;
      const fromBlock = toBlock - 999n;
      console.log("checking urfs from %o to %o", fromBlock, toBlock);
      const urfa = await contract.getEvents.UserRequestForAffirmation(
        {},
        {
          fromBlock,
          toBlock,
        }
      );
      toBlock = fromBlock - 1n;
      const match = urfa.find(
        (urf) => keccak256(urf.args.encodedData!) === messageHash
      );
      if (match) {
        matching = {
          name: "UserRequestForAffirmation",
          args: {
            messageId: match.args.messageId!,
            encodedData: match.args.encodedData!,
          },
          log: {
            id: "",
            ...match,
          },
          block: await client.getBlock({
            blockNumber: match.blockNumber,
          }),
          transaction: (await client.getTransaction({
            hash: match.transactionHash,
          })) as Prettify<PonderCore.Transaction>,
        };
        console.log(
          "%s matching urfa %s@%o",
          orderId(context, matching),
          matching.transaction.hash,
          context.network.chainId
        );
        await userRequestForAffirmationHandler({
          event: matching,
          context:
            foreignChain.id === 1
              ? {
                  ...context,
                  client: client as typeof context.client,
                  network: {
                    chainId: foreignChain.id as 1,
                    name: "ethereum",
                  },
                }
              : {
                  ...context,
                  client: client as typeof context.client,
                  network: {
                    chainId: foreignChain.id as 11155111,
                    name: "sepolia",
                  },
                },
        });
        return {
          messageHash: event.args.messageHash,
          messageId: matching.args.messageId,
        };
      }
    } while (!matching && i > 0);
  }
  throw new Error("no matching user request found");
};

type URFAHandler = Parameters<
  typeof ponder.on<"ForeignAMB:UserRequestForAffirmation">
>[1];

type URFSHandler = Parameters<
  typeof ponder.on<"HomeAMB:UserRequestForSignature">
>[1];

const userRequestForAffirmationHandler: URFAHandler = async ({
  event,
  context,
}) => {
  const parsed = parseAMBMessage(
    event.transaction.from,
    event.args.encodedData
  );
  const bridgeId = ids.bridge(context, event.log.address);
  const blockId = ids.block(context, event.block.hash);
  const transactionId = ids.transaction(context, event.transaction.hash);
  const targetOrderId = orderId(context, event);
  cache.set(
    `outstanding-message-id-${parsed.messageHash}`,
    event.args.messageId
  );
  console.log(targetOrderId, parsed.messageHash);
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.block, event.transaction),
    upsertBridge(context, event.log.address),
    context.db.insert(ReverseMessageHashBinding).values({
      messageHash: parsed.messageHash,
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
        })
    ),
  ]);
};

const userRequestForSignatureHandler: URFSHandler = async ({
  event,
  context,
}) => {
  const bridgeId = ids.bridge(context, event.log.address);
  const blockId = ids.block(context, event.block.hash);
  const transactionId = ids.transaction(context, event.transaction.hash);
  const parsed = parseAMBMessage(
    event.transaction.from,
    event.args.encodedData
  );
  const targetOrderId = orderId(context, event);
  cache.set(
    `outstanding-message-id-${parsed.messageHash}`,
    event.args.messageId
  );
  console.log(targetOrderId, parsed.messageHash);
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.block, event.transaction),
    upsertBridge(context, event.log.address),
    context.db.insert(ReverseMessageHashBinding).values({
      messageHash: parsed.messageHash,
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
        })
    ),
  ]);
};

ponder.on(
  "ForeignAMB:UserRequestForAffirmation",
  userRequestForAffirmationHandler
);

ponder.on("HomeAMB:UserRequestForSignature", userRequestForSignatureHandler);

ponder.on("HomeAMB:SignedForAffirmation", async ({ event, context }) => {
  const messageHash = event.args.messageHash;
  const bridgeId = ids.bridge(context, event.log.address);
  const validatorId = ids.validator(bridgeId, event.args.signer);
  const blockId = ids.block(context, event.block.hash);
  const transactionId = ids.transaction(context, event.transaction.hash);
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.block, event.transaction),
    upsertBridge(context, event.log.address),
    Promise.all([
      getLatestRequiredSignatures(context, bridgeId, event),
      getOutstandingMessageIdByHash(context, event, true),
    ]).then(([requiredSignatures, messageId]) =>
      Promise.all([
        context.db
          .update(UserRequestForAffirmation, {
            messageId,
          })
          .set((row) => ({
            confirmedSignatures: row.confirmedSignatures + 1n,
            finishedSigning:
              row.confirmedSignatures + 1n >= requiredSignatures.value,
          })),
        context.db.insert(SignedForAffirmation).values({
          signatureId: ids.signature(messageHash, validatorId),
          userRequestId: messageId,
          blockId,
          transactionId,
          messageHash,
          validatorId,
          logIndex: event.log.logIndex,
          orderId: orderId(context, event),
        }),
      ])
    ),
  ]);
});

ponder.on("HomeAMB:SignedForUserRequest", async ({ event, context }) => {
  const messageHash = event.args.messageHash;
  const bridgeId = ids.bridge(context, event.log.address);
  const validatorId = ids.validator(bridgeId, event.args.signer);
  const blockId = ids.block(context, event.block.hash);
  const transactionId = ids.transaction(context, event.transaction.hash);
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.block, event.transaction),
    upsertBridge(context, event.log.address),
    Promise.all([
      getLatestRequiredSignatures(context, bridgeId, event),
      getOutstandingMessageIdByHash(context, event, false),
    ]).then(([requiredSignatures, messageId]) =>
      Promise.all([
        context.db
          .update(UserRequestForSignature, {
            messageId,
          })
          .set((row) => ({
            confirmedSignatures: row.confirmedSignatures + 1n,
            finishedSigning:
              row.confirmedSignatures + 1n >= requiredSignatures.value,
          })),
        context.db.insert(SignedForUserRequest).values({
          signatureId: ids.signature(messageHash, validatorId),
          userRequestId: messageId,
          blockId,
          transactionId,
          messageHash,
          validatorId,
          logIndex: event.log.logIndex,
          orderId: orderId(context, event),
        }),
      ])
    ),
  ]);
});

ponder.on("HomeAMB:AffirmationCompleted", async ({ event, context }) => {
  const transactionId = ids.transaction(context, event.transaction.hash);
  await Promise.all([
    upsertTransaction(context, event.block, event.transaction),
    upsertBlock(context, event.block),
    context.db
      .find(UserRequestForAffirmation, {
        messageId: event.args.messageId,
      })
      .then((userRequestForAffirmation) => {
        return context.db.insert(AffirmationCompleted).values({
          transactionId,
          userRequestId: event.args.messageId,
          messageHash: userRequestForAffirmation!.messageHash,
          deliverer: event.transaction.from,
          logIndex: event.log.logIndex,
          orderId: orderId(context, event),
        });
      }),
  ]);
});

ponder.on("ForeignAMB:RelayedMessage", async ({ event, context }) => {
  const transactionId = ids.transaction(context, event.transaction.hash);
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.block, event.transaction),
    context.db
      .find(UserRequestForSignature, {
        messageId: event.args.messageId,
      })
      .then((userRequestForSignature) => {
        return context.db.insert(RelayMessage).values({
          transactionId,
          userRequestId: event.args.messageId,
          messageHash: userRequestForSignature!.messageHash,
          deliverer: event.transaction.from,
          logIndex: event.log.logIndex,
          orderId: orderId(context, event),
        });
      }),
  ]);
});
