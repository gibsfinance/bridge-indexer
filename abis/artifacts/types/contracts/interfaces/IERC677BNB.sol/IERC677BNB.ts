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
} from "../../../common";

export interface IERC677BNBInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "approve"
      | "totalSupply"
      | "transferFrom"
      | "increaseAllowance"
      | "balanceOf"
      | "decreaseAllowance"
      | "transfer"
      | "transferAndCall"
      | "allowance"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Transfer(address,address,uint256,bytes)"
      | "Transfer(address,address,uint256)"
      | "Approval"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferAndCall",
    values: [AddressLike, BigNumberish, BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
}

export namespace Transfer_address_address_uint256_bytes_Event {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [
    from: string,
    to: string,
    value: bigint,
    data: string
  ];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace Transfer_address_address_uint256_Event {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IERC677BNB extends BaseContract {
  connect(runner?: ContractRunner | null): IERC677BNB;
  waitForDeployment(): Promise<this>;

  interface: IERC677BNBInterface;

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

  approve: TypedContractMethod<
    [_spender: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transferFrom: TypedContractMethod<
    [_from: AddressLike, _to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  increaseAllowance: TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[_who: AddressLike], [bigint], "view">;

  decreaseAllowance: TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transfer: TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferAndCall: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish, arg2: BytesLike, arg3: AddressLike],
    [boolean],
    "nonpayable"
  >;

  allowance: TypedContractMethod<
    [_owner: AddressLike, _spender: AddressLike],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [_spender: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [_from: AddressLike, _to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "increaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[_who: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "decreaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [_to: AddressLike, _value: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferAndCall"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish, arg2: BytesLike, arg3: AddressLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [_owner: AddressLike, _spender: AddressLike],
    [bigint],
    "view"
  >;

  getEvent(
    key: "Transfer(address,address,uint256,bytes)"
  ): TypedContractEvent<
    Transfer_address_address_uint256_bytes_Event.InputTuple,
    Transfer_address_address_uint256_bytes_Event.OutputTuple,
    Transfer_address_address_uint256_bytes_Event.OutputObject
  >;
  getEvent(
    key: "Transfer(address,address,uint256)"
  ): TypedContractEvent<
    Transfer_address_address_uint256_Event.InputTuple,
    Transfer_address_address_uint256_Event.OutputTuple,
    Transfer_address_address_uint256_Event.OutputObject
  >;
  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;

  filters: {
    "Transfer(address,address,uint256,bytes)": TypedContractEvent<
      Transfer_address_address_uint256_bytes_Event.InputTuple,
      Transfer_address_address_uint256_bytes_Event.OutputTuple,
      Transfer_address_address_uint256_bytes_Event.OutputObject
    >;
    "Transfer(address,address,uint256)": TypedContractEvent<
      Transfer_address_address_uint256_Event.InputTuple,
      Transfer_address_address_uint256_Event.OutputTuple,
      Transfer_address_address_uint256_Event.OutputObject
    >;

    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
  };
}