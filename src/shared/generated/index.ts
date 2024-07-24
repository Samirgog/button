import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type TAddCompletedTasksToTaskInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['Int']['input']>;
};

export type TAddCompletedTasksToUserInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['Int']['input']>;
};

export type TAddCreatedTasksToUserInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['Int']['input']>;
};

export type TAddReferralsToUserInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['Int']['input']>;
};

export type TAuthInput = {
  /** Данные инициализации от Телеграма */
  initData: Scalars['String']['input'];
  /** ID пригласившего пользователя */
  referralParentId?: InputMaybe<Scalars['Float']['input']>;
};

export type TBooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Выполненные задания */
export type TCompletedTask = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  /** Задание */
  task?: Maybe<TTask>;
  /** ID задания */
  taskId?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  /** Пользователь */
  user?: Maybe<TUser>;
  /** ID пользователя */
  userId?: Maybe<Scalars['Float']['output']>;
};

export type TCompletedTaskConnection = {
  /** Array of nodes. */
  nodes: Array<TCompletedTask>;
  /** Paging information */
  pageInfo: TOffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type TCompletedTaskDeleteFilter = {
  and?: InputMaybe<Array<TCompletedTaskDeleteFilter>>;
  id?: InputMaybe<TIntFieldComparison>;
  or?: InputMaybe<Array<TCompletedTaskDeleteFilter>>;
  taskId?: InputMaybe<TNumberFieldComparison>;
  userId?: InputMaybe<TNumberFieldComparison>;
};

export type TCompletedTaskDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** ID задания */
  taskId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** ID пользователя */
  userId?: Maybe<Scalars['Float']['output']>;
};

export type TCompletedTaskEntity = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  task: TTaskEntity;
  taskId?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: TUserEntity;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type TCompletedTaskFilter = {
  and?: InputMaybe<Array<TCompletedTaskFilter>>;
  id?: InputMaybe<TIntFieldComparison>;
  or?: InputMaybe<Array<TCompletedTaskFilter>>;
  task?: InputMaybe<TCompletedTaskFilterTaskFilter>;
  taskId?: InputMaybe<TNumberFieldComparison>;
  user?: InputMaybe<TCompletedTaskFilterUserFilter>;
  userId?: InputMaybe<TNumberFieldComparison>;
};

export type TCompletedTaskFilterTaskFilter = {
  and?: InputMaybe<Array<TCompletedTaskFilterTaskFilter>>;
  creatorId?: InputMaybe<TNumberFieldComparison>;
  disabled?: InputMaybe<TBooleanFieldComparison>;
  id?: InputMaybe<TIntFieldComparison>;
  name?: InputMaybe<TStringFieldComparison>;
  or?: InputMaybe<Array<TCompletedTaskFilterTaskFilter>>;
  remaining?: InputMaybe<TNumberFieldComparison>;
  reward?: InputMaybe<TStringFieldComparison>;
  total?: InputMaybe<TNumberFieldComparison>;
  type?: InputMaybe<TStringFieldComparison>;
  url?: InputMaybe<TStringFieldComparison>;
};

export type TCompletedTaskFilterUserFilter = {
  and?: InputMaybe<Array<TCompletedTaskFilterUserFilter>>;
  balance?: InputMaybe<TNumberFieldComparison>;
  earned?: InputMaybe<TNumberFieldComparison>;
  email?: InputMaybe<TStringFieldComparison>;
  id?: InputMaybe<TIntFieldComparison>;
  name?: InputMaybe<TStringFieldComparison>;
  or?: InputMaybe<Array<TCompletedTaskFilterUserFilter>>;
  referralParentId?: InputMaybe<TNumberFieldComparison>;
  role?: InputMaybe<TStringFieldComparison>;
  telegramId?: InputMaybe<TNumberFieldComparison>;
  username?: InputMaybe<TStringFieldComparison>;
};

export type TCompletedTaskSort = {
  direction: TSortDirection;
  field: TCompletedTaskSortFields;
  nulls?: InputMaybe<TSortNulls>;
};

export enum TCompletedTaskSortFields {
  Id = 'id',
  TaskId = 'taskId',
  UserId = 'userId'
}

export type TCompletedTaskUpdateFilter = {
  and?: InputMaybe<Array<TCompletedTaskUpdateFilter>>;
  id?: InputMaybe<TIntFieldComparison>;
  or?: InputMaybe<Array<TCompletedTaskUpdateFilter>>;
  taskId?: InputMaybe<TNumberFieldComparison>;
  userId?: InputMaybe<TNumberFieldComparison>;
};

export type TCreateCompletedTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** ID задания */
  taskId: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** ID пользователя */
  userId: Scalars['Float']['input'];
};

export type TCreateManyCompletedTasksInput = {
  /** Array of records to create */
  completedTasks: Array<TCreateCompletedTaskInput>;
};

export type TCreateManyTasksInput = {
  /** Array of records to create */
  tasks: Array<TCreateTaskInput>;
};

export type TCreateManyUsersInput = {
  /** Array of records to create */
  users: Array<TCreateUserInput>;
};

export type TCreateOneCompletedTaskInput = {
  /** The record to create */
  completedTask: TCreateCompletedTaskInput;
};

export type TCreateOneTaskInput = {
  /** The record to create */
  task: TCreateTaskInput;
};

export type TCreateOneUserInput = {
  /** The record to create */
  user: TCreateUserInput;
};

export type TCreateTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** ID создателя задания */
  creatorId: Scalars['Float']['input'];
  /** Флаг активности */
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Название */
  name: Scalars['String']['input'];
  /** Оставшееся количество */
  remaining?: InputMaybe<Scalars['Float']['input']>;
  /** Вознаграждение */
  reward: Scalars['Float']['input'];
  /** Общее количество */
  total: Scalars['Float']['input'];
  /** Тип задания */
  type: TTaskTypesEnum;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Ссылка на задание */
  url: Scalars['String']['input'];
};

export type TCreateUserInput = {
  /** Баланс */
  balance?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** ID созданных заданий */
  createdTasks?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Заработано за все время */
  earned?: InputMaybe<Scalars['Float']['input']>;
  /** Эл. почта пользователя */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Имя пользователя */
  name: Scalars['String']['input'];
  /** ID пригласившего пользователя */
  referralParentId?: InputMaybe<Scalars['Float']['input']>;
  /** Роль пользователя */
  role?: InputMaybe<TRolesEnum>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Никнейм пользователя в телеграме */
  username?: InputMaybe<Scalars['String']['input']>;
};

export type TDeleteManyCompletedTasksInput = {
  /** Filter to find records to delete */
  filter: TCompletedTaskDeleteFilter;
};

export type TDeleteManyResponse = {
  /** The number of records deleted. */
  deletedCount: Scalars['Int']['output'];
};

export type TDeleteManyTasksInput = {
  /** Filter to find records to delete */
  filter: TTaskDeleteFilter;
};

export type TDeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: TUserDeleteFilter;
};

export type TDeleteOneCompletedTaskInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type TDeleteOneTaskInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type TDeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['Int']['input'];
};

export type TIntFieldComparison = {
  between?: InputMaybe<TIntFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  notBetween?: InputMaybe<TIntFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type TIntFieldComparisonBetween = {
  lower: Scalars['Int']['input'];
  upper: Scalars['Int']['input'];
};

export type TLoginAdminInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type TLoginResponse = {
  access_token: Scalars['String']['output'];
};

export type TMutation = {
  activateTask: TTask;
  addCompletedTasksToTask: TTask;
  addCompletedTasksToUser: TUser;
  addCreatedTasksToUser: TUser;
  addReferralsToUser: TUser;
  auth: TUser;
  completeTask: TTask;
  createManyCompletedTasks: Array<TCompletedTask>;
  createManyTasks: Array<TTask>;
  createManyUsers: Array<TUser>;
  createOneCompletedTask: TCompletedTask;
  createOneTask: TTask;
  createOneUser: TUser;
  createTask: TTask;
  deleteManyCompletedTasks: TDeleteManyResponse;
  deleteManyTasks: TDeleteManyResponse;
  deleteManyUsers: TDeleteManyResponse;
  deleteOneCompletedTask: TCompletedTaskDeleteResponse;
  deleteOneTask: TTaskDeleteResponse;
  deleteOneUser: TUserDeleteResponse;
  loginAdmin: TLoginResponse;
  removeCompletedTasksFromTask: TTask;
  removeCompletedTasksFromUser: TUser;
  removeCreatedTasksFromUser: TUser;
  removeCreatorFromTask: TTask;
  removeReferralParentFromUser: TUser;
  removeReferralsFromUser: TUser;
  removeTaskFromCompletedTask: TCompletedTask;
  removeUserFromCompletedTask: TCompletedTask;
  setCompletedTasksOnTask: TTask;
  setCompletedTasksOnUser: TUser;
  setCreatedTasksOnUser: TUser;
  setCreatorOnTask: TTask;
  setReferralParentOnUser: TUser;
  setReferralsOnUser: TUser;
  setTaskOnCompletedTask: TCompletedTask;
  setUserOnCompletedTask: TCompletedTask;
  updateManyCompletedTasks: TUpdateManyResponse;
  updateManyTasks: TUpdateManyResponse;
  updateManyUsers: TUpdateManyResponse;
  updateOneCompletedTask: TCompletedTask;
  updateOneTask: TTask;
  updateOneUser: TUser;
};


export type TMutationActivateTaskArgs = {
  id: Scalars['Int']['input'];
};


export type TMutationAddCompletedTasksToTaskArgs = {
  input: TAddCompletedTasksToTaskInput;
};


export type TMutationAddCompletedTasksToUserArgs = {
  input: TAddCompletedTasksToUserInput;
};


export type TMutationAddCreatedTasksToUserArgs = {
  input: TAddCreatedTasksToUserInput;
};


export type TMutationAddReferralsToUserArgs = {
  input: TAddReferralsToUserInput;
};


export type TMutationAuthArgs = {
  input: TAuthInput;
};


export type TMutationCompleteTaskArgs = {
  id: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type TMutationCreateManyCompletedTasksArgs = {
  input: TCreateManyCompletedTasksInput;
};


export type TMutationCreateManyTasksArgs = {
  input: TCreateManyTasksInput;
};


export type TMutationCreateManyUsersArgs = {
  input: TCreateManyUsersInput;
};


export type TMutationCreateOneCompletedTaskArgs = {
  input: TCreateOneCompletedTaskInput;
};


export type TMutationCreateOneTaskArgs = {
  input: TCreateOneTaskInput;
};


export type TMutationCreateOneUserArgs = {
  input: TCreateOneUserInput;
};


export type TMutationCreateTaskArgs = {
  input: TCreateTaskInput;
};


export type TMutationDeleteManyCompletedTasksArgs = {
  input: TDeleteManyCompletedTasksInput;
};


export type TMutationDeleteManyTasksArgs = {
  input: TDeleteManyTasksInput;
};


export type TMutationDeleteManyUsersArgs = {
  input: TDeleteManyUsersInput;
};


export type TMutationDeleteOneCompletedTaskArgs = {
  input: TDeleteOneCompletedTaskInput;
};


export type TMutationDeleteOneTaskArgs = {
  input: TDeleteOneTaskInput;
};


export type TMutationDeleteOneUserArgs = {
  input: TDeleteOneUserInput;
};


export type TMutationLoginAdminArgs = {
  input: TLoginAdminInput;
};


export type TMutationRemoveCompletedTasksFromTaskArgs = {
  input: TRemoveCompletedTasksFromTaskInput;
};


export type TMutationRemoveCompletedTasksFromUserArgs = {
  input: TRemoveCompletedTasksFromUserInput;
};


export type TMutationRemoveCreatedTasksFromUserArgs = {
  input: TRemoveCreatedTasksFromUserInput;
};


export type TMutationRemoveCreatorFromTaskArgs = {
  input: TRemoveCreatorFromTaskInput;
};


export type TMutationRemoveReferralParentFromUserArgs = {
  input: TRemoveReferralParentFromUserInput;
};


export type TMutationRemoveReferralsFromUserArgs = {
  input: TRemoveReferralsFromUserInput;
};


export type TMutationRemoveTaskFromCompletedTaskArgs = {
  input: TRemoveTaskFromCompletedTaskInput;
};


export type TMutationRemoveUserFromCompletedTaskArgs = {
  input: TRemoveUserFromCompletedTaskInput;
};


export type TMutationSetCompletedTasksOnTaskArgs = {
  input: TSetCompletedTasksOnTaskInput;
};


export type TMutationSetCompletedTasksOnUserArgs = {
  input: TSetCompletedTasksOnUserInput;
};


export type TMutationSetCreatedTasksOnUserArgs = {
  input: TSetCreatedTasksOnUserInput;
};


export type TMutationSetCreatorOnTaskArgs = {
  input: TSetCreatorOnTaskInput;
};


export type TMutationSetReferralParentOnUserArgs = {
  input: TSetReferralParentOnUserInput;
};


export type TMutationSetReferralsOnUserArgs = {
  input: TSetReferralsOnUserInput;
};


export type TMutationSetTaskOnCompletedTaskArgs = {
  input: TSetTaskOnCompletedTaskInput;
};


export type TMutationSetUserOnCompletedTaskArgs = {
  input: TSetUserOnCompletedTaskInput;
};


export type TMutationUpdateManyCompletedTasksArgs = {
  input: TUpdateManyCompletedTasksInput;
};


export type TMutationUpdateManyTasksArgs = {
  input: TUpdateManyTasksInput;
};


export type TMutationUpdateManyUsersArgs = {
  input: TUpdateManyUsersInput;
};


export type TMutationUpdateOneCompletedTaskArgs = {
  input: TUpdateOneCompletedTaskInput;
};


export type TMutationUpdateOneTaskArgs = {
  input: TUpdateOneTaskInput;
};


export type TMutationUpdateOneUserArgs = {
  input: TUpdateOneUserInput;
};

export type TNumberFieldComparison = {
  between?: InputMaybe<TNumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  notBetween?: InputMaybe<TNumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type TNumberFieldComparisonBetween = {
  lower: Scalars['Float']['input'];
  upper: Scalars['Float']['input'];
};

export type TOffsetPageInfo = {
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
};

export type TOffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TQuery = {
  completedTask: TCompletedTask;
  completedTasks: TCompletedTaskConnection;
  getHello: TGetHello;
  incompleteTasks: Array<TTask>;
  me: TUser;
  task: TTask;
  tasks: TTaskConnection;
  user: TUser;
  users: TUserConnection;
};


export type TQueryCompletedTaskArgs = {
  id: Scalars['Int']['input'];
};


export type TQueryCompletedTasksArgs = {
  filter?: TCompletedTaskFilter;
  paging?: TOffsetPaging;
  sorting?: Array<TCompletedTaskSort>;
};


export type TQueryIncompleteTasksArgs = {
  userId: Scalars['Int']['input'];
};


export type TQueryTaskArgs = {
  id: Scalars['Int']['input'];
};


export type TQueryTasksArgs = {
  filter?: TTaskFilter;
  paging?: TOffsetPaging;
  sorting?: Array<TTaskSort>;
};


export type TQueryUserArgs = {
  id: Scalars['Int']['input'];
};


export type TQueryUsersArgs = {
  filter?: TUserFilter;
  paging?: TOffsetPaging;
  sorting?: Array<TUserSort>;
};

export type TRemoveCompletedTasksFromTaskInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['Int']['input']>;
};

export type TRemoveCompletedTasksFromUserInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['Int']['input']>;
};

export type TRemoveCreatedTasksFromUserInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['Int']['input']>;
};

export type TRemoveCreatorFromTaskInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The id of relation. */
  relationId: Scalars['Int']['input'];
};

export type TRemoveReferralParentFromUserInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The id of relation. */
  relationId: Scalars['Int']['input'];
};

export type TRemoveReferralsFromUserInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['Int']['input']>;
};

export type TRemoveTaskFromCompletedTaskInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The id of relation. */
  relationId: Scalars['Int']['input'];
};

export type TRemoveUserFromCompletedTaskInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The id of relation. */
  relationId: Scalars['Int']['input'];
};

export enum TRolesEnum {
  Admin = 'admin',
  User = 'user'
}

export type TSetCompletedTasksOnTaskInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['Int']['input']>;
};

export type TSetCompletedTasksOnUserInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['Int']['input']>;
};

export type TSetCreatedTasksOnUserInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['Int']['input']>;
};

export type TSetCreatorOnTaskInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The id of relation. */
  relationId: Scalars['Int']['input'];
};

export type TSetReferralParentOnUserInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The id of relation. */
  relationId: Scalars['Int']['input'];
};

export type TSetReferralsOnUserInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['Int']['input']>;
};

export type TSetTaskOnCompletedTaskInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The id of relation. */
  relationId: Scalars['Int']['input'];
};

export type TSetUserOnCompletedTaskInput = {
  /** The id of the record. */
  id: Scalars['Int']['input'];
  /** The id of relation. */
  relationId: Scalars['Int']['input'];
};

/** Sort Directions */
export enum TSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum TSortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type TStringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

/** Задания */
export type TTask = {
  /** Выполненные задания */
  completedTasks?: Maybe<Array<TCompletedTask>>;
  createdAt: Scalars['DateTime']['output'];
  /** Создатель задания */
  creator?: Maybe<TUser>;
  /** ID создателя задания */
  creatorId?: Maybe<Scalars['Float']['output']>;
  /** Флаг активности */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
  /** Название */
  name?: Maybe<Scalars['String']['output']>;
  /** Оставшееся количество */
  remaining?: Maybe<Scalars['Float']['output']>;
  /** Вознаграждение */
  reward?: Maybe<Scalars['String']['output']>;
  /** Общее количество */
  total?: Maybe<Scalars['Float']['output']>;
  /** Тип задания */
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  /** Ссылка на задание */
  url?: Maybe<Scalars['String']['output']>;
};


/** Задания */
export type TTaskCompletedTasksArgs = {
  filter?: TCompletedTaskFilter;
  sorting?: Array<TCompletedTaskSort>;
};

export type TTaskConnection = {
  /** Array of nodes. */
  nodes: Array<TTask>;
  /** Paging information */
  pageInfo: TOffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type TTaskDeleteFilter = {
  and?: InputMaybe<Array<TTaskDeleteFilter>>;
  creatorId?: InputMaybe<TNumberFieldComparison>;
  disabled?: InputMaybe<TBooleanFieldComparison>;
  id?: InputMaybe<TIntFieldComparison>;
  name?: InputMaybe<TStringFieldComparison>;
  or?: InputMaybe<Array<TTaskDeleteFilter>>;
  remaining?: InputMaybe<TNumberFieldComparison>;
  reward?: InputMaybe<TStringFieldComparison>;
  total?: InputMaybe<TNumberFieldComparison>;
  type?: InputMaybe<TStringFieldComparison>;
  url?: InputMaybe<TStringFieldComparison>;
};

export type TTaskDeleteResponse = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** ID создателя задания */
  creatorId?: Maybe<Scalars['Float']['output']>;
  /** Флаг активности */
  disabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Название */
  name?: Maybe<Scalars['String']['output']>;
  /** Оставшееся количество */
  remaining?: Maybe<Scalars['Float']['output']>;
  /** Вознаграждение */
  reward?: Maybe<Scalars['String']['output']>;
  /** Общее количество */
  total?: Maybe<Scalars['Float']['output']>;
  /** Тип задания */
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Ссылка на задание */
  url?: Maybe<Scalars['String']['output']>;
};

export type TTaskEntity = {
  completedTasks?: Maybe<Array<TCompletedTaskEntity>>;
  createdAt: Scalars['DateTime']['output'];
  creator?: Maybe<TUserEntity>;
  creatorId?: Maybe<Scalars['Float']['output']>;
  disabled: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  remaining?: Maybe<Scalars['Float']['output']>;
  reward?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type TTaskFilter = {
  and?: InputMaybe<Array<TTaskFilter>>;
  completedTasks?: InputMaybe<TTaskFilterCompletedTaskFilter>;
  creator?: InputMaybe<TTaskFilterUserFilter>;
  creatorId?: InputMaybe<TNumberFieldComparison>;
  disabled?: InputMaybe<TBooleanFieldComparison>;
  id?: InputMaybe<TIntFieldComparison>;
  name?: InputMaybe<TStringFieldComparison>;
  or?: InputMaybe<Array<TTaskFilter>>;
  remaining?: InputMaybe<TNumberFieldComparison>;
  reward?: InputMaybe<TStringFieldComparison>;
  total?: InputMaybe<TNumberFieldComparison>;
  type?: InputMaybe<TStringFieldComparison>;
  url?: InputMaybe<TStringFieldComparison>;
};

export type TTaskFilterCompletedTaskFilter = {
  and?: InputMaybe<Array<TTaskFilterCompletedTaskFilter>>;
  id?: InputMaybe<TIntFieldComparison>;
  or?: InputMaybe<Array<TTaskFilterCompletedTaskFilter>>;
  taskId?: InputMaybe<TNumberFieldComparison>;
  userId?: InputMaybe<TNumberFieldComparison>;
};

export type TTaskFilterUserFilter = {
  and?: InputMaybe<Array<TTaskFilterUserFilter>>;
  balance?: InputMaybe<TNumberFieldComparison>;
  earned?: InputMaybe<TNumberFieldComparison>;
  email?: InputMaybe<TStringFieldComparison>;
  id?: InputMaybe<TIntFieldComparison>;
  name?: InputMaybe<TStringFieldComparison>;
  or?: InputMaybe<Array<TTaskFilterUserFilter>>;
  referralParentId?: InputMaybe<TNumberFieldComparison>;
  role?: InputMaybe<TStringFieldComparison>;
  telegramId?: InputMaybe<TNumberFieldComparison>;
  username?: InputMaybe<TStringFieldComparison>;
};

export type TTaskSort = {
  direction: TSortDirection;
  field: TTaskSortFields;
  nulls?: InputMaybe<TSortNulls>;
};

export enum TTaskSortFields {
  CreatorId = 'creatorId',
  Disabled = 'disabled',
  Id = 'id',
  Name = 'name',
  Remaining = 'remaining',
  Reward = 'reward',
  Total = 'total',
  Type = 'type',
  Url = 'url'
}

export enum TTaskTypesEnum {
  Join = 'join',
  Subscribe = 'subscribe',
  Video = 'video'
}

export type TTaskUpdateFilter = {
  and?: InputMaybe<Array<TTaskUpdateFilter>>;
  creatorId?: InputMaybe<TNumberFieldComparison>;
  disabled?: InputMaybe<TBooleanFieldComparison>;
  id?: InputMaybe<TIntFieldComparison>;
  name?: InputMaybe<TStringFieldComparison>;
  or?: InputMaybe<Array<TTaskUpdateFilter>>;
  remaining?: InputMaybe<TNumberFieldComparison>;
  reward?: InputMaybe<TStringFieldComparison>;
  total?: InputMaybe<TNumberFieldComparison>;
  type?: InputMaybe<TStringFieldComparison>;
  url?: InputMaybe<TStringFieldComparison>;
};

export type TUpdateCompletedTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** ID задания */
  taskId?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** ID пользователя */
  userId?: InputMaybe<Scalars['Float']['input']>;
};

export type TUpdateManyCompletedTasksInput = {
  /** Filter used to find fields to update */
  filter: TCompletedTaskUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: TUpdateCompletedTaskInput;
};

export type TUpdateManyResponse = {
  /** The number of records updated. */
  updatedCount: Scalars['Int']['output'];
};

export type TUpdateManyTasksInput = {
  /** Filter used to find fields to update */
  filter: TTaskUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: TUpdateTaskInput;
};

export type TUpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: TUserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: TUpdateUserInput;
};

export type TUpdateOneCompletedTaskInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: TUpdateCompletedTaskInput;
};

export type TUpdateOneTaskInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: TUpdateTaskInput;
};

export type TUpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['Int']['input'];
  /** The update to apply. */
  update: TUpdateUserInput;
};

export type TUpdateTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** ID создателя задания */
  creatorId?: InputMaybe<Scalars['Float']['input']>;
  /** Флаг активности */
  disabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Название */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Оставшееся количество */
  remaining?: InputMaybe<Scalars['Float']['input']>;
  /** Вознаграждение */
  reward?: InputMaybe<Scalars['Float']['input']>;
  /** Общее количество */
  total?: InputMaybe<Scalars['Float']['input']>;
  /** Тип задания */
  type?: InputMaybe<TTaskTypesEnum>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Ссылка на задание */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TUpdateUserInput = {
  /** Баланс */
  balance?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** ID созданных заданий */
  createdTasks?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Заработано за все время */
  earned?: InputMaybe<Scalars['Float']['input']>;
  /** Эл. почта пользователя */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Имя пользователя */
  name?: InputMaybe<Scalars['String']['input']>;
  /** ID пригласившего пользователя */
  referralParentId?: InputMaybe<Scalars['Float']['input']>;
  /** Роль пользователя */
  role?: InputMaybe<TRolesEnum>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Никнейм пользователя в телеграме */
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Пользователь */
export type TUser = {
  /** Баланс */
  balance?: Maybe<Scalars['Float']['output']>;
  /** Выполненные задания */
  completedTasks?: Maybe<Array<TCompletedTask>>;
  createdAt: Scalars['DateTime']['output'];
  /** Созданные задания */
  createdTasks?: Maybe<Array<TTask>>;
  /** Заработано за все время */
  earned?: Maybe<Scalars['Float']['output']>;
  /** Эл. почта пользователя */
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  /** Имя пользователя */
  name?: Maybe<Scalars['String']['output']>;
  /** Пригласивший пользователь */
  referralParent?: Maybe<TUser>;
  /** ID пригласившего пользователя */
  referralParentId?: Maybe<Scalars['Float']['output']>;
  /** Приглашенные пользователи */
  referrals?: Maybe<Array<TUser>>;
  /** Роль пользователя */
  role: Scalars['String']['output'];
  /** ID Телеграма */
  telegramId?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  /** Никнейм пользователя в телеграме */
  username?: Maybe<Scalars['String']['output']>;
};


/** Пользователь */
export type TUserCompletedTasksArgs = {
  filter?: TCompletedTaskFilter;
  sorting?: Array<TCompletedTaskSort>;
};


/** Пользователь */
export type TUserCreatedTasksArgs = {
  filter?: TTaskFilter;
  sorting?: Array<TTaskSort>;
};


/** Пользователь */
export type TUserReferralsArgs = {
  filter?: TUserFilter;
  sorting?: Array<TUserSort>;
};

export type TUserConnection = {
  /** Array of nodes. */
  nodes: Array<TUser>;
  /** Paging information */
  pageInfo: TOffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type TUserDeleteFilter = {
  and?: InputMaybe<Array<TUserDeleteFilter>>;
  balance?: InputMaybe<TNumberFieldComparison>;
  earned?: InputMaybe<TNumberFieldComparison>;
  email?: InputMaybe<TStringFieldComparison>;
  id?: InputMaybe<TIntFieldComparison>;
  name?: InputMaybe<TStringFieldComparison>;
  or?: InputMaybe<Array<TUserDeleteFilter>>;
  referralParentId?: InputMaybe<TNumberFieldComparison>;
  role?: InputMaybe<TStringFieldComparison>;
  telegramId?: InputMaybe<TNumberFieldComparison>;
  username?: InputMaybe<TStringFieldComparison>;
};

export type TUserDeleteResponse = {
  /** Баланс */
  balance?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Заработано за все время */
  earned?: Maybe<Scalars['Float']['output']>;
  /** Эл. почта пользователя */
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Имя пользователя */
  name?: Maybe<Scalars['String']['output']>;
  /** ID пригласившего пользователя */
  referralParentId?: Maybe<Scalars['Float']['output']>;
  /** Роль пользователя */
  role?: Maybe<Scalars['String']['output']>;
  /** ID Телеграма */
  telegramId?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Никнейм пользователя в телеграме */
  username?: Maybe<Scalars['String']['output']>;
};

export type TUserEntity = {
  balance?: Maybe<Scalars['Float']['output']>;
  completedTasks?: Maybe<Array<TCompletedTaskEntity>>;
  createdAt: Scalars['DateTime']['output'];
  createdTasks?: Maybe<Array<TTaskEntity>>;
  earned?: Maybe<Scalars['Float']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  referralParent?: Maybe<TUserEntity>;
  referralParentId?: Maybe<Scalars['Float']['output']>;
  referrals?: Maybe<Array<TUserEntity>>;
  role: Scalars['String']['output'];
  telegramId?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type TUserFilter = {
  and?: InputMaybe<Array<TUserFilter>>;
  balance?: InputMaybe<TNumberFieldComparison>;
  completedTasks?: InputMaybe<TUserFilterCompletedTaskFilter>;
  createdTasks?: InputMaybe<TUserFilterTaskFilter>;
  earned?: InputMaybe<TNumberFieldComparison>;
  email?: InputMaybe<TStringFieldComparison>;
  id?: InputMaybe<TIntFieldComparison>;
  name?: InputMaybe<TStringFieldComparison>;
  or?: InputMaybe<Array<TUserFilter>>;
  referralParent?: InputMaybe<TUserFilterUserFilter>;
  referralParentId?: InputMaybe<TNumberFieldComparison>;
  referrals?: InputMaybe<TUserFilterUserFilter>;
  role?: InputMaybe<TStringFieldComparison>;
  telegramId?: InputMaybe<TNumberFieldComparison>;
  username?: InputMaybe<TStringFieldComparison>;
};

export type TUserFilterCompletedTaskFilter = {
  and?: InputMaybe<Array<TUserFilterCompletedTaskFilter>>;
  id?: InputMaybe<TIntFieldComparison>;
  or?: InputMaybe<Array<TUserFilterCompletedTaskFilter>>;
  taskId?: InputMaybe<TNumberFieldComparison>;
  userId?: InputMaybe<TNumberFieldComparison>;
};

export type TUserFilterTaskFilter = {
  and?: InputMaybe<Array<TUserFilterTaskFilter>>;
  creatorId?: InputMaybe<TNumberFieldComparison>;
  disabled?: InputMaybe<TBooleanFieldComparison>;
  id?: InputMaybe<TIntFieldComparison>;
  name?: InputMaybe<TStringFieldComparison>;
  or?: InputMaybe<Array<TUserFilterTaskFilter>>;
  remaining?: InputMaybe<TNumberFieldComparison>;
  reward?: InputMaybe<TStringFieldComparison>;
  total?: InputMaybe<TNumberFieldComparison>;
  type?: InputMaybe<TStringFieldComparison>;
  url?: InputMaybe<TStringFieldComparison>;
};

export type TUserFilterUserFilter = {
  and?: InputMaybe<Array<TUserFilterUserFilter>>;
  balance?: InputMaybe<TNumberFieldComparison>;
  earned?: InputMaybe<TNumberFieldComparison>;
  email?: InputMaybe<TStringFieldComparison>;
  id?: InputMaybe<TIntFieldComparison>;
  name?: InputMaybe<TStringFieldComparison>;
  or?: InputMaybe<Array<TUserFilterUserFilter>>;
  referralParentId?: InputMaybe<TNumberFieldComparison>;
  role?: InputMaybe<TStringFieldComparison>;
  telegramId?: InputMaybe<TNumberFieldComparison>;
  username?: InputMaybe<TStringFieldComparison>;
};

export type TUserSort = {
  direction: TSortDirection;
  field: TUserSortFields;
  nulls?: InputMaybe<TSortNulls>;
};

export enum TUserSortFields {
  Balance = 'balance',
  Earned = 'earned',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  ReferralParentId = 'referralParentId',
  Role = 'role',
  TelegramId = 'telegramId',
  Username = 'username'
}

export type TUserUpdateFilter = {
  and?: InputMaybe<Array<TUserUpdateFilter>>;
  balance?: InputMaybe<TNumberFieldComparison>;
  earned?: InputMaybe<TNumberFieldComparison>;
  email?: InputMaybe<TStringFieldComparison>;
  id?: InputMaybe<TIntFieldComparison>;
  name?: InputMaybe<TStringFieldComparison>;
  or?: InputMaybe<Array<TUserUpdateFilter>>;
  referralParentId?: InputMaybe<TNumberFieldComparison>;
  role?: InputMaybe<TStringFieldComparison>;
  telegramId?: InputMaybe<TNumberFieldComparison>;
  username?: InputMaybe<TStringFieldComparison>;
};

/** Базовый тестовый запрос */
export type TGetHello = {
  /** Offset текущей timezone */
  offset: Scalars['Int']['output'];
  /** Статус backend (при успешном запросе отдаст - online) */
  status: Scalars['String']['output'];
  /** Timezone в настройках backend */
  tz: Scalars['String']['output'];
};


export const UserFieldsFragmentDoc = /*#__PURE__*/ `
    fragment userFields on User {
  id
  name
  earned
  balance
  completedTasks {
    id
    taskId
  }
  referrals {
    id
    name
  }
}
    `;
export const TasksDocument = /*#__PURE__*/ `
    query Tasks($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!) {
  tasks(paging: $paging, filter: $filter, sorting: $sorting) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
    nodes {
      id
      name
      remaining
      reward
      total
      type
      url
    }
  }
}
    `;

export const useTasksQuery = <
      TData = TTasksQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: TTasksQueryVariables,
      options?: UseQueryOptions<TTasksQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<TTasksQuery, TError, TData>(
      ['Tasks', variables],
      fetcher<TTasksQuery, TTasksQueryVariables>(client, TasksDocument, variables, headers),
      options
    )};

useTasksQuery.getKey = (variables: TTasksQueryVariables) => ['Tasks', variables];


useTasksQuery.fetcher = (client: GraphQLClient, variables: TTasksQueryVariables, headers?: RequestInit['headers']) => fetcher<TTasksQuery, TTasksQueryVariables>(client, TasksDocument, variables, headers);

export const CompleteTaskDocument = /*#__PURE__*/ `
    mutation CompleteTask($completeTaskId: Int!, $userId: Int!) {
  completeTask(id: $completeTaskId, userId: $userId) {
    id
    remaining
    reward
  }
}
    `;

export const useCompleteTaskMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<TCompleteTaskMutation, TError, TCompleteTaskMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<TCompleteTaskMutation, TError, TCompleteTaskMutationVariables, TContext>(
      ['CompleteTask'],
      (variables?: TCompleteTaskMutationVariables) => fetcher<TCompleteTaskMutation, TCompleteTaskMutationVariables>(client, CompleteTaskDocument, variables, headers)(),
      options
    )};


useCompleteTaskMutation.fetcher = (client: GraphQLClient, variables: TCompleteTaskMutationVariables, headers?: RequestInit['headers']) => fetcher<TCompleteTaskMutation, TCompleteTaskMutationVariables>(client, CompleteTaskDocument, variables, headers);

export const AuthDocument = /*#__PURE__*/ `
    mutation Auth($input: AuthInput!) {
  auth(input: $input) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

export const useAuthMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<TAuthMutation, TError, TAuthMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {
    
    return useMutation<TAuthMutation, TError, TAuthMutationVariables, TContext>(
      ['Auth'],
      (variables?: TAuthMutationVariables) => fetcher<TAuthMutation, TAuthMutationVariables>(client, AuthDocument, variables, headers)(),
      options
    )};


useAuthMutation.fetcher = (client: GraphQLClient, variables: TAuthMutationVariables, headers?: RequestInit['headers']) => fetcher<TAuthMutation, TAuthMutationVariables>(client, AuthDocument, variables, headers);

export const UserDocument = /*#__PURE__*/ `
    query User($userId: Int!) {
  user(id: $userId) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

export const useUserQuery = <
      TData = TUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: TUserQueryVariables,
      options?: UseQueryOptions<TUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<TUserQuery, TError, TData>(
      ['User', variables],
      fetcher<TUserQuery, TUserQueryVariables>(client, UserDocument, variables, headers),
      options
    )};

useUserQuery.getKey = (variables: TUserQueryVariables) => ['User', variables];


useUserQuery.fetcher = (client: GraphQLClient, variables: TUserQueryVariables, headers?: RequestInit['headers']) => fetcher<TUserQuery, TUserQueryVariables>(client, UserDocument, variables, headers);

export type TTasksQueryVariables = Exact<{
  paging: TOffsetPaging;
  filter: TTaskFilter;
  sorting: Array<TTaskSort> | TTaskSort;
}>;


export type TTasksQuery = { tasks: { totalCount: number, pageInfo: { hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ id: number, name?: string | null, remaining?: number | null, reward?: string | null, total?: number | null, type?: string | null, url?: string | null }> } };

export type TCompleteTaskMutationVariables = Exact<{
  completeTaskId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
}>;


export type TCompleteTaskMutation = { completeTask: { id: number, remaining?: number | null, reward?: string | null } };

export type TUserFieldsFragment = { id: number, name?: string | null, earned?: number | null, balance?: number | null, completedTasks?: Array<{ id: number, taskId?: number | null }> | null, referrals?: Array<{ id: number, name?: string | null }> | null };

export type TAuthMutationVariables = Exact<{
  input: TAuthInput;
}>;


export type TAuthMutation = { auth: { id: number, name?: string | null, earned?: number | null, balance?: number | null, completedTasks?: Array<{ id: number, taskId?: number | null }> | null, referrals?: Array<{ id: number, name?: string | null }> | null } };

export type TUserQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type TUserQuery = { user: { id: number, name?: string | null, earned?: number | null, balance?: number | null, completedTasks?: Array<{ id: number, taskId?: number | null }> | null, referrals?: Array<{ id: number, name?: string | null }> | null } };
