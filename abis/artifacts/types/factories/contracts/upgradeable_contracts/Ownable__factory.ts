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
  Ownable,
  OwnableInterface,
} from "../../../contracts/upgradeable_contracts/Ownable";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "owner",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: false,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610226806100206000396000f30060806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638da5cb5b8114610050578063f2fde38b14610081575b600080fd5b34801561005c57600080fd5b506100656100a4565b60408051600160a060020a039092168252519081900360200190f35b34801561008d57600080fd5b506100a2600160a060020a03600435166100fb565b005b7f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c060005260026020527fb7802e97e87ef2842a6cce7da7ffaeaedaa2f61a6a7870b23d9d01fc9b73712e54600160a060020a031690565b6101036100a4565b600160a060020a0316331461011757600080fd5b61012081610123565b50565b600160a060020a038116151561013857600080fd5b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e06101616100a4565b60408051600160a060020a03928316815291841660208301528051918290030190a17f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c060005260026020527fb7802e97e87ef2842a6cce7da7ffaeaedaa2f61a6a7870b23d9d01fc9b73712e805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820c0b633fd5c1d7bf93ef5607153af024b6450db77c45481dc44f6cc86c18bb8070029";

type OwnableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Ownable__factory extends ContractFactory {
  constructor(...args: OwnableConstructorParams) {
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
      Ownable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Ownable__factory {
    return super.connect(runner) as Ownable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnableInterface {
    return new Interface(_abi) as OwnableInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Ownable {
    return new Contract(address, _abi, runner) as unknown as Ownable;
  }
}
