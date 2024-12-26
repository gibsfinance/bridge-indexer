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
  RevertFallback,
  RevertFallbackInterface,
} from "../../../contracts/mocks/RevertFallback";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_receiver",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "safeSendEth",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "receiveEth",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_receiver",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "sendEth",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101f2806100206000396000f3006080604052600436106100565763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631874fa03811461005b5780634185f8eb1461008e57806349dcbc5e14610096575b600080fd5b34801561006757600080fd5b5061008c73ffffffffffffffffffffffffffffffffffffffff600435166024356100c7565b005b61008c6100d5565b3480156100a257600080fd5b5061008c73ffffffffffffffffffffffffffffffffffffffff600435166024356100d7565b6100d18282610114565b5050565b565b60405173ffffffffffffffffffffffffffffffffffffffff83169082156108fc029083906000818181858888f1935050505015156100d157600080fd5b60405173ffffffffffffffffffffffffffffffffffffffff83169082156108fc029083906000818181858888f1935050505015156100d1578082610156610196565b73ffffffffffffffffffffffffffffffffffffffff9091168152604051908190036020019082f08015801561018f573d6000803e3d6000fd5b5050505050565b6040516021806101a6833901905600608060405260405160208060218339810160405251600160a060020a038116ff00a165627a7a72305820cb4524802f4a5f9062cad49e419b6054106629006b24fb927025f7636970973c0029";

type RevertFallbackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RevertFallbackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RevertFallback__factory extends ContractFactory {
  constructor(...args: RevertFallbackConstructorParams) {
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
      RevertFallback & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): RevertFallback__factory {
    return super.connect(runner) as RevertFallback__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RevertFallbackInterface {
    return new Interface(_abi) as RevertFallbackInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): RevertFallback {
    return new Contract(address, _abi, runner) as unknown as RevertFallback;
  }
}
