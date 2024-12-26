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

export interface BaseERC677BridgeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "totalSpentPerDay"
      | "setExecutionDailyLimit"
      | "getCurrentDay"
      | "executionDailyLimit"
      | "totalExecutedPerDay"
      | "dailyLimit"
      | "withinExecutionLimit"
      | "executionMaxPerTx"
      | "owner"
      | "maxAvailablePerTx"
      | "setMinPerTx"
      | "onTokenTransfer"
      | "setDailyLimit"
      | "setMaxPerTx"
      | "decimalShift"
      | "minPerTx"
      | "withinLimit"
      | "setExecutionMaxPerTx"
      | "transferOwnership"
      | "maxPerTx"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DailyLimitChanged"
      | "ExecutionDailyLimitChanged"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "totalSpentPerDay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setExecutionDailyLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentDay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executionDailyLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalExecutedPerDay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "dailyLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withinExecutionLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executionMaxPerTx",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxAvailablePerTx",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMinPerTx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onTokenTransfer",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDailyLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxPerTx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decimalShift",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "minPerTx", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withinLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setExecutionMaxPerTx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "maxPerTx", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "totalSpentPerDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExecutionDailyLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executionDailyLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalExecutedPerDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dailyLimit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withinExecutionLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executionMaxPerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxAvailablePerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinPerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onTokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDailyLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxPerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decimalShift",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minPerTx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withinLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExecutionMaxPerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxPerTx", data: BytesLike): Result;
}

export namespace DailyLimitChangedEvent {
  export type InputTuple = [newLimit: BigNumberish];
  export type OutputTuple = [newLimit: bigint];
  export interface OutputObject {
    newLimit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ExecutionDailyLimitChangedEvent {
  export type InputTuple = [newLimit: BigNumberish];
  export type OutputTuple = [newLimit: bigint];
  export interface OutputObject {
    newLimit: bigint;
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

export interface BaseERC677Bridge extends BaseContract {
  connect(runner?: ContractRunner | null): BaseERC677Bridge;
  waitForDeployment(): Promise<this>;

  interface: BaseERC677BridgeInterface;

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

  totalSpentPerDay: TypedContractMethod<[_day: BigNumberish], [bigint], "view">;

  setExecutionDailyLimit: TypedContractMethod<
    [_dailyLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  getCurrentDay: TypedContractMethod<[], [bigint], "view">;

  executionDailyLimit: TypedContractMethod<[], [bigint], "view">;

  totalExecutedPerDay: TypedContractMethod<
    [_day: BigNumberish],
    [bigint],
    "view"
  >;

  dailyLimit: TypedContractMethod<[], [bigint], "view">;

  withinExecutionLimit: TypedContractMethod<
    [_amount: BigNumberish],
    [boolean],
    "view"
  >;

  executionMaxPerTx: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  maxAvailablePerTx: TypedContractMethod<[], [bigint], "view">;

  setMinPerTx: TypedContractMethod<
    [_minPerTx: BigNumberish],
    [void],
    "nonpayable"
  >;

  onTokenTransfer: TypedContractMethod<
    [_from: AddressLike, _value: BigNumberish, _data: BytesLike],
    [boolean],
    "nonpayable"
  >;

  setDailyLimit: TypedContractMethod<
    [_dailyLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMaxPerTx: TypedContractMethod<
    [_maxPerTx: BigNumberish],
    [void],
    "nonpayable"
  >;

  decimalShift: TypedContractMethod<[], [bigint], "view">;

  minPerTx: TypedContractMethod<[], [bigint], "view">;

  withinLimit: TypedContractMethod<[_amount: BigNumberish], [boolean], "view">;

  setExecutionMaxPerTx: TypedContractMethod<
    [_maxPerTx: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  maxPerTx: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "totalSpentPerDay"
  ): TypedContractMethod<[_day: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "setExecutionDailyLimit"
  ): TypedContractMethod<[_dailyLimit: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getCurrentDay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "executionDailyLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalExecutedPerDay"
  ): TypedContractMethod<[_day: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "dailyLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "withinExecutionLimit"
  ): TypedContractMethod<[_amount: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "executionMaxPerTx"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "maxAvailablePerTx"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setMinPerTx"
  ): TypedContractMethod<[_minPerTx: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "onTokenTransfer"
  ): TypedContractMethod<
    [_from: AddressLike, _value: BigNumberish, _data: BytesLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setDailyLimit"
  ): TypedContractMethod<[_dailyLimit: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMaxPerTx"
  ): TypedContractMethod<[_maxPerTx: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "decimalShift"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minPerTx"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "withinLimit"
  ): TypedContractMethod<[_amount: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "setExecutionMaxPerTx"
  ): TypedContractMethod<[_maxPerTx: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "maxPerTx"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "DailyLimitChanged"
  ): TypedContractEvent<
    DailyLimitChangedEvent.InputTuple,
    DailyLimitChangedEvent.OutputTuple,
    DailyLimitChangedEvent.OutputObject
  >;
  getEvent(
    key: "ExecutionDailyLimitChanged"
  ): TypedContractEvent<
    ExecutionDailyLimitChangedEvent.InputTuple,
    ExecutionDailyLimitChangedEvent.OutputTuple,
    ExecutionDailyLimitChangedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "DailyLimitChanged(uint256)": TypedContractEvent<
      DailyLimitChangedEvent.InputTuple,
      DailyLimitChangedEvent.OutputTuple,
      DailyLimitChangedEvent.OutputObject
    >;
    DailyLimitChanged: TypedContractEvent<
      DailyLimitChangedEvent.InputTuple,
      DailyLimitChangedEvent.OutputTuple,
      DailyLimitChangedEvent.OutputObject
    >;

    "ExecutionDailyLimitChanged(uint256)": TypedContractEvent<
      ExecutionDailyLimitChangedEvent.InputTuple,
      ExecutionDailyLimitChangedEvent.OutputTuple,
      ExecutionDailyLimitChangedEvent.OutputObject
    >;
    ExecutionDailyLimitChanged: TypedContractEvent<
      ExecutionDailyLimitChangedEvent.InputTuple,
      ExecutionDailyLimitChangedEvent.OutputTuple,
      ExecutionDailyLimitChangedEvent.OutputObject
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
