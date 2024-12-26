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
} from "../../../common";

export interface Erc20ToNativeBridgeHelperInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getMessage"
      | "getMessageHash"
      | "foreignBridge"
      | "owner"
      | "getSignatures"
      | "bridge"
      | "clean"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getMessage",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMessageHash",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "foreignBridge",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSignatures",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
  encodeFunctionData(functionFragment: "clean", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getMessage", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMessageHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "foreignBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "clean", data: BytesLike): Result;
}

export interface Erc20ToNativeBridgeHelper extends BaseContract {
  connect(runner?: ContractRunner | null): Erc20ToNativeBridgeHelper;
  waitForDeployment(): Promise<this>;

  interface: Erc20ToNativeBridgeHelperInterface;

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

  getMessage: TypedContractMethod<[_msgHash: BytesLike], [string], "view">;

  getMessageHash: TypedContractMethod<
    [_recipient: AddressLike, _value: BigNumberish, _origTxHash: BytesLike],
    [string],
    "view"
  >;

  foreignBridge: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  getSignatures: TypedContractMethod<[_msgHash: BytesLike], [string], "view">;

  bridge: TypedContractMethod<[], [string], "view">;

  clean: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getMessage"
  ): TypedContractMethod<[_msgHash: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getMessageHash"
  ): TypedContractMethod<
    [_recipient: AddressLike, _value: BigNumberish, _origTxHash: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "foreignBridge"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getSignatures"
  ): TypedContractMethod<[_msgHash: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "bridge"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "clean"
  ): TypedContractMethod<[], [void], "nonpayable">;

  filters: {};
}
