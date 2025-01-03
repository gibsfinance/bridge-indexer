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
import type { NonPayableOverrides } from "../../../../common";
import type {
  RewardableHomeBridgeErcToNative,
  RewardableHomeBridgeErcToNativeInterface,
} from "../../../../contracts/upgradeable_contracts/erc20_to_native/RewardableHomeBridgeErcToNative";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setForeignFee",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setHomeFee",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_feeManager",
        type: "address",
      },
    ],
    name: "setFeeManagerContract",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
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
    constant: true,
    inputs: [
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "getAmountToBurn",
    outputs: [
      {
        name: "amount",
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
    name: "getHomeFee",
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
    name: "feeManagerContract",
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
    inputs: [],
    name: "getFeeManagerMode",
    outputs: [
      {
        name: "mode",
        type: "bytes4",
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
    constant: true,
    inputs: [],
    name: "getForeignFee",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "feeAmount",
        type: "uint256",
      },
      {
        indexed: true,
        name: "transactionHash",
        type: "bytes32",
      },
    ],
    name: "FeeDistributedFromAffirmation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "feeAmount",
        type: "uint256",
      },
      {
        indexed: true,
        name: "transactionHash",
        type: "bytes32",
      },
    ],
    name: "FeeDistributedFromSignatures",
    type: "event",
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
  "0x608060405234801561001057600080fd5b50610904806100206000396000f3006080604052600436106100a35763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663286c406681146100a857806334a9e148146100c257806360756f7c146100da5780638da5cb5b146100fb578063916850e91461012c57806394da17cd14610156578063dbe03a8b1461016b578063f2ba956114610180578063f2fde38b146101c7578063ffd66196146101e8575b600080fd5b3480156100b457600080fd5b506100c06004356101fd565b005b3480156100ce57600080fd5b506100c060043561023c565b3480156100e657600080fd5b506100c0600160a060020a0360043516610278565b34801561010757600080fd5b50610110610330565b60408051600160a060020a039092168252519081900360200190f35b34801561013857600080fd5b50610144600435610387565b60408051918252519081900360200190f35b34801561016257600080fd5b50610144610415565b34801561017757600080fd5b50610110610433565b34801561018c57600080fd5b5061019561048a565b604080517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff199092168252519081900360200190f35b3480156101d357600080fd5b506100c0600160a060020a0360043516610500565b3480156101f457600080fd5b50610144610525565b610205610330565b600160a060020a0316331461021957600080fd5b610239610224610433565b8260008051602061089983398151915261053e565b50565b610244610330565b600160a060020a0316331461025857600080fd5b610239610263610433565b826000805160206108b983398151915261053e565b610280610330565b600160a060020a0316331461029457600080fd5b600160a060020a03811615806102ae57506102ae816106aa565b15156102b957600080fd5b7f779a349c5bee7817f04c960f525ee3e2f2516078c38c68a3149787976ee837e560005260026020527fc155b21a14c4592b97825e495fbe0d2705fb46420018cac5bfa7a09c43fae517805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b7f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c060005260026020527fb7802e97e87ef2842a6cce7da7ffaeaedaa2f61a6a7870b23d9d01fc9b73712e54600160a060020a031690565b604080516024808201849052825180830390910181526044909101909152602081018051600160e060020a03167f916850e900000000000000000000000000000000000000000000000000000000179052600090816103e4610433565b9050602060008351602085016000855af28060203d14166001811461040857600080fd5b5050600051949350505050565b600061042e6000805160206108b98339815191526106b2565b905090565b7f779a349c5bee7817f04c960f525ee3e2f2516078c38c68a3149787976ee837e560005260026020527fc155b21a14c4592b97825e495fbe0d2705fb46420018cac5bfa7a09c43fae51754600160a060020a031690565b604080516004815260248101909152602081018051600160e060020a03167ff2ba956100000000000000000000000000000000000000000000000000000000179052600090816104d8610433565b9050600460008351602085016000855af28060203d1416156104fa5760005193505b50505090565b610508610330565b600160a060020a0316331461051c57600080fd5b610239816107c1565b600061042e6000805160206108998339815191526106b2565b6000816000805160206108b983398151915281148061056a575060008051602061089983398151915281145b151561057557600080fd5b6000805160206108b983398151915283146105b0577f286c4066000000000000000000000000000000000000000000000000000000006105d2565b7f34a9e148000000000000000000000000000000000000000000000000000000005b6040805160248082018890528251808303909101815260449091018252602081018051600160e060020a03167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19851617815291518151939550600160a060020a038916939192909182919080838360005b83811015610658578181015183820152602001610640565b50505050905090810190601f1680156106855780820380516001836020036101000a031916815260200191505b50915050600060405180830381855af491505015156106a357600080fd5b5050505050565b6000903b1190565b600080806060846000805160206108b98339815191528114806106e2575060008051602061089983398151915281145b15156106ed57600080fd5b6106f5610433565b93506000805160206108b98339815191528614610732577fffd6619600000000000000000000000000000000000000000000000000000000610754565b7f94da17cd000000000000000000000000000000000000000000000000000000005b60408051600481526024810190915260208082018051600160e060020a03167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19851617815282519396509194509160009182885af28060203d1416156107b75760005195505b5050505050919050565b600160a060020a03811615156107d657600080fd5b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e06107ff610330565b60408051600160a060020a03928316815291841660208301528051918290030190a17f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c060005260026020527fb7802e97e87ef2842a6cce7da7ffaeaedaa2f61a6a7870b23d9d01fc9b73712e805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600deb7f3adca07d6d1f708c1774389db532a2b2f18fd05a62b957e4089f4696ed589d93e5e92f7e37e490c25f0e50f7f4aad7cc94b308a566553280967be38bcf1a165627a7a723058207a61238709c8e6f95e7529c2f73daec54a25cb2b67f240ec78060b0bb3a9dbf40029";

type RewardableHomeBridgeErcToNativeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RewardableHomeBridgeErcToNativeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RewardableHomeBridgeErcToNative__factory extends ContractFactory {
  constructor(...args: RewardableHomeBridgeErcToNativeConstructorParams) {
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
      RewardableHomeBridgeErcToNative & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): RewardableHomeBridgeErcToNative__factory {
    return super.connect(runner) as RewardableHomeBridgeErcToNative__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardableHomeBridgeErcToNativeInterface {
    return new Interface(_abi) as RewardableHomeBridgeErcToNativeInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): RewardableHomeBridgeErcToNative {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as RewardableHomeBridgeErcToNative;
  }
}
