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
} from "../../../common";

export interface IHomeErc20ToNativeBridgeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "numMessagesSigned"
      | "signature"
      | "message"
      | "isAlreadyProcessed"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "numMessagesSigned",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "signature",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "message", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "isAlreadyProcessed",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "numMessagesSigned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "signature", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "message", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAlreadyProcessed",
    data: BytesLike
  ): Result;
}

export interface IHomeErc20ToNativeBridge extends BaseContract {
  connect(runner?: ContractRunner | null): IHomeErc20ToNativeBridge;
  waitForDeployment(): Promise<this>;

  interface: IHomeErc20ToNativeBridgeInterface;

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

  message: TypedContractMethod<[_hash: BytesLike], [string], "view">;

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
    nameOrSignature: "message"
  ): TypedContractMethod<[_hash: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "isAlreadyProcessed"
  ): TypedContractMethod<[_number: BigNumberish], [boolean], "view">;

  filters: {};
}
