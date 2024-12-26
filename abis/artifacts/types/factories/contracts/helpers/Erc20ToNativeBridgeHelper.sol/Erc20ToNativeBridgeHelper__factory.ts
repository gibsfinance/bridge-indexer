/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  Erc20ToNativeBridgeHelper,
  Erc20ToNativeBridgeHelperInterface,
} from "../../../../contracts/helpers/Erc20ToNativeBridgeHelper.sol/Erc20ToNativeBridgeHelper";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_msgHash",
        type: "bytes32",
      },
    ],
    name: "getMessage",
    outputs: [
      {
        name: "result",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_recipient",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
      {
        name: "_origTxHash",
        type: "bytes32",
      },
    ],
    name: "getMessageHash",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "foreignBridge",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_msgHash",
        type: "bytes32",
      },
    ],
    name: "getSignatures",
    outputs: [
      {
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "bridge",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "clean",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_homeBridge",
        type: "address",
      },
      {
        name: "_foreignBridge",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405160408061085b83398101604052805160209091015160008054600160a060020a0319908116331790915560018054600160a060020a03948516908316179055600280549390921692169190911790556107e9806100726000396000f3006080604052600436106100825763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630139a221811461008757806330322ce7146101145780637445d6591461014d5780638da5cb5b1461017e5780639bc5106814610193578063e78cea92146101ab578063fc4333cd146101c0575b600080fd5b34801561009357600080fd5b5061009f6004356101d7565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100d95781810151838201526020016100c1565b50505050905090810190601f1680156101065780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561012057600080fd5b5061013b600160a060020a03600435166024356044356102cb565b60408051918252519081900360200190f35b34801561015957600080fd5b50610162610384565b60408051600160a060020a039092168252519081900360200190f35b34801561018a57600080fd5b50610162610393565b34801561019f57600080fd5b5061009f6004356103a2565b3480156101b757600080fd5b506101626106fb565b3480156101cc57600080fd5b506101d561070a565b005b600154604080517f490a32c6000000000000000000000000000000000000000000000000000000008152600481018490529051606092600160a060020a03169163490a32c691602480830192600092919082900301818387803b15801561023d57600080fd5b505af1158015610251573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561027a57600080fd5b81019080805164010000000081111561029257600080fd5b820160208101848111156102a557600080fd5b81516401000000008111828201871017156102bf57600080fd5b50909695505050505050565b600254604080516c01000000000000000000000000600160a060020a0380881682026020808501919091526034840188905260548401879052941602607482015281516068818303018152608890910191829052805160009384939182918401908083835b6020831061034f5780518252601f199092019160209182019101610330565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912098975050505050505050565b600254600160a060020a031681565b600054600160a060020a031681565b600154604080517f0cbf0601000000000000000000000000000000000000000000000000000000008152600481018490529051606092600092849284928492849283928392600160a060020a0390911691630cbf06019160248082019260209290919082900301818787803b15801561041a57600080fd5b505af115801561042e573d6000803e3d6000fd5b505050506040513d602081101561044457600080fd5b5051600154604080517fffd19e8c000000000000000000000000000000000000000000000000000000008152600481018490529051929950600160a060020a039091169163ffd19e8c916024808201926020929091908290030181600087803b1580156104b057600080fd5b505af11580156104c4573d6000803e3d6000fd5b505050506040513d60208110156104da57600080fd5b5051151561054957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f6d657373616765206861736e2774206265656e20636f6e6669726d6564000000604482015290519081900360640190fd5b758fffffffffffffffffffffffffffffffffffffffffff90961695610100871061057257600080fd5b866041026001016040519080825280601f01601f1916602001820160405280156105a6578160200160208202803883390190505b509550866020870153600094505b868510156106ee57600154604080517f1812d996000000000000000000000000000000000000000000000000000000008152600481018c9052602481018890529051600160a060020a0390921691631812d9969160448082019260009290919082900301818387803b15801561062957600080fd5b505af115801561063d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561066657600080fd5b81019080805164010000000081111561067e57600080fd5b8201602081018481111561069157600080fd5b81516401000000008111828201871017156106ab57600080fd5b505092919050505093506106be84610791565b925092509250602186018186820153602086810291890182810186905290890201018290526001909401936105b4565b5093979650505050505050565b600154600160a060020a031681565b600054600160a060020a0316331461078357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e6f7420616e206f776e65720000000000000000000000000000000000000000604482015290519081900360640190fd5b600054600160a060020a0316ff5b6000806000835160411415156107a657600080fd5b5050506020810151604082015160419092015190925600a165627a7a7230582072aca4269539ec0a444069a8e9bb9afe07210c6373913cf8e1730128f3ec93350029";

type Erc20ToNativeBridgeHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Erc20ToNativeBridgeHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Erc20ToNativeBridgeHelper__factory extends ContractFactory {
  constructor(...args: Erc20ToNativeBridgeHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _homeBridge: AddressLike,
    _foreignBridge: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _homeBridge,
      _foreignBridge,
      overrides || {}
    );
  }
  override deploy(
    _homeBridge: AddressLike,
    _foreignBridge: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _homeBridge,
      _foreignBridge,
      overrides || {}
    ) as Promise<
      Erc20ToNativeBridgeHelper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): Erc20ToNativeBridgeHelper__factory {
    return super.connect(runner) as Erc20ToNativeBridgeHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Erc20ToNativeBridgeHelperInterface {
    return new Interface(_abi) as Erc20ToNativeBridgeHelperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Erc20ToNativeBridgeHelper {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as Erc20ToNativeBridgeHelper;
  }
}