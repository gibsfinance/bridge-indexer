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

export interface ERC677ReceiverTestInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "someVar"
      | "value"
      | "data"
      | "onTokenTransfer"
      | "doSomething"
      | "from"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "someVar", values?: undefined): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;
  encodeFunctionData(functionFragment: "data", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onTokenTransfer",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "doSomething",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "from", values?: undefined): string;

  decodeFunctionResult(functionFragment: "someVar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "data", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onTokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "doSomething",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "from", data: BytesLike): Result;
}

export interface ERC677ReceiverTest extends BaseContract {
  connect(runner?: ContractRunner | null): ERC677ReceiverTest;
  waitForDeployment(): Promise<this>;

  interface: ERC677ReceiverTestInterface;

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

  someVar: TypedContractMethod<[], [bigint], "view">;

  value: TypedContractMethod<[], [bigint], "view">;

  data: TypedContractMethod<[], [string], "view">;

  onTokenTransfer: TypedContractMethod<
    [_from: AddressLike, _value: BigNumberish, _data: BytesLike],
    [boolean],
    "nonpayable"
  >;

  doSomething: TypedContractMethod<
    [_value: BigNumberish],
    [void],
    "nonpayable"
  >;

  from: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "someVar"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "value"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "data"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "onTokenTransfer"
  ): TypedContractMethod<
    [_from: AddressLike, _value: BigNumberish, _data: BytesLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "doSomething"
  ): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "from"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
