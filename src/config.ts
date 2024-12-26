import * as PonderCore from "@ponder/core";
import { Chain, Hex } from "viem";
import { bsc, mainnet, pulsechain, pulsechainV4, sepolia } from "viem/chains";
import { ChainId, Provider, Providers } from "./utils";

export const foreignPairing = new Map<Provider, Map<ChainId, Chain>>([
  [
    Providers.PULSECHAIN,
    new Map([
      [369, mainnet as Chain],
      [943, sepolia as Chain],
    ]),
  ],
  [Providers.TOKENSEX, new Map([[369, bsc as Chain]])],
]);

export const homePairing = new Map<Provider, Map<ChainId, Chain>>([
  [
    Providers.PULSECHAIN,
    new Map([
      [369, pulsechain as Chain],
      [943, pulsechainV4 as Chain],
    ]),
  ],
  [Providers.TOKENSEX, new Map([[369, pulsechain as Chain]])],
]);

export type SignatureEvent = {
  name: string;
  args: {
    signer: Hex;
    messageHash: Hex;
  };
  log: PonderCore.Log;
  block: PonderCore.Block;
  transaction: PonderCore.Transaction;
};

export type URF<T> = {
  name: T;
  args: {
    messageId: Hex;
    encodedData: Hex;
  };
  log: PonderCore.Log;
  block: PonderCore.Block;
  transaction: PonderCore.Transaction;
  transactionReceipt?: never | undefined;
};
