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
} from "../../common";

export interface InterestReceiverSwapToETHInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "wethToken"
      | "uniswapRouterV2"
      | "minReceivedFraction"
      | "compToken"
      | "claimTokens"
      | "renounceOwnership"
      | "onInterestReceived"
      | "owner"
      | "daiToken"
      | "setMinFractionReceived"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "OwnershipRenounced" | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(functionFragment: "wethToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "uniswapRouterV2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minReceivedFraction",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "compToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimTokens",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onInterestReceived",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "daiToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setMinFractionReceived",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "wethToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswapRouterV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minReceivedFraction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "compToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onInterestReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daiToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinFractionReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
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

export interface InterestReceiverSwapToETH extends BaseContract {
  connect(runner?: ContractRunner | null): InterestReceiverSwapToETH;
  waitForDeployment(): Promise<this>;

  interface: InterestReceiverSwapToETHInterface;

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

  wethToken: TypedContractMethod<[], [string], "view">;

  uniswapRouterV2: TypedContractMethod<[], [string], "view">;

  minReceivedFraction: TypedContractMethod<[], [bigint], "view">;

  compToken: TypedContractMethod<[], [string], "view">;

  claimTokens: TypedContractMethod<
    [_token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  onInterestReceived: TypedContractMethod<
    [_token: AddressLike],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  daiToken: TypedContractMethod<[], [string], "view">;

  setMinFractionReceived: TypedContractMethod<
    [_minFraction: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [_newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "wethToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "uniswapRouterV2"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "minReceivedFraction"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "compToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "claimTokens"
  ): TypedContractMethod<
    [_token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "onInterestReceived"
  ): TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "daiToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setMinFractionReceived"
  ): TypedContractMethod<[_minFraction: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[_newOwner: AddressLike], [void], "nonpayable">;

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

  filters: {
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
  };
}
