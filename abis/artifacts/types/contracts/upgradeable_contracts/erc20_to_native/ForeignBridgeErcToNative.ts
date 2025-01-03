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
} from "../../../common";

export interface ForeignBridgeErcToNativeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "relayTokens"
      | "erc20token"
      | "relayedMessages"
      | "totalSpentPerDay"
      | "isInitialized"
      | "setExecutionDailyLimit"
      | "getCurrentDay"
      | "requiredBlockConfirmations"
      | "executeSignatures"
      | "getBridgeMode"
      | "executionDailyLimit"
      | "totalExecutedPerDay"
      | "dailyLimit"
      | "claimTokens"
      | "initialize"
      | "withinExecutionLimit"
      | "executionMaxPerTx"
      | "requiredSignatures"
      | "owner"
      | "maxAvailablePerTx"
      | "validatorContract"
      | "deployedAtBlock"
      | "getBridgeInterfacesVersion"
      | "setMinPerTx"
      | "setRequiredBlockConfirmations"
      | "setDailyLimit"
      | "setGasPrice"
      | "setMaxPerTx"
      | "decimalShift"
      | "minPerTx"
      | "withinLimit"
      | "setExecutionMaxPerTx"
      | "transferOwnership"
      | "maxPerTx"
      | "gasPrice"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "RelayedMessage"
      | "UserRequestForAffirmation"
      | "DailyLimitChanged"
      | "ExecutionDailyLimitChanged"
      | "GasPriceChanged"
      | "RequiredBlockConfirmationChanged"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "relayTokens",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "erc20token",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "relayedMessages",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSpentPerDay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
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
    functionFragment: "requiredBlockConfirmations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeSignatures",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBridgeMode",
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
    functionFragment: "claimTokens",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      [BigNumberish, BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish],
      AddressLike,
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withinExecutionLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executionMaxPerTx",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requiredSignatures",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxAvailablePerTx",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "validatorContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployedAtBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBridgeInterfacesVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMinPerTx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRequiredBlockConfirmations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDailyLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGasPrice",
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
  encodeFunctionData(functionFragment: "gasPrice", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "relayTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "erc20token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "relayedMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSpentPerDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
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
    functionFragment: "requiredBlockConfirmations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBridgeMode",
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
    functionFragment: "claimTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withinExecutionLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executionMaxPerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requiredSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxAvailablePerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployedAtBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBridgeInterfacesVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinPerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRequiredBlockConfirmations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDailyLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGasPrice",
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
  decodeFunctionResult(functionFragment: "gasPrice", data: BytesLike): Result;
}

export namespace RelayedMessageEvent {
  export type InputTuple = [
    recipient: AddressLike,
    value: BigNumberish,
    transactionHash: BytesLike
  ];
  export type OutputTuple = [
    recipient: string,
    value: bigint,
    transactionHash: string
  ];
  export interface OutputObject {
    recipient: string;
    value: bigint;
    transactionHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserRequestForAffirmationEvent {
  export type InputTuple = [recipient: AddressLike, value: BigNumberish];
  export type OutputTuple = [recipient: string, value: bigint];
  export interface OutputObject {
    recipient: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace GasPriceChangedEvent {
  export type InputTuple = [gasPrice: BigNumberish];
  export type OutputTuple = [gasPrice: bigint];
  export interface OutputObject {
    gasPrice: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RequiredBlockConfirmationChangedEvent {
  export type InputTuple = [requiredBlockConfirmations: BigNumberish];
  export type OutputTuple = [requiredBlockConfirmations: bigint];
  export interface OutputObject {
    requiredBlockConfirmations: bigint;
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

export interface ForeignBridgeErcToNative extends BaseContract {
  connect(runner?: ContractRunner | null): ForeignBridgeErcToNative;
  waitForDeployment(): Promise<this>;

  interface: ForeignBridgeErcToNativeInterface;

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

  relayTokens: TypedContractMethod<
    [_receiver: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  erc20token: TypedContractMethod<[], [string], "view">;

  relayedMessages: TypedContractMethod<[_txHash: BytesLike], [boolean], "view">;

  totalSpentPerDay: TypedContractMethod<[_day: BigNumberish], [bigint], "view">;

  isInitialized: TypedContractMethod<[], [boolean], "view">;

  setExecutionDailyLimit: TypedContractMethod<
    [_dailyLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  getCurrentDay: TypedContractMethod<[], [bigint], "view">;

  requiredBlockConfirmations: TypedContractMethod<[], [bigint], "view">;

  executeSignatures: TypedContractMethod<
    [message: BytesLike, signatures: BytesLike],
    [void],
    "nonpayable"
  >;

  getBridgeMode: TypedContractMethod<[], [string], "view">;

  executionDailyLimit: TypedContractMethod<[], [bigint], "view">;

  totalExecutedPerDay: TypedContractMethod<
    [_day: BigNumberish],
    [bigint],
    "view"
  >;

  dailyLimit: TypedContractMethod<[], [bigint], "view">;

  claimTokens: TypedContractMethod<
    [_token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;

  initialize: TypedContractMethod<
    [
      _validatorContract: AddressLike,
      _erc20token: AddressLike,
      _requiredBlockConfirmations: BigNumberish,
      _gasPrice: BigNumberish,
      _dailyLimitMaxPerTxMinPerTxArray: [
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _homeDailyLimitHomeMaxPerTxArray: [BigNumberish, BigNumberish],
      _owner: AddressLike,
      _decimalShift: BigNumberish,
      _bridgeOnOtherSide: AddressLike
    ],
    [boolean],
    "nonpayable"
  >;

  withinExecutionLimit: TypedContractMethod<
    [_amount: BigNumberish],
    [boolean],
    "view"
  >;

  executionMaxPerTx: TypedContractMethod<[], [bigint], "view">;

  requiredSignatures: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  maxAvailablePerTx: TypedContractMethod<[], [bigint], "view">;

  validatorContract: TypedContractMethod<[], [string], "view">;

  deployedAtBlock: TypedContractMethod<[], [bigint], "view">;

  getBridgeInterfacesVersion: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & { major: bigint; minor: bigint; patch: bigint }
    ],
    "view"
  >;

  setMinPerTx: TypedContractMethod<
    [_minPerTx: BigNumberish],
    [void],
    "nonpayable"
  >;

  setRequiredBlockConfirmations: TypedContractMethod<
    [_blockConfirmations: BigNumberish],
    [void],
    "nonpayable"
  >;

  setDailyLimit: TypedContractMethod<
    [_dailyLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  setGasPrice: TypedContractMethod<
    [_gasPrice: BigNumberish],
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

  gasPrice: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "relayTokens"
  ): TypedContractMethod<
    [_receiver: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "erc20token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "relayedMessages"
  ): TypedContractMethod<[_txHash: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "totalSpentPerDay"
  ): TypedContractMethod<[_day: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "isInitialized"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "setExecutionDailyLimit"
  ): TypedContractMethod<[_dailyLimit: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getCurrentDay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "requiredBlockConfirmations"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "executeSignatures"
  ): TypedContractMethod<
    [message: BytesLike, signatures: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getBridgeMode"
  ): TypedContractMethod<[], [string], "view">;
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
    nameOrSignature: "claimTokens"
  ): TypedContractMethod<
    [_token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _validatorContract: AddressLike,
      _erc20token: AddressLike,
      _requiredBlockConfirmations: BigNumberish,
      _gasPrice: BigNumberish,
      _dailyLimitMaxPerTxMinPerTxArray: [
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      _homeDailyLimitHomeMaxPerTxArray: [BigNumberish, BigNumberish],
      _owner: AddressLike,
      _decimalShift: BigNumberish,
      _bridgeOnOtherSide: AddressLike
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withinExecutionLimit"
  ): TypedContractMethod<[_amount: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "executionMaxPerTx"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "requiredSignatures"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "maxAvailablePerTx"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "validatorContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "deployedAtBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBridgeInterfacesVersion"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & { major: bigint; minor: bigint; patch: bigint }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "setMinPerTx"
  ): TypedContractMethod<[_minPerTx: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRequiredBlockConfirmations"
  ): TypedContractMethod<
    [_blockConfirmations: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setDailyLimit"
  ): TypedContractMethod<[_dailyLimit: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setGasPrice"
  ): TypedContractMethod<[_gasPrice: BigNumberish], [void], "nonpayable">;
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
  getFunction(
    nameOrSignature: "gasPrice"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "RelayedMessage"
  ): TypedContractEvent<
    RelayedMessageEvent.InputTuple,
    RelayedMessageEvent.OutputTuple,
    RelayedMessageEvent.OutputObject
  >;
  getEvent(
    key: "UserRequestForAffirmation"
  ): TypedContractEvent<
    UserRequestForAffirmationEvent.InputTuple,
    UserRequestForAffirmationEvent.OutputTuple,
    UserRequestForAffirmationEvent.OutputObject
  >;
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
    key: "GasPriceChanged"
  ): TypedContractEvent<
    GasPriceChangedEvent.InputTuple,
    GasPriceChangedEvent.OutputTuple,
    GasPriceChangedEvent.OutputObject
  >;
  getEvent(
    key: "RequiredBlockConfirmationChanged"
  ): TypedContractEvent<
    RequiredBlockConfirmationChangedEvent.InputTuple,
    RequiredBlockConfirmationChangedEvent.OutputTuple,
    RequiredBlockConfirmationChangedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "RelayedMessage(address,uint256,bytes32)": TypedContractEvent<
      RelayedMessageEvent.InputTuple,
      RelayedMessageEvent.OutputTuple,
      RelayedMessageEvent.OutputObject
    >;
    RelayedMessage: TypedContractEvent<
      RelayedMessageEvent.InputTuple,
      RelayedMessageEvent.OutputTuple,
      RelayedMessageEvent.OutputObject
    >;

    "UserRequestForAffirmation(address,uint256)": TypedContractEvent<
      UserRequestForAffirmationEvent.InputTuple,
      UserRequestForAffirmationEvent.OutputTuple,
      UserRequestForAffirmationEvent.OutputObject
    >;
    UserRequestForAffirmation: TypedContractEvent<
      UserRequestForAffirmationEvent.InputTuple,
      UserRequestForAffirmationEvent.OutputTuple,
      UserRequestForAffirmationEvent.OutputObject
    >;

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

    "GasPriceChanged(uint256)": TypedContractEvent<
      GasPriceChangedEvent.InputTuple,
      GasPriceChangedEvent.OutputTuple,
      GasPriceChangedEvent.OutputObject
    >;
    GasPriceChanged: TypedContractEvent<
      GasPriceChangedEvent.InputTuple,
      GasPriceChangedEvent.OutputTuple,
      GasPriceChangedEvent.OutputObject
    >;

    "RequiredBlockConfirmationChanged(uint256)": TypedContractEvent<
      RequiredBlockConfirmationChangedEvent.InputTuple,
      RequiredBlockConfirmationChangedEvent.OutputTuple,
      RequiredBlockConfirmationChangedEvent.OutputObject
    >;
    RequiredBlockConfirmationChanged: TypedContractEvent<
      RequiredBlockConfirmationChangedEvent.InputTuple,
      RequiredBlockConfirmationChangedEvent.OutputTuple,
      RequiredBlockConfirmationChangedEvent.OutputObject
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
