import { Context, ponder } from "@/generated";
import type { Hex } from "viem";
import { parseAMBMessage } from "./message";
import { getBridgeAddressFromValidator, ids, orderId } from "./utils";
import {
  getLatestRequiredSignatures,
  upsertBridge,
  upsertBlock,
  upsertTransaction,
} from "./cache";
import type { SignatureEvent } from "./config";

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
    context.db.LatestValidatorStatusUpdate.upsert({
      id: validatorId,
      create: {
        orderId: eventOrderId,
      },
      update: {
        orderId: eventOrderId,
      },
    }),
    context.db.ValidatorStatusUpdate.create({
      id: eventOrderId,
      data: {
        validatorId,
        bridgeId,
        address: event.args.validator,
        value: true,
        transactionId,
        logIndex: event.log.logIndex,
      },
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
    context.db.LatestValidatorStatusUpdate.upsert({
      id: validatorId,
      create: {
        orderId: eventOrderId,
      },
      update: {
        orderId: eventOrderId,
      },
    }),
    context.db.ValidatorStatusUpdate.create({
      id: eventOrderId,
      data: {
        validatorId,
        bridgeId,
        address: event.args.validator,
        value: false,
        transactionId,
        logIndex: event.log.logIndex,
      },
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
      context.db.LatestRequiredSignaturesChanged.upsert({
        id: bridgeId,
        create: {
          orderId: eventOrderId,
          bridgeId,
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
          blockId: ids.block(context, event.block.hash),
        },
      }),
    ]);
  }
);

const getOutstandingMessageIdByHash = async (
  context: Context,
  event: SignatureEvent
): Promise<Hex> => {
  const messageHash = event.args.messageHash;
  const binding = await context.db.ReverseMessageHashBinding.findUnique({
    id: messageHash,
  });
  return binding!.messageId;
};

ponder.on(
  "ForeignAMB:UserRequestForAffirmation",
  async ({ event, context }) => {
    const parsed = parseAMBMessage(
      event.transaction.from,
      event.args.encodedData
    );
    const bridgeId = ids.bridge(context, event.log.address);
    const blockId = ids.block(context, event.block.hash);
    const transactionId = ids.transaction(context, event.transaction.hash);
    const targetOrderId = orderId(context, event);
    await Promise.all([
      upsertBlock(context, event.block),
      upsertTransaction(context, event.block, event.transaction),
      upsertBridge(context, event.log.address),
      context.db.ReverseMessageHashBinding.create({
        id: parsed.messageHash,
        data: {
          messageId: event.args.messageId,
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
              messageId: event.args.messageId,
              encodedData: event.args.encodedData,
              originationChainId: parsed.originationChainId,
              destinationChainId: parsed.destinationChainId,
              orderId: targetOrderId,
              finishedSigning: false,
              feeDirectorId: undefined,
              confirmedSignaturesCount: 0,
              token: parsed.nestedData.token,
              handlingNative: parsed.handlingNative,
              deliveringNative: parsed.deliveringNative,
            },
          })
      ),
    ]);
  }
);

ponder.on("HomeAMB:UserRequestForSignature", async ({ event, context }) => {
  const bridgeId = ids.bridge(context, event.log.address);
  const blockId = ids.block(context, event.block.hash);
  const transactionId = ids.transaction(context, event.transaction.hash);
  const parsed = parseAMBMessage(
    event.transaction.from,
    event.args.encodedData
  );
  const targetOrderId = orderId(context, event);
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.block, event.transaction),
    upsertBridge(context, event.log.address),
    context.db.ReverseMessageHashBinding.create({
      id: parsed.messageHash,
      data: {
        messageId: event.args.messageId,
      },
    }),
    parsed.feeDirector
      ? context.db.FeeDirectorSignature.create({
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
            bridgeId,
            blockId,
            transactionId,
            requiredSignatureId: requiredSignatures.id,
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
            confirmedSignaturesCount: 0,
            feeDirectorId: parsed.feeDirector
              ? event.args.messageId
              : undefined,
            finishedSigning: false,
            token: parsed.nestedData.token,
            handlingNative: parsed.handlingNative,
            deliveringNative: parsed.deliveringNative,
          },
        })
    ),
  ]);
});

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
      getOutstandingMessageIdByHash(context, event),
    ]).then(([requiredSignatures, messageId]) =>
      Promise.all([
        context.db.UserRequestForAffirmation.update({
          id: messageId,
          data: ({ current }) => ({
            confirmedSignaturesCount: current.confirmedSignaturesCount + 1,
            finishedSigning:
              current.confirmedSignaturesCount + 1 >= requiredSignatures.value,
          }),
        }),
        context.db.SignedForAffirmation.create({
          id: ids.signature(messageHash, validatorId),
          data: {
            userRequestId: messageId,
            blockId,
            transactionId,
            messageHash,
            validatorId,
            orderId: orderId(context, event),
          },
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
      getOutstandingMessageIdByHash(context, event),
    ]).then(([requiredSignatures, messageId]) =>
      Promise.all([
        context.db.UserRequestForSignature.update({
          id: messageId,
          data: ({ current }) => ({
            confirmedSignaturesCount: current.confirmedSignaturesCount + 1,
            finishedSigning:
              current.confirmedSignaturesCount + 1 >= requiredSignatures.value,
          }),
        }),
        context.db.SignedForUserRequest.create({
          id: ids.signature(messageHash, validatorId),
          data: {
            userRequestId: messageId,
            blockId,
            transactionId,
            messageHash,
            validatorId,
            orderId: orderId(context, event),
          },
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
    context.db.AffirmationCompleted.create({
      id: event.args.messageId,
      data: {
        transactionId,
        userRequestId: event.args.messageId,
        deliveredBy: event.transaction.from,
        orderId: orderId(context, event),
        blockId: ids.block(context, event.block.hash),
        bridgeId: ids.bridge(context, event.log.address),
      },
    }),
  ]);
});

ponder.on("ForeignAMB:RelayedMessage", async ({ event, context }) => {
  const transactionId = ids.transaction(context, event.transaction.hash);
  await Promise.all([
    upsertBlock(context, event.block),
    upsertTransaction(context, event.block, event.transaction),
    context.db.RelayMessage.create({
      id: event.args.messageId,
      data: {
        transactionId,
        userRequestId: event.args.messageId,
        deliveredBy: event.transaction.from,
        orderId: orderId(context, event),
        blockId: ids.block(context, event.block.hash),
        bridgeId: ids.bridge(context, event.log.address),
      },
    }),
  ]);
});
