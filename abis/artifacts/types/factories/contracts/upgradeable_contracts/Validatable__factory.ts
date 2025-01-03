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
  Validatable,
  ValidatableInterface,
} from "../../../contracts/upgradeable_contracts/Validatable";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "requiredSignatures",
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
    inputs: [],
    name: "validatorContract",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101e3806100206000396000f30060806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638d06804381146100505780639943908914610077575b600080fd5b34801561005c57600080fd5b506100656100b5565b60408051918252519081900360200190f35b34801561008357600080fd5b5061008c610153565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60006100bf610153565b73ffffffffffffffffffffffffffffffffffffffff16638d0680436040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15801561012257600080fd5b505af1158015610136573d6000803e3d6000fd5b505050506040513d602081101561014c57600080fd5b5051905090565b7f5a74bb7e202fb8e4bf311841c7d64ec19df195fee77d7e7ae749b27921b6ddfe60005260026020527fab54f3fbbe62c59b7876a9bf9bd5e0c22dbae93f4d8ee0438f7ce62b198eb0e05473ffffffffffffffffffffffffffffffffffffffff16905600a165627a7a7230582002997cf53118cbecc0c3a1c4995d74794dee69af8f2ed926d119405245db1a7f0029";

type ValidatableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ValidatableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Validatable__factory extends ContractFactory {
  constructor(...args: ValidatableConstructorParams) {
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
      Validatable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Validatable__factory {
    return super.connect(runner) as Validatable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ValidatableInterface {
    return new Interface(_abi) as ValidatableInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Validatable {
    return new Contract(address, _abi, runner) as unknown as Validatable;
  }
}
