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

export interface IStakeManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "penalizeRelayManager"
      | "versionSM"
      | "unlockStake"
      | "stakeForAddress"
      | "isRelayManagerStaked"
      | "authorizeHubByOwner"
      | "withdrawStake"
      | "getStakeInfo"
      | "authorizeHubByManager"
      | "unauthorizeHubByOwner"
      | "unauthorizeHubByManager"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "StakeAdded"
      | "StakeUnlocked"
      | "StakeWithdrawn"
      | "StakePenalized"
      | "HubAuthorized"
      | "HubUnauthorized"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "penalizeRelayManager",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "versionSM", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unlockStake",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeForAddress",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isRelayManagerStaked",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizeHubByOwner",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawStake",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeInfo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizeHubByManager",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unauthorizeHubByOwner",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unauthorizeHubByManager",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "penalizeRelayManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "versionSM", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unlockStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakeForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRelayManagerStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizeHubByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizeHubByManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unauthorizeHubByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unauthorizeHubByManager",
    data: BytesLike
  ): Result;
}

export namespace StakeAddedEvent {
  export type InputTuple = [
    relayManager: AddressLike,
    owner: AddressLike,
    stake: BigNumberish,
    unstakeDelay: BigNumberish
  ];
  export type OutputTuple = [
    relayManager: string,
    owner: string,
    stake: bigint,
    unstakeDelay: bigint
  ];
  export interface OutputObject {
    relayManager: string;
    owner: string;
    stake: bigint;
    unstakeDelay: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakeUnlockedEvent {
  export type InputTuple = [
    relayManager: AddressLike,
    owner: AddressLike,
    withdrawBlock: BigNumberish
  ];
  export type OutputTuple = [
    relayManager: string,
    owner: string,
    withdrawBlock: bigint
  ];
  export interface OutputObject {
    relayManager: string;
    owner: string;
    withdrawBlock: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakeWithdrawnEvent {
  export type InputTuple = [
    relayManager: AddressLike,
    owner: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    relayManager: string,
    owner: string,
    amount: bigint
  ];
  export interface OutputObject {
    relayManager: string;
    owner: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakePenalizedEvent {
  export type InputTuple = [
    relayManager: AddressLike,
    beneficiary: AddressLike,
    reward: BigNumberish
  ];
  export type OutputTuple = [
    relayManager: string,
    beneficiary: string,
    reward: bigint
  ];
  export interface OutputObject {
    relayManager: string;
    beneficiary: string;
    reward: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace HubAuthorizedEvent {
  export type InputTuple = [relayManager: AddressLike, relayHub: AddressLike];
  export type OutputTuple = [relayManager: string, relayHub: string];
  export interface OutputObject {
    relayManager: string;
    relayHub: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace HubUnauthorizedEvent {
  export type InputTuple = [
    relayManager: AddressLike,
    relayHub: AddressLike,
    removalBlock: BigNumberish
  ];
  export type OutputTuple = [
    relayManager: string,
    relayHub: string,
    removalBlock: bigint
  ];
  export interface OutputObject {
    relayManager: string;
    relayHub: string;
    removalBlock: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IStakeManager extends BaseContract {
  connect(runner?: ContractRunner | null): IStakeManager;
  waitForDeployment(): Promise<this>;

  interface: IStakeManagerInterface;

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

  penalizeRelayManager: TypedContractMethod<
    [relayManager: AddressLike, beneficiary: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  versionSM: TypedContractMethod<[], [string], "view">;

  unlockStake: TypedContractMethod<
    [relayManager: AddressLike],
    [void],
    "nonpayable"
  >;

  stakeForAddress: TypedContractMethod<
    [relayManager: AddressLike, unstakeDelay: BigNumberish],
    [void],
    "payable"
  >;

  isRelayManagerStaked: TypedContractMethod<
    [
      relayManager: AddressLike,
      relayHub: AddressLike,
      minAmount: BigNumberish,
      minUnstakeDelay: BigNumberish
    ],
    [boolean],
    "view"
  >;

  authorizeHubByOwner: TypedContractMethod<
    [relayManager: AddressLike, relayHub: AddressLike],
    [void],
    "nonpayable"
  >;

  withdrawStake: TypedContractMethod<
    [relayManager: AddressLike],
    [void],
    "nonpayable"
  >;

  getStakeInfo: TypedContractMethod<
    [relayManager: AddressLike],
    [
      [bigint, bigint, bigint, string] & {
        stake: bigint;
        unstakeDelay: bigint;
        withdrawBlock: bigint;
        owner: string;
      }
    ],
    "view"
  >;

  authorizeHubByManager: TypedContractMethod<
    [relayHub: AddressLike],
    [void],
    "nonpayable"
  >;

  unauthorizeHubByOwner: TypedContractMethod<
    [relayManager: AddressLike, relayHub: AddressLike],
    [void],
    "nonpayable"
  >;

  unauthorizeHubByManager: TypedContractMethod<
    [relayHub: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "penalizeRelayManager"
  ): TypedContractMethod<
    [relayManager: AddressLike, beneficiary: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "versionSM"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "unlockStake"
  ): TypedContractMethod<[relayManager: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stakeForAddress"
  ): TypedContractMethod<
    [relayManager: AddressLike, unstakeDelay: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "isRelayManagerStaked"
  ): TypedContractMethod<
    [
      relayManager: AddressLike,
      relayHub: AddressLike,
      minAmount: BigNumberish,
      minUnstakeDelay: BigNumberish
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "authorizeHubByOwner"
  ): TypedContractMethod<
    [relayManager: AddressLike, relayHub: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawStake"
  ): TypedContractMethod<[relayManager: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getStakeInfo"
  ): TypedContractMethod<
    [relayManager: AddressLike],
    [
      [bigint, bigint, bigint, string] & {
        stake: bigint;
        unstakeDelay: bigint;
        withdrawBlock: bigint;
        owner: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "authorizeHubByManager"
  ): TypedContractMethod<[relayHub: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unauthorizeHubByOwner"
  ): TypedContractMethod<
    [relayManager: AddressLike, relayHub: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unauthorizeHubByManager"
  ): TypedContractMethod<[relayHub: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "StakeAdded"
  ): TypedContractEvent<
    StakeAddedEvent.InputTuple,
    StakeAddedEvent.OutputTuple,
    StakeAddedEvent.OutputObject
  >;
  getEvent(
    key: "StakeUnlocked"
  ): TypedContractEvent<
    StakeUnlockedEvent.InputTuple,
    StakeUnlockedEvent.OutputTuple,
    StakeUnlockedEvent.OutputObject
  >;
  getEvent(
    key: "StakeWithdrawn"
  ): TypedContractEvent<
    StakeWithdrawnEvent.InputTuple,
    StakeWithdrawnEvent.OutputTuple,
    StakeWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "StakePenalized"
  ): TypedContractEvent<
    StakePenalizedEvent.InputTuple,
    StakePenalizedEvent.OutputTuple,
    StakePenalizedEvent.OutputObject
  >;
  getEvent(
    key: "HubAuthorized"
  ): TypedContractEvent<
    HubAuthorizedEvent.InputTuple,
    HubAuthorizedEvent.OutputTuple,
    HubAuthorizedEvent.OutputObject
  >;
  getEvent(
    key: "HubUnauthorized"
  ): TypedContractEvent<
    HubUnauthorizedEvent.InputTuple,
    HubUnauthorizedEvent.OutputTuple,
    HubUnauthorizedEvent.OutputObject
  >;

  filters: {
    "StakeAdded(address,address,uint256,uint256)": TypedContractEvent<
      StakeAddedEvent.InputTuple,
      StakeAddedEvent.OutputTuple,
      StakeAddedEvent.OutputObject
    >;
    StakeAdded: TypedContractEvent<
      StakeAddedEvent.InputTuple,
      StakeAddedEvent.OutputTuple,
      StakeAddedEvent.OutputObject
    >;

    "StakeUnlocked(address,address,uint256)": TypedContractEvent<
      StakeUnlockedEvent.InputTuple,
      StakeUnlockedEvent.OutputTuple,
      StakeUnlockedEvent.OutputObject
    >;
    StakeUnlocked: TypedContractEvent<
      StakeUnlockedEvent.InputTuple,
      StakeUnlockedEvent.OutputTuple,
      StakeUnlockedEvent.OutputObject
    >;

    "StakeWithdrawn(address,address,uint256)": TypedContractEvent<
      StakeWithdrawnEvent.InputTuple,
      StakeWithdrawnEvent.OutputTuple,
      StakeWithdrawnEvent.OutputObject
    >;
    StakeWithdrawn: TypedContractEvent<
      StakeWithdrawnEvent.InputTuple,
      StakeWithdrawnEvent.OutputTuple,
      StakeWithdrawnEvent.OutputObject
    >;

    "StakePenalized(address,address,uint256)": TypedContractEvent<
      StakePenalizedEvent.InputTuple,
      StakePenalizedEvent.OutputTuple,
      StakePenalizedEvent.OutputObject
    >;
    StakePenalized: TypedContractEvent<
      StakePenalizedEvent.InputTuple,
      StakePenalizedEvent.OutputTuple,
      StakePenalizedEvent.OutputObject
    >;

    "HubAuthorized(address,address)": TypedContractEvent<
      HubAuthorizedEvent.InputTuple,
      HubAuthorizedEvent.OutputTuple,
      HubAuthorizedEvent.OutputObject
    >;
    HubAuthorized: TypedContractEvent<
      HubAuthorizedEvent.InputTuple,
      HubAuthorizedEvent.OutputTuple,
      HubAuthorizedEvent.OutputObject
    >;

    "HubUnauthorized(address,address,uint256)": TypedContractEvent<
      HubUnauthorizedEvent.InputTuple,
      HubUnauthorizedEvent.OutputTuple,
      HubUnauthorizedEvent.OutputObject
    >;
    HubUnauthorized: TypedContractEvent<
      HubUnauthorizedEvent.InputTuple,
      HubUnauthorizedEvent.OutputTuple,
      HubUnauthorizedEvent.OutputObject
    >;
  };
}