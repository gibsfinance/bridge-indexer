import { RequiredSignaturesChanged } from "ponder:schema";
import { LatestRequiredSignaturesChanged } from "ponder:schema";
import { Context } from "ponder:registry";
import type { Hex } from "viem";
import { bridgeInfo, ids, orderId, staticRequiredSignatures } from "./utils";
import { Block, BridgeSide, Transaction } from "ponder:schema";
import * as PonderCore from "ponder";

export const upsertBlock = async (
  context: Context,
  block: PonderCore.Block
) => {
  const blockId = ids.block(context, block.hash);
  const b = cache.get(`block-${context.network.chainId}`);
  if (b && b.blockId === blockId) {
    return b as typeof Block.$inferSelect;
  }
  const blockInfo = await context.db.find(Block, {
    blockId,
  });
  if (blockInfo) {
    return blockInfo;
  }
  return await context.db.insert(Block).values({
    blockId,
    chainId: context.network.chainId.toString(),
    hash: block.hash,
    number: block.number,
    timestamp: block.timestamp,
    baseFeePerGas: block.baseFeePerGas,
  });
};

export const cache = new Map<string, any>();

export const upsertTransaction = async (
  context: Context,
  block: PonderCore.Block,
  transaction: PonderCore.Transaction
) => {
  const transactionId = ids.transaction(context, transaction.hash);
  const tx = cache.get(`tx-${context.network.chainId}`);
  if (tx && tx.transactionId === transactionId) {
    return tx as typeof Transaction.$inferSelect;
  }
  const transactionInfo = await context.db.find(Transaction, {
    transactionId,
  });
  if (transactionInfo) {
    cache.set(`tx-${context.network.chainId}`, transactionInfo);
    return transactionInfo;
  }
  const t = await context.db.insert(Transaction).values({
    transactionId: transactionId,
    blockId: ids.block(context, block.hash),
    hash: transaction.hash,
    index: transaction.transactionIndex.toString(),
    from: transaction.from,
    to: transaction.to!,
    value: transaction.value,
    maxFeePerGas: transaction.maxFeePerGas,
    maxPriorityFeePerGas: transaction.maxPriorityFeePerGas,
    gas: transaction.gas,
    gasPrice: transaction.gasPrice,
    nonce: BigInt(transaction.nonce),
    type: transaction.type,
  });
  cache.set(`tx-${context.network.chainId}`, t);
  return t;
};

export const upsertBridge = async (context: Context, address: Hex) => {
  const bridgeId = ids.bridge(context, address);
  const b = cache.get(`bridge-${bridgeId}`);
  if (b) {
    return b as typeof BridgeSide.$inferSelect;
  }
  const bridgeSide = await context.db.find(BridgeSide, {
    bridgeId,
  });
  if (bridgeSide) {
    cache.set(`bridge-${bridgeId}`, bridgeSide);
    return bridgeSide;
  }
  const info = bridgeInfo(address);
  const bridge = await context.db.insert(BridgeSide).values({
    bridgeId: ids.bridge(context, address),
    chainId: context.network.chainId.toString(),
    address: info!.address,
    provider: info!.provider,
    side: info!.side,
  });
  cache.set(`bridge-${bridgeId}`, bridge);
  return bridge;
};

const inMemoryCache = new Map<string, any>();

setInterval(() => {
  const previousSize = inMemoryCache.size;
  let deleted = 0;
  for (const k of inMemoryCache.keys()) {
    if (
      deleted < 20_000 &&
      inMemoryCache.size > 10_000 &&
      k.startsWith("outstanding-message-id-")
    ) {
      deleted++;
      inMemoryCache.delete(k);
    }
  }
  console.log(
    "inMemoryCache previous=%o size=%o",
    previousSize,
    inMemoryCache.size
  );
}, 60_000);

type RequiredSigs = {
  orderId: Hex;
  value: bigint;
};

export const getLatestRequiredSignatures = async (
  context: Context,
  bridgeId: Hex,
  event: any
) => {
  const req = inMemoryCache.get(
    `latest-required-sigs-${bridgeId}`
  ) as RequiredSigs;
  if (req) {
    return req;
  }
  let latest = await context.db.find(LatestRequiredSignaturesChanged, {
    bridgeId,
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
      context.db
        .insert(LatestRequiredSignaturesChanged)
        .values({
          bridgeId,
          orderId: currentEventId,
        })
        .onConflictDoUpdate(() => ({
          orderId: currentEventId,
        })),
      context.db.insert(RequiredSignaturesChanged).values({
        orderId: currentEventId,
        bridgeId,
        value,
        transactionId: event.transaction.hash,
        logIndex: event.log.logIndex,
      }),
    ]);
    latest = l;
  }
  const requiredSignatures = await context.db.find(RequiredSignaturesChanged, {
    orderId: latest!.orderId!,
  });
  if (!requiredSignatures) {
    throw new Error("impossible state");
  }
  inMemoryCache.set(`latest-required-sigs-${bridgeId}`, requiredSignatures);
  return requiredSignatures;
};
