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

export interface AMBMockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "transactionHash"
      | "sourceChainId"
      | "failedMessageReceiver"
      | "failedMessageSender"
      | "messageId"
      | "setMaxGasPerTx"
      | "executeMessageCall"
      | "requireToConfirmMessage"
      | "messageSourceChainId"
      | "nonce"
      | "messageCallStatus"
      | "messageSender"
      | "requireToPassMessage"
      | "failedMessageDataHash"
      | "maxGasPerTx"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "MockedEvent"): EventFragment;

  encodeFunctionData(
    functionFragment: "transactionHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sourceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessageReceiver",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessageSender",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "messageId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setMaxGasPerTx",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMessageCall",
    values: [AddressLike, AddressLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requireToConfirmMessage",
    values: [AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "messageSourceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "messageCallStatus",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "messageSender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requireToPassMessage",
    values: [AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessageDataHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxGasPerTx",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "transactionHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sourceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedMessageReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedMessageSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messageId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMaxGasPerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMessageCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireToConfirmMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageSourceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "messageCallStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireToPassMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedMessageDataHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxGasPerTx",
    data: BytesLike
  ): Result;
}

export namespace MockedEventEvent {
  export type InputTuple = [messageId: BytesLike, encodedData: BytesLike];
  export type OutputTuple = [messageId: string, encodedData: string];
  export interface OutputObject {
    messageId: string;
    encodedData: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AMBMock extends BaseContract {
  connect(runner?: ContractRunner | null): AMBMock;
  waitForDeployment(): Promise<this>;

  interface: AMBMockInterface;

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

  transactionHash: TypedContractMethod<[], [string], "view">;

  sourceChainId: TypedContractMethod<[], [bigint], "view">;

  failedMessageReceiver: TypedContractMethod<
    [arg0: BytesLike],
    [string],
    "view"
  >;

  failedMessageSender: TypedContractMethod<[arg0: BytesLike], [string], "view">;

  messageId: TypedContractMethod<[], [string], "view">;

  setMaxGasPerTx: TypedContractMethod<
    [_value: BigNumberish],
    [void],
    "nonpayable"
  >;

  executeMessageCall: TypedContractMethod<
    [
      _contract: AddressLike,
      _sender: AddressLike,
      _data: BytesLike,
      _messageId: BytesLike,
      _gas: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  requireToConfirmMessage: TypedContractMethod<
    [_contract: AddressLike, _data: BytesLike, _gas: BigNumberish],
    [string],
    "nonpayable"
  >;

  messageSourceChainId: TypedContractMethod<[], [bigint], "view">;

  nonce: TypedContractMethod<[], [bigint], "view">;

  messageCallStatus: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;

  messageSender: TypedContractMethod<[], [string], "view">;

  requireToPassMessage: TypedContractMethod<
    [_contract: AddressLike, _data: BytesLike, _gas: BigNumberish],
    [string],
    "nonpayable"
  >;

  failedMessageDataHash: TypedContractMethod<
    [arg0: BytesLike],
    [string],
    "view"
  >;

  maxGasPerTx: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "transactionHash"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "sourceChainId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "failedMessageReceiver"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "failedMessageSender"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "messageId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setMaxGasPerTx"
  ): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "executeMessageCall"
  ): TypedContractMethod<
    [
      _contract: AddressLike,
      _sender: AddressLike,
      _data: BytesLike,
      _messageId: BytesLike,
      _gas: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requireToConfirmMessage"
  ): TypedContractMethod<
    [_contract: AddressLike, _data: BytesLike, _gas: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "messageSourceChainId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nonce"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "messageCallStatus"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "messageSender"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "requireToPassMessage"
  ): TypedContractMethod<
    [_contract: AddressLike, _data: BytesLike, _gas: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "failedMessageDataHash"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "maxGasPerTx"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "MockedEvent"
  ): TypedContractEvent<
    MockedEventEvent.InputTuple,
    MockedEventEvent.OutputTuple,
    MockedEventEvent.OutputObject
  >;

  filters: {
    "MockedEvent(bytes32,bytes)": TypedContractEvent<
      MockedEventEvent.InputTuple,
      MockedEventEvent.OutputTuple,
      MockedEventEvent.OutputObject
    >;
    MockedEvent: TypedContractEvent<
      MockedEventEvent.InputTuple,
      MockedEventEvent.OutputTuple,
      MockedEventEvent.OutputObject
    >;
  };
}
