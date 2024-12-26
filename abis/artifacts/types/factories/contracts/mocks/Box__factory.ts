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
import type { Box, BoxInterface } from "../../../contracts/mocks/Box";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_i",
        type: "uint256",
      },
      {
        name: "_bridge",
        type: "address",
      },
      {
        name: "_executor",
        type: "address",
      },
    ],
    name: "setValueOnOtherNetworkUsingManualLane",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "status",
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
    name: "lastSender",
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
      {
        name: "_selector",
        type: "bytes32",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "makeAsyncCall",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "methodWillFail",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "value",
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
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "messageId",
    outputs: [
      {
        name: "",
        type: "bytes32",
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
        name: "_i",
        type: "uint256",
      },
      {
        name: "_bridge",
        type: "address",
      },
      {
        name: "_executor",
        type: "address",
      },
    ],
    name: "setValueOnOtherNetwork",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "data",
    outputs: [
      {
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "messageSourceChainId",
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
        name: "_bridge",
        type: "address",
      },
      {
        name: "_executor",
        type: "address",
      },
    ],
    name: "methodOutOfGasOnOtherNetwork",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "methodOutOfGas",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_bridge",
        type: "address",
      },
      {
        name: "_executor",
        type: "address",
      },
    ],
    name: "methodWillFailOnOtherNetwork",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "txHash",
    outputs: [
      {
        name: "",
        type: "bytes32",
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
        name: "_messageId",
        type: "bytes32",
      },
      {
        name: "_status",
        type: "bool",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onInformationReceived",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c44806100206000396000f3006080604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631ec6021681146100ea578063200d2ed214610116578063256fec881461013f57806337c1adc5146101705780633b171858146101a15780633fa4f245146101b657806355241077146101dd578063669f618b146101f55780636b75f02b1461020a57806373d4a13a146102345780639e307dff146102be578063b2333210146102d3578063b2d28688146102fa578063e6d003191461030f578063eb2c89a314610336578063f534de5b1461034b575b600080fd5b3480156100f657600080fd5b50610114600435600160a060020a0360243581169060443516610375565b005b34801561012257600080fd5b5061012b6104cb565b604080519115158252519081900360200190f35b34801561014b57600080fd5b506101546104d4565b60408051600160a060020a039092168252519081900360200190f35b34801561017c57600080fd5b5061011460048035600160a060020a03169060248035916044359182019101356104e3565b3480156101ad57600080fd5b506101146100e5565b3480156101c257600080fd5b506101cb610596565b60408051918252519081900360200190f35b3480156101e957600080fd5b5061011460043561059c565b34801561020157600080fd5b506101cb6107d8565b34801561021657600080fd5b50610114600435600160a060020a03602435811690604435166107de565b34801561024057600080fd5b506102496108b2565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561028357818101518382015260200161026b565b50505050905090810190601f1680156102b05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102ca57600080fd5b506101cb610940565b3480156102df57600080fd5b50610114600160a060020a0360043581169060243516610946565b34801561030657600080fd5b50610114610a62565b34801561031b57600080fd5b50610114600160a060020a0360043581169060243516610a80565b34801561034257600080fd5b506101cb610b4e565b34801561035757600080fd5b50610114600480359060248035151591604435918201910135610b54565b60408051602480820186905282518083038201815260449283018452602081018051600160e060020a03167f5524107700000000000000000000000000000000000000000000000000000000908117825294517f94643f71000000000000000000000000000000000000000000000000000000008152600160a060020a03878116600483019081526202294f96830187905260609583019586528451606484015284519496918a16956394643f71958a9589956084019180838360005b8381101561044a578181015183820152602001610432565b50505050905090810190601f1680156104775780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561049857600080fd5b505af11580156104ac573d6000803e3d6000fd5b505050506040513d60208110156104c257600080fd5b50505050505050565b60055460ff1681565b600154600160a060020a031681565b604080517f525ea937000000000000000000000000000000000000000000000000000000008152600481018581526024820192835260448201849052600160a060020a0387169263525ea937928792879287926064018484808284378201915050945050505050602060405180830381600087803b15801561056457600080fd5b505af1158015610578573d6000803e3d6000fd5b505050506040513d602081101561058e57600080fd5b505050505050565b60005481565b8060008190555033600160a060020a031663d67bdd256040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b1580156105fa57600080fd5b505af115801561060e573d6000803e3d6000fd5b505050506040513d602081101561062457600080fd5b50516001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055604080517f669f618b0000000000000000000000000000000000000000000000000000000081529051339163669f618b9160048083019260209291908290030181600087803b1580156106a457600080fd5b505af11580156106b8573d6000803e3d6000fd5b505050506040513d60208110156106ce57600080fd5b5051600255604080517f0ac1c31300000000000000000000000000000000000000000000000000000000815290513391630ac1c3139160048083019260209291908290030181600087803b15801561072557600080fd5b505af1158015610739573d6000803e3d6000fd5b505050506040513d602081101561074f57600080fd5b5051600355604080517f9e307dff00000000000000000000000000000000000000000000000000000000815290513391639e307dff9160048083019260209291908290030181600087803b1580156107a657600080fd5b505af11580156107ba573d6000803e3d6000fd5b505050506040513d60208110156107d057600080fd5b505160045550565b60025481565b60408051602480820186905282518083038201815260449283018452602081018051600160e060020a03167f5524107700000000000000000000000000000000000000000000000000000000908117825294517fdc8601b3000000000000000000000000000000000000000000000000000000008152600160a060020a03878116600483019081526202294f96830187905260609583019586528451606484015284519496918a169563dc8601b3958a9589956084019180838360008381101561044a578181015183820152602001610432565b6006805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109385780601f1061090d57610100808354040283529160200191610938565b820191906000526020600020905b81548152906001019060200180831161091b57829003601f168201915b505050505081565b60045481565b60408051600480825260248083018452602083018051600160e060020a03167fb2d2868800000000000000000000000000000000000000000000000000000000908117825294517fdc8601b3000000000000000000000000000000000000000000000000000000008152600160a060020a038781169482019485526103e8604483018190526060948301948552865160648401528651918a169563dc8601b3958a95899593949293919260849092019180838360005b83811015610a145781810151838201526020016109fc565b50505050905090810190601f168015610a415780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561056457600080fd5b6000805b6103e8811015610a7c5790810190600101610a66565b5050565b60408051600480825260248083018452602083018051600160e060020a03167f3b17185800000000000000000000000000000000000000000000000000000000908117825294517fdc8601b3000000000000000000000000000000000000000000000000000000008152600160a060020a038781169482019485526202294f604483018190526060948301948552865160648401528651918a169563dc8601b3958a958995939492939192608490920191808383600083811015610a145781810151838201526020016109fc565b60035481565b6002849055610b6560068383610b7d565b50506005805460ff1916921515929092179091555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610bbe5782800160ff19823516178555610beb565b82800160010185558215610beb579182015b82811115610beb578235825591602001919060010190610bd0565b50610bf7929150610bfb565b5090565b610c1591905b80821115610bf75760008155600101610c01565b905600a165627a7a72305820b01534dd4303da6f2418dc68e5bc7e1e2f8c63a378dbb3683a3436bbf68424f40029";

type BoxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Box__factory extends ContractFactory {
  constructor(...args: BoxConstructorParams) {
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
      Box & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Box__factory {
    return super.connect(runner) as Box__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoxInterface {
    return new Interface(_abi) as BoxInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Box {
    return new Contract(address, _abi, runner) as unknown as Box;
  }
}
