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

export interface ValidatableInterface extends Interface {
  getFunction(
    nameOrSignature: "requiredSignatures" | "validatorContract"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "requiredSignatures",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "validatorContract",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "requiredSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorContract",
    data: BytesLike
  ): Result;
}

export interface Validatable extends BaseContract {
  connect(runner?: ContractRunner | null): Validatable;
  waitForDeployment(): Promise<this>;

  interface: ValidatableInterface;

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

  requiredSignatures: TypedContractMethod<[], [bigint], "view">;

  validatorContract: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "requiredSignatures"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "validatorContract"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
