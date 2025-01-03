/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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
} from "../../common";

export interface MessageTestInterface extends Interface {
  getFunction(
    nameOrSignature: "unpackData" | "unpackDataWithExtraParams"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "unpackData",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unpackDataWithExtraParams",
    values: [BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "unpackData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unpackDataWithExtraParams",
    data: BytesLike
  ): Result;
}

export interface MessageTest extends BaseContract {
  connect(runner?: ContractRunner | null): MessageTest;
  waitForDeployment(): Promise<this>;

  interface: MessageTestInterface;

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

  unpackData: TypedContractMethod<
    [_data: BytesLike],
    [
      [string, string, string, bigint, bigint, [bigint, bigint], string] & {
        messageId: string;
        sender: string;
        executor: string;
        gasLimit: bigint;
        dataType: bigint;
        chainIds: [bigint, bigint];
        data: string;
      }
    ],
    "view"
  >;

  unpackDataWithExtraParams: TypedContractMethod<
    [_data: BytesLike, arg1: BytesLike],
    [
      [string, string, string, bigint, bigint, [bigint, bigint], string] & {
        messageId: string;
        sender: string;
        executor: string;
        gasLimit: bigint;
        dataType: bigint;
        chainIds: [bigint, bigint];
        data: string;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "unpackData"
  ): TypedContractMethod<
    [_data: BytesLike],
    [
      [string, string, string, bigint, bigint, [bigint, bigint], string] & {
        messageId: string;
        sender: string;
        executor: string;
        gasLimit: bigint;
        dataType: bigint;
        chainIds: [bigint, bigint];
        data: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "unpackDataWithExtraParams"
  ): TypedContractMethod<
    [_data: BytesLike, arg1: BytesLike],
    [
      [string, string, string, bigint, bigint, [bigint, bigint], string] & {
        messageId: string;
        sender: string;
        executor: string;
        gasLimit: bigint;
        dataType: bigint;
        chainIds: [bigint, bigint];
        data: string;
      }
    ],
    "view"
  >;

  filters: {};
}
