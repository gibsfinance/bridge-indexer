/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IBlockReward,
  IBlockRewardInterface,
} from "../../../contracts/interfaces/IBlockReward";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "bridgesAllowedLength",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addBridgeNativeRewardReceivers",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "blockRewardContractId",
    outputs: [
      {
        name: "",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "mintedTotally",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addBridgeTokenRewardReceivers",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_amount",
        type: "uint256",
      },
      {
        name: "_receiver",
        type: "address",
      },
    ],
    name: "addExtraReceiver",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_bridge",
        type: "address",
      },
    ],
    name: "mintedTotallyByBridge",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IBlockReward__factory {
  static readonly abi = _abi;
  static createInterface(): IBlockRewardInterface {
    return new Interface(_abi) as IBlockRewardInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IBlockReward {
    return new Contract(address, _abi, runner) as unknown as IBlockReward;
  }
}