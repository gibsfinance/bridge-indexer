import type { Context } from "@/generated";
import type { Hex } from "viem";
import { bridgeInfo, ids, orderId, staticRequiredSignatures } from "./utils";
import * as PonderCore from "@ponder/core";

export const upsertBlock = async (
  context: Context,
  block: PonderCore.Block
) => {
  const blockId = ids.block(context, block.hash);
  const blockInfo = await context.db.Block.findUnique({
    id: blockId,
  });
  if (blockInfo) {
    return blockInfo;
  }
  return await context.db.Block.create({
    id: blockId,
    data: {
      chainId: BigInt(context.network.chainId),
      hash: block.hash,
      number: block.number,
      timestamp: block.timestamp,
      baseFeePerGas: block.baseFeePerGas || undefined,
    },
  });
};

export const upsertTransaction = async (
  context: Context,
  block: PonderCore.Block,
  transaction: PonderCore.Transaction
) => {
  const transactionId = ids.transaction(context, transaction.hash);
  const transactionInfo = await context.db.Transaction.findUnique({
    id: transactionId,
  });
  if (transactionInfo) {
    return transactionInfo;
  }
  const t = await context.db.Transaction.create({
    id: transactionId,
    data: {
      blockId: ids.block(context, block.hash),
      hash: transaction.hash,
      index: transaction.transactionIndex,
      from: transaction.from,
      to: transaction.to!,
      value: transaction.value,
      maxFeePerGas: transaction.maxFeePerGas,
      maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
      gas: transaction.gas,
      gasPrice: transaction.gasPrice,
      nonce: BigInt(transaction.nonce),
      type: transaction.type,
    },
  });
  return t;
};

export const upsertBridge = async (context: Context, address: Hex) => {
  const bridgeId = ids.bridge(context, address);
  const bridgeSide = await context.db.BridgeSide.findUnique({
    id: bridgeId,
  });
  if (bridgeSide) {
    return bridgeSide;
  }
  const info = bridgeInfo(address);
  const bridge = await context.db.BridgeSide.create({
    id: bridgeId,
    data: {
      chainId: BigInt(context.network.chainId),
      address: info!.address,
      provider: info!.provider,
      side: info!.side,
    },
  });
  return bridge;
};

type RequiredSigs = {
  orderId: Hex;
  value: bigint;
};

export const getLatestRequiredSignatures = async (
  context: Context,
  bridgeId: Hex,
  event: any
) => {
  let latest = await context.db.LatestRequiredSignaturesChanged.findUnique({
    id: bridgeId,
  });
  if (!latest) {
    console.log(
      "no latest required signatures found for %o on %o",
      bridgeId,
      context.network.chainId
    );
    const currentEventId = orderId(context, event);
    const value = staticRequiredSignatures(
      context.network.chainId,
      event.log.address
    );
    const [l] = await Promise.all([
      context.db.LatestRequiredSignaturesChanged.upsert({
        id: bridgeId,
        create: {
          bridgeId,
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
          transactionId: ids.transaction(context, event.transaction.hash),
          blockId: ids.block(context, event.block.hash),
        },
      }),
    ]);
    latest = l;
  }
  const requiredSignatures = await context.db.RequiredSignaturesChanged.findUnique({
    id: latest!.orderId!,
  });
  if (!requiredSignatures) {
    throw new Error("impossible state");
  }
  return requiredSignatures;
};
