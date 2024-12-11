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
  ERC677MultiBridgeToken,
  ERC677MultiBridgeTokenInterface,
} from "../../contracts/ERC677MultiBridgeToken";

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
        name: "_to",
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
        name: "result",
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
        name: "",
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
        name: "_sender",
        type: "address",
      },
      {
        name: "_recipient",
        type: "address",
      },
      {
        name: "_amount",
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
    name: "PERMIT_TYPEHASH",
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
    constant: true,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
        name: "_to",
        type: "address",
      },
      {
        name: "_addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        name: "result",
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
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "bridgePointers",
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
    name: "version",
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
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
    constant: false,
    inputs: [
      {
        name: "_holder",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_nonce",
        type: "uint256",
      },
      {
        name: "_expiry",
        type: "uint256",
      },
      {
        name: "_allowed",
        type: "bool",
      },
      {
        name: "_v",
        type: "uint8",
      },
      {
        name: "_r",
        type: "bytes32",
      },
      {
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    constant: true,
    inputs: [],
    name: "bridgeList",
    outputs: [
      {
        name: "",
        type: "address[]",
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
    name: "push",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "move",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "PERMIT_TYPEHASH_LEGACY",
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
    constant: true,
    inputs: [],
    name: "F_ADDR",
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
        name: "_holder",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
      {
        name: "_deadline",
        type: "uint256",
      },
      {
        name: "_v",
        type: "uint8",
      },
      {
        name: "_r",
        type: "bytes32",
      },
      {
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "permit",
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
        name: "_from",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "pull",
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
    name: "bridgeCount",
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
    inputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "address",
      },
    ],
    name: "expirations",
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
      {
        name: "_chainId",
        type: "uint256",
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
        name: "bridge",
        type: "address",
      },
    ],
    name: "BridgeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "bridge",
        type: "address",
      },
    ],
    name: "BridgeRemoved",
    type: "event",
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
  "0x60806040526006805460a060020a60ff02191690553480156200002157600080fd5b506040516200264738038062002647833981016040908152815160208084015192840151606085015192850180519095949094019390929185918591859185918591859185918491849184916200007e916000918601906200031d565b508151620000949060019060208501906200031d565b506002805460ff90921660ff19909216919091179055505060068054600160a060020a03191633179055505050801515620000ce57600080fd5b60405180807f454950373132446f6d61696e28737472696e67206e616d652c737472696e672081526020017f76657273696f6e2c75696e7432353620636861696e49642c616464726573732081526020017f766572696679696e67436f6e747261637429000000000000000000000000000081525060520190506040518091039020846040518082805190602001908083835b60208310620001825780518252601f19909201916020918201910162000161565b51815160209384036101000a600019018019909216911617905260408051929094018290038220828501855260018084527f3100000000000000000000000000000000000000000000000000000000000000928401928352945190965091945090928392508083835b602083106200020c5780518252601f199092019160209182019101620001eb565b51815160209384036101000a6000190180199092169116179052604080519290940182900382208282019890985281840196909652606081019690965250608085018690523060a0808701919091528151808703909101815260c09095019081905284519093849350850191508083835b602083106200029e5780518252601f1990920191602091820191016200027d565b51815160209384036101000a600019018019909216911617905260405191909301819003902060085550600160a060020a036000819052600b9091527fbd0a91c9f9d084bad1a56f4df6c4c08bf6a3c9ff457e1c2f0ccbc02ffda9d3b18054600160a060020a031916909117905550620003c298505050505050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200036057805160ff191683800117855562000390565b8280016001018555821562000390579182015b828111156200039057825182559160200191906001019062000373565b506200039e929150620003a2565b5090565b620003bf91905b808211156200039e5760008155600101620003a9565b90565b61227580620003d26000396000f3006080604052600436106101f55763ffffffff60e060020a60003504166304df017d81146101fa57806305d2035b1461021d57806306fdde0314610246578063095ea7b3146102d05780630b26cf66146102f457806318160ddd1461031557806323b872dd1461033c57806330adf81f14610366578063313ce5671461037b5780633644e515146103a657806339509351146103bb5780634000aea0146103df57806340c10f191461041057806342966c68146104345780634bcb88bc1461044c57806354fd4d5014610489578063661884631461049e57806369ffa08a146104c257806370a08231146104e9578063715018a61461050a578063726600ce1461051f5780637d64bcb4146105405780637ecebe0014610555578063859ba28c146105765780638da5cb5b146105b75780638fcbaf0c146105cc57806395d89b411461060a5780639712fdf81461061f5780639da38e2f14610640578063a457c2d7146106a5578063a9059cbb146106c9578063b753a98c146106ed578063bb35783b14610711578063c6a1dedf1461073b578063c794c76914610750578063cd59658314610765578063d505accf1461077a578063d73dd623146107b3578063dd62ed3e146107d7578063f2d5d56b146107fe578063f2fde38b14610822578063fbb2a53f14610843578063ff9e884d14610858575b600080fd5b34801561020657600080fd5b5061021b600160a060020a036004351661087f565b005b34801561022957600080fd5b506102326109eb565b604080519115158252519081900360200190f35b34801561025257600080fd5b5061025b610a0c565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561029557818101518382015260200161027d565b50505050905090810190601f1680156102c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102dc57600080fd5b50610232600160a060020a0360043516602435610a9a565b34801561030057600080fd5b5061021b600160a060020a03600435166101f5565b34801561032157600080fd5b5061032a610ab0565b60408051918252519081900360200190f35b34801561034857600080fd5b50610232600160a060020a0360043581169060243516604435610ab6565b34801561037257600080fd5b5061032a610c7e565b34801561038757600080fd5b50610390610ca2565b6040805160ff9092168252519081900360200190f35b3480156103b257600080fd5b5061032a610cab565b3480156103c757600080fd5b50610232600160a060020a0360043516602435610cb1565b3480156103eb57600080fd5b5061023260048035600160a060020a0316906024803591604435918201910135610cf2565b34801561041c57600080fd5b50610232600160a060020a0360043516602435610e03565b34801561044057600080fd5b5061021b600435610f0e565b34801561045857600080fd5b5061046d600160a060020a0360043516610f1b565b60408051600160a060020a039092168252519081900360200190f35b34801561049557600080fd5b5061025b610f36565b3480156104aa57600080fd5b50610232600160a060020a0360043516602435610f6d565b3480156104ce57600080fd5b5061021b600160a060020a036004358116906024351661104a565b3480156104f557600080fd5b5061032a600160a060020a036004351661106f565b34801561051657600080fd5b5061021b61108a565b34801561052b57600080fd5b50610232600160a060020a03600435166110a1565b34801561054c57600080fd5b506102326110db565b34801561056157600080fd5b5061032a600160a060020a03600435166110e2565b34801561058257600080fd5b5061058b6110f4565b6040805167ffffffffffffffff9485168152928416602084015292168183015290519081900360600190f35b3480156105c357600080fd5b5061046d6110ff565b3480156105d857600080fd5b5061021b600160a060020a0360043581169060243516604435606435608435151560ff60a4351660c43560e43561110e565b34801561061657600080fd5b5061025b61124c565b34801561062b57600080fd5b5061021b600160a060020a03600435166112a6565b34801561064c57600080fd5b506106556113c6565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610691578181015183820152602001610679565b505050509050019250505060405180910390f35b3480156106b157600080fd5b50610232600160a060020a036004351660243561149b565b3480156106d557600080fd5b50610232600160a060020a03600435166024356114ae565b3480156106f957600080fd5b5061021b600160a060020a03600435166024356114d0565b34801561071d57600080fd5b5061021b600160a060020a03600435811690602435166044356114e0565b34801561074757600080fd5b5061032a6114f1565b34801561075c57600080fd5b5061046d611515565b34801561077157600080fd5b5061046d6110db565b34801561078657600080fd5b5061021b600160a060020a036004358116906024351660443560643560ff6084351660a43560c435611520565b3480156107bf57600080fd5b50610232600160a060020a03600435166024356115fc565b3480156107e357600080fd5b5061032a600160a060020a0360043581169060243516611683565b34801561080a57600080fd5b5061021b600160a060020a03600435166024356116ae565b34801561082e57600080fd5b5061021b600160a060020a03600435166116b9565b34801561084f57600080fd5b5061032a6116d9565b34801561086457600080fd5b5061032a600160a060020a03600435811690602435166116df565b60065460009081908190600160a060020a0316331461089d57600080fd5b6108a6846110a1565b15156108b157600080fd5b505050600160a060020a038082166000908152600b6020526040812054908290526000805160206121ea83398151915254908216919081168015156108f557600080fd5b600160a060020a038181169085161461095057600160a060020a038082166000908152600b60205260409020549192509081169081148015906109405750600160a060020a03811615155b151561094b57600080fd5b6108f5565b600160a060020a038083166000908152600b6020526040808220805484881673ffffffffffffffffffffffffffffffffffffffff19918216179091559287168252902080549091169055600c546109ae90600163ffffffff6116fc16565b600c55604051600160a060020a038516907f5d9d5034656cb3ebfb0655057cd7f9b4077a9b42ff42ce223cbac5bc586d212690600090a250505050565b60065474010000000000000000000000000000000000000000900460ff1681565b6000805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610a925780601f10610a6757610100808354040283529160200191610a92565b820191906000526020600020905b815481529060010190602001808311610a7557829003601f168201915b505050505081565b6000610aa733848461170e565b50600192915050565b60045490565b600080600160a060020a0385161515610ace57600080fd5b600160a060020a0384161515610ae357600080fd5b600160a060020a038516600090815260036020526040902054610b0c908463ffffffff6116fc16565b600160a060020a038087166000908152600360205260408082209390935590861681522054610b41908463ffffffff61175016565b600160a060020a03808616600081815260036020908152604091829020949094558051878152905191939289169260008051602061220a83398151915292918290030190a3600160a060020a0385163314610c6857610ba08533611683565b90506000198114610c0a57610bbb818463ffffffff6116fc16565b600160a060020a03861660008181526005602090815260408083203380855290835292819020859055805194855251919360008051602061222a833981519152929081900390910190a3610c68565b600160a060020a0385166000908152600a602090815260408083203384529091529020541580610c5d5750600160a060020a0385166000908152600a602090815260408083203384529091529020544211155b1515610c6857600080fd5b610c7385858561175d565b506001949350505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60025460ff1681565b60085481565b336000818152600560209081526040808320600160a060020a03871684529091528120549091610aa7918590610ced908663ffffffff61175016565b61170e565b600084600160a060020a03811615801590610d165750600160a060020a0381163014155b1515610d2157600080fd5b610d2b8686611794565b1515610d3657600080fd5b85600160a060020a031633600160a060020a03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c16878787604051808481526020018060200182810382528484828181526020019250808284376040519201829003965090945050505050a3610dab866117a0565b15610df757610dec33878787878080601f016020809104026020016040519081016040528093929190818152602001838380828437506117a8945050505050565b1515610df757600080fd5b50600195945050505050565b600654600090600160a060020a03163314610e1d57600080fd5b60065474010000000000000000000000000000000000000000900460ff1615610e4557600080fd5b600454610e58908363ffffffff61175016565b600455600160a060020a038316600090815260036020526040902054610e84908363ffffffff61175016565b600160a060020a038416600081815260036020908152604091829020939093558051858152905191927f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d412139688592918290030190a2604080518381529051600160a060020a0385169160009160008051602061220a8339815191529181900360200190a350600192915050565b610f183382611925565b50565b600b60205260009081526040902054600160a060020a031681565b60408051808201909152600181527f3100000000000000000000000000000000000000000000000000000000000000602082015281565b336000908152600560209081526040808320600160a060020a0386168452909152812054808310610fc157336000908152600560209081526040808320600160a060020a0388168452909152812055610ff6565b610fd1818463ffffffff6116fc16565b336000908152600560209081526040808320600160a060020a03891684529091529020555b336000818152600560209081526040808320600160a060020a03891680855290835292819020548151908152905192939260008051602061222a833981519152929181900390910190a35060019392505050565b600654600160a060020a0316331461106157600080fd5b61106b8282611a14565b5050565b600160a060020a031660009081526003602052604090205490565b600654600160a060020a031633146101f557600080fd5b6000600160a060020a03828116148015906110d55750600160a060020a038281166000908152600b60205260409020541615155b92915050565b6000806000fd5b60096020526000908152604090205481565b600260056000909192565b600654600160a060020a031681565b60008086158061111e5750864211155b151561112957600080fd5b604080517fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb6020820152600160a060020a03808d16828401528b166060820152608081018a905260a0810189905287151560c0808301919091528251808303909101815260e090910190915261119e90611a52565b91506111ac82868686611b59565b600160a060020a038b81169116146111c357600080fd5b600160a060020a038a16600090815260096020526040902080546001810190915588146111ef57600080fd5b856111fb5760006111ff565b6000195b90508561120d57600061120f565b865b600160a060020a03808c166000908152600a60209081526040808320938e16835292905220556112408a8a83611d5b565b50505050505050505050565b60018054604080516020600284861615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610a925780601f10610a6757610100808354040283529160200191610a92565b600654600090600160a060020a031633146112c057600080fd5b600c546032116112cf57600080fd5b6112d8826117a0565b15156112e357600080fd5b6112ec826110a1565b156112f657600080fd5b50600160a060020a036000819052600b6020526000805160206121ea833981519152541680151561132657600080fd5b600b6020526000805160206121ea833981519152805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a038581169182179093556000908152604090208054909116918316919091179055600c5461138b906001611750565b600c55604051600160a060020a038316907f3cda433c5679ae4c6a5dea50840e222a42cba3695e4663de4366be899348422190600090a25050565b606080600080600c546040519080825280602002602001820160405280156113f8578160200160208202803883390190505b50600160a060020a036000818152600b6020526000805160206121ea83398151915254929550935016905080151561142f57600080fd5b600160a060020a03818116146114935780838381518110151561144e57fe5b600160a060020a0392831660209182029092018101919091529181166000908152600b909252604090912054600192909201911680151561148e57600080fd5b61142f565b509092915050565b60006114a78383610f6d565b9392505050565b60006114ba8383611794565b15156114c557600080fd5b610aa733848461175d565b6114db338383610ab6565b505050565b6114eb838383610ab6565b50505050565b7fea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb81565b600160a060020a0381565b6000804286101561153057600080fd5b600160a060020a03808a1660008181526009602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c99281019290925281830193909352928b166060840152608083018a905260a0830182905260c08084018a90528151808503909101815260e0909301905292506115c190611a52565b90506115cf81868686611b59565b600160a060020a038a81169116146115e657600080fd5b6115f189898961170e565b505050505050505050565b336000908152600560209081526040808320600160a060020a0386168452909152812054611630908363ffffffff61175016565b336000818152600560209081526040808320600160a060020a03891680855290835292819020859055805194855251919360008051602061222a833981519152929081900390910190a350600192915050565b600160a060020a03918216600090815260056020908152604080832093909416825291909152205490565b6114db823383610ab6565b600654600160a060020a031633146116d057600080fd5b610f1881611eb6565b600c5481565b600a60209081526000928352604080842090915290825290205481565b60008282111561170857fe5b50900390565b611719838383611d5b565b6000198114156114db57600160a060020a038084166000908152600a60209081526040808320938616835292905290812055505050565b818101828110156110d557fe5b611766826110a1565b156114db57604080516000815260208101909152611789908490849084906117a8565b15156114db57600080fd5b60006114a78383611f34565b6000903b1190565b600083600160a060020a031663a4c0ed3660e060020a028685856040516024018084600160a060020a0316600160a060020a0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611820578181015183820152602001611808565b50505050905090810190601f16801561184d5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909916989098178852518151919790965086955093509150819050838360005b838110156118db5781810151838201526020016118c3565b50505050905090810190601f1680156119085780820380516001836020036101000a031916815260200191505b509150506000604051808303816000865af1979650505050505050565b600160a060020a03821660009081526003602052604090205481111561194a57600080fd5b600160a060020a038216600090815260036020526040902054611973908263ffffffff6116fc16565b600160a060020a03831660009081526003602052604090205560045461199f908263ffffffff6116fc16565b600455604080518281529051600160a060020a038416917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a2604080518281529051600091600160a060020a0385169160008051602061220a8339815191529181900360200190a35050565b80600160a060020a0381161515611a2a57600080fd5b600160a060020a0383161515611a4857611a4382612003565b6114db565b6114db838361200f565b6000600854826040518082805190602001908083835b60208310611a875780518252601f199092019160209182019101611a68565b51815160209384036101000a6000190180199092169116179052604080519290940182900382207f190100000000000000000000000000000000000000000000000000000000000083830152602283019790975260428083019790975283518083039097018752606290910192839052855192945084935085019190508083835b60208310611b275780518252601f199092019160209182019101611b08565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912095945050505050565b6000808460ff16601b1480611b7157508460ff16601c145b1515611bed576040805160e560020a62461bcd02815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f7565000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611c8b576040805160e560020a62461bcd02815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f7565000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60408051600080825260208083018085528a905260ff8916838501526060830188905260808301879052925160019360a0808501949193601f19840193928390039091019190865af1158015611ce5573d6000803e3d6000fd5b5050604051601f190151915050600160a060020a0381161515611d52576040805160e560020a62461bcd02815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b600160a060020a0383161515611de0576040805160e560020a62461bcd028152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a0382161515611e66576040805160e560020a62461bcd02815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600160a060020a038084166000818152600560209081526040808320948716808452948252918290208590558151858152915160008051602061222a8339815191529281900390910190a3505050565b600160a060020a0381161515611ecb57600080fd5b600654604051600160a060020a038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36006805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b33600090815260036020526040812054821115611f5057600080fd5b600160a060020a0383161515611f6557600080fd5b33600090815260036020526040902054611f85908363ffffffff6116fc16565b3360009081526003602052604080822092909255600160a060020a03851681522054611fb7908363ffffffff61175016565b600160a060020a03841660008181526003602090815260409182902093909355805185815290519192339260008051602061220a8339815191529281900390910190a350600192915050565b303161106b82826120bc565b604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290518391600091600160a060020a038416916370a0823191602480830192602092919082900301818787803b15801561207457600080fd5b505af1158015612088573d6000803e3d6000fd5b505050506040513d602081101561209e57600080fd5b505190506114eb600160a060020a038516848363ffffffff61212416565b604051600160a060020a0383169082156108fc029083906000818181858888f19350505050151561106b5780826120f16121b9565b600160a060020a039091168152604051908190036020019082f08015801561211d573d6000803e3d6000fd5b5050505050565b82600160a060020a031663a9059cbb83836040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b15801561218757600080fd5b505af115801561219b573d6000803e3d6000fd5b505050503d156114db5760206000803e60005115156114db57600080fd5b6040516021806121c9833901905600608060405260405160208060218339810160405251600160a060020a038116ff00bd0a91c9f9d084bad1a56f4df6c4c08bf6a3c9ff457e1c2f0ccbc02ffda9d3b1ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a165627a7a7230582005f0e02862e8f3b5afa529ea6eb433704b7be515877845e77287296a26c89a1c0029";

type ERC677MultiBridgeTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC677MultiBridgeTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC677MultiBridgeToken__factory extends ContractFactory {
  constructor(...args: ERC677MultiBridgeTokenConstructorParams) {
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
    _chainId: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      _chainId,
      overrides || {}
    );
  }
  override deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _chainId: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      _chainId,
      overrides || {}
    ) as Promise<
      ERC677MultiBridgeToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ERC677MultiBridgeToken__factory {
    return super.connect(runner) as ERC677MultiBridgeToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC677MultiBridgeTokenInterface {
    return new Interface(_abi) as ERC677MultiBridgeTokenInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ERC677MultiBridgeToken {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ERC677MultiBridgeToken;
  }
}