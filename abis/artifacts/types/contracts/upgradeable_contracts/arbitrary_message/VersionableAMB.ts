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
} from "../../../common";

export interface VersionableAMBInterface extends Interface {
  getFunction(
    nameOrSignature: "getBridgeMode" | "getBridgeInterfacesVersion"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBridgeMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBridgeInterfacesVersion",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getBridgeMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBridgeInterfacesVersion",
    data: BytesLike
  ): Result;
}

export interface VersionableAMB extends BaseContract {
  connect(runner?: ContractRunner | null): VersionableAMB;
  waitForDeployment(): Promise<this>;

  interface: VersionableAMBInterface;

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

  getBridgeMode: TypedContractMethod<[], [string], "view">;

  getBridgeInterfacesVersion: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & { major: bigint; minor: bigint; patch: bigint }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getBridgeMode"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getBridgeInterfacesVersion"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & { major: bigint; minor: bigint; patch: bigint }
    ],
    "view"
  >;

  filters: {};
}