/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface ERC677MultiBridgeTokenInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "removeBridge"
      | "mintingFinished"
      | "name"
      | "approve"
      | "setBridgeContract"
      | "totalSupply"
      | "transferFrom"
      | "PERMIT_TYPEHASH"
      | "decimals"
      | "DOMAIN_SEPARATOR"
      | "increaseAllowance"
      | "transferAndCall"
      | "mint"
      | "burn"
      | "bridgePointers"
      | "version"
      | "decreaseApproval"
      | "claimTokens"
      | "balanceOf"
      | "renounceOwnership"
      | "isBridge"
      | "finishMinting"
      | "nonces"
      | "getTokenInterfacesVersion"
      | "owner"
      | "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)"
      | "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)"
      | "symbol"
      | "addBridge"
      | "bridgeList"
      | "decreaseAllowance"
      | "transfer"
      | "push"
      | "move"
      | "PERMIT_TYPEHASH_LEGACY"
      | "F_ADDR"
      | "bridgeContract"
      | "increaseApproval"
      | "allowance"
      | "pull"
      | "transferOwnership"
      | "bridgeCount"
      | "expirations"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BridgeAdded"
      | "BridgeRemoved"
      | "Mint"
      | "MintFinished"
      | "OwnershipRenounced"
      | "OwnershipTransferred"
      | "Burn"
      | "Transfer(address,address,uint256,bytes)"
      | "Transfer(address,address,uint256)"
      | "Approval"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "removeBridge",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mintingFinished",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBridgeContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "PERMIT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferAndCall",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "bridgePointers",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseApproval",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimTokens",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isBridge",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "finishMinting",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nonces", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "getTokenInterfacesVersion",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addBridge",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bridgeList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "push",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "move",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "PERMIT_TYPEHASH_LEGACY",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "F_ADDR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bridgeContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseApproval",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pull",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bridgeCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "expirations",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "removeBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintingFinished",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBridgeContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PERMIT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bridgePointers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isBridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finishMinting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenInterfacesVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addBridge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bridgeList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "push", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PERMIT_TYPEHASH_LEGACY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "F_ADDR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bridgeContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pull", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bridgeCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expirations",
    data: BytesLike
  ): Result;
}

export namespace BridgeAddedEvent {
  export type InputTuple = [bridge: AddressLike];
  export type OutputTuple = [bridge: string];
  export interface OutputObject {
    bridge: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BridgeRemovedEvent {
  export type InputTuple = [bridge: AddressLike];
  export type OutputTuple = [bridge: string];
  export interface OutputObject {
    bridge: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MintEvent {
  export type InputTuple = [to: AddressLike, amount: BigNumberish];
  export type OutputTuple = [to: string, amount: bigint];
  export interface OutputObject {
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MintFinishedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipRenouncedEvent {
  export type InputTuple = [previousOwner: AddressLike];
  export type OutputTuple = [previousOwner: string];
  export interface OutputObject {
    previousOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BurnEvent {
  export type InputTuple = [burner: AddressLike, value: BigNumberish];
  export type OutputTuple = [burner: string, value: bigint];
  export interface OutputObject {
    burner: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace Transfer_address_address_uint256_bytes_Event {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [
    from: string,
    to: string,
    value: bigint,
    data: string
  ];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace Transfer_address_address_uint256_Event {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ERC677MultiBridgeToken extends BaseContract {
  connect(runner?: ContractRunner | null): ERC677MultiBridgeToken;
  waitForDeployment(): Promise<this>;

  interface: ERC677MultiBridgeTokenInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  removeBridge: TypedContractMethod<
    [_bridge: AddressLike],
    [void],
    "nonpayable"
  >;

  mintingFinished: TypedContractMethod<[], [boolean], "view">;

  name: TypedContractMethod<[], [string], "view">;

  approve: TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  setBridgeContract: TypedContractMethod<
    [arg0: AddressLike],
    [void],
    "nonpayable"
  >;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transferFrom: TypedContractMethod<
    [_sender: AddressLike, _recipient: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  PERMIT_TYPEHASH: TypedContractMethod<[], [string], "view">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  DOMAIN_SEPARATOR: TypedContractMethod<[], [string], "view">;

  increaseAllowance: TypedContractMethod<
    [_to: AddressLike, _addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferAndCall: TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish, _data: BytesLike],
    [boolean],
    "nonpayable"
  >;

  mint: TypedContractMethod<
    [_to: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  burn: TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;

  bridgePointers: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  version: TypedContractMethod<[], [string], "view">;

  decreaseApproval: TypedContractMethod<
    [_spender: AddressLike, _subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  claimTokens: TypedContractMethod<
    [_token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[_owner: AddressLike], [bigint], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  isBridge: TypedContractMethod<[_address: AddressLike], [boolean], "view">;

  finishMinting: TypedContractMethod<[], [boolean], "nonpayable">;

  nonces: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getTokenInterfacesVersion: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & { major: bigint; minor: bigint; patch: bigint }
    ],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)": TypedContractMethod<
    [
      _holder: AddressLike,
      _spender: AddressLike,
      _nonce: BigNumberish,
      _expiry: BigNumberish,
      _allowed: boolean,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": TypedContractMethod<
    [
      _holder: AddressLike,
      _spender: AddressLike,
      _value: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  addBridge: TypedContractMethod<[_bridge: AddressLike], [void], "nonpayable">;

  bridgeList: TypedContractMethod<[], [string[]], "view">;

  decreaseAllowance: TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transfer: TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  push: TypedContractMethod<
    [_to: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  move: TypedContractMethod<
    [_from: AddressLike, _to: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  PERMIT_TYPEHASH_LEGACY: TypedContractMethod<[], [string], "view">;

  F_ADDR: TypedContractMethod<[], [string], "view">;

  bridgeContract: TypedContractMethod<[], [string], "view">;

  increaseApproval: TypedContractMethod<
    [_spender: AddressLike, _addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  allowance: TypedContractMethod<
    [_owner: AddressLike, _spender: AddressLike],
    [bigint],
    "view"
  >;

  pull: TypedContractMethod<
    [_from: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [_newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  bridgeCount: TypedContractMethod<[], [bigint], "view">;

  expirations: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "removeBridge"
  ): TypedContractMethod<[_bridge: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "mintingFinished"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setBridgeContract"
  ): TypedContractMethod<[arg0: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [_sender: AddressLike, _recipient: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "PERMIT_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DOMAIN_SEPARATOR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "increaseAllowance"
  ): TypedContractMethod<
    [_to: AddressLike, _addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferAndCall"
  ): TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish, _data: BytesLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [_to: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "bridgePointers"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "decreaseApproval"
  ): TypedContractMethod<
    [_spender: AddressLike, _subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimTokens"
  ): TypedContractMethod<
    [_token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[_owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isBridge"
  ): TypedContractMethod<[_address: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "finishMinting"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "nonces"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTokenInterfacesVersion"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & { major: bigint; minor: bigint; patch: bigint }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)"
  ): TypedContractMethod<
    [
      _holder: AddressLike,
      _spender: AddressLike,
      _nonce: BigNumberish,
      _expiry: BigNumberish,
      _allowed: boolean,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)"
  ): TypedContractMethod<
    [
      _holder: AddressLike,
      _spender: AddressLike,
      _value: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addBridge"
  ): TypedContractMethod<[_bridge: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "bridgeList"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "decreaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "push"
  ): TypedContractMethod<
    [_to: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "move"
  ): TypedContractMethod<
    [_from: AddressLike, _to: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "PERMIT_TYPEHASH_LEGACY"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "F_ADDR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "bridgeContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "increaseApproval"
  ): TypedContractMethod<
    [_spender: AddressLike, _addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [_owner: AddressLike, _spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "pull"
  ): TypedContractMethod<
    [_from: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[_newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "bridgeCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "expirations"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  getEvent(
    key: "BridgeAdded"
  ): TypedContractEvent<
    BridgeAddedEvent.InputTuple,
    BridgeAddedEvent.OutputTuple,
    BridgeAddedEvent.OutputObject
  >;
  getEvent(
    key: "BridgeRemoved"
  ): TypedContractEvent<
    BridgeRemovedEvent.InputTuple,
    BridgeRemovedEvent.OutputTuple,
    BridgeRemovedEvent.OutputObject
  >;
  getEvent(
    key: "Mint"
  ): TypedContractEvent<
    MintEvent.InputTuple,
    MintEvent.OutputTuple,
    MintEvent.OutputObject
  >;
  getEvent(
    key: "MintFinished"
  ): TypedContractEvent<
    MintFinishedEvent.InputTuple,
    MintFinishedEvent.OutputTuple,
    MintFinishedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipRenounced"
  ): TypedContractEvent<
    OwnershipRenouncedEvent.InputTuple,
    OwnershipRenouncedEvent.OutputTuple,
    OwnershipRenouncedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Burn"
  ): TypedContractEvent<
    BurnEvent.InputTuple,
    BurnEvent.OutputTuple,
    BurnEvent.OutputObject
  >;
  getEvent(
    key: "Transfer(address,address,uint256,bytes)"
  ): TypedContractEvent<
    Transfer_address_address_uint256_bytes_Event.InputTuple,
    Transfer_address_address_uint256_bytes_Event.OutputTuple,
    Transfer_address_address_uint256_bytes_Event.OutputObject
  >;
  getEvent(
    key: "Transfer(address,address,uint256)"
  ): TypedContractEvent<
    Transfer_address_address_uint256_Event.InputTuple,
    Transfer_address_address_uint256_Event.OutputTuple,
    Transfer_address_address_uint256_Event.OutputObject
  >;
  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;

  filters: {
    "BridgeAdded(address)": TypedContractEvent<
      BridgeAddedEvent.InputTuple,
      BridgeAddedEvent.OutputTuple,
      BridgeAddedEvent.OutputObject
    >;
    BridgeAdded: TypedContractEvent<
      BridgeAddedEvent.InputTuple,
      BridgeAddedEvent.OutputTuple,
      BridgeAddedEvent.OutputObject
    >;

    "BridgeRemoved(address)": TypedContractEvent<
      BridgeRemovedEvent.InputTuple,
      BridgeRemovedEvent.OutputTuple,
      BridgeRemovedEvent.OutputObject
    >;
    BridgeRemoved: TypedContractEvent<
      BridgeRemovedEvent.InputTuple,
      BridgeRemovedEvent.OutputTuple,
      BridgeRemovedEvent.OutputObject
    >;

    "Mint(address,uint256)": TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;
    Mint: TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;

    "MintFinished()": TypedContractEvent<
      MintFinishedEvent.InputTuple,
      MintFinishedEvent.OutputTuple,
      MintFinishedEvent.OutputObject
    >;
    MintFinished: TypedContractEvent<
      MintFinishedEvent.InputTuple,
      MintFinishedEvent.OutputTuple,
      MintFinishedEvent.OutputObject
    >;

    "OwnershipRenounced(address)": TypedContractEvent<
      OwnershipRenouncedEvent.InputTuple,
      OwnershipRenouncedEvent.OutputTuple,
      OwnershipRenouncedEvent.OutputObject
    >;
    OwnershipRenounced: TypedContractEvent<
      OwnershipRenouncedEvent.InputTuple,
      OwnershipRenouncedEvent.OutputTuple,
      OwnershipRenouncedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Burn(address,uint256)": TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;
    Burn: TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;

    "Transfer(address,address,uint256,bytes)": TypedContractEvent<
      Transfer_address_address_uint256_bytes_Event.InputTuple,
      Transfer_address_address_uint256_bytes_Event.OutputTuple,
      Transfer_address_address_uint256_bytes_Event.OutputObject
    >;
    "Transfer(address,address,uint256)": TypedContractEvent<
      Transfer_address_address_uint256_Event.InputTuple,
      Transfer_address_address_uint256_Event.OutputTuple,
      Transfer_address_address_uint256_Event.OutputObject
    >;

    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
  };
}
