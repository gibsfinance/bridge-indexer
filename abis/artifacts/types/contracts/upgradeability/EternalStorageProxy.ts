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

export interface EternalStorageProxyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "upgradeTo"
      | "version"
      | "implementation"
      | "upgradeabilityOwner"
      | "upgradeToAndCall"
      | "transferProxyOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "ProxyOwnershipTransferred" | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeabilityOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [BigNumberish, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferProxyOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeabilityOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferProxyOwnership",
    data: BytesLike
  ): Result;
}

export namespace ProxyOwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [version: BigNumberish, implementation: AddressLike];
  export type OutputTuple = [version: bigint, implementation: string];
  export interface OutputObject {
    version: bigint;
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface EternalStorageProxy extends BaseContract {
  connect(runner?: ContractRunner | null): EternalStorageProxy;
  waitForDeployment(): Promise<this>;

  interface: EternalStorageProxyInterface;

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

  upgradeTo: TypedContractMethod<
    [version: BigNumberish, implementation: AddressLike],
    [void],
    "nonpayable"
  >;

  version: TypedContractMethod<[], [bigint], "view">;

  implementation: TypedContractMethod<[], [string], "view">;

  upgradeabilityOwner: TypedContractMethod<[], [string], "view">;

  upgradeToAndCall: TypedContractMethod<
    [version: BigNumberish, implementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  transferProxyOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "upgradeTo"
  ): TypedContractMethod<
    [version: BigNumberish, implementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "implementation"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "upgradeabilityOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [version: BigNumberish, implementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "transferProxyOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "ProxyOwnershipTransferred"
  ): TypedContractEvent<
    ProxyOwnershipTransferredEvent.InputTuple,
    ProxyOwnershipTransferredEvent.OutputTuple,
    ProxyOwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "ProxyOwnershipTransferred(address,address)": TypedContractEvent<
      ProxyOwnershipTransferredEvent.InputTuple,
      ProxyOwnershipTransferredEvent.OutputTuple,
      ProxyOwnershipTransferredEvent.OutputObject
    >;
    ProxyOwnershipTransferred: TypedContractEvent<
      ProxyOwnershipTransferredEvent.InputTuple,
      ProxyOwnershipTransferredEvent.OutputTuple,
      ProxyOwnershipTransferredEvent.OutputObject
    >;

    "Upgraded(uint256,address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}