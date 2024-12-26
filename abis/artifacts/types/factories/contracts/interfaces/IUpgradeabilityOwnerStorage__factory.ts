/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IUpgradeabilityOwnerStorage,
  IUpgradeabilityOwnerStorageInterface,
} from "../../../contracts/interfaces/IUpgradeabilityOwnerStorage";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "upgradeabilityOwner",
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

export class IUpgradeabilityOwnerStorage__factory {
  static readonly abi = _abi;
  static createInterface(): IUpgradeabilityOwnerStorageInterface {
    return new Interface(_abi) as IUpgradeabilityOwnerStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IUpgradeabilityOwnerStorage {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IUpgradeabilityOwnerStorage;
  }
}
