/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IAMB, IAMBInterface } from "../../../contracts/interfaces/IAMB";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "transactionHash",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "sourceChainId",
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
    constant: true,
    inputs: [
      {
        name: "_messageId",
        type: "bytes32",
      },
    ],
    name: "failedMessageReceiver",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_messageId",
        type: "bytes32",
      },
    ],
    name: "failedMessageSender",
    outputs: [
      {
        name: "",
        type: "address",
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
        name: "_requestSelector",
        type: "bytes32",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "requireToGetInformation",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "messageId",
    outputs: [
      {
        name: "",
        type: "bytes32",
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
        name: "_contract",
        type: "address",
      },
      {
        name: "_data",
        type: "bytes",
      },
      {
        name: "_gas",
        type: "uint256",
      },
    ],
    name: "requireToConfirmMessage",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "messageSourceChainId",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "destinationChainId",
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
    constant: true,
    inputs: [
      {
        name: "_messageId",
        type: "bytes32",
      },
    ],
    name: "messageCallStatus",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "messageSender",
    outputs: [
      {
        name: "",
        type: "address",
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
        name: "_contract",
        type: "address",
      },
      {
        name: "_data",
        type: "bytes",
      },
      {
        name: "_gas",
        type: "uint256",
      },
    ],
    name: "requireToPassMessage",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_messageId",
        type: "bytes32",
      },
    ],
    name: "failedMessageDataHash",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "maxGasPerTx",
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

export class IAMB__factory {
  static readonly abi = _abi;
  static createInterface(): IAMBInterface {
    return new Interface(_abi) as IAMBInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IAMB {
    return new Contract(address, _abi, runner) as unknown as IAMB;
  }
}
