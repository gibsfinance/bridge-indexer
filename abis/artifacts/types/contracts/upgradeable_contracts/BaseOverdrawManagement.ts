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

export interface BaseOverdrawManagementInterface extends Interface {
  getFunction(
    nameOrSignature: "outOfLimitAmount" | "fixAssetsAboveLimits"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "MediatorAmountLimitExceeded"
      | "AmountLimitExceeded"
      | "AssetAboveLimitsFixed"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "outOfLimitAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fixAssetsAboveLimits",
    values: [BytesLike, boolean, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "outOfLimitAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fixAssetsAboveLimits",
    data: BytesLike
  ): Result;
}

export namespace MediatorAmountLimitExceededEvent {
  export type InputTuple = [
    recipient: AddressLike,
    value: BigNumberish,
    messageId: BytesLike
  ];
  export type OutputTuple = [
    recipient: string,
    value: bigint,
    messageId: string
  ];
  export interface OutputObject {
    recipient: string;
    value: bigint;
    messageId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AmountLimitExceededEvent {
  export type InputTuple = [
    recipient: AddressLike,
    value: BigNumberish,
    transactionHash: BytesLike,
    messageId: BytesLike
  ];
  export type OutputTuple = [
    recipient: string,
    value: bigint,
    transactionHash: string,
    messageId: string
  ];
  export interface OutputObject {
    recipient: string;
    value: bigint;
    transactionHash: string;
    messageId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AssetAboveLimitsFixedEvent {
  export type InputTuple = [
    messageId: BytesLike,
    value: BigNumberish,
    remaining: BigNumberish
  ];
  export type OutputTuple = [
    messageId: string,
    value: bigint,
    remaining: bigint
  ];
  export interface OutputObject {
    messageId: string;
    value: bigint;
    remaining: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BaseOverdrawManagement extends BaseContract {
  connect(runner?: ContractRunner | null): BaseOverdrawManagement;
  waitForDeployment(): Promise<this>;

  interface: BaseOverdrawManagementInterface;

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

  outOfLimitAmount: TypedContractMethod<[], [bigint], "view">;

  fixAssetsAboveLimits: TypedContractMethod<
    [
      messageId: BytesLike,
      unlockOnForeign: boolean,
      valueToUnlock: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "outOfLimitAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fixAssetsAboveLimits"
  ): TypedContractMethod<
    [
      messageId: BytesLike,
      unlockOnForeign: boolean,
      valueToUnlock: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "MediatorAmountLimitExceeded"
  ): TypedContractEvent<
    MediatorAmountLimitExceededEvent.InputTuple,
    MediatorAmountLimitExceededEvent.OutputTuple,
    MediatorAmountLimitExceededEvent.OutputObject
  >;
  getEvent(
    key: "AmountLimitExceeded"
  ): TypedContractEvent<
    AmountLimitExceededEvent.InputTuple,
    AmountLimitExceededEvent.OutputTuple,
    AmountLimitExceededEvent.OutputObject
  >;
  getEvent(
    key: "AssetAboveLimitsFixed"
  ): TypedContractEvent<
    AssetAboveLimitsFixedEvent.InputTuple,
    AssetAboveLimitsFixedEvent.OutputTuple,
    AssetAboveLimitsFixedEvent.OutputObject
  >;

  filters: {
    "MediatorAmountLimitExceeded(address,uint256,bytes32)": TypedContractEvent<
      MediatorAmountLimitExceededEvent.InputTuple,
      MediatorAmountLimitExceededEvent.OutputTuple,
      MediatorAmountLimitExceededEvent.OutputObject
    >;
    MediatorAmountLimitExceeded: TypedContractEvent<
      MediatorAmountLimitExceededEvent.InputTuple,
      MediatorAmountLimitExceededEvent.OutputTuple,
      MediatorAmountLimitExceededEvent.OutputObject
    >;

    "AmountLimitExceeded(address,uint256,bytes32,bytes32)": TypedContractEvent<
      AmountLimitExceededEvent.InputTuple,
      AmountLimitExceededEvent.OutputTuple,
      AmountLimitExceededEvent.OutputObject
    >;
    AmountLimitExceeded: TypedContractEvent<
      AmountLimitExceededEvent.InputTuple,
      AmountLimitExceededEvent.OutputTuple,
      AmountLimitExceededEvent.OutputObject
    >;

    "AssetAboveLimitsFixed(bytes32,uint256,uint256)": TypedContractEvent<
      AssetAboveLimitsFixedEvent.InputTuple,
      AssetAboveLimitsFixedEvent.OutputTuple,
      AssetAboveLimitsFixedEvent.OutputObject
    >;
    AssetAboveLimitsFixed: TypedContractEvent<
      AssetAboveLimitsFixedEvent.InputTuple,
      AssetAboveLimitsFixedEvent.OutputTuple,
      AssetAboveLimitsFixedEvent.OutputObject
    >;
  };
}
