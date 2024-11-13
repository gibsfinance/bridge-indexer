import {
  onchainEnum,
  onchainTable,
  primaryKey,
  relations,
  sql,
} from '@ponder/core'

export const Block = onchainTable('Block', (t) => ({
  blockId: t.hex().primaryKey(),
  chainId: t.numeric().notNull(),
  hash: t.hex().notNull(),
  number: t.bigint().notNull(),
  timestamp: t.bigint().notNull(),
  baseFeePerGas: t.bigint(),
}))

export const Transaction = onchainTable('Transaction', (t) => ({
  transactionId: t.hex().primaryKey(),
  blockId: t.hex().notNull(),
  hash: t.hex().notNull(),
  index: t.numeric().notNull(),
  from: t.hex().notNull(),
  to: t.hex().notNull(),
  value: t.bigint().notNull(),
}))

export const ValidatorStatus = onchainTable(
  'ValidatorStatus',
  (t) => ({
    validatorId: t.hex().notNull(),
    orderId: t.bigint().notNull(),
    transactionId: t.hex().notNull(),
    address: t.hex().notNull(),
    bridgeId: t.hex().notNull(),
    active: t.boolean().notNull(),
    logIndex: t.smallint().notNull(),
  }),
  (t) => ({
    pk: primaryKey({ columns: [t.validatorId, t.orderId] }),
  }),
)

export const Direction = onchainEnum('Direction', ['home', 'foreign'])

export const Provider = onchainEnum('Provider', ['pulsechain', 'tokensex'])

export const Bridge = onchainTable('Bridge', (t) => ({
  bridgeId: t.hex().primaryKey(),
  chainId: t.numeric().notNull(),
  address: t.hex().notNull(),
  provider: Provider().notNull(),
  side: Direction().notNull(),
}))

export const RequiredSignatureChange = onchainTable(
  'RequiredSignatureChange',
  (t) => ({
    id: t.hex().primaryKey(),
    bridgeId: t.hex().notNull(),
    orderId: t.bigint().notNull(),
    requiredSignatures: t.smallint().notNull(),
    transactionId: t.hex().notNull(),
    logIndex: t.smallint().notNull(),
  }),
)

// user initated going from foreign chain to home chain
export const UserRequestForAffirmation = onchainTable(
  'UserRequestForAffirmation',
  (t) => ({
    blockId: t.hex().notNull(),
    transactionId: t.hex().notNull(),
    // should be unique to each bridge across all chains
    messageHash: t.hex().notNull().primaryKey(),
    from: t.hex().notNull(),
    to: t.hex().notNull(),
    amount: t.bigint().notNull(),
    messageId: t.hex().notNull(),
    encodedData: t.hex().notNull(),
    encounteredSignatures: t.smallint().notNull(),
    requiredSignatures: t.smallint().notNull(),
    logIndex: t.smallint().notNull(),
  }),
)
// user initated going from home chain to foreign chain
export const UserRequestForSignature = onchainTable(
  'UserRequestForSignature',
  (t) => ({
    // references the block and transaction that the request was made in
    blockId: t.hex().notNull(),
    transactionId: t.hex().notNull(),
    // should be unique to each bridge across all chains
    messageHash: t.hex().notNull().primaryKey(),
    from: t.hex().notNull(),
    to: t.hex().notNull(),
    amount: t.bigint().notNull(),
    messageId: t.hex().notNull(),
    encodedData: t.hex().notNull(),
    encounteredSignatures: t.smallint().notNull(),
    requiredSignatures: t.smallint().notNull(),
    logIndex: t.smallint().notNull(),
  }),
)

// validator initiated going from foreign chain to home chain
export const SignedForAffirmation = onchainTable(
  'SignedForAffirmation',
  (t) => ({
    // references the block and transaction that the request was made in
    blockId: t.hex().notNull(),
    transactionId: t.hex().notNull(),
    messageHash: t.hex().notNull(),
    // should be unique to each bridge across all chains
    id: t.hex().primaryKey(), // message hash + validator address
    validatorId: t.hex().notNull(),
    logIndex: t.smallint().notNull(),
  }),
)

// validator initiated going from home to foreign chain
export const SignedForUserRequest = onchainTable(
  'SignedForUserRequest',
  (t) => ({
    // references the block and transaction that the request was made in
    blockId: t.hex().notNull(),
    transactionId: t.hex().notNull(),
    messageHash: t.hex().notNull(),
    // should be unique to each bridge across all chains
    id: t.hex().primaryKey(), // message hash + validator address
    validatorId: t.hex().notNull(),
    logIndex: t.smallint().notNull(),
  }),
)

export const RelayMessage = onchainTable('RelayMessage', (t) => ({
  messageHash: t.hex().primaryKey(),
  transactionId: t.hex().notNull(),
  // the address that delivered the tokens
  deliverer: t.hex().notNull(),
  logIndex: t.smallint().notNull(),
}))

export const AffirmationComplete = onchainTable('AffirmationComplete', (t) => ({
  messageHash: t.hex().primaryKey(),
  transactionId: t.hex().notNull(),
  // the address that delivered the tokens - in this case, the final signer
  deliverer: t.hex().notNull(),
  logIndex: t.smallint().notNull(),
}))

export const RequiredSignatureChangeRelations = relations(
  RequiredSignatureChange,
  (t) => ({
    transaction: t.one(Transaction, {
      fields: [RequiredSignatureChange.transactionId],
      references: [Transaction.transactionId],
    }),
  }),
)

export const UserRequestForAffirmationRelations = relations(
  UserRequestForAffirmation,
  (t) => ({
    block: t.one(Block, {
      fields: [UserRequestForAffirmation.blockId],
      references: [Block.blockId],
    }),
    transaction: t.one(Transaction, {
      fields: [UserRequestForAffirmation.transactionId],
      references: [Transaction.transactionId],
    }),
    signatures: t.many(SignedForAffirmation),
    // should happen automatically at the final signature encouter
    delivery: t.one(AffirmationComplete, {
      fields: [UserRequestForAffirmation.messageHash],
      references: [AffirmationComplete.messageHash],
    }),
  }),
)

export const UserRequestForSignatureRelations = relations(
  UserRequestForSignature,
  (t) => ({
    block: t.one(Block, {
      fields: [UserRequestForSignature.blockId],
      references: [Block.blockId],
    }),
    transaction: t.one(Transaction, {
      fields: [UserRequestForSignature.transactionId],
      references: [Transaction.transactionId],
    }),
    signatures: t.many(SignedForUserRequest),
    delivery: t.one(RelayMessage, {
      fields: [UserRequestForSignature.messageHash],
      references: [RelayMessage.messageHash],
    }),
  }),
)

export const SignedForUserRequestRelations = relations(
  SignedForUserRequest,
  (t) => ({
    transaction: t.one(Transaction, {
      fields: [SignedForUserRequest.transactionId],
      references: [Transaction.transactionId],
    }),
    userRequest: t.one(UserRequestForSignature, {
      fields: [SignedForUserRequest.messageHash],
      references: [UserRequestForSignature.messageHash],
    }),
  }),
)

export const SignedForAffirmationRelations = relations(
  SignedForAffirmation,
  (t) => ({
    transaction: t.one(Transaction, {
      fields: [SignedForAffirmation.transactionId],
      references: [Transaction.transactionId],
    }),
    userRequest: t.one(UserRequestForAffirmation, {
      fields: [SignedForAffirmation.messageHash],
      references: [UserRequestForAffirmation.messageHash],
    }),
  }),
)

export const RelayMessageRelations = relations(RelayMessage, (t) => ({
  transaction: t.one(Transaction, {
    fields: [RelayMessage.transactionId],
    references: [Transaction.transactionId],
  }),
  userRequest: t.one(UserRequestForSignature, {
    fields: [RelayMessage.messageHash],
    references: [UserRequestForSignature.messageHash],
  }),
  signature: t.many(SignedForUserRequest),
}))

export const AffirmationCompleteRelations = relations(
  AffirmationComplete,
  (t) => ({
    transaction: t.one(Transaction, {
      fields: [AffirmationComplete.transactionId],
      references: [Transaction.transactionId],
    }),
    userRequest: t.one(UserRequestForAffirmation, {
      fields: [AffirmationComplete.messageHash],
      references: [UserRequestForAffirmation.messageHash],
    }),
    signature: t.many(SignedForAffirmation),
  }),
)

export const ValidatorStatusRelations = relations(ValidatorStatus, (t) => ({
  bridge: t.one(Bridge, {
    fields: [ValidatorStatus.bridgeId],
    references: [Bridge.bridgeId],
  }),
  transaction: t.one(Transaction, {
    fields: [ValidatorStatus.transactionId],
    references: [Transaction.transactionId],
  }),
}))
