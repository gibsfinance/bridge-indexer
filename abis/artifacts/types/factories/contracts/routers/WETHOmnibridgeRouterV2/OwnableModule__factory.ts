/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  OwnableModule,
  OwnableModuleInterface,
} from "../../../../contracts/routers/WETHOmnibridgeRouterV2/OwnableModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516101a53803806101a583398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610112806100936000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80638da5cb5b146037578063f2fde38b146065575b600080fd5b6000546049906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6074607036600460ae565b6076565b005b6000546001600160a01b03163314608c57600080fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121560bf57600080fd5b81356001600160a01b038116811460d557600080fd5b939250505056fea26469706673582212206e5c099318579b19db6e4055bf334ce9db2db40d1580c1af8cc4c348e2a34e2664736f6c63430008180033";

type OwnableModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnableModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnableModule__factory extends ContractFactory {
  constructor(...args: OwnableModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override deploy(
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_owner, overrides || {}) as Promise<
      OwnableModule & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): OwnableModule__factory {
    return super.connect(runner) as OwnableModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnableModuleInterface {
    return new Interface(_abi) as OwnableModuleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OwnableModule {
    return new Contract(address, _abi, runner) as unknown as OwnableModule;
  }
}