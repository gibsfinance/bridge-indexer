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

export interface BoxInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "setValueOnOtherNetworkUsingManualLane"
      | "status"
      | "lastSender"
      | "makeAsyncCall"
      | "methodWillFail"
      | "value"
      | "setValue"
      | "messageId"
      | "setValueOnOtherNetwork"
      | "data"
      | "messageSourceChainId"
      | "methodOutOfGasOnOtherNetwork"
      | "methodOutOfGas"
      | "methodWillFailOnOtherNetwork"
      | "txHash"
      | "onInformationReceived"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "setValueOnOtherNetworkUsingManualLane",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "status", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastSender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "makeAsyncCall",
    values: [AddressLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "methodWillFail",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "messageId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setValueOnOtherNetwork",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "data", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "messageSourceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "methodOutOfGasOnOtherNetwork",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "methodOutOfGas",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "methodWillFailOnOtherNetwork",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "txHash", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onInformationReceived",
    values: [BytesLike, boolean, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "setValueOnOtherNetworkUsingManualLane",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "status", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lastSender", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "makeAsyncCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "methodWillFail",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "messageId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setValueOnOtherNetwork",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "data", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "messageSourceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "methodOutOfGasOnOtherNetwork",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "methodOutOfGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "methodWillFailOnOtherNetwork",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "txHash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onInformationReceived",
    data: BytesLike
  ): Result;
}

export interface Box extends BaseContract {
  connect(runner?: ContractRunner | null): Box;
  waitForDeployment(): Promise<this>;

  interface: BoxInterface;

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

  setValueOnOtherNetworkUsingManualLane: TypedContractMethod<
    [_i: BigNumberish, _bridge: AddressLike, _executor: AddressLike],
    [void],
    "nonpayable"
  >;

  status: TypedContractMethod<[], [boolean], "view">;

  lastSender: TypedContractMethod<[], [string], "view">;

  makeAsyncCall: TypedContractMethod<
    [_bridge: AddressLike, _selector: BytesLike, _data: BytesLike],
    [void],
    "nonpayable"
  >;

  methodWillFail: TypedContractMethod<[], [void], "nonpayable">;

  value: TypedContractMethod<[], [bigint], "view">;

  setValue: TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;

  messageId: TypedContractMethod<[], [string], "view">;

  setValueOnOtherNetwork: TypedContractMethod<
    [_i: BigNumberish, _bridge: AddressLike, _executor: AddressLike],
    [void],
    "nonpayable"
  >;

  data: TypedContractMethod<[], [string], "view">;

  messageSourceChainId: TypedContractMethod<[], [bigint], "view">;

  methodOutOfGasOnOtherNetwork: TypedContractMethod<
    [_bridge: AddressLike, _executor: AddressLike],
    [void],
    "nonpayable"
  >;

  methodOutOfGas: TypedContractMethod<[], [void], "nonpayable">;

  methodWillFailOnOtherNetwork: TypedContractMethod<
    [_bridge: AddressLike, _executor: AddressLike],
    [void],
    "nonpayable"
  >;

  txHash: TypedContractMethod<[], [string], "view">;

  onInformationReceived: TypedContractMethod<
    [_messageId: BytesLike, _status: boolean, _data: BytesLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "setValueOnOtherNetworkUsingManualLane"
  ): TypedContractMethod<
    [_i: BigNumberish, _bridge: AddressLike, _executor: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "status"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastSender"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "makeAsyncCall"
  ): TypedContractMethod<
    [_bridge: AddressLike, _selector: BytesLike, _data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "methodWillFail"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "value"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setValue"
  ): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "messageId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setValueOnOtherNetwork"
  ): TypedContractMethod<
    [_i: BigNumberish, _bridge: AddressLike, _executor: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "data"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "messageSourceChainId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "methodOutOfGasOnOtherNetwork"
  ): TypedContractMethod<
    [_bridge: AddressLike, _executor: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "methodOutOfGas"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "methodWillFailOnOtherNetwork"
  ): TypedContractMethod<
    [_bridge: AddressLike, _executor: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "txHash"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "onInformationReceived"
  ): TypedContractMethod<
    [_messageId: BytesLike, _status: boolean, _data: BytesLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}