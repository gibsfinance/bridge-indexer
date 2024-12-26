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

export interface XDaiForeignBridgeMockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "relayTokens"
      | "invest"
      | "erc20token"
      | "executeSignaturesGSN"
      | "relayedMessages"
      | "totalSpentPerDay"
      | "isInitialized"
      | "setExecutionDailyLimit"
      | "getCurrentDay"
      | "requiredBlockConfirmations"
      | "executeSignatures"
      | "getBridgeMode"
      | "executionDailyLimit"
      | "minInterestPaid"
      | "versionRecipient"
      | "totalExecutedPerDay"
      | "minCashThreshold"
      | "isTrustedForwarder"
      | "comptroller"
      | "compToken"
      | "dailyLimit"
      | "claimTokens"
      | "initialize"
      | "investDai"
      | "claimCompAndPay"
      | "setPayMaster"
      | "withinExecutionLimit"
      | "executionMaxPerTx"
      | "upgradeTo530"
      | "requiredSignatures"
      | "owner"
      | "setInterestReceiver"
      | "maxAvailablePerTx"
      | "validatorContract"
      | "deployedAtBlock"
      | "getBridgeInterfacesVersion"
      | "setMinPerTx"
      | "setMinInterestPaid"
      | "setMinCashThreshold"
      | "interestReceiver"
      | "setRequiredBlockConfirmations"
      | "setDailyLimit"
      | "cDaiToken"
      | "daiToken"
      | "setGasPrice"
      | "setMaxPerTx"
      | "interestAmount"
      | "initializeInterest"
      | "getTrustedForwarder"
      | "investedAmount"
      | "payInterest"
      | "isInterestEnabled"
      | "setTrustedForwarder"
      | "decimalShift"
      | "minPerTx"
      | "withinLimit"
      | "setExecutionMaxPerTx"
      | "transferOwnership"
      | "disableInterest"
      | "maxPerTx"
      | "gasPrice"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "PaidInterest"
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
  encodeFunctionData(functionFragment: "invest", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "erc20token",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeSignaturesGSN",
    values: [BytesLike, BytesLike, BigNumberish]
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
    functionFragment: "minInterestPaid",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "versionRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalExecutedPerDay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "minCashThreshold",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "comptroller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "compToken", values?: undefined): string;
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
  encodeFunctionData(functionFragment: "investDai", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimCompAndPay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPayMaster",
    values: [AddressLike]
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
    functionFragment: "upgradeTo530",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requiredSignatures",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setInterestReceiver",
    values: [AddressLike, AddressLike]
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
    functionFragment: "setMinInterestPaid",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinCashThreshold",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "interestReceiver",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRequiredBlockConfirmations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDailyLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "cDaiToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "daiToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setGasPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxPerTx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "interestAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeInterest",
    values: [AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTrustedForwarder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "investedAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "payInterest",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isInterestEnabled",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedForwarder",
    values: [AddressLike]
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
  encodeFunctionData(
    functionFragment: "disableInterest",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "maxPerTx", values?: undefined): string;
  encodeFunctionData(functionFragment: "gasPrice", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "relayTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "erc20token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeSignaturesGSN",
    data: BytesLike
  ): Result;
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
    functionFragment: "minInterestPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "versionRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalExecutedPerDay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minCashThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "comptroller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "compToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dailyLimit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "investDai", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimCompAndPay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPayMaster",
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
    functionFragment: "upgradeTo530",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requiredSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setInterestReceiver",
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
    functionFragment: "setMinInterestPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinCashThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interestReceiver",
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
  decodeFunctionResult(functionFragment: "cDaiToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daiToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGasPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxPerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interestAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "investedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInterestEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedForwarder",
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
  decodeFunctionResult(
    functionFragment: "disableInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxPerTx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gasPrice", data: BytesLike): Result;
}

export namespace PaidInterestEvent {
  export type InputTuple = [
    token: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [token: string, to: string, value: bigint];
  export interface OutputObject {
    token: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export interface XDaiForeignBridgeMock extends BaseContract {
  connect(runner?: ContractRunner | null): XDaiForeignBridgeMock;
  waitForDeployment(): Promise<this>;

  interface: XDaiForeignBridgeMockInterface;

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

  invest: TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;

  erc20token: TypedContractMethod<[], [string], "view">;

  executeSignaturesGSN: TypedContractMethod<
    [message: BytesLike, signatures: BytesLike, maxTokensFee: BigNumberish],
    [void],
    "nonpayable"
  >;

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

  minInterestPaid: TypedContractMethod<[_token: AddressLike], [bigint], "view">;

  versionRecipient: TypedContractMethod<[], [string], "view">;

  totalExecutedPerDay: TypedContractMethod<
    [_day: BigNumberish],
    [bigint],
    "view"
  >;

  minCashThreshold: TypedContractMethod<
    [_token: AddressLike],
    [bigint],
    "view"
  >;

  isTrustedForwarder: TypedContractMethod<
    [forwarder: AddressLike],
    [boolean],
    "view"
  >;

  comptroller: TypedContractMethod<[], [string], "view">;

  compToken: TypedContractMethod<[], [string], "view">;

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

  investDai: TypedContractMethod<[], [void], "nonpayable">;

  claimCompAndPay: TypedContractMethod<[], [void], "nonpayable">;

  setPayMaster: TypedContractMethod<
    [_paymaster: AddressLike],
    [void],
    "nonpayable"
  >;

  withinExecutionLimit: TypedContractMethod<
    [_amount: BigNumberish],
    [boolean],
    "view"
  >;

  executionMaxPerTx: TypedContractMethod<[], [bigint], "view">;

  upgradeTo530: TypedContractMethod<
    [_interestReceiver: AddressLike],
    [void],
    "nonpayable"
  >;

  requiredSignatures: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  setInterestReceiver: TypedContractMethod<
    [_token: AddressLike, _receiver: AddressLike],
    [void],
    "nonpayable"
  >;

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

  setMinInterestPaid: TypedContractMethod<
    [_token: AddressLike, _minInterestPaid: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMinCashThreshold: TypedContractMethod<
    [_token: AddressLike, _minCashThreshold: BigNumberish],
    [void],
    "nonpayable"
  >;

  interestReceiver: TypedContractMethod<
    [_token: AddressLike],
    [string],
    "view"
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

  cDaiToken: TypedContractMethod<[], [string], "view">;

  daiToken: TypedContractMethod<[], [string], "view">;

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

  interestAmount: TypedContractMethod<[_token: AddressLike], [bigint], "view">;

  initializeInterest: TypedContractMethod<
    [
      _token: AddressLike,
      _minCashThreshold: BigNumberish,
      _minInterestPaid: BigNumberish,
      _interestReceiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  getTrustedForwarder: TypedContractMethod<[], [string], "view">;

  investedAmount: TypedContractMethod<[_token: AddressLike], [bigint], "view">;

  payInterest: TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;

  isInterestEnabled: TypedContractMethod<
    [_token: AddressLike],
    [boolean],
    "view"
  >;

  setTrustedForwarder: TypedContractMethod<
    [_trustedForwarder: AddressLike],
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

  disableInterest: TypedContractMethod<
    [_token: AddressLike],
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
    nameOrSignature: "invest"
  ): TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "erc20token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "executeSignaturesGSN"
  ): TypedContractMethod<
    [message: BytesLike, signatures: BytesLike, maxTokensFee: BigNumberish],
    [void],
    "nonpayable"
  >;
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
    nameOrSignature: "minInterestPaid"
  ): TypedContractMethod<[_token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "versionRecipient"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalExecutedPerDay"
  ): TypedContractMethod<[_day: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "minCashThreshold"
  ): TypedContractMethod<[_token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "isTrustedForwarder"
  ): TypedContractMethod<[forwarder: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "comptroller"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "compToken"
  ): TypedContractMethod<[], [string], "view">;
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
    nameOrSignature: "investDai"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimCompAndPay"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPayMaster"
  ): TypedContractMethod<[_paymaster: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withinExecutionLimit"
  ): TypedContractMethod<[_amount: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "executionMaxPerTx"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "upgradeTo530"
  ): TypedContractMethod<
    [_interestReceiver: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requiredSignatures"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setInterestReceiver"
  ): TypedContractMethod<
    [_token: AddressLike, _receiver: AddressLike],
    [void],
    "nonpayable"
  >;
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
    nameOrSignature: "setMinInterestPaid"
  ): TypedContractMethod<
    [_token: AddressLike, _minInterestPaid: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMinCashThreshold"
  ): TypedContractMethod<
    [_token: AddressLike, _minCashThreshold: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "interestReceiver"
  ): TypedContractMethod<[_token: AddressLike], [string], "view">;
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
    nameOrSignature: "cDaiToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "daiToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setGasPrice"
  ): TypedContractMethod<[_gasPrice: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMaxPerTx"
  ): TypedContractMethod<[_maxPerTx: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "interestAmount"
  ): TypedContractMethod<[_token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "initializeInterest"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _minCashThreshold: BigNumberish,
      _minInterestPaid: BigNumberish,
      _interestReceiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getTrustedForwarder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "investedAmount"
  ): TypedContractMethod<[_token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "payInterest"
  ): TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isInterestEnabled"
  ): TypedContractMethod<[_token: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "setTrustedForwarder"
  ): TypedContractMethod<
    [_trustedForwarder: AddressLike],
    [void],
    "nonpayable"
  >;
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
    nameOrSignature: "disableInterest"
  ): TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "maxPerTx"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "gasPrice"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "PaidInterest"
  ): TypedContractEvent<
    PaidInterestEvent.InputTuple,
    PaidInterestEvent.OutputTuple,
    PaidInterestEvent.OutputObject
  >;
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
    "PaidInterest(address,address,uint256)": TypedContractEvent<
      PaidInterestEvent.InputTuple,
      PaidInterestEvent.OutputTuple,
      PaidInterestEvent.OutputObject
    >;
    PaidInterest: TypedContractEvent<
      PaidInterestEvent.InputTuple,
      PaidInterestEvent.OutputTuple,
      PaidInterestEvent.OutputObject
    >;

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
