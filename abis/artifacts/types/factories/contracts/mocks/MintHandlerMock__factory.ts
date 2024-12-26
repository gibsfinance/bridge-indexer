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
  MintHandlerMock,
  MintHandlerMockInterface,
} from "../../../contracts/mocks/MintHandlerMock";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_bridge",
        type: "address",
      },
    ],
    name: "removeBridge",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
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
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "isBridge",
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
        name: "_bridge",
        type: "address",
      },
    ],
    name: "addBridge",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_newOwner",
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
        name: "_token",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
    ],
    name: "OwnershipRenounced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516020806104a8833981016040525160008054600160a060020a0319908116331790915560018054600160a060020a03909316929091169190911790556104498061005f6000396000f30060806040526004361061008d5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166304df017d811461009257806340c10f19146100b5578063715018a6146100ed578063726600ce146101025780638da5cb5b146101235780639712fdf814610154578063f2fde38b14610175578063fc0c546a14610196575b600080fd5b34801561009e57600080fd5b506100b3600160a060020a03600435166101ab565b005b3480156100c157600080fd5b506100d9600160a060020a03600435166024356101e3565b604080519115158252519081900360200190f35b3480156100f957600080fd5b506100b36102a3565b34801561010e57600080fd5b506100d9600160a060020a036004351661030f565b34801561012f57600080fd5b50610138610324565b60408051600160a060020a039092168252519081900360200190f35b34801561016057600080fd5b506100b3600160a060020a0360043516610333565b34801561018157600080fd5b506100b3600160a060020a036004351661036e565b3480156101a257600080fd5b50610138610391565b600054600160a060020a031633146101c257600080fd5b600160a060020a03166000908152600260205260409020805460ff19169055565b3360009081526002602052604081205460ff16151561020157600080fd5b600154604080517f40c10f19000000000000000000000000000000000000000000000000000000008152600160a060020a03868116600483015260248201869052915191909216916340c10f199160448083019260209291908290030181600087803b15801561027057600080fd5b505af1158015610284573d6000803e3d6000fd5b505050506040513d602081101561029a57600080fd5b50519392505050565b600054600160a060020a031633146102ba57600080fd5b60008054604051600160a060020a03909116917ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482091a26000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60026020526000908152604090205460ff1681565b600054600160a060020a031681565b600054600160a060020a0316331461034a57600080fd5b600160a060020a03166000908152600260205260409020805460ff19166001179055565b600054600160a060020a0316331461038557600080fd5b61038e816103a0565b50565b600154600160a060020a031681565b600160a060020a03811615156103b557600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820995f7fba25f8bb0f7b4eee173c0a0299bc772fbca20f01b80a39f0f13d63559c0029";

type MintHandlerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MintHandlerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MintHandlerMock__factory extends ContractFactory {
  constructor(...args: MintHandlerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override deploy(
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_token, overrides || {}) as Promise<
      MintHandlerMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MintHandlerMock__factory {
    return super.connect(runner) as MintHandlerMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintHandlerMockInterface {
    return new Interface(_abi) as MintHandlerMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MintHandlerMock {
    return new Contract(address, _abi, runner) as unknown as MintHandlerMock;
  }
}
