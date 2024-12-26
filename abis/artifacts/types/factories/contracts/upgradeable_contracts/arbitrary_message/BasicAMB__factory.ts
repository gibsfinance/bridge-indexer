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
  BasicAMB,
  BasicAMBInterface,
} from "../../../../contracts/upgradeable_contracts/arbitrary_message/BasicAMB";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "sourceChainId",
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
        name: "_sourceChainId",
        type: "uint256",
      },
      {
        name: "_destinationChainId",
        type: "uint256",
      },
      {
        name: "_validatorContract",
        type: "address",
      },
      {
        name: "_maxGasPerTx",
        type: "uint256",
      },
      {
        name: "_gasPrice",
        type: "uint256",
      },
      {
        name: "_requiredBlockConfirmations",
        type: "uint256",
      },
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "initialize",
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
    name: "isInitialized",
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
    name: "requiredBlockConfirmations",
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
    name: "getBridgeMode",
    outputs: [
      {
        name: "_data",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_sourceChainId",
        type: "uint256",
      },
      {
        name: "_destinationChainId",
        type: "uint256",
      },
    ],
    name: "setChainIds",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "allowReentrantRequests",
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
    inputs: [
      {
        name: "_maxGasPerTx",
        type: "uint256",
      },
    ],
    name: "setMaxGasPerTx",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "requiredSignatures",
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
    name: "validatorContract",
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
    name: "deployedAtBlock",
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
    name: "getBridgeInterfacesVersion",
    outputs: [
      {
        name: "major",
        type: "uint64",
      },
      {
        name: "minor",
        type: "uint64",
      },
      {
        name: "patch",
        type: "uint64",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_blockConfirmations",
        type: "uint256",
      },
    ],
    name: "setRequiredBlockConfirmations",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "destinationChainId",
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
        name: "_gasPrice",
        type: "uint256",
      },
    ],
    name: "setGasPrice",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_enable",
        type: "bool",
      },
    ],
    name: "setAllowReentrantRequests",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimalShift",
    outputs: [
      {
        name: "",
        type: "int256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "maxGasPerTx",
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
    name: "gasPrice",
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
        name: "gasPrice",
        type: "uint256",
      },
    ],
    name: "GasPriceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "requiredBlockConfirmations",
        type: "uint256",
      },
    ],
    name: "RequiredBlockConfirmationChanged",
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
  "0x608060405234801561001057600080fd5b50611267806100206000396000f30060806040526004361061010e5763ffffffff60e060020a6000350416631544298e811461011357806325fbf4ee1461013a578063392e53cd146101875780633f0a9f651461019c578063437764df146101b1578063467ad35a146101fb5780634d4cb7a21461021857806369ffa08a1461022d5780637bac29c7146102545780638d0680431461026c5780638da5cb5b1461028157806399439089146102b25780639a454b99146102c75780639cb7595a146102dc578063acf5c6891461031d578063b075061114610335578063bf1fe4201461034a578063c2231ad214610362578063dae5f0fd1461037c578063e5789d0314610391578063f2fde38b146103a6578063fe173b97146103c7575b600080fd5b34801561011f57600080fd5b506101286103dc565b60408051918252519081900360200190f35b34801561014657600080fd5b50610173600435602435600160a060020a03604435811690606435906084359060a4359060c4351661042a565b604080519115158252519081900360200190f35b34801561019357600080fd5b5061017361069e565b3480156101a857600080fd5b506101286106ef565b3480156101bd57600080fd5b506101c661073d565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b34801561020757600080fd5b50610216600435602435610761565b005b34801561022457600080fd5b5061017361078b565b34801561023957600080fd5b50610216600160a060020a03600435811690602435166107dc565b34801561026057600080fd5b50610216600435610864565b34801561027857600080fd5b506101286108cd565b34801561028d57600080fd5b50610296610945565b60408051600160a060020a039092168252519081900360200190f35b3480156102be57600080fd5b5061029661099c565b3480156102d357600080fd5b506101286109f3565b3480156102e857600080fd5b506102f1610a41565b6040805167ffffffffffffffff9485168152928416602084015292168183015290519081900360600190f35b34801561032957600080fd5b50610216600435610a4c565b34801561034157600080fd5b50610128610a74565b34801561035657600080fd5b50610216600435610ac2565b34801561036e57600080fd5b506102166004351515610ae7565b34801561038857600080fd5b50610128610b5e565b34801561039d57600080fd5b50610128610bac565b3480156103b257600080fd5b50610216600160a060020a0360043516610bfa565b3480156103d357600080fd5b50610128610c1f565b7f67d6f42a1ed69c62022f2d160ddc6f2f0acd37ad1db0c24f4702d7d3343a4add60009081526020527ff6c66672b1a9fe5622677597b0da8fd180a2c85696efbcf7fe4b1e0f4f0f61085490565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f6fde8202000000000000000000000000000000000000000000000000000000001781529151815160009330939291829190808383895b838110156104ab578181015183820152602001610493565b50505050905090810190601f1680156104d85780820380516001836020036101000a031916815260200191505b509150506000604051808303816000865af1915050158061056a575030600160a060020a0316636fde82026040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561053257600080fd5b505af1158015610546573d6000803e3d6000fd5b505050506040513d602081101561055c57600080fd5b5051600160a060020a031633145b8061057457503330145b151561057f57600080fd5b61058761069e565b1561059157600080fd5b61059a86610c6d565b15156105a557600080fd5b6105af8888610c75565b7fab54f3fbbe62c59b7876a9bf9bd5e0c22dbae93f4d8ee0438f7ce62b198eb0e0805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03881617905560006020819052437fe66bef0282a446f9848e2903380099bb6e431483ee78778868f33b4a154c818b557f2670ecc91ec356e32067fd27b36614132d727b84a1e03e08f412a4f2cf07597490527f3d7fe2ee9790702383ef0118b516833ef2542132d3ca4ac6c77f62f1230fa61085905561067084610dc5565b61067983610e4b565b61068282610ede565b61068a610fb5565b61069261069e565b98975050505050505050565b7f0a6f646cd611241d8073675e00d1a1ff700fbf1b53fcf473de56d1e6e4b714ba60005260046020527f078d888f9b66f3f8bfa10909e31f1e16240db73449f0500afdbbe3a70da457cc5460ff1690565b7f916daedf6915000ff68ced2f0b6773fe6f2582237f92c3c95bb4d7940723007160009081526020527fd2ea0feb732edb0ffe32efd33a6b9d24d46b16eb34a4d07ce256537b6f131e425490565b7f2544fbb90000000000000000000000000000000000000000000000000000000090565b610769610945565b600160a060020a0316331461077d57600080fd5b6107878282610c75565b5050565b7fffa3a5a0e192028fc343362a39c5688e5a60819a4dc5ab3ee70c25bc25b78dd660005260046020527f265a43ea29ede07170a30cb6d77d0ab5810eee752b72432f7be348bde74aa08f5460ff1690565b30600160a060020a0316636fde82026040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561081a57600080fd5b505af115801561082e573d6000803e3d6000fd5b505050506040513d602081101561084457600080fd5b5051600160a060020a0316331461085a57600080fd5b610787828261100c565b61086c610945565b600160a060020a0316331461088057600080fd5b7f2670ecc91ec356e32067fd27b36614132d727b84a1e03e08f412a4f2cf07597460009081526020527f3d7fe2ee9790702383ef0118b516833ef2542132d3ca4ac6c77f62f1230fa61055565b60006108d761099c565b600160a060020a0316638d0680436040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561091457600080fd5b505af1158015610928573d6000803e3d6000fd5b505050506040513d602081101561093e57600080fd5b5051905090565b7f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c060005260026020527fb7802e97e87ef2842a6cce7da7ffaeaedaa2f61a6a7870b23d9d01fc9b73712e54600160a060020a031690565b7f5a74bb7e202fb8e4bf311841c7d64ec19df195fee77d7e7ae749b27921b6ddfe60005260026020527fab54f3fbbe62c59b7876a9bf9bd5e0c22dbae93f4d8ee0438f7ce62b198eb0e054600160a060020a031690565b7fb120ceec05576ad0c710bc6e85f1768535e27554458f05dcbb5c65b8c7a749b060009081526020527fe66bef0282a446f9848e2903380099bb6e431483ee78778868f33b4a154c818b5490565b600660026000909192565b610a54610945565b600160a060020a03163314610a6857600080fd5b610a7181610e4b565b50565b7fbbd454018e72a3f6c02bbd785bacc49e46292744f3f6761276723823aa33232060009081526020527f242329173dfc316001df0a0c3d5a8f58a7ffb1a8b7d99c268303b9a741bacdf95490565b610aca610945565b600160a060020a03163314610ade57600080fd5b610a7181610dc5565b610aef610945565b600160a060020a03163314610b0357600080fd5b7fffa3a5a0e192028fc343362a39c5688e5a60819a4dc5ab3ee70c25bc25b78dd660005260046020527f265a43ea29ede07170a30cb6d77d0ab5810eee752b72432f7be348bde74aa08f805460ff1916911515919091179055565b7f1e8ecaafaddea96ed9ac6d2642dcdfe1bebe58a930b1085842d8fc122b371ee560009081526020527fd5c78dd9468716ca9bb96be25d56436811b20aab3523a9904b12deef1cab239d5490565b7f2670ecc91ec356e32067fd27b36614132d727b84a1e03e08f412a4f2cf07597460009081526020527f3d7fe2ee9790702383ef0118b516833ef2542132d3ca4ac6c77f62f1230fa6105490565b610c02610945565b600160a060020a03163314610c1657600080fd5b610a7181610ede565b7f55b3774520b5993024893d303890baa4e84b1244a43c60034d1ced2d3cf2b04b60009081526020527ff7d5eefab3776d7f0450bd0193564bcb4f832ce313ff2836c450fc63a4b944195490565b6000903b1190565b600080600080600086118015610c8b5750600085115b1515610c9657600080fd5b85851415610ca357600080fd5b506000925082915060ff905060015b831580610cbd575082155b15610d055783158015610cd1575085828716145b15610cda578093505b82158015610ce9575084828616145b15610cf2578092505b6101009190910260ff1790600101610cb2565b5050600060208190527ff6c66672b1a9fe5622677597b0da8fd180a2c85696efbcf7fe4b1e0f4f0f6108949094557f2f30286a16f86ee067618e1a246990e40c07b7749418a6dd3133f9cfb7e814cc919091557f242329173dfc316001df0a0c3d5a8f58a7ffb1a8b7d99c268303b9a741bacdf9919091557ffb792ae4ad11102b93f26a51b3749c2b3667f8b561566a4806d49896928115949091527f7b62b32ff48350e85ce95b571fde6f8b1096bc44a26db769ad6d0b3a26bf1c6d55565b7f55b3774520b5993024893d303890baa4e84b1244a43c60034d1ced2d3cf2b04b600090815260209081527ff7d5eefab3776d7f0450bd0193564bcb4f832ce313ff2836c450fc63a4b944198290556040805183815290517f52264b89e0fceafb26e79fd49ef8a366eb6297483bf4035b027f0c99a7ad512e929181900390910190a150565b60008111610e5857600080fd5b7f916daedf6915000ff68ced2f0b6773fe6f2582237f92c3c95bb4d79407230071600090815260209081527fd2ea0feb732edb0ffe32efd33a6b9d24d46b16eb34a4d07ce256537b6f131e428290556040805183815290517f4fb76205cd57c896b21511d2114137d8e901b4ccd659e1a0f97d6306795264fb929181900390910190a150565b600160a060020a0381161515610ef357600080fd5b7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0610f1c610945565b60408051600160a060020a03928316815291841660208301528051918290030190a17f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c060005260026020527fb7802e97e87ef2842a6cce7da7ffaeaedaa2f61a6a7870b23d9d01fc9b73712e805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b7f0a6f646cd611241d8073675e00d1a1ff700fbf1b53fcf473de56d1e6e4b714ba60005260046020527f078d888f9b66f3f8bfa10909e31f1e16240db73449f0500afdbbe3a70da457cc805460ff19166001179055565b80600160a060020a038116151561102257600080fd5b600160a060020a03831615156110405761103b8261104f565b61104a565b61104a838361105b565b505050565b3031610787828261110e565b604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290518391600091600160a060020a038416916370a0823191602480830192602092919082900301818787803b1580156110c057600080fd5b505af11580156110d4573d6000803e3d6000fd5b505050506040513d60208110156110ea57600080fd5b50519050611108600160a060020a038516848363ffffffff61117616565b50505050565b604051600160a060020a0383169082156108fc029083906000818181858888f19350505050151561078757808261114361120b565b600160a060020a039091168152604051908190036020019082f08015801561116f573d6000803e3d6000fd5b5050505050565b82600160a060020a031663a9059cbb83836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b1580156111d957600080fd5b505af11580156111ed573d6000803e3d6000fd5b505050503d1561104a5760206000803e600051151561104a57600080fd5b60405160218061121b833901905600608060405260405160208060218339810160405251600160a060020a038116ff00a165627a7a723058205923cbb3dfa796677ebde8774d754cd9f441f1b9b9f4ef0e41d3934f3095fd9f0029";

type BasicAMBConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BasicAMBConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BasicAMB__factory extends ContractFactory {
  constructor(...args: BasicAMBConstructorParams) {
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
      BasicAMB & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BasicAMB__factory {
    return super.connect(runner) as BasicAMB__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BasicAMBInterface {
    return new Interface(_abi) as BasicAMBInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): BasicAMB {
    return new Contract(address, _abi, runner) as unknown as BasicAMB;
  }
}
