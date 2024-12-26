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

export interface BasicAMBMediatorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "setBridgeContract"
      | "setMediatorContractOnOtherSide"
      | "mediatorContractOnOtherSide"
      | "owner"
      | "requestGasLimit"
      | "bridgeContract"
      | "transferOwnership"
      | "setRequestGasLimit"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;

  encodeFunctionData(
    functionFragment: "setBridgeContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setMediatorContractOnOtherSide",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mediatorContractOnOtherSide",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "requestGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bridgeContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRequestGasLimit",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "setBridgeContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMediatorContractOnOtherSide",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mediatorContractOnOtherSide",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bridgeContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRequestGasLimit",
    data: BytesLike
  ): Result;
}

export namespace OwnershipTransferredEvent {
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

export interface BasicAMBMediator extends BaseContract {
  connect(runner?: ContractRunner | null): BasicAMBMediator;
  waitForDeployment(): Promise<this>;

  interface: BasicAMBMediatorInterface;

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

  setBridgeContract: TypedContractMethod<
    [_bridgeContract: AddressLike],
    [void],
    "nonpayable"
  >;

  setMediatorContractOnOtherSide: TypedContractMethod<
    [_mediatorContract: AddressLike],
    [void],
    "nonpayable"
  >;

  mediatorContractOnOtherSide: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  requestGasLimit: TypedContractMethod<[], [bigint], "view">;

  bridgeContract: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  setRequestGasLimit: TypedContractMethod<
    [_requestGasLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "setBridgeContract"
  ): TypedContractMethod<[_bridgeContract: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMediatorContractOnOtherSide"
  ): TypedContractMethod<
    [_mediatorContract: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mediatorContractOnOtherSide"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "requestGasLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "bridgeContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRequestGasLimit"
  ): TypedContractMethod<
    [_requestGasLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
