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

export interface IBasicOmnibridgeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "deployAndHandleBridgedTokensAndCall"
      | "handleBridgedTokensAndCall"
      | "handleNativeTokensAndCall"
      | "relayTokensAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployAndHandleBridgedTokensAndCall",
    values: [
      AddressLike,
      string,
      string,
      BigNumberish,
      AddressLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "handleBridgedTokensAndCall",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "handleNativeTokensAndCall",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "relayTokensAndCall",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployAndHandleBridgedTokensAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleBridgedTokensAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleNativeTokensAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "relayTokensAndCall",
    data: BytesLike
  ): Result;
}

export interface IBasicOmnibridge extends BaseContract {
  connect(runner?: ContractRunner | null): IBasicOmnibridge;
  waitForDeployment(): Promise<this>;

  interface: IBasicOmnibridgeInterface;

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

  deployAndHandleBridgedTokensAndCall: TypedContractMethod<
    [
      _token: AddressLike,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      _recipient: AddressLike,
      _value: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  handleBridgedTokensAndCall: TypedContractMethod<
    [
      _token: AddressLike,
      _recipient: AddressLike,
      _value: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  handleNativeTokensAndCall: TypedContractMethod<
    [
      _token: AddressLike,
      _recipient: AddressLike,
      _value: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  relayTokensAndCall: TypedContractMethod<
    [
      token: AddressLike,
      _receiver: AddressLike,
      _value: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "deployAndHandleBridgedTokensAndCall"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      name: string,
      symbol: string,
      decimals: BigNumberish,
      _recipient: AddressLike,
      _value: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "handleBridgedTokensAndCall"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _recipient: AddressLike,
      _value: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "handleNativeTokensAndCall"
  ): TypedContractMethod<
    [
      _token: AddressLike,
      _recipient: AddressLike,
      _value: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "relayTokensAndCall"
  ): TypedContractMethod<
    [
      token: AddressLike,
      _receiver: AddressLike,
      _value: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}
