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
  MessageRelay,
  MessageRelayInterface,
} from "../../../contracts/upgradeable_contracts/MessageRelay";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_txHash",
        type: "bytes32",
      },
    ],
    name: "relayedMessages",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610166806100206000396000f3006080604052600436106100405763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166321d800ec8114610045575b600080fd5b34801561005157600080fd5b5061005d600435610071565b604080519115158252519081900360200190f35b6000600460008360405160200180807f72656c617965644d657373616765730000000000000000000000000000000000815250600f0182600019166000191681526020019150506040516020818303038152906040526040518082805190602001908083835b602083106100f65780518252601f1990920191602091820191016100d7565b51815160209384036101000a600019018019909216911617905260408051929094018290039091208652850195909552929092016000205460ff16959450505050505600a165627a7a7230582002ed14ce8e17ce125c9e6c0a0be6633ac2eac108074673c449455b0f38c41aaa0029";

type MessageRelayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MessageRelayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MessageRelay__factory extends ContractFactory {
  constructor(...args: MessageRelayConstructorParams) {
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
      MessageRelay & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MessageRelay__factory {
    return super.connect(runner) as MessageRelay__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessageRelayInterface {
    return new Interface(_abi) as MessageRelayInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MessageRelay {
    return new Contract(address, _abi, runner) as unknown as MessageRelay;
  }
}