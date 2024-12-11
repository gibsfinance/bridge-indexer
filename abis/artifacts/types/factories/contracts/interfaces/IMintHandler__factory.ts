/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMintHandler,
  IMintHandlerInterface,
} from "../../../contracts/interfaces/IMintHandler";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMintHandler__factory {
  static readonly abi = _abi;
  static createInterface(): IMintHandlerInterface {
    return new Interface(_abi) as IMintHandlerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMintHandler {
    return new Contract(address, _abi, runner) as unknown as IMintHandler;
  }
}