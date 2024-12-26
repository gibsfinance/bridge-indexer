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

export interface IAMBInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "destinationChainId"
      | "failedMessageDataHash"
      | "failedMessageReceiver"
      | "failedMessageSender"
      | "maxGasPerTx"
      | "messageCallStatus"
      | "messageId"
      | "messageSender"
      | "messageSourceChainId"
      | "requireToConfirmMessage"
      | "requireToPassMessage"
      | "sourceChainId"
      | "transactionHash"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AffirmationCompleted"
      | "RelayedMessage"
      | "UserRequestForAffirmation"
      | "UserRequestForSignature"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "destinationChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessageDataHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessageReceiver",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessageSender",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "maxGasPerTx",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "messageCallStatus",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "messageId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "messageSender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "messageSourceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requireToConfirmMessage",
    values: [AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requireToPassMessage",
    values: [AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sourceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transactionHash",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "destinationChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedMessageDataHash",
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
  decodeFunctionResult(
    functionFragment: "maxGasPerTx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageCallStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messageId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "messageSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageSourceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireToConfirmMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireToPassMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sourceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactionHash",
    data: BytesLike
  ): Result;
}

export namespace AffirmationCompletedEvent {
  export type InputTuple = [
    sender: AddressLike,
    executor: AddressLike,
    messageId: BytesLike,
    status: boolean
  ];
  export type OutputTuple = [
    sender: string,
    executor: string,
    messageId: string,
    status: boolean
  ];
  export interface OutputObject {
    sender: string;
    executor: string;
    messageId: string;
    status: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RelayedMessageEvent {
  export type InputTuple = [
    sender: AddressLike,
    executor: AddressLike,
    messageId: BytesLike,
    status: boolean
  ];
  export type OutputTuple = [
    sender: string,
    executor: string,
    messageId: string,
    status: boolean
  ];
  export interface OutputObject {
    sender: string;
    executor: string;
    messageId: string;
    status: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserRequestForAffirmationEvent {
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

export namespace UserRequestForSignatureEvent {
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

export interface IAMB extends BaseContract {
  connect(runner?: ContractRunner | null): IAMB;
  waitForDeployment(): Promise<this>;

  interface: IAMBInterface;

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

  destinationChainId: TypedContractMethod<[], [bigint], "view">;

  failedMessageDataHash: TypedContractMethod<
    [_messageId: BytesLike],
    [string],
    "view"
  >;

  failedMessageReceiver: TypedContractMethod<
    [_messageId: BytesLike],
    [string],
    "view"
  >;

  failedMessageSender: TypedContractMethod<
    [_messageId: BytesLike],
    [string],
    "view"
  >;

  maxGasPerTx: TypedContractMethod<[], [bigint], "view">;

  messageCallStatus: TypedContractMethod<
    [_messageId: BytesLike],
    [boolean],
    "view"
  >;

  messageId: TypedContractMethod<[], [string], "view">;

  messageSender: TypedContractMethod<[], [string], "view">;

  messageSourceChainId: TypedContractMethod<[], [string], "view">;

  requireToConfirmMessage: TypedContractMethod<
    [_contract: AddressLike, _data: BytesLike, _gas: BigNumberish],
    [string],
    "nonpayable"
  >;

  requireToPassMessage: TypedContractMethod<
    [_contract: AddressLike, _data: BytesLike, _gas: BigNumberish],
    [string],
    "nonpayable"
  >;

  sourceChainId: TypedContractMethod<[], [bigint], "view">;

  transactionHash: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "destinationChainId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "failedMessageDataHash"
  ): TypedContractMethod<[_messageId: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "failedMessageReceiver"
  ): TypedContractMethod<[_messageId: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "failedMessageSender"
  ): TypedContractMethod<[_messageId: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "maxGasPerTx"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "messageCallStatus"
  ): TypedContractMethod<[_messageId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "messageId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "messageSender"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "messageSourceChainId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "requireToConfirmMessage"
  ): TypedContractMethod<
    [_contract: AddressLike, _data: BytesLike, _gas: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requireToPassMessage"
  ): TypedContractMethod<
    [_contract: AddressLike, _data: BytesLike, _gas: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sourceChainId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transactionHash"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "AffirmationCompleted"
  ): TypedContractEvent<
    AffirmationCompletedEvent.InputTuple,
    AffirmationCompletedEvent.OutputTuple,
    AffirmationCompletedEvent.OutputObject
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
    key: "UserRequestForSignature"
  ): TypedContractEvent<
    UserRequestForSignatureEvent.InputTuple,
    UserRequestForSignatureEvent.OutputTuple,
    UserRequestForSignatureEvent.OutputObject
  >;

  filters: {
    "AffirmationCompleted(address,address,bytes32,bool)": TypedContractEvent<
      AffirmationCompletedEvent.InputTuple,
      AffirmationCompletedEvent.OutputTuple,
      AffirmationCompletedEvent.OutputObject
    >;
    AffirmationCompleted: TypedContractEvent<
      AffirmationCompletedEvent.InputTuple,
      AffirmationCompletedEvent.OutputTuple,
      AffirmationCompletedEvent.OutputObject
    >;

    "RelayedMessage(address,address,bytes32,bool)": TypedContractEvent<
      RelayedMessageEvent.InputTuple,
      RelayedMessageEvent.OutputTuple,
      RelayedMessageEvent.OutputObject
    >;
    RelayedMessage: TypedContractEvent<
      RelayedMessageEvent.InputTuple,
      RelayedMessageEvent.OutputTuple,
      RelayedMessageEvent.OutputObject
    >;

    "UserRequestForAffirmation(bytes32,bytes)": TypedContractEvent<
      UserRequestForAffirmationEvent.InputTuple,
      UserRequestForAffirmationEvent.OutputTuple,
      UserRequestForAffirmationEvent.OutputObject
    >;
    UserRequestForAffirmation: TypedContractEvent<
      UserRequestForAffirmationEvent.InputTuple,
      UserRequestForAffirmationEvent.OutputTuple,
      UserRequestForAffirmationEvent.OutputObject
    >;

    "UserRequestForSignature(bytes32,bytes)": TypedContractEvent<
      UserRequestForSignatureEvent.InputTuple,
      UserRequestForSignatureEvent.OutputTuple,
      UserRequestForSignatureEvent.OutputObject
    >;
    UserRequestForSignature: TypedContractEvent<
      UserRequestForSignatureEvent.InputTuple,
      UserRequestForSignatureEvent.OutputTuple,
      UserRequestForSignatureEvent.OutputObject
    >;
  };
}
