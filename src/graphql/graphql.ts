import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateDebtInput = {
  createdById: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  totalAmount: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDebt: Scalars['String']['output'];
  deleteDebt: Scalars['Boolean']['output'];
  markDebtAsPaid: Scalars['String']['output'];
  updateDebt: Scalars['String']['output'];
};


export type MutationCreateDebtArgs = {
  input: CreateDebtInput;
};


export type MutationDeleteDebtArgs = {
  debtId: Scalars['String']['input'];
};


export type MutationMarkDebtAsPaidArgs = {
  debtId: Scalars['String']['input'];
};


export type MutationUpdateDebtArgs = {
  debtId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  totalAmount?: InputMaybe<Scalars['Float']['input']>;
};

export type Query = {
  __typename?: 'Query';
  debtSummaryByUser: Scalars['String']['output'];
  getDebtById: Scalars['String']['output'];
  health: Scalars['String']['output'];
  listDebtsByUser: Array<Scalars['String']['output']>;
};


export type QueryDebtSummaryByUserArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetDebtByIdArgs = {
  debtId: Scalars['String']['input'];
};


export type QueryListDebtsByUserArgs = {
  userId: Scalars['String']['input'];
};

export type CreateDebtMutationVariables = Exact<{
  input: CreateDebtInput;
}>;


export type CreateDebtMutation = { __typename?: 'Mutation', createDebt: string };


export const CreateDebtDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDebt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateDebtInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDebt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateDebtMutation, CreateDebtMutationVariables>;