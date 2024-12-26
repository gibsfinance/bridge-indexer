/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MessageTest,
  MessageTestInterface,
} from "../../../contracts/mocks/MessageTest";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "unpackData",
    outputs: [
      {
        name: "messageId",
        type: "bytes32",
      },
      {
        name: "sender",
        type: "address",
      },
      {
        name: "executor",
        type: "address",
      },
      {
        name: "gasLimit",
        type: "uint32",
      },
      {
        name: "dataType",
        type: "uint8",
      },
      {
        name: "chainIds",
        type: "uint256[2]",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_data",
        type: "bytes",
      },
      {
        name: "",
        type: "bytes",
      },
    ],
    name: "unpackDataWithExtraParams",
    outputs: [
      {
        name: "messageId",
        type: "bytes32",
      },
      {
        name: "sender",
        type: "address",
      },
      {
        name: "executor",
        type: "address",
      },
      {
        name: "gasLimit",
        type: "uint32",
      },
      {
        name: "dataType",
        type: "uint8",
      },
      {
        name: "chainIds",
        type: "uint256[2]",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506103bf806100206000396000f30060806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633bc6606f8114610050578063765109971461018f575b600080fd5b34801561005c57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100a99436949293602493928401919081908401838280828437509497506102269650505050505050565b6040805188815273ffffffffffffffffffffffffffffffffffffffff808916602083015287168183015263ffffffff8616606082015260ff851660808201529060a0820190849080838360005b8381101561010e5781810151838201526020016100f6565b5050505090500180602001828103825283818151815260200191508051906020019080838360005b8381101561014e578181015183820152602001610136565b50505050905090810190601f16801561017b5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b34801561019b57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100a994369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506102589650505050505050565b6000806000806000610236610378565b60606102418861028b565b959e949d50929b5090995097509550909350915050565b6000806000806000610268610378565b60606102738961028b565b959f949e50929c50909a509850965090945092505050565b600080600080600061029b610378565b6060600080604f915060208a0151985073ffffffffffffffffffffffffffffffffffffffff60348b015116975060548a01518060601c975063ffffffff8160401c16965080601a1a95508060181a6001808260031b1b03818501945080858e01511687528260191a91506001808360031b1b039050818501945080858e0151166020880152848d51039350505050806040519080825280601f01601f191660200182016040528015610357578160200160208202803883390190505b50925060248201915080826004350160208501375050919395979092949650565b604080518082018252906002908290803883395091929150505600a165627a7a72305820413041dc957d7a724baf44b4d05b7a3a0b1939fa6551347e308fe8fda104f5aa0029";

type MessageTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MessageTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MessageTest__factory extends ContractFactory {
  constructor(...args: MessageTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MessageTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MessageTest__factory {
    return super.connect(runner) as MessageTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessageTestInterface {
    return new Interface(_abi) as MessageTestInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MessageTest {
    return new Contract(address, _abi, runner) as unknown as MessageTest;
  }
}