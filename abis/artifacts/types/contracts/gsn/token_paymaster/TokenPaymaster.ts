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

export interface TokenPaymasterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "preRelayedCall"
      | "setToken"
      | "getRelayHubDeposit"
      | "withdrawRelayHubDepositTo"
      | "CALLDATA_SIZE_LIMIT"
      | "claimTokens"
      | "setPostGasUsage"
      | "getHubAddr"
      | "postRelayedCall"
      | "setRelayHub"
      | "trustedForwarder"
      | "setCalldataSizeLimit"
      | "postGasUsage"
      | "owner"
      | "setBridge"
      | "versionPaymaster"
      | "_verifyForwarder"
      | "getGasAndDataLimits"
      | "calldataSizeLimit"
      | "FORWARDER_HUB_OVERHEAD"
      | "POST_RELAYED_CALL_GAS_LIMIT"
      | "setRouter"
      | "deposit"
      | "setTrustedForwarder"
      | "PAYMASTER_ACCEPTANCE_BUDGET"
      | "transferOwnership"
      | "PRE_RELAYED_CALL_GAS_LIMIT"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;

  encodeFunctionData(
    functionFragment: "preRelayedCall",
    values: [
      {
        request: {
          from: AddressLike;
          to: AddressLike;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
          validUntil: BigNumberish;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: AddressLike;
          paymaster: AddressLike;
          forwarder: AddressLike;
          paymasterData: BytesLike;
          clientId: BigNumberish;
        };
      },
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRelayHubDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRelayHubDepositTo",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "CALLDATA_SIZE_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimTokens",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setPostGasUsage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getHubAddr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "postRelayedCall",
    values: [
      BytesLike,
      boolean,
      BigNumberish,
      {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: AddressLike;
        paymaster: AddressLike;
        forwarder: AddressLike;
        paymasterData: BytesLike;
        clientId: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setRelayHub",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedForwarder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCalldataSizeLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "postGasUsage",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setBridge",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "versionPaymaster",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_verifyForwarder",
    values: [
      {
        request: {
          from: AddressLike;
          to: AddressLike;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
          validUntil: BigNumberish;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: AddressLike;
          paymaster: AddressLike;
          forwarder: AddressLike;
          paymasterData: BytesLike;
          clientId: BigNumberish;
        };
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasAndDataLimits",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calldataSizeLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FORWARDER_HUB_OVERHEAD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POST_RELAYED_CALL_GAS_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRouter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setTrustedForwarder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "PAYMASTER_ACCEPTANCE_BUDGET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "PRE_RELAYED_CALL_GAS_LIMIT",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "preRelayedCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRelayHubDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRelayHubDepositTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CALLDATA_SIZE_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPostGasUsage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getHubAddr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "postRelayedCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRelayHub",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCalldataSizeLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "postGasUsage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "versionPaymaster",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_verifyForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasAndDataLimits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calldataSizeLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FORWARDER_HUB_OVERHEAD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POST_RELAYED_CALL_GAS_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PAYMASTER_ACCEPTANCE_BUDGET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PRE_RELAYED_CALL_GAS_LIMIT",
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

export interface TokenPaymaster extends BaseContract {
  connect(runner?: ContractRunner | null): TokenPaymaster;
  waitForDeployment(): Promise<this>;

  interface: TokenPaymasterInterface;

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

  preRelayedCall: TypedContractMethod<
    [
      relayRequest: {
        request: {
          from: AddressLike;
          to: AddressLike;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
          validUntil: BigNumberish;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: AddressLike;
          paymaster: AddressLike;
          forwarder: AddressLike;
          paymasterData: BytesLike;
          clientId: BigNumberish;
        };
      },
      signature: BytesLike,
      approvalData: BytesLike,
      maxPossibleGas: BigNumberish
    ],
    [[string, boolean] & { context: string; revertOnRecipientRevert: boolean }],
    "nonpayable"
  >;

  setToken: TypedContractMethod<[t: AddressLike], [void], "nonpayable">;

  getRelayHubDeposit: TypedContractMethod<[], [bigint], "view">;

  withdrawRelayHubDepositTo: TypedContractMethod<
    [amount: BigNumberish, target: AddressLike],
    [void],
    "nonpayable"
  >;

  CALLDATA_SIZE_LIMIT: TypedContractMethod<[], [bigint], "view">;

  claimTokens: TypedContractMethod<
    [_token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;

  setPostGasUsage: TypedContractMethod<
    [gasUsage: BigNumberish],
    [void],
    "nonpayable"
  >;

  getHubAddr: TypedContractMethod<[], [string], "view">;

  postRelayedCall: TypedContractMethod<
    [
      context: BytesLike,
      success: boolean,
      gasUseWithoutPost: BigNumberish,
      relayData: {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: AddressLike;
        paymaster: AddressLike;
        forwarder: AddressLike;
        paymasterData: BytesLike;
        clientId: BigNumberish;
      }
    ],
    [void],
    "nonpayable"
  >;

  setRelayHub: TypedContractMethod<[hub: AddressLike], [void], "nonpayable">;

  trustedForwarder: TypedContractMethod<[], [string], "view">;

  setCalldataSizeLimit: TypedContractMethod<
    [sizeLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  postGasUsage: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  setBridge: TypedContractMethod<[b: AddressLike], [void], "nonpayable">;

  versionPaymaster: TypedContractMethod<[], [string], "view">;

  _verifyForwarder: TypedContractMethod<
    [
      relayRequest: {
        request: {
          from: AddressLike;
          to: AddressLike;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
          validUntil: BigNumberish;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: AddressLike;
          paymaster: AddressLike;
          forwarder: AddressLike;
          paymasterData: BytesLike;
          clientId: BigNumberish;
        };
      }
    ],
    [void],
    "view"
  >;

  getGasAndDataLimits: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        acceptanceBudget: bigint;
        preRelayedCallGasLimit: bigint;
        postRelayedCallGasLimit: bigint;
        calldataSizeLimit: bigint;
      }
    ],
    "view"
  >;

  calldataSizeLimit: TypedContractMethod<[], [bigint], "view">;

  FORWARDER_HUB_OVERHEAD: TypedContractMethod<[], [bigint], "view">;

  POST_RELAYED_CALL_GAS_LIMIT: TypedContractMethod<[], [bigint], "view">;

  setRouter: TypedContractMethod<[r: AddressLike], [void], "nonpayable">;

  deposit: TypedContractMethod<[], [void], "payable">;

  setTrustedForwarder: TypedContractMethod<
    [forwarder: AddressLike],
    [void],
    "nonpayable"
  >;

  PAYMASTER_ACCEPTANCE_BUDGET: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  PRE_RELAYED_CALL_GAS_LIMIT: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "preRelayedCall"
  ): TypedContractMethod<
    [
      relayRequest: {
        request: {
          from: AddressLike;
          to: AddressLike;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
          validUntil: BigNumberish;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: AddressLike;
          paymaster: AddressLike;
          forwarder: AddressLike;
          paymasterData: BytesLike;
          clientId: BigNumberish;
        };
      },
      signature: BytesLike,
      approvalData: BytesLike,
      maxPossibleGas: BigNumberish
    ],
    [[string, boolean] & { context: string; revertOnRecipientRevert: boolean }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setToken"
  ): TypedContractMethod<[t: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getRelayHubDeposit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdrawRelayHubDepositTo"
  ): TypedContractMethod<
    [amount: BigNumberish, target: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "CALLDATA_SIZE_LIMIT"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "claimTokens"
  ): TypedContractMethod<
    [_token: AddressLike, _to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPostGasUsage"
  ): TypedContractMethod<[gasUsage: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getHubAddr"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "postRelayedCall"
  ): TypedContractMethod<
    [
      context: BytesLike,
      success: boolean,
      gasUseWithoutPost: BigNumberish,
      relayData: {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: AddressLike;
        paymaster: AddressLike;
        forwarder: AddressLike;
        paymasterData: BytesLike;
        clientId: BigNumberish;
      }
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRelayHub"
  ): TypedContractMethod<[hub: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "trustedForwarder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setCalldataSizeLimit"
  ): TypedContractMethod<[sizeLimit: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "postGasUsage"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setBridge"
  ): TypedContractMethod<[b: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "versionPaymaster"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "_verifyForwarder"
  ): TypedContractMethod<
    [
      relayRequest: {
        request: {
          from: AddressLike;
          to: AddressLike;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
          validUntil: BigNumberish;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: AddressLike;
          paymaster: AddressLike;
          forwarder: AddressLike;
          paymasterData: BytesLike;
          clientId: BigNumberish;
        };
      }
    ],
    [void],
    "view"
  >;
  getFunction(
    nameOrSignature: "getGasAndDataLimits"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        acceptanceBudget: bigint;
        preRelayedCallGasLimit: bigint;
        postRelayedCallGasLimit: bigint;
        calldataSizeLimit: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "calldataSizeLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "FORWARDER_HUB_OVERHEAD"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "POST_RELAYED_CALL_GAS_LIMIT"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setRouter"
  ): TypedContractMethod<[r: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "setTrustedForwarder"
  ): TypedContractMethod<[forwarder: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "PAYMASTER_ACCEPTANCE_BUDGET"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "PRE_RELAYED_CALL_GAS_LIMIT"
  ): TypedContractMethod<[], [bigint], "view">;

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
