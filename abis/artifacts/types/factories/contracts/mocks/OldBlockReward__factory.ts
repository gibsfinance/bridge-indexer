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
  OldBlockReward,
  OldBlockRewardInterface,
} from "../../../contracts/mocks/OldBlockReward";

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
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060988061001e6000396000f300608060405260043610603e5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166310f2ee7c81146043575b600080fd5b348015604e57600080fd5b5060556067565b60408051918252519081900360200190f35b6003905600a165627a7a723058205a07964aa9547ea42221dacdec7dd0fad4940fc01d055772b865029d833fda2b0029";

type OldBlockRewardConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OldBlockRewardConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OldBlockReward__factory extends ContractFactory {
  constructor(...args: OldBlockRewardConstructorParams) {
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
      OldBlockReward & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): OldBlockReward__factory {
    return super.connect(runner) as OldBlockReward__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OldBlockRewardInterface {
    return new Interface(_abi) as OldBlockRewardInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OldBlockReward {
    return new Contract(address, _abi, runner) as unknown as OldBlockReward;
  }
}
