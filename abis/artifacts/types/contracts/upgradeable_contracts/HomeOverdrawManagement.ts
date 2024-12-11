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

export interface HomeOverdrawManagementInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "numMessagesSigned"
      | "signature"
      | "totalSpentPerDay"
      | "isInitialized"
      | "setExecutionDailyLimit"
      | "getCurrentDay"
      | "requiredBlockConfirmations"
      | "requiredMessageLength"
      | "getBridgeMode"
      | "executionDailyLimit"
      | "message"
      | "totalExecutedPerDay"
      | "setFeeManagerContract"
      | "submitSignature"
      | "dailyLimit"
      | "numAffirmationsSigned"
      | "affirmationsSigned"
      | "withinExecutionLimit"
      | "executionMaxPerTx"
      | "requiredSignatures"
      | "owner"
      | "messagesSigned"
      | "maxAvailablePerTx"
      | "validatorContract"
      | "executeAffirmation"
      | "deployedAtBlock"
      | "getBridgeInterfacesVersion"
      | "outOfLimitAmount"
      | "setMinPerTx"
      | "fixAssetsAboveLimits"
      | "setRequiredBlockConfirmations"
      | "setDailyLimit"
      | "setGasPrice"
      | "setMaxPerTx"
      | "decimalShift"
      | "feeManagerContract"
      | "minPerTx"
      | "withinLimit"
      | "setExecutionMaxPerTx"
      | "getFeeManagerMode"
      | "transferOwnership"
      | "maxPerTx"
      | "gasPrice"
      | "isAlreadyProcessed"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "UserRequestForSignature"
      | "AffirmationCompleted"
      | "SignedForUserRequest"
      | "SignedForAffirmation"
      | "CollectedSignatures"
      | "DailyLimitChanged"
      | "ExecutionDailyLimitChanged"
      | "GasPriceChanged"
      | "RequiredBlockConfirmationChanged"
      | "FeeDistributedFromAffirmation"
      | "FeeDistributedFromSignatures"
      | "OwnershipTransferred"
      | "MediatorAmountLimitExceeded"
      | "AmountLimitExceeded"
      | "AssetAboveLimitsFixed"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "numMessagesSigned",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "signature",
    values: [BytesLike, BigNumberish]
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
    functionFragment: "requiredMessageLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBridgeMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executionDailyLimit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "message", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "totalExecutedPerDay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeManagerContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "submitSignature",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "dailyLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numAffirmationsSigned",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "affirmationsSigned",
    values: [BytesLike]
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
    functionFragment: "messagesSigned",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxAvailablePerTx",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "validatorContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeAffirmation",
    values: [AddressLike, BigNumberish, BytesLike]
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
    functionFragment: "outOfLimitAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMinPerTx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fixAssetsAboveLimits",
    values: [BytesLike, boolean, BigNumberish]
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
  encodeFunctionData(
    functionFragment: "feeManagerContract",
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
    functionFragment: "getFeeManagerMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "maxPerTx", values?: undefined): string;
  encodeFunctionData(functionFragment: "gasPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isAlreadyProcessed",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "numMessagesSigned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "signature", data: BytesLike): Result;
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
    functionFragment: "requiredMessageLength",
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
  decodeFunctionResult(functionFragment: "message", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalExecutedPerDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeManagerContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dailyLimit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numAffirmationsSigned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "affirmationsSigned",
    data: BytesLike
  ): Result;
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
    functionFragment: "messagesSigned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxAvailablePerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeAffirmation",
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
    functionFragment: "outOfLimitAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinPerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fixAssetsAboveLimits",
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
  decodeFunctionResult(
    functionFragment: "feeManagerContract",
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
    functionFragment: "getFeeManagerMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxPerTx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gasPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAlreadyProcessed",
    data: BytesLike
  ): Result;
}

export namespace UserRequestForSignatureEvent {
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

export namespace AffirmationCompletedEvent {
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

export namespace SignedForUserRequestEvent {
  export type InputTuple = [signer: AddressLike, messageHash: BytesLike];
  export type OutputTuple = [signer: string, messageHash: string];
  export interface OutputObject {
    signer: string;
    messageHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignedForAffirmationEvent {
  export type InputTuple = [signer: AddressLike, transactionHash: BytesLike];
  export type OutputTuple = [signer: string, transactionHash: string];
  export interface OutputObject {
    signer: string;
    transactionHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CollectedSignaturesEvent {
  export type InputTuple = [
    authorityResponsibleForRelay: AddressLike,
    messageHash: BytesLike,
    NumberOfCollectedSignatures: BigNumberish
  ];
  export type OutputTuple = [
    authorityResponsibleForRelay: string,
    messageHash: string,
    NumberOfCollectedSignatures: bigint
  ];
  export interface OutputObject {
    authorityResponsibleForRelay: string;
    messageHash: string;
    NumberOfCollectedSignatures: bigint;
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

export namespace FeeDistributedFromAffirmationEvent {
  export type InputTuple = [
    feeAmount: BigNumberish,
    transactionHash: BytesLike
  ];
  export type OutputTuple = [feeAmount: bigint, transactionHash: string];
  export interface OutputObject {
    feeAmount: bigint;
    transactionHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeeDistributedFromSignaturesEvent {
  export type InputTuple = [
    feeAmount: BigNumberish,
    transactionHash: BytesLike
  ];
  export type OutputTuple = [feeAmount: bigint, transactionHash: string];
  export interface OutputObject {
    feeAmount: bigint;
    transactionHash: string;
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

export interface HomeOverdrawManagement extends BaseContract {
  connect(runner?: ContractRunner | null): HomeOverdrawManagement;
  waitForDeployment(): Promise<this>;

  interface: HomeOverdrawManagementInterface;

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

  numMessagesSigned: TypedContractMethod<
    [_message: BytesLike],
    [bigint],
    "view"
  >;

  signature: TypedContractMethod<
    [_hash: BytesLike, _index: BigNumberish],
    [string],
    "view"
  >;

  totalSpentPerDay: TypedContractMethod<[_day: BigNumberish], [bigint], "view">;

  isInitialized: TypedContractMethod<[], [boolean], "view">;

  setExecutionDailyLimit: TypedContractMethod<
    [_dailyLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  getCurrentDay: TypedContractMethod<[], [bigint], "view">;

  requiredBlockConfirmations: TypedContractMethod<[], [bigint], "view">;

  requiredMessageLength: TypedContractMethod<[], [bigint], "view">;

  getBridgeMode: TypedContractMethod<[], [string], "view">;

  executionDailyLimit: TypedContractMethod<[], [bigint], "view">;

  message: TypedContractMethod<[_hash: BytesLike], [string], "view">;

  totalExecutedPerDay: TypedContractMethod<
    [_day: BigNumberish],
    [bigint],
    "view"
  >;

  setFeeManagerContract: TypedContractMethod<
    [_feeManager: AddressLike],
    [void],
    "nonpayable"
  >;

  submitSignature: TypedContractMethod<
    [signature: BytesLike, message: BytesLike],
    [void],
    "nonpayable"
  >;

  dailyLimit: TypedContractMethod<[], [bigint], "view">;

  numAffirmationsSigned: TypedContractMethod<
    [_withdrawal: BytesLike],
    [bigint],
    "view"
  >;

  affirmationsSigned: TypedContractMethod<
    [_withdrawal: BytesLike],
    [boolean],
    "view"
  >;

  withinExecutionLimit: TypedContractMethod<
    [_amount: BigNumberish],
    [boolean],
    "view"
  >;

  executionMaxPerTx: TypedContractMethod<[], [bigint], "view">;

  requiredSignatures: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  messagesSigned: TypedContractMethod<[_message: BytesLike], [boolean], "view">;

  maxAvailablePerTx: TypedContractMethod<[], [bigint], "view">;

  validatorContract: TypedContractMethod<[], [string], "view">;

  executeAffirmation: TypedContractMethod<
    [recipient: AddressLike, value: BigNumberish, transactionHash: BytesLike],
    [void],
    "nonpayable"
  >;

  deployedAtBlock: TypedContractMethod<[], [bigint], "view">;

  getBridgeInterfacesVersion: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & { major: bigint; minor: bigint; patch: bigint }
    ],
    "view"
  >;

  outOfLimitAmount: TypedContractMethod<[], [bigint], "view">;

  setMinPerTx: TypedContractMethod<
    [_minPerTx: BigNumberish],
    [void],
    "nonpayable"
  >;

  fixAssetsAboveLimits: TypedContractMethod<
    [hashMsg: BytesLike, unlockOnForeign: boolean, valueToUnlock: BigNumberish],
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

  feeManagerContract: TypedContractMethod<[], [string], "view">;

  minPerTx: TypedContractMethod<[], [bigint], "view">;

  withinLimit: TypedContractMethod<[_amount: BigNumberish], [boolean], "view">;

  setExecutionMaxPerTx: TypedContractMethod<
    [_maxPerTx: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFeeManagerMode: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  maxPerTx: TypedContractMethod<[], [bigint], "view">;

  gasPrice: TypedContractMethod<[], [bigint], "view">;

  isAlreadyProcessed: TypedContractMethod<
    [_number: BigNumberish],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "numMessagesSigned"
  ): TypedContractMethod<[_message: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "signature"
  ): TypedContractMethod<
    [_hash: BytesLike, _index: BigNumberish],
    [string],
    "view"
  >;
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
    nameOrSignature: "requiredMessageLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBridgeMode"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "executionDailyLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "message"
  ): TypedContractMethod<[_hash: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "totalExecutedPerDay"
  ): TypedContractMethod<[_day: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "setFeeManagerContract"
  ): TypedContractMethod<[_feeManager: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "submitSignature"
  ): TypedContractMethod<
    [signature: BytesLike, message: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "dailyLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "numAffirmationsSigned"
  ): TypedContractMethod<[_withdrawal: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "affirmationsSigned"
  ): TypedContractMethod<[_withdrawal: BytesLike], [boolean], "view">;
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
    nameOrSignature: "messagesSigned"
  ): TypedContractMethod<[_message: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "maxAvailablePerTx"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "validatorContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "executeAffirmation"
  ): TypedContractMethod<
    [recipient: AddressLike, value: BigNumberish, transactionHash: BytesLike],
    [void],
    "nonpayable"
  >;
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
    nameOrSignature: "outOfLimitAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setMinPerTx"
  ): TypedContractMethod<[_minPerTx: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "fixAssetsAboveLimits"
  ): TypedContractMethod<
    [hashMsg: BytesLike, unlockOnForeign: boolean, valueToUnlock: BigNumberish],
    [void],
    "nonpayable"
  >;
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
    nameOrSignature: "feeManagerContract"
  ): TypedContractMethod<[], [string], "view">;
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
    nameOrSignature: "getFeeManagerMode"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "maxPerTx"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "gasPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isAlreadyProcessed"
  ): TypedContractMethod<[_number: BigNumberish], [boolean], "view">;

  getEvent(
    key: "UserRequestForSignature"
  ): TypedContractEvent<
    UserRequestForSignatureEvent.InputTuple,
    UserRequestForSignatureEvent.OutputTuple,
    UserRequestForSignatureEvent.OutputObject
  >;
  getEvent(
    key: "AffirmationCompleted"
  ): TypedContractEvent<
    AffirmationCompletedEvent.InputTuple,
    AffirmationCompletedEvent.OutputTuple,
    AffirmationCompletedEvent.OutputObject
  >;
  getEvent(
    key: "SignedForUserRequest"
  ): TypedContractEvent<
    SignedForUserRequestEvent.InputTuple,
    SignedForUserRequestEvent.OutputTuple,
    SignedForUserRequestEvent.OutputObject
  >;
  getEvent(
    key: "SignedForAffirmation"
  ): TypedContractEvent<
    SignedForAffirmationEvent.InputTuple,
    SignedForAffirmationEvent.OutputTuple,
    SignedForAffirmationEvent.OutputObject
  >;
  getEvent(
    key: "CollectedSignatures"
  ): TypedContractEvent<
    CollectedSignaturesEvent.InputTuple,
    CollectedSignaturesEvent.OutputTuple,
    CollectedSignaturesEvent.OutputObject
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
    key: "FeeDistributedFromAffirmation"
  ): TypedContractEvent<
    FeeDistributedFromAffirmationEvent.InputTuple,
    FeeDistributedFromAffirmationEvent.OutputTuple,
    FeeDistributedFromAffirmationEvent.OutputObject
  >;
  getEvent(
    key: "FeeDistributedFromSignatures"
  ): TypedContractEvent<
    FeeDistributedFromSignaturesEvent.InputTuple,
    FeeDistributedFromSignaturesEvent.OutputTuple,
    FeeDistributedFromSignaturesEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
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
    "UserRequestForSignature(address,uint256)": TypedContractEvent<
      UserRequestForSignatureEvent.InputTuple,
      UserRequestForSignatureEvent.OutputTuple,
      UserRequestForSignatureEvent.OutputObject
    >;
    UserRequestForSignature: TypedContractEvent<
      UserRequestForSignatureEvent.InputTuple,
      UserRequestForSignatureEvent.OutputTuple,
      UserRequestForSignatureEvent.OutputObject
    >;

    "AffirmationCompleted(address,uint256,bytes32)": TypedContractEvent<
      AffirmationCompletedEvent.InputTuple,
      AffirmationCompletedEvent.OutputTuple,
      AffirmationCompletedEvent.OutputObject
    >;
    AffirmationCompleted: TypedContractEvent<
      AffirmationCompletedEvent.InputTuple,
      AffirmationCompletedEvent.OutputTuple,
      AffirmationCompletedEvent.OutputObject
    >;

    "SignedForUserRequest(address,bytes32)": TypedContractEvent<
      SignedForUserRequestEvent.InputTuple,
      SignedForUserRequestEvent.OutputTuple,
      SignedForUserRequestEvent.OutputObject
    >;
    SignedForUserRequest: TypedContractEvent<
      SignedForUserRequestEvent.InputTuple,
      SignedForUserRequestEvent.OutputTuple,
      SignedForUserRequestEvent.OutputObject
    >;

    "SignedForAffirmation(address,bytes32)": TypedContractEvent<
      SignedForAffirmationEvent.InputTuple,
      SignedForAffirmationEvent.OutputTuple,
      SignedForAffirmationEvent.OutputObject
    >;
    SignedForAffirmation: TypedContractEvent<
      SignedForAffirmationEvent.InputTuple,
      SignedForAffirmationEvent.OutputTuple,
      SignedForAffirmationEvent.OutputObject
    >;

    "CollectedSignatures(address,bytes32,uint256)": TypedContractEvent<
      CollectedSignaturesEvent.InputTuple,
      CollectedSignaturesEvent.OutputTuple,
      CollectedSignaturesEvent.OutputObject
    >;
    CollectedSignatures: TypedContractEvent<
      CollectedSignaturesEvent.InputTuple,
      CollectedSignaturesEvent.OutputTuple,
      CollectedSignaturesEvent.OutputObject
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

    "FeeDistributedFromAffirmation(uint256,bytes32)": TypedContractEvent<
      FeeDistributedFromAffirmationEvent.InputTuple,
      FeeDistributedFromAffirmationEvent.OutputTuple,
      FeeDistributedFromAffirmationEvent.OutputObject
    >;
    FeeDistributedFromAffirmation: TypedContractEvent<
      FeeDistributedFromAffirmationEvent.InputTuple,
      FeeDistributedFromAffirmationEvent.OutputTuple,
      FeeDistributedFromAffirmationEvent.OutputObject
    >;

    "FeeDistributedFromSignatures(uint256,bytes32)": TypedContractEvent<
      FeeDistributedFromSignaturesEvent.InputTuple,
      FeeDistributedFromSignaturesEvent.OutputTuple,
      FeeDistributedFromSignaturesEvent.OutputObject
    >;
    FeeDistributedFromSignatures: TypedContractEvent<
      FeeDistributedFromSignaturesEvent.InputTuple,
      FeeDistributedFromSignaturesEvent.OutputTuple,
      FeeDistributedFromSignaturesEvent.OutputObject
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