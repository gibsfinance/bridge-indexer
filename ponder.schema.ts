import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Block: p.createTable(
    {
      id: p.hex(),
      chainId: p.bigint(),
      hash: p.hex(),
      number: p.bigint(),
      timestamp: p.bigint(),
      baseFeePerGas: p.bigint().optional(),
    },
    {
      chainIdIndex: p.index("chainId"),
      hashIndex: p.index("hash"),
      numberIndex: p.index("number"),
    }
  ),
  Transaction: p.createTable(
    {
      id: p.hex(),
      blockId: p.hex().references("Block.id"),
      block: p.one("blockId"),
      hash: p.hex(),
      index: p.int(),
      from: p.hex(),
      to: p.hex(),
      value: p.bigint(),
      maxFeePerGas: p.bigint().optional(),
      maxPriorityFeePerGas: p.bigint().optional(),
      gas: p.bigint(),
      gasPrice: p.bigint().optional(),
      nonce: p.bigint(),
      type: p.string(),
      userRequestForSignature: p.many("UserRequestForSignature.transactionId"),
      userRequestForAffirmation: p.many(
        "UserRequestForAffirmation.transactionId"
      ),
      signedForUserRequest: p.many("SignedForUserRequest.transactionId"),
      signedForAffirmation: p.many("SignedForAffirmation.transactionId"),
      affirmationCompleted: p.many("AffirmationCompleted.transactionId"),
      relayMessage: p.many("RelayMessage.transactionId"),
    },
    {
      hashIndex: p.index("hash"),
      blockIdIndex: p.index("blockId"),
      fromIndex: p.index("from"),
      toIndex: p.index("to"),
      maxFeePerGasIndex: p.index("maxFeePerGas"),
      maxPriorityFeePerGasIndex: p.index("maxPriorityFeePerGas"),
      gasIndex: p.index("gas"),
      gasPriceIndex: p.index("gasPrice"),
      nonceIndex: p.index("nonce"),
      typeIndex: p.index("type"),
    }
  ),
  Direction: p.createEnum(["home", "foreign"]),
  Provider: p.createEnum(["pulsechain", "tokensex"]),
  BridgeSide: p.createTable(
    {
      id: p.hex(),
      chainId: p.bigint(),
      address: p.hex(),
      provider: p.enum("Provider"),
      side: p.enum("Direction"),
    },
    {
      chainIdIndex: p.index("chainId"),
      addressIndex: p.index("address"),
      providerIndex: p.index("provider"),
      sideIndex: p.index("side"),
    }
  ),
  LatestValidatorStatusUpdate: p.createTable(
    {
      id: p.hex(), // validatorId
      orderId: p.hex().references("ValidatorStatusUpdate.id"),
      validatorStatusUpdate: p.one("orderId"),
    },
    {
      orderIdIndex: p.index("orderId"),
    }
  ),
  ValidatorStatusUpdate: p.createTable(
    {
      id: p.hex(), // orderId
      validatorId: p.hex(),
      transactionId: p.hex().references("Transaction.id"),
      transaction: p.one("transactionId"),
      address: p.hex(),
      bridgeId: p.hex().references("BridgeSide.id"),
      bridge: p.one("bridgeId"),
      value: p.boolean(),
      logIndex: p.int(),
    },
    {
      validatorIdIndex: p.index("validatorId"),
      transactionIdIndex: p.index("transactionId"),
      addressIndex: p.index("address"),
      bridgeIdIndex: p.index("bridgeId"),
    }
  ),
  LatestRequiredSignaturesChanged: p.createTable(
    {
      id: p.hex(), // bridgeId
      orderId: p.hex().references("RequiredSignaturesChanged.id"),
      requiredSignaturesChanged: p.one("orderId"),
      bridgeId: p.hex().references("BridgeSide.id"),
      bridge: p.one("bridgeId"),
    },
    {
      orderIdIndex: p.index("orderId"),
      bridgeIdIndex: p.index("bridgeId"),
    }
  ),
  RequiredSignaturesChanged: p.createTable(
    {
      id: p.hex(), // orderId
      bridgeId: p.hex().references("BridgeSide.id"),
      bridge: p.one("bridgeId"),
      value: p.bigint(),
      blockId: p.hex().references("Block.id"),
      block: p.one("blockId"),
      transactionId: p.hex().references("Transaction.id"),
      transaction: p.one("transactionId"),
    },
    {
      bridgeIdIndex: p.index("bridgeId"),
      transactionIdIndex: p.index("transactionId"),
      blockIdIndex: p.index("blockId"),
    }
  ),
  UserRequestForAffirmation: p.createTable(
    {
      id: p.hex(), // messageId
      messageId: p.hex().references("AffirmationCompleted.id"),
      delivery: p.one("messageId"),
      blockId: p.hex().references("Block.id"),
      block: p.one("blockId"),
      transactionId: p.hex().references("Transaction.id"),
      transaction: p.one("transactionId"),
      orderId: p.hex(),
      messageHash: p.hex(),
      from: p.hex(),
      to: p.hex(),
      amount: p.bigint(),
      encodedData: p.hex(),
      bridgeId: p.hex().references("BridgeSide.id"),
      bridge: p.one("bridgeId"),
      originationChainId: p.bigint(),
      destinationChainId: p.bigint(),
      requiredSignatureId: p.hex().references("RequiredSignaturesChanged.id"),
      requiredSignatures: p.one("requiredSignatureId"),
      confirmedSignaturesCount: p.int(),
      confirmedSignatures: p.many("SignedForAffirmation.userRequestId"),
      feeDirectorId: p.hex().optional().references("FeeDirectorAffirmation.id"),
      feeDirector: p.one("feeDirectorId"),
      finishedSigning: p.boolean(),
      token: p.hex(),
      handlingNative: p.boolean(),
      deliveringNative: p.boolean(),
    },
    {
      messageHashIndex: p.index("messageHash"),
      bridgeIdIndex: p.index("bridgeId"),
      finishedSigningIndex: p.index("finishedSigning"),
      requiredSignaturesIdIndex: p.index("requiredSignatureId"),
    }
  ),
  UserRequestForSignature: p.createTable(
    {
      id: p.hex(), // messageId
      messageId: p.hex().references("RelayMessage.id"),
      delivery: p.one("messageId"),
      blockId: p.hex().references("Block.id"),
      block: p.one("blockId"),
      transactionId: p.hex().references("Transaction.id"),
      transaction: p.one("transactionId"),
      orderId: p.hex(),
      messageHash: p.hex(),
      from: p.hex(),
      to: p.hex(),
      amount: p.bigint(),
      encodedData: p.hex(),
      logIndex: p.int(),
      bridgeId: p.hex().references("BridgeSide.id"),
      bridge: p.one("bridgeId"),
      originationChainId: p.bigint(),
      destinationChainId: p.bigint(),
      requiredSignatureId: p.hex().references("RequiredSignaturesChanged.id"),
      requiredSignatures: p.one("requiredSignatureId"),
      confirmedSignaturesCount: p.int(),
      confirmedSignatures: p.many("SignedForUserRequest.userRequestId"),
      feeDirectorId: p.hex().optional().references("FeeDirectorSignature.id"),
      feeDirector: p.one("feeDirectorId"),
      finishedSigning: p.boolean(),
      token: p.hex(),
      handlingNative: p.boolean(),
      deliveringNative: p.boolean(),
    },
    {
      messageHashIndex: p.index("messageHash"),
      bridgeIdIndex: p.index("bridgeId"),
      finishedSigningIndex: p.index("finishedSigning"),
      requiredSignaturesIdIndex: p.index("requiredSignatureId"),
    }
  ),
  FeeDirectorAffirmation: p.createTable(
    {
      id: p.hex(), // messageId
      userRequestId: p.hex().references("UserRequestForAffirmation.id"),
      userRequest: p.one("userRequestId"),
      recipient: p.hex(),
      settings: p.bigint(),
      limit: p.bigint(),
      multiplier: p.bigint(),
      feeType: p.string(),
      unwrapped: p.boolean(),
      excludePriority: p.boolean(),
    },
    {
      userRequestIdIndex: p.index("userRequestId"),
      recipientIndex: p.index("recipient"),
    }
  ),
  FeeDirectorSignature: p.createTable(
    {
      id: p.hex(), // messageId
      userRequestId: p.hex().references("UserRequestForSignature.id"),
      userRequest: p.one("userRequestId"),
      recipient: p.hex(),
      settings: p.bigint(),
      limit: p.bigint(),
      multiplier: p.bigint(),
      feeType: p.string(),
      unwrapped: p.boolean(),
      excludePriority: p.boolean(),
    },
    {
      userRequestIdIndex: p.index("userRequestId"),
      recipientIndex: p.index("recipient"),
    }
  ),
  ReverseMessageHashBinding: p.createTable(
    {
      id: p.hex(),
      messageId: p.hex(),
    },
    {
      messageIdIndex: p.index("messageId"),
    }
  ),
  SignedForAffirmation: p.createTable(
    {
      id: p.hex(), // signatureId
      messageHash: p.hex(),
      blockId: p.hex().references("Block.id"),
      block: p.one("blockId"),
      transactionId: p.hex().references("Transaction.id"),
      transaction: p.one("transactionId"),
      orderId: p.hex(),
      validatorId: p.hex(),
      userRequestId: p.hex().references("UserRequestForAffirmation.id"),
      userRequest: p.one("userRequestId"),
    },
    {
      messageHashIndex: p.index("messageHash"),
      orderIdIndex: p.index("orderId"),
      validatorIdIndex: p.index("validatorId"),
      userRequestIdIndex: p.index("userRequestId"),
    }
  ),
  SignedForUserRequest: p.createTable(
    {
      id: p.hex(), // signatureId
      messageHash: p.hex(),
      blockId: p.hex().references("Block.id"),
      block: p.one("blockId"),
      transactionId: p.hex().references("Transaction.id"),
      transaction: p.one("transactionId"),
      orderId: p.hex(),
      validatorId: p.hex(),
      userRequestId: p.hex().references("UserRequestForSignature.id"),
      userRequest: p.one("userRequestId"),
    },
    {
      messageHashIndex: p.index("messageHash"),
      orderIdIndex: p.index("orderId"),
      validatorIdIndex: p.index("validatorId"),
      userRequestIdIndex: p.index("userRequestId"),
    }
  ),
  AffirmationCompleted: p.createTable(
    {
      id: p.hex(), // messageHash
      blockId: p.hex().references("Block.id"),
      block: p.one("blockId"),
      transactionId: p.hex().references("Transaction.id"),
      transaction: p.one("transactionId"),
      orderId: p.hex(),
      deliveredBy: p.hex(),
      bridgeId: p.hex().references("BridgeSide.id"),
      bridge: p.one("bridgeId"),
      userRequestId: p.hex().references("UserRequestForAffirmation.id"),
      userRequest: p.one("userRequestId"),
    },
    {
      blockIdIndex: p.index("blockId"),
      transactionIdIndex: p.index("transactionId"),
      orderIdIndex: p.index("orderId"),
      deliveredByIndex: p.index("deliveredBy"),
      bridgeIdIndex: p.index("bridgeId"),
      userRequestIdIndex: p.index("userRequestId"),
    }
  ),
  RelayMessage: p.createTable(
    {
      id: p.hex(), // messageHash
      blockId: p.hex().references("Block.id"),
      block: p.one("blockId"),
      transactionId: p.hex().references("Transaction.id"),
      transaction: p.one("transactionId"),
      orderId: p.hex(),
      deliveredBy: p.hex(),
      bridgeId: p.hex().references("BridgeSide.id"),
      bridge: p.one("bridgeId"),
      userRequestId: p.hex().references("UserRequestForSignature.id"),
      userRequest: p.one("userRequestId"),
    },
    {
      transactionIdIndex: p.index("transactionId"),
      orderIdIndex: p.index("orderId"),
      deliveredByIndex: p.index("deliveredBy"),
      bridgeIdIndex: p.index("bridgeId"),
    }
  ),
}));
