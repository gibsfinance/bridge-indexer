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
  InterestReceiverSwapToETH,
  InterestReceiverSwapToETHInterface,
} from "../../../contracts/upgradeable_contracts/InterestReceiverSwapToETH";

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
    payable: true,
    stateMutability: "payable",
    type: "fallback",
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
  "0x60806040819052600060018190558054600160a060020a031916331781557f095ea7b3000000000000000000000000000000000000000000000000000000008252737a250d5630b4cf539739df2c5dacb4c659f2488d60845260001960a452736b175474e89094c44da98b954eedeac495271d0f9163095ea7b39160c491602091604490829087803b15801561009457600080fd5b505af11580156100a8573d6000803e3d6000fd5b505050506040513d60208110156100be57600080fd5b5050604080517f095ea7b3000000000000000000000000000000000000000000000000000000008152737a250d5630b4cf539739df2c5dacb4c659f2488d60048201526000196024820152905173c00e94cb662c3520282e6f5717214004a7f268889163095ea7b39160448083019260209291908290030181600087803b15801561014857600080fd5b505af115801561015c573d6000803e3d6000fd5b505050506040513d602081101561017257600080fd5b50506109fa806101836000396000f3006080604052600436106100955763ffffffff60e060020a6000350416634b57b0be8114610097578063596fa9e3146100c85780635adc334e146100dd5780636605dfa71461010457806369ffa08a14610119578063715018a61461014057806381e3f276146101555780638da5cb5b14610176578063be22f5461461018b578063e3e323f6146101a0578063f2fde38b146101b8575b005b3480156100a357600080fd5b506100ac6101d9565b60408051600160a060020a039092168252519081900360200190f35b3480156100d457600080fd5b506100ac6101f1565b3480156100e957600080fd5b506100f2610209565b60408051918252519081900360200190f35b34801561011057600080fd5b506100ac61020f565b34801561012557600080fd5b50610095600160a060020a0360043581169060243516610227565b34801561014c57600080fd5b5061009561024c565b34801561016157600080fd5b50610095600160a060020a03600435166102b8565b34801561018257600080fd5b506100ac6106a8565b34801561019757600080fd5b506100ac6106b7565b3480156101ac57600080fd5b506100956004356106cf565b3480156101c457600080fd5b50610095600160a060020a03600435166106ff565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b737a250d5630b4cf539739df2c5dacb4c659f2488d81565b60015481565b73c00e94cb662c3520282e6f5717214004a7f2688881565b600054600160a060020a0316331461023e57600080fd5b6102488282610722565b5050565b600054600160a060020a0316331461026357600080fd5b60008054604051600160a060020a03909116917ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482091a26000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60408051600280825260608281019093526000918291816020016020820280388339019050509250838360008151811015156102f057fe5b600160a060020a03909216602092830290910190910152825173c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2908490600190811061032c57fe5b600160a060020a039283166020918202909201810191909152604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051928716926370a08231926024808401939192918290030181600087803b15801561039d57600080fd5b505af11580156103b1573d6000803e3d6000fd5b505050506040513d60208110156103c757600080fd5b5051604080517fd06ca61f000000000000000000000000000000000000000000000000000000008152670de0b6b3a764000060048201818152602483019384528751604484015287519496506ec097ce7bc90715b34b9f100000000094737a250d5630b4cf539739df2c5dacb4c659f2488d9463d06ca61f948a93926064909101906020858101910280838360005b8381101561046e578181015183820152602001610456565b505050509050019350505050600060405180830381600087803b15801561049457600080fd5b505af11580156104a8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156104d157600080fd5b8101908080516401000000008111156104e957600080fd5b820160208101848111156104fc57600080fd5b815185602082028301116401000000008211171561051957600080fd5b50508051909350600192508210905061052e57fe5b9060200190602002015183600154020281151561054757fe5b049050737a250d5630b4cf539739df2c5dacb4c659f2488d600160a060020a03166318cbafe583838630426040518663ffffffff1660e060020a028152600401808681526020018581526020018060200184600160a060020a0316600160a060020a03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b838110156105ee5781810151838201526020016105d6565b505050509050019650505050505050600060405180830381600087803b15801561061757600080fd5b505af115801561062b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561065457600080fd5b81019080805164010000000081111561066c57600080fd5b8201602081018481111561067f57600080fd5b815185602082028301116401000000008211171561069c57600080fd5b50505050505050505050565b600054600160a060020a031681565b736b175474e89094c44da98b954eedeac495271d0f81565b600054600160a060020a031633146106e657600080fd5b670de0b6b3a764000081106106fa57600080fd5b600155565b600054600160a060020a0316331461071657600080fd5b61071f81610765565b50565b80600160a060020a038116151561073857600080fd5b600160a060020a038316151561075657610751826107e2565b610760565b61076083836107ee565b505050565b600160a060020a038116151561077a57600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b303161024882826108a1565b604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290518391600091600160a060020a038416916370a0823191602480830192602092919082900301818787803b15801561085357600080fd5b505af1158015610867573d6000803e3d6000fd5b505050506040513d602081101561087d57600080fd5b5051905061089b600160a060020a038516848363ffffffff61090916565b50505050565b604051600160a060020a0383169082156108fc029083906000818181858888f1935050505015156102485780826108d661099e565b600160a060020a039091168152604051908190036020019082f080158015610902573d6000803e3d6000fd5b5050505050565b82600160a060020a031663a9059cbb83836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b15801561096c57600080fd5b505af1158015610980573d6000803e3d6000fd5b505050503d156107605760206000803e600051151561076057600080fd5b6040516021806109ae833901905600608060405260405160208060218339810160405251600160a060020a038116ff00a165627a7a72305820f6f520de0d1626fc74b780e0871bc624160e829f06d08406f2f516f4e46cf0510029";

type InterestReceiverSwapToETHConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InterestReceiverSwapToETHConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InterestReceiverSwapToETH__factory extends ContractFactory {
  constructor(...args: InterestReceiverSwapToETHConstructorParams) {
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
      InterestReceiverSwapToETH & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): InterestReceiverSwapToETH__factory {
    return super.connect(runner) as InterestReceiverSwapToETH__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InterestReceiverSwapToETHInterface {
    return new Interface(_abi) as InterestReceiverSwapToETHInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): InterestReceiverSwapToETH {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as InterestReceiverSwapToETH;
  }
}