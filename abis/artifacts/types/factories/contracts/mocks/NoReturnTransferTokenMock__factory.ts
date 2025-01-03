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
  NoReturnTransferTokenMock,
  NoReturnTransferTokenMockInterface,
} from "../../../contracts/mocks/NoReturnTransferTokenMock";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
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
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102f5806100206000396000f3006080604052600436106100615763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166318160ddd811461006657806340c10f191461008d57806370a08231146100c5578063a9059cbb146100e6575b600080fd5b34801561007257600080fd5b5061007b61010c565b60408051918252519081900360200190f35b34801561009957600080fd5b506100b1600160a060020a0360043516602435610112565b604080519115158252519081900360200190f35b3480156100d157600080fd5b5061007b600160a060020a03600435166101af565b3480156100f257600080fd5b5061010a600160a060020a03600435166024356101ca565b005b60015490565b600154600090610128908363ffffffff6102a416565b600155600160a060020a038316600090815260208190526040902054610154908363ffffffff6102a416565b600160a060020a0384166000818152602081815260408083209490945583518681529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b600160a060020a031660009081526020819052604090205490565b336000908152602081905260409020548111156101e657600080fd5b600160a060020a03821615156101fb57600080fd5b3360009081526020819052604090205461021b908263ffffffff6102b716565b3360009081526020819052604080822092909255600160a060020a0384168152205461024d908263ffffffff6102a416565b600160a060020a038316600081815260208181526040918290209390935580518481529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b818101828110156102b157fe5b92915050565b6000828211156102c357fe5b509003905600a165627a7a723058204ea68ccf4282a1f190e389a7ccb93979a72bc908fc1f4c13bad38a72917d32b10029";

type NoReturnTransferTokenMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NoReturnTransferTokenMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NoReturnTransferTokenMock__factory extends ContractFactory {
  constructor(...args: NoReturnTransferTokenMockConstructorParams) {
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
      NoReturnTransferTokenMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): NoReturnTransferTokenMock__factory {
    return super.connect(runner) as NoReturnTransferTokenMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NoReturnTransferTokenMockInterface {
    return new Interface(_abi) as NoReturnTransferTokenMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): NoReturnTransferTokenMock {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as NoReturnTransferTokenMock;
  }
}
