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
  InterestReceiverStakeBuyback,
  InterestReceiverStakeBuybackInterface,
} from "../../../contracts/upgradeable_contracts/InterestReceiverStakeBuyback";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "wethToken",
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
    name: "stakeToken",
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
    name: "uniswapRouterV2",
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
    name: "minReceivedFraction",
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
    name: "compToken",
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
        name: "_token",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
    ],
    name: "claimTokens",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "burnAddress",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_token",
        type: "address",
      },
    ],
    name: "onInterestReceived",
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
    inputs: [],
    name: "daiToken",
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
        name: "_minFraction",
        type: "uint256",
      },
    ],
    name: "setMinFractionReceived",
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
  "0x60806040819052600060018190558054600160a060020a031916331781557f095ea7b3000000000000000000000000000000000000000000000000000000008252737a250d5630b4cf539739df2c5dacb4c659f2488d60845260001960a452736b175474e89094c44da98b954eedeac495271d0f9163095ea7b39160c491602091604490829087803b15801561009457600080fd5b505af11580156100a8573d6000803e3d6000fd5b505050506040513d60208110156100be57600080fd5b5050604080517f095ea7b3000000000000000000000000000000000000000000000000000000008152737a250d5630b4cf539739df2c5dacb4c659f2488d60048201526000196024820152905173c00e94cb662c3520282e6f5717214004a7f268889163095ea7b39160448083019260209291908290030181600087803b15801561014857600080fd5b505af115801561015c573d6000803e3d6000fd5b505050506040513d602081101561017257600080fd5b5050610a9a806101836000396000f3006080604052600436106100ab5763ffffffff60e060020a6000350416634b57b0be81146100b057806351ed6a30146100e1578063596fa9e3146100f65780635adc334e1461010b5780636605dfa71461013257806369ffa08a1461014757806370d5ae0514610170578063715018a61461018557806381e3f2761461019a5780638da5cb5b146101bb578063be22f546146101d0578063e3e323f6146101e5578063f2fde38b146101fd575b600080fd5b3480156100bc57600080fd5b506100c561021e565b60408051600160a060020a039092168252519081900360200190f35b3480156100ed57600080fd5b506100c5610236565b34801561010257600080fd5b506100c561024e565b34801561011757600080fd5b50610120610266565b60408051918252519081900360200190f35b34801561013e57600080fd5b506100c561026c565b34801561015357600080fd5b5061016e600160a060020a0360043581169060243516610284565b005b34801561017c57600080fd5b506100c56102a9565b34801561019157600080fd5b5061016e6102af565b3480156101a657600080fd5b5061016e600160a060020a036004351661031b565b3480156101c757600080fd5b506100c5610748565b3480156101dc57600080fd5b506100c5610757565b3480156101f157600080fd5b5061016e60043561076f565b34801561020957600080fd5b5061016e600160a060020a036004351661079f565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b730ae055097c6d159879521c384f1d2123d1f195e681565b737a250d5630b4cf539739df2c5dacb4c659f2488d81565b60015481565b73c00e94cb662c3520282e6f5717214004a7f2688881565b600054600160a060020a0316331461029b57600080fd5b6102a582826107c2565b5050565b61dead81565b600054600160a060020a031633146102c657600080fd5b60008054604051600160a060020a03909116917ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482091a26000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6040805160038082526080820190925260609160009182916020820185803883390190505092508383600081518110151561035257fe5b600160a060020a03909216602092830290910190910152825173c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2908490600190811061038e57fe5b600160a060020a039092166020928302909101909101528251730ae055097c6d159879521c384f1d2123d1f195e690849060029081106103ca57fe5b600160a060020a039283166020918202909201810191909152604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051928716926370a08231926024808401939192918290030181600087803b15801561043b57600080fd5b505af115801561044f573d6000803e3d6000fd5b505050506040513d602081101561046557600080fd5b5051604080517fd06ca61f000000000000000000000000000000000000000000000000000000008152670de0b6b3a764000060048201818152602483019384528751604484015287519496506ec097ce7bc90715b34b9f100000000094737a250d5630b4cf539739df2c5dacb4c659f2488d9463d06ca61f948a93926064909101906020858101910280838360005b8381101561050c5781810151838201526020016104f4565b505050509050019350505050600060405180830381600087803b15801561053257600080fd5b505af1158015610546573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561056f57600080fd5b81019080805164010000000081111561058757600080fd5b8201602081018481111561059a57600080fd5b81518560208202830111640100000000821117156105b757600080fd5b5050805190935060029250821090506105cc57fe5b906020019060200201518360015402028115156105e557fe5b049050737a250d5630b4cf539739df2c5dacb4c659f2488d600160a060020a03166338ed173983838661dead426040518663ffffffff1660e060020a028152600401808681526020018581526020018060200184600160a060020a0316600160a060020a03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b8381101561068e578181015183820152602001610676565b505050509050019650505050505050600060405180830381600087803b1580156106b757600080fd5b505af11580156106cb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156106f457600080fd5b81019080805164010000000081111561070c57600080fd5b8201602081018481111561071f57600080fd5b815185602082028301116401000000008211171561073c57600080fd5b50505050505050505050565b600054600160a060020a031681565b736b175474e89094c44da98b954eedeac495271d0f81565b600054600160a060020a0316331461078657600080fd5b670de0b6b3a7640000811061079a57600080fd5b600155565b600054600160a060020a031633146107b657600080fd5b6107bf81610805565b50565b80600160a060020a03811615156107d857600080fd5b600160a060020a03831615156107f6576107f182610882565b610800565b610800838361088e565b505050565b600160a060020a038116151561081a57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b30316102a58282610941565b604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290518391600091600160a060020a038416916370a0823191602480830192602092919082900301818787803b1580156108f357600080fd5b505af1158015610907573d6000803e3d6000fd5b505050506040513d602081101561091d57600080fd5b5051905061093b600160a060020a038516848363ffffffff6109a916565b50505050565b604051600160a060020a0383169082156108fc029083906000818181858888f1935050505015156102a5578082610976610a3e565b600160a060020a039091168152604051908190036020019082f0801580156109a2573d6000803e3d6000fd5b5050505050565b82600160a060020a031663a9059cbb83836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b158015610a0c57600080fd5b505af1158015610a20573d6000803e3d6000fd5b505050503d156108005760206000803e600051151561080057600080fd5b604051602180610a4e833901905600608060405260405160208060218339810160405251600160a060020a038116ff00a165627a7a723058203740804d33a973f32e7e2fcd62c9696891dc1a5586cfe4ec7b2ae95c49128a9c0029";

type InterestReceiverStakeBuybackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InterestReceiverStakeBuybackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InterestReceiverStakeBuyback__factory extends ContractFactory {
  constructor(...args: InterestReceiverStakeBuybackConstructorParams) {
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
      InterestReceiverStakeBuyback & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): InterestReceiverStakeBuyback__factory {
    return super.connect(runner) as InterestReceiverStakeBuyback__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InterestReceiverStakeBuybackInterface {
    return new Interface(_abi) as InterestReceiverStakeBuybackInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): InterestReceiverStakeBuyback {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as InterestReceiverStakeBuyback;
  }
}
