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
  UpgradeabilityProxy,
  UpgradeabilityProxyInterface,
} from "../../../contracts/upgradeability/UpgradeabilityProxy";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "version",
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
    name: "implementation",
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
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "version",
        type: "uint256",
      },
      {
        indexed: true,
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610156806100206000396000f30060806040526004361061004b5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166354fd4d5081146100a35780635c60da1b146100ca575b6000610055610108565b905073ffffffffffffffffffffffffffffffffffffffff8116151561007957600080fd5b60405136600082376000803683855af43d82016040523d6000833e80801561009f573d83f35b3d83fd5b3480156100af57600080fd5b506100b8610124565b60408051918252519081900360200190f35b3480156100d657600080fd5b506100df610108565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60015473ffffffffffffffffffffffffffffffffffffffff1690565b600054905600a165627a7a72305820bd46f168e52ea833698ef2974506a5d912a27374ba224d24d33876f5e35197fa0029";

type UpgradeabilityProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradeabilityProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradeabilityProxy__factory extends ContractFactory {
  constructor(...args: UpgradeabilityProxyConstructorParams) {
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
      UpgradeabilityProxy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): UpgradeabilityProxy__factory {
    return super.connect(runner) as UpgradeabilityProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeabilityProxyInterface {
    return new Interface(_abi) as UpgradeabilityProxyInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): UpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as UpgradeabilityProxy;
  }
}