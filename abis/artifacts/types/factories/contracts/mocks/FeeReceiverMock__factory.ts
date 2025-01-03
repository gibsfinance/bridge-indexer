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
import type { NonPayableOverrides } from "../../../common";
import type {
  FeeReceiverMock,
  FeeReceiverMockInterface,
} from "../../../contracts/mocks/FeeReceiverMock";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "mediator",
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
        name: "",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
      {
        name: "",
        type: "bytes",
      },
    ],
    name: "onTokenTransfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token",
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
    inputs: [
      {
        name: "_mediator",
        type: "address",
      },
      {
        name: "_token",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405160408061028483398101604052805160209091015160008054600160a060020a03938416600160a060020a0319918216179091556001805493909216921691909117905561021d806100676000396000f3006080604052600436106100565763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416636d0501f6811461005b578063a4c0ed3614610099578063fc0c546a146100eb575b600080fd5b34801561006757600080fd5b50610070610100565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100a557600080fd5b506100d76004803573ffffffffffffffffffffffffffffffffffffffff1690602480359160443591820191013561011c565b604080519115158252519081900360200190f35b3480156100f757600080fd5b506100706101d5565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60015460008054604080517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff92831660048201526024810188905290519293919091169163a9059cbb9160448082019260209290919082900301818787803b15801561019e57600080fd5b505af11580156101b2573d6000803e3d6000fd5b505050506040513d60208110156101c857600080fd5b5060019695505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582056ace7b882b3882f3f0fa3b2e498f2bfda0455579ca9a3ef4b76c8946d01e0400029";

type FeeReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeReceiverMock__factory extends ContractFactory {
  constructor(...args: FeeReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _mediator: AddressLike,
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_mediator, _token, overrides || {});
  }
  override deploy(
    _mediator: AddressLike,
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_mediator, _token, overrides || {}) as Promise<
      FeeReceiverMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FeeReceiverMock__factory {
    return super.connect(runner) as FeeReceiverMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeReceiverMockInterface {
    return new Interface(_abi) as FeeReceiverMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FeeReceiverMock {
    return new Contract(address, _abi, runner) as unknown as FeeReceiverMock;
  }
}
