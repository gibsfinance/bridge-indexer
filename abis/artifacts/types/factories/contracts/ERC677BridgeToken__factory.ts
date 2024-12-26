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
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  ERC677BridgeToken,
  ERC677BridgeTokenInterface,
} from "../../contracts/ERC677BridgeToken";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "mintingFinished",
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
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
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
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
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
    inputs: [
      {
        name: "_bridgeContract",
        type: "address",
      },
    ],
    name: "setBridgeContract",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
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
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
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
        name: "spender",
        type: "address",
      },
      {
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "transferAndCall",
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
    inputs: [
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseApproval",
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
        name: "_address",
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
    constant: false,
    inputs: [],
    name: "finishMinting",
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
    name: "getTokenInterfacesVersion",
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
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
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
        name: "spender",
        type: "address",
      },
      {
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    name: "bridgeContract",
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
        name: "_spender",
        type: "address",
      },
      {
        name: "_addedValue",
        type: "uint256",
      },
    ],
    name: "increaseApproval",
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
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_symbol",
        type: "string",
      },
      {
        name: "_decimals",
        type: "uint8",
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
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "MintFinished",
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
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "burner",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
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
      {
        indexed: false,
        name: "data",
        type: "bytes",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
  "0x60806040526006805460a060020a60ff02191690553480156200002157600080fd5b50604051620015a3380380620015a38339810160409081528151602080840151928401519184018051909493909301928491849184916200006891600091860190620000b2565b5081516200007e906001906020850190620000b2565b506002805460ff90921660ff19909216919091179055505060068054600160a060020a031916331790555062000157915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000f557805160ff191683800117855562000125565b8280016001018555821562000125579182015b828111156200012557825182559160200191906001019062000108565b506200013392915062000137565b5090565b6200015491905b808211156200013357600081556001016200013e565b90565b61143c80620001676000396000f30060806040526004361061013a5763ffffffff60e060020a60003504166305d2035b811461013f57806306fdde0314610168578063095ea7b3146101f25780630b26cf661461021657806318160ddd1461023957806323b872dd14610260578063313ce5671461028a57806339509351146102b55780634000aea0146102d957806340c10f191461030a57806342966c681461032e578063661884631461034657806369ffa08a1461036a57806370a0823114610391578063715018a6146103b2578063726600ce146103c75780637d64bcb4146103e8578063859ba28c146103fd5780638da5cb5b1461043e57806395d89b411461046f578063a457c2d714610484578063a9059cbb146104a8578063cd596583146104cc578063d73dd623146104e1578063dd62ed3e14610505578063f2fde38b1461052c575b600080fd5b34801561014b57600080fd5b5061015461054d565b604080519115158252519081900360200190f35b34801561017457600080fd5b5061017d61056e565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101b757818101518382015260200161019f565b50505050905090810190601f1680156101e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101fe57600080fd5b50610154600160a060020a03600435166024356105fc565b34801561022257600080fd5b50610237600160a060020a0360043516610662565b005b34801561024557600080fd5b5061024e6106bc565b60408051918252519081900360200190f35b34801561026c57600080fd5b50610154600160a060020a03600435811690602435166044356106c2565b34801561029657600080fd5b5061029f6106ef565b6040805160ff9092168252519081900360200190f35b3480156102c157600080fd5b50610154600160a060020a03600435166024356106f8565b3480156102e557600080fd5b5061015460048035600160a060020a031690602480359160443591820191013561070b565b34801561031657600080fd5b50610154600160a060020a036004351660243561081c565b34801561033a57600080fd5b50610237600435610927565b34801561035257600080fd5b50610154600160a060020a0360043516602435610934565b34801561037657600080fd5b50610237600160a060020a0360043581169060243516610a23565b34801561039d57600080fd5b5061024e600160a060020a0360043516610a48565b3480156103be57600080fd5b50610237610a63565b3480156103d357600080fd5b50610154600160a060020a0360043516610a7a565b3480156103f457600080fd5b50610154610a8e565b34801561040957600080fd5b50610412610a95565b6040805167ffffffffffffffff9485168152928416602084015292168183015290519081900360600190f35b34801561044a57600080fd5b50610453610aa0565b60408051600160a060020a039092168252519081900360200190f35b34801561047b57600080fd5b5061017d610aaf565b34801561049057600080fd5b50610154600160a060020a0360043516602435610b09565b3480156104b457600080fd5b50610154600160a060020a0360043516602435610b15565b3480156104d857600080fd5b50610453610b40565b3480156104ed57600080fd5b50610154600160a060020a0360043516602435610b4f565b34801561051157600080fd5b5061024e600160a060020a0360043581169060243516610be8565b34801561053857600080fd5b50610237600160a060020a0360043516610c13565b60065474010000000000000000000000000000000000000000900460ff1681565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105f45780601f106105c9576101008083540402835291602001916105f4565b820191906000526020600020905b8154815290600101906020018083116105d757829003601f168201915b505050505081565b336000818152600560209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b600654600160a060020a0316331461067957600080fd5b61068281610c33565b151561068d57600080fd5b6007805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60045490565b60006106cf848484610c3b565b15156106da57600080fd5b6106e5848484610da0565b5060019392505050565b60025460ff1681565b60006107048383610b4f565b9392505050565b600084600160a060020a0381161580159061072f5750600160a060020a0381163014155b151561073a57600080fd5b6107448686610ddc565b151561074f57600080fd5b85600160a060020a031633600160a060020a03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c16878787604051808481526020018060200182810382528484828181526020019250808284376040519201829003965090945050505050a36107c486610c33565b156108105761080533878787878080601f01602080910402602001604051908101604052809392919081815260200183838082843750610de8945050505050565b151561081057600080fd5b50600195945050505050565b600654600090600160a060020a0316331461083657600080fd5b60065474010000000000000000000000000000000000000000900460ff161561085e57600080fd5b600454610871908363ffffffff610f6516565b600455600160a060020a03831660009081526003602052604090205461089d908363ffffffff610f6516565b600160a060020a038416600081815260036020908152604091829020939093558051858152905191927f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688592918290030190a2604080518381529051600160a060020a038516916000916000805160206113f18339815191529181900360200190a350600192915050565b6109313382610f78565b50565b336000908152600560209081526040808320600160a060020a038616845290915281205480831061098857336000908152600560209081526040808320600160a060020a03881684529091528120556109bd565b610998818463ffffffff61106716565b336000908152600560209081526040808320600160a060020a03891684529091529020555b336000818152600560209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600654600160a060020a03163314610a3a57600080fd5b610a448282611079565b5050565b600160a060020a031660009081526003602052604090205490565b600654600160a060020a0316331461013a57600080fd5b600754600160a060020a0390811691161490565b6000806000fd5b600260056000909192565b600654600160a060020a031681565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105f45780601f106105c9576101008083540402835291602001916105f4565b60006107048383610934565b6000610b218383610ddc565b1515610b2c57600080fd5b610b37338484610da0565b50600192915050565b600754600160a060020a031690565b336000908152600560209081526040808320600160a060020a0386168452909152812054610b83908363ffffffff610f6516565b336000818152600560209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260056020908152604080832093909416825291909152205490565b600654600160a060020a03163314610c2a57600080fd5b610931816110b7565b6000903b1190565b600160a060020a038316600090815260036020526040812054821115610c6057600080fd5b600160a060020a0384166000908152600560209081526040808320338452909152902054821115610c9057600080fd5b600160a060020a0383161515610ca557600080fd5b600160a060020a038416600090815260036020526040902054610cce908363ffffffff61106716565b600160a060020a038086166000908152600360205260408082209390935590851681522054610d03908363ffffffff610f6516565b600160a060020a038085166000908152600360209081526040808320949094559187168152600582528281203382529091522054610d47908363ffffffff61106716565b600160a060020a03808616600081815260056020908152604080832033845282529182902094909455805186815290519287169391926000805160206113f1833981519152929181900390910190a35060019392505050565b610da982610a7a565b15610dd757604080516000815260208101909152610dcc90849084908490610de8565b1515610dd757600080fd5b505050565b60006107048383611135565b600083600160a060020a031663a4c0ed3660e060020a028685856040516024018084600160a060020a0316600160a060020a0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e60578181015183820152602001610e48565b50505050905090810190601f168015610e8d5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909916989098178852518151919790965086955093509150819050838360005b83811015610f1b578181015183820152602001610f03565b50505050905090810190601f168015610f485780820380516001836020036101000a031916815260200191505b509150506000604051808303816000865af1979650505050505050565b81810182811015610f7257fe5b92915050565b600160a060020a038216600090815260036020526040902054811115610f9d57600080fd5b600160a060020a038216600090815260036020526040902054610fc6908263ffffffff61106716565b600160a060020a038316600090815260036020526040902055600454610ff2908263ffffffff61106716565b600455604080518281529051600160a060020a038416917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a2604080518281529051600091600160a060020a038516916000805160206113f18339815191529181900360200190a35050565b60008282111561107357fe5b50900390565b80600160a060020a038116151561108f57600080fd5b600160a060020a03831615156110ad576110a882611204565b610dd7565b610dd78383611210565b600160a060020a03811615156110cc57600080fd5b600654604051600160a060020a038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36006805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b3360009081526003602052604081205482111561115157600080fd5b600160a060020a038316151561116657600080fd5b33600090815260036020526040902054611186908363ffffffff61106716565b3360009081526003602052604080822092909255600160a060020a038516815220546111b8908363ffffffff610f6516565b600160a060020a0384166000818152600360209081526040918290209390935580518581529051919233926000805160206113f18339815191529281900390910190a350600192915050565b3031610a4482826112c3565b604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290518391600091600160a060020a038416916370a0823191602480830192602092919082900301818787803b15801561127557600080fd5b505af1158015611289573d6000803e3d6000fd5b505050506040513d602081101561129f57600080fd5b505190506112bd600160a060020a038516848363ffffffff61132b16565b50505050565b604051600160a060020a0383169082156108fc029083906000818181858888f193505050501515610a445780826112f86113c0565b600160a060020a039091168152604051908190036020019082f080158015611324573d6000803e3d6000fd5b5050505050565b82600160a060020a031663a9059cbb83836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b15801561138e57600080fd5b505af11580156113a2573d6000803e3d6000fd5b505050503d15610dd75760206000803e6000511515610dd757600080fd5b6040516021806113d0833901905600608060405260405160208060218339810160405251600160a060020a038116ff00ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a7230582050fd779ac6f8aa41d56958ed0d4ea68a9e81d19c8cd87ad90daeb4a1e75098fb0029";

type ERC677BridgeTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC677BridgeTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC677BridgeToken__factory extends ContractFactory {
  constructor(...args: ERC677BridgeTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    );
  }
  override deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_name, _symbol, _decimals, overrides || {}) as Promise<
      ERC677BridgeToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC677BridgeToken__factory {
    return super.connect(runner) as ERC677BridgeToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC677BridgeTokenInterface {
    return new Interface(_abi) as ERC677BridgeTokenInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ERC677BridgeToken {
    return new Contract(address, _abi, runner) as unknown as ERC677BridgeToken;
  }
}