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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IAMBInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "transactionHash"
      | "sourceChainId"
      | "failedMessageReceiver"
      | "failedMessageSender"
      | "requireToGetInformation"
      | "messageId"
      | "requireToConfirmMessage"
      | "messageSourceChainId"
      | "destinationChainId"
      | "messageCallStatus"
      | "messageSender"
      | "requireToPassMessage"
      | "failedMessageDataHash"
      | "maxGasPerTx"
  ): FunctionFragment;

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
  encodeFunctionData(
    functionFragment: "requireToGetInformation",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "messageId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "requireToConfirmMessage",
    values: [AddressLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "messageSourceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "destinationChainId",
    values?: undefined
  ): string;
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
  decodeFunctionResult(
    functionFragment: "requireToGetInformation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messageId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requireToConfirmMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageSourceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destinationChainId",
    data: BytesLike
  ): Result;
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

  transactionHash: TypedContractMethod<[], [string], "view">;

  sourceChainId: TypedContractMethod<[], [bigint], "view">;

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

  requireToGetInformation: TypedContractMethod<
    [_requestSelector: BytesLike, _data: BytesLike],
    [string],
    "nonpayable"
  >;

  messageId: TypedContractMethod<[], [string], "view">;

  requireToConfirmMessage: TypedContractMethod<
    [_contract: AddressLike, _data: BytesLike, _gas: BigNumberish],
    [string],
    "nonpayable"
  >;

  messageSourceChainId: TypedContractMethod<[], [string], "view">;

  destinationChainId: TypedContractMethod<[], [bigint], "view">;

  messageCallStatus: TypedContractMethod<
    [_messageId: BytesLike],
    [boolean],
    "view"
  >;

  messageSender: TypedContractMethod<[], [string], "view">;

  requireToPassMessage: TypedContractMethod<
    [_contract: AddressLike, _data: BytesLike, _gas: BigNumberish],
    [string],
    "nonpayable"
  >;

  failedMessageDataHash: TypedContractMethod<
    [_messageId: BytesLike],
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
  ): TypedContractMethod<[_messageId: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "failedMessageSender"
  ): TypedContractMethod<[_messageId: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "requireToGetInformation"
  ): TypedContractMethod<
    [_requestSelector: BytesLike, _data: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "messageId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "requireToConfirmMessage"
  ): TypedContractMethod<
    [_contract: AddressLike, _data: BytesLike, _gas: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "messageSourceChainId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "destinationChainId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "messageCallStatus"
  ): TypedContractMethod<[_messageId: BytesLike], [boolean], "view">;
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
  ): TypedContractMethod<[_messageId: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "maxGasPerTx"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
