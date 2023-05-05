import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  float8: any;
  geography: any;
  geometry: any;
  interval: any;
  json: any;
  jsonb: any;
  money: any;
  numeric: any;
  time: any;
  timestamp: any;
  timestamptz: any;
  timetz: any;
  uuid: any;
};

export type AbortMultipartUploadReturn = {
  __typename?: 'AbortMultipartUploadReturn';
  message: Scalars['String'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type CompleteMultipartUploadReturn = {
  __typename?: 'CompleteMultipartUploadReturn';
  location: Scalars['String'];
};

export type CreateMultipartUploadReturn = {
  __typename?: 'CreateMultipartUploadReturn';
  e?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  uploadId: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  id?: Maybe<Scalars['ID']>;
  numParts?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
};

export type GetUrlReturn = {
  __typename?: 'GetUrlReturn';
  url: Scalars['String'];
};

export type GetUrlsReturn = {
  __typename?: 'GetUrlsReturn';
  urls: Array<Maybe<Scalars['String']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type Part = {
  __typename?: 'Part';
  ETag?: Maybe<Scalars['String']>;
  PartNumber?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};

export type PartInput = {
  ETag?: InputMaybe<Scalars['String']>;
  PartNumber?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "test_01" */
export type Test01 = {
  __typename?: 'Test01';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  nama: Scalars['String'];
  updated_at: Scalars['timestamp'];
};

/** aggregated selection of "test_01" */
export type Test01_Aggregate = {
  __typename?: 'Test01_aggregate';
  aggregate?: Maybe<Test01_Aggregate_Fields>;
  nodes: Array<Test01>;
};

/** aggregate fields of "test_01" */
export type Test01_Aggregate_Fields = {
  __typename?: 'Test01_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test01_Max_Fields>;
  min?: Maybe<Test01_Min_Fields>;
};


/** aggregate fields of "test_01" */
export type Test01_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test01_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test_01". All fields are combined with a logical 'AND'. */
export type Test01_Bool_Exp = {
  _and?: InputMaybe<Array<Test01_Bool_Exp>>;
  _not?: InputMaybe<Test01_Bool_Exp>;
  _or?: InputMaybe<Array<Test01_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nama?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "test_01" */
export enum Test01_Constraint {
  /** unique or primary key constraint on columns "id" */
  Test_01Pkey = 'test_01_pkey'
}

/** input type for inserting data into table "test_01" */
export type Test01_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  nama?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Test01_Max_Fields = {
  __typename?: 'Test01_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  nama?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Test01_Min_Fields = {
  __typename?: 'Test01_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  nama?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "test_01" */
export type Test01_Mutation_Response = {
  __typename?: 'Test01_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test01>;
};

/** on_conflict condition type for table "test_01" */
export type Test01_On_Conflict = {
  constraint: Test01_Constraint;
  update_columns?: Array<Test01_Update_Column>;
  where?: InputMaybe<Test01_Bool_Exp>;
};

/** Ordering options when selecting data from "test_01". */
export type Test01_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nama?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test_01 */
export type Test01_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test_01" */
export enum Test01_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nama = 'nama',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "test_01" */
export type Test01_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  nama?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "Test01" */
export type Test01_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Test01_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Test01_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  nama?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "test_01" */
export enum Test01_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nama = 'nama',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Test01_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Test01_Set_Input>;
  /** filter the rows which have to be updated */
  where: Test01_Bool_Exp;
};

/** table for int IDs testing */
export type Accounts = {
  __typename?: 'accounts';
  id: Scalars['Int'];
  name: Scalars['String'];
  password: Scalars['String'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey'
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password'
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "answers" */
export type Answers = {
  __typename?: 'answers';
  fk_question: Scalars['uuid'];
  fk_survery: Scalars['uuid'];
  fk_workplace_item: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  question: Question;
  /** An object relationship */
  survey: Survey;
  value: Scalars['Boolean'];
  /** An object relationship */
  workplace_item: Workplace_Item;
};

/** aggregated selection of "answers" */
export type Answers_Aggregate = {
  __typename?: 'answers_aggregate';
  aggregate?: Maybe<Answers_Aggregate_Fields>;
  nodes: Array<Answers>;
};

export type Answers_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Answers_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Answers_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Answers_Aggregate_Bool_Exp_Count>;
};

export type Answers_Aggregate_Bool_Exp_Bool_And = {
  arguments: Answers_Select_Column_Answers_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Answers_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Answers_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Answers_Select_Column_Answers_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Answers_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Answers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Answers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Answers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "answers" */
export type Answers_Aggregate_Fields = {
  __typename?: 'answers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Answers_Max_Fields>;
  min?: Maybe<Answers_Min_Fields>;
};


/** aggregate fields of "answers" */
export type Answers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Answers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "answers" */
export type Answers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Answers_Max_Order_By>;
  min?: InputMaybe<Answers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "answers" */
export type Answers_Arr_Rel_Insert_Input = {
  data: Array<Answers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Answers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "answers". All fields are combined with a logical 'AND'. */
export type Answers_Bool_Exp = {
  _and?: InputMaybe<Array<Answers_Bool_Exp>>;
  _not?: InputMaybe<Answers_Bool_Exp>;
  _or?: InputMaybe<Array<Answers_Bool_Exp>>;
  fk_question?: InputMaybe<Uuid_Comparison_Exp>;
  fk_survery?: InputMaybe<Uuid_Comparison_Exp>;
  fk_workplace_item?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  question?: InputMaybe<Question_Bool_Exp>;
  survey?: InputMaybe<Survey_Bool_Exp>;
  value?: InputMaybe<Boolean_Comparison_Exp>;
  workplace_item?: InputMaybe<Workplace_Item_Bool_Exp>;
};

/** unique or primary key constraints on table "answers" */
export enum Answers_Constraint {
  /** unique or primary key constraint on columns "id" */
  AnswersPkey = 'answers_pkey'
}

/** input type for inserting data into table "answers" */
export type Answers_Insert_Input = {
  fk_question?: InputMaybe<Scalars['uuid']>;
  fk_survery?: InputMaybe<Scalars['uuid']>;
  fk_workplace_item?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  question?: InputMaybe<Question_Obj_Rel_Insert_Input>;
  survey?: InputMaybe<Survey_Obj_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['Boolean']>;
  workplace_item?: InputMaybe<Workplace_Item_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Answers_Max_Fields = {
  __typename?: 'answers_max_fields';
  fk_question?: Maybe<Scalars['uuid']>;
  fk_survery?: Maybe<Scalars['uuid']>;
  fk_workplace_item?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "answers" */
export type Answers_Max_Order_By = {
  fk_question?: InputMaybe<Order_By>;
  fk_survery?: InputMaybe<Order_By>;
  fk_workplace_item?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Answers_Min_Fields = {
  __typename?: 'answers_min_fields';
  fk_question?: Maybe<Scalars['uuid']>;
  fk_survery?: Maybe<Scalars['uuid']>;
  fk_workplace_item?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "answers" */
export type Answers_Min_Order_By = {
  fk_question?: InputMaybe<Order_By>;
  fk_survery?: InputMaybe<Order_By>;
  fk_workplace_item?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "answers" */
export type Answers_Mutation_Response = {
  __typename?: 'answers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Answers>;
};

/** on_conflict condition type for table "answers" */
export type Answers_On_Conflict = {
  constraint: Answers_Constraint;
  update_columns?: Array<Answers_Update_Column>;
  where?: InputMaybe<Answers_Bool_Exp>;
};

/** Ordering options when selecting data from "answers". */
export type Answers_Order_By = {
  fk_question?: InputMaybe<Order_By>;
  fk_survery?: InputMaybe<Order_By>;
  fk_workplace_item?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question?: InputMaybe<Question_Order_By>;
  survey?: InputMaybe<Survey_Order_By>;
  value?: InputMaybe<Order_By>;
  workplace_item?: InputMaybe<Workplace_Item_Order_By>;
};

/** primary key columns input for table: answers */
export type Answers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "answers" */
export enum Answers_Select_Column {
  /** column name */
  FkQuestion = 'fk_question',
  /** column name */
  FkSurvery = 'fk_survery',
  /** column name */
  FkWorkplaceItem = 'fk_workplace_item',
  /** column name */
  Id = 'id',
  /** column name */
  Value = 'value'
}

/** select "answers_aggregate_bool_exp_bool_and_arguments_columns" columns of table "answers" */
export enum Answers_Select_Column_Answers_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Value = 'value'
}

/** select "answers_aggregate_bool_exp_bool_or_arguments_columns" columns of table "answers" */
export enum Answers_Select_Column_Answers_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "answers" */
export type Answers_Set_Input = {
  fk_question?: InputMaybe<Scalars['uuid']>;
  fk_survery?: InputMaybe<Scalars['uuid']>;
  fk_workplace_item?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['Boolean']>;
};

/** Streaming cursor of the table "answers" */
export type Answers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Answers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Answers_Stream_Cursor_Value_Input = {
  fk_question?: InputMaybe<Scalars['uuid']>;
  fk_survery?: InputMaybe<Scalars['uuid']>;
  fk_workplace_item?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "answers" */
export enum Answers_Update_Column {
  /** column name */
  FkQuestion = 'fk_question',
  /** column name */
  FkSurvery = 'fk_survery',
  /** column name */
  FkWorkplaceItem = 'fk_workplace_item',
  /** column name */
  Id = 'id',
  /** column name */
  Value = 'value'
}

export type Answers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Answers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Answers_Bool_Exp;
};

/** metais test */
export type Attributes = {
  __typename?: 'attributes';
  ci_fk?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  cmdb?: Maybe<Cmdb>;
  configurationItem_fk?: Maybe<Scalars['uuid']>;
  fk?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uuid: Scalars['uuid'];
  value?: Maybe<Scalars['String']>;
};

/** aggregated selection of "attributes" */
export type Attributes_Aggregate = {
  __typename?: 'attributes_aggregate';
  aggregate?: Maybe<Attributes_Aggregate_Fields>;
  nodes: Array<Attributes>;
};

export type Attributes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Attributes_Aggregate_Bool_Exp_Count>;
};

export type Attributes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Attributes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Attributes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "attributes" */
export type Attributes_Aggregate_Fields = {
  __typename?: 'attributes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Attributes_Max_Fields>;
  min?: Maybe<Attributes_Min_Fields>;
};


/** aggregate fields of "attributes" */
export type Attributes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Attributes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "attributes" */
export type Attributes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Attributes_Max_Order_By>;
  min?: InputMaybe<Attributes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "attributes" */
export type Attributes_Arr_Rel_Insert_Input = {
  data: Array<Attributes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Attributes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "attributes". All fields are combined with a logical 'AND'. */
export type Attributes_Bool_Exp = {
  _and?: InputMaybe<Array<Attributes_Bool_Exp>>;
  _not?: InputMaybe<Attributes_Bool_Exp>;
  _or?: InputMaybe<Array<Attributes_Bool_Exp>>;
  ci_fk?: InputMaybe<Uuid_Comparison_Exp>;
  cmdb?: InputMaybe<Cmdb_Bool_Exp>;
  configurationItem_fk?: InputMaybe<Uuid_Comparison_Exp>;
  fk?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "attributes" */
export enum Attributes_Constraint {
  /** unique or primary key constraint on columns "uuid" */
  AttributesPkey = 'attributes_pkey'
}

/** input type for inserting data into table "attributes" */
export type Attributes_Insert_Input = {
  ci_fk?: InputMaybe<Scalars['uuid']>;
  cmdb?: InputMaybe<Cmdb_Obj_Rel_Insert_Input>;
  configurationItem_fk?: InputMaybe<Scalars['uuid']>;
  fk?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Attributes_Max_Fields = {
  __typename?: 'attributes_max_fields';
  ci_fk?: Maybe<Scalars['uuid']>;
  configurationItem_fk?: Maybe<Scalars['uuid']>;
  fk?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "attributes" */
export type Attributes_Max_Order_By = {
  ci_fk?: InputMaybe<Order_By>;
  configurationItem_fk?: InputMaybe<Order_By>;
  fk?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Attributes_Min_Fields = {
  __typename?: 'attributes_min_fields';
  ci_fk?: Maybe<Scalars['uuid']>;
  configurationItem_fk?: Maybe<Scalars['uuid']>;
  fk?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "attributes" */
export type Attributes_Min_Order_By = {
  ci_fk?: InputMaybe<Order_By>;
  configurationItem_fk?: InputMaybe<Order_By>;
  fk?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "attributes" */
export type Attributes_Mutation_Response = {
  __typename?: 'attributes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Attributes>;
};

/** on_conflict condition type for table "attributes" */
export type Attributes_On_Conflict = {
  constraint: Attributes_Constraint;
  update_columns?: Array<Attributes_Update_Column>;
  where?: InputMaybe<Attributes_Bool_Exp>;
};

/** Ordering options when selecting data from "attributes". */
export type Attributes_Order_By = {
  ci_fk?: InputMaybe<Order_By>;
  cmdb?: InputMaybe<Cmdb_Order_By>;
  configurationItem_fk?: InputMaybe<Order_By>;
  fk?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: attributes */
export type Attributes_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "attributes" */
export enum Attributes_Select_Column {
  /** column name */
  CiFk = 'ci_fk',
  /** column name */
  ConfigurationItemFk = 'configurationItem_fk',
  /** column name */
  Fk = 'fk',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "attributes" */
export type Attributes_Set_Input = {
  ci_fk?: InputMaybe<Scalars['uuid']>;
  configurationItem_fk?: InputMaybe<Scalars['uuid']>;
  fk?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "attributes" */
export type Attributes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Attributes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Attributes_Stream_Cursor_Value_Input = {
  ci_fk?: InputMaybe<Scalars['uuid']>;
  configurationItem_fk?: InputMaybe<Scalars['uuid']>;
  fk?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "attributes" */
export enum Attributes_Update_Column {
  /** column name */
  CiFk = 'ci_fk',
  /** column name */
  ConfigurationItemFk = 'configurationItem_fk',
  /** column name */
  Fk = 'fk',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  Value = 'value'
}

export type Attributes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Attributes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Attributes_Bool_Exp;
};

/** NIS číselník */
export type Batch543 = {
  __typename?: 'batch543';
  /** An array relationship */
  batch543_items: Array<Batch543_Items>;
  /** An aggregate relationship */
  batch543_items_aggregate: Batch543_Items_Aggregate;
  batchCreatedAt: Scalars['date'];
  batch_number: Scalars['String'];
  health_insurance_company: Scalars['Int'];
  id: Scalars['uuid'];
};


/** NIS číselník */
export type Batch543Batch543_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Batch543_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Batch543_Items_Order_By>>;
  where?: InputMaybe<Batch543_Items_Bool_Exp>;
};


/** NIS číselník */
export type Batch543Batch543_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Batch543_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Batch543_Items_Order_By>>;
  where?: InputMaybe<Batch543_Items_Bool_Exp>;
};

/** aggregated selection of "batch543" */
export type Batch543_Aggregate = {
  __typename?: 'batch543_aggregate';
  aggregate?: Maybe<Batch543_Aggregate_Fields>;
  nodes: Array<Batch543>;
};

/** aggregate fields of "batch543" */
export type Batch543_Aggregate_Fields = {
  __typename?: 'batch543_aggregate_fields';
  avg?: Maybe<Batch543_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Batch543_Max_Fields>;
  min?: Maybe<Batch543_Min_Fields>;
  stddev?: Maybe<Batch543_Stddev_Fields>;
  stddev_pop?: Maybe<Batch543_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Batch543_Stddev_Samp_Fields>;
  sum?: Maybe<Batch543_Sum_Fields>;
  var_pop?: Maybe<Batch543_Var_Pop_Fields>;
  var_samp?: Maybe<Batch543_Var_Samp_Fields>;
  variance?: Maybe<Batch543_Variance_Fields>;
};


/** aggregate fields of "batch543" */
export type Batch543_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Batch543_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Batch543_Avg_Fields = {
  __typename?: 'batch543_avg_fields';
  health_insurance_company?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "batch543". All fields are combined with a logical 'AND'. */
export type Batch543_Bool_Exp = {
  _and?: InputMaybe<Array<Batch543_Bool_Exp>>;
  _not?: InputMaybe<Batch543_Bool_Exp>;
  _or?: InputMaybe<Array<Batch543_Bool_Exp>>;
  batch543_items?: InputMaybe<Batch543_Items_Bool_Exp>;
  batch543_items_aggregate?: InputMaybe<Batch543_Items_Aggregate_Bool_Exp>;
  batchCreatedAt?: InputMaybe<Date_Comparison_Exp>;
  batch_number?: InputMaybe<String_Comparison_Exp>;
  health_insurance_company?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "batch543" */
export enum Batch543_Constraint {
  /** unique or primary key constraint on columns "batch_number" */
  Batch543BatchNumberKey = 'Batch543_batch_number_key',
  /** unique or primary key constraint on columns "id" */
  Batch543Pkey = 'Batch543_pkey'
}

/** input type for incrementing numeric columns in table "batch543" */
export type Batch543_Inc_Input = {
  health_insurance_company?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "batch543" */
export type Batch543_Insert_Input = {
  batch543_items?: InputMaybe<Batch543_Items_Arr_Rel_Insert_Input>;
  batchCreatedAt?: InputMaybe<Scalars['date']>;
  batch_number?: InputMaybe<Scalars['String']>;
  health_insurance_company?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** Items of batch 543 */
export type Batch543_Items = {
  __typename?: 'batch543_items';
  batch543_id: Scalars['uuid'];
  contractAppliesEndAt?: Maybe<Scalars['date']>;
  contractAppliesStartAt: Scalars['date'];
  created_at?: Maybe<Scalars['timestamptz']>;
  department_code?: Maybe<Scalars['String']>;
  ico?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  order_number: Scalars['Int'];
  organization_code?: Maybe<Scalars['String']>;
  practicioner_code?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "batch543_items" */
export type Batch543_Items_Aggregate = {
  __typename?: 'batch543_items_aggregate';
  aggregate?: Maybe<Batch543_Items_Aggregate_Fields>;
  nodes: Array<Batch543_Items>;
};

export type Batch543_Items_Aggregate_Bool_Exp = {
  count?: InputMaybe<Batch543_Items_Aggregate_Bool_Exp_Count>;
};

export type Batch543_Items_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Batch543_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Batch543_Items_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "batch543_items" */
export type Batch543_Items_Aggregate_Fields = {
  __typename?: 'batch543_items_aggregate_fields';
  avg?: Maybe<Batch543_Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Batch543_Items_Max_Fields>;
  min?: Maybe<Batch543_Items_Min_Fields>;
  stddev?: Maybe<Batch543_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Batch543_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Batch543_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Batch543_Items_Sum_Fields>;
  var_pop?: Maybe<Batch543_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Batch543_Items_Var_Samp_Fields>;
  variance?: Maybe<Batch543_Items_Variance_Fields>;
};


/** aggregate fields of "batch543_items" */
export type Batch543_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Batch543_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "batch543_items" */
export type Batch543_Items_Aggregate_Order_By = {
  avg?: InputMaybe<Batch543_Items_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Batch543_Items_Max_Order_By>;
  min?: InputMaybe<Batch543_Items_Min_Order_By>;
  stddev?: InputMaybe<Batch543_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Batch543_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Batch543_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Batch543_Items_Sum_Order_By>;
  var_pop?: InputMaybe<Batch543_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Batch543_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Batch543_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "batch543_items" */
export type Batch543_Items_Arr_Rel_Insert_Input = {
  data: Array<Batch543_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Batch543_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Batch543_Items_Avg_Fields = {
  __typename?: 'batch543_items_avg_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "batch543_items" */
export type Batch543_Items_Avg_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "batch543_items". All fields are combined with a logical 'AND'. */
export type Batch543_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Batch543_Items_Bool_Exp>>;
  _not?: InputMaybe<Batch543_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Batch543_Items_Bool_Exp>>;
  batch543_id?: InputMaybe<Uuid_Comparison_Exp>;
  contractAppliesEndAt?: InputMaybe<Date_Comparison_Exp>;
  contractAppliesStartAt?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  department_code?: InputMaybe<String_Comparison_Exp>;
  ico?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order_number?: InputMaybe<Int_Comparison_Exp>;
  organization_code?: InputMaybe<String_Comparison_Exp>;
  practicioner_code?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "batch543_items" */
export enum Batch543_Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  Batch543ItemsPkey = 'batch543_items_pkey'
}

/** input type for incrementing numeric columns in table "batch543_items" */
export type Batch543_Items_Inc_Input = {
  order_number?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "batch543_items" */
export type Batch543_Items_Insert_Input = {
  batch543_id?: InputMaybe<Scalars['uuid']>;
  contractAppliesEndAt?: InputMaybe<Scalars['date']>;
  contractAppliesStartAt?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  department_code?: InputMaybe<Scalars['String']>;
  ico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  order_number?: InputMaybe<Scalars['Int']>;
  organization_code?: InputMaybe<Scalars['String']>;
  practicioner_code?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Batch543_Items_Max_Fields = {
  __typename?: 'batch543_items_max_fields';
  batch543_id?: Maybe<Scalars['uuid']>;
  contractAppliesEndAt?: Maybe<Scalars['date']>;
  contractAppliesStartAt?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  department_code?: Maybe<Scalars['String']>;
  ico?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  order_number?: Maybe<Scalars['Int']>;
  organization_code?: Maybe<Scalars['String']>;
  practicioner_code?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "batch543_items" */
export type Batch543_Items_Max_Order_By = {
  batch543_id?: InputMaybe<Order_By>;
  contractAppliesEndAt?: InputMaybe<Order_By>;
  contractAppliesStartAt?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  department_code?: InputMaybe<Order_By>;
  ico?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_number?: InputMaybe<Order_By>;
  organization_code?: InputMaybe<Order_By>;
  practicioner_code?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Batch543_Items_Min_Fields = {
  __typename?: 'batch543_items_min_fields';
  batch543_id?: Maybe<Scalars['uuid']>;
  contractAppliesEndAt?: Maybe<Scalars['date']>;
  contractAppliesStartAt?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  department_code?: Maybe<Scalars['String']>;
  ico?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  order_number?: Maybe<Scalars['Int']>;
  organization_code?: Maybe<Scalars['String']>;
  practicioner_code?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "batch543_items" */
export type Batch543_Items_Min_Order_By = {
  batch543_id?: InputMaybe<Order_By>;
  contractAppliesEndAt?: InputMaybe<Order_By>;
  contractAppliesStartAt?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  department_code?: InputMaybe<Order_By>;
  ico?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_number?: InputMaybe<Order_By>;
  organization_code?: InputMaybe<Order_By>;
  practicioner_code?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "batch543_items" */
export type Batch543_Items_Mutation_Response = {
  __typename?: 'batch543_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Batch543_Items>;
};

/** on_conflict condition type for table "batch543_items" */
export type Batch543_Items_On_Conflict = {
  constraint: Batch543_Items_Constraint;
  update_columns?: Array<Batch543_Items_Update_Column>;
  where?: InputMaybe<Batch543_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "batch543_items". */
export type Batch543_Items_Order_By = {
  batch543_id?: InputMaybe<Order_By>;
  contractAppliesEndAt?: InputMaybe<Order_By>;
  contractAppliesStartAt?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  department_code?: InputMaybe<Order_By>;
  ico?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_number?: InputMaybe<Order_By>;
  organization_code?: InputMaybe<Order_By>;
  practicioner_code?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: batch543_items */
export type Batch543_Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "batch543_items" */
export enum Batch543_Items_Select_Column {
  /** column name */
  Batch543Id = 'batch543_id',
  /** column name */
  ContractAppliesEndAt = 'contractAppliesEndAt',
  /** column name */
  ContractAppliesStartAt = 'contractAppliesStartAt',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentCode = 'department_code',
  /** column name */
  Ico = 'ico',
  /** column name */
  Id = 'id',
  /** column name */
  OrderNumber = 'order_number',
  /** column name */
  OrganizationCode = 'organization_code',
  /** column name */
  PracticionerCode = 'practicioner_code',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "batch543_items" */
export type Batch543_Items_Set_Input = {
  batch543_id?: InputMaybe<Scalars['uuid']>;
  contractAppliesEndAt?: InputMaybe<Scalars['date']>;
  contractAppliesStartAt?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  department_code?: InputMaybe<Scalars['String']>;
  ico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  order_number?: InputMaybe<Scalars['Int']>;
  organization_code?: InputMaybe<Scalars['String']>;
  practicioner_code?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Batch543_Items_Stddev_Fields = {
  __typename?: 'batch543_items_stddev_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "batch543_items" */
export type Batch543_Items_Stddev_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Batch543_Items_Stddev_Pop_Fields = {
  __typename?: 'batch543_items_stddev_pop_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "batch543_items" */
export type Batch543_Items_Stddev_Pop_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Batch543_Items_Stddev_Samp_Fields = {
  __typename?: 'batch543_items_stddev_samp_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "batch543_items" */
export type Batch543_Items_Stddev_Samp_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "batch543_items" */
export type Batch543_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Batch543_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Batch543_Items_Stream_Cursor_Value_Input = {
  batch543_id?: InputMaybe<Scalars['uuid']>;
  contractAppliesEndAt?: InputMaybe<Scalars['date']>;
  contractAppliesStartAt?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  department_code?: InputMaybe<Scalars['String']>;
  ico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  order_number?: InputMaybe<Scalars['Int']>;
  organization_code?: InputMaybe<Scalars['String']>;
  practicioner_code?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Batch543_Items_Sum_Fields = {
  __typename?: 'batch543_items_sum_fields';
  order_number?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "batch543_items" */
export type Batch543_Items_Sum_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** update columns of table "batch543_items" */
export enum Batch543_Items_Update_Column {
  /** column name */
  Batch543Id = 'batch543_id',
  /** column name */
  ContractAppliesEndAt = 'contractAppliesEndAt',
  /** column name */
  ContractAppliesStartAt = 'contractAppliesStartAt',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentCode = 'department_code',
  /** column name */
  Ico = 'ico',
  /** column name */
  Id = 'id',
  /** column name */
  OrderNumber = 'order_number',
  /** column name */
  OrganizationCode = 'organization_code',
  /** column name */
  PracticionerCode = 'practicioner_code',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Batch543_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Batch543_Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Batch543_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Batch543_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Batch543_Items_Var_Pop_Fields = {
  __typename?: 'batch543_items_var_pop_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "batch543_items" */
export type Batch543_Items_Var_Pop_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Batch543_Items_Var_Samp_Fields = {
  __typename?: 'batch543_items_var_samp_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "batch543_items" */
export type Batch543_Items_Var_Samp_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Batch543_Items_Variance_Fields = {
  __typename?: 'batch543_items_variance_fields';
  order_number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "batch543_items" */
export type Batch543_Items_Variance_Order_By = {
  order_number?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Batch543_Max_Fields = {
  __typename?: 'batch543_max_fields';
  batchCreatedAt?: Maybe<Scalars['date']>;
  batch_number?: Maybe<Scalars['String']>;
  health_insurance_company?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Batch543_Min_Fields = {
  __typename?: 'batch543_min_fields';
  batchCreatedAt?: Maybe<Scalars['date']>;
  batch_number?: Maybe<Scalars['String']>;
  health_insurance_company?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "batch543" */
export type Batch543_Mutation_Response = {
  __typename?: 'batch543_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Batch543>;
};

/** on_conflict condition type for table "batch543" */
export type Batch543_On_Conflict = {
  constraint: Batch543_Constraint;
  update_columns?: Array<Batch543_Update_Column>;
  where?: InputMaybe<Batch543_Bool_Exp>;
};

/** Ordering options when selecting data from "batch543". */
export type Batch543_Order_By = {
  batch543_items_aggregate?: InputMaybe<Batch543_Items_Aggregate_Order_By>;
  batchCreatedAt?: InputMaybe<Order_By>;
  batch_number?: InputMaybe<Order_By>;
  health_insurance_company?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: batch543 */
export type Batch543_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "batch543" */
export enum Batch543_Select_Column {
  /** column name */
  BatchCreatedAt = 'batchCreatedAt',
  /** column name */
  BatchNumber = 'batch_number',
  /** column name */
  HealthInsuranceCompany = 'health_insurance_company',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "batch543" */
export type Batch543_Set_Input = {
  batchCreatedAt?: InputMaybe<Scalars['date']>;
  batch_number?: InputMaybe<Scalars['String']>;
  health_insurance_company?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Batch543_Stddev_Fields = {
  __typename?: 'batch543_stddev_fields';
  health_insurance_company?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Batch543_Stddev_Pop_Fields = {
  __typename?: 'batch543_stddev_pop_fields';
  health_insurance_company?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Batch543_Stddev_Samp_Fields = {
  __typename?: 'batch543_stddev_samp_fields';
  health_insurance_company?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "batch543" */
export type Batch543_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Batch543_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Batch543_Stream_Cursor_Value_Input = {
  batchCreatedAt?: InputMaybe<Scalars['date']>;
  batch_number?: InputMaybe<Scalars['String']>;
  health_insurance_company?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Batch543_Sum_Fields = {
  __typename?: 'batch543_sum_fields';
  health_insurance_company?: Maybe<Scalars['Int']>;
};

/** update columns of table "batch543" */
export enum Batch543_Update_Column {
  /** column name */
  BatchCreatedAt = 'batchCreatedAt',
  /** column name */
  BatchNumber = 'batch_number',
  /** column name */
  HealthInsuranceCompany = 'health_insurance_company',
  /** column name */
  Id = 'id'
}

export type Batch543_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Batch543_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Batch543_Set_Input>;
  /** filter the rows which have to be updated */
  where: Batch543_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Batch543_Var_Pop_Fields = {
  __typename?: 'batch543_var_pop_fields';
  health_insurance_company?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Batch543_Var_Samp_Fields = {
  __typename?: 'batch543_var_samp_fields';
  health_insurance_company?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Batch543_Variance_Fields = {
  __typename?: 'batch543_variance_fields';
  health_insurance_company?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "bus_stop_departures" */
export type BusStopDepartures = {
  __typename?: 'busStopDepartures';
  /** An object relationship */
  bus_stop?: Maybe<BusStops>;
  bus_stop_id?: Maybe<Scalars['uuid']>;
  bus_stop_platform?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  line?: Maybe<Scalars['String']>;
  /** An object relationship */
  line_direction?: Maybe<BusStops>;
  line_direction_id?: Maybe<Scalars['uuid']>;
  low_entry: Scalars['Boolean'];
  time_departure: Scalars['timetz'];
};

/** aggregated selection of "bus_stop_departures" */
export type BusStopDepartures_Aggregate = {
  __typename?: 'busStopDepartures_aggregate';
  aggregate?: Maybe<BusStopDepartures_Aggregate_Fields>;
  nodes: Array<BusStopDepartures>;
};

export type BusStopDepartures_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<BusStopDepartures_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<BusStopDepartures_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<BusStopDepartures_Aggregate_Bool_Exp_Count>;
};

export type BusStopDepartures_Aggregate_Bool_Exp_Bool_And = {
  arguments: BusStopDepartures_Select_Column_BusStopDepartures_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BusStopDepartures_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type BusStopDepartures_Aggregate_Bool_Exp_Bool_Or = {
  arguments: BusStopDepartures_Select_Column_BusStopDepartures_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BusStopDepartures_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type BusStopDepartures_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<BusStopDepartures_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<BusStopDepartures_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "bus_stop_departures" */
export type BusStopDepartures_Aggregate_Fields = {
  __typename?: 'busStopDepartures_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<BusStopDepartures_Max_Fields>;
  min?: Maybe<BusStopDepartures_Min_Fields>;
};


/** aggregate fields of "bus_stop_departures" */
export type BusStopDepartures_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<BusStopDepartures_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bus_stop_departures" */
export type BusStopDepartures_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<BusStopDepartures_Max_Order_By>;
  min?: InputMaybe<BusStopDepartures_Min_Order_By>;
};

/** input type for inserting array relation for remote table "bus_stop_departures" */
export type BusStopDepartures_Arr_Rel_Insert_Input = {
  data: Array<BusStopDepartures_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<BusStopDepartures_On_Conflict>;
};

/** Boolean expression to filter rows from the table "bus_stop_departures". All fields are combined with a logical 'AND'. */
export type BusStopDepartures_Bool_Exp = {
  _and?: InputMaybe<Array<BusStopDepartures_Bool_Exp>>;
  _not?: InputMaybe<BusStopDepartures_Bool_Exp>;
  _or?: InputMaybe<Array<BusStopDepartures_Bool_Exp>>;
  bus_stop?: InputMaybe<BusStops_Bool_Exp>;
  bus_stop_id?: InputMaybe<Uuid_Comparison_Exp>;
  bus_stop_platform?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  line?: InputMaybe<String_Comparison_Exp>;
  line_direction?: InputMaybe<BusStops_Bool_Exp>;
  line_direction_id?: InputMaybe<Uuid_Comparison_Exp>;
  low_entry?: InputMaybe<Boolean_Comparison_Exp>;
  time_departure?: InputMaybe<Timetz_Comparison_Exp>;
};

/** unique or primary key constraints on table "bus_stop_departures" */
export enum BusStopDepartures_Constraint {
  /** unique or primary key constraint on columns "id" */
  BusStopDeparturesPkey = 'bus_stop_departures_pkey'
}

/** input type for inserting data into table "bus_stop_departures" */
export type BusStopDepartures_Insert_Input = {
  bus_stop?: InputMaybe<BusStops_Obj_Rel_Insert_Input>;
  bus_stop_id?: InputMaybe<Scalars['uuid']>;
  bus_stop_platform?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  line?: InputMaybe<Scalars['String']>;
  line_direction?: InputMaybe<BusStops_Obj_Rel_Insert_Input>;
  line_direction_id?: InputMaybe<Scalars['uuid']>;
  low_entry?: InputMaybe<Scalars['Boolean']>;
  time_departure?: InputMaybe<Scalars['timetz']>;
};

/** aggregate max on columns */
export type BusStopDepartures_Max_Fields = {
  __typename?: 'busStopDepartures_max_fields';
  bus_stop_id?: Maybe<Scalars['uuid']>;
  bus_stop_platform?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  line?: Maybe<Scalars['String']>;
  line_direction_id?: Maybe<Scalars['uuid']>;
  time_departure?: Maybe<Scalars['timetz']>;
};

/** order by max() on columns of table "bus_stop_departures" */
export type BusStopDepartures_Max_Order_By = {
  bus_stop_id?: InputMaybe<Order_By>;
  bus_stop_platform?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  line?: InputMaybe<Order_By>;
  line_direction_id?: InputMaybe<Order_By>;
  time_departure?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type BusStopDepartures_Min_Fields = {
  __typename?: 'busStopDepartures_min_fields';
  bus_stop_id?: Maybe<Scalars['uuid']>;
  bus_stop_platform?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  line?: Maybe<Scalars['String']>;
  line_direction_id?: Maybe<Scalars['uuid']>;
  time_departure?: Maybe<Scalars['timetz']>;
};

/** order by min() on columns of table "bus_stop_departures" */
export type BusStopDepartures_Min_Order_By = {
  bus_stop_id?: InputMaybe<Order_By>;
  bus_stop_platform?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  line?: InputMaybe<Order_By>;
  line_direction_id?: InputMaybe<Order_By>;
  time_departure?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bus_stop_departures" */
export type BusStopDepartures_Mutation_Response = {
  __typename?: 'busStopDepartures_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BusStopDepartures>;
};

/** on_conflict condition type for table "bus_stop_departures" */
export type BusStopDepartures_On_Conflict = {
  constraint: BusStopDepartures_Constraint;
  update_columns?: Array<BusStopDepartures_Update_Column>;
  where?: InputMaybe<BusStopDepartures_Bool_Exp>;
};

/** Ordering options when selecting data from "bus_stop_departures". */
export type BusStopDepartures_Order_By = {
  bus_stop?: InputMaybe<BusStops_Order_By>;
  bus_stop_id?: InputMaybe<Order_By>;
  bus_stop_platform?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  line?: InputMaybe<Order_By>;
  line_direction?: InputMaybe<BusStops_Order_By>;
  line_direction_id?: InputMaybe<Order_By>;
  low_entry?: InputMaybe<Order_By>;
  time_departure?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bus_stop_departures */
export type BusStopDepartures_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "bus_stop_departures" */
export enum BusStopDepartures_Select_Column {
  /** column name */
  BusStopId = 'bus_stop_id',
  /** column name */
  BusStopPlatform = 'bus_stop_platform',
  /** column name */
  Id = 'id',
  /** column name */
  Line = 'line',
  /** column name */
  LineDirectionId = 'line_direction_id',
  /** column name */
  LowEntry = 'low_entry',
  /** column name */
  TimeDeparture = 'time_departure'
}

/** select "busStopDepartures_aggregate_bool_exp_bool_and_arguments_columns" columns of table "bus_stop_departures" */
export enum BusStopDepartures_Select_Column_BusStopDepartures_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  LowEntry = 'low_entry'
}

/** select "busStopDepartures_aggregate_bool_exp_bool_or_arguments_columns" columns of table "bus_stop_departures" */
export enum BusStopDepartures_Select_Column_BusStopDepartures_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  LowEntry = 'low_entry'
}

/** input type for updating data in table "bus_stop_departures" */
export type BusStopDepartures_Set_Input = {
  bus_stop_id?: InputMaybe<Scalars['uuid']>;
  bus_stop_platform?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  line?: InputMaybe<Scalars['String']>;
  line_direction_id?: InputMaybe<Scalars['uuid']>;
  low_entry?: InputMaybe<Scalars['Boolean']>;
  time_departure?: InputMaybe<Scalars['timetz']>;
};

/** Streaming cursor of the table "busStopDepartures" */
export type BusStopDepartures_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: BusStopDepartures_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type BusStopDepartures_Stream_Cursor_Value_Input = {
  bus_stop_id?: InputMaybe<Scalars['uuid']>;
  bus_stop_platform?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  line?: InputMaybe<Scalars['String']>;
  line_direction_id?: InputMaybe<Scalars['uuid']>;
  low_entry?: InputMaybe<Scalars['Boolean']>;
  time_departure?: InputMaybe<Scalars['timetz']>;
};

/** update columns of table "bus_stop_departures" */
export enum BusStopDepartures_Update_Column {
  /** column name */
  BusStopId = 'bus_stop_id',
  /** column name */
  BusStopPlatform = 'bus_stop_platform',
  /** column name */
  Id = 'id',
  /** column name */
  Line = 'line',
  /** column name */
  LineDirectionId = 'line_direction_id',
  /** column name */
  LowEntry = 'low_entry',
  /** column name */
  TimeDeparture = 'time_departure'
}

export type BusStopDepartures_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BusStopDepartures_Set_Input>;
  /** filter the rows which have to be updated */
  where: BusStopDepartures_Bool_Exp;
};

/** columns and relationships of "bus_stops" */
export type BusStops = {
  __typename?: 'busStops';
  /** An array relationship */
  bus_stop_departures: Array<BusStopDepartures>;
  /** An aggregate relationship */
  bus_stop_departures_aggregate: BusStopDepartures_Aggregate;
  city?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['geography']>;
  signedThumbnailImgPath?: Maybe<GetUrlReturn>;
  station_id?: Maybe<Scalars['Int']>;
  thumbnailImgPath?: Maybe<Scalars['String']>;
  trips_count?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};


/** columns and relationships of "bus_stops" */
export type BusStopsBus_Stop_DeparturesArgs = {
  distinct_on?: InputMaybe<Array<BusStopDepartures_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BusStopDepartures_Order_By>>;
  where?: InputMaybe<BusStopDepartures_Bool_Exp>;
};


/** columns and relationships of "bus_stops" */
export type BusStopsBus_Stop_Departures_AggregateArgs = {
  distinct_on?: InputMaybe<Array<BusStopDepartures_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BusStopDepartures_Order_By>>;
  where?: InputMaybe<BusStopDepartures_Bool_Exp>;
};

/** aggregated selection of "bus_stops" */
export type BusStops_Aggregate = {
  __typename?: 'busStops_aggregate';
  aggregate?: Maybe<BusStops_Aggregate_Fields>;
  nodes: Array<BusStops>;
};

/** aggregate fields of "bus_stops" */
export type BusStops_Aggregate_Fields = {
  __typename?: 'busStops_aggregate_fields';
  avg?: Maybe<BusStops_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<BusStops_Max_Fields>;
  min?: Maybe<BusStops_Min_Fields>;
  stddev?: Maybe<BusStops_Stddev_Fields>;
  stddev_pop?: Maybe<BusStops_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<BusStops_Stddev_Samp_Fields>;
  sum?: Maybe<BusStops_Sum_Fields>;
  var_pop?: Maybe<BusStops_Var_Pop_Fields>;
  var_samp?: Maybe<BusStops_Var_Samp_Fields>;
  variance?: Maybe<BusStops_Variance_Fields>;
};


/** aggregate fields of "bus_stops" */
export type BusStops_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<BusStops_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type BusStops_Avg_Fields = {
  __typename?: 'busStops_avg_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  station_id?: Maybe<Scalars['Float']>;
  trips_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "bus_stops". All fields are combined with a logical 'AND'. */
export type BusStops_Bool_Exp = {
  _and?: InputMaybe<Array<BusStops_Bool_Exp>>;
  _not?: InputMaybe<BusStops_Bool_Exp>;
  _or?: InputMaybe<Array<BusStops_Bool_Exp>>;
  bus_stop_departures?: InputMaybe<BusStopDepartures_Bool_Exp>;
  bus_stop_departures_aggregate?: InputMaybe<BusStopDepartures_Aggregate_Bool_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lat?: InputMaybe<Float8_Comparison_Exp>;
  lng?: InputMaybe<Float8_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<Geography_Comparison_Exp>;
  station_id?: InputMaybe<Int_Comparison_Exp>;
  thumbnailImgPath?: InputMaybe<String_Comparison_Exp>;
  trips_count?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "bus_stops" */
export enum BusStops_Constraint {
  /** unique or primary key constraint on columns "id" */
  BusStopsIdKey = 'bus_stops_id_key',
  /** unique or primary key constraint on columns "id" */
  BusStopsPkey = 'bus_stops_pkey'
}

/** input type for incrementing numeric columns in table "bus_stops" */
export type BusStops_Inc_Input = {
  lat?: InputMaybe<Scalars['float8']>;
  lng?: InputMaybe<Scalars['float8']>;
  station_id?: InputMaybe<Scalars['Int']>;
  trips_count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "bus_stops" */
export type BusStops_Insert_Input = {
  bus_stop_departures?: InputMaybe<BusStopDepartures_Arr_Rel_Insert_Input>;
  city?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lat?: InputMaybe<Scalars['float8']>;
  lng?: InputMaybe<Scalars['float8']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['geography']>;
  station_id?: InputMaybe<Scalars['Int']>;
  thumbnailImgPath?: InputMaybe<Scalars['String']>;
  trips_count?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type BusStops_Max_Fields = {
  __typename?: 'busStops_max_fields';
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  station_id?: Maybe<Scalars['Int']>;
  thumbnailImgPath?: Maybe<Scalars['String']>;
  trips_count?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type BusStops_Min_Fields = {
  __typename?: 'busStops_min_fields';
  city?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  station_id?: Maybe<Scalars['Int']>;
  thumbnailImgPath?: Maybe<Scalars['String']>;
  trips_count?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "bus_stops" */
export type BusStops_Mutation_Response = {
  __typename?: 'busStops_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<BusStops>;
};

/** input type for inserting object relation for remote table "bus_stops" */
export type BusStops_Obj_Rel_Insert_Input = {
  data: BusStops_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<BusStops_On_Conflict>;
};

/** on_conflict condition type for table "bus_stops" */
export type BusStops_On_Conflict = {
  constraint: BusStops_Constraint;
  update_columns?: Array<BusStops_Update_Column>;
  where?: InputMaybe<BusStops_Bool_Exp>;
};

/** Ordering options when selecting data from "bus_stops". */
export type BusStops_Order_By = {
  bus_stop_departures_aggregate?: InputMaybe<BusStopDepartures_Aggregate_Order_By>;
  city?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  station_id?: InputMaybe<Order_By>;
  thumbnailImgPath?: InputMaybe<Order_By>;
  trips_count?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bus_stops */
export type BusStops_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "bus_stops" */
export enum BusStops_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  StationId = 'station_id',
  /** column name */
  ThumbnailImgPath = 'thumbnailImgPath',
  /** column name */
  TripsCount = 'trips_count',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "bus_stops" */
export type BusStops_Set_Input = {
  city?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lat?: InputMaybe<Scalars['float8']>;
  lng?: InputMaybe<Scalars['float8']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['geography']>;
  station_id?: InputMaybe<Scalars['Int']>;
  thumbnailImgPath?: InputMaybe<Scalars['String']>;
  trips_count?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type BusStops_Stddev_Fields = {
  __typename?: 'busStops_stddev_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  station_id?: Maybe<Scalars['Float']>;
  trips_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type BusStops_Stddev_Pop_Fields = {
  __typename?: 'busStops_stddev_pop_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  station_id?: Maybe<Scalars['Float']>;
  trips_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type BusStops_Stddev_Samp_Fields = {
  __typename?: 'busStops_stddev_samp_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  station_id?: Maybe<Scalars['Float']>;
  trips_count?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "busStops" */
export type BusStops_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: BusStops_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type BusStops_Stream_Cursor_Value_Input = {
  city?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lat?: InputMaybe<Scalars['float8']>;
  lng?: InputMaybe<Scalars['float8']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['geography']>;
  station_id?: InputMaybe<Scalars['Int']>;
  thumbnailImgPath?: InputMaybe<Scalars['String']>;
  trips_count?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type BusStops_Sum_Fields = {
  __typename?: 'busStops_sum_fields';
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  station_id?: Maybe<Scalars['Int']>;
  trips_count?: Maybe<Scalars['Int']>;
};

/** update columns of table "bus_stops" */
export enum BusStops_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  Id = 'id',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  StationId = 'station_id',
  /** column name */
  ThumbnailImgPath = 'thumbnailImgPath',
  /** column name */
  TripsCount = 'trips_count',
  /** column name */
  Type = 'type'
}

export type BusStops_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<BusStops_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BusStops_Set_Input>;
  /** filter the rows which have to be updated */
  where: BusStops_Bool_Exp;
};

/** aggregate var_pop on columns */
export type BusStops_Var_Pop_Fields = {
  __typename?: 'busStops_var_pop_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  station_id?: Maybe<Scalars['Float']>;
  trips_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type BusStops_Var_Samp_Fields = {
  __typename?: 'busStops_var_samp_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  station_id?: Maybe<Scalars['Float']>;
  trips_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type BusStops_Variance_Fields = {
  __typename?: 'busStops_variance_fields';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  station_id?: Maybe<Scalars['Float']>;
  trips_count?: Maybe<Scalars['Float']>;
};

/** metais - test */
export type Ci = {
  __typename?: 'ci';
  /** An array relationship */
  attributes: Array<Attributes>;
  /** An aggregate relationship */
  attributes_aggregate: Attributes_Aggregate;
  id: Scalars['uuid'];
  type: Scalars['String'];
};


/** metais - test */
export type CiAttributesArgs = {
  distinct_on?: InputMaybe<Array<Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attributes_Order_By>>;
  where?: InputMaybe<Attributes_Bool_Exp>;
};


/** metais - test */
export type CiAttributes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attributes_Order_By>>;
  where?: InputMaybe<Attributes_Bool_Exp>;
};

/** metais - test */
export type CiWithRels = {
  __typename?: 'ciWithRels';
  /** An object relationship */
  ci: Ci;
  ci_fk: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "ciWithRels" */
export type CiWithRels_Aggregate = {
  __typename?: 'ciWithRels_aggregate';
  aggregate?: Maybe<CiWithRels_Aggregate_Fields>;
  nodes: Array<CiWithRels>;
};

/** aggregate fields of "ciWithRels" */
export type CiWithRels_Aggregate_Fields = {
  __typename?: 'ciWithRels_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CiWithRels_Max_Fields>;
  min?: Maybe<CiWithRels_Min_Fields>;
};


/** aggregate fields of "ciWithRels" */
export type CiWithRels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CiWithRels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ciWithRels". All fields are combined with a logical 'AND'. */
export type CiWithRels_Bool_Exp = {
  _and?: InputMaybe<Array<CiWithRels_Bool_Exp>>;
  _not?: InputMaybe<CiWithRels_Bool_Exp>;
  _or?: InputMaybe<Array<CiWithRels_Bool_Exp>>;
  ci?: InputMaybe<Ci_Bool_Exp>;
  ci_fk?: InputMaybe<Uuid_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "ciWithRels" */
export enum CiWithRels_Constraint {
  /** unique or primary key constraint on columns "uuid" */
  CiWithRelsPkey = 'ciWithRels_pkey'
}

/** input type for inserting data into table "ciWithRels" */
export type CiWithRels_Insert_Input = {
  ci?: InputMaybe<Ci_Obj_Rel_Insert_Input>;
  ci_fk?: InputMaybe<Scalars['uuid']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type CiWithRels_Max_Fields = {
  __typename?: 'ciWithRels_max_fields';
  ci_fk?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type CiWithRels_Min_Fields = {
  __typename?: 'ciWithRels_min_fields';
  ci_fk?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "ciWithRels" */
export type CiWithRels_Mutation_Response = {
  __typename?: 'ciWithRels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CiWithRels>;
};

/** on_conflict condition type for table "ciWithRels" */
export type CiWithRels_On_Conflict = {
  constraint: CiWithRels_Constraint;
  update_columns?: Array<CiWithRels_Update_Column>;
  where?: InputMaybe<CiWithRels_Bool_Exp>;
};

/** Ordering options when selecting data from "ciWithRels". */
export type CiWithRels_Order_By = {
  ci?: InputMaybe<Ci_Order_By>;
  ci_fk?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ciWithRels */
export type CiWithRels_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "ciWithRels" */
export enum CiWithRels_Select_Column {
  /** column name */
  CiFk = 'ci_fk',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "ciWithRels" */
export type CiWithRels_Set_Input = {
  ci_fk?: InputMaybe<Scalars['uuid']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "ciWithRels" */
export type CiWithRels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: CiWithRels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type CiWithRels_Stream_Cursor_Value_Input = {
  ci_fk?: InputMaybe<Scalars['uuid']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "ciWithRels" */
export enum CiWithRels_Update_Column {
  /** column name */
  CiFk = 'ci_fk',
  /** column name */
  Uuid = 'uuid'
}

export type CiWithRels_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CiWithRels_Set_Input>;
  /** filter the rows which have to be updated */
  where: CiWithRels_Bool_Exp;
};

/** aggregated selection of "ci" */
export type Ci_Aggregate = {
  __typename?: 'ci_aggregate';
  aggregate?: Maybe<Ci_Aggregate_Fields>;
  nodes: Array<Ci>;
};

/** aggregate fields of "ci" */
export type Ci_Aggregate_Fields = {
  __typename?: 'ci_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ci_Max_Fields>;
  min?: Maybe<Ci_Min_Fields>;
};


/** aggregate fields of "ci" */
export type Ci_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ci_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ci". All fields are combined with a logical 'AND'. */
export type Ci_Bool_Exp = {
  _and?: InputMaybe<Array<Ci_Bool_Exp>>;
  _not?: InputMaybe<Ci_Bool_Exp>;
  _or?: InputMaybe<Array<Ci_Bool_Exp>>;
  attributes?: InputMaybe<Attributes_Bool_Exp>;
  attributes_aggregate?: InputMaybe<Attributes_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ci" */
export enum Ci_Constraint {
  /** unique or primary key constraint on columns "id" */
  CiPkey = 'ci_pkey'
}

/** input type for inserting data into table "ci" */
export type Ci_Insert_Input = {
  attributes?: InputMaybe<Attributes_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ci_Max_Fields = {
  __typename?: 'ci_max_fields';
  id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ci_Min_Fields = {
  __typename?: 'ci_min_fields';
  id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ci" */
export type Ci_Mutation_Response = {
  __typename?: 'ci_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ci>;
};

/** input type for inserting object relation for remote table "ci" */
export type Ci_Obj_Rel_Insert_Input = {
  data: Ci_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Ci_On_Conflict>;
};

/** on_conflict condition type for table "ci" */
export type Ci_On_Conflict = {
  constraint: Ci_Constraint;
  update_columns?: Array<Ci_Update_Column>;
  where?: InputMaybe<Ci_Bool_Exp>;
};

/** Ordering options when selecting data from "ci". */
export type Ci_Order_By = {
  attributes_aggregate?: InputMaybe<Attributes_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ci */
export type Ci_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ci" */
export enum Ci_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "ci" */
export type Ci_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "ci" */
export type Ci_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ci_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ci_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ci" */
export enum Ci_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type'
}

export type Ci_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ci_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ci_Bool_Exp;
};

/** metais test */
export type Cmdb = {
  __typename?: 'cmdb';
  /** An array relationship */
  attributes: Array<Attributes>;
  /** An aggregate relationship */
  attributes_aggregate: Attributes_Aggregate;
  /** An object relationship */
  cmdb_relations_neighbourscount?: Maybe<CmdbRelationsNeighbourscounts>;
  description?: Maybe<Scalars['String']>;
  manager?: Maybe<Scalars['String']>;
  metaIS_code?: Maybe<Scalars['String']>;
  name_of_information_system?: Maybe<Scalars['String']>;
  reference_identifier?: Maybe<Scalars['String']>;
  /** An array relationship */
  relations: Array<CmdbRelations>;
  /** An aggregate relationship */
  relations_aggregate: CmdbRelations_Aggregate;
  type: Scalars['String'];
  uuid: Scalars['uuid'];
};


/** metais test */
export type CmdbAttributesArgs = {
  distinct_on?: InputMaybe<Array<Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attributes_Order_By>>;
  where?: InputMaybe<Attributes_Bool_Exp>;
};


/** metais test */
export type CmdbAttributes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attributes_Order_By>>;
  where?: InputMaybe<Attributes_Bool_Exp>;
};


/** metais test */
export type CmdbRelationsArgs = {
  distinct_on?: InputMaybe<Array<CmdbRelations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CmdbRelations_Order_By>>;
  where?: InputMaybe<CmdbRelations_Bool_Exp>;
};


/** metais test */
export type CmdbRelations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CmdbRelations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CmdbRelations_Order_By>>;
  where?: InputMaybe<CmdbRelations_Bool_Exp>;
};

/** columns and relationships of "cmdb_relations" */
export type CmdbRelations = {
  __typename?: 'cmdbRelations';
  fk: Scalars['uuid'];
  type?: Maybe<Scalars['String']>;
  uuid: Scalars['uuid'];
};

/** columns and relationships of "cmdb_relations_neighbourscount" */
export type CmdbRelationsNeighbourscounts = {
  __typename?: 'cmdbRelationsNeighbourscounts';
  /** A computed field, executes function "cmdb_relations_type_count_as" */
  AS?: Maybe<Scalars['bigint']>;
  /** A computed field, executes function "cmdb_relations_type_count_infrasluzba" */
  InfraSluzba?: Maybe<Scalars['bigint']>;
  /** A computed field, executes function "cmdb_relations_type_count_kris" */
  KRIS?: Maybe<Scalars['bigint']>;
  /** A computed field, executes function "cmdb_relations_type_count_kontrakt" */
  Kontrakt?: Maybe<Scalars['bigint']>;
  /** A computed field, executes function "cmdb_relations_type_count_ola_kontrakt" */
  OLA_Kontrakt?: Maybe<Scalars['bigint']>;
  /** A computed field, executes function "cmdb_relations_type_count_po" */
  PO?: Maybe<Scalars['bigint']>;
  /** A computed field, executes function "cmdb_relations_type_count_projekt" */
  Projekt?: Maybe<Scalars['bigint']>;
  fk: Scalars['uuid'];
};

/** aggregated selection of "cmdb_relations_neighbourscount" */
export type CmdbRelationsNeighbourscounts_Aggregate = {
  __typename?: 'cmdbRelationsNeighbourscounts_aggregate';
  aggregate?: Maybe<CmdbRelationsNeighbourscounts_Aggregate_Fields>;
  nodes: Array<CmdbRelationsNeighbourscounts>;
};

/** aggregate fields of "cmdb_relations_neighbourscount" */
export type CmdbRelationsNeighbourscounts_Aggregate_Fields = {
  __typename?: 'cmdbRelationsNeighbourscounts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CmdbRelationsNeighbourscounts_Max_Fields>;
  min?: Maybe<CmdbRelationsNeighbourscounts_Min_Fields>;
};


/** aggregate fields of "cmdb_relations_neighbourscount" */
export type CmdbRelationsNeighbourscounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CmdbRelationsNeighbourscounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "cmdb_relations_neighbourscount". All fields are combined with a logical 'AND'. */
export type CmdbRelationsNeighbourscounts_Bool_Exp = {
  AS?: InputMaybe<Bigint_Comparison_Exp>;
  InfraSluzba?: InputMaybe<Bigint_Comparison_Exp>;
  KRIS?: InputMaybe<Bigint_Comparison_Exp>;
  Kontrakt?: InputMaybe<Bigint_Comparison_Exp>;
  OLA_Kontrakt?: InputMaybe<Bigint_Comparison_Exp>;
  PO?: InputMaybe<Bigint_Comparison_Exp>;
  Projekt?: InputMaybe<Bigint_Comparison_Exp>;
  _and?: InputMaybe<Array<CmdbRelationsNeighbourscounts_Bool_Exp>>;
  _not?: InputMaybe<CmdbRelationsNeighbourscounts_Bool_Exp>;
  _or?: InputMaybe<Array<CmdbRelationsNeighbourscounts_Bool_Exp>>;
  fk?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cmdb_relations_neighbourscount" */
export enum CmdbRelationsNeighbourscounts_Constraint {
  /** unique or primary key constraint on columns "fk" */
  CmdbRelationsNeighbourscountPkey = 'cmdb_relations_neighbourscount_pkey'
}

/** input type for inserting data into table "cmdb_relations_neighbourscount" */
export type CmdbRelationsNeighbourscounts_Insert_Input = {
  fk?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type CmdbRelationsNeighbourscounts_Max_Fields = {
  __typename?: 'cmdbRelationsNeighbourscounts_max_fields';
  fk?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type CmdbRelationsNeighbourscounts_Min_Fields = {
  __typename?: 'cmdbRelationsNeighbourscounts_min_fields';
  fk?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "cmdb_relations_neighbourscount" */
export type CmdbRelationsNeighbourscounts_Mutation_Response = {
  __typename?: 'cmdbRelationsNeighbourscounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CmdbRelationsNeighbourscounts>;
};

/** input type for inserting object relation for remote table "cmdb_relations_neighbourscount" */
export type CmdbRelationsNeighbourscounts_Obj_Rel_Insert_Input = {
  data: CmdbRelationsNeighbourscounts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<CmdbRelationsNeighbourscounts_On_Conflict>;
};

/** on_conflict condition type for table "cmdb_relations_neighbourscount" */
export type CmdbRelationsNeighbourscounts_On_Conflict = {
  constraint: CmdbRelationsNeighbourscounts_Constraint;
  update_columns?: Array<CmdbRelationsNeighbourscounts_Update_Column>;
  where?: InputMaybe<CmdbRelationsNeighbourscounts_Bool_Exp>;
};

/** Ordering options when selecting data from "cmdb_relations_neighbourscount". */
export type CmdbRelationsNeighbourscounts_Order_By = {
  AS?: InputMaybe<Order_By>;
  InfraSluzba?: InputMaybe<Order_By>;
  KRIS?: InputMaybe<Order_By>;
  Kontrakt?: InputMaybe<Order_By>;
  OLA_Kontrakt?: InputMaybe<Order_By>;
  PO?: InputMaybe<Order_By>;
  Projekt?: InputMaybe<Order_By>;
  fk?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cmdb_relations_neighbourscount */
export type CmdbRelationsNeighbourscounts_Pk_Columns_Input = {
  fk: Scalars['uuid'];
};

/** select columns of table "cmdb_relations_neighbourscount" */
export enum CmdbRelationsNeighbourscounts_Select_Column {
  /** column name */
  Fk = 'fk'
}

/** input type for updating data in table "cmdb_relations_neighbourscount" */
export type CmdbRelationsNeighbourscounts_Set_Input = {
  fk?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "cmdbRelationsNeighbourscounts" */
export type CmdbRelationsNeighbourscounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: CmdbRelationsNeighbourscounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type CmdbRelationsNeighbourscounts_Stream_Cursor_Value_Input = {
  fk?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "cmdb_relations_neighbourscount" */
export enum CmdbRelationsNeighbourscounts_Update_Column {
  /** column name */
  Fk = 'fk'
}

export type CmdbRelationsNeighbourscounts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CmdbRelationsNeighbourscounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: CmdbRelationsNeighbourscounts_Bool_Exp;
};

/** aggregated selection of "cmdb_relations" */
export type CmdbRelations_Aggregate = {
  __typename?: 'cmdbRelations_aggregate';
  aggregate?: Maybe<CmdbRelations_Aggregate_Fields>;
  nodes: Array<CmdbRelations>;
};

export type CmdbRelations_Aggregate_Bool_Exp = {
  count?: InputMaybe<CmdbRelations_Aggregate_Bool_Exp_Count>;
};

export type CmdbRelations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<CmdbRelations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<CmdbRelations_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cmdb_relations" */
export type CmdbRelations_Aggregate_Fields = {
  __typename?: 'cmdbRelations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CmdbRelations_Max_Fields>;
  min?: Maybe<CmdbRelations_Min_Fields>;
};


/** aggregate fields of "cmdb_relations" */
export type CmdbRelations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CmdbRelations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cmdb_relations" */
export type CmdbRelations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<CmdbRelations_Max_Order_By>;
  min?: InputMaybe<CmdbRelations_Min_Order_By>;
};

/** input type for inserting array relation for remote table "cmdb_relations" */
export type CmdbRelations_Arr_Rel_Insert_Input = {
  data: Array<CmdbRelations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<CmdbRelations_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cmdb_relations". All fields are combined with a logical 'AND'. */
export type CmdbRelations_Bool_Exp = {
  _and?: InputMaybe<Array<CmdbRelations_Bool_Exp>>;
  _not?: InputMaybe<CmdbRelations_Bool_Exp>;
  _or?: InputMaybe<Array<CmdbRelations_Bool_Exp>>;
  fk?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cmdb_relations" */
export enum CmdbRelations_Constraint {
  /** unique or primary key constraint on columns "uuid" */
  CmdbRelationsPkey = 'cmdb_relations_pkey'
}

/** input type for inserting data into table "cmdb_relations" */
export type CmdbRelations_Insert_Input = {
  fk?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type CmdbRelations_Max_Fields = {
  __typename?: 'cmdbRelations_max_fields';
  fk?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "cmdb_relations" */
export type CmdbRelations_Max_Order_By = {
  fk?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type CmdbRelations_Min_Fields = {
  __typename?: 'cmdbRelations_min_fields';
  fk?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "cmdb_relations" */
export type CmdbRelations_Min_Order_By = {
  fk?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cmdb_relations" */
export type CmdbRelations_Mutation_Response = {
  __typename?: 'cmdbRelations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CmdbRelations>;
};

/** on_conflict condition type for table "cmdb_relations" */
export type CmdbRelations_On_Conflict = {
  constraint: CmdbRelations_Constraint;
  update_columns?: Array<CmdbRelations_Update_Column>;
  where?: InputMaybe<CmdbRelations_Bool_Exp>;
};

/** Ordering options when selecting data from "cmdb_relations". */
export type CmdbRelations_Order_By = {
  fk?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cmdb_relations */
export type CmdbRelations_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "cmdb_relations" */
export enum CmdbRelations_Select_Column {
  /** column name */
  Fk = 'fk',
  /** column name */
  Type = 'type',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "cmdb_relations" */
export type CmdbRelations_Set_Input = {
  fk?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "cmdbRelations" */
export type CmdbRelations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: CmdbRelations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type CmdbRelations_Stream_Cursor_Value_Input = {
  fk?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "cmdb_relations" */
export enum CmdbRelations_Update_Column {
  /** column name */
  Fk = 'fk',
  /** column name */
  Type = 'type',
  /** column name */
  Uuid = 'uuid'
}

export type CmdbRelations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CmdbRelations_Set_Input>;
  /** filter the rows which have to be updated */
  where: CmdbRelations_Bool_Exp;
};

/** aggregated selection of "cmdb" */
export type Cmdb_Aggregate = {
  __typename?: 'cmdb_aggregate';
  aggregate?: Maybe<Cmdb_Aggregate_Fields>;
  nodes: Array<Cmdb>;
};

/** aggregate fields of "cmdb" */
export type Cmdb_Aggregate_Fields = {
  __typename?: 'cmdb_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cmdb_Max_Fields>;
  min?: Maybe<Cmdb_Min_Fields>;
};


/** aggregate fields of "cmdb" */
export type Cmdb_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cmdb_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "cmdb". All fields are combined with a logical 'AND'. */
export type Cmdb_Bool_Exp = {
  _and?: InputMaybe<Array<Cmdb_Bool_Exp>>;
  _not?: InputMaybe<Cmdb_Bool_Exp>;
  _or?: InputMaybe<Array<Cmdb_Bool_Exp>>;
  attributes?: InputMaybe<Attributes_Bool_Exp>;
  attributes_aggregate?: InputMaybe<Attributes_Aggregate_Bool_Exp>;
  cmdb_relations_neighbourscount?: InputMaybe<CmdbRelationsNeighbourscounts_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  manager?: InputMaybe<String_Comparison_Exp>;
  metaIS_code?: InputMaybe<String_Comparison_Exp>;
  name_of_information_system?: InputMaybe<String_Comparison_Exp>;
  reference_identifier?: InputMaybe<String_Comparison_Exp>;
  relations?: InputMaybe<CmdbRelations_Bool_Exp>;
  relations_aggregate?: InputMaybe<CmdbRelations_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cmdb" */
export enum Cmdb_Constraint {
  /** unique or primary key constraint on columns "uuid" */
  CmdbPkey = 'cmdb_pkey'
}

/** input type for inserting data into table "cmdb" */
export type Cmdb_Insert_Input = {
  attributes?: InputMaybe<Attributes_Arr_Rel_Insert_Input>;
  cmdb_relations_neighbourscount?: InputMaybe<CmdbRelationsNeighbourscounts_Obj_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['String']>;
  metaIS_code?: InputMaybe<Scalars['String']>;
  name_of_information_system?: InputMaybe<Scalars['String']>;
  reference_identifier?: InputMaybe<Scalars['String']>;
  relations?: InputMaybe<CmdbRelations_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Cmdb_Max_Fields = {
  __typename?: 'cmdb_max_fields';
  description?: Maybe<Scalars['String']>;
  manager?: Maybe<Scalars['String']>;
  metaIS_code?: Maybe<Scalars['String']>;
  name_of_information_system?: Maybe<Scalars['String']>;
  reference_identifier?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Cmdb_Min_Fields = {
  __typename?: 'cmdb_min_fields';
  description?: Maybe<Scalars['String']>;
  manager?: Maybe<Scalars['String']>;
  metaIS_code?: Maybe<Scalars['String']>;
  name_of_information_system?: Maybe<Scalars['String']>;
  reference_identifier?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "cmdb" */
export type Cmdb_Mutation_Response = {
  __typename?: 'cmdb_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cmdb>;
};

/** input type for inserting object relation for remote table "cmdb" */
export type Cmdb_Obj_Rel_Insert_Input = {
  data: Cmdb_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cmdb_On_Conflict>;
};

/** on_conflict condition type for table "cmdb" */
export type Cmdb_On_Conflict = {
  constraint: Cmdb_Constraint;
  update_columns?: Array<Cmdb_Update_Column>;
  where?: InputMaybe<Cmdb_Bool_Exp>;
};

/** Ordering options when selecting data from "cmdb". */
export type Cmdb_Order_By = {
  attributes_aggregate?: InputMaybe<Attributes_Aggregate_Order_By>;
  cmdb_relations_neighbourscount?: InputMaybe<CmdbRelationsNeighbourscounts_Order_By>;
  description?: InputMaybe<Order_By>;
  manager?: InputMaybe<Order_By>;
  metaIS_code?: InputMaybe<Order_By>;
  name_of_information_system?: InputMaybe<Order_By>;
  reference_identifier?: InputMaybe<Order_By>;
  relations_aggregate?: InputMaybe<CmdbRelations_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cmdb */
export type Cmdb_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "cmdb" */
export enum Cmdb_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Manager = 'manager',
  /** column name */
  MetaIsCode = 'metaIS_code',
  /** column name */
  NameOfInformationSystem = 'name_of_information_system',
  /** column name */
  ReferenceIdentifier = 'reference_identifier',
  /** column name */
  Type = 'type',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "cmdb" */
export type Cmdb_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['String']>;
  metaIS_code?: InputMaybe<Scalars['String']>;
  name_of_information_system?: InputMaybe<Scalars['String']>;
  reference_identifier?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "cmdb" */
export type Cmdb_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cmdb_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cmdb_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['String']>;
  metaIS_code?: InputMaybe<Scalars['String']>;
  name_of_information_system?: InputMaybe<Scalars['String']>;
  reference_identifier?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "cmdb" */
export enum Cmdb_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Manager = 'manager',
  /** column name */
  MetaIsCode = 'metaIS_code',
  /** column name */
  NameOfInformationSystem = 'name_of_information_system',
  /** column name */
  ReferenceIdentifier = 'reference_identifier',
  /** column name */
  Type = 'type',
  /** column name */
  Uuid = 'uuid'
}

export type Cmdb_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cmdb_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cmdb_Bool_Exp;
};

/** columns and relationships of "configurationItems" */
export type ConfigurationItems = {
  __typename?: 'configurationItems';
  /** An array relationship */
  attributes: Array<Attributes>;
  /** An aggregate relationship */
  attributes_aggregate: Attributes_Aggregate;
  metaAttributes_fk?: Maybe<Scalars['uuid']>;
  type: Scalars['String'];
  uuid: Scalars['uuid'];
};


/** columns and relationships of "configurationItems" */
export type ConfigurationItemsAttributesArgs = {
  distinct_on?: InputMaybe<Array<Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attributes_Order_By>>;
  where?: InputMaybe<Attributes_Bool_Exp>;
};


/** columns and relationships of "configurationItems" */
export type ConfigurationItemsAttributes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attributes_Order_By>>;
  where?: InputMaybe<Attributes_Bool_Exp>;
};

/** aggregated selection of "configurationItems" */
export type ConfigurationItems_Aggregate = {
  __typename?: 'configurationItems_aggregate';
  aggregate?: Maybe<ConfigurationItems_Aggregate_Fields>;
  nodes: Array<ConfigurationItems>;
};

/** aggregate fields of "configurationItems" */
export type ConfigurationItems_Aggregate_Fields = {
  __typename?: 'configurationItems_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ConfigurationItems_Max_Fields>;
  min?: Maybe<ConfigurationItems_Min_Fields>;
};


/** aggregate fields of "configurationItems" */
export type ConfigurationItems_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ConfigurationItems_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "configurationItems". All fields are combined with a logical 'AND'. */
export type ConfigurationItems_Bool_Exp = {
  _and?: InputMaybe<Array<ConfigurationItems_Bool_Exp>>;
  _not?: InputMaybe<ConfigurationItems_Bool_Exp>;
  _or?: InputMaybe<Array<ConfigurationItems_Bool_Exp>>;
  attributes?: InputMaybe<Attributes_Bool_Exp>;
  attributes_aggregate?: InputMaybe<Attributes_Aggregate_Bool_Exp>;
  metaAttributes_fk?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "configurationItems" */
export enum ConfigurationItems_Constraint {
  /** unique or primary key constraint on columns "uuid" */
  ConfigurationItemsPkey = 'configurationItems_pkey'
}

/** input type for inserting data into table "configurationItems" */
export type ConfigurationItems_Insert_Input = {
  attributes?: InputMaybe<Attributes_Arr_Rel_Insert_Input>;
  metaAttributes_fk?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type ConfigurationItems_Max_Fields = {
  __typename?: 'configurationItems_max_fields';
  metaAttributes_fk?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type ConfigurationItems_Min_Fields = {
  __typename?: 'configurationItems_min_fields';
  metaAttributes_fk?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "configurationItems" */
export type ConfigurationItems_Mutation_Response = {
  __typename?: 'configurationItems_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ConfigurationItems>;
};

/** input type for inserting object relation for remote table "configurationItems" */
export type ConfigurationItems_Obj_Rel_Insert_Input = {
  data: ConfigurationItems_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<ConfigurationItems_On_Conflict>;
};

/** on_conflict condition type for table "configurationItems" */
export type ConfigurationItems_On_Conflict = {
  constraint: ConfigurationItems_Constraint;
  update_columns?: Array<ConfigurationItems_Update_Column>;
  where?: InputMaybe<ConfigurationItems_Bool_Exp>;
};

/** Ordering options when selecting data from "configurationItems". */
export type ConfigurationItems_Order_By = {
  attributes_aggregate?: InputMaybe<Attributes_Aggregate_Order_By>;
  metaAttributes_fk?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: configurationItems */
export type ConfigurationItems_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "configurationItems" */
export enum ConfigurationItems_Select_Column {
  /** column name */
  MetaAttributesFk = 'metaAttributes_fk',
  /** column name */
  Type = 'type',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "configurationItems" */
export type ConfigurationItems_Set_Input = {
  metaAttributes_fk?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "configurationItems" */
export type ConfigurationItems_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ConfigurationItems_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ConfigurationItems_Stream_Cursor_Value_Input = {
  metaAttributes_fk?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "configurationItems" */
export enum ConfigurationItems_Update_Column {
  /** column name */
  MetaAttributesFk = 'metaAttributes_fk',
  /** column name */
  Type = 'type',
  /** column name */
  Uuid = 'uuid'
}

export type ConfigurationItems_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ConfigurationItems_Set_Input>;
  /** filter the rows which have to be updated */
  where: ConfigurationItems_Bool_Exp;
};

/** columns and relationships of "contracts" */
export type Contracts = {
  __typename?: 'contracts';
  appliesEndAt?: Maybe<Scalars['date']>;
  appliesStartAt?: Maybe<Scalars['date']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  department?: Maybe<Departments>;
  department_id?: Maybe<Scalars['uuid']>;
  id: Scalars['Int'];
  organization_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  organizationsNI?: Maybe<OrganizationsNis>;
  /** An object relationship */
  practicioner?: Maybe<Practicioners>;
  practicioner_id?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "contracts" */
export type Contracts_Aggregate = {
  __typename?: 'contracts_aggregate';
  aggregate?: Maybe<Contracts_Aggregate_Fields>;
  nodes: Array<Contracts>;
};

/** aggregate fields of "contracts" */
export type Contracts_Aggregate_Fields = {
  __typename?: 'contracts_aggregate_fields';
  avg?: Maybe<Contracts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Contracts_Max_Fields>;
  min?: Maybe<Contracts_Min_Fields>;
  stddev?: Maybe<Contracts_Stddev_Fields>;
  stddev_pop?: Maybe<Contracts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contracts_Stddev_Samp_Fields>;
  sum?: Maybe<Contracts_Sum_Fields>;
  var_pop?: Maybe<Contracts_Var_Pop_Fields>;
  var_samp?: Maybe<Contracts_Var_Samp_Fields>;
  variance?: Maybe<Contracts_Variance_Fields>;
};


/** aggregate fields of "contracts" */
export type Contracts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contracts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Contracts_Avg_Fields = {
  __typename?: 'contracts_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "contracts". All fields are combined with a logical 'AND'. */
export type Contracts_Bool_Exp = {
  _and?: InputMaybe<Array<Contracts_Bool_Exp>>;
  _not?: InputMaybe<Contracts_Bool_Exp>;
  _or?: InputMaybe<Array<Contracts_Bool_Exp>>;
  appliesEndAt?: InputMaybe<Date_Comparison_Exp>;
  appliesStartAt?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  department?: InputMaybe<Departments_Bool_Exp>;
  department_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  organizationsNI?: InputMaybe<OrganizationsNis_Bool_Exp>;
  practicioner?: InputMaybe<Practicioners_Bool_Exp>;
  practicioner_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "contracts" */
export enum Contracts_Constraint {
  /** unique or primary key constraint on columns "department_id", "organization_id", "practicioner_id" */
  ContractsOrganizationIdPracticionerIdDepartmentIdKey = 'contracts_organization_id_practicioner_id_department_id_key',
  /** unique or primary key constraint on columns "id" */
  ContractsPkey = 'contracts_pkey'
}

/** input type for incrementing numeric columns in table "contracts" */
export type Contracts_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "contracts" */
export type Contracts_Insert_Input = {
  appliesEndAt?: InputMaybe<Scalars['date']>;
  appliesStartAt?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  department?: InputMaybe<Departments_Obj_Rel_Insert_Input>;
  department_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['Int']>;
  organization_id?: InputMaybe<Scalars['uuid']>;
  organizationsNI?: InputMaybe<OrganizationsNis_Obj_Rel_Insert_Input>;
  practicioner?: InputMaybe<Practicioners_Obj_Rel_Insert_Input>;
  practicioner_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Contracts_Max_Fields = {
  __typename?: 'contracts_max_fields';
  appliesEndAt?: Maybe<Scalars['date']>;
  appliesStartAt?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  department_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['uuid']>;
  practicioner_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Contracts_Min_Fields = {
  __typename?: 'contracts_min_fields';
  appliesEndAt?: Maybe<Scalars['date']>;
  appliesStartAt?: Maybe<Scalars['date']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  department_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['uuid']>;
  practicioner_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "contracts" */
export type Contracts_Mutation_Response = {
  __typename?: 'contracts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Contracts>;
};

/** on_conflict condition type for table "contracts" */
export type Contracts_On_Conflict = {
  constraint: Contracts_Constraint;
  update_columns?: Array<Contracts_Update_Column>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** Ordering options when selecting data from "contracts". */
export type Contracts_Order_By = {
  appliesEndAt?: InputMaybe<Order_By>;
  appliesStartAt?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  department?: InputMaybe<Departments_Order_By>;
  department_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  organizationsNI?: InputMaybe<OrganizationsNis_Order_By>;
  practicioner?: InputMaybe<Practicioners_Order_By>;
  practicioner_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contracts */
export type Contracts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "contracts" */
export enum Contracts_Select_Column {
  /** column name */
  AppliesEndAt = 'appliesEndAt',
  /** column name */
  AppliesStartAt = 'appliesStartAt',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentId = 'department_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  PracticionerId = 'practicioner_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "contracts" */
export type Contracts_Set_Input = {
  appliesEndAt?: InputMaybe<Scalars['date']>;
  appliesStartAt?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  department_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['Int']>;
  organization_id?: InputMaybe<Scalars['uuid']>;
  practicioner_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Contracts_Stddev_Fields = {
  __typename?: 'contracts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Contracts_Stddev_Pop_Fields = {
  __typename?: 'contracts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Contracts_Stddev_Samp_Fields = {
  __typename?: 'contracts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "contracts" */
export type Contracts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contracts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contracts_Stream_Cursor_Value_Input = {
  appliesEndAt?: InputMaybe<Scalars['date']>;
  appliesStartAt?: InputMaybe<Scalars['date']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  department_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['Int']>;
  organization_id?: InputMaybe<Scalars['uuid']>;
  practicioner_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Contracts_Sum_Fields = {
  __typename?: 'contracts_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "contracts" */
export enum Contracts_Update_Column {
  /** column name */
  AppliesEndAt = 'appliesEndAt',
  /** column name */
  AppliesStartAt = 'appliesStartAt',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentId = 'department_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  PracticionerId = 'practicioner_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Contracts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Contracts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contracts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contracts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Contracts_Var_Pop_Fields = {
  __typename?: 'contracts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Contracts_Var_Samp_Fields = {
  __typename?: 'contracts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Contracts_Variance_Fields = {
  __typename?: 'contracts_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Enum table for customer types */
export type Customer_Types = {
  __typename?: 'customer_types';
  /** An array relationship */
  customers: Array<Customers>;
  /** An aggregate relationship */
  customers_aggregate: Customers_Aggregate;
  type: Scalars['String'];
};


/** Enum table for customer types */
export type Customer_TypesCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


/** Enum table for customer types */
export type Customer_TypesCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** aggregated selection of "customer_types" */
export type Customer_Types_Aggregate = {
  __typename?: 'customer_types_aggregate';
  aggregate?: Maybe<Customer_Types_Aggregate_Fields>;
  nodes: Array<Customer_Types>;
};

/** aggregate fields of "customer_types" */
export type Customer_Types_Aggregate_Fields = {
  __typename?: 'customer_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customer_Types_Max_Fields>;
  min?: Maybe<Customer_Types_Min_Fields>;
};


/** aggregate fields of "customer_types" */
export type Customer_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customer_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "customer_types". All fields are combined with a logical 'AND'. */
export type Customer_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Customer_Types_Bool_Exp>>;
  _not?: InputMaybe<Customer_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Customer_Types_Bool_Exp>>;
  customers?: InputMaybe<Customers_Bool_Exp>;
  customers_aggregate?: InputMaybe<Customers_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer_types" */
export enum Customer_Types_Constraint {
  /** unique or primary key constraint on columns "type" */
  CustomerTypesPkey = 'customer_types_pkey'
}

export enum Customer_Types_Enum {
  Company = 'Company',
  Employee = 'Employee',
  Individual = 'Individual'
}

/** Boolean expression to compare columns of type "customer_types_enum". All fields are combined with logical 'AND'. */
export type Customer_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Customer_Types_Enum>;
  _in?: InputMaybe<Array<Customer_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Customer_Types_Enum>;
  _nin?: InputMaybe<Array<Customer_Types_Enum>>;
};

/** input type for inserting data into table "customer_types" */
export type Customer_Types_Insert_Input = {
  customers?: InputMaybe<Customers_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Customer_Types_Max_Fields = {
  __typename?: 'customer_types_max_fields';
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Customer_Types_Min_Fields = {
  __typename?: 'customer_types_min_fields';
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "customer_types" */
export type Customer_Types_Mutation_Response = {
  __typename?: 'customer_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customer_Types>;
};

/** input type for inserting object relation for remote table "customer_types" */
export type Customer_Types_Obj_Rel_Insert_Input = {
  data: Customer_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customer_Types_On_Conflict>;
};

/** on_conflict condition type for table "customer_types" */
export type Customer_Types_On_Conflict = {
  constraint: Customer_Types_Constraint;
  update_columns?: Array<Customer_Types_Update_Column>;
  where?: InputMaybe<Customer_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "customer_types". */
export type Customer_Types_Order_By = {
  customers_aggregate?: InputMaybe<Customers_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customer_types */
export type Customer_Types_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "customer_types" */
export enum Customer_Types_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "customer_types" */
export type Customer_Types_Set_Input = {
  type?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "customer_types" */
export type Customer_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customer_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_Types_Stream_Cursor_Value_Input = {
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "customer_types" */
export enum Customer_Types_Update_Column {
  /** column name */
  Type = 'type'
}

export type Customer_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customer_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Customer_Types_Bool_Exp;
};

/** List of customers */
export type Customers = {
  __typename?: 'customers';
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  customer_type?: Maybe<Customer_Types>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  logoImgPath?: Maybe<Scalars['String']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  organizationId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  organizationn?: Maybe<Organizations>;
  phone?: Maybe<Scalars['String']>;
  signedLogoImgPath?: Maybe<GetUrlReturn>;
  /** An array relationship */
  theOrderses: Array<Orders>;
  /** An aggregate relationship */
  theOrderses_aggregate: Orders_Aggregate;
  type?: Maybe<Customer_Types_Enum>;
  updatedAt: Scalars['timestamptz'];
  vip?: Maybe<Scalars['Boolean']>;
};


/** List of customers */
export type CustomersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** List of customers */
export type CustomersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** List of customers */
export type CustomersTheOrdersesArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** List of customers */
export type CustomersTheOrderses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

export type Customers_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Customers_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Customers_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Customers_Aggregate_Bool_Exp_Count>;
};

export type Customers_Aggregate_Bool_Exp_Bool_And = {
  arguments: Customers_Select_Column_Customers_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Customers_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Customers_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Customers_Select_Column_Customers_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Customers_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Customers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Customers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "customers" */
export type Customers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Customers_Max_Order_By>;
  min?: InputMaybe<Customers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "customers" */
export type Customers_Arr_Rel_Insert_Input = {
  data: Array<Customers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer_type?: InputMaybe<Customer_Types_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  logoImgPath?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  organizationId?: InputMaybe<Uuid_Comparison_Exp>;
  organizationn?: InputMaybe<Organizations_Bool_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  theOrderses?: InputMaybe<Orders_Bool_Exp>;
  theOrderses_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  type?: InputMaybe<Customer_Types_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  vip?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint on columns "id" */
  CustomersPkey = 'customers_pkey'
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customer_type?: InputMaybe<Customer_Types_Obj_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  logoImgPath?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  organizationn?: InputMaybe<Organizations_Obj_Rel_Insert_Input>;
  phone?: InputMaybe<Scalars['String']>;
  theOrderses?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Customer_Types_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  logoImgPath?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['uuid']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "customers" */
export type Customers_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  logoImgPath?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  logoImgPath?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['uuid']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "customers" */
export type Customers_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  logoImgPath?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  address?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  customer_type?: InputMaybe<Customer_Types_Order_By>;
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  logoImgPath?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  organizationId?: InputMaybe<Order_By>;
  organizationn?: InputMaybe<Organizations_Order_By>;
  phone?: InputMaybe<Order_By>;
  theOrderses_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  vip?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  LastName = 'lastName',
  /** column name */
  LogoImgPath = 'logoImgPath',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Phone = 'phone',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Vip = 'vip'
}

/** select "customers_aggregate_bool_exp_bool_and_arguments_columns" columns of table "customers" */
export enum Customers_Select_Column_Customers_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Vip = 'vip'
}

/** select "customers_aggregate_bool_exp_bool_or_arguments_columns" columns of table "customers" */
export enum Customers_Select_Column_Customers_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Vip = 'vip'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  logoImgPath?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  phone?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Customer_Types_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** Streaming cursor of the table "customers" */
export type Customers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customers_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  logoImgPath?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  phone?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Customer_Types_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  LastName = 'lastName',
  /** column name */
  LogoImgPath = 'logoImgPath',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Phone = 'phone',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Vip = 'vip'
}

export type Customers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Customers_Bool_Exp;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "departments" */
export type Departments = {
  __typename?: 'departments';
  created_at: Scalars['timestamptz'];
  department_code: Scalars['String'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "departments" */
export type Departments_Aggregate = {
  __typename?: 'departments_aggregate';
  aggregate?: Maybe<Departments_Aggregate_Fields>;
  nodes: Array<Departments>;
};

/** aggregate fields of "departments" */
export type Departments_Aggregate_Fields = {
  __typename?: 'departments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Departments_Max_Fields>;
  min?: Maybe<Departments_Min_Fields>;
};


/** aggregate fields of "departments" */
export type Departments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Departments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "departments". All fields are combined with a logical 'AND'. */
export type Departments_Bool_Exp = {
  _and?: InputMaybe<Array<Departments_Bool_Exp>>;
  _not?: InputMaybe<Departments_Bool_Exp>;
  _or?: InputMaybe<Array<Departments_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  department_code?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "departments" */
export enum Departments_Constraint {
  /** unique or primary key constraint on columns "department_code" */
  DepartmentsDepartmentCodeKey = 'departments_department_code_key',
  /** unique or primary key constraint on columns "id" */
  DepartmentsPkey = 'departments_pkey'
}

/** input type for inserting data into table "departments" */
export type Departments_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  department_code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Departments_Max_Fields = {
  __typename?: 'departments_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  department_code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Departments_Min_Fields = {
  __typename?: 'departments_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  department_code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "departments" */
export type Departments_Mutation_Response = {
  __typename?: 'departments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Departments>;
};

/** input type for inserting object relation for remote table "departments" */
export type Departments_Obj_Rel_Insert_Input = {
  data: Departments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Departments_On_Conflict>;
};

/** on_conflict condition type for table "departments" */
export type Departments_On_Conflict = {
  constraint: Departments_Constraint;
  update_columns?: Array<Departments_Update_Column>;
  where?: InputMaybe<Departments_Bool_Exp>;
};

/** Ordering options when selecting data from "departments". */
export type Departments_Order_By = {
  created_at?: InputMaybe<Order_By>;
  department_code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: departments */
export type Departments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "departments" */
export enum Departments_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentCode = 'department_code',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "departments" */
export type Departments_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  department_code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "departments" */
export type Departments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Departments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Departments_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  department_code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "departments" */
export enum Departments_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DepartmentCode = 'department_code',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Departments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Departments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Departments_Bool_Exp;
};

/** for dashboard testing purposes only */
export type Desh = {
  __typename?: 'desh';
  budget: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  desh_products: Array<Desh_Products>;
  /** An aggregate relationship */
  desh_products_aggregate: Desh_Products_Aggregate;
  /** An array relationship */
  desh_sales: Array<Desh_Sales>;
  /** An aggregate relationship */
  desh_sales_aggregate: Desh_Sales_Aggregate;
  /** An array relationship */
  desh_traffics: Array<Desh_Traffic>;
  /** An aggregate relationship */
  desh_traffics_aggregate: Desh_Traffic_Aggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
  no_of_customers: Scalars['Int'];
  profit: Scalars['Int'];
  task_progress: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


/** for dashboard testing purposes only */
export type DeshDesh_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Desh_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Products_Order_By>>;
  where?: InputMaybe<Desh_Products_Bool_Exp>;
};


/** for dashboard testing purposes only */
export type DeshDesh_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Desh_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Products_Order_By>>;
  where?: InputMaybe<Desh_Products_Bool_Exp>;
};


/** for dashboard testing purposes only */
export type DeshDesh_SalesArgs = {
  distinct_on?: InputMaybe<Array<Desh_Sales_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Sales_Order_By>>;
  where?: InputMaybe<Desh_Sales_Bool_Exp>;
};


/** for dashboard testing purposes only */
export type DeshDesh_Sales_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Desh_Sales_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Sales_Order_By>>;
  where?: InputMaybe<Desh_Sales_Bool_Exp>;
};


/** for dashboard testing purposes only */
export type DeshDesh_TrafficsArgs = {
  distinct_on?: InputMaybe<Array<Desh_Traffic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Traffic_Order_By>>;
  where?: InputMaybe<Desh_Traffic_Bool_Exp>;
};


/** for dashboard testing purposes only */
export type DeshDesh_Traffics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Desh_Traffic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Traffic_Order_By>>;
  where?: InputMaybe<Desh_Traffic_Bool_Exp>;
};

/** aggregated selection of "desh" */
export type Desh_Aggregate = {
  __typename?: 'desh_aggregate';
  aggregate?: Maybe<Desh_Aggregate_Fields>;
  nodes: Array<Desh>;
};

/** aggregate fields of "desh" */
export type Desh_Aggregate_Fields = {
  __typename?: 'desh_aggregate_fields';
  avg?: Maybe<Desh_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Desh_Max_Fields>;
  min?: Maybe<Desh_Min_Fields>;
  stddev?: Maybe<Desh_Stddev_Fields>;
  stddev_pop?: Maybe<Desh_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Desh_Stddev_Samp_Fields>;
  sum?: Maybe<Desh_Sum_Fields>;
  var_pop?: Maybe<Desh_Var_Pop_Fields>;
  var_samp?: Maybe<Desh_Var_Samp_Fields>;
  variance?: Maybe<Desh_Variance_Fields>;
};


/** aggregate fields of "desh" */
export type Desh_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Desh_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Desh_Avg_Fields = {
  __typename?: 'desh_avg_fields';
  budget?: Maybe<Scalars['Float']>;
  no_of_customers?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  task_progress?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "desh". All fields are combined with a logical 'AND'. */
export type Desh_Bool_Exp = {
  _and?: InputMaybe<Array<Desh_Bool_Exp>>;
  _not?: InputMaybe<Desh_Bool_Exp>;
  _or?: InputMaybe<Array<Desh_Bool_Exp>>;
  budget?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  desh_products?: InputMaybe<Desh_Products_Bool_Exp>;
  desh_products_aggregate?: InputMaybe<Desh_Products_Aggregate_Bool_Exp>;
  desh_sales?: InputMaybe<Desh_Sales_Bool_Exp>;
  desh_sales_aggregate?: InputMaybe<Desh_Sales_Aggregate_Bool_Exp>;
  desh_traffics?: InputMaybe<Desh_Traffic_Bool_Exp>;
  desh_traffics_aggregate?: InputMaybe<Desh_Traffic_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  no_of_customers?: InputMaybe<Int_Comparison_Exp>;
  profit?: InputMaybe<Int_Comparison_Exp>;
  task_progress?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "desh" */
export enum Desh_Constraint {
  /** unique or primary key constraint on columns "id" */
  DashPkey = 'dash_pkey'
}

/** input type for incrementing numeric columns in table "desh" */
export type Desh_Inc_Input = {
  budget?: InputMaybe<Scalars['Int']>;
  no_of_customers?: InputMaybe<Scalars['Int']>;
  profit?: InputMaybe<Scalars['Int']>;
  task_progress?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "desh" */
export type Desh_Insert_Input = {
  budget?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  desh_products?: InputMaybe<Desh_Products_Arr_Rel_Insert_Input>;
  desh_sales?: InputMaybe<Desh_Sales_Arr_Rel_Insert_Input>;
  desh_traffics?: InputMaybe<Desh_Traffic_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  no_of_customers?: InputMaybe<Scalars['Int']>;
  profit?: InputMaybe<Scalars['Int']>;
  task_progress?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Desh_Max_Fields = {
  __typename?: 'desh_max_fields';
  budget?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  no_of_customers?: Maybe<Scalars['Int']>;
  profit?: Maybe<Scalars['Int']>;
  task_progress?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Desh_Min_Fields = {
  __typename?: 'desh_min_fields';
  budget?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  no_of_customers?: Maybe<Scalars['Int']>;
  profit?: Maybe<Scalars['Int']>;
  task_progress?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "desh" */
export type Desh_Mutation_Response = {
  __typename?: 'desh_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Desh>;
};

/** input type for inserting object relation for remote table "desh" */
export type Desh_Obj_Rel_Insert_Input = {
  data: Desh_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Desh_On_Conflict>;
};

/** on_conflict condition type for table "desh" */
export type Desh_On_Conflict = {
  constraint: Desh_Constraint;
  update_columns?: Array<Desh_Update_Column>;
  where?: InputMaybe<Desh_Bool_Exp>;
};

/** Ordering options when selecting data from "desh". */
export type Desh_Order_By = {
  budget?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  desh_products_aggregate?: InputMaybe<Desh_Products_Aggregate_Order_By>;
  desh_sales_aggregate?: InputMaybe<Desh_Sales_Aggregate_Order_By>;
  desh_traffics_aggregate?: InputMaybe<Desh_Traffic_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  no_of_customers?: InputMaybe<Order_By>;
  profit?: InputMaybe<Order_By>;
  task_progress?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: desh */
export type Desh_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "desh_products" */
export type Desh_Products = {
  __typename?: 'desh_products';
  created_at: Scalars['timestamptz'];
  dash_id: Scalars['uuid'];
  /** An object relationship */
  desh: Desh;
  id: Scalars['uuid'];
  logo_path: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "desh_products" */
export type Desh_Products_Aggregate = {
  __typename?: 'desh_products_aggregate';
  aggregate?: Maybe<Desh_Products_Aggregate_Fields>;
  nodes: Array<Desh_Products>;
};

export type Desh_Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Desh_Products_Aggregate_Bool_Exp_Count>;
};

export type Desh_Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Desh_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Desh_Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "desh_products" */
export type Desh_Products_Aggregate_Fields = {
  __typename?: 'desh_products_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Desh_Products_Max_Fields>;
  min?: Maybe<Desh_Products_Min_Fields>;
};


/** aggregate fields of "desh_products" */
export type Desh_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Desh_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "desh_products" */
export type Desh_Products_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Desh_Products_Max_Order_By>;
  min?: InputMaybe<Desh_Products_Min_Order_By>;
};

/** input type for inserting array relation for remote table "desh_products" */
export type Desh_Products_Arr_Rel_Insert_Input = {
  data: Array<Desh_Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Desh_Products_On_Conflict>;
};

/** Boolean expression to filter rows from the table "desh_products". All fields are combined with a logical 'AND'. */
export type Desh_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Desh_Products_Bool_Exp>>;
  _not?: InputMaybe<Desh_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Desh_Products_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dash_id?: InputMaybe<Uuid_Comparison_Exp>;
  desh?: InputMaybe<Desh_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  logo_path?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "desh_products" */
export enum Desh_Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  DashProductsPkey = 'dash_products_pkey'
}

/** input type for inserting data into table "desh_products" */
export type Desh_Products_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dash_id?: InputMaybe<Scalars['uuid']>;
  desh?: InputMaybe<Desh_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  logo_path?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Desh_Products_Max_Fields = {
  __typename?: 'desh_products_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dash_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  logo_path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "desh_products" */
export type Desh_Products_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dash_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo_path?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Desh_Products_Min_Fields = {
  __typename?: 'desh_products_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dash_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  logo_path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "desh_products" */
export type Desh_Products_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dash_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logo_path?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "desh_products" */
export type Desh_Products_Mutation_Response = {
  __typename?: 'desh_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Desh_Products>;
};

/** on_conflict condition type for table "desh_products" */
export type Desh_Products_On_Conflict = {
  constraint: Desh_Products_Constraint;
  update_columns?: Array<Desh_Products_Update_Column>;
  where?: InputMaybe<Desh_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "desh_products". */
export type Desh_Products_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dash_id?: InputMaybe<Order_By>;
  desh?: InputMaybe<Desh_Order_By>;
  id?: InputMaybe<Order_By>;
  logo_path?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: desh_products */
export type Desh_Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "desh_products" */
export enum Desh_Products_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DashId = 'dash_id',
  /** column name */
  Id = 'id',
  /** column name */
  LogoPath = 'logo_path',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "desh_products" */
export type Desh_Products_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dash_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  logo_path?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "desh_products" */
export type Desh_Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Desh_Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Desh_Products_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dash_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  logo_path?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "desh_products" */
export enum Desh_Products_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DashId = 'dash_id',
  /** column name */
  Id = 'id',
  /** column name */
  LogoPath = 'logo_path',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Desh_Products_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Desh_Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Desh_Products_Bool_Exp;
};

/** columns and relationships of "desh_sales" */
export type Desh_Sales = {
  __typename?: 'desh_sales';
  created_at: Scalars['timestamptz'];
  dash_id: Scalars['uuid'];
  /** An object relationship */
  desh: Desh;
  id: Scalars['uuid'];
  last_year: Scalars['Int'];
  sales: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "desh_sales" */
export type Desh_Sales_Aggregate = {
  __typename?: 'desh_sales_aggregate';
  aggregate?: Maybe<Desh_Sales_Aggregate_Fields>;
  nodes: Array<Desh_Sales>;
};

export type Desh_Sales_Aggregate_Bool_Exp = {
  count?: InputMaybe<Desh_Sales_Aggregate_Bool_Exp_Count>;
};

export type Desh_Sales_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Desh_Sales_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Desh_Sales_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "desh_sales" */
export type Desh_Sales_Aggregate_Fields = {
  __typename?: 'desh_sales_aggregate_fields';
  avg?: Maybe<Desh_Sales_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Desh_Sales_Max_Fields>;
  min?: Maybe<Desh_Sales_Min_Fields>;
  stddev?: Maybe<Desh_Sales_Stddev_Fields>;
  stddev_pop?: Maybe<Desh_Sales_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Desh_Sales_Stddev_Samp_Fields>;
  sum?: Maybe<Desh_Sales_Sum_Fields>;
  var_pop?: Maybe<Desh_Sales_Var_Pop_Fields>;
  var_samp?: Maybe<Desh_Sales_Var_Samp_Fields>;
  variance?: Maybe<Desh_Sales_Variance_Fields>;
};


/** aggregate fields of "desh_sales" */
export type Desh_Sales_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Desh_Sales_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "desh_sales" */
export type Desh_Sales_Aggregate_Order_By = {
  avg?: InputMaybe<Desh_Sales_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Desh_Sales_Max_Order_By>;
  min?: InputMaybe<Desh_Sales_Min_Order_By>;
  stddev?: InputMaybe<Desh_Sales_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Desh_Sales_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Desh_Sales_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Desh_Sales_Sum_Order_By>;
  var_pop?: InputMaybe<Desh_Sales_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Desh_Sales_Var_Samp_Order_By>;
  variance?: InputMaybe<Desh_Sales_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "desh_sales" */
export type Desh_Sales_Arr_Rel_Insert_Input = {
  data: Array<Desh_Sales_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Desh_Sales_On_Conflict>;
};

/** aggregate avg on columns */
export type Desh_Sales_Avg_Fields = {
  __typename?: 'desh_sales_avg_fields';
  last_year?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "desh_sales" */
export type Desh_Sales_Avg_Order_By = {
  last_year?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "desh_sales". All fields are combined with a logical 'AND'. */
export type Desh_Sales_Bool_Exp = {
  _and?: InputMaybe<Array<Desh_Sales_Bool_Exp>>;
  _not?: InputMaybe<Desh_Sales_Bool_Exp>;
  _or?: InputMaybe<Array<Desh_Sales_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dash_id?: InputMaybe<Uuid_Comparison_Exp>;
  desh?: InputMaybe<Desh_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_year?: InputMaybe<Int_Comparison_Exp>;
  sales?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "desh_sales" */
export enum Desh_Sales_Constraint {
  /** unique or primary key constraint on columns "id" */
  DashSalesIdKey = 'dash_sales_id_key',
  /** unique or primary key constraint on columns "id" */
  DashSalesPkey = 'dash_sales_pkey'
}

/** input type for incrementing numeric columns in table "desh_sales" */
export type Desh_Sales_Inc_Input = {
  last_year?: InputMaybe<Scalars['Int']>;
  sales?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "desh_sales" */
export type Desh_Sales_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dash_id?: InputMaybe<Scalars['uuid']>;
  desh?: InputMaybe<Desh_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  last_year?: InputMaybe<Scalars['Int']>;
  sales?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Desh_Sales_Max_Fields = {
  __typename?: 'desh_sales_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dash_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  last_year?: Maybe<Scalars['Int']>;
  sales?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "desh_sales" */
export type Desh_Sales_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dash_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_year?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Desh_Sales_Min_Fields = {
  __typename?: 'desh_sales_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dash_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  last_year?: Maybe<Scalars['Int']>;
  sales?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "desh_sales" */
export type Desh_Sales_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dash_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_year?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "desh_sales" */
export type Desh_Sales_Mutation_Response = {
  __typename?: 'desh_sales_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Desh_Sales>;
};

/** on_conflict condition type for table "desh_sales" */
export type Desh_Sales_On_Conflict = {
  constraint: Desh_Sales_Constraint;
  update_columns?: Array<Desh_Sales_Update_Column>;
  where?: InputMaybe<Desh_Sales_Bool_Exp>;
};

/** Ordering options when selecting data from "desh_sales". */
export type Desh_Sales_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dash_id?: InputMaybe<Order_By>;
  desh?: InputMaybe<Desh_Order_By>;
  id?: InputMaybe<Order_By>;
  last_year?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: desh_sales */
export type Desh_Sales_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "desh_sales" */
export enum Desh_Sales_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DashId = 'dash_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastYear = 'last_year',
  /** column name */
  Sales = 'sales',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "desh_sales" */
export type Desh_Sales_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dash_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_year?: InputMaybe<Scalars['Int']>;
  sales?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Desh_Sales_Stddev_Fields = {
  __typename?: 'desh_sales_stddev_fields';
  last_year?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "desh_sales" */
export type Desh_Sales_Stddev_Order_By = {
  last_year?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Desh_Sales_Stddev_Pop_Fields = {
  __typename?: 'desh_sales_stddev_pop_fields';
  last_year?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "desh_sales" */
export type Desh_Sales_Stddev_Pop_Order_By = {
  last_year?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Desh_Sales_Stddev_Samp_Fields = {
  __typename?: 'desh_sales_stddev_samp_fields';
  last_year?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "desh_sales" */
export type Desh_Sales_Stddev_Samp_Order_By = {
  last_year?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "desh_sales" */
export type Desh_Sales_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Desh_Sales_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Desh_Sales_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dash_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_year?: InputMaybe<Scalars['Int']>;
  sales?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Desh_Sales_Sum_Fields = {
  __typename?: 'desh_sales_sum_fields';
  last_year?: Maybe<Scalars['Int']>;
  sales?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "desh_sales" */
export type Desh_Sales_Sum_Order_By = {
  last_year?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
};

/** update columns of table "desh_sales" */
export enum Desh_Sales_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DashId = 'dash_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastYear = 'last_year',
  /** column name */
  Sales = 'sales',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Desh_Sales_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Desh_Sales_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Desh_Sales_Set_Input>;
  /** filter the rows which have to be updated */
  where: Desh_Sales_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Desh_Sales_Var_Pop_Fields = {
  __typename?: 'desh_sales_var_pop_fields';
  last_year?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "desh_sales" */
export type Desh_Sales_Var_Pop_Order_By = {
  last_year?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Desh_Sales_Var_Samp_Fields = {
  __typename?: 'desh_sales_var_samp_fields';
  last_year?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "desh_sales" */
export type Desh_Sales_Var_Samp_Order_By = {
  last_year?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Desh_Sales_Variance_Fields = {
  __typename?: 'desh_sales_variance_fields';
  last_year?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "desh_sales" */
export type Desh_Sales_Variance_Order_By = {
  last_year?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
};

/** select columns of table "desh" */
export enum Desh_Select_Column {
  /** column name */
  Budget = 'budget',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NoOfCustomers = 'no_of_customers',
  /** column name */
  Profit = 'profit',
  /** column name */
  TaskProgress = 'task_progress',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "desh" */
export type Desh_Set_Input = {
  budget?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  no_of_customers?: InputMaybe<Scalars['Int']>;
  profit?: InputMaybe<Scalars['Int']>;
  task_progress?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Desh_Stddev_Fields = {
  __typename?: 'desh_stddev_fields';
  budget?: Maybe<Scalars['Float']>;
  no_of_customers?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  task_progress?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Desh_Stddev_Pop_Fields = {
  __typename?: 'desh_stddev_pop_fields';
  budget?: Maybe<Scalars['Float']>;
  no_of_customers?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  task_progress?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Desh_Stddev_Samp_Fields = {
  __typename?: 'desh_stddev_samp_fields';
  budget?: Maybe<Scalars['Float']>;
  no_of_customers?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  task_progress?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "desh" */
export type Desh_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Desh_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Desh_Stream_Cursor_Value_Input = {
  budget?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  no_of_customers?: InputMaybe<Scalars['Int']>;
  profit?: InputMaybe<Scalars['Int']>;
  task_progress?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Desh_Sum_Fields = {
  __typename?: 'desh_sum_fields';
  budget?: Maybe<Scalars['Int']>;
  no_of_customers?: Maybe<Scalars['Int']>;
  profit?: Maybe<Scalars['Int']>;
  task_progress?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "desh_traffic" */
export type Desh_Traffic = {
  __typename?: 'desh_traffic';
  count: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  dash_id: Scalars['uuid'];
  /** An object relationship */
  desh: Desh;
  device_name: Scalars['String'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "desh_traffic" */
export type Desh_Traffic_Aggregate = {
  __typename?: 'desh_traffic_aggregate';
  aggregate?: Maybe<Desh_Traffic_Aggregate_Fields>;
  nodes: Array<Desh_Traffic>;
};

export type Desh_Traffic_Aggregate_Bool_Exp = {
  count?: InputMaybe<Desh_Traffic_Aggregate_Bool_Exp_Count>;
};

export type Desh_Traffic_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Desh_Traffic_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Desh_Traffic_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "desh_traffic" */
export type Desh_Traffic_Aggregate_Fields = {
  __typename?: 'desh_traffic_aggregate_fields';
  avg?: Maybe<Desh_Traffic_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Desh_Traffic_Max_Fields>;
  min?: Maybe<Desh_Traffic_Min_Fields>;
  stddev?: Maybe<Desh_Traffic_Stddev_Fields>;
  stddev_pop?: Maybe<Desh_Traffic_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Desh_Traffic_Stddev_Samp_Fields>;
  sum?: Maybe<Desh_Traffic_Sum_Fields>;
  var_pop?: Maybe<Desh_Traffic_Var_Pop_Fields>;
  var_samp?: Maybe<Desh_Traffic_Var_Samp_Fields>;
  variance?: Maybe<Desh_Traffic_Variance_Fields>;
};


/** aggregate fields of "desh_traffic" */
export type Desh_Traffic_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Desh_Traffic_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "desh_traffic" */
export type Desh_Traffic_Aggregate_Order_By = {
  avg?: InputMaybe<Desh_Traffic_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Desh_Traffic_Max_Order_By>;
  min?: InputMaybe<Desh_Traffic_Min_Order_By>;
  stddev?: InputMaybe<Desh_Traffic_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Desh_Traffic_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Desh_Traffic_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Desh_Traffic_Sum_Order_By>;
  var_pop?: InputMaybe<Desh_Traffic_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Desh_Traffic_Var_Samp_Order_By>;
  variance?: InputMaybe<Desh_Traffic_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "desh_traffic" */
export type Desh_Traffic_Arr_Rel_Insert_Input = {
  data: Array<Desh_Traffic_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Desh_Traffic_On_Conflict>;
};

/** aggregate avg on columns */
export type Desh_Traffic_Avg_Fields = {
  __typename?: 'desh_traffic_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "desh_traffic" */
export type Desh_Traffic_Avg_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "desh_traffic". All fields are combined with a logical 'AND'. */
export type Desh_Traffic_Bool_Exp = {
  _and?: InputMaybe<Array<Desh_Traffic_Bool_Exp>>;
  _not?: InputMaybe<Desh_Traffic_Bool_Exp>;
  _or?: InputMaybe<Array<Desh_Traffic_Bool_Exp>>;
  count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dash_id?: InputMaybe<Uuid_Comparison_Exp>;
  desh?: InputMaybe<Desh_Bool_Exp>;
  device_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "desh_traffic" */
export enum Desh_Traffic_Constraint {
  /** unique or primary key constraint on columns "id" */
  DashTraficIdKey = 'dash_trafic_id_key',
  /** unique or primary key constraint on columns "id" */
  DashTraficPkey = 'dash_trafic_pkey'
}

/** input type for incrementing numeric columns in table "desh_traffic" */
export type Desh_Traffic_Inc_Input = {
  count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "desh_traffic" */
export type Desh_Traffic_Insert_Input = {
  count?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dash_id?: InputMaybe<Scalars['uuid']>;
  desh?: InputMaybe<Desh_Obj_Rel_Insert_Input>;
  device_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Desh_Traffic_Max_Fields = {
  __typename?: 'desh_traffic_max_fields';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dash_id?: Maybe<Scalars['uuid']>;
  device_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "desh_traffic" */
export type Desh_Traffic_Max_Order_By = {
  count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dash_id?: InputMaybe<Order_By>;
  device_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Desh_Traffic_Min_Fields = {
  __typename?: 'desh_traffic_min_fields';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dash_id?: Maybe<Scalars['uuid']>;
  device_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "desh_traffic" */
export type Desh_Traffic_Min_Order_By = {
  count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dash_id?: InputMaybe<Order_By>;
  device_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "desh_traffic" */
export type Desh_Traffic_Mutation_Response = {
  __typename?: 'desh_traffic_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Desh_Traffic>;
};

/** on_conflict condition type for table "desh_traffic" */
export type Desh_Traffic_On_Conflict = {
  constraint: Desh_Traffic_Constraint;
  update_columns?: Array<Desh_Traffic_Update_Column>;
  where?: InputMaybe<Desh_Traffic_Bool_Exp>;
};

/** Ordering options when selecting data from "desh_traffic". */
export type Desh_Traffic_Order_By = {
  count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dash_id?: InputMaybe<Order_By>;
  desh?: InputMaybe<Desh_Order_By>;
  device_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: desh_traffic */
export type Desh_Traffic_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "desh_traffic" */
export enum Desh_Traffic_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DashId = 'dash_id',
  /** column name */
  DeviceName = 'device_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "desh_traffic" */
export type Desh_Traffic_Set_Input = {
  count?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dash_id?: InputMaybe<Scalars['uuid']>;
  device_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Desh_Traffic_Stddev_Fields = {
  __typename?: 'desh_traffic_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "desh_traffic" */
export type Desh_Traffic_Stddev_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Desh_Traffic_Stddev_Pop_Fields = {
  __typename?: 'desh_traffic_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "desh_traffic" */
export type Desh_Traffic_Stddev_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Desh_Traffic_Stddev_Samp_Fields = {
  __typename?: 'desh_traffic_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "desh_traffic" */
export type Desh_Traffic_Stddev_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "desh_traffic" */
export type Desh_Traffic_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Desh_Traffic_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Desh_Traffic_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dash_id?: InputMaybe<Scalars['uuid']>;
  device_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Desh_Traffic_Sum_Fields = {
  __typename?: 'desh_traffic_sum_fields';
  count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "desh_traffic" */
export type Desh_Traffic_Sum_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** update columns of table "desh_traffic" */
export enum Desh_Traffic_Update_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DashId = 'dash_id',
  /** column name */
  DeviceName = 'device_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Desh_Traffic_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Desh_Traffic_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Desh_Traffic_Set_Input>;
  /** filter the rows which have to be updated */
  where: Desh_Traffic_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Desh_Traffic_Var_Pop_Fields = {
  __typename?: 'desh_traffic_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "desh_traffic" */
export type Desh_Traffic_Var_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Desh_Traffic_Var_Samp_Fields = {
  __typename?: 'desh_traffic_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "desh_traffic" */
export type Desh_Traffic_Var_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Desh_Traffic_Variance_Fields = {
  __typename?: 'desh_traffic_variance_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "desh_traffic" */
export type Desh_Traffic_Variance_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** update columns of table "desh" */
export enum Desh_Update_Column {
  /** column name */
  Budget = 'budget',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NoOfCustomers = 'no_of_customers',
  /** column name */
  Profit = 'profit',
  /** column name */
  TaskProgress = 'task_progress',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Desh_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Desh_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Desh_Set_Input>;
  /** filter the rows which have to be updated */
  where: Desh_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Desh_Var_Pop_Fields = {
  __typename?: 'desh_var_pop_fields';
  budget?: Maybe<Scalars['Float']>;
  no_of_customers?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  task_progress?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Desh_Var_Samp_Fields = {
  __typename?: 'desh_var_samp_fields';
  budget?: Maybe<Scalars['Float']>;
  no_of_customers?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  task_progress?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Desh_Variance_Fields = {
  __typename?: 'desh_variance_fields';
  budget?: Maybe<Scalars['Float']>;
  no_of_customers?: Maybe<Scalars['Float']>;
  profit?: Maybe<Scalars['Float']>;
  task_progress?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "enum_test_types" */
export type Enum_Test_Types = {
  __typename?: 'enum_test_types';
  int_enum: Scalars['String'];
  /** An array relationship */
  types_tests: Array<Types_Test>;
  /** An aggregate relationship */
  types_tests_aggregate: Types_Test_Aggregate;
};


/** columns and relationships of "enum_test_types" */
export type Enum_Test_TypesTypes_TestsArgs = {
  distinct_on?: InputMaybe<Array<Types_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Types_Test_Order_By>>;
  where?: InputMaybe<Types_Test_Bool_Exp>;
};


/** columns and relationships of "enum_test_types" */
export type Enum_Test_TypesTypes_Tests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Types_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Types_Test_Order_By>>;
  where?: InputMaybe<Types_Test_Bool_Exp>;
};

/** aggregated selection of "enum_test_types" */
export type Enum_Test_Types_Aggregate = {
  __typename?: 'enum_test_types_aggregate';
  aggregate?: Maybe<Enum_Test_Types_Aggregate_Fields>;
  nodes: Array<Enum_Test_Types>;
};

/** aggregate fields of "enum_test_types" */
export type Enum_Test_Types_Aggregate_Fields = {
  __typename?: 'enum_test_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Enum_Test_Types_Max_Fields>;
  min?: Maybe<Enum_Test_Types_Min_Fields>;
};


/** aggregate fields of "enum_test_types" */
export type Enum_Test_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Enum_Test_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "enum_test_types". All fields are combined with a logical 'AND'. */
export type Enum_Test_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Enum_Test_Types_Bool_Exp>>;
  _not?: InputMaybe<Enum_Test_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Enum_Test_Types_Bool_Exp>>;
  int_enum?: InputMaybe<String_Comparison_Exp>;
  types_tests?: InputMaybe<Types_Test_Bool_Exp>;
  types_tests_aggregate?: InputMaybe<Types_Test_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "enum_test_types" */
export enum Enum_Test_Types_Constraint {
  /** unique or primary key constraint on columns "int_enum" */
  EnumTestTypesPkey = 'enum_test_types_pkey'
}

export enum Enum_Test_Types_Enum {
  A0 = 'a0',
  A1 = 'a1',
  A2 = 'a2',
  A3 = 'a3',
  A4 = 'a4',
  A5 = 'a5',
  A6 = 'a6',
  A7 = 'a7',
  A8 = 'a8',
  A9 = 'a9',
  A10 = 'a10'
}

/** Boolean expression to compare columns of type "enum_test_types_enum". All fields are combined with logical 'AND'. */
export type Enum_Test_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Enum_Test_Types_Enum>;
  _in?: InputMaybe<Array<Enum_Test_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Enum_Test_Types_Enum>;
  _nin?: InputMaybe<Array<Enum_Test_Types_Enum>>;
};

/** input type for inserting data into table "enum_test_types" */
export type Enum_Test_Types_Insert_Input = {
  int_enum?: InputMaybe<Scalars['String']>;
  types_tests?: InputMaybe<Types_Test_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Enum_Test_Types_Max_Fields = {
  __typename?: 'enum_test_types_max_fields';
  int_enum?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Enum_Test_Types_Min_Fields = {
  __typename?: 'enum_test_types_min_fields';
  int_enum?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "enum_test_types" */
export type Enum_Test_Types_Mutation_Response = {
  __typename?: 'enum_test_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Enum_Test_Types>;
};

/** input type for inserting object relation for remote table "enum_test_types" */
export type Enum_Test_Types_Obj_Rel_Insert_Input = {
  data: Enum_Test_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Enum_Test_Types_On_Conflict>;
};

/** on_conflict condition type for table "enum_test_types" */
export type Enum_Test_Types_On_Conflict = {
  constraint: Enum_Test_Types_Constraint;
  update_columns?: Array<Enum_Test_Types_Update_Column>;
  where?: InputMaybe<Enum_Test_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "enum_test_types". */
export type Enum_Test_Types_Order_By = {
  int_enum?: InputMaybe<Order_By>;
  types_tests_aggregate?: InputMaybe<Types_Test_Aggregate_Order_By>;
};

/** primary key columns input for table: enum_test_types */
export type Enum_Test_Types_Pk_Columns_Input = {
  int_enum: Scalars['String'];
};

/** select columns of table "enum_test_types" */
export enum Enum_Test_Types_Select_Column {
  /** column name */
  IntEnum = 'int_enum'
}

/** input type for updating data in table "enum_test_types" */
export type Enum_Test_Types_Set_Input = {
  int_enum?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "enum_test_types" */
export type Enum_Test_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Enum_Test_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Enum_Test_Types_Stream_Cursor_Value_Input = {
  int_enum?: InputMaybe<Scalars['String']>;
};

/** update columns of table "enum_test_types" */
export enum Enum_Test_Types_Update_Column {
  /** column name */
  IntEnum = 'int_enum'
}

export type Enum_Test_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Enum_Test_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Enum_Test_Types_Bool_Exp;
};

/** columns and relationships of "events" */
export type Events = {
  __typename?: 'events';
  comment?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  location?: Maybe<Scalars['geography']>;
  name: Scalars['String'];
  notification?: Maybe<Scalars['Boolean']>;
  startAt: Scalars['timestamptz'];
};

/** aggregated selection of "events" */
export type Events_Aggregate = {
  __typename?: 'events_aggregate';
  aggregate?: Maybe<Events_Aggregate_Fields>;
  nodes: Array<Events>;
};

/** aggregate fields of "events" */
export type Events_Aggregate_Fields = {
  __typename?: 'events_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Events_Max_Fields>;
  min?: Maybe<Events_Min_Fields>;
};


/** aggregate fields of "events" */
export type Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Events_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  _and?: InputMaybe<Array<Events_Bool_Exp>>;
  _not?: InputMaybe<Events_Bool_Exp>;
  _or?: InputMaybe<Array<Events_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  endAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location?: InputMaybe<Geography_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  notification?: InputMaybe<Boolean_Comparison_Exp>;
  startAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "events" */
export enum Events_Constraint {
  /** unique or primary key constraint on columns "id" */
  EventsPkey = 'events_pkey'
}

/** input type for inserting data into table "events" */
export type Events_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Scalars['geography']>;
  name?: InputMaybe<Scalars['String']>;
  notification?: InputMaybe<Scalars['Boolean']>;
  startAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Events_Max_Fields = {
  __typename?: 'events_max_fields';
  comment?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  startAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
  __typename?: 'events_min_fields';
  comment?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  startAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "events" */
export type Events_Mutation_Response = {
  __typename?: 'events_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Events>;
};

/** on_conflict condition type for table "events" */
export type Events_On_Conflict = {
  constraint: Events_Constraint;
  update_columns?: Array<Events_Update_Column>;
  where?: InputMaybe<Events_Bool_Exp>;
};

/** Ordering options when selecting data from "events". */
export type Events_Order_By = {
  comment?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  endAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notification?: InputMaybe<Order_By>;
  startAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: events */
export type Events_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "events" */
export enum Events_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Description = 'description',
  /** column name */
  EndAt = 'endAt',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  Notification = 'notification',
  /** column name */
  StartAt = 'startAt'
}

/** input type for updating data in table "events" */
export type Events_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Scalars['geography']>;
  name?: InputMaybe<Scalars['String']>;
  notification?: InputMaybe<Scalars['Boolean']>;
  startAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "events" */
export type Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Events_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  endAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Scalars['geography']>;
  name?: InputMaybe<Scalars['String']>;
  notification?: InputMaybe<Scalars['Boolean']>;
  startAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "events" */
export enum Events_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Description = 'description',
  /** column name */
  EndAt = 'endAt',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  Notification = 'notification',
  /** column name */
  StartAt = 'startAt'
}

export type Events_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Events_Set_Input>;
  /** filter the rows which have to be updated */
  where: Events_Bool_Exp;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** mateis - test */
export type From_Nodes = {
  __typename?: 'from_nodes';
  /** An array relationship */
  neighbourPairs: Array<NeighbourPairs>;
  /** An aggregate relationship */
  neighbourPairs_aggregate: NeighbourPairs_Aggregate;
  uuid: Scalars['uuid'];
};


/** mateis - test */
export type From_NodesNeighbourPairsArgs = {
  distinct_on?: InputMaybe<Array<NeighbourPairs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NeighbourPairs_Order_By>>;
  where?: InputMaybe<NeighbourPairs_Bool_Exp>;
};


/** mateis - test */
export type From_NodesNeighbourPairs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<NeighbourPairs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NeighbourPairs_Order_By>>;
  where?: InputMaybe<NeighbourPairs_Bool_Exp>;
};

/** aggregated selection of "from_nodes" */
export type From_Nodes_Aggregate = {
  __typename?: 'from_nodes_aggregate';
  aggregate?: Maybe<From_Nodes_Aggregate_Fields>;
  nodes: Array<From_Nodes>;
};

/** aggregate fields of "from_nodes" */
export type From_Nodes_Aggregate_Fields = {
  __typename?: 'from_nodes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<From_Nodes_Max_Fields>;
  min?: Maybe<From_Nodes_Min_Fields>;
};


/** aggregate fields of "from_nodes" */
export type From_Nodes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<From_Nodes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "from_nodes". All fields are combined with a logical 'AND'. */
export type From_Nodes_Bool_Exp = {
  _and?: InputMaybe<Array<From_Nodes_Bool_Exp>>;
  _not?: InputMaybe<From_Nodes_Bool_Exp>;
  _or?: InputMaybe<Array<From_Nodes_Bool_Exp>>;
  neighbourPairs?: InputMaybe<NeighbourPairs_Bool_Exp>;
  neighbourPairs_aggregate?: InputMaybe<NeighbourPairs_Aggregate_Bool_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "from_nodes" */
export enum From_Nodes_Constraint {
  /** unique or primary key constraint on columns "uuid" */
  FromNodesPkey = 'from_nodes_pkey'
}

/** input type for inserting data into table "from_nodes" */
export type From_Nodes_Insert_Input = {
  neighbourPairs?: InputMaybe<NeighbourPairs_Arr_Rel_Insert_Input>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type From_Nodes_Max_Fields = {
  __typename?: 'from_nodes_max_fields';
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type From_Nodes_Min_Fields = {
  __typename?: 'from_nodes_min_fields';
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "from_nodes" */
export type From_Nodes_Mutation_Response = {
  __typename?: 'from_nodes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<From_Nodes>;
};

/** on_conflict condition type for table "from_nodes" */
export type From_Nodes_On_Conflict = {
  constraint: From_Nodes_Constraint;
  update_columns?: Array<From_Nodes_Update_Column>;
  where?: InputMaybe<From_Nodes_Bool_Exp>;
};

/** Ordering options when selecting data from "from_nodes". */
export type From_Nodes_Order_By = {
  neighbourPairs_aggregate?: InputMaybe<NeighbourPairs_Aggregate_Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: from_nodes */
export type From_Nodes_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "from_nodes" */
export enum From_Nodes_Select_Column {
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "from_nodes" */
export type From_Nodes_Set_Input = {
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "from_nodes" */
export type From_Nodes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: From_Nodes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type From_Nodes_Stream_Cursor_Value_Input = {
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "from_nodes" */
export enum From_Nodes_Update_Column {
  /** column name */
  Uuid = 'uuid'
}

export type From_Nodes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<From_Nodes_Set_Input>;
  /** filter the rows which have to be updated */
  where: From_Nodes_Bool_Exp;
};

export type Geography_Cast_Exp = {
  geometry?: InputMaybe<Geometry_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: InputMaybe<Geography_Cast_Exp>;
  _eq?: InputMaybe<Scalars['geography']>;
  _gt?: InputMaybe<Scalars['geography']>;
  _gte?: InputMaybe<Scalars['geography']>;
  _in?: InputMaybe<Array<Scalars['geography']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['geography']>;
  _lte?: InputMaybe<Scalars['geography']>;
  _neq?: InputMaybe<Scalars['geography']>;
  _nin?: InputMaybe<Array<Scalars['geography']>>;
  /** is the column within a given distance from the given geography value */
  _st_d_within?: InputMaybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: InputMaybe<Scalars['geography']>;
};

export type Geometry_Cast_Exp = {
  geography?: InputMaybe<Geography_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: InputMaybe<Geometry_Cast_Exp>;
  _eq?: InputMaybe<Scalars['geometry']>;
  _gt?: InputMaybe<Scalars['geometry']>;
  _gte?: InputMaybe<Scalars['geometry']>;
  _in?: InputMaybe<Array<Scalars['geometry']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['geometry']>;
  _lte?: InputMaybe<Scalars['geometry']>;
  _neq?: InputMaybe<Scalars['geometry']>;
  _nin?: InputMaybe<Array<Scalars['geometry']>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within?: InputMaybe<St_D_Within_Input>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects?: InputMaybe<Scalars['geometry']>;
  /** does the column contain the given geometry value */
  _st_contains?: InputMaybe<Scalars['geometry']>;
  /** does the column cross the given geometry value */
  _st_crosses?: InputMaybe<Scalars['geometry']>;
  /** is the column within a given distance from the given geometry value */
  _st_d_within?: InputMaybe<St_D_Within_Input>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals?: InputMaybe<Scalars['geometry']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: InputMaybe<Scalars['geometry']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: InputMaybe<Scalars['geometry']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: InputMaybe<Scalars['geometry']>;
  /** is the column contained in the given geometry value */
  _st_within?: InputMaybe<Scalars['geometry']>;
};

/** columns and relationships of "hall" */
export type Hall = {
  __typename?: 'hall';
  fk_site: Scalars['uuid'];
  floor_plan: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  note: Scalars['String'];
  photo_of_hall: Scalars['String'];
  /** An object relationship */
  site: Site;
  validity_from: Scalars['date'];
  validity_to: Scalars['date'];
};

/** aggregated selection of "hall" */
export type Hall_Aggregate = {
  __typename?: 'hall_aggregate';
  aggregate?: Maybe<Hall_Aggregate_Fields>;
  nodes: Array<Hall>;
};

export type Hall_Aggregate_Bool_Exp = {
  count?: InputMaybe<Hall_Aggregate_Bool_Exp_Count>;
};

export type Hall_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Hall_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Hall_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "hall" */
export type Hall_Aggregate_Fields = {
  __typename?: 'hall_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Hall_Max_Fields>;
  min?: Maybe<Hall_Min_Fields>;
};


/** aggregate fields of "hall" */
export type Hall_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hall_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "hall" */
export type Hall_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Hall_Max_Order_By>;
  min?: InputMaybe<Hall_Min_Order_By>;
};

/** input type for inserting array relation for remote table "hall" */
export type Hall_Arr_Rel_Insert_Input = {
  data: Array<Hall_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Hall_On_Conflict>;
};

/** Boolean expression to filter rows from the table "hall". All fields are combined with a logical 'AND'. */
export type Hall_Bool_Exp = {
  _and?: InputMaybe<Array<Hall_Bool_Exp>>;
  _not?: InputMaybe<Hall_Bool_Exp>;
  _or?: InputMaybe<Array<Hall_Bool_Exp>>;
  fk_site?: InputMaybe<Uuid_Comparison_Exp>;
  floor_plan?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  photo_of_hall?: InputMaybe<String_Comparison_Exp>;
  site?: InputMaybe<Site_Bool_Exp>;
  validity_from?: InputMaybe<Date_Comparison_Exp>;
  validity_to?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "hall" */
export enum Hall_Constraint {
  /** unique or primary key constraint on columns "id" */
  HallPkey = 'hall_pkey'
}

/** input type for inserting data into table "hall" */
export type Hall_Insert_Input = {
  fk_site?: InputMaybe<Scalars['uuid']>;
  floor_plan?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  photo_of_hall?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Site_Obj_Rel_Insert_Input>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Hall_Max_Fields = {
  __typename?: 'hall_max_fields';
  fk_site?: Maybe<Scalars['uuid']>;
  floor_plan?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  photo_of_hall?: Maybe<Scalars['String']>;
  validity_from?: Maybe<Scalars['date']>;
  validity_to?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "hall" */
export type Hall_Max_Order_By = {
  fk_site?: InputMaybe<Order_By>;
  floor_plan?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  photo_of_hall?: InputMaybe<Order_By>;
  validity_from?: InputMaybe<Order_By>;
  validity_to?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Hall_Min_Fields = {
  __typename?: 'hall_min_fields';
  fk_site?: Maybe<Scalars['uuid']>;
  floor_plan?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  photo_of_hall?: Maybe<Scalars['String']>;
  validity_from?: Maybe<Scalars['date']>;
  validity_to?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "hall" */
export type Hall_Min_Order_By = {
  fk_site?: InputMaybe<Order_By>;
  floor_plan?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  photo_of_hall?: InputMaybe<Order_By>;
  validity_from?: InputMaybe<Order_By>;
  validity_to?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "hall" */
export type Hall_Mutation_Response = {
  __typename?: 'hall_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Hall>;
};

/** on_conflict condition type for table "hall" */
export type Hall_On_Conflict = {
  constraint: Hall_Constraint;
  update_columns?: Array<Hall_Update_Column>;
  where?: InputMaybe<Hall_Bool_Exp>;
};

/** Ordering options when selecting data from "hall". */
export type Hall_Order_By = {
  fk_site?: InputMaybe<Order_By>;
  floor_plan?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  photo_of_hall?: InputMaybe<Order_By>;
  site?: InputMaybe<Site_Order_By>;
  validity_from?: InputMaybe<Order_By>;
  validity_to?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hall */
export type Hall_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "hall" */
export enum Hall_Select_Column {
  /** column name */
  FkSite = 'fk_site',
  /** column name */
  FloorPlan = 'floor_plan',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  PhotoOfHall = 'photo_of_hall',
  /** column name */
  ValidityFrom = 'validity_from',
  /** column name */
  ValidityTo = 'validity_to'
}

/** input type for updating data in table "hall" */
export type Hall_Set_Input = {
  fk_site?: InputMaybe<Scalars['uuid']>;
  floor_plan?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  photo_of_hall?: InputMaybe<Scalars['String']>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
};

/** Streaming cursor of the table "hall" */
export type Hall_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hall_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hall_Stream_Cursor_Value_Input = {
  fk_site?: InputMaybe<Scalars['uuid']>;
  floor_plan?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  photo_of_hall?: InputMaybe<Scalars['String']>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
};

/** update columns of table "hall" */
export enum Hall_Update_Column {
  /** column name */
  FkSite = 'fk_site',
  /** column name */
  FloorPlan = 'floor_plan',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  PhotoOfHall = 'photo_of_hall',
  /** column name */
  ValidityFrom = 'validity_from',
  /** column name */
  ValidityTo = 'validity_to'
}

export type Hall_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hall_Set_Input>;
  /** filter the rows which have to be updated */
  where: Hall_Bool_Exp;
};

/** Boolean expression to compare columns of type "interval". All fields are combined with logical 'AND'. */
export type Interval_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['interval']>;
  _gt?: InputMaybe<Scalars['interval']>;
  _gte?: InputMaybe<Scalars['interval']>;
  _in?: InputMaybe<Array<Scalars['interval']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['interval']>;
  _lte?: InputMaybe<Scalars['interval']>;
  _neq?: InputMaybe<Scalars['interval']>;
  _nin?: InputMaybe<Array<Scalars['interval']>>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** geojson map points */
export type MapPoints = {
  __typename?: 'mapPoints';
  geoJson?: Maybe<Scalars['json']>;
  id: Scalars['uuid'];
  location?: Maybe<Scalars['geography']>;
  position?: Maybe<Scalars['geography']>;
};


/** geojson map points */
export type MapPointsGeoJsonArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "map_points" */
export type MapPoints_Aggregate = {
  __typename?: 'mapPoints_aggregate';
  aggregate?: Maybe<MapPoints_Aggregate_Fields>;
  nodes: Array<MapPoints>;
};

/** aggregate fields of "map_points" */
export type MapPoints_Aggregate_Fields = {
  __typename?: 'mapPoints_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<MapPoints_Max_Fields>;
  min?: Maybe<MapPoints_Min_Fields>;
};


/** aggregate fields of "map_points" */
export type MapPoints_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<MapPoints_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "map_points". All fields are combined with a logical 'AND'. */
export type MapPoints_Bool_Exp = {
  _and?: InputMaybe<Array<MapPoints_Bool_Exp>>;
  _not?: InputMaybe<MapPoints_Bool_Exp>;
  _or?: InputMaybe<Array<MapPoints_Bool_Exp>>;
  geoJson?: InputMaybe<Json_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location?: InputMaybe<Geography_Comparison_Exp>;
  position?: InputMaybe<Geography_Comparison_Exp>;
};

/** unique or primary key constraints on table "map_points" */
export enum MapPoints_Constraint {
  /** unique or primary key constraint on columns "id" */
  MapPointsPkey = 'map_points_pkey'
}

/** input type for inserting data into table "map_points" */
export type MapPoints_Insert_Input = {
  geoJson?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Scalars['geography']>;
  position?: InputMaybe<Scalars['geography']>;
};

/** aggregate max on columns */
export type MapPoints_Max_Fields = {
  __typename?: 'mapPoints_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type MapPoints_Min_Fields = {
  __typename?: 'mapPoints_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "map_points" */
export type MapPoints_Mutation_Response = {
  __typename?: 'mapPoints_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<MapPoints>;
};

/** on_conflict condition type for table "map_points" */
export type MapPoints_On_Conflict = {
  constraint: MapPoints_Constraint;
  update_columns?: Array<MapPoints_Update_Column>;
  where?: InputMaybe<MapPoints_Bool_Exp>;
};

/** Ordering options when selecting data from "map_points". */
export type MapPoints_Order_By = {
  geoJson?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** primary key columns input for table: map_points */
export type MapPoints_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "map_points" */
export enum MapPoints_Select_Column {
  /** column name */
  GeoJson = 'geoJson',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Position = 'position'
}

/** input type for updating data in table "map_points" */
export type MapPoints_Set_Input = {
  geoJson?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Scalars['geography']>;
  position?: InputMaybe<Scalars['geography']>;
};

/** Streaming cursor of the table "mapPoints" */
export type MapPoints_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: MapPoints_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type MapPoints_Stream_Cursor_Value_Input = {
  geoJson?: InputMaybe<Scalars['json']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Scalars['geography']>;
  position?: InputMaybe<Scalars['geography']>;
};

/** update columns of table "map_points" */
export enum MapPoints_Update_Column {
  /** column name */
  GeoJson = 'geoJson',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Position = 'position'
}

export type MapPoints_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MapPoints_Set_Input>;
  /** filter the rows which have to be updated */
  where: MapPoints_Bool_Exp;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  abortMultipartUpload?: Maybe<AbortMultipartUploadReturn>;
  completeMultipartUpload?: Maybe<CompleteMultipartUploadReturn>;
  createMultipartUpload?: Maybe<CreateMultipartUploadReturn>;
  /** delete single row from the table: "bus_stops" */
  deleteBusStop?: Maybe<BusStops>;
  /** delete single row from the table: "bus_stop_departures" */
  deleteBusStopDeparture?: Maybe<BusStopDepartures>;
  /** delete data from the table: "bus_stop_departures" */
  deleteBusStopDepartures?: Maybe<BusStopDepartures_Mutation_Response>;
  /** delete data from the table: "bus_stops" */
  deleteBusStops?: Maybe<BusStops_Mutation_Response>;
  /** delete single row from the table: "cmdb_relations" */
  deleteCmdbRelation?: Maybe<CmdbRelations>;
  /** delete data from the table: "cmdb_relations" */
  deleteCmdbRelations?: Maybe<CmdbRelations_Mutation_Response>;
  /** delete single row from the table: "customers" */
  deleteCustomer?: Maybe<Customers>;
  /** delete data from the table: "customers" */
  deleteCustomers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "events" */
  deleteEvent?: Maybe<Events>;
  /** delete data from the table: "events" */
  deleteEvents?: Maybe<Events_Mutation_Response>;
  /** delete single row from the table: "offer" */
  deleteOffer?: Maybe<Offer>;
  /** delete data from the table: "offer" */
  deleteOffers?: Maybe<Offer_Mutation_Response>;
  /** delete single row from the table: "orders" */
  deleteOrder?: Maybe<Orders>;
  /** delete single row from the table: "order_items" */
  deleteOrderItem?: Maybe<Order_Items>;
  /** delete data from the table: "order_items" */
  deleteOrderItems?: Maybe<Order_Items_Mutation_Response>;
  /** delete data from the table: "orders" */
  deleteOrders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "organizations" */
  deleteOrganization?: Maybe<Organizations>;
  /** delete data from the table: "organizations" */
  deleteOrganizations?: Maybe<Organizations_Mutation_Response>;
  /** delete single row from the table: "products" */
  deleteProduct?: Maybe<Products>;
  /** delete data from the table: "products" */
  deleteProducts?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "test_jednotne_cislo" */
  deleteTestJednotneCislo?: Maybe<TestJednotneCislo>;
  /** delete data from the table: "test_jednotne_cislo" */
  deleteTestJednotneCislos?: Maybe<TestJednotneCislo_Mutation_Response>;
  /** delete single row from the table: "test_x" */
  deleteTestX?: Maybe<TestX>;
  /** delete data from the table: "test_x" */
  deleteTestXes?: Maybe<TestX_Mutation_Response>;
  /** delete data from the table: "test_01" */
  delete_Test01?: Maybe<Test01_Mutation_Response>;
  /** delete single row from the table: "test_01" */
  delete_Test01_by_pk?: Maybe<Test01>;
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "answers" */
  delete_answers?: Maybe<Answers_Mutation_Response>;
  /** delete single row from the table: "answers" */
  delete_answers_by_pk?: Maybe<Answers>;
  /** delete data from the table: "attributes" */
  delete_attributes?: Maybe<Attributes_Mutation_Response>;
  /** delete single row from the table: "attributes" */
  delete_attributes_by_pk?: Maybe<Attributes>;
  /** delete data from the table: "batch543" */
  delete_batch543?: Maybe<Batch543_Mutation_Response>;
  /** delete single row from the table: "batch543" */
  delete_batch543_by_pk?: Maybe<Batch543>;
  /** delete data from the table: "batch543_items" */
  delete_batch543_items?: Maybe<Batch543_Items_Mutation_Response>;
  /** delete single row from the table: "batch543_items" */
  delete_batch543_items_by_pk?: Maybe<Batch543_Items>;
  /** delete data from the table: "ci" */
  delete_ci?: Maybe<Ci_Mutation_Response>;
  /** delete data from the table: "ciWithRels" */
  delete_ciWithRels?: Maybe<CiWithRels_Mutation_Response>;
  /** delete single row from the table: "ciWithRels" */
  delete_ciWithRels_by_pk?: Maybe<CiWithRels>;
  /** delete single row from the table: "ci" */
  delete_ci_by_pk?: Maybe<Ci>;
  /** delete data from the table: "cmdb" */
  delete_cmdb?: Maybe<Cmdb_Mutation_Response>;
  delete_cmdbRelationsNeighbourscounts?: Maybe<CmdbRelationsNeighbourscounts_Mutation_Response>;
  delete_cmdbRelationsNeighbourscounts_by_pk?: Maybe<CmdbRelationsNeighbourscounts>;
  /** delete single row from the table: "cmdb" */
  delete_cmdb_by_pk?: Maybe<Cmdb>;
  /** delete data from the table: "configurationItems" */
  delete_configurationItems?: Maybe<ConfigurationItems_Mutation_Response>;
  /** delete single row from the table: "configurationItems" */
  delete_configurationItems_by_pk?: Maybe<ConfigurationItems>;
  /** delete data from the table: "contracts" */
  delete_contracts?: Maybe<Contracts_Mutation_Response>;
  /** delete single row from the table: "contracts" */
  delete_contracts_by_pk?: Maybe<Contracts>;
  /** delete data from the table: "customer_types" */
  delete_customer_types?: Maybe<Customer_Types_Mutation_Response>;
  /** delete single row from the table: "customer_types" */
  delete_customer_types_by_pk?: Maybe<Customer_Types>;
  /** delete data from the table: "departments" */
  delete_departments?: Maybe<Departments_Mutation_Response>;
  /** delete single row from the table: "departments" */
  delete_departments_by_pk?: Maybe<Departments>;
  /** delete data from the table: "desh" */
  delete_desh?: Maybe<Desh_Mutation_Response>;
  /** delete single row from the table: "desh" */
  delete_desh_by_pk?: Maybe<Desh>;
  /** delete data from the table: "desh_products" */
  delete_desh_products?: Maybe<Desh_Products_Mutation_Response>;
  /** delete single row from the table: "desh_products" */
  delete_desh_products_by_pk?: Maybe<Desh_Products>;
  /** delete data from the table: "desh_sales" */
  delete_desh_sales?: Maybe<Desh_Sales_Mutation_Response>;
  /** delete single row from the table: "desh_sales" */
  delete_desh_sales_by_pk?: Maybe<Desh_Sales>;
  /** delete data from the table: "desh_traffic" */
  delete_desh_traffic?: Maybe<Desh_Traffic_Mutation_Response>;
  /** delete single row from the table: "desh_traffic" */
  delete_desh_traffic_by_pk?: Maybe<Desh_Traffic>;
  /** delete data from the table: "enum_test_types" */
  delete_enum_test_types?: Maybe<Enum_Test_Types_Mutation_Response>;
  /** delete single row from the table: "enum_test_types" */
  delete_enum_test_types_by_pk?: Maybe<Enum_Test_Types>;
  /** delete data from the table: "from_nodes" */
  delete_from_nodes?: Maybe<From_Nodes_Mutation_Response>;
  /** delete single row from the table: "from_nodes" */
  delete_from_nodes_by_pk?: Maybe<From_Nodes>;
  /** delete data from the table: "hall" */
  delete_hall?: Maybe<Hall_Mutation_Response>;
  /** delete single row from the table: "hall" */
  delete_hall_by_pk?: Maybe<Hall>;
  /** delete data from the table: "map_points" */
  delete_mapPoints?: Maybe<MapPoints_Mutation_Response>;
  /** delete single row from the table: "map_points" */
  delete_mapPoints_by_pk?: Maybe<MapPoints>;
  /** delete data from the table: "neighbourPairs" */
  delete_neighbourPairs?: Maybe<NeighbourPairs_Mutation_Response>;
  /** delete single row from the table: "neighbourPairs" */
  delete_neighbourPairs_by_pk?: Maybe<NeighbourPairs>;
  /** delete data from the table: "organization_partnership_levels" */
  delete_organization_partnership_levels?: Maybe<Organization_Partnership_Levels_Mutation_Response>;
  /** delete single row from the table: "organization_partnership_levels" */
  delete_organization_partnership_levels_by_pk?: Maybe<Organization_Partnership_Levels>;
  /** delete data from the table: "organization_types" */
  delete_organization_types?: Maybe<Organization_Types_Mutation_Response>;
  /** delete single row from the table: "organization_types" */
  delete_organization_types_by_pk?: Maybe<Organization_Types>;
  /** delete data from the table: "organizationsNIS" */
  delete_organizationsNIS?: Maybe<OrganizationsNis_Mutation_Response>;
  /** delete single row from the table: "organizationsNIS" */
  delete_organizationsNIS_by_pk?: Maybe<OrganizationsNis>;
  /** delete data from the table: "practicioners" */
  delete_practicioners?: Maybe<Practicioners_Mutation_Response>;
  /** delete single row from the table: "practicioners" */
  delete_practicioners_by_pk?: Maybe<Practicioners>;
  /** delete data from the table: "product_availability" */
  delete_product_availability?: Maybe<Product_Availability_Mutation_Response>;
  /** delete single row from the table: "product_availability" */
  delete_product_availability_by_pk?: Maybe<Product_Availability>;
  /** delete data from the table: "question" */
  delete_question?: Maybe<Question_Mutation_Response>;
  /** delete single row from the table: "question" */
  delete_question_by_pk?: Maybe<Question>;
  /** delete data from the table: "question_category" */
  delete_question_category?: Maybe<Question_Category_Mutation_Response>;
  /** delete single row from the table: "question_category" */
  delete_question_category_by_pk?: Maybe<Question_Category>;
  /** delete data from the table: "site" */
  delete_site?: Maybe<Site_Mutation_Response>;
  /** delete single row from the table: "site" */
  delete_site_by_pk?: Maybe<Site>;
  /** delete data from the table: "status_types" */
  delete_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** delete single row from the table: "status_types" */
  delete_status_types_by_pk?: Maybe<Status_Types>;
  /** delete data from the table: "survey" */
  delete_survey?: Maybe<Survey_Mutation_Response>;
  /** delete single row from the table: "survey" */
  delete_survey_by_pk?: Maybe<Survey>;
  /** delete data from the table: "survey_photos" */
  delete_survey_photos?: Maybe<Survey_Photos_Mutation_Response>;
  /** delete single row from the table: "survey_photos" */
  delete_survey_photos_by_pk?: Maybe<Survey_Photos>;
  /** delete data from the table: "topology.layer" */
  delete_topology_layer?: Maybe<Topology_Layer_Mutation_Response>;
  /** delete single row from the table: "topology.layer" */
  delete_topology_layer_by_pk?: Maybe<Topology_Layer>;
  /** delete data from the table: "topology.topology" */
  delete_topology_topology?: Maybe<Topology_Topology_Mutation_Response>;
  /** delete single row from the table: "topology.topology" */
  delete_topology_topology_by_pk?: Maybe<Topology_Topology>;
  /** delete data from the table: "types_test" */
  delete_types_test?: Maybe<Types_Test_Mutation_Response>;
  /** delete single row from the table: "types_test" */
  delete_types_test_by_pk?: Maybe<Types_Test>;
  /** delete data from the table: "workplace" */
  delete_workplace?: Maybe<Workplace_Mutation_Response>;
  /** delete single row from the table: "workplace" */
  delete_workplace_by_pk?: Maybe<Workplace>;
  /** delete data from the table: "workplace_item" */
  delete_workplace_item?: Maybe<Workplace_Item_Mutation_Response>;
  /** delete single row from the table: "workplace_item" */
  delete_workplace_item_by_pk?: Maybe<Workplace_Item>;
  /** insert a single row into the table: "bus_stops" */
  insertBusStop?: Maybe<BusStops>;
  /** insert a single row into the table: "bus_stop_departures" */
  insertBusStopDeparture?: Maybe<BusStopDepartures>;
  /** insert data into the table: "bus_stop_departures" */
  insertBusStopDepartures?: Maybe<BusStopDepartures_Mutation_Response>;
  /** insert data into the table: "bus_stops" */
  insertBusStops?: Maybe<BusStops_Mutation_Response>;
  /** insert a single row into the table: "cmdb_relations" */
  insertCmdbRelation?: Maybe<CmdbRelations>;
  /** insert data into the table: "cmdb_relations" */
  insertCmdbRelations?: Maybe<CmdbRelations_Mutation_Response>;
  /** insert data into the table: "contracts" */
  insertContracts?: Maybe<Contracts_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insertCustomer?: Maybe<Customers>;
  /** insert data into the table: "customers" */
  insertCustomers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "events" */
  insertEvent?: Maybe<Events>;
  /** insert data into the table: "events" */
  insertEvents?: Maybe<Events_Mutation_Response>;
  /** insert a single row into the table: "offer" */
  insertOffer?: Maybe<Offer>;
  /** insert data into the table: "offer" */
  insertOffers?: Maybe<Offer_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insertOrder?: Maybe<Orders>;
  /** insert a single row into the table: "order_items" */
  insertOrderitem?: Maybe<Order_Items>;
  /** insert data into the table: "order_items" */
  insertOrderitems?: Maybe<Order_Items_Mutation_Response>;
  /** insert data into the table: "orders" */
  insertOrders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "organizations" */
  insertOrganization?: Maybe<Organizations>;
  /** insert data into the table: "organizations" */
  insertOrganizations?: Maybe<Organizations_Mutation_Response>;
  /** insert data into the table: "practicioners" */
  insertPracticioners?: Maybe<Practicioners_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insertProduct?: Maybe<Products>;
  /** insert data into the table: "products" */
  insertProducts?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "test_jednotne_cislo" */
  insertTestJednotneCislo?: Maybe<TestJednotneCislo>;
  /** insert data into the table: "test_jednotne_cislo" */
  insertTestJednotneCislos?: Maybe<TestJednotneCislo_Mutation_Response>;
  /** insert a single row into the table: "test_x" */
  insertTestX?: Maybe<TestX>;
  /** insert data into the table: "test_x" */
  insertTestXes?: Maybe<TestX_Mutation_Response>;
  /** insert data into the table: "test_01" */
  insert_Test01?: Maybe<Test01_Mutation_Response>;
  /** insert a single row into the table: "test_01" */
  insert_Test01_one?: Maybe<Test01>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "answers" */
  insert_answers?: Maybe<Answers_Mutation_Response>;
  /** insert a single row into the table: "answers" */
  insert_answers_one?: Maybe<Answers>;
  /** insert data into the table: "attributes" */
  insert_attributes?: Maybe<Attributes_Mutation_Response>;
  /** insert a single row into the table: "attributes" */
  insert_attributes_one?: Maybe<Attributes>;
  /** insert data into the table: "batch543" */
  insert_batch543?: Maybe<Batch543_Mutation_Response>;
  /** insert data into the table: "batch543_items" */
  insert_batch543_items?: Maybe<Batch543_Items_Mutation_Response>;
  /** insert a single row into the table: "batch543_items" */
  insert_batch543_items_one?: Maybe<Batch543_Items>;
  /** insert a single row into the table: "batch543" */
  insert_batch543_one?: Maybe<Batch543>;
  /** insert data into the table: "ci" */
  insert_ci?: Maybe<Ci_Mutation_Response>;
  /** insert data into the table: "ciWithRels" */
  insert_ciWithRels?: Maybe<CiWithRels_Mutation_Response>;
  /** insert a single row into the table: "ciWithRels" */
  insert_ciWithRels_one?: Maybe<CiWithRels>;
  /** insert a single row into the table: "ci" */
  insert_ci_one?: Maybe<Ci>;
  /** insert data into the table: "cmdb" */
  insert_cmdb?: Maybe<Cmdb_Mutation_Response>;
  insert_cmdbRelationsNeighbourscounts?: Maybe<CmdbRelationsNeighbourscounts_Mutation_Response>;
  insert_cmdbRelationsNeighbourscounts_one?: Maybe<CmdbRelationsNeighbourscounts>;
  /** insert a single row into the table: "cmdb" */
  insert_cmdb_one?: Maybe<Cmdb>;
  /** insert data into the table: "configurationItems" */
  insert_configurationItems?: Maybe<ConfigurationItems_Mutation_Response>;
  /** insert a single row into the table: "configurationItems" */
  insert_configurationItems_one?: Maybe<ConfigurationItems>;
  /** insert a single row into the table: "contracts" */
  insert_contracts_one?: Maybe<Contracts>;
  /** insert data into the table: "customer_types" */
  insert_customer_types?: Maybe<Customer_Types_Mutation_Response>;
  /** insert a single row into the table: "customer_types" */
  insert_customer_types_one?: Maybe<Customer_Types>;
  /** insert data into the table: "departments" */
  insert_departments?: Maybe<Departments_Mutation_Response>;
  /** insert a single row into the table: "departments" */
  insert_departments_one?: Maybe<Departments>;
  /** insert data into the table: "desh" */
  insert_desh?: Maybe<Desh_Mutation_Response>;
  /** insert a single row into the table: "desh" */
  insert_desh_one?: Maybe<Desh>;
  /** insert data into the table: "desh_products" */
  insert_desh_products?: Maybe<Desh_Products_Mutation_Response>;
  /** insert a single row into the table: "desh_products" */
  insert_desh_products_one?: Maybe<Desh_Products>;
  /** insert data into the table: "desh_sales" */
  insert_desh_sales?: Maybe<Desh_Sales_Mutation_Response>;
  /** insert a single row into the table: "desh_sales" */
  insert_desh_sales_one?: Maybe<Desh_Sales>;
  /** insert data into the table: "desh_traffic" */
  insert_desh_traffic?: Maybe<Desh_Traffic_Mutation_Response>;
  /** insert a single row into the table: "desh_traffic" */
  insert_desh_traffic_one?: Maybe<Desh_Traffic>;
  /** insert data into the table: "enum_test_types" */
  insert_enum_test_types?: Maybe<Enum_Test_Types_Mutation_Response>;
  /** insert a single row into the table: "enum_test_types" */
  insert_enum_test_types_one?: Maybe<Enum_Test_Types>;
  /** insert data into the table: "from_nodes" */
  insert_from_nodes?: Maybe<From_Nodes_Mutation_Response>;
  /** insert a single row into the table: "from_nodes" */
  insert_from_nodes_one?: Maybe<From_Nodes>;
  /** insert data into the table: "hall" */
  insert_hall?: Maybe<Hall_Mutation_Response>;
  /** insert a single row into the table: "hall" */
  insert_hall_one?: Maybe<Hall>;
  /** insert data into the table: "map_points" */
  insert_mapPoints?: Maybe<MapPoints_Mutation_Response>;
  /** insert a single row into the table: "map_points" */
  insert_mapPoints_one?: Maybe<MapPoints>;
  /** insert data into the table: "neighbourPairs" */
  insert_neighbourPairs?: Maybe<NeighbourPairs_Mutation_Response>;
  /** insert a single row into the table: "neighbourPairs" */
  insert_neighbourPairs_one?: Maybe<NeighbourPairs>;
  /** insert data into the table: "organization_partnership_levels" */
  insert_organization_partnership_levels?: Maybe<Organization_Partnership_Levels_Mutation_Response>;
  /** insert a single row into the table: "organization_partnership_levels" */
  insert_organization_partnership_levels_one?: Maybe<Organization_Partnership_Levels>;
  /** insert data into the table: "organization_types" */
  insert_organization_types?: Maybe<Organization_Types_Mutation_Response>;
  /** insert a single row into the table: "organization_types" */
  insert_organization_types_one?: Maybe<Organization_Types>;
  /** insert data into the table: "organizationsNIS" */
  insert_organizationsNIS?: Maybe<OrganizationsNis_Mutation_Response>;
  /** insert a single row into the table: "organizationsNIS" */
  insert_organizationsNIS_one?: Maybe<OrganizationsNis>;
  /** insert a single row into the table: "practicioners" */
  insert_practicioners_one?: Maybe<Practicioners>;
  /** insert data into the table: "product_availability" */
  insert_product_availability?: Maybe<Product_Availability_Mutation_Response>;
  /** insert a single row into the table: "product_availability" */
  insert_product_availability_one?: Maybe<Product_Availability>;
  /** insert data into the table: "question" */
  insert_question?: Maybe<Question_Mutation_Response>;
  /** insert data into the table: "question_category" */
  insert_question_category?: Maybe<Question_Category_Mutation_Response>;
  /** insert a single row into the table: "question_category" */
  insert_question_category_one?: Maybe<Question_Category>;
  /** insert a single row into the table: "question" */
  insert_question_one?: Maybe<Question>;
  /** insert data into the table: "site" */
  insert_site?: Maybe<Site_Mutation_Response>;
  /** insert a single row into the table: "site" */
  insert_site_one?: Maybe<Site>;
  /** insert data into the table: "status_types" */
  insert_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** insert a single row into the table: "status_types" */
  insert_status_types_one?: Maybe<Status_Types>;
  /** insert data into the table: "survey" */
  insert_survey?: Maybe<Survey_Mutation_Response>;
  /** insert a single row into the table: "survey" */
  insert_survey_one?: Maybe<Survey>;
  /** insert data into the table: "survey_photos" */
  insert_survey_photos?: Maybe<Survey_Photos_Mutation_Response>;
  /** insert a single row into the table: "survey_photos" */
  insert_survey_photos_one?: Maybe<Survey_Photos>;
  /** insert data into the table: "topology.layer" */
  insert_topology_layer?: Maybe<Topology_Layer_Mutation_Response>;
  /** insert a single row into the table: "topology.layer" */
  insert_topology_layer_one?: Maybe<Topology_Layer>;
  /** insert data into the table: "topology.topology" */
  insert_topology_topology?: Maybe<Topology_Topology_Mutation_Response>;
  /** insert a single row into the table: "topology.topology" */
  insert_topology_topology_one?: Maybe<Topology_Topology>;
  /** insert data into the table: "types_test" */
  insert_types_test?: Maybe<Types_Test_Mutation_Response>;
  /** insert a single row into the table: "types_test" */
  insert_types_test_one?: Maybe<Types_Test>;
  /** insert data into the table: "workplace" */
  insert_workplace?: Maybe<Workplace_Mutation_Response>;
  /** insert data into the table: "workplace_item" */
  insert_workplace_item?: Maybe<Workplace_Item_Mutation_Response>;
  /** insert a single row into the table: "workplace_item" */
  insert_workplace_item_one?: Maybe<Workplace_Item>;
  /** insert a single row into the table: "workplace" */
  insert_workplace_one?: Maybe<Workplace>;
  /** update single row of the table: "bus_stops" */
  updateBusStop?: Maybe<BusStops>;
  /** update single row of the table: "bus_stop_departures" */
  updateBusStopDeparture?: Maybe<BusStopDepartures>;
  /** update data of the table: "bus_stop_departures" */
  updateBusStopDepartures?: Maybe<BusStopDepartures_Mutation_Response>;
  /** update data of the table: "bus_stops" */
  updateBusStops?: Maybe<BusStops_Mutation_Response>;
  /** update single row of the table: "cmdb_relations" */
  updateCmdbRelation?: Maybe<CmdbRelations>;
  /** update data of the table: "cmdb_relations" */
  updateCmdbRelations?: Maybe<CmdbRelations_Mutation_Response>;
  /** update single row of the table: "customers" */
  updateCustomer?: Maybe<Customers>;
  /** update data of the table: "customers" */
  updateCustomers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "events" */
  updateEvent?: Maybe<Events>;
  /** update data of the table: "events" */
  updateEvents?: Maybe<Events_Mutation_Response>;
  /** update multiples rows of table: "cmdb_relations" */
  updateManyCmdbRelations?: Maybe<Array<Maybe<CmdbRelations_Mutation_Response>>>;
  /** update single row of the table: "offer" */
  updateOffer?: Maybe<Offer>;
  /** update data of the table: "offer" */
  updateOffers?: Maybe<Offer_Mutation_Response>;
  /** update single row of the table: "orders" */
  updateOrder?: Maybe<Orders>;
  /** update single row of the table: "order_items" */
  updateOrderItem?: Maybe<Order_Items>;
  /** update data of the table: "order_items" */
  updateOrderItems?: Maybe<Order_Items_Mutation_Response>;
  /** update data of the table: "orders" */
  updateOrders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "organizations" */
  updateOrganization?: Maybe<Organizations>;
  /** update data of the table: "organizations" */
  updateOrganizations?: Maybe<Organizations_Mutation_Response>;
  /** update single row of the table: "products" */
  updateProduct?: Maybe<Products>;
  /** update data of the table: "products" */
  updateProducts?: Maybe<Products_Mutation_Response>;
  /** update data of the table: "test_01" */
  updateTest01?: Maybe<Test01_Mutation_Response>;
  /** update single row of the table: "test_jednotne_cislo" */
  updateTestJednotneCislo?: Maybe<TestJednotneCislo>;
  /** update data of the table: "test_jednotne_cislo" */
  updateTestJednotneCislos?: Maybe<TestJednotneCislo_Mutation_Response>;
  /** update multiples rows of table: "test_jednotne_cislo" */
  updateTestJednotneCislosMany?: Maybe<Array<Maybe<TestJednotneCislo_Mutation_Response>>>;
  /** update single row of the table: "test_x" */
  updateTestX?: Maybe<TestX>;
  /** update data of the table: "test_x" */
  updateTestXes?: Maybe<TestX_Mutation_Response>;
  /** update single row of the table: "test_01" */
  update_Test01_by_pk?: Maybe<Test01>;
  /** update multiples rows of table: "test_01" */
  update_Test01_many?: Maybe<Array<Maybe<Test01_Mutation_Response>>>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "answers" */
  update_answers?: Maybe<Answers_Mutation_Response>;
  /** update single row of the table: "answers" */
  update_answers_by_pk?: Maybe<Answers>;
  /** update multiples rows of table: "answers" */
  update_answers_many?: Maybe<Array<Maybe<Answers_Mutation_Response>>>;
  /** update data of the table: "attributes" */
  update_attributes?: Maybe<Attributes_Mutation_Response>;
  /** update single row of the table: "attributes" */
  update_attributes_by_pk?: Maybe<Attributes>;
  /** update multiples rows of table: "attributes" */
  update_attributes_many?: Maybe<Array<Maybe<Attributes_Mutation_Response>>>;
  /** update data of the table: "batch543" */
  update_batch543?: Maybe<Batch543_Mutation_Response>;
  /** update single row of the table: "batch543" */
  update_batch543_by_pk?: Maybe<Batch543>;
  /** update data of the table: "batch543_items" */
  update_batch543_items?: Maybe<Batch543_Items_Mutation_Response>;
  /** update single row of the table: "batch543_items" */
  update_batch543_items_by_pk?: Maybe<Batch543_Items>;
  /** update multiples rows of table: "batch543_items" */
  update_batch543_items_many?: Maybe<Array<Maybe<Batch543_Items_Mutation_Response>>>;
  /** update multiples rows of table: "batch543" */
  update_batch543_many?: Maybe<Array<Maybe<Batch543_Mutation_Response>>>;
  /** update multiples rows of table: "bus_stop_departures" */
  update_busStopDepartures_many?: Maybe<Array<Maybe<BusStopDepartures_Mutation_Response>>>;
  /** update multiples rows of table: "bus_stops" */
  update_busStops_many?: Maybe<Array<Maybe<BusStops_Mutation_Response>>>;
  /** update data of the table: "ci" */
  update_ci?: Maybe<Ci_Mutation_Response>;
  /** update data of the table: "ciWithRels" */
  update_ciWithRels?: Maybe<CiWithRels_Mutation_Response>;
  /** update single row of the table: "ciWithRels" */
  update_ciWithRels_by_pk?: Maybe<CiWithRels>;
  /** update multiples rows of table: "ciWithRels" */
  update_ciWithRels_many?: Maybe<Array<Maybe<CiWithRels_Mutation_Response>>>;
  /** update single row of the table: "ci" */
  update_ci_by_pk?: Maybe<Ci>;
  /** update multiples rows of table: "ci" */
  update_ci_many?: Maybe<Array<Maybe<Ci_Mutation_Response>>>;
  /** update data of the table: "cmdb" */
  update_cmdb?: Maybe<Cmdb_Mutation_Response>;
  update_cmdbRelationsNeighbourscounts?: Maybe<CmdbRelationsNeighbourscounts_Mutation_Response>;
  update_cmdbRelationsNeighbourscounts_by_pk?: Maybe<CmdbRelationsNeighbourscounts>;
  update_cmdbRelationsNeighbourscounts_many?: Maybe<Array<Maybe<CmdbRelationsNeighbourscounts_Mutation_Response>>>;
  /** update single row of the table: "cmdb" */
  update_cmdb_by_pk?: Maybe<Cmdb>;
  /** update multiples rows of table: "cmdb" */
  update_cmdb_many?: Maybe<Array<Maybe<Cmdb_Mutation_Response>>>;
  /** update data of the table: "configurationItems" */
  update_configurationItems?: Maybe<ConfigurationItems_Mutation_Response>;
  /** update single row of the table: "configurationItems" */
  update_configurationItems_by_pk?: Maybe<ConfigurationItems>;
  /** update multiples rows of table: "configurationItems" */
  update_configurationItems_many?: Maybe<Array<Maybe<ConfigurationItems_Mutation_Response>>>;
  /** update data of the table: "contracts" */
  update_contracts?: Maybe<Contracts_Mutation_Response>;
  /** update single row of the table: "contracts" */
  update_contracts_by_pk?: Maybe<Contracts>;
  /** update multiples rows of table: "contracts" */
  update_contracts_many?: Maybe<Array<Maybe<Contracts_Mutation_Response>>>;
  /** update data of the table: "customer_types" */
  update_customer_types?: Maybe<Customer_Types_Mutation_Response>;
  /** update single row of the table: "customer_types" */
  update_customer_types_by_pk?: Maybe<Customer_Types>;
  /** update multiples rows of table: "customer_types" */
  update_customer_types_many?: Maybe<Array<Maybe<Customer_Types_Mutation_Response>>>;
  /** update multiples rows of table: "customers" */
  update_customers_many?: Maybe<Array<Maybe<Customers_Mutation_Response>>>;
  /** update data of the table: "departments" */
  update_departments?: Maybe<Departments_Mutation_Response>;
  /** update single row of the table: "departments" */
  update_departments_by_pk?: Maybe<Departments>;
  /** update multiples rows of table: "departments" */
  update_departments_many?: Maybe<Array<Maybe<Departments_Mutation_Response>>>;
  /** update data of the table: "desh" */
  update_desh?: Maybe<Desh_Mutation_Response>;
  /** update single row of the table: "desh" */
  update_desh_by_pk?: Maybe<Desh>;
  /** update multiples rows of table: "desh" */
  update_desh_many?: Maybe<Array<Maybe<Desh_Mutation_Response>>>;
  /** update data of the table: "desh_products" */
  update_desh_products?: Maybe<Desh_Products_Mutation_Response>;
  /** update single row of the table: "desh_products" */
  update_desh_products_by_pk?: Maybe<Desh_Products>;
  /** update multiples rows of table: "desh_products" */
  update_desh_products_many?: Maybe<Array<Maybe<Desh_Products_Mutation_Response>>>;
  /** update data of the table: "desh_sales" */
  update_desh_sales?: Maybe<Desh_Sales_Mutation_Response>;
  /** update single row of the table: "desh_sales" */
  update_desh_sales_by_pk?: Maybe<Desh_Sales>;
  /** update multiples rows of table: "desh_sales" */
  update_desh_sales_many?: Maybe<Array<Maybe<Desh_Sales_Mutation_Response>>>;
  /** update data of the table: "desh_traffic" */
  update_desh_traffic?: Maybe<Desh_Traffic_Mutation_Response>;
  /** update single row of the table: "desh_traffic" */
  update_desh_traffic_by_pk?: Maybe<Desh_Traffic>;
  /** update multiples rows of table: "desh_traffic" */
  update_desh_traffic_many?: Maybe<Array<Maybe<Desh_Traffic_Mutation_Response>>>;
  /** update data of the table: "enum_test_types" */
  update_enum_test_types?: Maybe<Enum_Test_Types_Mutation_Response>;
  /** update single row of the table: "enum_test_types" */
  update_enum_test_types_by_pk?: Maybe<Enum_Test_Types>;
  /** update multiples rows of table: "enum_test_types" */
  update_enum_test_types_many?: Maybe<Array<Maybe<Enum_Test_Types_Mutation_Response>>>;
  /** update multiples rows of table: "events" */
  update_events_many?: Maybe<Array<Maybe<Events_Mutation_Response>>>;
  /** update data of the table: "from_nodes" */
  update_from_nodes?: Maybe<From_Nodes_Mutation_Response>;
  /** update single row of the table: "from_nodes" */
  update_from_nodes_by_pk?: Maybe<From_Nodes>;
  /** update multiples rows of table: "from_nodes" */
  update_from_nodes_many?: Maybe<Array<Maybe<From_Nodes_Mutation_Response>>>;
  /** update data of the table: "hall" */
  update_hall?: Maybe<Hall_Mutation_Response>;
  /** update single row of the table: "hall" */
  update_hall_by_pk?: Maybe<Hall>;
  /** update multiples rows of table: "hall" */
  update_hall_many?: Maybe<Array<Maybe<Hall_Mutation_Response>>>;
  /** update data of the table: "map_points" */
  update_mapPoints?: Maybe<MapPoints_Mutation_Response>;
  /** update single row of the table: "map_points" */
  update_mapPoints_by_pk?: Maybe<MapPoints>;
  /** update multiples rows of table: "map_points" */
  update_mapPoints_many?: Maybe<Array<Maybe<MapPoints_Mutation_Response>>>;
  /** update data of the table: "neighbourPairs" */
  update_neighbourPairs?: Maybe<NeighbourPairs_Mutation_Response>;
  /** update single row of the table: "neighbourPairs" */
  update_neighbourPairs_by_pk?: Maybe<NeighbourPairs>;
  /** update multiples rows of table: "neighbourPairs" */
  update_neighbourPairs_many?: Maybe<Array<Maybe<NeighbourPairs_Mutation_Response>>>;
  /** update multiples rows of table: "offer" */
  update_offer_many?: Maybe<Array<Maybe<Offer_Mutation_Response>>>;
  /** update multiples rows of table: "order_items" */
  update_order_items_many?: Maybe<Array<Maybe<Order_Items_Mutation_Response>>>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "organization_partnership_levels" */
  update_organization_partnership_levels?: Maybe<Organization_Partnership_Levels_Mutation_Response>;
  /** update single row of the table: "organization_partnership_levels" */
  update_organization_partnership_levels_by_pk?: Maybe<Organization_Partnership_Levels>;
  /** update multiples rows of table: "organization_partnership_levels" */
  update_organization_partnership_levels_many?: Maybe<Array<Maybe<Organization_Partnership_Levels_Mutation_Response>>>;
  /** update data of the table: "organization_types" */
  update_organization_types?: Maybe<Organization_Types_Mutation_Response>;
  /** update single row of the table: "organization_types" */
  update_organization_types_by_pk?: Maybe<Organization_Types>;
  /** update multiples rows of table: "organization_types" */
  update_organization_types_many?: Maybe<Array<Maybe<Organization_Types_Mutation_Response>>>;
  /** update data of the table: "organizationsNIS" */
  update_organizationsNIS?: Maybe<OrganizationsNis_Mutation_Response>;
  /** update single row of the table: "organizationsNIS" */
  update_organizationsNIS_by_pk?: Maybe<OrganizationsNis>;
  /** update multiples rows of table: "organizationsNIS" */
  update_organizationsNIS_many?: Maybe<Array<Maybe<OrganizationsNis_Mutation_Response>>>;
  /** update multiples rows of table: "organizations" */
  update_organizations_many?: Maybe<Array<Maybe<Organizations_Mutation_Response>>>;
  /** update data of the table: "practicioners" */
  update_practicioners?: Maybe<Practicioners_Mutation_Response>;
  /** update single row of the table: "practicioners" */
  update_practicioners_by_pk?: Maybe<Practicioners>;
  /** update multiples rows of table: "practicioners" */
  update_practicioners_many?: Maybe<Array<Maybe<Practicioners_Mutation_Response>>>;
  /** update data of the table: "product_availability" */
  update_product_availability?: Maybe<Product_Availability_Mutation_Response>;
  /** update single row of the table: "product_availability" */
  update_product_availability_by_pk?: Maybe<Product_Availability>;
  /** update multiples rows of table: "product_availability" */
  update_product_availability_many?: Maybe<Array<Maybe<Product_Availability_Mutation_Response>>>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
  /** update data of the table: "question" */
  update_question?: Maybe<Question_Mutation_Response>;
  /** update single row of the table: "question" */
  update_question_by_pk?: Maybe<Question>;
  /** update data of the table: "question_category" */
  update_question_category?: Maybe<Question_Category_Mutation_Response>;
  /** update single row of the table: "question_category" */
  update_question_category_by_pk?: Maybe<Question_Category>;
  /** update multiples rows of table: "question_category" */
  update_question_category_many?: Maybe<Array<Maybe<Question_Category_Mutation_Response>>>;
  /** update multiples rows of table: "question" */
  update_question_many?: Maybe<Array<Maybe<Question_Mutation_Response>>>;
  /** update data of the table: "site" */
  update_site?: Maybe<Site_Mutation_Response>;
  /** update single row of the table: "site" */
  update_site_by_pk?: Maybe<Site>;
  /** update multiples rows of table: "site" */
  update_site_many?: Maybe<Array<Maybe<Site_Mutation_Response>>>;
  /** update data of the table: "status_types" */
  update_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** update single row of the table: "status_types" */
  update_status_types_by_pk?: Maybe<Status_Types>;
  /** update multiples rows of table: "status_types" */
  update_status_types_many?: Maybe<Array<Maybe<Status_Types_Mutation_Response>>>;
  /** update data of the table: "survey" */
  update_survey?: Maybe<Survey_Mutation_Response>;
  /** update single row of the table: "survey" */
  update_survey_by_pk?: Maybe<Survey>;
  /** update multiples rows of table: "survey" */
  update_survey_many?: Maybe<Array<Maybe<Survey_Mutation_Response>>>;
  /** update data of the table: "survey_photos" */
  update_survey_photos?: Maybe<Survey_Photos_Mutation_Response>;
  /** update single row of the table: "survey_photos" */
  update_survey_photos_by_pk?: Maybe<Survey_Photos>;
  /** update multiples rows of table: "survey_photos" */
  update_survey_photos_many?: Maybe<Array<Maybe<Survey_Photos_Mutation_Response>>>;
  /** update multiples rows of table: "test_x" */
  update_testX_many?: Maybe<Array<Maybe<TestX_Mutation_Response>>>;
  /** update data of the table: "topology.layer" */
  update_topology_layer?: Maybe<Topology_Layer_Mutation_Response>;
  /** update single row of the table: "topology.layer" */
  update_topology_layer_by_pk?: Maybe<Topology_Layer>;
  /** update multiples rows of table: "topology.layer" */
  update_topology_layer_many?: Maybe<Array<Maybe<Topology_Layer_Mutation_Response>>>;
  /** update data of the table: "topology.topology" */
  update_topology_topology?: Maybe<Topology_Topology_Mutation_Response>;
  /** update single row of the table: "topology.topology" */
  update_topology_topology_by_pk?: Maybe<Topology_Topology>;
  /** update multiples rows of table: "topology.topology" */
  update_topology_topology_many?: Maybe<Array<Maybe<Topology_Topology_Mutation_Response>>>;
  /** update data of the table: "types_test" */
  update_types_test?: Maybe<Types_Test_Mutation_Response>;
  /** update single row of the table: "types_test" */
  update_types_test_by_pk?: Maybe<Types_Test>;
  /** update multiples rows of table: "types_test" */
  update_types_test_many?: Maybe<Array<Maybe<Types_Test_Mutation_Response>>>;
  /** update data of the table: "workplace" */
  update_workplace?: Maybe<Workplace_Mutation_Response>;
  /** update single row of the table: "workplace" */
  update_workplace_by_pk?: Maybe<Workplace>;
  /** update data of the table: "workplace_item" */
  update_workplace_item?: Maybe<Workplace_Item_Mutation_Response>;
  /** update single row of the table: "workplace_item" */
  update_workplace_item_by_pk?: Maybe<Workplace_Item>;
  /** update multiples rows of table: "workplace_item" */
  update_workplace_item_many?: Maybe<Array<Maybe<Workplace_Item_Mutation_Response>>>;
  /** update multiples rows of table: "workplace" */
  update_workplace_many?: Maybe<Array<Maybe<Workplace_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootAbortMultipartUploadArgs = {
  fileKey: Scalars['String'];
  uploadId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCompleteMultipartUploadArgs = {
  fileKey: Scalars['String'];
  parts?: InputMaybe<Array<InputMaybe<PartInput>>>;
  uploadId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootCreateMultipartUploadArgs = {
  fileKey: Scalars['String'];
  metadata?: InputMaybe<Scalars['String']>;
  numParts?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootDeleteBusStopArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteBusStopDepartureArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteBusStopDeparturesArgs = {
  where: BusStopDepartures_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBusStopsArgs = {
  where: BusStops_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteCmdbRelationArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteCmdbRelationsArgs = {
  where: CmdbRelations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteCustomerArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteCustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteEventArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteEventsArgs = {
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteOfferArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOffersArgs = {
  where: Offer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteOrderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOrderItemArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOrderItemsArgs = {
  where: Order_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteOrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteOrganizationArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOrganizationsArgs = {
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteProductArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTestJednotneCisloArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTestJednotneCislosArgs = {
  where: TestJednotneCislo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTestXArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTestXesArgs = {
  where: TestX_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test01Args = {
  where: Test01_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test01_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_AnswersArgs = {
  where: Answers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Answers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_AttributesArgs = {
  where: Attributes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Attributes_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Batch543Args = {
  where: Batch543_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Batch543_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Batch543_ItemsArgs = {
  where: Batch543_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Batch543_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CiArgs = {
  where: Ci_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CiWithRelsArgs = {
  where: CiWithRels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CiWithRels_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Ci_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CmdbArgs = {
  where: Cmdb_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CmdbRelationsNeighbourscountsArgs = {
  where: CmdbRelationsNeighbourscounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CmdbRelationsNeighbourscounts_By_PkArgs = {
  fk: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Cmdb_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ConfigurationItemsArgs = {
  where: ConfigurationItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ConfigurationItems_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ContractsArgs = {
  where: Contracts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contracts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Customer_TypesArgs = {
  where: Customer_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customer_Types_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_DepartmentsArgs = {
  where: Departments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Departments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_DeshArgs = {
  where: Desh_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Desh_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Desh_ProductsArgs = {
  where: Desh_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Desh_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Desh_SalesArgs = {
  where: Desh_Sales_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Desh_Sales_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Desh_TrafficArgs = {
  where: Desh_Traffic_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Desh_Traffic_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Enum_Test_TypesArgs = {
  where: Enum_Test_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Enum_Test_Types_By_PkArgs = {
  int_enum: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_From_NodesArgs = {
  where: From_Nodes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_From_Nodes_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_HallArgs = {
  where: Hall_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hall_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MapPointsArgs = {
  where: MapPoints_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MapPoints_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_NeighbourPairsArgs = {
  where: NeighbourPairs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_NeighbourPairs_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_Partnership_LevelsArgs = {
  where: Organization_Partnership_Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Partnership_Levels_By_PkArgs = {
  level: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_TypesArgs = {
  where: Organization_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Types_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizationsNisArgs = {
  where: OrganizationsNis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OrganizationsNis_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PracticionersArgs = {
  where: Practicioners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Practicioners_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Product_AvailabilityArgs = {
  where: Product_Availability_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Availability_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionArgs = {
  where: Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Question_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Question_CategoryArgs = {
  where: Question_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Question_Category_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SiteArgs = {
  where: Site_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Site_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Status_TypesArgs = {
  where: Status_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Status_Types_By_PkArgs = {
  status: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_SurveyArgs = {
  where: Survey_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Survey_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Survey_PhotosArgs = {
  where: Survey_Photos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Survey_Photos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Topology_LayerArgs = {
  where: Topology_Layer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Topology_Layer_By_PkArgs = {
  layer_id: Scalars['Int'];
  topology_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Topology_TopologyArgs = {
  where: Topology_Topology_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Topology_Topology_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Types_TestArgs = {
  where: Types_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Types_Test_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_WorkplaceArgs = {
  where: Workplace_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workplace_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Workplace_ItemArgs = {
  where: Workplace_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workplace_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertBusStopArgs = {
  object: BusStops_Insert_Input;
  on_conflict?: InputMaybe<BusStops_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBusStopDepartureArgs = {
  object: BusStopDepartures_Insert_Input;
  on_conflict?: InputMaybe<BusStopDepartures_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBusStopDeparturesArgs = {
  objects: Array<BusStopDepartures_Insert_Input>;
  on_conflict?: InputMaybe<BusStopDepartures_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBusStopsArgs = {
  objects: Array<BusStops_Insert_Input>;
  on_conflict?: InputMaybe<BusStops_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCmdbRelationArgs = {
  object: CmdbRelations_Insert_Input;
  on_conflict?: InputMaybe<CmdbRelations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCmdbRelationsArgs = {
  objects: Array<CmdbRelations_Insert_Input>;
  on_conflict?: InputMaybe<CmdbRelations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertContractsArgs = {
  objects: Array<Contracts_Insert_Input>;
  on_conflict?: InputMaybe<Contracts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCustomerArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertEventArgs = {
  object: Events_Insert_Input;
  on_conflict?: InputMaybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertEventsArgs = {
  objects: Array<Events_Insert_Input>;
  on_conflict?: InputMaybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOfferArgs = {
  object: Offer_Insert_Input;
  on_conflict?: InputMaybe<Offer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOffersArgs = {
  objects: Array<Offer_Insert_Input>;
  on_conflict?: InputMaybe<Offer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOrderArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOrderitemArgs = {
  object: Order_Items_Insert_Input;
  on_conflict?: InputMaybe<Order_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOrderitemsArgs = {
  objects: Array<Order_Items_Insert_Input>;
  on_conflict?: InputMaybe<Order_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOrganizationArgs = {
  object: Organizations_Insert_Input;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPracticionersArgs = {
  objects: Array<Practicioners_Insert_Input>;
  on_conflict?: InputMaybe<Practicioners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertProductArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTestJednotneCisloArgs = {
  object: TestJednotneCislo_Insert_Input;
  on_conflict?: InputMaybe<TestJednotneCislo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTestJednotneCislosArgs = {
  objects: Array<TestJednotneCislo_Insert_Input>;
  on_conflict?: InputMaybe<TestJednotneCislo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTestXArgs = {
  object: TestX_Insert_Input;
  on_conflict?: InputMaybe<TestX_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTestXesArgs = {
  objects: Array<TestX_Insert_Input>;
  on_conflict?: InputMaybe<TestX_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test01Args = {
  objects: Array<Test01_Insert_Input>;
  on_conflict?: InputMaybe<Test01_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test01_OneArgs = {
  object: Test01_Insert_Input;
  on_conflict?: InputMaybe<Test01_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AnswersArgs = {
  objects: Array<Answers_Insert_Input>;
  on_conflict?: InputMaybe<Answers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Answers_OneArgs = {
  object: Answers_Insert_Input;
  on_conflict?: InputMaybe<Answers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AttributesArgs = {
  objects: Array<Attributes_Insert_Input>;
  on_conflict?: InputMaybe<Attributes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Attributes_OneArgs = {
  object: Attributes_Insert_Input;
  on_conflict?: InputMaybe<Attributes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Batch543Args = {
  objects: Array<Batch543_Insert_Input>;
  on_conflict?: InputMaybe<Batch543_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Batch543_ItemsArgs = {
  objects: Array<Batch543_Items_Insert_Input>;
  on_conflict?: InputMaybe<Batch543_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Batch543_Items_OneArgs = {
  object: Batch543_Items_Insert_Input;
  on_conflict?: InputMaybe<Batch543_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Batch543_OneArgs = {
  object: Batch543_Insert_Input;
  on_conflict?: InputMaybe<Batch543_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CiArgs = {
  objects: Array<Ci_Insert_Input>;
  on_conflict?: InputMaybe<Ci_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CiWithRelsArgs = {
  objects: Array<CiWithRels_Insert_Input>;
  on_conflict?: InputMaybe<CiWithRels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CiWithRels_OneArgs = {
  object: CiWithRels_Insert_Input;
  on_conflict?: InputMaybe<CiWithRels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ci_OneArgs = {
  object: Ci_Insert_Input;
  on_conflict?: InputMaybe<Ci_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CmdbArgs = {
  objects: Array<Cmdb_Insert_Input>;
  on_conflict?: InputMaybe<Cmdb_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CmdbRelationsNeighbourscountsArgs = {
  objects: Array<CmdbRelationsNeighbourscounts_Insert_Input>;
  on_conflict?: InputMaybe<CmdbRelationsNeighbourscounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CmdbRelationsNeighbourscounts_OneArgs = {
  object: CmdbRelationsNeighbourscounts_Insert_Input;
  on_conflict?: InputMaybe<CmdbRelationsNeighbourscounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cmdb_OneArgs = {
  object: Cmdb_Insert_Input;
  on_conflict?: InputMaybe<Cmdb_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConfigurationItemsArgs = {
  objects: Array<ConfigurationItems_Insert_Input>;
  on_conflict?: InputMaybe<ConfigurationItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConfigurationItems_OneArgs = {
  object: ConfigurationItems_Insert_Input;
  on_conflict?: InputMaybe<ConfigurationItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contracts_OneArgs = {
  object: Contracts_Insert_Input;
  on_conflict?: InputMaybe<Contracts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_TypesArgs = {
  objects: Array<Customer_Types_Insert_Input>;
  on_conflict?: InputMaybe<Customer_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customer_Types_OneArgs = {
  object: Customer_Types_Insert_Input;
  on_conflict?: InputMaybe<Customer_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DepartmentsArgs = {
  objects: Array<Departments_Insert_Input>;
  on_conflict?: InputMaybe<Departments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Departments_OneArgs = {
  object: Departments_Insert_Input;
  on_conflict?: InputMaybe<Departments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DeshArgs = {
  objects: Array<Desh_Insert_Input>;
  on_conflict?: InputMaybe<Desh_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Desh_OneArgs = {
  object: Desh_Insert_Input;
  on_conflict?: InputMaybe<Desh_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Desh_ProductsArgs = {
  objects: Array<Desh_Products_Insert_Input>;
  on_conflict?: InputMaybe<Desh_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Desh_Products_OneArgs = {
  object: Desh_Products_Insert_Input;
  on_conflict?: InputMaybe<Desh_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Desh_SalesArgs = {
  objects: Array<Desh_Sales_Insert_Input>;
  on_conflict?: InputMaybe<Desh_Sales_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Desh_Sales_OneArgs = {
  object: Desh_Sales_Insert_Input;
  on_conflict?: InputMaybe<Desh_Sales_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Desh_TrafficArgs = {
  objects: Array<Desh_Traffic_Insert_Input>;
  on_conflict?: InputMaybe<Desh_Traffic_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Desh_Traffic_OneArgs = {
  object: Desh_Traffic_Insert_Input;
  on_conflict?: InputMaybe<Desh_Traffic_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Enum_Test_TypesArgs = {
  objects: Array<Enum_Test_Types_Insert_Input>;
  on_conflict?: InputMaybe<Enum_Test_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Enum_Test_Types_OneArgs = {
  object: Enum_Test_Types_Insert_Input;
  on_conflict?: InputMaybe<Enum_Test_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_From_NodesArgs = {
  objects: Array<From_Nodes_Insert_Input>;
  on_conflict?: InputMaybe<From_Nodes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_From_Nodes_OneArgs = {
  object: From_Nodes_Insert_Input;
  on_conflict?: InputMaybe<From_Nodes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HallArgs = {
  objects: Array<Hall_Insert_Input>;
  on_conflict?: InputMaybe<Hall_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hall_OneArgs = {
  object: Hall_Insert_Input;
  on_conflict?: InputMaybe<Hall_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MapPointsArgs = {
  objects: Array<MapPoints_Insert_Input>;
  on_conflict?: InputMaybe<MapPoints_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MapPoints_OneArgs = {
  object: MapPoints_Insert_Input;
  on_conflict?: InputMaybe<MapPoints_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NeighbourPairsArgs = {
  objects: Array<NeighbourPairs_Insert_Input>;
  on_conflict?: InputMaybe<NeighbourPairs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NeighbourPairs_OneArgs = {
  object: NeighbourPairs_Insert_Input;
  on_conflict?: InputMaybe<NeighbourPairs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Partnership_LevelsArgs = {
  objects: Array<Organization_Partnership_Levels_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Partnership_Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Partnership_Levels_OneArgs = {
  object: Organization_Partnership_Levels_Insert_Input;
  on_conflict?: InputMaybe<Organization_Partnership_Levels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_TypesArgs = {
  objects: Array<Organization_Types_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Types_OneArgs = {
  object: Organization_Types_Insert_Input;
  on_conflict?: InputMaybe<Organization_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationsNisArgs = {
  objects: Array<OrganizationsNis_Insert_Input>;
  on_conflict?: InputMaybe<OrganizationsNis_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationsNis_OneArgs = {
  object: OrganizationsNis_Insert_Input;
  on_conflict?: InputMaybe<OrganizationsNis_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Practicioners_OneArgs = {
  object: Practicioners_Insert_Input;
  on_conflict?: InputMaybe<Practicioners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_AvailabilityArgs = {
  objects: Array<Product_Availability_Insert_Input>;
  on_conflict?: InputMaybe<Product_Availability_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Availability_OneArgs = {
  object: Product_Availability_Insert_Input;
  on_conflict?: InputMaybe<Product_Availability_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionArgs = {
  objects: Array<Question_Insert_Input>;
  on_conflict?: InputMaybe<Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Question_CategoryArgs = {
  objects: Array<Question_Category_Insert_Input>;
  on_conflict?: InputMaybe<Question_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Question_Category_OneArgs = {
  object: Question_Category_Insert_Input;
  on_conflict?: InputMaybe<Question_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Question_OneArgs = {
  object: Question_Insert_Input;
  on_conflict?: InputMaybe<Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SiteArgs = {
  objects: Array<Site_Insert_Input>;
  on_conflict?: InputMaybe<Site_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Site_OneArgs = {
  object: Site_Insert_Input;
  on_conflict?: InputMaybe<Site_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_TypesArgs = {
  objects: Array<Status_Types_Insert_Input>;
  on_conflict?: InputMaybe<Status_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_Types_OneArgs = {
  object: Status_Types_Insert_Input;
  on_conflict?: InputMaybe<Status_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SurveyArgs = {
  objects: Array<Survey_Insert_Input>;
  on_conflict?: InputMaybe<Survey_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Survey_OneArgs = {
  object: Survey_Insert_Input;
  on_conflict?: InputMaybe<Survey_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Survey_PhotosArgs = {
  objects: Array<Survey_Photos_Insert_Input>;
  on_conflict?: InputMaybe<Survey_Photos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Survey_Photos_OneArgs = {
  object: Survey_Photos_Insert_Input;
  on_conflict?: InputMaybe<Survey_Photos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Topology_LayerArgs = {
  objects: Array<Topology_Layer_Insert_Input>;
  on_conflict?: InputMaybe<Topology_Layer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Topology_Layer_OneArgs = {
  object: Topology_Layer_Insert_Input;
  on_conflict?: InputMaybe<Topology_Layer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Topology_TopologyArgs = {
  objects: Array<Topology_Topology_Insert_Input>;
  on_conflict?: InputMaybe<Topology_Topology_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Topology_Topology_OneArgs = {
  object: Topology_Topology_Insert_Input;
  on_conflict?: InputMaybe<Topology_Topology_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Types_TestArgs = {
  objects: Array<Types_Test_Insert_Input>;
  on_conflict?: InputMaybe<Types_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Types_Test_OneArgs = {
  object: Types_Test_Insert_Input;
  on_conflict?: InputMaybe<Types_Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorkplaceArgs = {
  objects: Array<Workplace_Insert_Input>;
  on_conflict?: InputMaybe<Workplace_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workplace_ItemArgs = {
  objects: Array<Workplace_Item_Insert_Input>;
  on_conflict?: InputMaybe<Workplace_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workplace_Item_OneArgs = {
  object: Workplace_Item_Insert_Input;
  on_conflict?: InputMaybe<Workplace_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workplace_OneArgs = {
  object: Workplace_Insert_Input;
  on_conflict?: InputMaybe<Workplace_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateBusStopArgs = {
  _inc?: InputMaybe<BusStops_Inc_Input>;
  _set?: InputMaybe<BusStops_Set_Input>;
  pk_columns: BusStops_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBusStopDepartureArgs = {
  _set?: InputMaybe<BusStopDepartures_Set_Input>;
  pk_columns: BusStopDepartures_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBusStopDeparturesArgs = {
  _set?: InputMaybe<BusStopDepartures_Set_Input>;
  where: BusStopDepartures_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBusStopsArgs = {
  _inc?: InputMaybe<BusStops_Inc_Input>;
  _set?: InputMaybe<BusStops_Set_Input>;
  where: BusStops_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateCmdbRelationArgs = {
  _set?: InputMaybe<CmdbRelations_Set_Input>;
  pk_columns: CmdbRelations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateCmdbRelationsArgs = {
  _set?: InputMaybe<CmdbRelations_Set_Input>;
  where: CmdbRelations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateCustomerArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateCustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateEventArgs = {
  _set?: InputMaybe<Events_Set_Input>;
  pk_columns: Events_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateEventsArgs = {
  _set?: InputMaybe<Events_Set_Input>;
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyCmdbRelationsArgs = {
  updates: Array<CmdbRelations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdateOfferArgs = {
  _set?: InputMaybe<Offer_Set_Input>;
  pk_columns: Offer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOffersArgs = {
  _set?: InputMaybe<Offer_Set_Input>;
  where: Offer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateOrderArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOrderItemArgs = {
  _inc?: InputMaybe<Order_Items_Inc_Input>;
  _set?: InputMaybe<Order_Items_Set_Input>;
  pk_columns: Order_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOrderItemsArgs = {
  _inc?: InputMaybe<Order_Items_Inc_Input>;
  _set?: InputMaybe<Order_Items_Set_Input>;
  where: Order_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateOrdersArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationArgs = {
  _inc?: InputMaybe<Organizations_Inc_Input>;
  _set?: InputMaybe<Organizations_Set_Input>;
  pk_columns: Organizations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOrganizationsArgs = {
  _inc?: InputMaybe<Organizations_Inc_Input>;
  _set?: InputMaybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateProductArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTest01Args = {
  _set?: InputMaybe<Test01_Set_Input>;
  where: Test01_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTestJednotneCisloArgs = {
  _set?: InputMaybe<TestJednotneCislo_Set_Input>;
  pk_columns: TestJednotneCislo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTestJednotneCislosArgs = {
  _set?: InputMaybe<TestJednotneCislo_Set_Input>;
  where: TestJednotneCislo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTestJednotneCislosManyArgs = {
  updates: Array<TestJednotneCislo_Updates>;
};


/** mutation root */
export type Mutation_RootUpdateTestXArgs = {
  _set?: InputMaybe<TestX_Set_Input>;
  pk_columns: TestX_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTestXesArgs = {
  _set?: InputMaybe<TestX_Set_Input>;
  where: TestX_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test01_By_PkArgs = {
  _set?: InputMaybe<Test01_Set_Input>;
  pk_columns: Test01_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Test01_ManyArgs = {
  updates: Array<Test01_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AnswersArgs = {
  _set?: InputMaybe<Answers_Set_Input>;
  where: Answers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Answers_By_PkArgs = {
  _set?: InputMaybe<Answers_Set_Input>;
  pk_columns: Answers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Answers_ManyArgs = {
  updates: Array<Answers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AttributesArgs = {
  _set?: InputMaybe<Attributes_Set_Input>;
  where: Attributes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Attributes_By_PkArgs = {
  _set?: InputMaybe<Attributes_Set_Input>;
  pk_columns: Attributes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Attributes_ManyArgs = {
  updates: Array<Attributes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Batch543Args = {
  _inc?: InputMaybe<Batch543_Inc_Input>;
  _set?: InputMaybe<Batch543_Set_Input>;
  where: Batch543_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Batch543_By_PkArgs = {
  _inc?: InputMaybe<Batch543_Inc_Input>;
  _set?: InputMaybe<Batch543_Set_Input>;
  pk_columns: Batch543_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Batch543_ItemsArgs = {
  _inc?: InputMaybe<Batch543_Items_Inc_Input>;
  _set?: InputMaybe<Batch543_Items_Set_Input>;
  where: Batch543_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Batch543_Items_By_PkArgs = {
  _inc?: InputMaybe<Batch543_Items_Inc_Input>;
  _set?: InputMaybe<Batch543_Items_Set_Input>;
  pk_columns: Batch543_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Batch543_Items_ManyArgs = {
  updates: Array<Batch543_Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Batch543_ManyArgs = {
  updates: Array<Batch543_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BusStopDepartures_ManyArgs = {
  updates: Array<BusStopDepartures_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BusStops_ManyArgs = {
  updates: Array<BusStops_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CiArgs = {
  _set?: InputMaybe<Ci_Set_Input>;
  where: Ci_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CiWithRelsArgs = {
  _set?: InputMaybe<CiWithRels_Set_Input>;
  where: CiWithRels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CiWithRels_By_PkArgs = {
  _set?: InputMaybe<CiWithRels_Set_Input>;
  pk_columns: CiWithRels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CiWithRels_ManyArgs = {
  updates: Array<CiWithRels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Ci_By_PkArgs = {
  _set?: InputMaybe<Ci_Set_Input>;
  pk_columns: Ci_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ci_ManyArgs = {
  updates: Array<Ci_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CmdbArgs = {
  _set?: InputMaybe<Cmdb_Set_Input>;
  where: Cmdb_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CmdbRelationsNeighbourscountsArgs = {
  _set?: InputMaybe<CmdbRelationsNeighbourscounts_Set_Input>;
  where: CmdbRelationsNeighbourscounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CmdbRelationsNeighbourscounts_By_PkArgs = {
  _set?: InputMaybe<CmdbRelationsNeighbourscounts_Set_Input>;
  pk_columns: CmdbRelationsNeighbourscounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CmdbRelationsNeighbourscounts_ManyArgs = {
  updates: Array<CmdbRelationsNeighbourscounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Cmdb_By_PkArgs = {
  _set?: InputMaybe<Cmdb_Set_Input>;
  pk_columns: Cmdb_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cmdb_ManyArgs = {
  updates: Array<Cmdb_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ConfigurationItemsArgs = {
  _set?: InputMaybe<ConfigurationItems_Set_Input>;
  where: ConfigurationItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ConfigurationItems_By_PkArgs = {
  _set?: InputMaybe<ConfigurationItems_Set_Input>;
  pk_columns: ConfigurationItems_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ConfigurationItems_ManyArgs = {
  updates: Array<ConfigurationItems_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ContractsArgs = {
  _inc?: InputMaybe<Contracts_Inc_Input>;
  _set?: InputMaybe<Contracts_Set_Input>;
  where: Contracts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contracts_By_PkArgs = {
  _inc?: InputMaybe<Contracts_Inc_Input>;
  _set?: InputMaybe<Contracts_Set_Input>;
  pk_columns: Contracts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contracts_ManyArgs = {
  updates: Array<Contracts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_TypesArgs = {
  _set?: InputMaybe<Customer_Types_Set_Input>;
  where: Customer_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_Types_By_PkArgs = {
  _set?: InputMaybe<Customer_Types_Set_Input>;
  pk_columns: Customer_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Customer_Types_ManyArgs = {
  updates: Array<Customer_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_ManyArgs = {
  updates: Array<Customers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DepartmentsArgs = {
  _set?: InputMaybe<Departments_Set_Input>;
  where: Departments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Departments_By_PkArgs = {
  _set?: InputMaybe<Departments_Set_Input>;
  pk_columns: Departments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Departments_ManyArgs = {
  updates: Array<Departments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DeshArgs = {
  _inc?: InputMaybe<Desh_Inc_Input>;
  _set?: InputMaybe<Desh_Set_Input>;
  where: Desh_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Desh_By_PkArgs = {
  _inc?: InputMaybe<Desh_Inc_Input>;
  _set?: InputMaybe<Desh_Set_Input>;
  pk_columns: Desh_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Desh_ManyArgs = {
  updates: Array<Desh_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Desh_ProductsArgs = {
  _set?: InputMaybe<Desh_Products_Set_Input>;
  where: Desh_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Desh_Products_By_PkArgs = {
  _set?: InputMaybe<Desh_Products_Set_Input>;
  pk_columns: Desh_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Desh_Products_ManyArgs = {
  updates: Array<Desh_Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Desh_SalesArgs = {
  _inc?: InputMaybe<Desh_Sales_Inc_Input>;
  _set?: InputMaybe<Desh_Sales_Set_Input>;
  where: Desh_Sales_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Desh_Sales_By_PkArgs = {
  _inc?: InputMaybe<Desh_Sales_Inc_Input>;
  _set?: InputMaybe<Desh_Sales_Set_Input>;
  pk_columns: Desh_Sales_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Desh_Sales_ManyArgs = {
  updates: Array<Desh_Sales_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Desh_TrafficArgs = {
  _inc?: InputMaybe<Desh_Traffic_Inc_Input>;
  _set?: InputMaybe<Desh_Traffic_Set_Input>;
  where: Desh_Traffic_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Desh_Traffic_By_PkArgs = {
  _inc?: InputMaybe<Desh_Traffic_Inc_Input>;
  _set?: InputMaybe<Desh_Traffic_Set_Input>;
  pk_columns: Desh_Traffic_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Desh_Traffic_ManyArgs = {
  updates: Array<Desh_Traffic_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Enum_Test_TypesArgs = {
  _set?: InputMaybe<Enum_Test_Types_Set_Input>;
  where: Enum_Test_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Enum_Test_Types_By_PkArgs = {
  _set?: InputMaybe<Enum_Test_Types_Set_Input>;
  pk_columns: Enum_Test_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Enum_Test_Types_ManyArgs = {
  updates: Array<Enum_Test_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Events_ManyArgs = {
  updates: Array<Events_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_From_NodesArgs = {
  _set?: InputMaybe<From_Nodes_Set_Input>;
  where: From_Nodes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_From_Nodes_By_PkArgs = {
  _set?: InputMaybe<From_Nodes_Set_Input>;
  pk_columns: From_Nodes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_From_Nodes_ManyArgs = {
  updates: Array<From_Nodes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HallArgs = {
  _set?: InputMaybe<Hall_Set_Input>;
  where: Hall_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hall_By_PkArgs = {
  _set?: InputMaybe<Hall_Set_Input>;
  pk_columns: Hall_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hall_ManyArgs = {
  updates: Array<Hall_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MapPointsArgs = {
  _set?: InputMaybe<MapPoints_Set_Input>;
  where: MapPoints_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_MapPoints_By_PkArgs = {
  _set?: InputMaybe<MapPoints_Set_Input>;
  pk_columns: MapPoints_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MapPoints_ManyArgs = {
  updates: Array<MapPoints_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NeighbourPairsArgs = {
  _set?: InputMaybe<NeighbourPairs_Set_Input>;
  where: NeighbourPairs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_NeighbourPairs_By_PkArgs = {
  _set?: InputMaybe<NeighbourPairs_Set_Input>;
  pk_columns: NeighbourPairs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NeighbourPairs_ManyArgs = {
  updates: Array<NeighbourPairs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Offer_ManyArgs = {
  updates: Array<Offer_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Items_ManyArgs = {
  updates: Array<Order_Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Partnership_LevelsArgs = {
  _set?: InputMaybe<Organization_Partnership_Levels_Set_Input>;
  where: Organization_Partnership_Levels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Partnership_Levels_By_PkArgs = {
  _set?: InputMaybe<Organization_Partnership_Levels_Set_Input>;
  pk_columns: Organization_Partnership_Levels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Partnership_Levels_ManyArgs = {
  updates: Array<Organization_Partnership_Levels_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_TypesArgs = {
  _set?: InputMaybe<Organization_Types_Set_Input>;
  where: Organization_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Types_By_PkArgs = {
  _set?: InputMaybe<Organization_Types_Set_Input>;
  pk_columns: Organization_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Types_ManyArgs = {
  updates: Array<Organization_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationsNisArgs = {
  _set?: InputMaybe<OrganizationsNis_Set_Input>;
  where: OrganizationsNis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationsNis_By_PkArgs = {
  _set?: InputMaybe<OrganizationsNis_Set_Input>;
  pk_columns: OrganizationsNis_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationsNis_ManyArgs = {
  updates: Array<OrganizationsNis_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_ManyArgs = {
  updates: Array<Organizations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PracticionersArgs = {
  _set?: InputMaybe<Practicioners_Set_Input>;
  where: Practicioners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Practicioners_By_PkArgs = {
  _set?: InputMaybe<Practicioners_Set_Input>;
  pk_columns: Practicioners_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Practicioners_ManyArgs = {
  updates: Array<Practicioners_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_AvailabilityArgs = {
  _set?: InputMaybe<Product_Availability_Set_Input>;
  where: Product_Availability_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Availability_By_PkArgs = {
  _set?: InputMaybe<Product_Availability_Set_Input>;
  pk_columns: Product_Availability_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Availability_ManyArgs = {
  updates: Array<Product_Availability_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionArgs = {
  _inc?: InputMaybe<Question_Inc_Input>;
  _set?: InputMaybe<Question_Set_Input>;
  where: Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Question_By_PkArgs = {
  _inc?: InputMaybe<Question_Inc_Input>;
  _set?: InputMaybe<Question_Set_Input>;
  pk_columns: Question_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Question_CategoryArgs = {
  _inc?: InputMaybe<Question_Category_Inc_Input>;
  _set?: InputMaybe<Question_Category_Set_Input>;
  where: Question_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Question_Category_By_PkArgs = {
  _inc?: InputMaybe<Question_Category_Inc_Input>;
  _set?: InputMaybe<Question_Category_Set_Input>;
  pk_columns: Question_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Question_Category_ManyArgs = {
  updates: Array<Question_Category_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Question_ManyArgs = {
  updates: Array<Question_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SiteArgs = {
  _set?: InputMaybe<Site_Set_Input>;
  where: Site_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Site_By_PkArgs = {
  _set?: InputMaybe<Site_Set_Input>;
  pk_columns: Site_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Site_ManyArgs = {
  updates: Array<Site_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Status_TypesArgs = {
  _set?: InputMaybe<Status_Types_Set_Input>;
  where: Status_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Status_Types_By_PkArgs = {
  _set?: InputMaybe<Status_Types_Set_Input>;
  pk_columns: Status_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Status_Types_ManyArgs = {
  updates: Array<Status_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SurveyArgs = {
  _inc?: InputMaybe<Survey_Inc_Input>;
  _set?: InputMaybe<Survey_Set_Input>;
  where: Survey_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Survey_By_PkArgs = {
  _inc?: InputMaybe<Survey_Inc_Input>;
  _set?: InputMaybe<Survey_Set_Input>;
  pk_columns: Survey_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Survey_ManyArgs = {
  updates: Array<Survey_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Survey_PhotosArgs = {
  _set?: InputMaybe<Survey_Photos_Set_Input>;
  where: Survey_Photos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Survey_Photos_By_PkArgs = {
  _set?: InputMaybe<Survey_Photos_Set_Input>;
  pk_columns: Survey_Photos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Survey_Photos_ManyArgs = {
  updates: Array<Survey_Photos_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TestX_ManyArgs = {
  updates: Array<TestX_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Topology_LayerArgs = {
  _inc?: InputMaybe<Topology_Layer_Inc_Input>;
  _set?: InputMaybe<Topology_Layer_Set_Input>;
  where: Topology_Layer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Topology_Layer_By_PkArgs = {
  _inc?: InputMaybe<Topology_Layer_Inc_Input>;
  _set?: InputMaybe<Topology_Layer_Set_Input>;
  pk_columns: Topology_Layer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Topology_Layer_ManyArgs = {
  updates: Array<Topology_Layer_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Topology_TopologyArgs = {
  _inc?: InputMaybe<Topology_Topology_Inc_Input>;
  _set?: InputMaybe<Topology_Topology_Set_Input>;
  where: Topology_Topology_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Topology_Topology_By_PkArgs = {
  _inc?: InputMaybe<Topology_Topology_Inc_Input>;
  _set?: InputMaybe<Topology_Topology_Set_Input>;
  pk_columns: Topology_Topology_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Topology_Topology_ManyArgs = {
  updates: Array<Topology_Topology_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Types_TestArgs = {
  _append?: InputMaybe<Types_Test_Append_Input>;
  _delete_at_path?: InputMaybe<Types_Test_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Types_Test_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Types_Test_Delete_Key_Input>;
  _inc?: InputMaybe<Types_Test_Inc_Input>;
  _prepend?: InputMaybe<Types_Test_Prepend_Input>;
  _set?: InputMaybe<Types_Test_Set_Input>;
  where: Types_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Types_Test_By_PkArgs = {
  _append?: InputMaybe<Types_Test_Append_Input>;
  _delete_at_path?: InputMaybe<Types_Test_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Types_Test_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Types_Test_Delete_Key_Input>;
  _inc?: InputMaybe<Types_Test_Inc_Input>;
  _prepend?: InputMaybe<Types_Test_Prepend_Input>;
  _set?: InputMaybe<Types_Test_Set_Input>;
  pk_columns: Types_Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Types_Test_ManyArgs = {
  updates: Array<Types_Test_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorkplaceArgs = {
  _set?: InputMaybe<Workplace_Set_Input>;
  where: Workplace_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workplace_By_PkArgs = {
  _set?: InputMaybe<Workplace_Set_Input>;
  pk_columns: Workplace_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workplace_ItemArgs = {
  _inc?: InputMaybe<Workplace_Item_Inc_Input>;
  _set?: InputMaybe<Workplace_Item_Set_Input>;
  where: Workplace_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workplace_Item_By_PkArgs = {
  _inc?: InputMaybe<Workplace_Item_Inc_Input>;
  _set?: InputMaybe<Workplace_Item_Set_Input>;
  pk_columns: Workplace_Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workplace_Item_ManyArgs = {
  updates: Array<Workplace_Item_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workplace_ManyArgs = {
  updates: Array<Workplace_Updates>;
};

/** metais - test */
export type NeighbourPairs = {
  __typename?: 'neighbourPairs';
  /** An object relationship */
  configurationItem: ConfigurationItems;
  configurationItems_fk: Scalars['uuid'];
  from_nodes_fk: Scalars['uuid'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "neighbourPairs" */
export type NeighbourPairs_Aggregate = {
  __typename?: 'neighbourPairs_aggregate';
  aggregate?: Maybe<NeighbourPairs_Aggregate_Fields>;
  nodes: Array<NeighbourPairs>;
};

export type NeighbourPairs_Aggregate_Bool_Exp = {
  count?: InputMaybe<NeighbourPairs_Aggregate_Bool_Exp_Count>;
};

export type NeighbourPairs_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<NeighbourPairs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<NeighbourPairs_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "neighbourPairs" */
export type NeighbourPairs_Aggregate_Fields = {
  __typename?: 'neighbourPairs_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<NeighbourPairs_Max_Fields>;
  min?: Maybe<NeighbourPairs_Min_Fields>;
};


/** aggregate fields of "neighbourPairs" */
export type NeighbourPairs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<NeighbourPairs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "neighbourPairs" */
export type NeighbourPairs_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<NeighbourPairs_Max_Order_By>;
  min?: InputMaybe<NeighbourPairs_Min_Order_By>;
};

/** input type for inserting array relation for remote table "neighbourPairs" */
export type NeighbourPairs_Arr_Rel_Insert_Input = {
  data: Array<NeighbourPairs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<NeighbourPairs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "neighbourPairs". All fields are combined with a logical 'AND'. */
export type NeighbourPairs_Bool_Exp = {
  _and?: InputMaybe<Array<NeighbourPairs_Bool_Exp>>;
  _not?: InputMaybe<NeighbourPairs_Bool_Exp>;
  _or?: InputMaybe<Array<NeighbourPairs_Bool_Exp>>;
  configurationItem?: InputMaybe<ConfigurationItems_Bool_Exp>;
  configurationItems_fk?: InputMaybe<Uuid_Comparison_Exp>;
  from_nodes_fk?: InputMaybe<Uuid_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "neighbourPairs" */
export enum NeighbourPairs_Constraint {
  /** unique or primary key constraint on columns "uuid" */
  NeighbourPairsPkey = 'neighbourPairs_pkey'
}

/** input type for inserting data into table "neighbourPairs" */
export type NeighbourPairs_Insert_Input = {
  configurationItem?: InputMaybe<ConfigurationItems_Obj_Rel_Insert_Input>;
  configurationItems_fk?: InputMaybe<Scalars['uuid']>;
  from_nodes_fk?: InputMaybe<Scalars['uuid']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type NeighbourPairs_Max_Fields = {
  __typename?: 'neighbourPairs_max_fields';
  configurationItems_fk?: Maybe<Scalars['uuid']>;
  from_nodes_fk?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "neighbourPairs" */
export type NeighbourPairs_Max_Order_By = {
  configurationItems_fk?: InputMaybe<Order_By>;
  from_nodes_fk?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type NeighbourPairs_Min_Fields = {
  __typename?: 'neighbourPairs_min_fields';
  configurationItems_fk?: Maybe<Scalars['uuid']>;
  from_nodes_fk?: Maybe<Scalars['uuid']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "neighbourPairs" */
export type NeighbourPairs_Min_Order_By = {
  configurationItems_fk?: InputMaybe<Order_By>;
  from_nodes_fk?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "neighbourPairs" */
export type NeighbourPairs_Mutation_Response = {
  __typename?: 'neighbourPairs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<NeighbourPairs>;
};

/** on_conflict condition type for table "neighbourPairs" */
export type NeighbourPairs_On_Conflict = {
  constraint: NeighbourPairs_Constraint;
  update_columns?: Array<NeighbourPairs_Update_Column>;
  where?: InputMaybe<NeighbourPairs_Bool_Exp>;
};

/** Ordering options when selecting data from "neighbourPairs". */
export type NeighbourPairs_Order_By = {
  configurationItem?: InputMaybe<ConfigurationItems_Order_By>;
  configurationItems_fk?: InputMaybe<Order_By>;
  from_nodes_fk?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: neighbourPairs */
export type NeighbourPairs_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "neighbourPairs" */
export enum NeighbourPairs_Select_Column {
  /** column name */
  ConfigurationItemsFk = 'configurationItems_fk',
  /** column name */
  FromNodesFk = 'from_nodes_fk',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "neighbourPairs" */
export type NeighbourPairs_Set_Input = {
  configurationItems_fk?: InputMaybe<Scalars['uuid']>;
  from_nodes_fk?: InputMaybe<Scalars['uuid']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "neighbourPairs" */
export type NeighbourPairs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: NeighbourPairs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type NeighbourPairs_Stream_Cursor_Value_Input = {
  configurationItems_fk?: InputMaybe<Scalars['uuid']>;
  from_nodes_fk?: InputMaybe<Scalars['uuid']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "neighbourPairs" */
export enum NeighbourPairs_Update_Column {
  /** column name */
  ConfigurationItemsFk = 'configurationItems_fk',
  /** column name */
  FromNodesFk = 'from_nodes_fk',
  /** column name */
  Uuid = 'uuid'
}

export type NeighbourPairs_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<NeighbourPairs_Set_Input>;
  /** filter the rows which have to be updated */
  where: NeighbourPairs_Bool_Exp;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "offer" */
export type Offer = {
  __typename?: 'offer';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An object relationship */
  offerFromOrganization?: Maybe<Organizations>;
  offerFromOrganizationId?: Maybe<Scalars['uuid']>;
  periodEndAt?: Maybe<Scalars['timestamptz']>;
  periodStartAt?: Maybe<Scalars['timestamptz']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "offer" */
export type Offer_Aggregate = {
  __typename?: 'offer_aggregate';
  aggregate?: Maybe<Offer_Aggregate_Fields>;
  nodes: Array<Offer>;
};

/** aggregate fields of "offer" */
export type Offer_Aggregate_Fields = {
  __typename?: 'offer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Offer_Max_Fields>;
  min?: Maybe<Offer_Min_Fields>;
};


/** aggregate fields of "offer" */
export type Offer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Offer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "offer". All fields are combined with a logical 'AND'. */
export type Offer_Bool_Exp = {
  _and?: InputMaybe<Array<Offer_Bool_Exp>>;
  _not?: InputMaybe<Offer_Bool_Exp>;
  _or?: InputMaybe<Array<Offer_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  offerFromOrganization?: InputMaybe<Organizations_Bool_Exp>;
  offerFromOrganizationId?: InputMaybe<Uuid_Comparison_Exp>;
  periodEndAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  periodStartAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "offer" */
export enum Offer_Constraint {
  /** unique or primary key constraint on columns "id" */
  OfferPkey = 'offer_pkey'
}

/** input type for inserting data into table "offer" */
export type Offer_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  offerFromOrganization?: InputMaybe<Organizations_Obj_Rel_Insert_Input>;
  offerFromOrganizationId?: InputMaybe<Scalars['uuid']>;
  periodEndAt?: InputMaybe<Scalars['timestamptz']>;
  periodStartAt?: InputMaybe<Scalars['timestamptz']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Offer_Max_Fields = {
  __typename?: 'offer_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  offerFromOrganizationId?: Maybe<Scalars['uuid']>;
  periodEndAt?: Maybe<Scalars['timestamptz']>;
  periodStartAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Offer_Min_Fields = {
  __typename?: 'offer_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  offerFromOrganizationId?: Maybe<Scalars['uuid']>;
  periodEndAt?: Maybe<Scalars['timestamptz']>;
  periodStartAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "offer" */
export type Offer_Mutation_Response = {
  __typename?: 'offer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Offer>;
};

/** on_conflict condition type for table "offer" */
export type Offer_On_Conflict = {
  constraint: Offer_Constraint;
  update_columns?: Array<Offer_Update_Column>;
  where?: InputMaybe<Offer_Bool_Exp>;
};

/** Ordering options when selecting data from "offer". */
export type Offer_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  offerFromOrganization?: InputMaybe<Organizations_Order_By>;
  offerFromOrganizationId?: InputMaybe<Order_By>;
  periodEndAt?: InputMaybe<Order_By>;
  periodStartAt?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: offer */
export type Offer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "offer" */
export enum Offer_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  OfferFromOrganizationId = 'offerFromOrganizationId',
  /** column name */
  PeriodEndAt = 'periodEndAt',
  /** column name */
  PeriodStartAt = 'periodStartAt',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "offer" */
export type Offer_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  offerFromOrganizationId?: InputMaybe<Scalars['uuid']>;
  periodEndAt?: InputMaybe<Scalars['timestamptz']>;
  periodStartAt?: InputMaybe<Scalars['timestamptz']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "offer" */
export type Offer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Offer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Offer_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  offerFromOrganizationId?: InputMaybe<Scalars['uuid']>;
  periodEndAt?: InputMaybe<Scalars['timestamptz']>;
  periodStartAt?: InputMaybe<Scalars['timestamptz']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "offer" */
export enum Offer_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  OfferFromOrganizationId = 'offerFromOrganizationId',
  /** column name */
  PeriodEndAt = 'periodEndAt',
  /** column name */
  PeriodStartAt = 'periodStartAt',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Offer_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Offer_Set_Input>;
  /** filter the rows which have to be updated */
  where: Offer_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** List of items */
export type Order_Items = {
  __typename?: 'order_items';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  /** An object relationship */
  order?: Maybe<Orders>;
  orders_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  /** An object relationship */
  product?: Maybe<Products>;
  product_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "order_items" */
export type Order_Items_Aggregate = {
  __typename?: 'order_items_aggregate';
  aggregate?: Maybe<Order_Items_Aggregate_Fields>;
  nodes: Array<Order_Items>;
};

export type Order_Items_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Order_Items_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Order_Items_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Order_Items_Aggregate_Bool_Exp_Count>;
};

export type Order_Items_Aggregate_Bool_Exp_Bool_And = {
  arguments: Order_Items_Select_Column_Order_Items_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Order_Items_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Order_Items_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Order_Items_Select_Column_Order_Items_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Order_Items_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Order_Items_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Order_Items_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order_items" */
export type Order_Items_Aggregate_Fields = {
  __typename?: 'order_items_aggregate_fields';
  avg?: Maybe<Order_Items_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Items_Max_Fields>;
  min?: Maybe<Order_Items_Min_Fields>;
  stddev?: Maybe<Order_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Items_Sum_Fields>;
  var_pop?: Maybe<Order_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Items_Var_Samp_Fields>;
  variance?: Maybe<Order_Items_Variance_Fields>;
};


/** aggregate fields of "order_items" */
export type Order_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_items" */
export type Order_Items_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Items_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Items_Max_Order_By>;
  min?: InputMaybe<Order_Items_Min_Order_By>;
  stddev?: InputMaybe<Order_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Items_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_items" */
export type Order_Items_Arr_Rel_Insert_Input = {
  data: Array<Order_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Items_Avg_Fields = {
  __typename?: 'order_items_avg_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_items" */
export type Order_Items_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_items". All fields are combined with a logical 'AND'. */
export type Order_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Items_Bool_Exp>>;
  _not?: InputMaybe<Order_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Items_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  orders_id?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Money_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_items" */
export enum Order_Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderItemsPkey = 'order_items_pkey'
}

/** input type for incrementing numeric columns in table "order_items" */
export type Order_Items_Inc_Input = {
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_items" */
export type Order_Items_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  orders_id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['money']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Order_Items_Max_Fields = {
  __typename?: 'order_items_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  orders_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  product_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "order_items" */
export type Order_Items_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orders_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Items_Min_Fields = {
  __typename?: 'order_items_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  orders_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  product_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "order_items" */
export type Order_Items_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orders_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_items" */
export type Order_Items_Mutation_Response = {
  __typename?: 'order_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Items>;
};

/** on_conflict condition type for table "order_items" */
export type Order_Items_On_Conflict = {
  constraint: Order_Items_Constraint;
  update_columns?: Array<Order_Items_Update_Column>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "order_items". */
export type Order_Items_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  orders_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_items */
export type Order_Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "order_items" */
export enum Order_Items_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  OrdersId = 'orders_id',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "order_items_aggregate_bool_exp_bool_and_arguments_columns" columns of table "order_items" */
export enum Order_Items_Select_Column_Order_Items_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
}

/** select "order_items_aggregate_bool_exp_bool_or_arguments_columns" columns of table "order_items" */
export enum Order_Items_Select_Column_Order_Items_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
}

/** input type for updating data in table "order_items" */
export type Order_Items_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  orders_id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['money']>;
  product_id?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Order_Items_Stddev_Fields = {
  __typename?: 'order_items_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_items" */
export type Order_Items_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Items_Stddev_Pop_Fields = {
  __typename?: 'order_items_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_items" */
export type Order_Items_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Items_Stddev_Samp_Fields = {
  __typename?: 'order_items_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_items" */
export type Order_Items_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order_items" */
export type Order_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Items_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  orders_id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['money']>;
  product_id?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Order_Items_Sum_Fields = {
  __typename?: 'order_items_sum_fields';
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_items" */
export type Order_Items_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "order_items" */
export enum Order_Items_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  OrdersId = 'orders_id',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Order_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Order_Items_Var_Pop_Fields = {
  __typename?: 'order_items_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_items" */
export type Order_Items_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Items_Var_Samp_Fields = {
  __typename?: 'order_items_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_items" */
export type Order_Items_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Items_Variance_Fields = {
  __typename?: 'order_items_variance_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_items" */
export type Order_Items_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** List of orders */
export type Orders = {
  __typename?: 'orders';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  customer?: Maybe<Customers>;
  customer_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  order_date?: Maybe<Scalars['date']>;
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Items_Aggregate;
  order_status?: Maybe<Status_Types_Enum>;
  shipped_date?: Maybe<Scalars['date']>;
  /** An object relationship */
  status_type?: Maybe<Status_Types>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


/** List of orders */
export type OrdersOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


/** List of orders */
export type OrdersOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

export type Orders_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Orders_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Orders_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Orders_Aggregate_Bool_Exp_Count>;
};

export type Orders_Aggregate_Bool_Exp_Bool_And = {
  arguments: Orders_Select_Column_Orders_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Orders_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Orders_Select_Column_Orders_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customers_Bool_Exp>;
  customer_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  order_date?: InputMaybe<Date_Comparison_Exp>;
  order_items?: InputMaybe<Order_Items_Bool_Exp>;
  order_items_aggregate?: InputMaybe<Order_Items_Aggregate_Bool_Exp>;
  order_status?: InputMaybe<Status_Types_Enum_Comparison_Exp>;
  shipped_date?: InputMaybe<Date_Comparison_Exp>;
  status_type?: InputMaybe<Status_Types_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  customer_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  order_date?: InputMaybe<Scalars['date']>;
  order_items?: InputMaybe<Order_Items_Arr_Rel_Insert_Input>;
  order_status?: InputMaybe<Status_Types_Enum>;
  shipped_date?: InputMaybe<Scalars['date']>;
  status_type?: InputMaybe<Status_Types_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_date?: Maybe<Scalars['date']>;
  shipped_date?: Maybe<Scalars['date']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  shipped_date?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_date?: Maybe<Scalars['date']>;
  shipped_date?: Maybe<Scalars['date']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  shipped_date?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customers_Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  order_items_aggregate?: InputMaybe<Order_Items_Aggregate_Order_By>;
  order_status?: InputMaybe<Order_By>;
  shipped_date?: InputMaybe<Order_By>;
  status_type?: InputMaybe<Status_Types_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  OrderStatus = 'order_status',
  /** column name */
  ShippedDate = 'shipped_date',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "orders_aggregate_bool_exp_bool_and_arguments_columns" columns of table "orders" */
export enum Orders_Select_Column_Orders_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
}

/** select "orders_aggregate_bool_exp_bool_or_arguments_columns" columns of table "orders" */
export enum Orders_Select_Column_Orders_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  order_date?: InputMaybe<Scalars['date']>;
  order_status?: InputMaybe<Status_Types_Enum>;
  shipped_date?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  order_date?: InputMaybe<Scalars['date']>;
  order_status?: InputMaybe<Status_Types_Enum>;
  shipped_date?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  OrderStatus = 'order_status',
  /** column name */
  ShippedDate = 'shipped_date',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Orders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

/** Enum table for customer partnership levels */
export type Organization_Partnership_Levels = {
  __typename?: 'organization_partnership_levels';
  level: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  organizations: Array<Organizations>;
  /** An aggregate relationship */
  organizations_aggregate: Organizations_Aggregate;
};


/** Enum table for customer partnership levels */
export type Organization_Partnership_LevelsOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


/** Enum table for customer partnership levels */
export type Organization_Partnership_LevelsOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

/** aggregated selection of "organization_partnership_levels" */
export type Organization_Partnership_Levels_Aggregate = {
  __typename?: 'organization_partnership_levels_aggregate';
  aggregate?: Maybe<Organization_Partnership_Levels_Aggregate_Fields>;
  nodes: Array<Organization_Partnership_Levels>;
};

/** aggregate fields of "organization_partnership_levels" */
export type Organization_Partnership_Levels_Aggregate_Fields = {
  __typename?: 'organization_partnership_levels_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Organization_Partnership_Levels_Max_Fields>;
  min?: Maybe<Organization_Partnership_Levels_Min_Fields>;
};


/** aggregate fields of "organization_partnership_levels" */
export type Organization_Partnership_Levels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Partnership_Levels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "organization_partnership_levels". All fields are combined with a logical 'AND'. */
export type Organization_Partnership_Levels_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Partnership_Levels_Bool_Exp>>;
  _not?: InputMaybe<Organization_Partnership_Levels_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Partnership_Levels_Bool_Exp>>;
  level?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizations?: InputMaybe<Organizations_Bool_Exp>;
  organizations_aggregate?: InputMaybe<Organizations_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "organization_partnership_levels" */
export enum Organization_Partnership_Levels_Constraint {
  /** unique or primary key constraint on columns "name" */
  OrganizationPartnershipLevelsNameKey = 'organization_partnership_levels_name_key',
  /** unique or primary key constraint on columns "level" */
  OrganizationPartnershipLevelsPkey = 'organization_partnership_levels_pkey'
}

/** input type for inserting data into table "organization_partnership_levels" */
export type Organization_Partnership_Levels_Insert_Input = {
  level?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organizations?: InputMaybe<Organizations_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organization_Partnership_Levels_Max_Fields = {
  __typename?: 'organization_partnership_levels_max_fields';
  level?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Organization_Partnership_Levels_Min_Fields = {
  __typename?: 'organization_partnership_levels_min_fields';
  level?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "organization_partnership_levels" */
export type Organization_Partnership_Levels_Mutation_Response = {
  __typename?: 'organization_partnership_levels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Partnership_Levels>;
};

/** input type for inserting object relation for remote table "organization_partnership_levels" */
export type Organization_Partnership_Levels_Obj_Rel_Insert_Input = {
  data: Organization_Partnership_Levels_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_Partnership_Levels_On_Conflict>;
};

/** on_conflict condition type for table "organization_partnership_levels" */
export type Organization_Partnership_Levels_On_Conflict = {
  constraint: Organization_Partnership_Levels_Constraint;
  update_columns?: Array<Organization_Partnership_Levels_Update_Column>;
  where?: InputMaybe<Organization_Partnership_Levels_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_partnership_levels". */
export type Organization_Partnership_Levels_Order_By = {
  level?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizations_aggregate?: InputMaybe<Organizations_Aggregate_Order_By>;
};

/** primary key columns input for table: organization_partnership_levels */
export type Organization_Partnership_Levels_Pk_Columns_Input = {
  level: Scalars['String'];
};

/** select columns of table "organization_partnership_levels" */
export enum Organization_Partnership_Levels_Select_Column {
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "organization_partnership_levels" */
export type Organization_Partnership_Levels_Set_Input = {
  level?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "organization_partnership_levels" */
export type Organization_Partnership_Levels_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Partnership_Levels_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Partnership_Levels_Stream_Cursor_Value_Input = {
  level?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "organization_partnership_levels" */
export enum Organization_Partnership_Levels_Update_Column {
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name'
}

export type Organization_Partnership_Levels_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Partnership_Levels_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Partnership_Levels_Bool_Exp;
};

/** Enum table for customer types */
export type Organization_Types = {
  __typename?: 'organization_types';
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  organizations: Array<Organizations>;
  /** An aggregate relationship */
  organizations_aggregate: Organizations_Aggregate;
  type: Scalars['String'];
};


/** Enum table for customer types */
export type Organization_TypesOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


/** Enum table for customer types */
export type Organization_TypesOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

/** aggregated selection of "organization_types" */
export type Organization_Types_Aggregate = {
  __typename?: 'organization_types_aggregate';
  aggregate?: Maybe<Organization_Types_Aggregate_Fields>;
  nodes: Array<Organization_Types>;
};

/** aggregate fields of "organization_types" */
export type Organization_Types_Aggregate_Fields = {
  __typename?: 'organization_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Organization_Types_Max_Fields>;
  min?: Maybe<Organization_Types_Min_Fields>;
};


/** aggregate fields of "organization_types" */
export type Organization_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "organization_types". All fields are combined with a logical 'AND'. */
export type Organization_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Types_Bool_Exp>>;
  _not?: InputMaybe<Organization_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Types_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizations?: InputMaybe<Organizations_Bool_Exp>;
  organizations_aggregate?: InputMaybe<Organizations_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_types" */
export enum Organization_Types_Constraint {
  /** unique or primary key constraint on columns "name" */
  OrganizationTypesNameKey = 'organization_types_name_key',
  /** unique or primary key constraint on columns "type" */
  OrganizationTypesPkey = 'organization_types_pkey'
}

export enum Organization_Types_Enum {
  /** NON_PROFIT */
  NonProfit = 'NON_PROFIT',
  /** PRIVATE */
  Private = 'PRIVATE',
  /** PRIVATE_SECTOR */
  PrivateSector = 'PRIVATE_SECTOR',
  /** PUBLIC */
  Public = 'PUBLIC',
  /** PUBLIC_SECTOR */
  PublicSector = 'PUBLIC_SECTOR'
}

/** Boolean expression to compare columns of type "organization_types_enum". All fields are combined with logical 'AND'. */
export type Organization_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Organization_Types_Enum>;
  _in?: InputMaybe<Array<Organization_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Organization_Types_Enum>;
  _nin?: InputMaybe<Array<Organization_Types_Enum>>;
};

/** input type for inserting data into table "organization_types" */
export type Organization_Types_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
  organizations?: InputMaybe<Organizations_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Organization_Types_Max_Fields = {
  __typename?: 'organization_types_max_fields';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Organization_Types_Min_Fields = {
  __typename?: 'organization_types_min_fields';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "organization_types" */
export type Organization_Types_Mutation_Response = {
  __typename?: 'organization_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Types>;
};

/** input type for inserting object relation for remote table "organization_types" */
export type Organization_Types_Obj_Rel_Insert_Input = {
  data: Organization_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_Types_On_Conflict>;
};

/** on_conflict condition type for table "organization_types" */
export type Organization_Types_On_Conflict = {
  constraint: Organization_Types_Constraint;
  update_columns?: Array<Organization_Types_Update_Column>;
  where?: InputMaybe<Organization_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_types". */
export type Organization_Types_Order_By = {
  name?: InputMaybe<Order_By>;
  organizations_aggregate?: InputMaybe<Organizations_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_types */
export type Organization_Types_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "organization_types" */
export enum Organization_Types_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "organization_types" */
export type Organization_Types_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "organization_types" */
export type Organization_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Types_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "organization_types" */
export enum Organization_Types_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

export type Organization_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Types_Bool_Exp;
};

/** List of organizations */
export type Organizations = {
  __typename?: 'organizations';
  created_at: Scalars['timestamptz'];
  crn?: Maybe<Scalars['numeric']>;
  /** An array relationship */
  customers: Array<Customers>;
  /** An aggregate relationship */
  customers_aggregate: Customers_Aggregate;
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  organization_partnership_level: Organization_Partnership_Levels;
  /** An object relationship */
  organization_type: Organization_Types;
  pratnership_level: Scalars['String'];
  type: Organization_Types_Enum;
  updated_at: Scalars['timestamptz'];
};


/** List of organizations */
export type OrganizationsCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


/** List of organizations */
export type OrganizationsCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** columns and relationships of "organizationsNIS" */
export type OrganizationsNis = {
  __typename?: 'organizationsNIS';
  created_at: Scalars['timestamptz'];
  health_care_provider_code: Scalars['String'];
  health_care_provider_id?: Maybe<Scalars['uuid']>;
  ico: Scalars['String'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "organizationsNIS" */
export type OrganizationsNis_Aggregate = {
  __typename?: 'organizationsNIS_aggregate';
  aggregate?: Maybe<OrganizationsNis_Aggregate_Fields>;
  nodes: Array<OrganizationsNis>;
};

/** aggregate fields of "organizationsNIS" */
export type OrganizationsNis_Aggregate_Fields = {
  __typename?: 'organizationsNIS_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<OrganizationsNis_Max_Fields>;
  min?: Maybe<OrganizationsNis_Min_Fields>;
};


/** aggregate fields of "organizationsNIS" */
export type OrganizationsNis_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<OrganizationsNis_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "organizationsNIS". All fields are combined with a logical 'AND'. */
export type OrganizationsNis_Bool_Exp = {
  _and?: InputMaybe<Array<OrganizationsNis_Bool_Exp>>;
  _not?: InputMaybe<OrganizationsNis_Bool_Exp>;
  _or?: InputMaybe<Array<OrganizationsNis_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  health_care_provider_code?: InputMaybe<String_Comparison_Exp>;
  health_care_provider_id?: InputMaybe<Uuid_Comparison_Exp>;
  ico?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "organizationsNIS" */
export enum OrganizationsNis_Constraint {
  /** unique or primary key constraint on columns "health_care_provider_code" */
  OrganizationsNisHealthCareProviderCodeKey = 'organizationsNIS_health_care_provider_code_key',
  /** unique or primary key constraint on columns "id" */
  OrganizationsNisPkey = 'organizationsNIS_pkey'
}

/** input type for inserting data into table "organizationsNIS" */
export type OrganizationsNis_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  health_care_provider_code?: InputMaybe<Scalars['String']>;
  health_care_provider_id?: InputMaybe<Scalars['uuid']>;
  ico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type OrganizationsNis_Max_Fields = {
  __typename?: 'organizationsNIS_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  health_care_provider_code?: Maybe<Scalars['String']>;
  health_care_provider_id?: Maybe<Scalars['uuid']>;
  ico?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type OrganizationsNis_Min_Fields = {
  __typename?: 'organizationsNIS_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  health_care_provider_code?: Maybe<Scalars['String']>;
  health_care_provider_id?: Maybe<Scalars['uuid']>;
  ico?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "organizationsNIS" */
export type OrganizationsNis_Mutation_Response = {
  __typename?: 'organizationsNIS_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrganizationsNis>;
};

/** input type for inserting object relation for remote table "organizationsNIS" */
export type OrganizationsNis_Obj_Rel_Insert_Input = {
  data: OrganizationsNis_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<OrganizationsNis_On_Conflict>;
};

/** on_conflict condition type for table "organizationsNIS" */
export type OrganizationsNis_On_Conflict = {
  constraint: OrganizationsNis_Constraint;
  update_columns?: Array<OrganizationsNis_Update_Column>;
  where?: InputMaybe<OrganizationsNis_Bool_Exp>;
};

/** Ordering options when selecting data from "organizationsNIS". */
export type OrganizationsNis_Order_By = {
  created_at?: InputMaybe<Order_By>;
  health_care_provider_code?: InputMaybe<Order_By>;
  health_care_provider_id?: InputMaybe<Order_By>;
  ico?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organizationsNIS */
export type OrganizationsNis_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "organizationsNIS" */
export enum OrganizationsNis_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HealthCareProviderCode = 'health_care_provider_code',
  /** column name */
  HealthCareProviderId = 'health_care_provider_id',
  /** column name */
  Ico = 'ico',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "organizationsNIS" */
export type OrganizationsNis_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  health_care_provider_code?: InputMaybe<Scalars['String']>;
  health_care_provider_id?: InputMaybe<Scalars['uuid']>;
  ico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "organizationsNIS" */
export type OrganizationsNis_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: OrganizationsNis_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type OrganizationsNis_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  health_care_provider_code?: InputMaybe<Scalars['String']>;
  health_care_provider_id?: InputMaybe<Scalars['uuid']>;
  ico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "organizationsNIS" */
export enum OrganizationsNis_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HealthCareProviderCode = 'health_care_provider_code',
  /** column name */
  HealthCareProviderId = 'health_care_provider_id',
  /** column name */
  Ico = 'ico',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type OrganizationsNis_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrganizationsNis_Set_Input>;
  /** filter the rows which have to be updated */
  where: OrganizationsNis_Bool_Exp;
};

/** aggregated selection of "organizations" */
export type Organizations_Aggregate = {
  __typename?: 'organizations_aggregate';
  aggregate?: Maybe<Organizations_Aggregate_Fields>;
  nodes: Array<Organizations>;
};

export type Organizations_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Organizations_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Organizations_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Organizations_Aggregate_Bool_Exp_Count>;
};

export type Organizations_Aggregate_Bool_Exp_Bool_And = {
  arguments: Organizations_Select_Column_Organizations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Organizations_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Organizations_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Organizations_Select_Column_Organizations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Organizations_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Organizations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Organizations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Organizations_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_Fields = {
  __typename?: 'organizations_aggregate_fields';
  avg?: Maybe<Organizations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Organizations_Max_Fields>;
  min?: Maybe<Organizations_Min_Fields>;
  stddev?: Maybe<Organizations_Stddev_Fields>;
  stddev_pop?: Maybe<Organizations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organizations_Stddev_Samp_Fields>;
  sum?: Maybe<Organizations_Sum_Fields>;
  var_pop?: Maybe<Organizations_Var_Pop_Fields>;
  var_samp?: Maybe<Organizations_Var_Samp_Fields>;
  variance?: Maybe<Organizations_Variance_Fields>;
};


/** aggregate fields of "organizations" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organizations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organizations" */
export type Organizations_Aggregate_Order_By = {
  avg?: InputMaybe<Organizations_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Organizations_Max_Order_By>;
  min?: InputMaybe<Organizations_Min_Order_By>;
  stddev?: InputMaybe<Organizations_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Organizations_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Organizations_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Organizations_Sum_Order_By>;
  var_pop?: InputMaybe<Organizations_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Organizations_Var_Samp_Order_By>;
  variance?: InputMaybe<Organizations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "organizations" */
export type Organizations_Arr_Rel_Insert_Input = {
  data: Array<Organizations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};

/** aggregate avg on columns */
export type Organizations_Avg_Fields = {
  __typename?: 'organizations_avg_fields';
  crn?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "organizations" */
export type Organizations_Avg_Order_By = {
  crn?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: InputMaybe<Array<Organizations_Bool_Exp>>;
  _not?: InputMaybe<Organizations_Bool_Exp>;
  _or?: InputMaybe<Array<Organizations_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  crn?: InputMaybe<Numeric_Comparison_Exp>;
  customers?: InputMaybe<Customers_Bool_Exp>;
  customers_aggregate?: InputMaybe<Customers_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organization_partnership_level?: InputMaybe<Organization_Partnership_Levels_Bool_Exp>;
  organization_type?: InputMaybe<Organization_Types_Bool_Exp>;
  pratnership_level?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Organization_Types_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "organizations" */
export enum Organizations_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationsPkey = 'organizations_pkey'
}

/** input type for incrementing numeric columns in table "organizations" */
export type Organizations_Inc_Input = {
  crn?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "organizations" */
export type Organizations_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  crn?: InputMaybe<Scalars['numeric']>;
  customers?: InputMaybe<Customers_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  organization_partnership_level?: InputMaybe<Organization_Partnership_Levels_Obj_Rel_Insert_Input>;
  organization_type?: InputMaybe<Organization_Types_Obj_Rel_Insert_Input>;
  pratnership_level?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Organization_Types_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  __typename?: 'organizations_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  crn?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pratnership_level?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "organizations" */
export type Organizations_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pratnership_level?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  __typename?: 'organizations_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  crn?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  pratnership_level?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "organizations" */
export type Organizations_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pratnership_level?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "organizations" */
export type Organizations_Mutation_Response = {
  __typename?: 'organizations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type Organizations_Obj_Rel_Insert_Input = {
  data: Organizations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};

/** on_conflict condition type for table "organizations" */
export type Organizations_On_Conflict = {
  constraint: Organizations_Constraint;
  update_columns?: Array<Organizations_Update_Column>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

/** Ordering options when selecting data from "organizations". */
export type Organizations_Order_By = {
  created_at?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  customers_aggregate?: InputMaybe<Customers_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization_partnership_level?: InputMaybe<Organization_Partnership_Levels_Order_By>;
  organization_type?: InputMaybe<Organization_Types_Order_By>;
  pratnership_level?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organizations */
export type Organizations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "organizations" */
export enum Organizations_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Crn = 'crn',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  PratnershipLevel = 'pratnership_level',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "organizations_aggregate_bool_exp_bool_and_arguments_columns" columns of table "organizations" */
export enum Organizations_Select_Column_Organizations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
}

/** select "organizations_aggregate_bool_exp_bool_or_arguments_columns" columns of table "organizations" */
export enum Organizations_Select_Column_Organizations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
}

/** input type for updating data in table "organizations" */
export type Organizations_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  crn?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  pratnership_level?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Organization_Types_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Organizations_Stddev_Fields = {
  __typename?: 'organizations_stddev_fields';
  crn?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "organizations" */
export type Organizations_Stddev_Order_By = {
  crn?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organizations_Stddev_Pop_Fields = {
  __typename?: 'organizations_stddev_pop_fields';
  crn?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "organizations" */
export type Organizations_Stddev_Pop_Order_By = {
  crn?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organizations_Stddev_Samp_Fields = {
  __typename?: 'organizations_stddev_samp_fields';
  crn?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "organizations" */
export type Organizations_Stddev_Samp_Order_By = {
  crn?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "organizations" */
export type Organizations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organizations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organizations_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  crn?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  pratnership_level?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Organization_Types_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Organizations_Sum_Fields = {
  __typename?: 'organizations_sum_fields';
  crn?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "organizations" */
export type Organizations_Sum_Order_By = {
  crn?: InputMaybe<Order_By>;
};

/** update columns of table "organizations" */
export enum Organizations_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Crn = 'crn',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  PratnershipLevel = 'pratnership_level',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Organizations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organizations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organizations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organizations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Organizations_Var_Pop_Fields = {
  __typename?: 'organizations_var_pop_fields';
  crn?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "organizations" */
export type Organizations_Var_Pop_Order_By = {
  crn?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organizations_Var_Samp_Fields = {
  __typename?: 'organizations_var_samp_fields';
  crn?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "organizations" */
export type Organizations_Var_Samp_Order_By = {
  crn?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Organizations_Variance_Fields = {
  __typename?: 'organizations_variance_fields';
  crn?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "organizations" */
export type Organizations_Variance_Order_By = {
  crn?: InputMaybe<Order_By>;
};

/** columns and relationships of "practicioners" */
export type Practicioners = {
  __typename?: 'practicioners';
  created_at: Scalars['timestamptz'];
  health_care_provider_code: Scalars['String'];
  ico: Scalars['String'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  practicioner_code: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "practicioners" */
export type Practicioners_Aggregate = {
  __typename?: 'practicioners_aggregate';
  aggregate?: Maybe<Practicioners_Aggregate_Fields>;
  nodes: Array<Practicioners>;
};

/** aggregate fields of "practicioners" */
export type Practicioners_Aggregate_Fields = {
  __typename?: 'practicioners_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Practicioners_Max_Fields>;
  min?: Maybe<Practicioners_Min_Fields>;
};


/** aggregate fields of "practicioners" */
export type Practicioners_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Practicioners_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "practicioners". All fields are combined with a logical 'AND'. */
export type Practicioners_Bool_Exp = {
  _and?: InputMaybe<Array<Practicioners_Bool_Exp>>;
  _not?: InputMaybe<Practicioners_Bool_Exp>;
  _or?: InputMaybe<Array<Practicioners_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  health_care_provider_code?: InputMaybe<String_Comparison_Exp>;
  ico?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  practicioner_code?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practicioners" */
export enum Practicioners_Constraint {
  /** unique or primary key constraint on columns "id" */
  PracticionersPkey = 'practicioners_pkey',
  /** unique or primary key constraint on columns "practicioner_code" */
  PracticionersPracticionerCodeKey = 'practicioners_practicioner_code_key'
}

/** input type for inserting data into table "practicioners" */
export type Practicioners_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  health_care_provider_code?: InputMaybe<Scalars['String']>;
  ico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  practicioner_code?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practicioners_Max_Fields = {
  __typename?: 'practicioners_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  health_care_provider_code?: Maybe<Scalars['String']>;
  ico?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practicioner_code?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Practicioners_Min_Fields = {
  __typename?: 'practicioners_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  health_care_provider_code?: Maybe<Scalars['String']>;
  ico?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practicioner_code?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "practicioners" */
export type Practicioners_Mutation_Response = {
  __typename?: 'practicioners_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Practicioners>;
};

/** input type for inserting object relation for remote table "practicioners" */
export type Practicioners_Obj_Rel_Insert_Input = {
  data: Practicioners_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Practicioners_On_Conflict>;
};

/** on_conflict condition type for table "practicioners" */
export type Practicioners_On_Conflict = {
  constraint: Practicioners_Constraint;
  update_columns?: Array<Practicioners_Update_Column>;
  where?: InputMaybe<Practicioners_Bool_Exp>;
};

/** Ordering options when selecting data from "practicioners". */
export type Practicioners_Order_By = {
  created_at?: InputMaybe<Order_By>;
  health_care_provider_code?: InputMaybe<Order_By>;
  ico?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  practicioner_code?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: practicioners */
export type Practicioners_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practicioners" */
export enum Practicioners_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HealthCareProviderCode = 'health_care_provider_code',
  /** column name */
  Ico = 'ico',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PracticionerCode = 'practicioner_code',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "practicioners" */
export type Practicioners_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  health_care_provider_code?: InputMaybe<Scalars['String']>;
  ico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  practicioner_code?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "practicioners" */
export type Practicioners_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Practicioners_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Practicioners_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  health_care_provider_code?: InputMaybe<Scalars['String']>;
  ico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  practicioner_code?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "practicioners" */
export enum Practicioners_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HealthCareProviderCode = 'health_care_provider_code',
  /** column name */
  Ico = 'ico',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PracticionerCode = 'practicioner_code',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Practicioners_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Practicioners_Set_Input>;
  /** filter the rows which have to be updated */
  where: Practicioners_Bool_Exp;
};

/** Enum table for product availability */
export type Product_Availability = {
  __typename?: 'product_availability';
  name: Scalars['String'];
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  type: Scalars['String'];
};


/** Enum table for product availability */
export type Product_AvailabilityProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** Enum table for product availability */
export type Product_AvailabilityProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "product_availability" */
export type Product_Availability_Aggregate = {
  __typename?: 'product_availability_aggregate';
  aggregate?: Maybe<Product_Availability_Aggregate_Fields>;
  nodes: Array<Product_Availability>;
};

/** aggregate fields of "product_availability" */
export type Product_Availability_Aggregate_Fields = {
  __typename?: 'product_availability_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Product_Availability_Max_Fields>;
  min?: Maybe<Product_Availability_Min_Fields>;
};


/** aggregate fields of "product_availability" */
export type Product_Availability_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Availability_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "product_availability". All fields are combined with a logical 'AND'. */
export type Product_Availability_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Availability_Bool_Exp>>;
  _not?: InputMaybe<Product_Availability_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Availability_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_availability" */
export enum Product_Availability_Constraint {
  /** unique or primary key constraint on columns "name" */
  ProductAvailabilityNameKey = 'product_availability_name_key',
  /** unique or primary key constraint on columns "type" */
  ProductAvailabilityPkey = 'product_availability_pkey',
  /** unique or primary key constraint on columns "type" */
  ProductAvailabilityTypeKey = 'product_availability_type_key'
}

export enum Product_Availability_Enum {
  /** In stock  */
  InStock = 'IN_STOCK',
  /** On the way  */
  OnTheWay = 'ON_THE_WAY',
  /** Unavailable  */
  Unavailavble = 'UNAVAILAVBLE'
}

/** Boolean expression to compare columns of type "product_availability_enum". All fields are combined with logical 'AND'. */
export type Product_Availability_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Product_Availability_Enum>;
  _in?: InputMaybe<Array<Product_Availability_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Product_Availability_Enum>;
  _nin?: InputMaybe<Array<Product_Availability_Enum>>;
};

/** input type for inserting data into table "product_availability" */
export type Product_Availability_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Product_Availability_Max_Fields = {
  __typename?: 'product_availability_max_fields';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Product_Availability_Min_Fields = {
  __typename?: 'product_availability_min_fields';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "product_availability" */
export type Product_Availability_Mutation_Response = {
  __typename?: 'product_availability_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Availability>;
};

/** input type for inserting object relation for remote table "product_availability" */
export type Product_Availability_Obj_Rel_Insert_Input = {
  data: Product_Availability_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Availability_On_Conflict>;
};

/** on_conflict condition type for table "product_availability" */
export type Product_Availability_On_Conflict = {
  constraint: Product_Availability_Constraint;
  update_columns?: Array<Product_Availability_Update_Column>;
  where?: InputMaybe<Product_Availability_Bool_Exp>;
};

/** Ordering options when selecting data from "product_availability". */
export type Product_Availability_Order_By = {
  name?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_availability */
export type Product_Availability_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "product_availability" */
export enum Product_Availability_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "product_availability" */
export type Product_Availability_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "product_availability" */
export type Product_Availability_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Availability_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Availability_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "product_availability" */
export enum Product_Availability_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

export type Product_Availability_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Availability_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Availability_Bool_Exp;
};

/** Types of products */
export type Products = {
  __typename?: 'products';
  availability?: Maybe<Product_Availability_Enum>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Items_Aggregate;
  price?: Maybe<Scalars['money']>;
  /** An object relationship */
  product_availability?: Maybe<Product_Availability>;
  quantity: Scalars['Int'];
  signedThumbnailImgPath?: Maybe<GetUrlReturn>;
  thumbnailImgPath?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


/** Types of products */
export type ProductsOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


/** Types of products */
export type ProductsOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

export type Products_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Products_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Products_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Products_Aggregate_Bool_Exp_Count>;
};

export type Products_Aggregate_Bool_Exp_Bool_And = {
  arguments: Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Products_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  availability?: InputMaybe<Product_Availability_Enum_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order_items?: InputMaybe<Order_Items_Bool_Exp>;
  order_items_aggregate?: InputMaybe<Order_Items_Aggregate_Bool_Exp>;
  price?: InputMaybe<Money_Comparison_Exp>;
  product_availability?: InputMaybe<Product_Availability_Bool_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  thumbnailImgPath?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  availability?: InputMaybe<Product_Availability_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order_items?: InputMaybe<Order_Items_Arr_Rel_Insert_Input>;
  price?: InputMaybe<Scalars['money']>;
  product_availability?: InputMaybe<Product_Availability_Obj_Rel_Insert_Input>;
  quantity?: InputMaybe<Scalars['Int']>;
  thumbnailImgPath?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['Int']>;
  thumbnailImgPath?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  thumbnailImgPath?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['Int']>;
  thumbnailImgPath?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  thumbnailImgPath?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  availability?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_items_aggregate?: InputMaybe<Order_Items_Aggregate_Order_By>;
  price?: InputMaybe<Order_By>;
  product_availability?: InputMaybe<Product_Availability_Order_By>;
  quantity?: InputMaybe<Order_By>;
  thumbnailImgPath?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Availability = 'availability',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  ThumbnailImgPath = 'thumbnailImgPath',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "products_aggregate_bool_exp_bool_and_arguments_columns" columns of table "products" */
export enum Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
}

/** select "products_aggregate_bool_exp_bool_or_arguments_columns" columns of table "products" */
export enum Products_Select_Column_Products_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  availability?: InputMaybe<Product_Availability_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['Int']>;
  thumbnailImgPath?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  availability?: InputMaybe<Product_Availability_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['Int']>;
  thumbnailImgPath?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Availability = 'availability',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  ThumbnailImgPath = 'thumbnailImgPath',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch aggregated fields from the table: "test_01" */
  Test01_aggregate: Test01_Aggregate;
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** An array relationship */
  answers: Array<Answers>;
  /** An aggregate relationship */
  answers_aggregate: Answers_Aggregate;
  /** fetch data from the table: "answers" using primary key columns */
  answers_by_pk?: Maybe<Answers>;
  /** An array relationship */
  attributes: Array<Attributes>;
  /** An aggregate relationship */
  attributes_aggregate: Attributes_Aggregate;
  /** fetch data from the table: "attributes" using primary key columns */
  attributes_by_pk?: Maybe<Attributes>;
  /** fetch data from the table: "batch543" */
  batch543: Array<Batch543>;
  /** fetch aggregated fields from the table: "batch543" */
  batch543_aggregate: Batch543_Aggregate;
  /** fetch data from the table: "batch543" using primary key columns */
  batch543_by_pk?: Maybe<Batch543>;
  /** An array relationship */
  batch543_items: Array<Batch543_Items>;
  /** An aggregate relationship */
  batch543_items_aggregate: Batch543_Items_Aggregate;
  /** fetch data from the table: "batch543_items" using primary key columns */
  batch543_items_by_pk?: Maybe<Batch543_Items>;
  /** fetch data from the table: "bus_stops" using primary key columns */
  busStop?: Maybe<BusStops>;
  /** fetch data from the table: "bus_stop_departures" using primary key columns */
  busStopDeparture?: Maybe<BusStopDepartures>;
  /** fetch aggregated fields from the table: "bus_stop_departures" */
  busStopDepartureAggregate: BusStopDepartures_Aggregate;
  /** fetch data from the table: "bus_stop_departures" */
  busStopDepartures: Array<BusStopDepartures>;
  /** fetch data from the table: "bus_stops" */
  busStops: Array<BusStops>;
  /** fetch aggregated fields from the table: "bus_stops" */
  busStopsAggregate: BusStops_Aggregate;
  /** fetch data from the table: "ci" */
  ci: Array<Ci>;
  /** fetch data from the table: "ciWithRels" */
  ciWithRels: Array<CiWithRels>;
  /** fetch aggregated fields from the table: "ciWithRels" */
  ciWithRels_aggregate: CiWithRels_Aggregate;
  /** fetch data from the table: "ciWithRels" using primary key columns */
  ciWithRels_by_pk?: Maybe<CiWithRels>;
  /** fetch aggregated fields from the table: "ci" */
  ci_aggregate: Ci_Aggregate;
  /** fetch data from the table: "ci" using primary key columns */
  ci_by_pk?: Maybe<Ci>;
  /** fetch data from the table: "cmdb" */
  cmdb: Array<Cmdb>;
  /** fetch data from the table: "cmdb_relations" using primary key columns */
  cmdbRelation?: Maybe<CmdbRelations>;
  /** fetch data from the table: "cmdb_relations" */
  cmdbRelations: Array<CmdbRelations>;
  /** fetch aggregated fields from the table: "cmdb_relations" */
  cmdbRelationsAggregate: CmdbRelations_Aggregate;
  /** fetch data from the table: "cmdb_relations_neighbourscount" using primary key columns */
  cmdbRelationsNeighbourscount?: Maybe<CmdbRelationsNeighbourscounts>;
  /** fetch data from the table: "cmdb_relations_neighbourscount" */
  cmdbRelationsNeighbourscounts: Array<CmdbRelationsNeighbourscounts>;
  cmdbRelationsNeighbourscounts_aggregate: CmdbRelationsNeighbourscounts_Aggregate;
  /** fetch aggregated fields from the table: "cmdb" */
  cmdb_aggregate: Cmdb_Aggregate;
  /** fetch data from the table: "cmdb" using primary key columns */
  cmdb_by_pk?: Maybe<Cmdb>;
  /** fetch data from the table: "configurationItems" */
  configurationItems: Array<ConfigurationItems>;
  /** fetch aggregated fields from the table: "configurationItems" */
  configurationItems_aggregate: ConfigurationItems_Aggregate;
  /** fetch data from the table: "configurationItems" using primary key columns */
  configurationItems_by_pk?: Maybe<ConfigurationItems>;
  /** fetch data from the table: "contracts" using primary key columns */
  contract?: Maybe<Contracts>;
  /** fetch data from the table: "contracts" */
  contracts: Array<Contracts>;
  /** fetch aggregated fields from the table: "contracts" */
  contracts_aggregate: Contracts_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customer?: Maybe<Customers>;
  /** fetch data from the table: "customer_types" */
  customer_types: Array<Customer_Types>;
  /** fetch aggregated fields from the table: "customer_types" */
  customer_types_aggregate: Customer_Types_Aggregate;
  /** fetch data from the table: "customer_types" using primary key columns */
  customer_types_by_pk?: Maybe<Customer_Types>;
  /** An array relationship */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customersAggregate: Customers_Aggregate;
  /** fetch data from the table: "departments" */
  departments: Array<Departments>;
  /** fetch aggregated fields from the table: "departments" */
  departments_aggregate: Departments_Aggregate;
  /** fetch data from the table: "departments" using primary key columns */
  departments_by_pk?: Maybe<Departments>;
  /** fetch data from the table: "desh" */
  desh: Array<Desh>;
  /** fetch aggregated fields from the table: "desh" */
  desh_aggregate: Desh_Aggregate;
  /** fetch data from the table: "desh" using primary key columns */
  desh_by_pk?: Maybe<Desh>;
  /** An array relationship */
  desh_products: Array<Desh_Products>;
  /** An aggregate relationship */
  desh_products_aggregate: Desh_Products_Aggregate;
  /** fetch data from the table: "desh_products" using primary key columns */
  desh_products_by_pk?: Maybe<Desh_Products>;
  /** An array relationship */
  desh_sales: Array<Desh_Sales>;
  /** An aggregate relationship */
  desh_sales_aggregate: Desh_Sales_Aggregate;
  /** fetch data from the table: "desh_sales" using primary key columns */
  desh_sales_by_pk?: Maybe<Desh_Sales>;
  /** fetch data from the table: "desh_traffic" */
  desh_traffic: Array<Desh_Traffic>;
  /** fetch aggregated fields from the table: "desh_traffic" */
  desh_traffic_aggregate: Desh_Traffic_Aggregate;
  /** fetch data from the table: "desh_traffic" using primary key columns */
  desh_traffic_by_pk?: Maybe<Desh_Traffic>;
  downloadGetUrl?: Maybe<GetUrlReturn>;
  downloadGetUrls?: Maybe<GetUrlsReturn>;
  /** fetch data from the table: "enum_test_types" */
  enum_test_types: Array<Enum_Test_Types>;
  /** fetch aggregated fields from the table: "enum_test_types" */
  enum_test_types_aggregate: Enum_Test_Types_Aggregate;
  /** fetch data from the table: "enum_test_types" using primary key columns */
  enum_test_types_by_pk?: Maybe<Enum_Test_Types>;
  /** fetch data from the table: "events" using primary key columns */
  event?: Maybe<Events>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  eventsAggregate: Events_Aggregate;
  file?: Maybe<File>;
  /** fetch data from the table: "from_nodes" */
  from_nodes: Array<From_Nodes>;
  /** fetch aggregated fields from the table: "from_nodes" */
  from_nodes_aggregate: From_Nodes_Aggregate;
  /** fetch data from the table: "from_nodes" using primary key columns */
  from_nodes_by_pk?: Maybe<From_Nodes>;
  /** fetch data from the table: "hall" */
  hall: Array<Hall>;
  /** fetch aggregated fields from the table: "hall" */
  hall_aggregate: Hall_Aggregate;
  /** fetch data from the table: "hall" using primary key columns */
  hall_by_pk?: Maybe<Hall>;
  listParts?: Maybe<Part>;
  /** fetch data from the table: "map_points" using primary key columns */
  mapPoint?: Maybe<MapPoints>;
  /** fetch data from the table: "map_points" */
  mapPoints: Array<MapPoints>;
  /** fetch aggregated fields from the table: "map_points" */
  mapPointsAggregate: MapPoints_Aggregate;
  /** An array relationship */
  neighbourPairs: Array<NeighbourPairs>;
  /** An aggregate relationship */
  neighbourPairs_aggregate: NeighbourPairs_Aggregate;
  /** fetch data from the table: "neighbourPairs" using primary key columns */
  neighbourPairs_by_pk?: Maybe<NeighbourPairs>;
  /** fetch data from the table: "offer" using primary key columns */
  offer?: Maybe<Offer>;
  /** fetch data from the table: "offer" */
  offers: Array<Offer>;
  /** fetch aggregated fields from the table: "offer" */
  offersAggregate: Offer_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  order?: Maybe<Orders>;
  /** fetch aggregated fields from the table: "order_items" */
  orderItemsAggregate: Order_Items_Aggregate;
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** fetch data from the table: "order_items" using primary key columns */
  order_items_by_pk?: Maybe<Order_Items>;
  /** An array relationship */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  ordersAggregate: Orders_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organization?: Maybe<Organizations>;
  /** fetch data from the table: "organization_partnership_levels" */
  organization_partnership_levels: Array<Organization_Partnership_Levels>;
  /** fetch aggregated fields from the table: "organization_partnership_levels" */
  organization_partnership_levels_aggregate: Organization_Partnership_Levels_Aggregate;
  /** fetch data from the table: "organization_partnership_levels" using primary key columns */
  organization_partnership_levels_by_pk?: Maybe<Organization_Partnership_Levels>;
  /** fetch data from the table: "organization_types" */
  organization_types: Array<Organization_Types>;
  /** fetch aggregated fields from the table: "organization_types" */
  organization_types_aggregate: Organization_Types_Aggregate;
  /** fetch data from the table: "organization_types" using primary key columns */
  organization_types_by_pk?: Maybe<Organization_Types>;
  /** An array relationship */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizationsAggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizationsNIS" */
  organizationsNIS: Array<OrganizationsNis>;
  /** fetch aggregated fields from the table: "organizationsNIS" */
  organizationsNIS_aggregate: OrganizationsNis_Aggregate;
  /** fetch data from the table: "organizationsNIS" using primary key columns */
  organizationsNIS_by_pk?: Maybe<OrganizationsNis>;
  part?: Maybe<Part>;
  /** fetch data from the table: "practicioners" using primary key columns */
  practicioner?: Maybe<Practicioners>;
  /** fetch data from the table: "practicioners" */
  practicioners: Array<Practicioners>;
  /** fetch aggregated fields from the table: "practicioners" */
  practicioners_aggregate: Practicioners_Aggregate;
  prepareUploadParts?: Maybe<GetUrlReturn>;
  /** fetch data from the table: "products" using primary key columns */
  product?: Maybe<Products>;
  /** fetch data from the table: "product_availability" */
  product_availability: Array<Product_Availability>;
  /** fetch aggregated fields from the table: "product_availability" */
  product_availability_aggregate: Product_Availability_Aggregate;
  /** fetch data from the table: "product_availability" using primary key columns */
  product_availability_by_pk?: Maybe<Product_Availability>;
  /** An array relationship */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  productsAggregate: Products_Aggregate;
  /** fetch data from the table: "test_01" */
  queryTest01: Array<Test01>;
  /** fetch data from the table: "question" */
  question: Array<Question>;
  /** fetch aggregated fields from the table: "question" */
  question_aggregate: Question_Aggregate;
  /** fetch data from the table: "question" using primary key columns */
  question_by_pk?: Maybe<Question>;
  /** fetch data from the table: "question_category" */
  question_category: Array<Question_Category>;
  /** fetch aggregated fields from the table: "question_category" */
  question_category_aggregate: Question_Category_Aggregate;
  /** fetch data from the table: "question_category" using primary key columns */
  question_category_by_pk?: Maybe<Question_Category>;
  /** fetch data from the table: "site" */
  site: Array<Site>;
  /** fetch aggregated fields from the table: "site" */
  site_aggregate: Site_Aggregate;
  /** fetch data from the table: "site" using primary key columns */
  site_by_pk?: Maybe<Site>;
  /** fetch data from the table: "status_types" */
  status_types: Array<Status_Types>;
  /** fetch aggregated fields from the table: "status_types" */
  status_types_aggregate: Status_Types_Aggregate;
  /** fetch data from the table: "status_types" using primary key columns */
  status_types_by_pk?: Maybe<Status_Types>;
  /** fetch data from the table: "survey" */
  survey: Array<Survey>;
  /** fetch aggregated fields from the table: "survey" */
  survey_aggregate: Survey_Aggregate;
  /** fetch data from the table: "survey" using primary key columns */
  survey_by_pk?: Maybe<Survey>;
  /** An array relationship */
  survey_photos: Array<Survey_Photos>;
  /** An aggregate relationship */
  survey_photos_aggregate: Survey_Photos_Aggregate;
  /** fetch data from the table: "survey_photos" using primary key columns */
  survey_photos_by_pk?: Maybe<Survey_Photos>;
  /** fetch data from the table: "test_01" using primary key columns */
  test01ById?: Maybe<Test01>;
  /** fetch data from the table: "test_jednotne_cislo" using primary key columns */
  testJednotneCislo?: Maybe<TestJednotneCislo>;
  /** fetch data from the table: "test_jednotne_cislo" */
  testJednotneCislos: Array<TestJednotneCislo>;
  /** fetch aggregated fields from the table: "test_jednotne_cislo" */
  testJednotneCislosAggregate: TestJednotneCislo_Aggregate;
  /** fetch data from the table: "test_x" using primary key columns */
  testX?: Maybe<TestX>;
  /** fetch data from the table: "test_x" */
  testXes: Array<TestX>;
  /** fetch aggregated fields from the table: "test_x" */
  testXesAggregate: TestX_Aggregate;
  /** fetch data from the table: "test_view" */
  test_view: Array<Test_View>;
  /** fetch aggregated fields from the table: "test_view" */
  test_view_aggregate: Test_View_Aggregate;
  /** fetch data from the table: "topology.layer" */
  topology_layer: Array<Topology_Layer>;
  /** fetch aggregated fields from the table: "topology.layer" */
  topology_layer_aggregate: Topology_Layer_Aggregate;
  /** fetch data from the table: "topology.layer" using primary key columns */
  topology_layer_by_pk?: Maybe<Topology_Layer>;
  /** fetch data from the table: "topology.topology" */
  topology_topology: Array<Topology_Topology>;
  /** fetch aggregated fields from the table: "topology.topology" */
  topology_topology_aggregate: Topology_Topology_Aggregate;
  /** fetch data from the table: "topology.topology" using primary key columns */
  topology_topology_by_pk?: Maybe<Topology_Topology>;
  /** fetch data from the table: "types_test" */
  types_test: Array<Types_Test>;
  /** fetch aggregated fields from the table: "types_test" */
  types_test_aggregate: Types_Test_Aggregate;
  /** fetch data from the table: "types_test" using primary key columns */
  types_test_by_pk?: Maybe<Types_Test>;
  /** fetch data from the table: "workplace" */
  workplace: Array<Workplace>;
  /** fetch aggregated fields from the table: "workplace" */
  workplace_aggregate: Workplace_Aggregate;
  /** fetch data from the table: "workplace" using primary key columns */
  workplace_by_pk?: Maybe<Workplace>;
  /** fetch data from the table: "workplace_item" */
  workplace_item: Array<Workplace_Item>;
  /** fetch aggregated fields from the table: "workplace_item" */
  workplace_item_aggregate: Workplace_Item_Aggregate;
  /** fetch data from the table: "workplace_item" using primary key columns */
  workplace_item_by_pk?: Maybe<Workplace_Item>;
};


export type Query_RootTest01_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test01_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test01_Order_By>>;
  where?: InputMaybe<Test01_Bool_Exp>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Query_RootAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Query_RootAnswers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAttributesArgs = {
  distinct_on?: InputMaybe<Array<Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attributes_Order_By>>;
  where?: InputMaybe<Attributes_Bool_Exp>;
};


export type Query_RootAttributes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attributes_Order_By>>;
  where?: InputMaybe<Attributes_Bool_Exp>;
};


export type Query_RootAttributes_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Query_RootBatch543Args = {
  distinct_on?: InputMaybe<Array<Batch543_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Batch543_Order_By>>;
  where?: InputMaybe<Batch543_Bool_Exp>;
};


export type Query_RootBatch543_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Batch543_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Batch543_Order_By>>;
  where?: InputMaybe<Batch543_Bool_Exp>;
};


export type Query_RootBatch543_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBatch543_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Batch543_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Batch543_Items_Order_By>>;
  where?: InputMaybe<Batch543_Items_Bool_Exp>;
};


export type Query_RootBatch543_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Batch543_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Batch543_Items_Order_By>>;
  where?: InputMaybe<Batch543_Items_Bool_Exp>;
};


export type Query_RootBatch543_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBusStopArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBusStopDepartureArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBusStopDepartureAggregateArgs = {
  distinct_on?: InputMaybe<Array<BusStopDepartures_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BusStopDepartures_Order_By>>;
  where?: InputMaybe<BusStopDepartures_Bool_Exp>;
};


export type Query_RootBusStopDeparturesArgs = {
  distinct_on?: InputMaybe<Array<BusStopDepartures_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BusStopDepartures_Order_By>>;
  where?: InputMaybe<BusStopDepartures_Bool_Exp>;
};


export type Query_RootBusStopsArgs = {
  distinct_on?: InputMaybe<Array<BusStops_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BusStops_Order_By>>;
  where?: InputMaybe<BusStops_Bool_Exp>;
};


export type Query_RootBusStopsAggregateArgs = {
  distinct_on?: InputMaybe<Array<BusStops_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BusStops_Order_By>>;
  where?: InputMaybe<BusStops_Bool_Exp>;
};


export type Query_RootCiArgs = {
  distinct_on?: InputMaybe<Array<Ci_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ci_Order_By>>;
  where?: InputMaybe<Ci_Bool_Exp>;
};


export type Query_RootCiWithRelsArgs = {
  distinct_on?: InputMaybe<Array<CiWithRels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CiWithRels_Order_By>>;
  where?: InputMaybe<CiWithRels_Bool_Exp>;
};


export type Query_RootCiWithRels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CiWithRels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CiWithRels_Order_By>>;
  where?: InputMaybe<CiWithRels_Bool_Exp>;
};


export type Query_RootCiWithRels_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Query_RootCi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ci_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ci_Order_By>>;
  where?: InputMaybe<Ci_Bool_Exp>;
};


export type Query_RootCi_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCmdbArgs = {
  distinct_on?: InputMaybe<Array<Cmdb_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cmdb_Order_By>>;
  where?: InputMaybe<Cmdb_Bool_Exp>;
};


export type Query_RootCmdbRelationArgs = {
  uuid: Scalars['uuid'];
};


export type Query_RootCmdbRelationsArgs = {
  distinct_on?: InputMaybe<Array<CmdbRelations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CmdbRelations_Order_By>>;
  where?: InputMaybe<CmdbRelations_Bool_Exp>;
};


export type Query_RootCmdbRelationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CmdbRelations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CmdbRelations_Order_By>>;
  where?: InputMaybe<CmdbRelations_Bool_Exp>;
};


export type Query_RootCmdbRelationsNeighbourscountArgs = {
  fk: Scalars['uuid'];
};


export type Query_RootCmdbRelationsNeighbourscountsArgs = {
  distinct_on?: InputMaybe<Array<CmdbRelationsNeighbourscounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CmdbRelationsNeighbourscounts_Order_By>>;
  where?: InputMaybe<CmdbRelationsNeighbourscounts_Bool_Exp>;
};


export type Query_RootCmdbRelationsNeighbourscounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CmdbRelationsNeighbourscounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CmdbRelationsNeighbourscounts_Order_By>>;
  where?: InputMaybe<CmdbRelationsNeighbourscounts_Bool_Exp>;
};


export type Query_RootCmdb_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cmdb_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cmdb_Order_By>>;
  where?: InputMaybe<Cmdb_Bool_Exp>;
};


export type Query_RootCmdb_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Query_RootConfigurationItemsArgs = {
  distinct_on?: InputMaybe<Array<ConfigurationItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConfigurationItems_Order_By>>;
  where?: InputMaybe<ConfigurationItems_Bool_Exp>;
};


export type Query_RootConfigurationItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ConfigurationItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConfigurationItems_Order_By>>;
  where?: InputMaybe<ConfigurationItems_Bool_Exp>;
};


export type Query_RootConfigurationItems_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Query_RootContractArgs = {
  id: Scalars['Int'];
};


export type Query_RootContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Query_RootContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Query_RootCustomerArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCustomer_TypesArgs = {
  distinct_on?: InputMaybe<Array<Customer_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Types_Order_By>>;
  where?: InputMaybe<Customer_Types_Bool_Exp>;
};


export type Query_RootCustomer_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Types_Order_By>>;
  where?: InputMaybe<Customer_Types_Bool_Exp>;
};


export type Query_RootCustomer_Types_By_PkArgs = {
  type: Scalars['String'];
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootDepartmentsArgs = {
  distinct_on?: InputMaybe<Array<Departments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Departments_Order_By>>;
  where?: InputMaybe<Departments_Bool_Exp>;
};


export type Query_RootDepartments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Departments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Departments_Order_By>>;
  where?: InputMaybe<Departments_Bool_Exp>;
};


export type Query_RootDepartments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDeshArgs = {
  distinct_on?: InputMaybe<Array<Desh_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Order_By>>;
  where?: InputMaybe<Desh_Bool_Exp>;
};


export type Query_RootDesh_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Desh_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Order_By>>;
  where?: InputMaybe<Desh_Bool_Exp>;
};


export type Query_RootDesh_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDesh_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Desh_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Products_Order_By>>;
  where?: InputMaybe<Desh_Products_Bool_Exp>;
};


export type Query_RootDesh_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Desh_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Products_Order_By>>;
  where?: InputMaybe<Desh_Products_Bool_Exp>;
};


export type Query_RootDesh_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDesh_SalesArgs = {
  distinct_on?: InputMaybe<Array<Desh_Sales_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Sales_Order_By>>;
  where?: InputMaybe<Desh_Sales_Bool_Exp>;
};


export type Query_RootDesh_Sales_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Desh_Sales_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Sales_Order_By>>;
  where?: InputMaybe<Desh_Sales_Bool_Exp>;
};


export type Query_RootDesh_Sales_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDesh_TrafficArgs = {
  distinct_on?: InputMaybe<Array<Desh_Traffic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Traffic_Order_By>>;
  where?: InputMaybe<Desh_Traffic_Bool_Exp>;
};


export type Query_RootDesh_Traffic_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Desh_Traffic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Traffic_Order_By>>;
  where?: InputMaybe<Desh_Traffic_Bool_Exp>;
};


export type Query_RootDesh_Traffic_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDownloadGetUrlArgs = {
  fileKey: Scalars['String'];
};


export type Query_RootDownloadGetUrlsArgs = {
  fileKeys: Array<InputMaybe<Scalars['String']>>;
};


export type Query_RootEnum_Test_TypesArgs = {
  distinct_on?: InputMaybe<Array<Enum_Test_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Test_Types_Order_By>>;
  where?: InputMaybe<Enum_Test_Types_Bool_Exp>;
};


export type Query_RootEnum_Test_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Enum_Test_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Test_Types_Order_By>>;
  where?: InputMaybe<Enum_Test_Types_Bool_Exp>;
};


export type Query_RootEnum_Test_Types_By_PkArgs = {
  int_enum: Scalars['String'];
};


export type Query_RootEventArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEventsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootFrom_NodesArgs = {
  distinct_on?: InputMaybe<Array<From_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<From_Nodes_Order_By>>;
  where?: InputMaybe<From_Nodes_Bool_Exp>;
};


export type Query_RootFrom_Nodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<From_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<From_Nodes_Order_By>>;
  where?: InputMaybe<From_Nodes_Bool_Exp>;
};


export type Query_RootFrom_Nodes_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Query_RootHallArgs = {
  distinct_on?: InputMaybe<Array<Hall_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hall_Order_By>>;
  where?: InputMaybe<Hall_Bool_Exp>;
};


export type Query_RootHall_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hall_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hall_Order_By>>;
  where?: InputMaybe<Hall_Bool_Exp>;
};


export type Query_RootHall_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootListPartsArgs = {
  fileKey: Scalars['String'];
  uploadId: Scalars['String'];
};


export type Query_RootMapPointArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMapPointsArgs = {
  distinct_on?: InputMaybe<Array<MapPoints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MapPoints_Order_By>>;
  where?: InputMaybe<MapPoints_Bool_Exp>;
};


export type Query_RootMapPointsAggregateArgs = {
  distinct_on?: InputMaybe<Array<MapPoints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MapPoints_Order_By>>;
  where?: InputMaybe<MapPoints_Bool_Exp>;
};


export type Query_RootNeighbourPairsArgs = {
  distinct_on?: InputMaybe<Array<NeighbourPairs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NeighbourPairs_Order_By>>;
  where?: InputMaybe<NeighbourPairs_Bool_Exp>;
};


export type Query_RootNeighbourPairs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<NeighbourPairs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NeighbourPairs_Order_By>>;
  where?: InputMaybe<NeighbourPairs_Bool_Exp>;
};


export type Query_RootNeighbourPairs_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Query_RootOfferArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOffersArgs = {
  distinct_on?: InputMaybe<Array<Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offer_Order_By>>;
  where?: InputMaybe<Offer_Bool_Exp>;
};


export type Query_RootOffersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offer_Order_By>>;
  where?: InputMaybe<Offer_Bool_Exp>;
};


export type Query_RootOrderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrderItemsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Query_RootOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Query_RootOrder_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrdersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrganizationArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrganization_Partnership_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Partnership_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Partnership_Levels_Order_By>>;
  where?: InputMaybe<Organization_Partnership_Levels_Bool_Exp>;
};


export type Query_RootOrganization_Partnership_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Partnership_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Partnership_Levels_Order_By>>;
  where?: InputMaybe<Organization_Partnership_Levels_Bool_Exp>;
};


export type Query_RootOrganization_Partnership_Levels_By_PkArgs = {
  level: Scalars['String'];
};


export type Query_RootOrganization_TypesArgs = {
  distinct_on?: InputMaybe<Array<Organization_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Types_Order_By>>;
  where?: InputMaybe<Organization_Types_Bool_Exp>;
};


export type Query_RootOrganization_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Types_Order_By>>;
  where?: InputMaybe<Organization_Types_Bool_Exp>;
};


export type Query_RootOrganization_Types_By_PkArgs = {
  type: Scalars['String'];
};


export type Query_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizationsNisArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsNis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrganizationsNis_Order_By>>;
  where?: InputMaybe<OrganizationsNis_Bool_Exp>;
};


export type Query_RootOrganizationsNis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsNis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrganizationsNis_Order_By>>;
  where?: InputMaybe<OrganizationsNis_Bool_Exp>;
};


export type Query_RootOrganizationsNis_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPracticionerArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPracticionersArgs = {
  distinct_on?: InputMaybe<Array<Practicioners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Practicioners_Order_By>>;
  where?: InputMaybe<Practicioners_Bool_Exp>;
};


export type Query_RootPracticioners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Practicioners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Practicioners_Order_By>>;
  where?: InputMaybe<Practicioners_Bool_Exp>;
};


export type Query_RootPrepareUploadPartsArgs = {
  fileKey: Scalars['String'];
  partNumber: Scalars['Int'];
  uploadId: Scalars['String'];
};


export type Query_RootProductArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProduct_AvailabilityArgs = {
  distinct_on?: InputMaybe<Array<Product_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Availability_Order_By>>;
  where?: InputMaybe<Product_Availability_Bool_Exp>;
};


export type Query_RootProduct_Availability_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Availability_Order_By>>;
  where?: InputMaybe<Product_Availability_Bool_Exp>;
};


export type Query_RootProduct_Availability_By_PkArgs = {
  type: Scalars['String'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProductsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootQueryTest01Args = {
  distinct_on?: InputMaybe<Array<Test01_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test01_Order_By>>;
  where?: InputMaybe<Test01_Bool_Exp>;
};


export type Query_RootQuestionArgs = {
  distinct_on?: InputMaybe<Array<Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Query_RootQuestion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Query_RootQuestion_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootQuestion_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Question_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Category_Order_By>>;
  where?: InputMaybe<Question_Category_Bool_Exp>;
};


export type Query_RootQuestion_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Question_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Category_Order_By>>;
  where?: InputMaybe<Question_Category_Bool_Exp>;
};


export type Query_RootQuestion_Category_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSiteArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Query_RootSite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Query_RootSite_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStatus_TypesArgs = {
  distinct_on?: InputMaybe<Array<Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Types_Order_By>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Query_RootStatus_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Types_Order_By>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Query_RootStatus_Types_By_PkArgs = {
  status: Scalars['String'];
};


export type Query_RootSurveyArgs = {
  distinct_on?: InputMaybe<Array<Survey_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Order_By>>;
  where?: InputMaybe<Survey_Bool_Exp>;
};


export type Query_RootSurvey_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Survey_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Order_By>>;
  where?: InputMaybe<Survey_Bool_Exp>;
};


export type Query_RootSurvey_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSurvey_PhotosArgs = {
  distinct_on?: InputMaybe<Array<Survey_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Photos_Order_By>>;
  where?: InputMaybe<Survey_Photos_Bool_Exp>;
};


export type Query_RootSurvey_Photos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Survey_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Photos_Order_By>>;
  where?: InputMaybe<Survey_Photos_Bool_Exp>;
};


export type Query_RootSurvey_Photos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest01ByIdArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTestJednotneCisloArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTestJednotneCislosArgs = {
  distinct_on?: InputMaybe<Array<TestJednotneCislo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestJednotneCislo_Order_By>>;
  where?: InputMaybe<TestJednotneCislo_Bool_Exp>;
};


export type Query_RootTestJednotneCislosAggregateArgs = {
  distinct_on?: InputMaybe<Array<TestJednotneCislo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestJednotneCislo_Order_By>>;
  where?: InputMaybe<TestJednotneCislo_Bool_Exp>;
};


export type Query_RootTestXArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTestXesArgs = {
  distinct_on?: InputMaybe<Array<TestX_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestX_Order_By>>;
  where?: InputMaybe<TestX_Bool_Exp>;
};


export type Query_RootTestXesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TestX_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestX_Order_By>>;
  where?: InputMaybe<TestX_Bool_Exp>;
};


export type Query_RootTest_ViewArgs = {
  distinct_on?: InputMaybe<Array<Test_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_View_Order_By>>;
  where?: InputMaybe<Test_View_Bool_Exp>;
};


export type Query_RootTest_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_View_Order_By>>;
  where?: InputMaybe<Test_View_Bool_Exp>;
};


export type Query_RootTopology_LayerArgs = {
  distinct_on?: InputMaybe<Array<Topology_Layer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topology_Layer_Order_By>>;
  where?: InputMaybe<Topology_Layer_Bool_Exp>;
};


export type Query_RootTopology_Layer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topology_Layer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topology_Layer_Order_By>>;
  where?: InputMaybe<Topology_Layer_Bool_Exp>;
};


export type Query_RootTopology_Layer_By_PkArgs = {
  layer_id: Scalars['Int'];
  topology_id: Scalars['Int'];
};


export type Query_RootTopology_TopologyArgs = {
  distinct_on?: InputMaybe<Array<Topology_Topology_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topology_Topology_Order_By>>;
  where?: InputMaybe<Topology_Topology_Bool_Exp>;
};


export type Query_RootTopology_Topology_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topology_Topology_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topology_Topology_Order_By>>;
  where?: InputMaybe<Topology_Topology_Bool_Exp>;
};


export type Query_RootTopology_Topology_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTypes_TestArgs = {
  distinct_on?: InputMaybe<Array<Types_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Types_Test_Order_By>>;
  where?: InputMaybe<Types_Test_Bool_Exp>;
};


export type Query_RootTypes_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Types_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Types_Test_Order_By>>;
  where?: InputMaybe<Types_Test_Bool_Exp>;
};


export type Query_RootTypes_Test_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWorkplaceArgs = {
  distinct_on?: InputMaybe<Array<Workplace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workplace_Order_By>>;
  where?: InputMaybe<Workplace_Bool_Exp>;
};


export type Query_RootWorkplace_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workplace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workplace_Order_By>>;
  where?: InputMaybe<Workplace_Bool_Exp>;
};


export type Query_RootWorkplace_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWorkplace_ItemArgs = {
  distinct_on?: InputMaybe<Array<Workplace_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workplace_Item_Order_By>>;
  where?: InputMaybe<Workplace_Item_Bool_Exp>;
};


export type Query_RootWorkplace_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workplace_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workplace_Item_Order_By>>;
  where?: InputMaybe<Workplace_Item_Bool_Exp>;
};


export type Query_RootWorkplace_Item_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "question" */
export type Question = {
  __typename?: 'question';
  /** An array relationship */
  answers: Array<Answers>;
  /** An aggregate relationship */
  answers_aggregate: Answers_Aggregate;
  description: Scalars['String'];
  display_order: Scalars['Int'];
  fk_category_question: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  question_category: Question_Category;
  validity_from: Scalars['date'];
  validity_to: Scalars['date'];
  value: Scalars['Boolean'];
};


/** columns and relationships of "question" */
export type QuestionAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


/** columns and relationships of "question" */
export type QuestionAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};

/** aggregated selection of "question" */
export type Question_Aggregate = {
  __typename?: 'question_aggregate';
  aggregate?: Maybe<Question_Aggregate_Fields>;
  nodes: Array<Question>;
};

export type Question_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Question_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Question_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Question_Aggregate_Bool_Exp_Count>;
};

export type Question_Aggregate_Bool_Exp_Bool_And = {
  arguments: Question_Select_Column_Question_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Question_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Question_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Question_Select_Column_Question_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Question_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Question_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Question_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Question_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "question" */
export type Question_Aggregate_Fields = {
  __typename?: 'question_aggregate_fields';
  avg?: Maybe<Question_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Question_Max_Fields>;
  min?: Maybe<Question_Min_Fields>;
  stddev?: Maybe<Question_Stddev_Fields>;
  stddev_pop?: Maybe<Question_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Question_Stddev_Samp_Fields>;
  sum?: Maybe<Question_Sum_Fields>;
  var_pop?: Maybe<Question_Var_Pop_Fields>;
  var_samp?: Maybe<Question_Var_Samp_Fields>;
  variance?: Maybe<Question_Variance_Fields>;
};


/** aggregate fields of "question" */
export type Question_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Question_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "question" */
export type Question_Aggregate_Order_By = {
  avg?: InputMaybe<Question_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Question_Max_Order_By>;
  min?: InputMaybe<Question_Min_Order_By>;
  stddev?: InputMaybe<Question_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Question_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Question_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Question_Sum_Order_By>;
  var_pop?: InputMaybe<Question_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Question_Var_Samp_Order_By>;
  variance?: InputMaybe<Question_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "question" */
export type Question_Arr_Rel_Insert_Input = {
  data: Array<Question_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Question_On_Conflict>;
};

/** aggregate avg on columns */
export type Question_Avg_Fields = {
  __typename?: 'question_avg_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "question" */
export type Question_Avg_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "question". All fields are combined with a logical 'AND'. */
export type Question_Bool_Exp = {
  _and?: InputMaybe<Array<Question_Bool_Exp>>;
  _not?: InputMaybe<Question_Bool_Exp>;
  _or?: InputMaybe<Array<Question_Bool_Exp>>;
  answers?: InputMaybe<Answers_Bool_Exp>;
  answers_aggregate?: InputMaybe<Answers_Aggregate_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  display_order?: InputMaybe<Int_Comparison_Exp>;
  fk_category_question?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  question_category?: InputMaybe<Question_Category_Bool_Exp>;
  validity_from?: InputMaybe<Date_Comparison_Exp>;
  validity_to?: InputMaybe<Date_Comparison_Exp>;
  value?: InputMaybe<Boolean_Comparison_Exp>;
};

/** columns and relationships of "question_category" */
export type Question_Category = {
  __typename?: 'question_category';
  description: Scalars['String'];
  display_order: Scalars['Int'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  questions: Array<Question>;
  /** An aggregate relationship */
  questions_aggregate: Question_Aggregate;
  validity_from: Scalars['date'];
  validity_to: Scalars['date'];
};


/** columns and relationships of "question_category" */
export type Question_CategoryQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


/** columns and relationships of "question_category" */
export type Question_CategoryQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};

/** aggregated selection of "question_category" */
export type Question_Category_Aggregate = {
  __typename?: 'question_category_aggregate';
  aggregate?: Maybe<Question_Category_Aggregate_Fields>;
  nodes: Array<Question_Category>;
};

/** aggregate fields of "question_category" */
export type Question_Category_Aggregate_Fields = {
  __typename?: 'question_category_aggregate_fields';
  avg?: Maybe<Question_Category_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Question_Category_Max_Fields>;
  min?: Maybe<Question_Category_Min_Fields>;
  stddev?: Maybe<Question_Category_Stddev_Fields>;
  stddev_pop?: Maybe<Question_Category_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Question_Category_Stddev_Samp_Fields>;
  sum?: Maybe<Question_Category_Sum_Fields>;
  var_pop?: Maybe<Question_Category_Var_Pop_Fields>;
  var_samp?: Maybe<Question_Category_Var_Samp_Fields>;
  variance?: Maybe<Question_Category_Variance_Fields>;
};


/** aggregate fields of "question_category" */
export type Question_Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Question_Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Question_Category_Avg_Fields = {
  __typename?: 'question_category_avg_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "question_category". All fields are combined with a logical 'AND'. */
export type Question_Category_Bool_Exp = {
  _and?: InputMaybe<Array<Question_Category_Bool_Exp>>;
  _not?: InputMaybe<Question_Category_Bool_Exp>;
  _or?: InputMaybe<Array<Question_Category_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  display_order?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  questions?: InputMaybe<Question_Bool_Exp>;
  questions_aggregate?: InputMaybe<Question_Aggregate_Bool_Exp>;
  validity_from?: InputMaybe<Date_Comparison_Exp>;
  validity_to?: InputMaybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "question_category" */
export enum Question_Category_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionCategoryPkey = 'question_category_pkey'
}

/** input type for incrementing numeric columns in table "question_category" */
export type Question_Category_Inc_Input = {
  display_order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "question_category" */
export type Question_Category_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  display_order?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  questions?: InputMaybe<Question_Arr_Rel_Insert_Input>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Question_Category_Max_Fields = {
  __typename?: 'question_category_max_fields';
  description?: Maybe<Scalars['String']>;
  display_order?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  validity_from?: Maybe<Scalars['date']>;
  validity_to?: Maybe<Scalars['date']>;
};

/** aggregate min on columns */
export type Question_Category_Min_Fields = {
  __typename?: 'question_category_min_fields';
  description?: Maybe<Scalars['String']>;
  display_order?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  validity_from?: Maybe<Scalars['date']>;
  validity_to?: Maybe<Scalars['date']>;
};

/** response of any mutation on the table "question_category" */
export type Question_Category_Mutation_Response = {
  __typename?: 'question_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Question_Category>;
};

/** input type for inserting object relation for remote table "question_category" */
export type Question_Category_Obj_Rel_Insert_Input = {
  data: Question_Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Question_Category_On_Conflict>;
};

/** on_conflict condition type for table "question_category" */
export type Question_Category_On_Conflict = {
  constraint: Question_Category_Constraint;
  update_columns?: Array<Question_Category_Update_Column>;
  where?: InputMaybe<Question_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "question_category". */
export type Question_Category_Order_By = {
  description?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  questions_aggregate?: InputMaybe<Question_Aggregate_Order_By>;
  validity_from?: InputMaybe<Order_By>;
  validity_to?: InputMaybe<Order_By>;
};

/** primary key columns input for table: question_category */
export type Question_Category_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "question_category" */
export enum Question_Category_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  DisplayOrder = 'display_order',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ValidityFrom = 'validity_from',
  /** column name */
  ValidityTo = 'validity_to'
}

/** input type for updating data in table "question_category" */
export type Question_Category_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  display_order?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Question_Category_Stddev_Fields = {
  __typename?: 'question_category_stddev_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Question_Category_Stddev_Pop_Fields = {
  __typename?: 'question_category_stddev_pop_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Question_Category_Stddev_Samp_Fields = {
  __typename?: 'question_category_stddev_samp_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "question_category" */
export type Question_Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Question_Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Question_Category_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  display_order?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
};

/** aggregate sum on columns */
export type Question_Category_Sum_Fields = {
  __typename?: 'question_category_sum_fields';
  display_order?: Maybe<Scalars['Int']>;
};

/** update columns of table "question_category" */
export enum Question_Category_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  DisplayOrder = 'display_order',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ValidityFrom = 'validity_from',
  /** column name */
  ValidityTo = 'validity_to'
}

export type Question_Category_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Question_Category_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Question_Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Question_Category_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Question_Category_Var_Pop_Fields = {
  __typename?: 'question_category_var_pop_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Question_Category_Var_Samp_Fields = {
  __typename?: 'question_category_var_samp_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Question_Category_Variance_Fields = {
  __typename?: 'question_category_variance_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** unique or primary key constraints on table "question" */
export enum Question_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionPkey = 'question_pkey'
}

/** input type for incrementing numeric columns in table "question" */
export type Question_Inc_Input = {
  display_order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "question" */
export type Question_Insert_Input = {
  answers?: InputMaybe<Answers_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']>;
  display_order?: InputMaybe<Scalars['Int']>;
  fk_category_question?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  question_category?: InputMaybe<Question_Category_Obj_Rel_Insert_Input>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
  value?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Question_Max_Fields = {
  __typename?: 'question_max_fields';
  description?: Maybe<Scalars['String']>;
  display_order?: Maybe<Scalars['Int']>;
  fk_category_question?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  validity_from?: Maybe<Scalars['date']>;
  validity_to?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "question" */
export type Question_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  fk_category_question?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  validity_from?: InputMaybe<Order_By>;
  validity_to?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Question_Min_Fields = {
  __typename?: 'question_min_fields';
  description?: Maybe<Scalars['String']>;
  display_order?: Maybe<Scalars['Int']>;
  fk_category_question?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  validity_from?: Maybe<Scalars['date']>;
  validity_to?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "question" */
export type Question_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  fk_category_question?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  validity_from?: InputMaybe<Order_By>;
  validity_to?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "question" */
export type Question_Mutation_Response = {
  __typename?: 'question_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Question>;
};

/** input type for inserting object relation for remote table "question" */
export type Question_Obj_Rel_Insert_Input = {
  data: Question_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Question_On_Conflict>;
};

/** on_conflict condition type for table "question" */
export type Question_On_Conflict = {
  constraint: Question_Constraint;
  update_columns?: Array<Question_Update_Column>;
  where?: InputMaybe<Question_Bool_Exp>;
};

/** Ordering options when selecting data from "question". */
export type Question_Order_By = {
  answers_aggregate?: InputMaybe<Answers_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  fk_category_question?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  question_category?: InputMaybe<Question_Category_Order_By>;
  validity_from?: InputMaybe<Order_By>;
  validity_to?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: question */
export type Question_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "question" */
export enum Question_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  DisplayOrder = 'display_order',
  /** column name */
  FkCategoryQuestion = 'fk_category_question',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ValidityFrom = 'validity_from',
  /** column name */
  ValidityTo = 'validity_to',
  /** column name */
  Value = 'value'
}

/** select "question_aggregate_bool_exp_bool_and_arguments_columns" columns of table "question" */
export enum Question_Select_Column_Question_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Value = 'value'
}

/** select "question_aggregate_bool_exp_bool_or_arguments_columns" columns of table "question" */
export enum Question_Select_Column_Question_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "question" */
export type Question_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  display_order?: InputMaybe<Scalars['Int']>;
  fk_category_question?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
  value?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Question_Stddev_Fields = {
  __typename?: 'question_stddev_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "question" */
export type Question_Stddev_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Question_Stddev_Pop_Fields = {
  __typename?: 'question_stddev_pop_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "question" */
export type Question_Stddev_Pop_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Question_Stddev_Samp_Fields = {
  __typename?: 'question_stddev_samp_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "question" */
export type Question_Stddev_Samp_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "question" */
export type Question_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Question_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Question_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  display_order?: InputMaybe<Scalars['Int']>;
  fk_category_question?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
  value?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Question_Sum_Fields = {
  __typename?: 'question_sum_fields';
  display_order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "question" */
export type Question_Sum_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** update columns of table "question" */
export enum Question_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  DisplayOrder = 'display_order',
  /** column name */
  FkCategoryQuestion = 'fk_category_question',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ValidityFrom = 'validity_from',
  /** column name */
  ValidityTo = 'validity_to',
  /** column name */
  Value = 'value'
}

export type Question_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Question_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Question_Set_Input>;
  /** filter the rows which have to be updated */
  where: Question_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Question_Var_Pop_Fields = {
  __typename?: 'question_var_pop_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "question" */
export type Question_Var_Pop_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Question_Var_Samp_Fields = {
  __typename?: 'question_var_samp_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "question" */
export type Question_Var_Samp_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Question_Variance_Fields = {
  __typename?: 'question_variance_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "question" */
export type Question_Variance_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** columns and relationships of "site" */
export type Site = {
  __typename?: 'site';
  /** An array relationship */
  halls: Array<Hall>;
  /** An aggregate relationship */
  halls_aggregate: Hall_Aggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
  note: Scalars['String'];
  photo_of_factory: Scalars['String'];
};


/** columns and relationships of "site" */
export type SiteHallsArgs = {
  distinct_on?: InputMaybe<Array<Hall_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hall_Order_By>>;
  where?: InputMaybe<Hall_Bool_Exp>;
};


/** columns and relationships of "site" */
export type SiteHalls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hall_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hall_Order_By>>;
  where?: InputMaybe<Hall_Bool_Exp>;
};

/** aggregated selection of "site" */
export type Site_Aggregate = {
  __typename?: 'site_aggregate';
  aggregate?: Maybe<Site_Aggregate_Fields>;
  nodes: Array<Site>;
};

/** aggregate fields of "site" */
export type Site_Aggregate_Fields = {
  __typename?: 'site_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Site_Max_Fields>;
  min?: Maybe<Site_Min_Fields>;
};


/** aggregate fields of "site" */
export type Site_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Site_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "site". All fields are combined with a logical 'AND'. */
export type Site_Bool_Exp = {
  _and?: InputMaybe<Array<Site_Bool_Exp>>;
  _not?: InputMaybe<Site_Bool_Exp>;
  _or?: InputMaybe<Array<Site_Bool_Exp>>;
  halls?: InputMaybe<Hall_Bool_Exp>;
  halls_aggregate?: InputMaybe<Hall_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  photo_of_factory?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "site" */
export enum Site_Constraint {
  /** unique or primary key constraint on columns "id" */
  SitePkey = 'site_pkey'
}

/** input type for inserting data into table "site" */
export type Site_Insert_Input = {
  halls?: InputMaybe<Hall_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  photo_of_factory?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Site_Max_Fields = {
  __typename?: 'site_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  photo_of_factory?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Site_Min_Fields = {
  __typename?: 'site_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  photo_of_factory?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "site" */
export type Site_Mutation_Response = {
  __typename?: 'site_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Site>;
};

/** input type for inserting object relation for remote table "site" */
export type Site_Obj_Rel_Insert_Input = {
  data: Site_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Site_On_Conflict>;
};

/** on_conflict condition type for table "site" */
export type Site_On_Conflict = {
  constraint: Site_Constraint;
  update_columns?: Array<Site_Update_Column>;
  where?: InputMaybe<Site_Bool_Exp>;
};

/** Ordering options when selecting data from "site". */
export type Site_Order_By = {
  halls_aggregate?: InputMaybe<Hall_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  photo_of_factory?: InputMaybe<Order_By>;
};

/** primary key columns input for table: site */
export type Site_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "site" */
export enum Site_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  PhotoOfFactory = 'photo_of_factory'
}

/** input type for updating data in table "site" */
export type Site_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  photo_of_factory?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "site" */
export type Site_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Site_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Site_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  photo_of_factory?: InputMaybe<Scalars['String']>;
};

/** update columns of table "site" */
export enum Site_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  PhotoOfFactory = 'photo_of_factory'
}

export type Site_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Site_Set_Input>;
  /** filter the rows which have to be updated */
  where: Site_Bool_Exp;
};

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid?: InputMaybe<Scalars['Boolean']>;
};

export type St_D_Within_Input = {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
};

/** columns and relationships of "status_types" */
export type Status_Types = {
  __typename?: 'status_types';
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  status: Scalars['String'];
  /** An array relationship */
  types_tests: Array<Types_Test>;
  /** An aggregate relationship */
  types_tests_aggregate: Types_Test_Aggregate;
};


/** columns and relationships of "status_types" */
export type Status_TypesOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "status_types" */
export type Status_TypesOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "status_types" */
export type Status_TypesTypes_TestsArgs = {
  distinct_on?: InputMaybe<Array<Types_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Types_Test_Order_By>>;
  where?: InputMaybe<Types_Test_Bool_Exp>;
};


/** columns and relationships of "status_types" */
export type Status_TypesTypes_Tests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Types_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Types_Test_Order_By>>;
  where?: InputMaybe<Types_Test_Bool_Exp>;
};

/** aggregated selection of "status_types" */
export type Status_Types_Aggregate = {
  __typename?: 'status_types_aggregate';
  aggregate?: Maybe<Status_Types_Aggregate_Fields>;
  nodes: Array<Status_Types>;
};

/** aggregate fields of "status_types" */
export type Status_Types_Aggregate_Fields = {
  __typename?: 'status_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Status_Types_Max_Fields>;
  min?: Maybe<Status_Types_Min_Fields>;
};


/** aggregate fields of "status_types" */
export type Status_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Status_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "status_types". All fields are combined with a logical 'AND'. */
export type Status_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Status_Types_Bool_Exp>>;
  _not?: InputMaybe<Status_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Status_Types_Bool_Exp>>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  types_tests?: InputMaybe<Types_Test_Bool_Exp>;
  types_tests_aggregate?: InputMaybe<Types_Test_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "status_types" */
export enum Status_Types_Constraint {
  /** unique or primary key constraint on columns "status" */
  StatusTypesPkey = 'status_types_pkey'
}

export enum Status_Types_Enum {
  Cancelled = 'Cancelled',
  Confirmed = 'Confirmed',
  Delivered = 'Delivered',
  Processing = 'Processing',
  Refounded = 'Refounded',
  Shipped = 'Shipped'
}

/** Boolean expression to compare columns of type "status_types_enum". All fields are combined with logical 'AND'. */
export type Status_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Status_Types_Enum>;
  _in?: InputMaybe<Array<Status_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Status_Types_Enum>;
  _nin?: InputMaybe<Array<Status_Types_Enum>>;
};

/** input type for inserting data into table "status_types" */
export type Status_Types_Insert_Input = {
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']>;
  types_tests?: InputMaybe<Types_Test_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Status_Types_Max_Fields = {
  __typename?: 'status_types_max_fields';
  status?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Status_Types_Min_Fields = {
  __typename?: 'status_types_min_fields';
  status?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "status_types" */
export type Status_Types_Mutation_Response = {
  __typename?: 'status_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Status_Types>;
};

/** input type for inserting object relation for remote table "status_types" */
export type Status_Types_Obj_Rel_Insert_Input = {
  data: Status_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Status_Types_On_Conflict>;
};

/** on_conflict condition type for table "status_types" */
export type Status_Types_On_Conflict = {
  constraint: Status_Types_Constraint;
  update_columns?: Array<Status_Types_Update_Column>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "status_types". */
export type Status_Types_Order_By = {
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  types_tests_aggregate?: InputMaybe<Types_Test_Aggregate_Order_By>;
};

/** primary key columns input for table: status_types */
export type Status_Types_Pk_Columns_Input = {
  status: Scalars['String'];
};

/** select columns of table "status_types" */
export enum Status_Types_Select_Column {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "status_types" */
export type Status_Types_Set_Input = {
  status?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "status_types" */
export type Status_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Status_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Status_Types_Stream_Cursor_Value_Input = {
  status?: InputMaybe<Scalars['String']>;
};

/** update columns of table "status_types" */
export enum Status_Types_Update_Column {
  /** column name */
  Status = 'status'
}

export type Status_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Status_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Status_Types_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch aggregated fields from the table: "test_01" */
  Test01_aggregate: Test01_Aggregate;
  /** fetch data from the table in a streaming manner: "test_01" */
  Test01_stream: Array<Test01>;
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** An array relationship */
  answers: Array<Answers>;
  /** An aggregate relationship */
  answers_aggregate: Answers_Aggregate;
  /** fetch data from the table: "answers" using primary key columns */
  answers_by_pk?: Maybe<Answers>;
  /** fetch data from the table in a streaming manner: "answers" */
  answers_stream: Array<Answers>;
  /** An array relationship */
  attributes: Array<Attributes>;
  /** An aggregate relationship */
  attributes_aggregate: Attributes_Aggregate;
  /** fetch data from the table: "attributes" using primary key columns */
  attributes_by_pk?: Maybe<Attributes>;
  /** fetch data from the table in a streaming manner: "attributes" */
  attributes_stream: Array<Attributes>;
  /** fetch data from the table: "batch543" */
  batch543: Array<Batch543>;
  /** fetch aggregated fields from the table: "batch543" */
  batch543_aggregate: Batch543_Aggregate;
  /** fetch data from the table: "batch543" using primary key columns */
  batch543_by_pk?: Maybe<Batch543>;
  /** An array relationship */
  batch543_items: Array<Batch543_Items>;
  /** An aggregate relationship */
  batch543_items_aggregate: Batch543_Items_Aggregate;
  /** fetch data from the table: "batch543_items" using primary key columns */
  batch543_items_by_pk?: Maybe<Batch543_Items>;
  /** fetch data from the table in a streaming manner: "batch543_items" */
  batch543_items_stream: Array<Batch543_Items>;
  /** fetch data from the table in a streaming manner: "batch543" */
  batch543_stream: Array<Batch543>;
  /** fetch data from the table: "bus_stops" using primary key columns */
  busStop?: Maybe<BusStops>;
  /** fetch data from the table: "bus_stop_departures" using primary key columns */
  busStopDeparture?: Maybe<BusStopDepartures>;
  /** fetch aggregated fields from the table: "bus_stop_departures" */
  busStopDepartureAggregate: BusStopDepartures_Aggregate;
  /** fetch data from the table: "bus_stop_departures" */
  busStopDepartures: Array<BusStopDepartures>;
  /** fetch data from the table in a streaming manner: "bus_stop_departures" */
  busStopDeparturesStream: Array<BusStopDepartures>;
  /** fetch data from the table: "bus_stops" */
  busStops: Array<BusStops>;
  /** fetch aggregated fields from the table: "bus_stops" */
  busStopsAggregate: BusStops_Aggregate;
  /** fetch data from the table in a streaming manner: "bus_stops" */
  busStops_stream: Array<BusStops>;
  /** fetch data from the table: "ci" */
  ci: Array<Ci>;
  /** fetch data from the table: "ciWithRels" */
  ciWithRels: Array<CiWithRels>;
  /** fetch aggregated fields from the table: "ciWithRels" */
  ciWithRels_aggregate: CiWithRels_Aggregate;
  /** fetch data from the table: "ciWithRels" using primary key columns */
  ciWithRels_by_pk?: Maybe<CiWithRels>;
  /** fetch data from the table in a streaming manner: "ciWithRels" */
  ciWithRels_stream: Array<CiWithRels>;
  /** fetch aggregated fields from the table: "ci" */
  ci_aggregate: Ci_Aggregate;
  /** fetch data from the table: "ci" using primary key columns */
  ci_by_pk?: Maybe<Ci>;
  /** fetch data from the table in a streaming manner: "ci" */
  ci_stream: Array<Ci>;
  /** fetch data from the table: "cmdb" */
  cmdb: Array<Cmdb>;
  /** fetch data from the table: "cmdb_relations" using primary key columns */
  cmdbRelation?: Maybe<CmdbRelations>;
  /** fetch data from the table: "cmdb_relations" */
  cmdbRelations: Array<CmdbRelations>;
  /** fetch aggregated fields from the table: "cmdb_relations" */
  cmdbRelationsAggregate: CmdbRelations_Aggregate;
  /** fetch data from the table: "cmdb_relations_neighbourscount" using primary key columns */
  cmdbRelationsNeighbourscount?: Maybe<CmdbRelationsNeighbourscounts>;
  /** fetch data from the table: "cmdb_relations_neighbourscount" */
  cmdbRelationsNeighbourscounts: Array<CmdbRelationsNeighbourscounts>;
  cmdbRelationsNeighbourscounts_aggregate: CmdbRelationsNeighbourscounts_Aggregate;
  /** fetch data from the table in a streaming manner: "cmdb_relations_neighbourscount" */
  cmdbRelationsNeighbourscounts_stream: Array<CmdbRelationsNeighbourscounts>;
  /** fetch data from the table in a streaming manner: "cmdb_relations" */
  cmdbRelationsStream: Array<CmdbRelations>;
  /** fetch aggregated fields from the table: "cmdb" */
  cmdb_aggregate: Cmdb_Aggregate;
  /** fetch data from the table: "cmdb" using primary key columns */
  cmdb_by_pk?: Maybe<Cmdb>;
  /** fetch data from the table in a streaming manner: "cmdb" */
  cmdb_stream: Array<Cmdb>;
  /** fetch data from the table: "configurationItems" */
  configurationItems: Array<ConfigurationItems>;
  /** fetch aggregated fields from the table: "configurationItems" */
  configurationItems_aggregate: ConfigurationItems_Aggregate;
  /** fetch data from the table: "configurationItems" using primary key columns */
  configurationItems_by_pk?: Maybe<ConfigurationItems>;
  /** fetch data from the table in a streaming manner: "configurationItems" */
  configurationItems_stream: Array<ConfigurationItems>;
  /** fetch data from the table: "contracts" using primary key columns */
  contract?: Maybe<Contracts>;
  /** fetch data from the table: "contracts" */
  contracts: Array<Contracts>;
  /** fetch aggregated fields from the table: "contracts" */
  contracts_aggregate: Contracts_Aggregate;
  /** fetch data from the table in a streaming manner: "contracts" */
  contracts_stream: Array<Contracts>;
  /** fetch data from the table: "customers" using primary key columns */
  customer?: Maybe<Customers>;
  /** fetch data from the table: "customer_types" */
  customer_types: Array<Customer_Types>;
  /** fetch aggregated fields from the table: "customer_types" */
  customer_types_aggregate: Customer_Types_Aggregate;
  /** fetch data from the table: "customer_types" using primary key columns */
  customer_types_by_pk?: Maybe<Customer_Types>;
  /** fetch data from the table in a streaming manner: "customer_types" */
  customer_types_stream: Array<Customer_Types>;
  /** An array relationship */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customersAggregate: Customers_Aggregate;
  /** fetch data from the table in a streaming manner: "customers" */
  customers_stream: Array<Customers>;
  /** fetch data from the table: "departments" */
  departments: Array<Departments>;
  /** fetch aggregated fields from the table: "departments" */
  departments_aggregate: Departments_Aggregate;
  /** fetch data from the table: "departments" using primary key columns */
  departments_by_pk?: Maybe<Departments>;
  /** fetch data from the table in a streaming manner: "departments" */
  departments_stream: Array<Departments>;
  /** fetch data from the table: "desh" */
  desh: Array<Desh>;
  /** fetch aggregated fields from the table: "desh" */
  desh_aggregate: Desh_Aggregate;
  /** fetch data from the table: "desh" using primary key columns */
  desh_by_pk?: Maybe<Desh>;
  /** An array relationship */
  desh_products: Array<Desh_Products>;
  /** An aggregate relationship */
  desh_products_aggregate: Desh_Products_Aggregate;
  /** fetch data from the table: "desh_products" using primary key columns */
  desh_products_by_pk?: Maybe<Desh_Products>;
  /** fetch data from the table in a streaming manner: "desh_products" */
  desh_products_stream: Array<Desh_Products>;
  /** An array relationship */
  desh_sales: Array<Desh_Sales>;
  /** An aggregate relationship */
  desh_sales_aggregate: Desh_Sales_Aggregate;
  /** fetch data from the table: "desh_sales" using primary key columns */
  desh_sales_by_pk?: Maybe<Desh_Sales>;
  /** fetch data from the table in a streaming manner: "desh_sales" */
  desh_sales_stream: Array<Desh_Sales>;
  /** fetch data from the table in a streaming manner: "desh" */
  desh_stream: Array<Desh>;
  /** fetch data from the table: "desh_traffic" */
  desh_traffic: Array<Desh_Traffic>;
  /** fetch aggregated fields from the table: "desh_traffic" */
  desh_traffic_aggregate: Desh_Traffic_Aggregate;
  /** fetch data from the table: "desh_traffic" using primary key columns */
  desh_traffic_by_pk?: Maybe<Desh_Traffic>;
  /** fetch data from the table in a streaming manner: "desh_traffic" */
  desh_traffic_stream: Array<Desh_Traffic>;
  /** fetch data from the table: "enum_test_types" */
  enum_test_types: Array<Enum_Test_Types>;
  /** fetch aggregated fields from the table: "enum_test_types" */
  enum_test_types_aggregate: Enum_Test_Types_Aggregate;
  /** fetch data from the table: "enum_test_types" using primary key columns */
  enum_test_types_by_pk?: Maybe<Enum_Test_Types>;
  /** fetch data from the table in a streaming manner: "enum_test_types" */
  enum_test_types_stream: Array<Enum_Test_Types>;
  /** fetch data from the table: "events" using primary key columns */
  event?: Maybe<Events>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  eventsAggregate: Events_Aggregate;
  /** fetch data from the table in a streaming manner: "events" */
  events_stream: Array<Events>;
  /** fetch data from the table: "from_nodes" */
  from_nodes: Array<From_Nodes>;
  /** fetch aggregated fields from the table: "from_nodes" */
  from_nodes_aggregate: From_Nodes_Aggregate;
  /** fetch data from the table: "from_nodes" using primary key columns */
  from_nodes_by_pk?: Maybe<From_Nodes>;
  /** fetch data from the table in a streaming manner: "from_nodes" */
  from_nodes_stream: Array<From_Nodes>;
  /** fetch data from the table: "hall" */
  hall: Array<Hall>;
  /** fetch aggregated fields from the table: "hall" */
  hall_aggregate: Hall_Aggregate;
  /** fetch data from the table: "hall" using primary key columns */
  hall_by_pk?: Maybe<Hall>;
  /** fetch data from the table in a streaming manner: "hall" */
  hall_stream: Array<Hall>;
  /** fetch data from the table: "map_points" using primary key columns */
  mapPoint?: Maybe<MapPoints>;
  /** fetch data from the table: "map_points" */
  mapPoints: Array<MapPoints>;
  /** fetch aggregated fields from the table: "map_points" */
  mapPointsAggregate: MapPoints_Aggregate;
  /** fetch data from the table in a streaming manner: "map_points" */
  mapPoints_stream: Array<MapPoints>;
  /** An array relationship */
  neighbourPairs: Array<NeighbourPairs>;
  /** An aggregate relationship */
  neighbourPairs_aggregate: NeighbourPairs_Aggregate;
  /** fetch data from the table: "neighbourPairs" using primary key columns */
  neighbourPairs_by_pk?: Maybe<NeighbourPairs>;
  /** fetch data from the table in a streaming manner: "neighbourPairs" */
  neighbourPairs_stream: Array<NeighbourPairs>;
  /** fetch data from the table: "offer" using primary key columns */
  offer?: Maybe<Offer>;
  /** fetch data from the table in a streaming manner: "offer" */
  offer_stream: Array<Offer>;
  /** fetch data from the table: "offer" */
  offers: Array<Offer>;
  /** fetch aggregated fields from the table: "offer" */
  offersAggregate: Offer_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  order?: Maybe<Orders>;
  /** fetch aggregated fields from the table: "order_items" */
  orderItemsAggregate: Order_Items_Aggregate;
  /** fetch data from the table in a streaming manner: "order_items" */
  orderItemsStream: Array<Order_Items>;
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** fetch data from the table: "order_items" using primary key columns */
  order_items_by_pk?: Maybe<Order_Items>;
  /** An array relationship */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  ordersAggregate: Orders_Aggregate;
  /** fetch data from the table in a streaming manner: "orders" */
  ordersStream: Array<Orders>;
  /** fetch data from the table: "organizations" using primary key columns */
  organization?: Maybe<Organizations>;
  /** fetch data from the table: "organization_partnership_levels" */
  organization_partnership_levels: Array<Organization_Partnership_Levels>;
  /** fetch aggregated fields from the table: "organization_partnership_levels" */
  organization_partnership_levels_aggregate: Organization_Partnership_Levels_Aggregate;
  /** fetch data from the table: "organization_partnership_levels" using primary key columns */
  organization_partnership_levels_by_pk?: Maybe<Organization_Partnership_Levels>;
  /** fetch data from the table in a streaming manner: "organization_partnership_levels" */
  organization_partnership_levels_stream: Array<Organization_Partnership_Levels>;
  /** fetch data from the table: "organization_types" */
  organization_types: Array<Organization_Types>;
  /** fetch aggregated fields from the table: "organization_types" */
  organization_types_aggregate: Organization_Types_Aggregate;
  /** fetch data from the table: "organization_types" using primary key columns */
  organization_types_by_pk?: Maybe<Organization_Types>;
  /** fetch data from the table in a streaming manner: "organization_types" */
  organization_types_stream: Array<Organization_Types>;
  /** An array relationship */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizationsAggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizationsNIS" */
  organizationsNIS: Array<OrganizationsNis>;
  /** fetch aggregated fields from the table: "organizationsNIS" */
  organizationsNIS_aggregate: OrganizationsNis_Aggregate;
  /** fetch data from the table: "organizationsNIS" using primary key columns */
  organizationsNIS_by_pk?: Maybe<OrganizationsNis>;
  /** fetch data from the table in a streaming manner: "organizationsNIS" */
  organizationsNIS_stream: Array<OrganizationsNis>;
  /** fetch data from the table in a streaming manner: "organizations" */
  organizationsStream: Array<Organizations>;
  /** fetch data from the table: "practicioners" using primary key columns */
  practicioner?: Maybe<Practicioners>;
  /** fetch data from the table: "practicioners" */
  practicioners: Array<Practicioners>;
  /** fetch aggregated fields from the table: "practicioners" */
  practicioners_aggregate: Practicioners_Aggregate;
  /** fetch data from the table in a streaming manner: "practicioners" */
  practicioners_stream: Array<Practicioners>;
  /** fetch data from the table: "products" using primary key columns */
  product?: Maybe<Products>;
  /** fetch data from the table: "product_availability" */
  product_availability: Array<Product_Availability>;
  /** fetch aggregated fields from the table: "product_availability" */
  product_availability_aggregate: Product_Availability_Aggregate;
  /** fetch data from the table: "product_availability" using primary key columns */
  product_availability_by_pk?: Maybe<Product_Availability>;
  /** fetch data from the table in a streaming manner: "product_availability" */
  product_availability_stream: Array<Product_Availability>;
  /** An array relationship */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  productsAggregate: Products_Aggregate;
  /** fetch data from the table in a streaming manner: "products" */
  productsStream: Array<Products>;
  /** fetch data from the table: "test_01" */
  queryTest01: Array<Test01>;
  /** fetch data from the table: "question" */
  question: Array<Question>;
  /** fetch aggregated fields from the table: "question" */
  question_aggregate: Question_Aggregate;
  /** fetch data from the table: "question" using primary key columns */
  question_by_pk?: Maybe<Question>;
  /** fetch data from the table: "question_category" */
  question_category: Array<Question_Category>;
  /** fetch aggregated fields from the table: "question_category" */
  question_category_aggregate: Question_Category_Aggregate;
  /** fetch data from the table: "question_category" using primary key columns */
  question_category_by_pk?: Maybe<Question_Category>;
  /** fetch data from the table in a streaming manner: "question_category" */
  question_category_stream: Array<Question_Category>;
  /** fetch data from the table in a streaming manner: "question" */
  question_stream: Array<Question>;
  /** fetch data from the table: "site" */
  site: Array<Site>;
  /** fetch aggregated fields from the table: "site" */
  site_aggregate: Site_Aggregate;
  /** fetch data from the table: "site" using primary key columns */
  site_by_pk?: Maybe<Site>;
  /** fetch data from the table in a streaming manner: "site" */
  site_stream: Array<Site>;
  /** fetch data from the table: "status_types" */
  status_types: Array<Status_Types>;
  /** fetch aggregated fields from the table: "status_types" */
  status_types_aggregate: Status_Types_Aggregate;
  /** fetch data from the table: "status_types" using primary key columns */
  status_types_by_pk?: Maybe<Status_Types>;
  /** fetch data from the table in a streaming manner: "status_types" */
  status_types_stream: Array<Status_Types>;
  /** fetch data from the table: "survey" */
  survey: Array<Survey>;
  /** fetch aggregated fields from the table: "survey" */
  survey_aggregate: Survey_Aggregate;
  /** fetch data from the table: "survey" using primary key columns */
  survey_by_pk?: Maybe<Survey>;
  /** An array relationship */
  survey_photos: Array<Survey_Photos>;
  /** An aggregate relationship */
  survey_photos_aggregate: Survey_Photos_Aggregate;
  /** fetch data from the table: "survey_photos" using primary key columns */
  survey_photos_by_pk?: Maybe<Survey_Photos>;
  /** fetch data from the table in a streaming manner: "survey_photos" */
  survey_photos_stream: Array<Survey_Photos>;
  /** fetch data from the table in a streaming manner: "survey" */
  survey_stream: Array<Survey>;
  /** fetch data from the table: "test_01" using primary key columns */
  test01ById?: Maybe<Test01>;
  /** fetch data from the table: "test_jednotne_cislo" using primary key columns */
  testJednotneCislo?: Maybe<TestJednotneCislo>;
  /** fetch data from the table: "test_jednotne_cislo" */
  testJednotneCislos: Array<TestJednotneCislo>;
  /** fetch aggregated fields from the table: "test_jednotne_cislo" */
  testJednotneCislosAggregate: TestJednotneCislo_Aggregate;
  /** fetch data from the table in a streaming manner: "test_jednotne_cislo" */
  testJednotneCislosStream: Array<TestJednotneCislo>;
  /** fetch data from the table: "test_x" using primary key columns */
  testX?: Maybe<TestX>;
  /** fetch data from the table in a streaming manner: "test_x" */
  testX_stream: Array<TestX>;
  /** fetch data from the table: "test_x" */
  testXes: Array<TestX>;
  /** fetch aggregated fields from the table: "test_x" */
  testXesAggregate: TestX_Aggregate;
  /** fetch data from the table: "test_view" */
  test_view: Array<Test_View>;
  /** fetch aggregated fields from the table: "test_view" */
  test_view_aggregate: Test_View_Aggregate;
  /** fetch data from the table in a streaming manner: "test_view" */
  test_view_stream: Array<Test_View>;
  /** fetch data from the table: "topology.layer" */
  topology_layer: Array<Topology_Layer>;
  /** fetch aggregated fields from the table: "topology.layer" */
  topology_layer_aggregate: Topology_Layer_Aggregate;
  /** fetch data from the table: "topology.layer" using primary key columns */
  topology_layer_by_pk?: Maybe<Topology_Layer>;
  /** fetch data from the table in a streaming manner: "topology.layer" */
  topology_layer_stream: Array<Topology_Layer>;
  /** fetch data from the table: "topology.topology" */
  topology_topology: Array<Topology_Topology>;
  /** fetch aggregated fields from the table: "topology.topology" */
  topology_topology_aggregate: Topology_Topology_Aggregate;
  /** fetch data from the table: "topology.topology" using primary key columns */
  topology_topology_by_pk?: Maybe<Topology_Topology>;
  /** fetch data from the table in a streaming manner: "topology.topology" */
  topology_topology_stream: Array<Topology_Topology>;
  /** fetch data from the table: "types_test" */
  types_test: Array<Types_Test>;
  /** fetch aggregated fields from the table: "types_test" */
  types_test_aggregate: Types_Test_Aggregate;
  /** fetch data from the table: "types_test" using primary key columns */
  types_test_by_pk?: Maybe<Types_Test>;
  /** fetch data from the table in a streaming manner: "types_test" */
  types_test_stream: Array<Types_Test>;
  /** fetch data from the table: "workplace" */
  workplace: Array<Workplace>;
  /** fetch aggregated fields from the table: "workplace" */
  workplace_aggregate: Workplace_Aggregate;
  /** fetch data from the table: "workplace" using primary key columns */
  workplace_by_pk?: Maybe<Workplace>;
  /** fetch data from the table: "workplace_item" */
  workplace_item: Array<Workplace_Item>;
  /** fetch aggregated fields from the table: "workplace_item" */
  workplace_item_aggregate: Workplace_Item_Aggregate;
  /** fetch data from the table: "workplace_item" using primary key columns */
  workplace_item_by_pk?: Maybe<Workplace_Item>;
  /** fetch data from the table in a streaming manner: "workplace_item" */
  workplace_item_stream: Array<Workplace_Item>;
  /** fetch data from the table in a streaming manner: "workplace" */
  workplace_stream: Array<Workplace>;
};


export type Subscription_RootTest01_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test01_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test01_Order_By>>;
  where?: InputMaybe<Test01_Bool_Exp>;
};


export type Subscription_RootTest01_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Test01_Stream_Cursor_Input>>;
  where?: InputMaybe<Test01_Bool_Exp>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Subscription_RootAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Subscription_RootAnswers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAnswers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Answers_Stream_Cursor_Input>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Subscription_RootAttributesArgs = {
  distinct_on?: InputMaybe<Array<Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attributes_Order_By>>;
  where?: InputMaybe<Attributes_Bool_Exp>;
};


export type Subscription_RootAttributes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Attributes_Order_By>>;
  where?: InputMaybe<Attributes_Bool_Exp>;
};


export type Subscription_RootAttributes_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Subscription_RootAttributes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Attributes_Stream_Cursor_Input>>;
  where?: InputMaybe<Attributes_Bool_Exp>;
};


export type Subscription_RootBatch543Args = {
  distinct_on?: InputMaybe<Array<Batch543_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Batch543_Order_By>>;
  where?: InputMaybe<Batch543_Bool_Exp>;
};


export type Subscription_RootBatch543_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Batch543_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Batch543_Order_By>>;
  where?: InputMaybe<Batch543_Bool_Exp>;
};


export type Subscription_RootBatch543_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBatch543_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Batch543_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Batch543_Items_Order_By>>;
  where?: InputMaybe<Batch543_Items_Bool_Exp>;
};


export type Subscription_RootBatch543_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Batch543_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Batch543_Items_Order_By>>;
  where?: InputMaybe<Batch543_Items_Bool_Exp>;
};


export type Subscription_RootBatch543_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBatch543_Items_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Batch543_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Batch543_Items_Bool_Exp>;
};


export type Subscription_RootBatch543_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Batch543_Stream_Cursor_Input>>;
  where?: InputMaybe<Batch543_Bool_Exp>;
};


export type Subscription_RootBusStopArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBusStopDepartureArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBusStopDepartureAggregateArgs = {
  distinct_on?: InputMaybe<Array<BusStopDepartures_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BusStopDepartures_Order_By>>;
  where?: InputMaybe<BusStopDepartures_Bool_Exp>;
};


export type Subscription_RootBusStopDeparturesArgs = {
  distinct_on?: InputMaybe<Array<BusStopDepartures_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BusStopDepartures_Order_By>>;
  where?: InputMaybe<BusStopDepartures_Bool_Exp>;
};


export type Subscription_RootBusStopDeparturesStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<BusStopDepartures_Stream_Cursor_Input>>;
  where?: InputMaybe<BusStopDepartures_Bool_Exp>;
};


export type Subscription_RootBusStopsArgs = {
  distinct_on?: InputMaybe<Array<BusStops_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BusStops_Order_By>>;
  where?: InputMaybe<BusStops_Bool_Exp>;
};


export type Subscription_RootBusStopsAggregateArgs = {
  distinct_on?: InputMaybe<Array<BusStops_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BusStops_Order_By>>;
  where?: InputMaybe<BusStops_Bool_Exp>;
};


export type Subscription_RootBusStops_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<BusStops_Stream_Cursor_Input>>;
  where?: InputMaybe<BusStops_Bool_Exp>;
};


export type Subscription_RootCiArgs = {
  distinct_on?: InputMaybe<Array<Ci_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ci_Order_By>>;
  where?: InputMaybe<Ci_Bool_Exp>;
};


export type Subscription_RootCiWithRelsArgs = {
  distinct_on?: InputMaybe<Array<CiWithRels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CiWithRels_Order_By>>;
  where?: InputMaybe<CiWithRels_Bool_Exp>;
};


export type Subscription_RootCiWithRels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CiWithRels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CiWithRels_Order_By>>;
  where?: InputMaybe<CiWithRels_Bool_Exp>;
};


export type Subscription_RootCiWithRels_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Subscription_RootCiWithRels_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<CiWithRels_Stream_Cursor_Input>>;
  where?: InputMaybe<CiWithRels_Bool_Exp>;
};


export type Subscription_RootCi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ci_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ci_Order_By>>;
  where?: InputMaybe<Ci_Bool_Exp>;
};


export type Subscription_RootCi_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCi_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Ci_Stream_Cursor_Input>>;
  where?: InputMaybe<Ci_Bool_Exp>;
};


export type Subscription_RootCmdbArgs = {
  distinct_on?: InputMaybe<Array<Cmdb_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cmdb_Order_By>>;
  where?: InputMaybe<Cmdb_Bool_Exp>;
};


export type Subscription_RootCmdbRelationArgs = {
  uuid: Scalars['uuid'];
};


export type Subscription_RootCmdbRelationsArgs = {
  distinct_on?: InputMaybe<Array<CmdbRelations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CmdbRelations_Order_By>>;
  where?: InputMaybe<CmdbRelations_Bool_Exp>;
};


export type Subscription_RootCmdbRelationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CmdbRelations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CmdbRelations_Order_By>>;
  where?: InputMaybe<CmdbRelations_Bool_Exp>;
};


export type Subscription_RootCmdbRelationsNeighbourscountArgs = {
  fk: Scalars['uuid'];
};


export type Subscription_RootCmdbRelationsNeighbourscountsArgs = {
  distinct_on?: InputMaybe<Array<CmdbRelationsNeighbourscounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CmdbRelationsNeighbourscounts_Order_By>>;
  where?: InputMaybe<CmdbRelationsNeighbourscounts_Bool_Exp>;
};


export type Subscription_RootCmdbRelationsNeighbourscounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CmdbRelationsNeighbourscounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CmdbRelationsNeighbourscounts_Order_By>>;
  where?: InputMaybe<CmdbRelationsNeighbourscounts_Bool_Exp>;
};


export type Subscription_RootCmdbRelationsNeighbourscounts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<CmdbRelationsNeighbourscounts_Stream_Cursor_Input>>;
  where?: InputMaybe<CmdbRelationsNeighbourscounts_Bool_Exp>;
};


export type Subscription_RootCmdbRelationsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<CmdbRelations_Stream_Cursor_Input>>;
  where?: InputMaybe<CmdbRelations_Bool_Exp>;
};


export type Subscription_RootCmdb_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cmdb_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cmdb_Order_By>>;
  where?: InputMaybe<Cmdb_Bool_Exp>;
};


export type Subscription_RootCmdb_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Subscription_RootCmdb_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Cmdb_Stream_Cursor_Input>>;
  where?: InputMaybe<Cmdb_Bool_Exp>;
};


export type Subscription_RootConfigurationItemsArgs = {
  distinct_on?: InputMaybe<Array<ConfigurationItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConfigurationItems_Order_By>>;
  where?: InputMaybe<ConfigurationItems_Bool_Exp>;
};


export type Subscription_RootConfigurationItems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ConfigurationItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ConfigurationItems_Order_By>>;
  where?: InputMaybe<ConfigurationItems_Bool_Exp>;
};


export type Subscription_RootConfigurationItems_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Subscription_RootConfigurationItems_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ConfigurationItems_Stream_Cursor_Input>>;
  where?: InputMaybe<ConfigurationItems_Bool_Exp>;
};


export type Subscription_RootContractArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Subscription_RootContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Subscription_RootContracts_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Contracts_Stream_Cursor_Input>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Subscription_RootCustomerArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCustomer_TypesArgs = {
  distinct_on?: InputMaybe<Array<Customer_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Types_Order_By>>;
  where?: InputMaybe<Customer_Types_Bool_Exp>;
};


export type Subscription_RootCustomer_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customer_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customer_Types_Order_By>>;
  where?: InputMaybe<Customer_Types_Bool_Exp>;
};


export type Subscription_RootCustomer_Types_By_PkArgs = {
  type: Scalars['String'];
};


export type Subscription_RootCustomer_Types_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Customer_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Customer_Types_Bool_Exp>;
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Customers_Stream_Cursor_Input>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootDepartmentsArgs = {
  distinct_on?: InputMaybe<Array<Departments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Departments_Order_By>>;
  where?: InputMaybe<Departments_Bool_Exp>;
};


export type Subscription_RootDepartments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Departments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Departments_Order_By>>;
  where?: InputMaybe<Departments_Bool_Exp>;
};


export type Subscription_RootDepartments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDepartments_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Departments_Stream_Cursor_Input>>;
  where?: InputMaybe<Departments_Bool_Exp>;
};


export type Subscription_RootDeshArgs = {
  distinct_on?: InputMaybe<Array<Desh_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Order_By>>;
  where?: InputMaybe<Desh_Bool_Exp>;
};


export type Subscription_RootDesh_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Desh_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Order_By>>;
  where?: InputMaybe<Desh_Bool_Exp>;
};


export type Subscription_RootDesh_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDesh_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Desh_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Products_Order_By>>;
  where?: InputMaybe<Desh_Products_Bool_Exp>;
};


export type Subscription_RootDesh_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Desh_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Products_Order_By>>;
  where?: InputMaybe<Desh_Products_Bool_Exp>;
};


export type Subscription_RootDesh_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDesh_Products_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Desh_Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Desh_Products_Bool_Exp>;
};


export type Subscription_RootDesh_SalesArgs = {
  distinct_on?: InputMaybe<Array<Desh_Sales_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Sales_Order_By>>;
  where?: InputMaybe<Desh_Sales_Bool_Exp>;
};


export type Subscription_RootDesh_Sales_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Desh_Sales_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Sales_Order_By>>;
  where?: InputMaybe<Desh_Sales_Bool_Exp>;
};


export type Subscription_RootDesh_Sales_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDesh_Sales_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Desh_Sales_Stream_Cursor_Input>>;
  where?: InputMaybe<Desh_Sales_Bool_Exp>;
};


export type Subscription_RootDesh_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Desh_Stream_Cursor_Input>>;
  where?: InputMaybe<Desh_Bool_Exp>;
};


export type Subscription_RootDesh_TrafficArgs = {
  distinct_on?: InputMaybe<Array<Desh_Traffic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Traffic_Order_By>>;
  where?: InputMaybe<Desh_Traffic_Bool_Exp>;
};


export type Subscription_RootDesh_Traffic_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Desh_Traffic_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Desh_Traffic_Order_By>>;
  where?: InputMaybe<Desh_Traffic_Bool_Exp>;
};


export type Subscription_RootDesh_Traffic_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDesh_Traffic_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Desh_Traffic_Stream_Cursor_Input>>;
  where?: InputMaybe<Desh_Traffic_Bool_Exp>;
};


export type Subscription_RootEnum_Test_TypesArgs = {
  distinct_on?: InputMaybe<Array<Enum_Test_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Test_Types_Order_By>>;
  where?: InputMaybe<Enum_Test_Types_Bool_Exp>;
};


export type Subscription_RootEnum_Test_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Enum_Test_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Enum_Test_Types_Order_By>>;
  where?: InputMaybe<Enum_Test_Types_Bool_Exp>;
};


export type Subscription_RootEnum_Test_Types_By_PkArgs = {
  int_enum: Scalars['String'];
};


export type Subscription_RootEnum_Test_Types_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Enum_Test_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Enum_Test_Types_Bool_Exp>;
};


export type Subscription_RootEventArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEventsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootFrom_NodesArgs = {
  distinct_on?: InputMaybe<Array<From_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<From_Nodes_Order_By>>;
  where?: InputMaybe<From_Nodes_Bool_Exp>;
};


export type Subscription_RootFrom_Nodes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<From_Nodes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<From_Nodes_Order_By>>;
  where?: InputMaybe<From_Nodes_Bool_Exp>;
};


export type Subscription_RootFrom_Nodes_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Subscription_RootFrom_Nodes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<From_Nodes_Stream_Cursor_Input>>;
  where?: InputMaybe<From_Nodes_Bool_Exp>;
};


export type Subscription_RootHallArgs = {
  distinct_on?: InputMaybe<Array<Hall_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hall_Order_By>>;
  where?: InputMaybe<Hall_Bool_Exp>;
};


export type Subscription_RootHall_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hall_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hall_Order_By>>;
  where?: InputMaybe<Hall_Bool_Exp>;
};


export type Subscription_RootHall_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootHall_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Hall_Stream_Cursor_Input>>;
  where?: InputMaybe<Hall_Bool_Exp>;
};


export type Subscription_RootMapPointArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMapPointsArgs = {
  distinct_on?: InputMaybe<Array<MapPoints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MapPoints_Order_By>>;
  where?: InputMaybe<MapPoints_Bool_Exp>;
};


export type Subscription_RootMapPointsAggregateArgs = {
  distinct_on?: InputMaybe<Array<MapPoints_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<MapPoints_Order_By>>;
  where?: InputMaybe<MapPoints_Bool_Exp>;
};


export type Subscription_RootMapPoints_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<MapPoints_Stream_Cursor_Input>>;
  where?: InputMaybe<MapPoints_Bool_Exp>;
};


export type Subscription_RootNeighbourPairsArgs = {
  distinct_on?: InputMaybe<Array<NeighbourPairs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NeighbourPairs_Order_By>>;
  where?: InputMaybe<NeighbourPairs_Bool_Exp>;
};


export type Subscription_RootNeighbourPairs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<NeighbourPairs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NeighbourPairs_Order_By>>;
  where?: InputMaybe<NeighbourPairs_Bool_Exp>;
};


export type Subscription_RootNeighbourPairs_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Subscription_RootNeighbourPairs_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<NeighbourPairs_Stream_Cursor_Input>>;
  where?: InputMaybe<NeighbourPairs_Bool_Exp>;
};


export type Subscription_RootOfferArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOffer_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Offer_Stream_Cursor_Input>>;
  where?: InputMaybe<Offer_Bool_Exp>;
};


export type Subscription_RootOffersArgs = {
  distinct_on?: InputMaybe<Array<Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offer_Order_By>>;
  where?: InputMaybe<Offer_Bool_Exp>;
};


export type Subscription_RootOffersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Offer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offer_Order_By>>;
  where?: InputMaybe<Offer_Bool_Exp>;
};


export type Subscription_RootOrderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrderItemsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Subscription_RootOrderItemsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Order_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Subscription_RootOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Subscription_RootOrder_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrdersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrdersStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrganizationArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrganization_Partnership_LevelsArgs = {
  distinct_on?: InputMaybe<Array<Organization_Partnership_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Partnership_Levels_Order_By>>;
  where?: InputMaybe<Organization_Partnership_Levels_Bool_Exp>;
};


export type Subscription_RootOrganization_Partnership_Levels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Partnership_Levels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Partnership_Levels_Order_By>>;
  where?: InputMaybe<Organization_Partnership_Levels_Bool_Exp>;
};


export type Subscription_RootOrganization_Partnership_Levels_By_PkArgs = {
  level: Scalars['String'];
};


export type Subscription_RootOrganization_Partnership_Levels_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Organization_Partnership_Levels_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Partnership_Levels_Bool_Exp>;
};


export type Subscription_RootOrganization_TypesArgs = {
  distinct_on?: InputMaybe<Array<Organization_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Types_Order_By>>;
  where?: InputMaybe<Organization_Types_Bool_Exp>;
};


export type Subscription_RootOrganization_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organization_Types_Order_By>>;
  where?: InputMaybe<Organization_Types_Bool_Exp>;
};


export type Subscription_RootOrganization_Types_By_PkArgs = {
  type: Scalars['String'];
};


export type Subscription_RootOrganization_Types_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Organization_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Types_Bool_Exp>;
};


export type Subscription_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizationsNisArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsNis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrganizationsNis_Order_By>>;
  where?: InputMaybe<OrganizationsNis_Bool_Exp>;
};


export type Subscription_RootOrganizationsNis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsNis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrganizationsNis_Order_By>>;
  where?: InputMaybe<OrganizationsNis_Bool_Exp>;
};


export type Subscription_RootOrganizationsNis_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrganizationsNis_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<OrganizationsNis_Stream_Cursor_Input>>;
  where?: InputMaybe<OrganizationsNis_Bool_Exp>;
};


export type Subscription_RootOrganizationsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Organizations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootPracticionerArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPracticionersArgs = {
  distinct_on?: InputMaybe<Array<Practicioners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Practicioners_Order_By>>;
  where?: InputMaybe<Practicioners_Bool_Exp>;
};


export type Subscription_RootPracticioners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Practicioners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Practicioners_Order_By>>;
  where?: InputMaybe<Practicioners_Bool_Exp>;
};


export type Subscription_RootPracticioners_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Practicioners_Stream_Cursor_Input>>;
  where?: InputMaybe<Practicioners_Bool_Exp>;
};


export type Subscription_RootProductArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProduct_AvailabilityArgs = {
  distinct_on?: InputMaybe<Array<Product_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Availability_Order_By>>;
  where?: InputMaybe<Product_Availability_Bool_Exp>;
};


export type Subscription_RootProduct_Availability_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Availability_Order_By>>;
  where?: InputMaybe<Product_Availability_Bool_Exp>;
};


export type Subscription_RootProduct_Availability_By_PkArgs = {
  type: Scalars['String'];
};


export type Subscription_RootProduct_Availability_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Product_Availability_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Availability_Bool_Exp>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProductsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProductsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootQueryTest01Args = {
  distinct_on?: InputMaybe<Array<Test01_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test01_Order_By>>;
  where?: InputMaybe<Test01_Bool_Exp>;
};


export type Subscription_RootQuestionArgs = {
  distinct_on?: InputMaybe<Array<Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Subscription_RootQuestion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Subscription_RootQuestion_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootQuestion_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Question_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Category_Order_By>>;
  where?: InputMaybe<Question_Category_Bool_Exp>;
};


export type Subscription_RootQuestion_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Question_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Question_Category_Order_By>>;
  where?: InputMaybe<Question_Category_Bool_Exp>;
};


export type Subscription_RootQuestion_Category_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootQuestion_Category_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Question_Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Question_Category_Bool_Exp>;
};


export type Subscription_RootQuestion_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Question_Stream_Cursor_Input>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Subscription_RootSiteArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Subscription_RootSite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Site_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Site_Order_By>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Subscription_RootSite_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSite_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Site_Stream_Cursor_Input>>;
  where?: InputMaybe<Site_Bool_Exp>;
};


export type Subscription_RootStatus_TypesArgs = {
  distinct_on?: InputMaybe<Array<Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Types_Order_By>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Subscription_RootStatus_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Status_Types_Order_By>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Subscription_RootStatus_Types_By_PkArgs = {
  status: Scalars['String'];
};


export type Subscription_RootStatus_Types_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Status_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Subscription_RootSurveyArgs = {
  distinct_on?: InputMaybe<Array<Survey_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Order_By>>;
  where?: InputMaybe<Survey_Bool_Exp>;
};


export type Subscription_RootSurvey_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Survey_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Order_By>>;
  where?: InputMaybe<Survey_Bool_Exp>;
};


export type Subscription_RootSurvey_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSurvey_PhotosArgs = {
  distinct_on?: InputMaybe<Array<Survey_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Photos_Order_By>>;
  where?: InputMaybe<Survey_Photos_Bool_Exp>;
};


export type Subscription_RootSurvey_Photos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Survey_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Photos_Order_By>>;
  where?: InputMaybe<Survey_Photos_Bool_Exp>;
};


export type Subscription_RootSurvey_Photos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSurvey_Photos_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Survey_Photos_Stream_Cursor_Input>>;
  where?: InputMaybe<Survey_Photos_Bool_Exp>;
};


export type Subscription_RootSurvey_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Survey_Stream_Cursor_Input>>;
  where?: InputMaybe<Survey_Bool_Exp>;
};


export type Subscription_RootTest01ByIdArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTestJednotneCisloArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTestJednotneCislosArgs = {
  distinct_on?: InputMaybe<Array<TestJednotneCislo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestJednotneCislo_Order_By>>;
  where?: InputMaybe<TestJednotneCislo_Bool_Exp>;
};


export type Subscription_RootTestJednotneCislosAggregateArgs = {
  distinct_on?: InputMaybe<Array<TestJednotneCislo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestJednotneCislo_Order_By>>;
  where?: InputMaybe<TestJednotneCislo_Bool_Exp>;
};


export type Subscription_RootTestJednotneCislosStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TestJednotneCislo_Stream_Cursor_Input>>;
  where?: InputMaybe<TestJednotneCislo_Bool_Exp>;
};


export type Subscription_RootTestXArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTestX_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<TestX_Stream_Cursor_Input>>;
  where?: InputMaybe<TestX_Bool_Exp>;
};


export type Subscription_RootTestXesArgs = {
  distinct_on?: InputMaybe<Array<TestX_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestX_Order_By>>;
  where?: InputMaybe<TestX_Bool_Exp>;
};


export type Subscription_RootTestXesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TestX_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestX_Order_By>>;
  where?: InputMaybe<TestX_Bool_Exp>;
};


export type Subscription_RootTest_ViewArgs = {
  distinct_on?: InputMaybe<Array<Test_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_View_Order_By>>;
  where?: InputMaybe<Test_View_Bool_Exp>;
};


export type Subscription_RootTest_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_View_Order_By>>;
  where?: InputMaybe<Test_View_Bool_Exp>;
};


export type Subscription_RootTest_View_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Test_View_Stream_Cursor_Input>>;
  where?: InputMaybe<Test_View_Bool_Exp>;
};


export type Subscription_RootTopology_LayerArgs = {
  distinct_on?: InputMaybe<Array<Topology_Layer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topology_Layer_Order_By>>;
  where?: InputMaybe<Topology_Layer_Bool_Exp>;
};


export type Subscription_RootTopology_Layer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topology_Layer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topology_Layer_Order_By>>;
  where?: InputMaybe<Topology_Layer_Bool_Exp>;
};


export type Subscription_RootTopology_Layer_By_PkArgs = {
  layer_id: Scalars['Int'];
  topology_id: Scalars['Int'];
};


export type Subscription_RootTopology_Layer_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Topology_Layer_Stream_Cursor_Input>>;
  where?: InputMaybe<Topology_Layer_Bool_Exp>;
};


export type Subscription_RootTopology_TopologyArgs = {
  distinct_on?: InputMaybe<Array<Topology_Topology_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topology_Topology_Order_By>>;
  where?: InputMaybe<Topology_Topology_Bool_Exp>;
};


export type Subscription_RootTopology_Topology_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Topology_Topology_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Topology_Topology_Order_By>>;
  where?: InputMaybe<Topology_Topology_Bool_Exp>;
};


export type Subscription_RootTopology_Topology_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTopology_Topology_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Topology_Topology_Stream_Cursor_Input>>;
  where?: InputMaybe<Topology_Topology_Bool_Exp>;
};


export type Subscription_RootTypes_TestArgs = {
  distinct_on?: InputMaybe<Array<Types_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Types_Test_Order_By>>;
  where?: InputMaybe<Types_Test_Bool_Exp>;
};


export type Subscription_RootTypes_Test_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Types_Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Types_Test_Order_By>>;
  where?: InputMaybe<Types_Test_Bool_Exp>;
};


export type Subscription_RootTypes_Test_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTypes_Test_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Types_Test_Stream_Cursor_Input>>;
  where?: InputMaybe<Types_Test_Bool_Exp>;
};


export type Subscription_RootWorkplaceArgs = {
  distinct_on?: InputMaybe<Array<Workplace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workplace_Order_By>>;
  where?: InputMaybe<Workplace_Bool_Exp>;
};


export type Subscription_RootWorkplace_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workplace_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workplace_Order_By>>;
  where?: InputMaybe<Workplace_Bool_Exp>;
};


export type Subscription_RootWorkplace_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWorkplace_ItemArgs = {
  distinct_on?: InputMaybe<Array<Workplace_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workplace_Item_Order_By>>;
  where?: InputMaybe<Workplace_Item_Bool_Exp>;
};


export type Subscription_RootWorkplace_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workplace_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workplace_Item_Order_By>>;
  where?: InputMaybe<Workplace_Item_Bool_Exp>;
};


export type Subscription_RootWorkplace_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWorkplace_Item_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Workplace_Item_Stream_Cursor_Input>>;
  where?: InputMaybe<Workplace_Item_Bool_Exp>;
};


export type Subscription_RootWorkplace_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Workplace_Stream_Cursor_Input>>;
  where?: InputMaybe<Workplace_Bool_Exp>;
};

/** columns and relationships of "survey" */
export type Survey = {
  __typename?: 'survey';
  /** An array relationship */
  answers: Array<Answers>;
  /** An aggregate relationship */
  answers_aggregate: Answers_Aggregate;
  execution_date: Scalars['date'];
  fk_workplace: Scalars['uuid'];
  id: Scalars['uuid'];
  note?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  participants?: Maybe<Scalars['String']>;
  /** An array relationship */
  survey_photos: Array<Survey_Photos>;
  /** An aggregate relationship */
  survey_photos_aggregate: Survey_Photos_Aggregate;
  /** An object relationship */
  workplace: Workplace;
};


/** columns and relationships of "survey" */
export type SurveyAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


/** columns and relationships of "survey" */
export type SurveyAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


/** columns and relationships of "survey" */
export type SurveySurvey_PhotosArgs = {
  distinct_on?: InputMaybe<Array<Survey_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Photos_Order_By>>;
  where?: InputMaybe<Survey_Photos_Bool_Exp>;
};


/** columns and relationships of "survey" */
export type SurveySurvey_Photos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Survey_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Photos_Order_By>>;
  where?: InputMaybe<Survey_Photos_Bool_Exp>;
};

/** aggregated selection of "survey" */
export type Survey_Aggregate = {
  __typename?: 'survey_aggregate';
  aggregate?: Maybe<Survey_Aggregate_Fields>;
  nodes: Array<Survey>;
};

export type Survey_Aggregate_Bool_Exp = {
  count?: InputMaybe<Survey_Aggregate_Bool_Exp_Count>;
};

export type Survey_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Survey_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Survey_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "survey" */
export type Survey_Aggregate_Fields = {
  __typename?: 'survey_aggregate_fields';
  avg?: Maybe<Survey_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Survey_Max_Fields>;
  min?: Maybe<Survey_Min_Fields>;
  stddev?: Maybe<Survey_Stddev_Fields>;
  stddev_pop?: Maybe<Survey_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Survey_Stddev_Samp_Fields>;
  sum?: Maybe<Survey_Sum_Fields>;
  var_pop?: Maybe<Survey_Var_Pop_Fields>;
  var_samp?: Maybe<Survey_Var_Samp_Fields>;
  variance?: Maybe<Survey_Variance_Fields>;
};


/** aggregate fields of "survey" */
export type Survey_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Survey_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "survey" */
export type Survey_Aggregate_Order_By = {
  avg?: InputMaybe<Survey_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Survey_Max_Order_By>;
  min?: InputMaybe<Survey_Min_Order_By>;
  stddev?: InputMaybe<Survey_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Survey_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Survey_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Survey_Sum_Order_By>;
  var_pop?: InputMaybe<Survey_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Survey_Var_Samp_Order_By>;
  variance?: InputMaybe<Survey_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "survey" */
export type Survey_Arr_Rel_Insert_Input = {
  data: Array<Survey_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Survey_On_Conflict>;
};

/** aggregate avg on columns */
export type Survey_Avg_Fields = {
  __typename?: 'survey_avg_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "survey" */
export type Survey_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "survey". All fields are combined with a logical 'AND'. */
export type Survey_Bool_Exp = {
  _and?: InputMaybe<Array<Survey_Bool_Exp>>;
  _not?: InputMaybe<Survey_Bool_Exp>;
  _or?: InputMaybe<Array<Survey_Bool_Exp>>;
  answers?: InputMaybe<Answers_Bool_Exp>;
  answers_aggregate?: InputMaybe<Answers_Aggregate_Bool_Exp>;
  execution_date?: InputMaybe<Date_Comparison_Exp>;
  fk_workplace?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  participants?: InputMaybe<String_Comparison_Exp>;
  survey_photos?: InputMaybe<Survey_Photos_Bool_Exp>;
  survey_photos_aggregate?: InputMaybe<Survey_Photos_Aggregate_Bool_Exp>;
  workplace?: InputMaybe<Workplace_Bool_Exp>;
};

/** unique or primary key constraints on table "survey" */
export enum Survey_Constraint {
  /** unique or primary key constraint on columns "id" */
  SurveyPkey = 'survey_pkey'
}

/** input type for incrementing numeric columns in table "survey" */
export type Survey_Inc_Input = {
  order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "survey" */
export type Survey_Insert_Input = {
  answers?: InputMaybe<Answers_Arr_Rel_Insert_Input>;
  execution_date?: InputMaybe<Scalars['date']>;
  fk_workplace?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  participants?: InputMaybe<Scalars['String']>;
  survey_photos?: InputMaybe<Survey_Photos_Arr_Rel_Insert_Input>;
  workplace?: InputMaybe<Workplace_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Survey_Max_Fields = {
  __typename?: 'survey_max_fields';
  execution_date?: Maybe<Scalars['date']>;
  fk_workplace?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  participants?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "survey" */
export type Survey_Max_Order_By = {
  execution_date?: InputMaybe<Order_By>;
  fk_workplace?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  participants?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Survey_Min_Fields = {
  __typename?: 'survey_min_fields';
  execution_date?: Maybe<Scalars['date']>;
  fk_workplace?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  note?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  participants?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "survey" */
export type Survey_Min_Order_By = {
  execution_date?: InputMaybe<Order_By>;
  fk_workplace?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  participants?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "survey" */
export type Survey_Mutation_Response = {
  __typename?: 'survey_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Survey>;
};

/** input type for inserting object relation for remote table "survey" */
export type Survey_Obj_Rel_Insert_Input = {
  data: Survey_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Survey_On_Conflict>;
};

/** on_conflict condition type for table "survey" */
export type Survey_On_Conflict = {
  constraint: Survey_Constraint;
  update_columns?: Array<Survey_Update_Column>;
  where?: InputMaybe<Survey_Bool_Exp>;
};

/** Ordering options when selecting data from "survey". */
export type Survey_Order_By = {
  answers_aggregate?: InputMaybe<Answers_Aggregate_Order_By>;
  execution_date?: InputMaybe<Order_By>;
  fk_workplace?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  participants?: InputMaybe<Order_By>;
  survey_photos_aggregate?: InputMaybe<Survey_Photos_Aggregate_Order_By>;
  workplace?: InputMaybe<Workplace_Order_By>;
};

/** columns and relationships of "survey_photos" */
export type Survey_Photos = {
  __typename?: 'survey_photos';
  fk_survey: Scalars['uuid'];
  fk_workplace_item: Scalars['uuid'];
  id: Scalars['uuid'];
  photo1?: Maybe<Scalars['String']>;
  photo1url?: Maybe<GetUrlReturn>;
  photo2?: Maybe<Scalars['String']>;
  photo2url?: Maybe<GetUrlReturn>;
  photo3?: Maybe<Scalars['String']>;
  photo3url?: Maybe<GetUrlReturn>;
  /** An object relationship */
  survey: Survey;
  /** An object relationship */
  workplace_item: Workplace_Item;
};

/** aggregated selection of "survey_photos" */
export type Survey_Photos_Aggregate = {
  __typename?: 'survey_photos_aggregate';
  aggregate?: Maybe<Survey_Photos_Aggregate_Fields>;
  nodes: Array<Survey_Photos>;
};

export type Survey_Photos_Aggregate_Bool_Exp = {
  count?: InputMaybe<Survey_Photos_Aggregate_Bool_Exp_Count>;
};

export type Survey_Photos_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Survey_Photos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Survey_Photos_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "survey_photos" */
export type Survey_Photos_Aggregate_Fields = {
  __typename?: 'survey_photos_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Survey_Photos_Max_Fields>;
  min?: Maybe<Survey_Photos_Min_Fields>;
};


/** aggregate fields of "survey_photos" */
export type Survey_Photos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Survey_Photos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "survey_photos" */
export type Survey_Photos_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Survey_Photos_Max_Order_By>;
  min?: InputMaybe<Survey_Photos_Min_Order_By>;
};

/** input type for inserting array relation for remote table "survey_photos" */
export type Survey_Photos_Arr_Rel_Insert_Input = {
  data: Array<Survey_Photos_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Survey_Photos_On_Conflict>;
};

/** Boolean expression to filter rows from the table "survey_photos". All fields are combined with a logical 'AND'. */
export type Survey_Photos_Bool_Exp = {
  _and?: InputMaybe<Array<Survey_Photos_Bool_Exp>>;
  _not?: InputMaybe<Survey_Photos_Bool_Exp>;
  _or?: InputMaybe<Array<Survey_Photos_Bool_Exp>>;
  fk_survey?: InputMaybe<Uuid_Comparison_Exp>;
  fk_workplace_item?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  photo1?: InputMaybe<String_Comparison_Exp>;
  photo2?: InputMaybe<String_Comparison_Exp>;
  photo3?: InputMaybe<String_Comparison_Exp>;
  survey?: InputMaybe<Survey_Bool_Exp>;
  workplace_item?: InputMaybe<Workplace_Item_Bool_Exp>;
};

/** unique or primary key constraints on table "survey_photos" */
export enum Survey_Photos_Constraint {
  /** unique or primary key constraint on columns "id" */
  SurveyPhotosIdKey = 'survey_photos_id_key',
  /** unique or primary key constraint on columns "id" */
  SurveyPhotosPkey = 'survey_photos_pkey'
}

/** input type for inserting data into table "survey_photos" */
export type Survey_Photos_Insert_Input = {
  fk_survey?: InputMaybe<Scalars['uuid']>;
  fk_workplace_item?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  photo1?: InputMaybe<Scalars['String']>;
  photo2?: InputMaybe<Scalars['String']>;
  photo3?: InputMaybe<Scalars['String']>;
  survey?: InputMaybe<Survey_Obj_Rel_Insert_Input>;
  workplace_item?: InputMaybe<Workplace_Item_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Survey_Photos_Max_Fields = {
  __typename?: 'survey_photos_max_fields';
  fk_survey?: Maybe<Scalars['uuid']>;
  fk_workplace_item?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  photo1?: Maybe<Scalars['String']>;
  photo2?: Maybe<Scalars['String']>;
  photo3?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "survey_photos" */
export type Survey_Photos_Max_Order_By = {
  fk_survey?: InputMaybe<Order_By>;
  fk_workplace_item?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  photo1?: InputMaybe<Order_By>;
  photo2?: InputMaybe<Order_By>;
  photo3?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Survey_Photos_Min_Fields = {
  __typename?: 'survey_photos_min_fields';
  fk_survey?: Maybe<Scalars['uuid']>;
  fk_workplace_item?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  photo1?: Maybe<Scalars['String']>;
  photo2?: Maybe<Scalars['String']>;
  photo3?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "survey_photos" */
export type Survey_Photos_Min_Order_By = {
  fk_survey?: InputMaybe<Order_By>;
  fk_workplace_item?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  photo1?: InputMaybe<Order_By>;
  photo2?: InputMaybe<Order_By>;
  photo3?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "survey_photos" */
export type Survey_Photos_Mutation_Response = {
  __typename?: 'survey_photos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Survey_Photos>;
};

/** on_conflict condition type for table "survey_photos" */
export type Survey_Photos_On_Conflict = {
  constraint: Survey_Photos_Constraint;
  update_columns?: Array<Survey_Photos_Update_Column>;
  where?: InputMaybe<Survey_Photos_Bool_Exp>;
};

/** Ordering options when selecting data from "survey_photos". */
export type Survey_Photos_Order_By = {
  fk_survey?: InputMaybe<Order_By>;
  fk_workplace_item?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  photo1?: InputMaybe<Order_By>;
  photo2?: InputMaybe<Order_By>;
  photo3?: InputMaybe<Order_By>;
  survey?: InputMaybe<Survey_Order_By>;
  workplace_item?: InputMaybe<Workplace_Item_Order_By>;
};

/** primary key columns input for table: survey_photos */
export type Survey_Photos_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "survey_photos" */
export enum Survey_Photos_Select_Column {
  /** column name */
  FkSurvey = 'fk_survey',
  /** column name */
  FkWorkplaceItem = 'fk_workplace_item',
  /** column name */
  Id = 'id',
  /** column name */
  Photo1 = 'photo1',
  /** column name */
  Photo2 = 'photo2',
  /** column name */
  Photo3 = 'photo3'
}

/** input type for updating data in table "survey_photos" */
export type Survey_Photos_Set_Input = {
  fk_survey?: InputMaybe<Scalars['uuid']>;
  fk_workplace_item?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  photo1?: InputMaybe<Scalars['String']>;
  photo2?: InputMaybe<Scalars['String']>;
  photo3?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "survey_photos" */
export type Survey_Photos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Survey_Photos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Survey_Photos_Stream_Cursor_Value_Input = {
  fk_survey?: InputMaybe<Scalars['uuid']>;
  fk_workplace_item?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  photo1?: InputMaybe<Scalars['String']>;
  photo2?: InputMaybe<Scalars['String']>;
  photo3?: InputMaybe<Scalars['String']>;
};

/** update columns of table "survey_photos" */
export enum Survey_Photos_Update_Column {
  /** column name */
  FkSurvey = 'fk_survey',
  /** column name */
  FkWorkplaceItem = 'fk_workplace_item',
  /** column name */
  Id = 'id',
  /** column name */
  Photo1 = 'photo1',
  /** column name */
  Photo2 = 'photo2',
  /** column name */
  Photo3 = 'photo3'
}

export type Survey_Photos_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Survey_Photos_Set_Input>;
  /** filter the rows which have to be updated */
  where: Survey_Photos_Bool_Exp;
};

/** primary key columns input for table: survey */
export type Survey_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "survey" */
export enum Survey_Select_Column {
  /** column name */
  ExecutionDate = 'execution_date',
  /** column name */
  FkWorkplace = 'fk_workplace',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  Order = 'order',
  /** column name */
  Participants = 'participants'
}

/** input type for updating data in table "survey" */
export type Survey_Set_Input = {
  execution_date?: InputMaybe<Scalars['date']>;
  fk_workplace?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  participants?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Survey_Stddev_Fields = {
  __typename?: 'survey_stddev_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "survey" */
export type Survey_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Survey_Stddev_Pop_Fields = {
  __typename?: 'survey_stddev_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "survey" */
export type Survey_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Survey_Stddev_Samp_Fields = {
  __typename?: 'survey_stddev_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "survey" */
export type Survey_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "survey" */
export type Survey_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Survey_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Survey_Stream_Cursor_Value_Input = {
  execution_date?: InputMaybe<Scalars['date']>;
  fk_workplace?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  note?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  participants?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Survey_Sum_Fields = {
  __typename?: 'survey_sum_fields';
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "survey" */
export type Survey_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** update columns of table "survey" */
export enum Survey_Update_Column {
  /** column name */
  ExecutionDate = 'execution_date',
  /** column name */
  FkWorkplace = 'fk_workplace',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  Order = 'order',
  /** column name */
  Participants = 'participants'
}

export type Survey_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Survey_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Survey_Set_Input>;
  /** filter the rows which have to be updated */
  where: Survey_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Survey_Var_Pop_Fields = {
  __typename?: 'survey_var_pop_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "survey" */
export type Survey_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Survey_Var_Samp_Fields = {
  __typename?: 'survey_var_samp_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "survey" */
export type Survey_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Survey_Variance_Fields = {
  __typename?: 'survey_variance_fields';
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "survey" */
export type Survey_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** columns and relationships of "test_jednotne_cislo" */
export type TestJednotneCislo = {
  __typename?: 'testJednotneCislo';
  id: Scalars['uuid'];
};

/** aggregated selection of "test_jednotne_cislo" */
export type TestJednotneCislo_Aggregate = {
  __typename?: 'testJednotneCislo_aggregate';
  aggregate?: Maybe<TestJednotneCislo_Aggregate_Fields>;
  nodes: Array<TestJednotneCislo>;
};

/** aggregate fields of "test_jednotne_cislo" */
export type TestJednotneCislo_Aggregate_Fields = {
  __typename?: 'testJednotneCislo_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TestJednotneCislo_Max_Fields>;
  min?: Maybe<TestJednotneCislo_Min_Fields>;
};


/** aggregate fields of "test_jednotne_cislo" */
export type TestJednotneCislo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TestJednotneCislo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test_jednotne_cislo". All fields are combined with a logical 'AND'. */
export type TestJednotneCislo_Bool_Exp = {
  _and?: InputMaybe<Array<TestJednotneCislo_Bool_Exp>>;
  _not?: InputMaybe<TestJednotneCislo_Bool_Exp>;
  _or?: InputMaybe<Array<TestJednotneCislo_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "test_jednotne_cislo" */
export enum TestJednotneCislo_Constraint {
  /** unique or primary key constraint on columns "id" */
  TestJednotneCisloPkey = 'test_jednotne_cislo_pkey'
}

/** input type for inserting data into table "test_jednotne_cislo" */
export type TestJednotneCislo_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TestJednotneCislo_Max_Fields = {
  __typename?: 'testJednotneCislo_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type TestJednotneCislo_Min_Fields = {
  __typename?: 'testJednotneCislo_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "test_jednotne_cislo" */
export type TestJednotneCislo_Mutation_Response = {
  __typename?: 'testJednotneCislo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TestJednotneCislo>;
};

/** on_conflict condition type for table "test_jednotne_cislo" */
export type TestJednotneCislo_On_Conflict = {
  constraint: TestJednotneCislo_Constraint;
  update_columns?: Array<TestJednotneCislo_Update_Column>;
  where?: InputMaybe<TestJednotneCislo_Bool_Exp>;
};

/** Ordering options when selecting data from "test_jednotne_cislo". */
export type TestJednotneCislo_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test_jednotne_cislo */
export type TestJednotneCislo_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test_jednotne_cislo" */
export enum TestJednotneCislo_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "test_jednotne_cislo" */
export type TestJednotneCislo_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "testJednotneCislo" */
export type TestJednotneCislo_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TestJednotneCislo_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TestJednotneCislo_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "test_jednotne_cislo" */
export enum TestJednotneCislo_Update_Column {
  /** column name */
  Id = 'id'
}

export type TestJednotneCislo_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TestJednotneCislo_Set_Input>;
  /** filter the rows which have to be updated */
  where: TestJednotneCislo_Bool_Exp;
};

/** columns and relationships of "test_x" */
export type TestX = {
  __typename?: 'testX';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "test_x" */
export type TestX_Aggregate = {
  __typename?: 'testX_aggregate';
  aggregate?: Maybe<TestX_Aggregate_Fields>;
  nodes: Array<TestX>;
};

/** aggregate fields of "test_x" */
export type TestX_Aggregate_Fields = {
  __typename?: 'testX_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TestX_Max_Fields>;
  min?: Maybe<TestX_Min_Fields>;
};


/** aggregate fields of "test_x" */
export type TestX_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TestX_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test_x". All fields are combined with a logical 'AND'. */
export type TestX_Bool_Exp = {
  _and?: InputMaybe<Array<TestX_Bool_Exp>>;
  _not?: InputMaybe<TestX_Bool_Exp>;
  _or?: InputMaybe<Array<TestX_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test_x" */
export enum TestX_Constraint {
  /** unique or primary key constraint on columns "id" */
  TestXPkey = 'test_x_pkey'
}

/** input type for inserting data into table "test_x" */
export type TestX_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TestX_Max_Fields = {
  __typename?: 'testX_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TestX_Min_Fields = {
  __typename?: 'testX_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test_x" */
export type TestX_Mutation_Response = {
  __typename?: 'testX_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TestX>;
};

/** on_conflict condition type for table "test_x" */
export type TestX_On_Conflict = {
  constraint: TestX_Constraint;
  update_columns?: Array<TestX_Update_Column>;
  where?: InputMaybe<TestX_Bool_Exp>;
};

/** Ordering options when selecting data from "test_x". */
export type TestX_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test_x */
export type TestX_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test_x" */
export enum TestX_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test_x" */
export type TestX_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "testX" */
export type TestX_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: TestX_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type TestX_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test_x" */
export enum TestX_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type TestX_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TestX_Set_Input>;
  /** filter the rows which have to be updated */
  where: TestX_Bool_Exp;
};

/** columns and relationships of "test_view" */
export type Test_View = {
  __typename?: 'test_view';
  name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "test_view" */
export type Test_View_Aggregate = {
  __typename?: 'test_view_aggregate';
  aggregate?: Maybe<Test_View_Aggregate_Fields>;
  nodes: Array<Test_View>;
};

/** aggregate fields of "test_view" */
export type Test_View_Aggregate_Fields = {
  __typename?: 'test_view_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test_View_Max_Fields>;
  min?: Maybe<Test_View_Min_Fields>;
};


/** aggregate fields of "test_view" */
export type Test_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test_view". All fields are combined with a logical 'AND'. */
export type Test_View_Bool_Exp = {
  _and?: InputMaybe<Array<Test_View_Bool_Exp>>;
  _not?: InputMaybe<Test_View_Bool_Exp>;
  _or?: InputMaybe<Array<Test_View_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Test_View_Max_Fields = {
  __typename?: 'test_view_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Test_View_Min_Fields = {
  __typename?: 'test_view_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "test_view". */
export type Test_View_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** select columns of table "test_view" */
export enum Test_View_Select_Column {
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "test_view" */
export type Test_View_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Test_View_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Test_View_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['time']>;
  _gt?: InputMaybe<Scalars['time']>;
  _gte?: InputMaybe<Scalars['time']>;
  _in?: InputMaybe<Array<Scalars['time']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['time']>;
  _lte?: InputMaybe<Scalars['time']>;
  _neq?: InputMaybe<Scalars['time']>;
  _nin?: InputMaybe<Array<Scalars['time']>>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "timetz". All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timetz']>;
  _gt?: InputMaybe<Scalars['timetz']>;
  _gte?: InputMaybe<Scalars['timetz']>;
  _in?: InputMaybe<Array<Scalars['timetz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timetz']>;
  _lte?: InputMaybe<Scalars['timetz']>;
  _neq?: InputMaybe<Scalars['timetz']>;
  _nin?: InputMaybe<Array<Scalars['timetz']>>;
};

/** columns and relationships of "topology.layer" */
export type Topology_Layer = {
  __typename?: 'topology_layer';
  child_id?: Maybe<Scalars['Int']>;
  feature_column: Scalars['String'];
  feature_type: Scalars['Int'];
  layer_id: Scalars['Int'];
  level: Scalars['Int'];
  schema_name: Scalars['String'];
  table_name: Scalars['String'];
  topology_id: Scalars['Int'];
};

/** aggregated selection of "topology.layer" */
export type Topology_Layer_Aggregate = {
  __typename?: 'topology_layer_aggregate';
  aggregate?: Maybe<Topology_Layer_Aggregate_Fields>;
  nodes: Array<Topology_Layer>;
};

/** aggregate fields of "topology.layer" */
export type Topology_Layer_Aggregate_Fields = {
  __typename?: 'topology_layer_aggregate_fields';
  avg?: Maybe<Topology_Layer_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Topology_Layer_Max_Fields>;
  min?: Maybe<Topology_Layer_Min_Fields>;
  stddev?: Maybe<Topology_Layer_Stddev_Fields>;
  stddev_pop?: Maybe<Topology_Layer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Topology_Layer_Stddev_Samp_Fields>;
  sum?: Maybe<Topology_Layer_Sum_Fields>;
  var_pop?: Maybe<Topology_Layer_Var_Pop_Fields>;
  var_samp?: Maybe<Topology_Layer_Var_Samp_Fields>;
  variance?: Maybe<Topology_Layer_Variance_Fields>;
};


/** aggregate fields of "topology.layer" */
export type Topology_Layer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Topology_Layer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Topology_Layer_Avg_Fields = {
  __typename?: 'topology_layer_avg_fields';
  child_id?: Maybe<Scalars['Float']>;
  feature_type?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  topology_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "topology.layer". All fields are combined with a logical 'AND'. */
export type Topology_Layer_Bool_Exp = {
  _and?: InputMaybe<Array<Topology_Layer_Bool_Exp>>;
  _not?: InputMaybe<Topology_Layer_Bool_Exp>;
  _or?: InputMaybe<Array<Topology_Layer_Bool_Exp>>;
  child_id?: InputMaybe<Int_Comparison_Exp>;
  feature_column?: InputMaybe<String_Comparison_Exp>;
  feature_type?: InputMaybe<Int_Comparison_Exp>;
  layer_id?: InputMaybe<Int_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  schema_name?: InputMaybe<String_Comparison_Exp>;
  table_name?: InputMaybe<String_Comparison_Exp>;
  topology_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "topology.layer" */
export enum Topology_Layer_Constraint {
  /** unique or primary key constraint on columns "layer_id", "topology_id" */
  LayerPkey = 'layer_pkey',
  /** unique or primary key constraint on columns "table_name", "feature_column", "schema_name" */
  LayerSchemaNameTableNameFeatureColumnKey = 'layer_schema_name_table_name_feature_column_key'
}

/** input type for incrementing numeric columns in table "topology.layer" */
export type Topology_Layer_Inc_Input = {
  child_id?: InputMaybe<Scalars['Int']>;
  feature_type?: InputMaybe<Scalars['Int']>;
  layer_id?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  topology_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "topology.layer" */
export type Topology_Layer_Insert_Input = {
  child_id?: InputMaybe<Scalars['Int']>;
  feature_column?: InputMaybe<Scalars['String']>;
  feature_type?: InputMaybe<Scalars['Int']>;
  layer_id?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  schema_name?: InputMaybe<Scalars['String']>;
  table_name?: InputMaybe<Scalars['String']>;
  topology_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Topology_Layer_Max_Fields = {
  __typename?: 'topology_layer_max_fields';
  child_id?: Maybe<Scalars['Int']>;
  feature_column?: Maybe<Scalars['String']>;
  feature_type?: Maybe<Scalars['Int']>;
  layer_id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  schema_name?: Maybe<Scalars['String']>;
  table_name?: Maybe<Scalars['String']>;
  topology_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Topology_Layer_Min_Fields = {
  __typename?: 'topology_layer_min_fields';
  child_id?: Maybe<Scalars['Int']>;
  feature_column?: Maybe<Scalars['String']>;
  feature_type?: Maybe<Scalars['Int']>;
  layer_id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  schema_name?: Maybe<Scalars['String']>;
  table_name?: Maybe<Scalars['String']>;
  topology_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "topology.layer" */
export type Topology_Layer_Mutation_Response = {
  __typename?: 'topology_layer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Topology_Layer>;
};

/** on_conflict condition type for table "topology.layer" */
export type Topology_Layer_On_Conflict = {
  constraint: Topology_Layer_Constraint;
  update_columns?: Array<Topology_Layer_Update_Column>;
  where?: InputMaybe<Topology_Layer_Bool_Exp>;
};

/** Ordering options when selecting data from "topology.layer". */
export type Topology_Layer_Order_By = {
  child_id?: InputMaybe<Order_By>;
  feature_column?: InputMaybe<Order_By>;
  feature_type?: InputMaybe<Order_By>;
  layer_id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  schema_name?: InputMaybe<Order_By>;
  table_name?: InputMaybe<Order_By>;
  topology_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: topology.layer */
export type Topology_Layer_Pk_Columns_Input = {
  layer_id: Scalars['Int'];
  topology_id: Scalars['Int'];
};

/** select columns of table "topology.layer" */
export enum Topology_Layer_Select_Column {
  /** column name */
  ChildId = 'child_id',
  /** column name */
  FeatureColumn = 'feature_column',
  /** column name */
  FeatureType = 'feature_type',
  /** column name */
  LayerId = 'layer_id',
  /** column name */
  Level = 'level',
  /** column name */
  SchemaName = 'schema_name',
  /** column name */
  TableName = 'table_name',
  /** column name */
  TopologyId = 'topology_id'
}

/** input type for updating data in table "topology.layer" */
export type Topology_Layer_Set_Input = {
  child_id?: InputMaybe<Scalars['Int']>;
  feature_column?: InputMaybe<Scalars['String']>;
  feature_type?: InputMaybe<Scalars['Int']>;
  layer_id?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  schema_name?: InputMaybe<Scalars['String']>;
  table_name?: InputMaybe<Scalars['String']>;
  topology_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Topology_Layer_Stddev_Fields = {
  __typename?: 'topology_layer_stddev_fields';
  child_id?: Maybe<Scalars['Float']>;
  feature_type?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  topology_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Topology_Layer_Stddev_Pop_Fields = {
  __typename?: 'topology_layer_stddev_pop_fields';
  child_id?: Maybe<Scalars['Float']>;
  feature_type?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  topology_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Topology_Layer_Stddev_Samp_Fields = {
  __typename?: 'topology_layer_stddev_samp_fields';
  child_id?: Maybe<Scalars['Float']>;
  feature_type?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  topology_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "topology_layer" */
export type Topology_Layer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Topology_Layer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Topology_Layer_Stream_Cursor_Value_Input = {
  child_id?: InputMaybe<Scalars['Int']>;
  feature_column?: InputMaybe<Scalars['String']>;
  feature_type?: InputMaybe<Scalars['Int']>;
  layer_id?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  schema_name?: InputMaybe<Scalars['String']>;
  table_name?: InputMaybe<Scalars['String']>;
  topology_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Topology_Layer_Sum_Fields = {
  __typename?: 'topology_layer_sum_fields';
  child_id?: Maybe<Scalars['Int']>;
  feature_type?: Maybe<Scalars['Int']>;
  layer_id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  topology_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "topology.layer" */
export enum Topology_Layer_Update_Column {
  /** column name */
  ChildId = 'child_id',
  /** column name */
  FeatureColumn = 'feature_column',
  /** column name */
  FeatureType = 'feature_type',
  /** column name */
  LayerId = 'layer_id',
  /** column name */
  Level = 'level',
  /** column name */
  SchemaName = 'schema_name',
  /** column name */
  TableName = 'table_name',
  /** column name */
  TopologyId = 'topology_id'
}

export type Topology_Layer_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Topology_Layer_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Topology_Layer_Set_Input>;
  /** filter the rows which have to be updated */
  where: Topology_Layer_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Topology_Layer_Var_Pop_Fields = {
  __typename?: 'topology_layer_var_pop_fields';
  child_id?: Maybe<Scalars['Float']>;
  feature_type?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  topology_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Topology_Layer_Var_Samp_Fields = {
  __typename?: 'topology_layer_var_samp_fields';
  child_id?: Maybe<Scalars['Float']>;
  feature_type?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  topology_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Topology_Layer_Variance_Fields = {
  __typename?: 'topology_layer_variance_fields';
  child_id?: Maybe<Scalars['Float']>;
  feature_type?: Maybe<Scalars['Float']>;
  layer_id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  topology_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "topology.topology" */
export type Topology_Topology = {
  __typename?: 'topology_topology';
  hasz: Scalars['Boolean'];
  id: Scalars['Int'];
  name: Scalars['String'];
  precision: Scalars['float8'];
  srid: Scalars['Int'];
};

/** aggregated selection of "topology.topology" */
export type Topology_Topology_Aggregate = {
  __typename?: 'topology_topology_aggregate';
  aggregate?: Maybe<Topology_Topology_Aggregate_Fields>;
  nodes: Array<Topology_Topology>;
};

/** aggregate fields of "topology.topology" */
export type Topology_Topology_Aggregate_Fields = {
  __typename?: 'topology_topology_aggregate_fields';
  avg?: Maybe<Topology_Topology_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Topology_Topology_Max_Fields>;
  min?: Maybe<Topology_Topology_Min_Fields>;
  stddev?: Maybe<Topology_Topology_Stddev_Fields>;
  stddev_pop?: Maybe<Topology_Topology_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Topology_Topology_Stddev_Samp_Fields>;
  sum?: Maybe<Topology_Topology_Sum_Fields>;
  var_pop?: Maybe<Topology_Topology_Var_Pop_Fields>;
  var_samp?: Maybe<Topology_Topology_Var_Samp_Fields>;
  variance?: Maybe<Topology_Topology_Variance_Fields>;
};


/** aggregate fields of "topology.topology" */
export type Topology_Topology_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Topology_Topology_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Topology_Topology_Avg_Fields = {
  __typename?: 'topology_topology_avg_fields';
  id?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Float']>;
  srid?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "topology.topology". All fields are combined with a logical 'AND'. */
export type Topology_Topology_Bool_Exp = {
  _and?: InputMaybe<Array<Topology_Topology_Bool_Exp>>;
  _not?: InputMaybe<Topology_Topology_Bool_Exp>;
  _or?: InputMaybe<Array<Topology_Topology_Bool_Exp>>;
  hasz?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  precision?: InputMaybe<Float8_Comparison_Exp>;
  srid?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "topology.topology" */
export enum Topology_Topology_Constraint {
  /** unique or primary key constraint on columns "name" */
  TopologyNameKey = 'topology_name_key',
  /** unique or primary key constraint on columns "id" */
  TopologyPkey = 'topology_pkey'
}

/** input type for incrementing numeric columns in table "topology.topology" */
export type Topology_Topology_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  precision?: InputMaybe<Scalars['float8']>;
  srid?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "topology.topology" */
export type Topology_Topology_Insert_Input = {
  hasz?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  precision?: InputMaybe<Scalars['float8']>;
  srid?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Topology_Topology_Max_Fields = {
  __typename?: 'topology_topology_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  precision?: Maybe<Scalars['float8']>;
  srid?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Topology_Topology_Min_Fields = {
  __typename?: 'topology_topology_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  precision?: Maybe<Scalars['float8']>;
  srid?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "topology.topology" */
export type Topology_Topology_Mutation_Response = {
  __typename?: 'topology_topology_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Topology_Topology>;
};

/** on_conflict condition type for table "topology.topology" */
export type Topology_Topology_On_Conflict = {
  constraint: Topology_Topology_Constraint;
  update_columns?: Array<Topology_Topology_Update_Column>;
  where?: InputMaybe<Topology_Topology_Bool_Exp>;
};

/** Ordering options when selecting data from "topology.topology". */
export type Topology_Topology_Order_By = {
  hasz?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  precision?: InputMaybe<Order_By>;
  srid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: topology.topology */
export type Topology_Topology_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "topology.topology" */
export enum Topology_Topology_Select_Column {
  /** column name */
  Hasz = 'hasz',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Precision = 'precision',
  /** column name */
  Srid = 'srid'
}

/** input type for updating data in table "topology.topology" */
export type Topology_Topology_Set_Input = {
  hasz?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  precision?: InputMaybe<Scalars['float8']>;
  srid?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Topology_Topology_Stddev_Fields = {
  __typename?: 'topology_topology_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Float']>;
  srid?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Topology_Topology_Stddev_Pop_Fields = {
  __typename?: 'topology_topology_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Float']>;
  srid?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Topology_Topology_Stddev_Samp_Fields = {
  __typename?: 'topology_topology_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Float']>;
  srid?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "topology_topology" */
export type Topology_Topology_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Topology_Topology_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Topology_Topology_Stream_Cursor_Value_Input = {
  hasz?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  precision?: InputMaybe<Scalars['float8']>;
  srid?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Topology_Topology_Sum_Fields = {
  __typename?: 'topology_topology_sum_fields';
  id?: Maybe<Scalars['Int']>;
  precision?: Maybe<Scalars['float8']>;
  srid?: Maybe<Scalars['Int']>;
};

/** update columns of table "topology.topology" */
export enum Topology_Topology_Update_Column {
  /** column name */
  Hasz = 'hasz',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Precision = 'precision',
  /** column name */
  Srid = 'srid'
}

export type Topology_Topology_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Topology_Topology_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Topology_Topology_Set_Input>;
  /** filter the rows which have to be updated */
  where: Topology_Topology_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Topology_Topology_Var_Pop_Fields = {
  __typename?: 'topology_topology_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Float']>;
  srid?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Topology_Topology_Var_Samp_Fields = {
  __typename?: 'topology_topology_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Float']>;
  srid?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Topology_Topology_Variance_Fields = {
  __typename?: 'topology_topology_variance_fields';
  id?: Maybe<Scalars['Float']>;
  precision?: Maybe<Scalars['Float']>;
  srid?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "types_test" */
export type Types_Test = {
  __typename?: 'types_test';
  big_int_test?: Maybe<Scalars['bigint']>;
  checkbox_test?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date_test?: Maybe<Scalars['date']>;
  email_test?: Maybe<Scalars['String']>;
  enum_test?: Maybe<Status_Types_Enum>;
  enum_test_2_nonull?: Maybe<Enum_Test_Types_Enum>;
  /** An object relationship */
  enum_test_type?: Maybe<Enum_Test_Types>;
  file_path?: Maybe<Scalars['String']>;
  glbPath?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  int_test?: Maybe<Scalars['Int']>;
  interval_test?: Maybe<Scalars['interval']>;
  isDeleted?: Maybe<Scalars['String']>;
  json_test?: Maybe<Scalars['json']>;
  jsonb_test?: Maybe<Scalars['jsonb']>;
  non_nullable: Scalars['String'];
  numeric_test?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  status_type?: Maybe<Status_Types>;
  text_test?: Maybe<Scalars['String']>;
  time_test?: Maybe<Scalars['time']>;
  timestamp_test?: Maybe<Scalars['timestamp']>;
  timestamptz_test?: Maybe<Scalars['timestamptz']>;
  timetz_test?: Maybe<Scalars['timetz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  usdzPath?: Maybe<Scalars['String']>;
  uuid_test: Scalars['uuid'];
};


/** columns and relationships of "types_test" */
export type Types_TestJson_TestArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "types_test" */
export type Types_TestJsonb_TestArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "types_test" */
export type Types_Test_Aggregate = {
  __typename?: 'types_test_aggregate';
  aggregate?: Maybe<Types_Test_Aggregate_Fields>;
  nodes: Array<Types_Test>;
};

export type Types_Test_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Types_Test_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Types_Test_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Types_Test_Aggregate_Bool_Exp_Count>;
};

export type Types_Test_Aggregate_Bool_Exp_Bool_And = {
  arguments: Types_Test_Select_Column_Types_Test_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Types_Test_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Types_Test_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Types_Test_Select_Column_Types_Test_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Types_Test_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Types_Test_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Types_Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Types_Test_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "types_test" */
export type Types_Test_Aggregate_Fields = {
  __typename?: 'types_test_aggregate_fields';
  avg?: Maybe<Types_Test_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Types_Test_Max_Fields>;
  min?: Maybe<Types_Test_Min_Fields>;
  stddev?: Maybe<Types_Test_Stddev_Fields>;
  stddev_pop?: Maybe<Types_Test_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Types_Test_Stddev_Samp_Fields>;
  sum?: Maybe<Types_Test_Sum_Fields>;
  var_pop?: Maybe<Types_Test_Var_Pop_Fields>;
  var_samp?: Maybe<Types_Test_Var_Samp_Fields>;
  variance?: Maybe<Types_Test_Variance_Fields>;
};


/** aggregate fields of "types_test" */
export type Types_Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Types_Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "types_test" */
export type Types_Test_Aggregate_Order_By = {
  avg?: InputMaybe<Types_Test_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Types_Test_Max_Order_By>;
  min?: InputMaybe<Types_Test_Min_Order_By>;
  stddev?: InputMaybe<Types_Test_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Types_Test_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Types_Test_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Types_Test_Sum_Order_By>;
  var_pop?: InputMaybe<Types_Test_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Types_Test_Var_Samp_Order_By>;
  variance?: InputMaybe<Types_Test_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Types_Test_Append_Input = {
  jsonb_test?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "types_test" */
export type Types_Test_Arr_Rel_Insert_Input = {
  data: Array<Types_Test_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Types_Test_On_Conflict>;
};

/** aggregate avg on columns */
export type Types_Test_Avg_Fields = {
  __typename?: 'types_test_avg_fields';
  big_int_test?: Maybe<Scalars['Float']>;
  int_test?: Maybe<Scalars['Float']>;
  numeric_test?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "types_test" */
export type Types_Test_Avg_Order_By = {
  big_int_test?: InputMaybe<Order_By>;
  int_test?: InputMaybe<Order_By>;
  numeric_test?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "types_test". All fields are combined with a logical 'AND'. */
export type Types_Test_Bool_Exp = {
  _and?: InputMaybe<Array<Types_Test_Bool_Exp>>;
  _not?: InputMaybe<Types_Test_Bool_Exp>;
  _or?: InputMaybe<Array<Types_Test_Bool_Exp>>;
  big_int_test?: InputMaybe<Bigint_Comparison_Exp>;
  checkbox_test?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_test?: InputMaybe<Date_Comparison_Exp>;
  email_test?: InputMaybe<String_Comparison_Exp>;
  enum_test?: InputMaybe<Status_Types_Enum_Comparison_Exp>;
  enum_test_2_nonull?: InputMaybe<Enum_Test_Types_Enum_Comparison_Exp>;
  enum_test_type?: InputMaybe<Enum_Test_Types_Bool_Exp>;
  file_path?: InputMaybe<String_Comparison_Exp>;
  glbPath?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  int_test?: InputMaybe<Int_Comparison_Exp>;
  interval_test?: InputMaybe<Interval_Comparison_Exp>;
  isDeleted?: InputMaybe<String_Comparison_Exp>;
  json_test?: InputMaybe<Json_Comparison_Exp>;
  jsonb_test?: InputMaybe<Jsonb_Comparison_Exp>;
  non_nullable?: InputMaybe<String_Comparison_Exp>;
  numeric_test?: InputMaybe<Numeric_Comparison_Exp>;
  status_type?: InputMaybe<Status_Types_Bool_Exp>;
  text_test?: InputMaybe<String_Comparison_Exp>;
  time_test?: InputMaybe<Time_Comparison_Exp>;
  timestamp_test?: InputMaybe<Timestamp_Comparison_Exp>;
  timestamptz_test?: InputMaybe<Timestamptz_Comparison_Exp>;
  timetz_test?: InputMaybe<Timetz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  usdzPath?: InputMaybe<String_Comparison_Exp>;
  uuid_test?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "types_test" */
export enum Types_Test_Constraint {
  /** unique or primary key constraint on columns "id" */
  TestPkey = 'test_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Types_Test_Delete_At_Path_Input = {
  jsonb_test?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Types_Test_Delete_Elem_Input = {
  jsonb_test?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Types_Test_Delete_Key_Input = {
  jsonb_test?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "types_test" */
export type Types_Test_Inc_Input = {
  big_int_test?: InputMaybe<Scalars['bigint']>;
  int_test?: InputMaybe<Scalars['Int']>;
  numeric_test?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "types_test" */
export type Types_Test_Insert_Input = {
  big_int_test?: InputMaybe<Scalars['bigint']>;
  checkbox_test?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date_test?: InputMaybe<Scalars['date']>;
  email_test?: InputMaybe<Scalars['String']>;
  enum_test?: InputMaybe<Status_Types_Enum>;
  enum_test_2_nonull?: InputMaybe<Enum_Test_Types_Enum>;
  enum_test_type?: InputMaybe<Enum_Test_Types_Obj_Rel_Insert_Input>;
  file_path?: InputMaybe<Scalars['String']>;
  glbPath?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  int_test?: InputMaybe<Scalars['Int']>;
  interval_test?: InputMaybe<Scalars['interval']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  json_test?: InputMaybe<Scalars['json']>;
  jsonb_test?: InputMaybe<Scalars['jsonb']>;
  non_nullable?: InputMaybe<Scalars['String']>;
  numeric_test?: InputMaybe<Scalars['numeric']>;
  status_type?: InputMaybe<Status_Types_Obj_Rel_Insert_Input>;
  text_test?: InputMaybe<Scalars['String']>;
  time_test?: InputMaybe<Scalars['time']>;
  timestamp_test?: InputMaybe<Scalars['timestamp']>;
  timestamptz_test?: InputMaybe<Scalars['timestamptz']>;
  timetz_test?: InputMaybe<Scalars['timetz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  usdzPath?: InputMaybe<Scalars['String']>;
  uuid_test?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Types_Test_Max_Fields = {
  __typename?: 'types_test_max_fields';
  big_int_test?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date_test?: Maybe<Scalars['date']>;
  email_test?: Maybe<Scalars['String']>;
  file_path?: Maybe<Scalars['String']>;
  glbPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  int_test?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['String']>;
  non_nullable?: Maybe<Scalars['String']>;
  numeric_test?: Maybe<Scalars['numeric']>;
  text_test?: Maybe<Scalars['String']>;
  timestamp_test?: Maybe<Scalars['timestamp']>;
  timestamptz_test?: Maybe<Scalars['timestamptz']>;
  timetz_test?: Maybe<Scalars['timetz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  usdzPath?: Maybe<Scalars['String']>;
  uuid_test?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "types_test" */
export type Types_Test_Max_Order_By = {
  big_int_test?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_test?: InputMaybe<Order_By>;
  email_test?: InputMaybe<Order_By>;
  file_path?: InputMaybe<Order_By>;
  glbPath?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  int_test?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  non_nullable?: InputMaybe<Order_By>;
  numeric_test?: InputMaybe<Order_By>;
  text_test?: InputMaybe<Order_By>;
  timestamp_test?: InputMaybe<Order_By>;
  timestamptz_test?: InputMaybe<Order_By>;
  timetz_test?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  usdzPath?: InputMaybe<Order_By>;
  uuid_test?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Types_Test_Min_Fields = {
  __typename?: 'types_test_min_fields';
  big_int_test?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date_test?: Maybe<Scalars['date']>;
  email_test?: Maybe<Scalars['String']>;
  file_path?: Maybe<Scalars['String']>;
  glbPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  int_test?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['String']>;
  non_nullable?: Maybe<Scalars['String']>;
  numeric_test?: Maybe<Scalars['numeric']>;
  text_test?: Maybe<Scalars['String']>;
  timestamp_test?: Maybe<Scalars['timestamp']>;
  timestamptz_test?: Maybe<Scalars['timestamptz']>;
  timetz_test?: Maybe<Scalars['timetz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  usdzPath?: Maybe<Scalars['String']>;
  uuid_test?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "types_test" */
export type Types_Test_Min_Order_By = {
  big_int_test?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_test?: InputMaybe<Order_By>;
  email_test?: InputMaybe<Order_By>;
  file_path?: InputMaybe<Order_By>;
  glbPath?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  int_test?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  non_nullable?: InputMaybe<Order_By>;
  numeric_test?: InputMaybe<Order_By>;
  text_test?: InputMaybe<Order_By>;
  timestamp_test?: InputMaybe<Order_By>;
  timestamptz_test?: InputMaybe<Order_By>;
  timetz_test?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  usdzPath?: InputMaybe<Order_By>;
  uuid_test?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "types_test" */
export type Types_Test_Mutation_Response = {
  __typename?: 'types_test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Types_Test>;
};

/** on_conflict condition type for table "types_test" */
export type Types_Test_On_Conflict = {
  constraint: Types_Test_Constraint;
  update_columns?: Array<Types_Test_Update_Column>;
  where?: InputMaybe<Types_Test_Bool_Exp>;
};

/** Ordering options when selecting data from "types_test". */
export type Types_Test_Order_By = {
  big_int_test?: InputMaybe<Order_By>;
  checkbox_test?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_test?: InputMaybe<Order_By>;
  email_test?: InputMaybe<Order_By>;
  enum_test?: InputMaybe<Order_By>;
  enum_test_2_nonull?: InputMaybe<Order_By>;
  enum_test_type?: InputMaybe<Enum_Test_Types_Order_By>;
  file_path?: InputMaybe<Order_By>;
  glbPath?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  int_test?: InputMaybe<Order_By>;
  interval_test?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  json_test?: InputMaybe<Order_By>;
  jsonb_test?: InputMaybe<Order_By>;
  non_nullable?: InputMaybe<Order_By>;
  numeric_test?: InputMaybe<Order_By>;
  status_type?: InputMaybe<Status_Types_Order_By>;
  text_test?: InputMaybe<Order_By>;
  time_test?: InputMaybe<Order_By>;
  timestamp_test?: InputMaybe<Order_By>;
  timestamptz_test?: InputMaybe<Order_By>;
  timetz_test?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  usdzPath?: InputMaybe<Order_By>;
  uuid_test?: InputMaybe<Order_By>;
};

/** primary key columns input for table: types_test */
export type Types_Test_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Types_Test_Prepend_Input = {
  jsonb_test?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "types_test" */
export enum Types_Test_Select_Column {
  /** column name */
  BigIntTest = 'big_int_test',
  /** column name */
  CheckboxTest = 'checkbox_test',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateTest = 'date_test',
  /** column name */
  EmailTest = 'email_test',
  /** column name */
  EnumTest = 'enum_test',
  /** column name */
  EnumTest_2Nonull = 'enum_test_2_nonull',
  /** column name */
  FilePath = 'file_path',
  /** column name */
  GlbPath = 'glbPath',
  /** column name */
  Id = 'id',
  /** column name */
  IntTest = 'int_test',
  /** column name */
  IntervalTest = 'interval_test',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  JsonTest = 'json_test',
  /** column name */
  JsonbTest = 'jsonb_test',
  /** column name */
  NonNullable = 'non_nullable',
  /** column name */
  NumericTest = 'numeric_test',
  /** column name */
  TextTest = 'text_test',
  /** column name */
  TimeTest = 'time_test',
  /** column name */
  TimestampTest = 'timestamp_test',
  /** column name */
  TimestamptzTest = 'timestamptz_test',
  /** column name */
  TimetzTest = 'timetz_test',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UsdzPath = 'usdzPath',
  /** column name */
  UuidTest = 'uuid_test'
}

/** select "types_test_aggregate_bool_exp_bool_and_arguments_columns" columns of table "types_test" */
export enum Types_Test_Select_Column_Types_Test_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  CheckboxTest = 'checkbox_test'
}

/** select "types_test_aggregate_bool_exp_bool_or_arguments_columns" columns of table "types_test" */
export enum Types_Test_Select_Column_Types_Test_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  CheckboxTest = 'checkbox_test'
}

/** input type for updating data in table "types_test" */
export type Types_Test_Set_Input = {
  big_int_test?: InputMaybe<Scalars['bigint']>;
  checkbox_test?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date_test?: InputMaybe<Scalars['date']>;
  email_test?: InputMaybe<Scalars['String']>;
  enum_test?: InputMaybe<Status_Types_Enum>;
  enum_test_2_nonull?: InputMaybe<Enum_Test_Types_Enum>;
  file_path?: InputMaybe<Scalars['String']>;
  glbPath?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  int_test?: InputMaybe<Scalars['Int']>;
  interval_test?: InputMaybe<Scalars['interval']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  json_test?: InputMaybe<Scalars['json']>;
  jsonb_test?: InputMaybe<Scalars['jsonb']>;
  non_nullable?: InputMaybe<Scalars['String']>;
  numeric_test?: InputMaybe<Scalars['numeric']>;
  text_test?: InputMaybe<Scalars['String']>;
  time_test?: InputMaybe<Scalars['time']>;
  timestamp_test?: InputMaybe<Scalars['timestamp']>;
  timestamptz_test?: InputMaybe<Scalars['timestamptz']>;
  timetz_test?: InputMaybe<Scalars['timetz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  usdzPath?: InputMaybe<Scalars['String']>;
  uuid_test?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Types_Test_Stddev_Fields = {
  __typename?: 'types_test_stddev_fields';
  big_int_test?: Maybe<Scalars['Float']>;
  int_test?: Maybe<Scalars['Float']>;
  numeric_test?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "types_test" */
export type Types_Test_Stddev_Order_By = {
  big_int_test?: InputMaybe<Order_By>;
  int_test?: InputMaybe<Order_By>;
  numeric_test?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Types_Test_Stddev_Pop_Fields = {
  __typename?: 'types_test_stddev_pop_fields';
  big_int_test?: Maybe<Scalars['Float']>;
  int_test?: Maybe<Scalars['Float']>;
  numeric_test?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "types_test" */
export type Types_Test_Stddev_Pop_Order_By = {
  big_int_test?: InputMaybe<Order_By>;
  int_test?: InputMaybe<Order_By>;
  numeric_test?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Types_Test_Stddev_Samp_Fields = {
  __typename?: 'types_test_stddev_samp_fields';
  big_int_test?: Maybe<Scalars['Float']>;
  int_test?: Maybe<Scalars['Float']>;
  numeric_test?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "types_test" */
export type Types_Test_Stddev_Samp_Order_By = {
  big_int_test?: InputMaybe<Order_By>;
  int_test?: InputMaybe<Order_By>;
  numeric_test?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "types_test" */
export type Types_Test_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Types_Test_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Types_Test_Stream_Cursor_Value_Input = {
  big_int_test?: InputMaybe<Scalars['bigint']>;
  checkbox_test?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date_test?: InputMaybe<Scalars['date']>;
  email_test?: InputMaybe<Scalars['String']>;
  enum_test?: InputMaybe<Status_Types_Enum>;
  enum_test_2_nonull?: InputMaybe<Enum_Test_Types_Enum>;
  file_path?: InputMaybe<Scalars['String']>;
  glbPath?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  int_test?: InputMaybe<Scalars['Int']>;
  interval_test?: InputMaybe<Scalars['interval']>;
  isDeleted?: InputMaybe<Scalars['String']>;
  json_test?: InputMaybe<Scalars['json']>;
  jsonb_test?: InputMaybe<Scalars['jsonb']>;
  non_nullable?: InputMaybe<Scalars['String']>;
  numeric_test?: InputMaybe<Scalars['numeric']>;
  text_test?: InputMaybe<Scalars['String']>;
  time_test?: InputMaybe<Scalars['time']>;
  timestamp_test?: InputMaybe<Scalars['timestamp']>;
  timestamptz_test?: InputMaybe<Scalars['timestamptz']>;
  timetz_test?: InputMaybe<Scalars['timetz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  usdzPath?: InputMaybe<Scalars['String']>;
  uuid_test?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Types_Test_Sum_Fields = {
  __typename?: 'types_test_sum_fields';
  big_int_test?: Maybe<Scalars['bigint']>;
  int_test?: Maybe<Scalars['Int']>;
  numeric_test?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "types_test" */
export type Types_Test_Sum_Order_By = {
  big_int_test?: InputMaybe<Order_By>;
  int_test?: InputMaybe<Order_By>;
  numeric_test?: InputMaybe<Order_By>;
};

/** update columns of table "types_test" */
export enum Types_Test_Update_Column {
  /** column name */
  BigIntTest = 'big_int_test',
  /** column name */
  CheckboxTest = 'checkbox_test',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateTest = 'date_test',
  /** column name */
  EmailTest = 'email_test',
  /** column name */
  EnumTest = 'enum_test',
  /** column name */
  EnumTest_2Nonull = 'enum_test_2_nonull',
  /** column name */
  FilePath = 'file_path',
  /** column name */
  GlbPath = 'glbPath',
  /** column name */
  Id = 'id',
  /** column name */
  IntTest = 'int_test',
  /** column name */
  IntervalTest = 'interval_test',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  JsonTest = 'json_test',
  /** column name */
  JsonbTest = 'jsonb_test',
  /** column name */
  NonNullable = 'non_nullable',
  /** column name */
  NumericTest = 'numeric_test',
  /** column name */
  TextTest = 'text_test',
  /** column name */
  TimeTest = 'time_test',
  /** column name */
  TimestampTest = 'timestamp_test',
  /** column name */
  TimestamptzTest = 'timestamptz_test',
  /** column name */
  TimetzTest = 'timetz_test',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UsdzPath = 'usdzPath',
  /** column name */
  UuidTest = 'uuid_test'
}

export type Types_Test_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Types_Test_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Types_Test_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Types_Test_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Types_Test_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Types_Test_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Types_Test_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Types_Test_Set_Input>;
  /** filter the rows which have to be updated */
  where: Types_Test_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Types_Test_Var_Pop_Fields = {
  __typename?: 'types_test_var_pop_fields';
  big_int_test?: Maybe<Scalars['Float']>;
  int_test?: Maybe<Scalars['Float']>;
  numeric_test?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "types_test" */
export type Types_Test_Var_Pop_Order_By = {
  big_int_test?: InputMaybe<Order_By>;
  int_test?: InputMaybe<Order_By>;
  numeric_test?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Types_Test_Var_Samp_Fields = {
  __typename?: 'types_test_var_samp_fields';
  big_int_test?: Maybe<Scalars['Float']>;
  int_test?: Maybe<Scalars['Float']>;
  numeric_test?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "types_test" */
export type Types_Test_Var_Samp_Order_By = {
  big_int_test?: InputMaybe<Order_By>;
  int_test?: InputMaybe<Order_By>;
  numeric_test?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Types_Test_Variance_Fields = {
  __typename?: 'types_test_variance_fields';
  big_int_test?: Maybe<Scalars['Float']>;
  int_test?: Maybe<Scalars['Float']>;
  numeric_test?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "types_test" */
export type Types_Test_Variance_Order_By = {
  big_int_test?: InputMaybe<Order_By>;
  int_test?: InputMaybe<Order_By>;
  numeric_test?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "workplace" */
export type Workplace = {
  __typename?: 'workplace';
  fk_hall?: Maybe<Scalars['uuid']>;
  floor_plan?: Maybe<Scalars['String']>;
  floor_plan_url?: Maybe<GetUrlReturn>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  /** An array relationship */
  surveys: Array<Survey>;
  /** An aggregate relationship */
  surveys_aggregate: Survey_Aggregate;
  validity_from?: Maybe<Scalars['date']>;
  validity_to?: Maybe<Scalars['date']>;
  /** An array relationship */
  workplace_items: Array<Workplace_Item>;
  /** An aggregate relationship */
  workplace_items_aggregate: Workplace_Item_Aggregate;
};


/** columns and relationships of "workplace" */
export type WorkplaceSurveysArgs = {
  distinct_on?: InputMaybe<Array<Survey_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Order_By>>;
  where?: InputMaybe<Survey_Bool_Exp>;
};


/** columns and relationships of "workplace" */
export type WorkplaceSurveys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Survey_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Order_By>>;
  where?: InputMaybe<Survey_Bool_Exp>;
};


/** columns and relationships of "workplace" */
export type WorkplaceWorkplace_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Workplace_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workplace_Item_Order_By>>;
  where?: InputMaybe<Workplace_Item_Bool_Exp>;
};


/** columns and relationships of "workplace" */
export type WorkplaceWorkplace_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workplace_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workplace_Item_Order_By>>;
  where?: InputMaybe<Workplace_Item_Bool_Exp>;
};

/** aggregated selection of "workplace" */
export type Workplace_Aggregate = {
  __typename?: 'workplace_aggregate';
  aggregate?: Maybe<Workplace_Aggregate_Fields>;
  nodes: Array<Workplace>;
};

/** aggregate fields of "workplace" */
export type Workplace_Aggregate_Fields = {
  __typename?: 'workplace_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Workplace_Max_Fields>;
  min?: Maybe<Workplace_Min_Fields>;
};


/** aggregate fields of "workplace" */
export type Workplace_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workplace_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "workplace". All fields are combined with a logical 'AND'. */
export type Workplace_Bool_Exp = {
  _and?: InputMaybe<Array<Workplace_Bool_Exp>>;
  _not?: InputMaybe<Workplace_Bool_Exp>;
  _or?: InputMaybe<Array<Workplace_Bool_Exp>>;
  fk_hall?: InputMaybe<Uuid_Comparison_Exp>;
  floor_plan?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  surveys?: InputMaybe<Survey_Bool_Exp>;
  surveys_aggregate?: InputMaybe<Survey_Aggregate_Bool_Exp>;
  validity_from?: InputMaybe<Date_Comparison_Exp>;
  validity_to?: InputMaybe<Date_Comparison_Exp>;
  workplace_items?: InputMaybe<Workplace_Item_Bool_Exp>;
  workplace_items_aggregate?: InputMaybe<Workplace_Item_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "workplace" */
export enum Workplace_Constraint {
  /** unique or primary key constraint on columns "fk_hall" */
  WorkplaceFkHallKey = 'workplace_fk_hall_key',
  /** unique or primary key constraint on columns "id" */
  WorkplacePkey = 'workplace_pkey'
}

/** input type for inserting data into table "workplace" */
export type Workplace_Insert_Input = {
  fk_hall?: InputMaybe<Scalars['uuid']>;
  floor_plan?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  surveys?: InputMaybe<Survey_Arr_Rel_Insert_Input>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
  workplace_items?: InputMaybe<Workplace_Item_Arr_Rel_Insert_Input>;
};

/** columns and relationships of "workplace_item" */
export type Workplace_Item = {
  __typename?: 'workplace_item';
  /** An array relationship */
  answers: Array<Answers>;
  /** An aggregate relationship */
  answers_aggregate: Answers_Aggregate;
  display_order: Scalars['Int'];
  fk_workplace: Scalars['uuid'];
  foto_of_area?: Maybe<Scalars['String']>;
  foto_of_area_url?: Maybe<GetUrlReturn>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  /** An array relationship */
  survey_photos: Array<Survey_Photos>;
  /** An aggregate relationship */
  survey_photos_aggregate: Survey_Photos_Aggregate;
  validity_from?: Maybe<Scalars['date']>;
  validity_to?: Maybe<Scalars['date']>;
  /** An object relationship */
  workplace: Workplace;
};


/** columns and relationships of "workplace_item" */
export type Workplace_ItemAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


/** columns and relationships of "workplace_item" */
export type Workplace_ItemAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


/** columns and relationships of "workplace_item" */
export type Workplace_ItemSurvey_PhotosArgs = {
  distinct_on?: InputMaybe<Array<Survey_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Photos_Order_By>>;
  where?: InputMaybe<Survey_Photos_Bool_Exp>;
};


/** columns and relationships of "workplace_item" */
export type Workplace_ItemSurvey_Photos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Survey_Photos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Survey_Photos_Order_By>>;
  where?: InputMaybe<Survey_Photos_Bool_Exp>;
};

/** aggregated selection of "workplace_item" */
export type Workplace_Item_Aggregate = {
  __typename?: 'workplace_item_aggregate';
  aggregate?: Maybe<Workplace_Item_Aggregate_Fields>;
  nodes: Array<Workplace_Item>;
};

export type Workplace_Item_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workplace_Item_Aggregate_Bool_Exp_Count>;
};

export type Workplace_Item_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workplace_Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Workplace_Item_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workplace_item" */
export type Workplace_Item_Aggregate_Fields = {
  __typename?: 'workplace_item_aggregate_fields';
  avg?: Maybe<Workplace_Item_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Workplace_Item_Max_Fields>;
  min?: Maybe<Workplace_Item_Min_Fields>;
  stddev?: Maybe<Workplace_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Workplace_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Workplace_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Workplace_Item_Sum_Fields>;
  var_pop?: Maybe<Workplace_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Workplace_Item_Var_Samp_Fields>;
  variance?: Maybe<Workplace_Item_Variance_Fields>;
};


/** aggregate fields of "workplace_item" */
export type Workplace_Item_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workplace_Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workplace_item" */
export type Workplace_Item_Aggregate_Order_By = {
  avg?: InputMaybe<Workplace_Item_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workplace_Item_Max_Order_By>;
  min?: InputMaybe<Workplace_Item_Min_Order_By>;
  stddev?: InputMaybe<Workplace_Item_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Workplace_Item_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Workplace_Item_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Workplace_Item_Sum_Order_By>;
  var_pop?: InputMaybe<Workplace_Item_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Workplace_Item_Var_Samp_Order_By>;
  variance?: InputMaybe<Workplace_Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "workplace_item" */
export type Workplace_Item_Arr_Rel_Insert_Input = {
  data: Array<Workplace_Item_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workplace_Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Workplace_Item_Avg_Fields = {
  __typename?: 'workplace_item_avg_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "workplace_item" */
export type Workplace_Item_Avg_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "workplace_item". All fields are combined with a logical 'AND'. */
export type Workplace_Item_Bool_Exp = {
  _and?: InputMaybe<Array<Workplace_Item_Bool_Exp>>;
  _not?: InputMaybe<Workplace_Item_Bool_Exp>;
  _or?: InputMaybe<Array<Workplace_Item_Bool_Exp>>;
  answers?: InputMaybe<Answers_Bool_Exp>;
  answers_aggregate?: InputMaybe<Answers_Aggregate_Bool_Exp>;
  display_order?: InputMaybe<Int_Comparison_Exp>;
  fk_workplace?: InputMaybe<Uuid_Comparison_Exp>;
  foto_of_area?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  survey_photos?: InputMaybe<Survey_Photos_Bool_Exp>;
  survey_photos_aggregate?: InputMaybe<Survey_Photos_Aggregate_Bool_Exp>;
  validity_from?: InputMaybe<Date_Comparison_Exp>;
  validity_to?: InputMaybe<Date_Comparison_Exp>;
  workplace?: InputMaybe<Workplace_Bool_Exp>;
};

/** unique or primary key constraints on table "workplace_item" */
export enum Workplace_Item_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkplaceItemPkey = 'workplace_item_pkey'
}

/** input type for incrementing numeric columns in table "workplace_item" */
export type Workplace_Item_Inc_Input = {
  display_order?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "workplace_item" */
export type Workplace_Item_Insert_Input = {
  answers?: InputMaybe<Answers_Arr_Rel_Insert_Input>;
  display_order?: InputMaybe<Scalars['Int']>;
  fk_workplace?: InputMaybe<Scalars['uuid']>;
  foto_of_area?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  survey_photos?: InputMaybe<Survey_Photos_Arr_Rel_Insert_Input>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
  workplace?: InputMaybe<Workplace_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Workplace_Item_Max_Fields = {
  __typename?: 'workplace_item_max_fields';
  display_order?: Maybe<Scalars['Int']>;
  fk_workplace?: Maybe<Scalars['uuid']>;
  foto_of_area?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  validity_from?: Maybe<Scalars['date']>;
  validity_to?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "workplace_item" */
export type Workplace_Item_Max_Order_By = {
  display_order?: InputMaybe<Order_By>;
  fk_workplace?: InputMaybe<Order_By>;
  foto_of_area?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  validity_from?: InputMaybe<Order_By>;
  validity_to?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workplace_Item_Min_Fields = {
  __typename?: 'workplace_item_min_fields';
  display_order?: Maybe<Scalars['Int']>;
  fk_workplace?: Maybe<Scalars['uuid']>;
  foto_of_area?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  validity_from?: Maybe<Scalars['date']>;
  validity_to?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "workplace_item" */
export type Workplace_Item_Min_Order_By = {
  display_order?: InputMaybe<Order_By>;
  fk_workplace?: InputMaybe<Order_By>;
  foto_of_area?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  validity_from?: InputMaybe<Order_By>;
  validity_to?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workplace_item" */
export type Workplace_Item_Mutation_Response = {
  __typename?: 'workplace_item_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Workplace_Item>;
};

/** input type for inserting object relation for remote table "workplace_item" */
export type Workplace_Item_Obj_Rel_Insert_Input = {
  data: Workplace_Item_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workplace_Item_On_Conflict>;
};

/** on_conflict condition type for table "workplace_item" */
export type Workplace_Item_On_Conflict = {
  constraint: Workplace_Item_Constraint;
  update_columns?: Array<Workplace_Item_Update_Column>;
  where?: InputMaybe<Workplace_Item_Bool_Exp>;
};

/** Ordering options when selecting data from "workplace_item". */
export type Workplace_Item_Order_By = {
  answers_aggregate?: InputMaybe<Answers_Aggregate_Order_By>;
  display_order?: InputMaybe<Order_By>;
  fk_workplace?: InputMaybe<Order_By>;
  foto_of_area?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  survey_photos_aggregate?: InputMaybe<Survey_Photos_Aggregate_Order_By>;
  validity_from?: InputMaybe<Order_By>;
  validity_to?: InputMaybe<Order_By>;
  workplace?: InputMaybe<Workplace_Order_By>;
};

/** primary key columns input for table: workplace_item */
export type Workplace_Item_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "workplace_item" */
export enum Workplace_Item_Select_Column {
  /** column name */
  DisplayOrder = 'display_order',
  /** column name */
  FkWorkplace = 'fk_workplace',
  /** column name */
  FotoOfArea = 'foto_of_area',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  ValidityFrom = 'validity_from',
  /** column name */
  ValidityTo = 'validity_to'
}

/** input type for updating data in table "workplace_item" */
export type Workplace_Item_Set_Input = {
  display_order?: InputMaybe<Scalars['Int']>;
  fk_workplace?: InputMaybe<Scalars['uuid']>;
  foto_of_area?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
};

/** aggregate stddev on columns */
export type Workplace_Item_Stddev_Fields = {
  __typename?: 'workplace_item_stddev_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "workplace_item" */
export type Workplace_Item_Stddev_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Workplace_Item_Stddev_Pop_Fields = {
  __typename?: 'workplace_item_stddev_pop_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "workplace_item" */
export type Workplace_Item_Stddev_Pop_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Workplace_Item_Stddev_Samp_Fields = {
  __typename?: 'workplace_item_stddev_samp_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "workplace_item" */
export type Workplace_Item_Stddev_Samp_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "workplace_item" */
export type Workplace_Item_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workplace_Item_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workplace_Item_Stream_Cursor_Value_Input = {
  display_order?: InputMaybe<Scalars['Int']>;
  fk_workplace?: InputMaybe<Scalars['uuid']>;
  foto_of_area?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
};

/** aggregate sum on columns */
export type Workplace_Item_Sum_Fields = {
  __typename?: 'workplace_item_sum_fields';
  display_order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "workplace_item" */
export type Workplace_Item_Sum_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** update columns of table "workplace_item" */
export enum Workplace_Item_Update_Column {
  /** column name */
  DisplayOrder = 'display_order',
  /** column name */
  FkWorkplace = 'fk_workplace',
  /** column name */
  FotoOfArea = 'foto_of_area',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  ValidityFrom = 'validity_from',
  /** column name */
  ValidityTo = 'validity_to'
}

export type Workplace_Item_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Workplace_Item_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workplace_Item_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workplace_Item_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Workplace_Item_Var_Pop_Fields = {
  __typename?: 'workplace_item_var_pop_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "workplace_item" */
export type Workplace_Item_Var_Pop_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Workplace_Item_Var_Samp_Fields = {
  __typename?: 'workplace_item_var_samp_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "workplace_item" */
export type Workplace_Item_Var_Samp_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Workplace_Item_Variance_Fields = {
  __typename?: 'workplace_item_variance_fields';
  display_order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "workplace_item" */
export type Workplace_Item_Variance_Order_By = {
  display_order?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Workplace_Max_Fields = {
  __typename?: 'workplace_max_fields';
  fk_hall?: Maybe<Scalars['uuid']>;
  floor_plan?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  validity_from?: Maybe<Scalars['date']>;
  validity_to?: Maybe<Scalars['date']>;
};

/** aggregate min on columns */
export type Workplace_Min_Fields = {
  __typename?: 'workplace_min_fields';
  fk_hall?: Maybe<Scalars['uuid']>;
  floor_plan?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  validity_from?: Maybe<Scalars['date']>;
  validity_to?: Maybe<Scalars['date']>;
};

/** response of any mutation on the table "workplace" */
export type Workplace_Mutation_Response = {
  __typename?: 'workplace_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Workplace>;
};

/** input type for inserting object relation for remote table "workplace" */
export type Workplace_Obj_Rel_Insert_Input = {
  data: Workplace_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workplace_On_Conflict>;
};

/** on_conflict condition type for table "workplace" */
export type Workplace_On_Conflict = {
  constraint: Workplace_Constraint;
  update_columns?: Array<Workplace_Update_Column>;
  where?: InputMaybe<Workplace_Bool_Exp>;
};

/** Ordering options when selecting data from "workplace". */
export type Workplace_Order_By = {
  fk_hall?: InputMaybe<Order_By>;
  floor_plan?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  surveys_aggregate?: InputMaybe<Survey_Aggregate_Order_By>;
  validity_from?: InputMaybe<Order_By>;
  validity_to?: InputMaybe<Order_By>;
  workplace_items_aggregate?: InputMaybe<Workplace_Item_Aggregate_Order_By>;
};

/** primary key columns input for table: workplace */
export type Workplace_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "workplace" */
export enum Workplace_Select_Column {
  /** column name */
  FkHall = 'fk_hall',
  /** column name */
  FloorPlan = 'floor_plan',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  ValidityFrom = 'validity_from',
  /** column name */
  ValidityTo = 'validity_to'
}

/** input type for updating data in table "workplace" */
export type Workplace_Set_Input = {
  fk_hall?: InputMaybe<Scalars['uuid']>;
  floor_plan?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
};

/** Streaming cursor of the table "workplace" */
export type Workplace_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workplace_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workplace_Stream_Cursor_Value_Input = {
  fk_hall?: InputMaybe<Scalars['uuid']>;
  floor_plan?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  validity_from?: InputMaybe<Scalars['date']>;
  validity_to?: InputMaybe<Scalars['date']>;
};

/** update columns of table "workplace" */
export enum Workplace_Update_Column {
  /** column name */
  FkHall = 'fk_hall',
  /** column name */
  FloorPlan = 'floor_plan',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  ValidityFrom = 'validity_from',
  /** column name */
  ValidityTo = 'validity_to'
}

export type Workplace_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workplace_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workplace_Bool_Exp;
};

export type CmdbFragment = { __typename: 'cmdb', uuid: any, type: string, metaIS_code?: string | null, description?: string | null, manager?: string | null, reference_identifier?: string | null, name_of_information_system?: string | null };

export type Cmdb_Cmdb_Relations_NeighbourscountFragment = { __typename: 'cmdbRelationsNeighbourscounts', AS?: any | null, InfraSluzba?: any | null, KRIS?: any | null, Kontrakt?: any | null, OLA_Kontrakt?: any | null, PO?: any | null, Projekt?: any | null };

export type CmdbRelationFragment = { __typename: 'cmdbRelations', uuid: any, fk: any, type?: string | null };

export type CmdbQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Cmdb_Select_Column> | Cmdb_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cmdb_Order_By> | Cmdb_Order_By>;
  where?: InputMaybe<Cmdb_Bool_Exp>;
}>;


export type CmdbQuery = { __typename?: 'query_root', cmdb: Array<{ __typename: 'cmdb', uuid: any, type: string, metaIS_code?: string | null, description?: string | null, manager?: string | null, reference_identifier?: string | null, name_of_information_system?: string | null }> };

export type Cmdb_By_PkQueryVariables = Exact<{
  CmdbId: Scalars['uuid'];
  CmdbRelationsDistinctOn?: InputMaybe<Array<CmdbRelations_Select_Column> | CmdbRelations_Select_Column>;
  CmdbRelationsLimit?: InputMaybe<Scalars['Int']>;
  CmdbRelationsOffset?: InputMaybe<Scalars['Int']>;
  CmdbRelationsOrderBy?: InputMaybe<Array<CmdbRelations_Order_By> | CmdbRelations_Order_By>;
  CmdbRelationsWhere?: InputMaybe<CmdbRelations_Bool_Exp>;
}>;


export type Cmdb_By_PkQuery = { __typename?: 'query_root', cmdb_by_pk?: { __typename: 'cmdb', uuid: any, type: string, metaIS_code?: string | null, description?: string | null, manager?: string | null, reference_identifier?: string | null, name_of_information_system?: string | null, cmdb_relations_neighbourscount?: { __typename: 'cmdbRelationsNeighbourscounts', AS?: any | null, InfraSluzba?: any | null, KRIS?: any | null, Kontrakt?: any | null, OLA_Kontrakt?: any | null, PO?: any | null, Projekt?: any | null } | null } | null, cmdbRelations: Array<{ __typename: 'cmdbRelations', uuid: any, fk: any, type?: string | null }> };

export type Delete_CmdbMutationVariables = Exact<{
  where: Cmdb_Bool_Exp;
}>;


export type Delete_CmdbMutation = { __typename?: 'mutation_root', delete_cmdb?: { __typename?: 'cmdb_mutation_response', affected_rows: number, returning: Array<{ __typename: 'cmdb', uuid: any, type: string, metaIS_code?: string | null, description?: string | null, manager?: string | null, reference_identifier?: string | null, name_of_information_system?: string | null, cmdb_relations_neighbourscount?: { __typename: 'cmdbRelationsNeighbourscounts', AS?: any | null, InfraSluzba?: any | null, KRIS?: any | null, Kontrakt?: any | null, OLA_Kontrakt?: any | null, PO?: any | null, Projekt?: any | null } | null }> } | null };

export type Delete_Cmdb_By_PkMutationVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type Delete_Cmdb_By_PkMutation = { __typename?: 'mutation_root', delete_cmdb_by_pk?: { __typename: 'cmdb', uuid: any, type: string, metaIS_code?: string | null, description?: string | null, manager?: string | null, reference_identifier?: string | null, name_of_information_system?: string | null, cmdb_relations_neighbourscount?: { __typename: 'cmdbRelationsNeighbourscounts', AS?: any | null, InfraSluzba?: any | null, KRIS?: any | null, Kontrakt?: any | null, OLA_Kontrakt?: any | null, PO?: any | null, Projekt?: any | null } | null } | null };

export type Insert_CmdbMutationVariables = Exact<{
  cmdb: Array<Cmdb_Insert_Input> | Cmdb_Insert_Input;
  on_conflict?: InputMaybe<Cmdb_On_Conflict>;
}>;


export type Insert_CmdbMutation = { __typename?: 'mutation_root', insert_cmdb?: { __typename?: 'cmdb_mutation_response', affected_rows: number, returning: Array<{ __typename: 'cmdb', uuid: any, type: string, metaIS_code?: string | null, description?: string | null, manager?: string | null, reference_identifier?: string | null, name_of_information_system?: string | null, cmdb_relations_neighbourscount?: { __typename: 'cmdbRelationsNeighbourscounts', AS?: any | null, InfraSluzba?: any | null, KRIS?: any | null, Kontrakt?: any | null, OLA_Kontrakt?: any | null, PO?: any | null, Projekt?: any | null } | null }> } | null };

export type Insert_Cmdb_OneMutationVariables = Exact<{
  cmdb: Cmdb_Insert_Input;
  on_conflict?: InputMaybe<Cmdb_On_Conflict>;
}>;


export type Insert_Cmdb_OneMutation = { __typename?: 'mutation_root', insert_cmdb_one?: { __typename: 'cmdb', uuid: any, type: string, metaIS_code?: string | null, description?: string | null, manager?: string | null, reference_identifier?: string | null, name_of_information_system?: string | null, cmdb_relations_neighbourscount?: { __typename: 'cmdbRelationsNeighbourscounts', AS?: any | null, InfraSluzba?: any | null, KRIS?: any | null, Kontrakt?: any | null, OLA_Kontrakt?: any | null, PO?: any | null, Projekt?: any | null } | null } | null };

export type Update_CmdbMutationVariables = Exact<{
  cmdb?: InputMaybe<Cmdb_Set_Input>;
  where: Cmdb_Bool_Exp;
}>;


export type Update_CmdbMutation = { __typename?: 'mutation_root', update_cmdb?: { __typename?: 'cmdb_mutation_response', affected_rows: number, returning: Array<{ __typename: 'cmdb', uuid: any, type: string, metaIS_code?: string | null, description?: string | null, manager?: string | null, reference_identifier?: string | null, name_of_information_system?: string | null, cmdb_relations_neighbourscount?: { __typename: 'cmdbRelationsNeighbourscounts', AS?: any | null, InfraSluzba?: any | null, KRIS?: any | null, Kontrakt?: any | null, OLA_Kontrakt?: any | null, PO?: any | null, Projekt?: any | null } | null }> } | null };

export type Update_Cmdb_By_PkMutationVariables = Exact<{
  cmdb?: InputMaybe<Cmdb_Set_Input>;
  pk_columns: Cmdb_Pk_Columns_Input;
}>;


export type Update_Cmdb_By_PkMutation = { __typename?: 'mutation_root', update_cmdb_by_pk?: { __typename: 'cmdb', uuid: any, type: string, metaIS_code?: string | null, description?: string | null, manager?: string | null, reference_identifier?: string | null, name_of_information_system?: string | null, cmdb_relations_neighbourscount?: { __typename: 'cmdbRelationsNeighbourscounts', AS?: any | null, InfraSluzba?: any | null, KRIS?: any | null, Kontrakt?: any | null, OLA_Kontrakt?: any | null, PO?: any | null, Projekt?: any | null } | null } | null };

export type Update_Cmdb_ManyMutationVariables = Exact<{
  updates: Array<Cmdb_Updates> | Cmdb_Updates;
}>;


export type Update_Cmdb_ManyMutation = { __typename?: 'mutation_root', update_cmdb_many?: Array<{ __typename?: 'cmdb_mutation_response', affected_rows: number, returning: Array<{ __typename: 'cmdb', uuid: any, type: string, metaIS_code?: string | null, description?: string | null, manager?: string | null, reference_identifier?: string | null, name_of_information_system?: string | null, cmdb_relations_neighbourscount?: { __typename: 'cmdbRelationsNeighbourscounts', AS?: any | null, InfraSluzba?: any | null, KRIS?: any | null, Kontrakt?: any | null, OLA_Kontrakt?: any | null, PO?: any | null, Projekt?: any | null } | null }> } | null> | null };

export type CmdbCrudFragment = { __typename: 'cmdb', uuid: any, type: string, metaIS_code?: string | null, description?: string | null, manager?: string | null, reference_identifier?: string | null, name_of_information_system?: string | null, cmdb_relations_neighbourscount?: { __typename: 'cmdbRelationsNeighbourscounts', AS?: any | null, InfraSluzba?: any | null, KRIS?: any | null, Kontrakt?: any | null, OLA_Kontrakt?: any | null, PO?: any | null, Projekt?: any | null } | null };

export type CmdbListFragment = { __typename: 'cmdb', uuid: any, type: string, metaIS_code?: string | null, description?: string | null, manager?: string | null, reference_identifier?: string | null, name_of_information_system?: string | null };

export type CmdbRelationQueryVariables = Exact<{
  CmdbRelationsId: Scalars['uuid'];
}>;


export type CmdbRelationQuery = { __typename?: 'query_root', cmdbRelation?: { __typename: 'cmdbRelations', uuid: any, fk: any, type?: string | null } | null };

export type CmdbRelationsQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<CmdbRelations_Select_Column> | CmdbRelations_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CmdbRelations_Order_By> | CmdbRelations_Order_By>;
  where?: InputMaybe<CmdbRelations_Bool_Exp>;
}>;


export type CmdbRelationsQuery = { __typename?: 'query_root', cmdbRelations: Array<{ __typename: 'cmdbRelations', uuid: any, fk: any, type?: string | null }> };

export type DeleteCmdbRelationMutationVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type DeleteCmdbRelationMutation = { __typename?: 'mutation_root', deleteCmdbRelation?: { __typename: 'cmdbRelations', uuid: any, fk: any, type?: string | null } | null };

export type DeleteCmdbRelationsMutationVariables = Exact<{
  where: CmdbRelations_Bool_Exp;
}>;


export type DeleteCmdbRelationsMutation = { __typename?: 'mutation_root', deleteCmdbRelations?: { __typename?: 'cmdbRelations_mutation_response', affected_rows: number, returning: Array<{ __typename: 'cmdbRelations', uuid: any, fk: any, type?: string | null }> } | null };

export type InsertCmdbRelationMutationVariables = Exact<{
  cmdbRelations: CmdbRelations_Insert_Input;
  on_conflict?: InputMaybe<CmdbRelations_On_Conflict>;
}>;


export type InsertCmdbRelationMutation = { __typename?: 'mutation_root', insertCmdbRelation?: { __typename: 'cmdbRelations', uuid: any, fk: any, type?: string | null } | null };

export type InsertCmdbRelationsMutationVariables = Exact<{
  cmdbRelations: Array<CmdbRelations_Insert_Input> | CmdbRelations_Insert_Input;
  on_conflict?: InputMaybe<CmdbRelations_On_Conflict>;
}>;


export type InsertCmdbRelationsMutation = { __typename?: 'mutation_root', insertCmdbRelations?: { __typename?: 'cmdbRelations_mutation_response', affected_rows: number, returning: Array<{ __typename: 'cmdbRelations', uuid: any, fk: any, type?: string | null }> } | null };

export type UpdateCmdbRelationMutationVariables = Exact<{
  cmdbRelations?: InputMaybe<CmdbRelations_Set_Input>;
  pk_columns: CmdbRelations_Pk_Columns_Input;
}>;


export type UpdateCmdbRelationMutation = { __typename?: 'mutation_root', updateCmdbRelation?: { __typename: 'cmdbRelations', uuid: any, fk: any, type?: string | null } | null };

export type UpdateCmdbRelationsMutationVariables = Exact<{
  cmdbRelations?: InputMaybe<CmdbRelations_Set_Input>;
  where: CmdbRelations_Bool_Exp;
}>;


export type UpdateCmdbRelationsMutation = { __typename?: 'mutation_root', updateCmdbRelations?: { __typename?: 'cmdbRelations_mutation_response', affected_rows: number, returning: Array<{ __typename: 'cmdbRelations', uuid: any, fk: any, type?: string | null }> } | null };

export type UpdateManyCmdbRelationsMutationVariables = Exact<{
  updates: Array<CmdbRelations_Updates> | CmdbRelations_Updates;
}>;


export type UpdateManyCmdbRelationsMutation = { __typename?: 'mutation_root', updateManyCmdbRelations?: Array<{ __typename?: 'cmdbRelations_mutation_response', affected_rows: number, returning: Array<{ __typename: 'cmdbRelations', uuid: any, fk: any, type?: string | null }> } | null> | null };

export type CmdbRelationCrudFragment = { __typename: 'cmdbRelations', uuid: any, fk: any, type?: string | null };

export type CmdbRelationListFragment = { __typename: 'cmdbRelations', uuid: any, fk: any, type?: string | null };

export type DummyQueryVariables = Exact<{ [key: string]: never; }>;


export type DummyQuery = { __typename: 'query_root' };

export const CmdbFragmentDoc = gql`
    fragment cmdb on cmdb {
  uuid
  __typename
  type
  metaIS_code
  description
  manager
  reference_identifier
  name_of_information_system
}
    `;
export const Cmdb_Cmdb_Relations_NeighbourscountFragmentDoc = gql`
    fragment cmdb_cmdb_relations_neighbourscount on cmdbRelationsNeighbourscounts {
  AS
  __typename
  InfraSluzba
  KRIS
  Kontrakt
  OLA_Kontrakt
  PO
  Projekt
}
    `;
export const CmdbCrudFragmentDoc = gql`
    fragment cmdbCrud on cmdb {
  ...cmdb
  cmdb_relations_neighbourscount {
    ...cmdb_cmdb_relations_neighbourscount
  }
}
    ${CmdbFragmentDoc}
${Cmdb_Cmdb_Relations_NeighbourscountFragmentDoc}`;
export const CmdbListFragmentDoc = gql`
    fragment cmdbList on cmdb {
  ...cmdb
}
    ${CmdbFragmentDoc}`;
export const CmdbRelationFragmentDoc = gql`
    fragment cmdbRelation on cmdbRelations {
  uuid
  fk
  __typename
  type
}
    `;
export const CmdbRelationCrudFragmentDoc = gql`
    fragment cmdbRelationCrud on cmdbRelations {
  ...cmdbRelation
}
    ${CmdbRelationFragmentDoc}`;
export const CmdbRelationListFragmentDoc = gql`
    fragment cmdbRelationList on cmdbRelations {
  ...cmdbRelation
}
    ${CmdbRelationFragmentDoc}`;
export const CmdbDocument = gql`
    query cmdb($distinct_on: [cmdb_select_column!], $limit: Int = 20, $offset: Int = 0, $order_by: [cmdb_order_by!], $where: cmdb_bool_exp) {
  cmdb(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...cmdbList
  }
}
    ${CmdbListFragmentDoc}`;

export function useCmdbQuery(options?: Omit<Urql.UseQueryArgs<CmdbQueryVariables>, 'query'>) {
  return Urql.useQuery<CmdbQuery, CmdbQueryVariables>({ query: CmdbDocument, ...options });
};
export const Cmdb_By_PkDocument = gql`
    query cmdb_by_pk($CmdbId: uuid!, $CmdbRelationsDistinctOn: [cmdbRelations_select_column!], $CmdbRelationsLimit: Int = 20, $CmdbRelationsOffset: Int = 0, $CmdbRelationsOrderBy: [cmdbRelations_order_by!], $CmdbRelationsWhere: cmdbRelations_bool_exp) {
  cmdb_by_pk(uuid: $CmdbId) {
    ...cmdbCrud
  }
  cmdbRelations(
    distinct_on: $CmdbRelationsDistinctOn
    limit: $CmdbRelationsLimit
    offset: $CmdbRelationsOffset
    order_by: $CmdbRelationsOrderBy
    where: $CmdbRelationsWhere
  ) {
    ...cmdbRelation
  }
}
    ${CmdbCrudFragmentDoc}
${CmdbRelationFragmentDoc}`;

export function useCmdb_By_PkQuery(options: Omit<Urql.UseQueryArgs<Cmdb_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Cmdb_By_PkQuery, Cmdb_By_PkQueryVariables>({ query: Cmdb_By_PkDocument, ...options });
};
export const Delete_CmdbDocument = gql`
    mutation delete_cmdb($where: cmdb_bool_exp!) {
  delete_cmdb(where: $where) {
    returning {
      ...cmdbCrud
    }
    affected_rows
  }
}
    ${CmdbCrudFragmentDoc}`;

export function useDelete_CmdbMutation() {
  return Urql.useMutation<Delete_CmdbMutation, Delete_CmdbMutationVariables>(Delete_CmdbDocument);
};
export const Delete_Cmdb_By_PkDocument = gql`
    mutation delete_cmdb_by_pk($uuid: uuid!) {
  delete_cmdb_by_pk(uuid: $uuid) {
    ...cmdbCrud
  }
}
    ${CmdbCrudFragmentDoc}`;

export function useDelete_Cmdb_By_PkMutation() {
  return Urql.useMutation<Delete_Cmdb_By_PkMutation, Delete_Cmdb_By_PkMutationVariables>(Delete_Cmdb_By_PkDocument);
};
export const Insert_CmdbDocument = gql`
    mutation insert_cmdb($cmdb: [cmdb_insert_input!]!, $on_conflict: cmdb_on_conflict) {
  insert_cmdb(objects: $cmdb, on_conflict: $on_conflict) {
    returning {
      ...cmdbCrud
    }
    affected_rows
  }
}
    ${CmdbCrudFragmentDoc}`;

export function useInsert_CmdbMutation() {
  return Urql.useMutation<Insert_CmdbMutation, Insert_CmdbMutationVariables>(Insert_CmdbDocument);
};
export const Insert_Cmdb_OneDocument = gql`
    mutation insert_cmdb_one($cmdb: cmdb_insert_input!, $on_conflict: cmdb_on_conflict) {
  insert_cmdb_one(object: $cmdb, on_conflict: $on_conflict) {
    ...cmdbCrud
  }
}
    ${CmdbCrudFragmentDoc}`;

export function useInsert_Cmdb_OneMutation() {
  return Urql.useMutation<Insert_Cmdb_OneMutation, Insert_Cmdb_OneMutationVariables>(Insert_Cmdb_OneDocument);
};
export const Update_CmdbDocument = gql`
    mutation update_cmdb($cmdb: cmdb_set_input, $where: cmdb_bool_exp!) {
  update_cmdb(_set: $cmdb, where: $where) {
    returning {
      ...cmdbCrud
    }
    affected_rows
  }
}
    ${CmdbCrudFragmentDoc}`;

export function useUpdate_CmdbMutation() {
  return Urql.useMutation<Update_CmdbMutation, Update_CmdbMutationVariables>(Update_CmdbDocument);
};
export const Update_Cmdb_By_PkDocument = gql`
    mutation update_cmdb_by_pk($cmdb: cmdb_set_input, $pk_columns: cmdb_pk_columns_input!) {
  update_cmdb_by_pk(_set: $cmdb, pk_columns: $pk_columns) {
    ...cmdbCrud
  }
}
    ${CmdbCrudFragmentDoc}`;

export function useUpdate_Cmdb_By_PkMutation() {
  return Urql.useMutation<Update_Cmdb_By_PkMutation, Update_Cmdb_By_PkMutationVariables>(Update_Cmdb_By_PkDocument);
};
export const Update_Cmdb_ManyDocument = gql`
    mutation update_cmdb_many($updates: [cmdb_updates!]!) {
  update_cmdb_many(updates: $updates) {
    returning {
      ...cmdbCrud
    }
    affected_rows
  }
}
    ${CmdbCrudFragmentDoc}`;

export function useUpdate_Cmdb_ManyMutation() {
  return Urql.useMutation<Update_Cmdb_ManyMutation, Update_Cmdb_ManyMutationVariables>(Update_Cmdb_ManyDocument);
};
export const CmdbRelationDocument = gql`
    query cmdbRelation($CmdbRelationsId: uuid!) {
  cmdbRelation(uuid: $CmdbRelationsId) {
    ...cmdbRelationCrud
  }
}
    ${CmdbRelationCrudFragmentDoc}`;

export function useCmdbRelationQuery(options: Omit<Urql.UseQueryArgs<CmdbRelationQueryVariables>, 'query'>) {
  return Urql.useQuery<CmdbRelationQuery, CmdbRelationQueryVariables>({ query: CmdbRelationDocument, ...options });
};
export const CmdbRelationsDocument = gql`
    query cmdbRelations($distinct_on: [cmdbRelations_select_column!], $limit: Int = 20, $offset: Int = 0, $order_by: [cmdbRelations_order_by!], $where: cmdbRelations_bool_exp) {
  cmdbRelations(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...cmdbRelationList
  }
}
    ${CmdbRelationListFragmentDoc}`;

export function useCmdbRelationsQuery(options?: Omit<Urql.UseQueryArgs<CmdbRelationsQueryVariables>, 'query'>) {
  return Urql.useQuery<CmdbRelationsQuery, CmdbRelationsQueryVariables>({ query: CmdbRelationsDocument, ...options });
};
export const DeleteCmdbRelationDocument = gql`
    mutation deleteCmdbRelation($uuid: uuid!) {
  deleteCmdbRelation(uuid: $uuid) {
    ...cmdbRelationCrud
  }
}
    ${CmdbRelationCrudFragmentDoc}`;

export function useDeleteCmdbRelationMutation() {
  return Urql.useMutation<DeleteCmdbRelationMutation, DeleteCmdbRelationMutationVariables>(DeleteCmdbRelationDocument);
};
export const DeleteCmdbRelationsDocument = gql`
    mutation deleteCmdbRelations($where: cmdbRelations_bool_exp!) {
  deleteCmdbRelations(where: $where) {
    returning {
      ...cmdbRelationCrud
    }
    affected_rows
  }
}
    ${CmdbRelationCrudFragmentDoc}`;

export function useDeleteCmdbRelationsMutation() {
  return Urql.useMutation<DeleteCmdbRelationsMutation, DeleteCmdbRelationsMutationVariables>(DeleteCmdbRelationsDocument);
};
export const InsertCmdbRelationDocument = gql`
    mutation insertCmdbRelation($cmdbRelations: cmdbRelations_insert_input!, $on_conflict: cmdbRelations_on_conflict) {
  insertCmdbRelation(object: $cmdbRelations, on_conflict: $on_conflict) {
    ...cmdbRelationCrud
  }
}
    ${CmdbRelationCrudFragmentDoc}`;

export function useInsertCmdbRelationMutation() {
  return Urql.useMutation<InsertCmdbRelationMutation, InsertCmdbRelationMutationVariables>(InsertCmdbRelationDocument);
};
export const InsertCmdbRelationsDocument = gql`
    mutation insertCmdbRelations($cmdbRelations: [cmdbRelations_insert_input!]!, $on_conflict: cmdbRelations_on_conflict) {
  insertCmdbRelations(objects: $cmdbRelations, on_conflict: $on_conflict) {
    returning {
      ...cmdbRelationCrud
    }
    affected_rows
  }
}
    ${CmdbRelationCrudFragmentDoc}`;

export function useInsertCmdbRelationsMutation() {
  return Urql.useMutation<InsertCmdbRelationsMutation, InsertCmdbRelationsMutationVariables>(InsertCmdbRelationsDocument);
};
export const UpdateCmdbRelationDocument = gql`
    mutation updateCmdbRelation($cmdbRelations: cmdbRelations_set_input, $pk_columns: cmdbRelations_pk_columns_input!) {
  updateCmdbRelation(_set: $cmdbRelations, pk_columns: $pk_columns) {
    ...cmdbRelationCrud
  }
}
    ${CmdbRelationCrudFragmentDoc}`;

export function useUpdateCmdbRelationMutation() {
  return Urql.useMutation<UpdateCmdbRelationMutation, UpdateCmdbRelationMutationVariables>(UpdateCmdbRelationDocument);
};
export const UpdateCmdbRelationsDocument = gql`
    mutation updateCmdbRelations($cmdbRelations: cmdbRelations_set_input, $where: cmdbRelations_bool_exp!) {
  updateCmdbRelations(_set: $cmdbRelations, where: $where) {
    returning {
      ...cmdbRelationCrud
    }
    affected_rows
  }
}
    ${CmdbRelationCrudFragmentDoc}`;

export function useUpdateCmdbRelationsMutation() {
  return Urql.useMutation<UpdateCmdbRelationsMutation, UpdateCmdbRelationsMutationVariables>(UpdateCmdbRelationsDocument);
};
export const UpdateManyCmdbRelationsDocument = gql`
    mutation updateManyCmdbRelations($updates: [cmdbRelations_updates!]!) {
  updateManyCmdbRelations(updates: $updates) {
    returning {
      ...cmdbRelationCrud
    }
    affected_rows
  }
}
    ${CmdbRelationCrudFragmentDoc}`;

export function useUpdateManyCmdbRelationsMutation() {
  return Urql.useMutation<UpdateManyCmdbRelationsMutation, UpdateManyCmdbRelationsMutationVariables>(UpdateManyCmdbRelationsDocument);
};
export const DummyDocument = gql`
    query dummy {
  __typename
}
    `;

export function useDummyQuery(options?: Omit<Urql.UseQueryArgs<DummyQueryVariables>, 'query'>) {
  return Urql.useQuery<DummyQuery, DummyQueryVariables>({ query: DummyDocument, ...options });
};