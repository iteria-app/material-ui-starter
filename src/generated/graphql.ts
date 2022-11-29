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
  /** An object relationship */
  organization?: Maybe<Organizations>;
  organizationId?: Maybe<Scalars['uuid']>;
  phone?: Maybe<Scalars['String']>;
  signedLogoImgPath?: Maybe<GetUrlReturn>;
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
  organization?: InputMaybe<Organizations_Bool_Exp>;
  organizationId?: InputMaybe<Uuid_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
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
  organization?: InputMaybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  phone?: InputMaybe<Scalars['String']>;
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
  organization?: InputMaybe<Organizations_Order_By>;
  organizationId?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
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
  sales?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "desh_sales" */
export type Desh_Sales_Avg_Order_By = {
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
  sales?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "desh_sales" */
export type Desh_Sales_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dash_id?: InputMaybe<Scalars['uuid']>;
  desh?: InputMaybe<Desh_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  sales?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Desh_Sales_Max_Fields = {
  __typename?: 'desh_sales_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dash_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  sales?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "desh_sales" */
export type Desh_Sales_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dash_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Desh_Sales_Min_Fields = {
  __typename?: 'desh_sales_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dash_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  sales?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "desh_sales" */
export type Desh_Sales_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  dash_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
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
  Sales = 'sales',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "desh_sales" */
export type Desh_Sales_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dash_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  sales?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Desh_Sales_Stddev_Fields = {
  __typename?: 'desh_sales_stddev_fields';
  sales?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "desh_sales" */
export type Desh_Sales_Stddev_Order_By = {
  sales?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Desh_Sales_Stddev_Pop_Fields = {
  __typename?: 'desh_sales_stddev_pop_fields';
  sales?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "desh_sales" */
export type Desh_Sales_Stddev_Pop_Order_By = {
  sales?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Desh_Sales_Stddev_Samp_Fields = {
  __typename?: 'desh_sales_stddev_samp_fields';
  sales?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "desh_sales" */
export type Desh_Sales_Stddev_Samp_Order_By = {
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
  sales?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Desh_Sales_Sum_Fields = {
  __typename?: 'desh_sales_sum_fields';
  sales?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "desh_sales" */
export type Desh_Sales_Sum_Order_By = {
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
  Sales = 'sales',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Desh_Sales_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Desh_Sales_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Desh_Sales_Set_Input>;
  where: Desh_Sales_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Desh_Sales_Var_Pop_Fields = {
  __typename?: 'desh_sales_var_pop_fields';
  sales?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "desh_sales" */
export type Desh_Sales_Var_Pop_Order_By = {
  sales?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Desh_Sales_Var_Samp_Fields = {
  __typename?: 'desh_sales_var_samp_fields';
  sales?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "desh_sales" */
export type Desh_Sales_Var_Samp_Order_By = {
  sales?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Desh_Sales_Variance_Fields = {
  __typename?: 'desh_sales_variance_fields';
  sales?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "desh_sales" */
export type Desh_Sales_Variance_Order_By = {
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
  A10 = 'a10',
  A2 = 'a2',
  A3 = 'a3',
  A4 = 'a4',
  A5 = 'a5',
  A6 = 'a6',
  A7 = 'a7',
  A8 = 'a8',
  A9 = 'a9'
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
  where: Enum_Test_Types_Bool_Exp;
};

/** columns and relationships of "events" */
export type Events = {
  __typename?: 'events';
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
  description?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  startAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
  __typename?: 'events_min_fields';
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
  /** delete single row from the table: "customers" */
  deleteCustomer?: Maybe<Customers>;
  /** delete data from the table: "customers" */
  deleteCustomers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "events" */
  deleteEvent?: Maybe<Events>;
  /** delete data from the table: "events" */
  deleteEvents?: Maybe<Events_Mutation_Response>;
  /** delete single row from the table: "orders" */
  deleteOrder?: Maybe<Orders>;
  /** delete single row from the table: "order_items" */
  deleteOrderItem?: Maybe<OrderItems>;
  /** delete data from the table: "order_items" */
  deleteOrderItems?: Maybe<OrderItems_Mutation_Response>;
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
  /** delete single row from the table: "test_x" */
  deleteTestX?: Maybe<TestX>;
  /** delete data from the table: "test_x" */
  deleteTestXes?: Maybe<TestX_Mutation_Response>;
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "customer_types" */
  delete_customer_types?: Maybe<Customer_Types_Mutation_Response>;
  /** delete single row from the table: "customer_types" */
  delete_customer_types_by_pk?: Maybe<Customer_Types>;
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
  /** delete data from the table: "map_points" */
  delete_mapPoints?: Maybe<MapPoints_Mutation_Response>;
  /** delete single row from the table: "map_points" */
  delete_mapPoints_by_pk?: Maybe<MapPoints>;
  /** delete data from the table: "organization_partnership_levels" */
  delete_organization_partnership_levels?: Maybe<Organization_Partnership_Levels_Mutation_Response>;
  /** delete single row from the table: "organization_partnership_levels" */
  delete_organization_partnership_levels_by_pk?: Maybe<Organization_Partnership_Levels>;
  /** delete data from the table: "organization_types" */
  delete_organization_types?: Maybe<Organization_Types_Mutation_Response>;
  /** delete single row from the table: "organization_types" */
  delete_organization_types_by_pk?: Maybe<Organization_Types>;
  /** delete data from the table: "product_availability" */
  delete_product_availability?: Maybe<Product_Availability_Mutation_Response>;
  /** delete single row from the table: "product_availability" */
  delete_product_availability_by_pk?: Maybe<Product_Availability>;
  /** delete data from the table: "status_types" */
  delete_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** delete single row from the table: "status_types" */
  delete_status_types_by_pk?: Maybe<Status_Types>;
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
  /** insert a single row into the table: "bus_stops" */
  insertBusStop?: Maybe<BusStops>;
  /** insert a single row into the table: "bus_stop_departures" */
  insertBusStopDeparture?: Maybe<BusStopDepartures>;
  /** insert data into the table: "bus_stop_departures" */
  insertBusStopDepartures?: Maybe<BusStopDepartures_Mutation_Response>;
  /** insert data into the table: "bus_stops" */
  insertBusStops?: Maybe<BusStops_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insertCustomer?: Maybe<Customers>;
  /** insert data into the table: "customers" */
  insertCustomers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "events" */
  insertEvent?: Maybe<Events>;
  /** insert data into the table: "events" */
  insertEvents?: Maybe<Events_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insertOrder?: Maybe<Orders>;
  /** insert a single row into the table: "order_items" */
  insertOrderitem?: Maybe<OrderItems>;
  /** insert data into the table: "order_items" */
  insertOrderitems?: Maybe<OrderItems_Mutation_Response>;
  /** insert data into the table: "orders" */
  insertOrders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "organizations" */
  insertOrganization?: Maybe<Organizations>;
  /** insert data into the table: "organizations" */
  insertOrganizations?: Maybe<Organizations_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insertProduct?: Maybe<Products>;
  /** insert data into the table: "products" */
  insertProducts?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "test_x" */
  insertTestX?: Maybe<TestX>;
  /** insert data into the table: "test_x" */
  insertTestXes?: Maybe<TestX_Mutation_Response>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "customer_types" */
  insert_customer_types?: Maybe<Customer_Types_Mutation_Response>;
  /** insert a single row into the table: "customer_types" */
  insert_customer_types_one?: Maybe<Customer_Types>;
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
  /** insert data into the table: "map_points" */
  insert_mapPoints?: Maybe<MapPoints_Mutation_Response>;
  /** insert a single row into the table: "map_points" */
  insert_mapPoints_one?: Maybe<MapPoints>;
  /** insert data into the table: "organization_partnership_levels" */
  insert_organization_partnership_levels?: Maybe<Organization_Partnership_Levels_Mutation_Response>;
  /** insert a single row into the table: "organization_partnership_levels" */
  insert_organization_partnership_levels_one?: Maybe<Organization_Partnership_Levels>;
  /** insert data into the table: "organization_types" */
  insert_organization_types?: Maybe<Organization_Types_Mutation_Response>;
  /** insert a single row into the table: "organization_types" */
  insert_organization_types_one?: Maybe<Organization_Types>;
  /** insert data into the table: "product_availability" */
  insert_product_availability?: Maybe<Product_Availability_Mutation_Response>;
  /** insert a single row into the table: "product_availability" */
  insert_product_availability_one?: Maybe<Product_Availability>;
  /** insert data into the table: "status_types" */
  insert_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** insert a single row into the table: "status_types" */
  insert_status_types_one?: Maybe<Status_Types>;
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
  /** update single row of the table: "bus_stops" */
  updateBusStop?: Maybe<BusStops>;
  /** update single row of the table: "bus_stop_departures" */
  updateBusStopDeparture?: Maybe<BusStopDepartures>;
  /** update data of the table: "bus_stop_departures" */
  updateBusStopDepartures?: Maybe<BusStopDepartures_Mutation_Response>;
  /** update data of the table: "bus_stops" */
  updateBusStops?: Maybe<BusStops_Mutation_Response>;
  /** update single row of the table: "customers" */
  updateCustomer?: Maybe<Customers>;
  /** update data of the table: "customers" */
  updateCustomers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "events" */
  updateEvent?: Maybe<Events>;
  /** update data of the table: "events" */
  updateEvents?: Maybe<Events_Mutation_Response>;
  /** update single row of the table: "orders" */
  updateOrder?: Maybe<Orders>;
  /** update single row of the table: "order_items" */
  updateOrderItem?: Maybe<OrderItems>;
  /** update data of the table: "order_items" */
  updateOrderItems?: Maybe<OrderItems_Mutation_Response>;
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
  /** update single row of the table: "test_x" */
  updateTestX?: Maybe<TestX>;
  /** update data of the table: "test_x" */
  updateTestXes?: Maybe<TestX_Mutation_Response>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update multiples rows of table: "bus_stop_departures" */
  update_busStopDepartures_many?: Maybe<Array<Maybe<BusStopDepartures_Mutation_Response>>>;
  /** update multiples rows of table: "bus_stops" */
  update_busStops_many?: Maybe<Array<Maybe<BusStops_Mutation_Response>>>;
  /** update data of the table: "customer_types" */
  update_customer_types?: Maybe<Customer_Types_Mutation_Response>;
  /** update single row of the table: "customer_types" */
  update_customer_types_by_pk?: Maybe<Customer_Types>;
  /** update multiples rows of table: "customer_types" */
  update_customer_types_many?: Maybe<Array<Maybe<Customer_Types_Mutation_Response>>>;
  /** update multiples rows of table: "customers" */
  update_customers_many?: Maybe<Array<Maybe<Customers_Mutation_Response>>>;
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
  /** update data of the table: "map_points" */
  update_mapPoints?: Maybe<MapPoints_Mutation_Response>;
  /** update single row of the table: "map_points" */
  update_mapPoints_by_pk?: Maybe<MapPoints>;
  /** update multiples rows of table: "map_points" */
  update_mapPoints_many?: Maybe<Array<Maybe<MapPoints_Mutation_Response>>>;
  /** update multiples rows of table: "order_items" */
  update_orderItems_many?: Maybe<Array<Maybe<OrderItems_Mutation_Response>>>;
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
  /** update multiples rows of table: "organizations" */
  update_organizations_many?: Maybe<Array<Maybe<Organizations_Mutation_Response>>>;
  /** update data of the table: "product_availability" */
  update_product_availability?: Maybe<Product_Availability_Mutation_Response>;
  /** update single row of the table: "product_availability" */
  update_product_availability_by_pk?: Maybe<Product_Availability>;
  /** update multiples rows of table: "product_availability" */
  update_product_availability_many?: Maybe<Array<Maybe<Product_Availability_Mutation_Response>>>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
  /** update data of the table: "status_types" */
  update_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** update single row of the table: "status_types" */
  update_status_types_by_pk?: Maybe<Status_Types>;
  /** update multiples rows of table: "status_types" */
  update_status_types_many?: Maybe<Array<Maybe<Status_Types_Mutation_Response>>>;
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
export type Mutation_RootDeleteOrderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOrderItemArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOrderItemsArgs = {
  where: OrderItems_Bool_Exp;
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
export type Mutation_RootDeleteTestXArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTestXesArgs = {
  where: TestX_Bool_Exp;
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
export type Mutation_RootDelete_Customer_TypesArgs = {
  where: Customer_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customer_Types_By_PkArgs = {
  type: Scalars['String'];
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
export type Mutation_RootDelete_MapPointsArgs = {
  where: MapPoints_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_MapPoints_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootDelete_Product_AvailabilityArgs = {
  where: Product_Availability_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Availability_By_PkArgs = {
  type: Scalars['String'];
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
export type Mutation_RootInsertOrderArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOrderitemArgs = {
  object: OrderItems_Insert_Input;
  on_conflict?: InputMaybe<OrderItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertOrderitemsArgs = {
  objects: Array<OrderItems_Insert_Input>;
  on_conflict?: InputMaybe<OrderItems_On_Conflict>;
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
export type Mutation_RootUpdateOrderArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOrderItemArgs = {
  _inc?: InputMaybe<OrderItems_Inc_Input>;
  _set?: InputMaybe<OrderItems_Set_Input>;
  pk_columns: OrderItems_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOrderItemsArgs = {
  _inc?: InputMaybe<OrderItems_Inc_Input>;
  _set?: InputMaybe<OrderItems_Set_Input>;
  where: OrderItems_Bool_Exp;
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
export type Mutation_RootUpdate_BusStopDepartures_ManyArgs = {
  updates: Array<BusStopDepartures_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BusStops_ManyArgs = {
  updates: Array<BusStops_Updates>;
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
export type Mutation_RootUpdate_OrderItems_ManyArgs = {
  updates: Array<OrderItems_Updates>;
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
export type Mutation_RootUpdate_Organizations_ManyArgs = {
  updates: Array<Organizations_Updates>;
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

/** List of items */
export type OrderItems = {
  __typename?: 'orderItems';
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
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "order_items" */
export type OrderItems_Aggregate = {
  __typename?: 'orderItems_aggregate';
  aggregate?: Maybe<OrderItems_Aggregate_Fields>;
  nodes: Array<OrderItems>;
};

export type OrderItems_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<OrderItems_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<OrderItems_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<OrderItems_Aggregate_Bool_Exp_Count>;
};

export type OrderItems_Aggregate_Bool_Exp_Bool_And = {
  arguments: OrderItems_Select_Column_OrderItems_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrderItems_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type OrderItems_Aggregate_Bool_Exp_Bool_Or = {
  arguments: OrderItems_Select_Column_OrderItems_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrderItems_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type OrderItems_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<OrderItems_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrderItems_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order_items" */
export type OrderItems_Aggregate_Fields = {
  __typename?: 'orderItems_aggregate_fields';
  avg?: Maybe<OrderItems_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<OrderItems_Max_Fields>;
  min?: Maybe<OrderItems_Min_Fields>;
  stddev?: Maybe<OrderItems_Stddev_Fields>;
  stddev_pop?: Maybe<OrderItems_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<OrderItems_Stddev_Samp_Fields>;
  sum?: Maybe<OrderItems_Sum_Fields>;
  var_pop?: Maybe<OrderItems_Var_Pop_Fields>;
  var_samp?: Maybe<OrderItems_Var_Samp_Fields>;
  variance?: Maybe<OrderItems_Variance_Fields>;
};


/** aggregate fields of "order_items" */
export type OrderItems_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<OrderItems_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_items" */
export type OrderItems_Aggregate_Order_By = {
  avg?: InputMaybe<OrderItems_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<OrderItems_Max_Order_By>;
  min?: InputMaybe<OrderItems_Min_Order_By>;
  stddev?: InputMaybe<OrderItems_Stddev_Order_By>;
  stddev_pop?: InputMaybe<OrderItems_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<OrderItems_Stddev_Samp_Order_By>;
  sum?: InputMaybe<OrderItems_Sum_Order_By>;
  var_pop?: InputMaybe<OrderItems_Var_Pop_Order_By>;
  var_samp?: InputMaybe<OrderItems_Var_Samp_Order_By>;
  variance?: InputMaybe<OrderItems_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_items" */
export type OrderItems_Arr_Rel_Insert_Input = {
  data: Array<OrderItems_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<OrderItems_On_Conflict>;
};

/** aggregate avg on columns */
export type OrderItems_Avg_Fields = {
  __typename?: 'orderItems_avg_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_items" */
export type OrderItems_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_items". All fields are combined with a logical 'AND'. */
export type OrderItems_Bool_Exp = {
  _and?: InputMaybe<Array<OrderItems_Bool_Exp>>;
  _not?: InputMaybe<OrderItems_Bool_Exp>;
  _or?: InputMaybe<Array<OrderItems_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  orders_id?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Money_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_items" */
export enum OrderItems_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderItemsPkey = 'order_items_pkey'
}

/** input type for incrementing numeric columns in table "order_items" */
export type OrderItems_Inc_Input = {
  price?: InputMaybe<Scalars['money']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_items" */
export type OrderItems_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  orders_id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['money']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type OrderItems_Max_Fields = {
  __typename?: 'orderItems_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  orders_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  product_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "order_items" */
export type OrderItems_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orders_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type OrderItems_Min_Fields = {
  __typename?: 'orderItems_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  orders_id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  product_id?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "order_items" */
export type OrderItems_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orders_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_items" */
export type OrderItems_Mutation_Response = {
  __typename?: 'orderItems_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrderItems>;
};

/** on_conflict condition type for table "order_items" */
export type OrderItems_On_Conflict = {
  constraint: OrderItems_Constraint;
  update_columns?: Array<OrderItems_Update_Column>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};

/** Ordering options when selecting data from "order_items". */
export type OrderItems_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  orders_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_items */
export type OrderItems_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "order_items" */
export enum OrderItems_Select_Column {
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
  UpdatedAt = 'updated_at'
}

/** select "orderItems_aggregate_bool_exp_bool_and_arguments_columns" columns of table "order_items" */
export enum OrderItems_Select_Column_OrderItems_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
}

/** select "orderItems_aggregate_bool_exp_bool_or_arguments_columns" columns of table "order_items" */
export enum OrderItems_Select_Column_OrderItems_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDeleted = 'is_deleted'
}

/** input type for updating data in table "order_items" */
export type OrderItems_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  orders_id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['money']>;
  product_id?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type OrderItems_Stddev_Fields = {
  __typename?: 'orderItems_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_items" */
export type OrderItems_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type OrderItems_Stddev_Pop_Fields = {
  __typename?: 'orderItems_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_items" */
export type OrderItems_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type OrderItems_Stddev_Samp_Fields = {
  __typename?: 'orderItems_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_items" */
export type OrderItems_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderItems" */
export type OrderItems_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: OrderItems_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type OrderItems_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  orders_id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['money']>;
  product_id?: InputMaybe<Scalars['uuid']>;
  quantity?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type OrderItems_Sum_Fields = {
  __typename?: 'orderItems_sum_fields';
  price?: Maybe<Scalars['money']>;
  quantity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_items" */
export type OrderItems_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "order_items" */
export enum OrderItems_Update_Column {
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
  UpdatedAt = 'updated_at'
}

export type OrderItems_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OrderItems_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrderItems_Set_Input>;
  where: OrderItems_Bool_Exp;
};

/** aggregate var_pop on columns */
export type OrderItems_Var_Pop_Fields = {
  __typename?: 'orderItems_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_items" */
export type OrderItems_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type OrderItems_Var_Samp_Fields = {
  __typename?: 'orderItems_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_items" */
export type OrderItems_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type OrderItems_Variance_Fields = {
  __typename?: 'orderItems_variance_fields';
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_items" */
export type OrderItems_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
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
  order_items: Array<OrderItems>;
  /** An aggregate relationship */
  order_items_aggregate: OrderItems_Aggregate;
  order_status?: Maybe<Status_Types_Enum>;
  shipped_date?: Maybe<Scalars['date']>;
  /** An object relationship */
  status_type?: Maybe<Status_Types>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


/** List of orders */
export type OrdersOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


/** List of orders */
export type OrdersOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
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
  order_items?: InputMaybe<OrderItems_Bool_Exp>;
  order_items_aggregate?: InputMaybe<OrderItems_Aggregate_Bool_Exp>;
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
  order_items?: InputMaybe<OrderItems_Arr_Rel_Insert_Input>;
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
  order_items_aggregate?: InputMaybe<OrderItems_Aggregate_Order_By>;
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
  type: Scalars['String'];
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
  type?: InputMaybe<String_Comparison_Exp>;
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
  type?: InputMaybe<Scalars['String']>;
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
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "organizations" */
export type Organizations_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pratnership_level?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
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
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "organizations" */
export type Organizations_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  crn?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pratnership_level?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
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
  type?: InputMaybe<Scalars['String']>;
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
  type?: InputMaybe<Scalars['String']>;
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
  ProductAvailabilityPkey = 'product_availability_pkey'
}

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
  where: Product_Availability_Bool_Exp;
};

/** Types of products */
export type Products = {
  __typename?: 'products';
  availability?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  order_items: Array<OrderItems>;
  /** An aggregate relationship */
  order_items_aggregate: OrderItems_Aggregate;
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
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


/** Types of products */
export type ProductsOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
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
  availability?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order_items?: InputMaybe<OrderItems_Bool_Exp>;
  order_items_aggregate?: InputMaybe<OrderItems_Aggregate_Bool_Exp>;
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
  availability?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order_items?: InputMaybe<OrderItems_Arr_Rel_Insert_Input>;
  price?: InputMaybe<Scalars['money']>;
  product_availability?: InputMaybe<Product_Availability_Obj_Rel_Insert_Input>;
  quantity?: InputMaybe<Scalars['Int']>;
  thumbnailImgPath?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  availability?: Maybe<Scalars['String']>;
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
  availability?: InputMaybe<Order_By>;
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
  availability?: Maybe<Scalars['String']>;
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
  availability?: InputMaybe<Order_By>;
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
  order_items_aggregate?: InputMaybe<OrderItems_Aggregate_Order_By>;
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
  availability?: InputMaybe<Scalars['String']>;
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
  availability?: InputMaybe<Scalars['String']>;
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
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
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
  listParts?: Maybe<Part>;
  /** fetch data from the table: "map_points" using primary key columns */
  mapPoint?: Maybe<MapPoints>;
  /** fetch data from the table: "map_points" */
  mapPoints: Array<MapPoints>;
  /** fetch aggregated fields from the table: "map_points" */
  mapPointsAggregate: MapPoints_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  order?: Maybe<Orders>;
  /** fetch data from the table: "order_items" using primary key columns */
  orderItem?: Maybe<OrderItems>;
  /** fetch data from the table: "order_items" */
  orderItems: Array<OrderItems>;
  /** fetch aggregated fields from the table: "order_items" */
  orderItemsAggregate: OrderItems_Aggregate;
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
  part?: Maybe<Part>;
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
  /** fetch data from the table: "status_types" */
  status_types: Array<Status_Types>;
  /** fetch aggregated fields from the table: "status_types" */
  status_types_aggregate: Status_Types_Aggregate;
  /** fetch data from the table: "status_types" using primary key columns */
  status_types_by_pk?: Maybe<Status_Types>;
  /** fetch data from the table: "test_x" using primary key columns */
  testX?: Maybe<TestX>;
  /** fetch data from the table: "test_x" */
  testXes: Array<TestX>;
  /** fetch aggregated fields from the table: "test_x" */
  testXesAggregate: TestX_Aggregate;
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


export type Query_RootOrderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrderItemArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrderItemsArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


export type Query_RootOrderItemsAggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
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
  where: Status_Types_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
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
  /** fetch data from the table: "map_points" using primary key columns */
  mapPoint?: Maybe<MapPoints>;
  /** fetch data from the table: "map_points" */
  mapPoints: Array<MapPoints>;
  /** fetch aggregated fields from the table: "map_points" */
  mapPointsAggregate: MapPoints_Aggregate;
  /** fetch data from the table in a streaming manner: "map_points" */
  mapPoints_stream: Array<MapPoints>;
  /** fetch data from the table: "orders" using primary key columns */
  order?: Maybe<Orders>;
  /** fetch data from the table: "order_items" using primary key columns */
  orderItem?: Maybe<OrderItems>;
  /** fetch data from the table: "order_items" */
  orderItems: Array<OrderItems>;
  /** fetch aggregated fields from the table: "order_items" */
  orderItemsAggregate: OrderItems_Aggregate;
  /** fetch data from the table in a streaming manner: "order_items" */
  orderItemsStream: Array<OrderItems>;
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
  /** fetch data from the table in a streaming manner: "organizations" */
  organizationsStream: Array<Organizations>;
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
  /** fetch data from the table: "status_types" */
  status_types: Array<Status_Types>;
  /** fetch aggregated fields from the table: "status_types" */
  status_types_aggregate: Status_Types_Aggregate;
  /** fetch data from the table: "status_types" using primary key columns */
  status_types_by_pk?: Maybe<Status_Types>;
  /** fetch data from the table in a streaming manner: "status_types" */
  status_types_stream: Array<Status_Types>;
  /** fetch data from the table: "test_x" using primary key columns */
  testX?: Maybe<TestX>;
  /** fetch data from the table in a streaming manner: "test_x" */
  testX_stream: Array<TestX>;
  /** fetch data from the table: "test_x" */
  testXes: Array<TestX>;
  /** fetch aggregated fields from the table: "test_x" */
  testXesAggregate: TestX_Aggregate;
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


export type Subscription_RootOrderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrderItemArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrderItemsArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


export type Subscription_RootOrderItemsAggregateArgs = {
  distinct_on?: InputMaybe<Array<OrderItems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrderItems_Order_By>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
};


export type Subscription_RootOrderItemsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<OrderItems_Stream_Cursor_Input>>;
  where?: InputMaybe<OrderItems_Bool_Exp>;
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


export type Subscription_RootOrganizationsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Organizations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
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
  where: TestX_Bool_Exp;
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

export type DummyQueryVariables = Exact<{ [key: string]: never; }>;


export type DummyQuery = { __typename: 'query_root' };

export type ProductQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ProductQuery = { __typename?: 'query_root', product?: { __typename: 'products', id: any, name?: string | null | undefined, availability?: string | null | undefined, price?: any | null | undefined, quantity: number } | null | undefined };

export type ProductsQueryVariables = Exact<{
  distinct_on?: Maybe<Array<Products_Select_Column> | Products_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By> | Products_Order_By>;
  where?: Maybe<Products_Bool_Exp>;
}>;


export type ProductsQuery = { __typename?: 'query_root', products: Array<{ __typename: 'products', id: any, name?: string | null | undefined, availability?: string | null | undefined, price?: any | null | undefined, quantity: number, signedThumbnailImgPath?: { __typename: 'GetUrlReturn', url: string } | null | undefined }> };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteProductMutation = { __typename?: 'mutation_root', deleteProduct?: { __typename: 'products', id: any, name?: string | null | undefined, availability?: string | null | undefined, price?: any | null | undefined, quantity: number } | null | undefined };

export type DeleteProductsMutationVariables = Exact<{
  where: Products_Bool_Exp;
}>;


export type DeleteProductsMutation = { __typename?: 'mutation_root', deleteProducts?: { __typename?: 'products_mutation_response', affected_rows: number, returning: Array<{ __typename: 'products', id: any, name?: string | null | undefined, availability?: string | null | undefined, price?: any | null | undefined, quantity: number }> } | null | undefined };

export type InsertProductMutationVariables = Exact<{
  products: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
}>;


export type InsertProductMutation = { __typename?: 'mutation_root', insertProduct?: { __typename: 'products', id: any, name?: string | null | undefined, availability?: string | null | undefined, price?: any | null | undefined, quantity: number } | null | undefined };

export type InsertProductsMutationVariables = Exact<{
  products: Array<Products_Insert_Input> | Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
}>;


export type InsertProductsMutation = { __typename?: 'mutation_root', insertProducts?: { __typename?: 'products_mutation_response', affected_rows: number, returning: Array<{ __typename: 'products', id: any, name?: string | null | undefined, availability?: string | null | undefined, price?: any | null | undefined, quantity: number }> } | null | undefined };

export type UpdateProductMutationVariables = Exact<{
  _inc?: Maybe<Products_Inc_Input>;
  products?: Maybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
}>;


export type UpdateProductMutation = { __typename?: 'mutation_root', updateProduct?: { __typename: 'products', id: any, name?: string | null | undefined, availability?: string | null | undefined, price?: any | null | undefined, quantity: number } | null | undefined };

export type UpdateProductsMutationVariables = Exact<{
  _inc?: Maybe<Products_Inc_Input>;
  products?: Maybe<Products_Set_Input>;
  where: Products_Bool_Exp;
}>;


export type UpdateProductsMutation = { __typename?: 'mutation_root', updateProducts?: { __typename?: 'products_mutation_response', affected_rows: number, returning: Array<{ __typename: 'products', id: any, name?: string | null | undefined, availability?: string | null | undefined, price?: any | null | undefined, quantity: number }> } | null | undefined };

export type Update_Products_ManyMutationVariables = Exact<{
  updates: Array<Products_Updates> | Products_Updates;
}>;


export type Update_Products_ManyMutation = { __typename?: 'mutation_root', update_products_many?: Array<{ __typename?: 'products_mutation_response', affected_rows: number, returning: Array<{ __typename: 'products', id: any, name?: string | null | undefined, availability?: string | null | undefined, price?: any | null | undefined, quantity: number }> } | null | undefined> | null | undefined };

export type ProductCrudFragment = { __typename: 'products', id: any, name?: string | null | undefined, availability?: string | null | undefined, price?: any | null | undefined, quantity: number };

export type OrderQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type OrderQuery = { __typename?: 'query_root', order?: { __typename: 'orders', id: any, title?: string | null | undefined, order_date?: any | null | undefined, shipped_date?: any | null | undefined, customer?: { __typename: 'customers', firstName?: string | null | undefined, id: any, lastName?: string | null | undefined } | null | undefined } | null | undefined };

export type OrdersQueryVariables = Exact<{
  distinct_on?: Maybe<Array<Orders_Select_Column> | Orders_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By> | Orders_Order_By>;
  where?: Maybe<Orders_Bool_Exp>;
}>;


export type OrdersQuery = { __typename?: 'query_root', orders: Array<{ __typename: 'orders', id: any, title?: string | null | undefined, order_date?: any | null | undefined, shipped_date?: any | null | undefined, order_items: Array<{ __typename: 'orderItems', quantity?: number | null | undefined, id: any, price?: any | null | undefined, product?: { __typename: 'products', name?: string | null | undefined, id: any } | null | undefined }> }> };

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteOrderMutation = { __typename?: 'mutation_root', deleteOrder?: { __typename: 'orders', id: any, title?: string | null | undefined, order_date?: any | null | undefined, shipped_date?: any | null | undefined } | null | undefined };

export type DeleteOrdersMutationVariables = Exact<{
  where: Orders_Bool_Exp;
}>;


export type DeleteOrdersMutation = { __typename?: 'mutation_root', deleteOrders?: { __typename?: 'orders_mutation_response', affected_rows: number, returning: Array<{ __typename: 'orders', id: any, title?: string | null | undefined, order_date?: any | null | undefined, shipped_date?: any | null | undefined }> } | null | undefined };

export type InsertOrderMutationVariables = Exact<{
  orders: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
}>;


export type InsertOrderMutation = { __typename?: 'mutation_root', insertOrder?: { __typename: 'orders', id: any, title?: string | null | undefined, order_date?: any | null | undefined, shipped_date?: any | null | undefined } | null | undefined };

export type InsertOrdersMutationVariables = Exact<{
  orders: Array<Orders_Insert_Input> | Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
}>;


export type InsertOrdersMutation = { __typename?: 'mutation_root', insertOrders?: { __typename?: 'orders_mutation_response', affected_rows: number, returning: Array<{ __typename: 'orders', id: any, title?: string | null | undefined, order_date?: any | null | undefined, shipped_date?: any | null | undefined }> } | null | undefined };

export type UpdateOrderMutationVariables = Exact<{
  orders?: Maybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
}>;


export type UpdateOrderMutation = { __typename?: 'mutation_root', updateOrder?: { __typename: 'orders', id: any, title?: string | null | undefined, order_date?: any | null | undefined, shipped_date?: any | null | undefined } | null | undefined };

export type UpdateOrdersMutationVariables = Exact<{
  orders?: Maybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
}>;


export type UpdateOrdersMutation = { __typename?: 'mutation_root', updateOrders?: { __typename?: 'orders_mutation_response', affected_rows: number, returning: Array<{ __typename: 'orders', id: any, title?: string | null | undefined, order_date?: any | null | undefined, shipped_date?: any | null | undefined }> } | null | undefined };

export type Update_Orders_ManyMutationVariables = Exact<{
  updates: Array<Orders_Updates> | Orders_Updates;
}>;


export type Update_Orders_ManyMutation = { __typename?: 'mutation_root', update_orders_many?: Array<{ __typename?: 'orders_mutation_response', affected_rows: number, returning: Array<{ __typename: 'orders', id: any, title?: string | null | undefined, order_date?: any | null | undefined, shipped_date?: any | null | undefined }> } | null | undefined> | null | undefined };

export type OrderCrudFragment = { __typename: 'orders', id: any, title?: string | null | undefined, order_date?: any | null | undefined, shipped_date?: any | null | undefined };

export type CustomerQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type CustomerQuery = { __typename?: 'query_root', customer?: { __typename: 'customers', id: any, firstName?: string | null | undefined, lastName?: string | null | undefined, phone?: string | null | undefined, vip?: boolean | null | undefined } | null | undefined };

export type CustomersQueryVariables = Exact<{
  distinct_on?: Maybe<Array<Customers_Select_Column> | Customers_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Order_By> | Customers_Order_By>;
  where?: Maybe<Customers_Bool_Exp>;
}>;


export type CustomersQuery = { __typename?: 'query_root', customers: Array<{ __typename: 'customers', id: any, firstName?: string | null | undefined, lastName?: string | null | undefined, phone?: string | null | undefined, vip?: boolean | null | undefined }> };

export type DeleteCustomerMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteCustomerMutation = { __typename?: 'mutation_root', deleteCustomer?: { __typename: 'customers', id: any, firstName?: string | null | undefined, lastName?: string | null | undefined, phone?: string | null | undefined, vip?: boolean | null | undefined } | null | undefined };

export type DeleteCustomersMutationVariables = Exact<{
  where: Customers_Bool_Exp;
}>;


export type DeleteCustomersMutation = { __typename?: 'mutation_root', deleteCustomers?: { __typename?: 'customers_mutation_response', affected_rows: number, returning: Array<{ __typename: 'customers', id: any, firstName?: string | null | undefined, lastName?: string | null | undefined, phone?: string | null | undefined, vip?: boolean | null | undefined }> } | null | undefined };

export type InsertCustomerMutationVariables = Exact<{
  customers: Customers_Insert_Input;
  on_conflict?: Maybe<Customers_On_Conflict>;
}>;


export type InsertCustomerMutation = { __typename?: 'mutation_root', insertCustomer?: { __typename: 'customers', id: any, firstName?: string | null | undefined, lastName?: string | null | undefined, phone?: string | null | undefined, vip?: boolean | null | undefined } | null | undefined };

export type InsertCustomersMutationVariables = Exact<{
  customers: Array<Customers_Insert_Input> | Customers_Insert_Input;
  on_conflict?: Maybe<Customers_On_Conflict>;
}>;


export type InsertCustomersMutation = { __typename?: 'mutation_root', insertCustomers?: { __typename?: 'customers_mutation_response', affected_rows: number, returning: Array<{ __typename: 'customers', id: any, firstName?: string | null | undefined, lastName?: string | null | undefined, phone?: string | null | undefined, vip?: boolean | null | undefined }> } | null | undefined };

export type UpdateCustomerMutationVariables = Exact<{
  customers?: Maybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
}>;


export type UpdateCustomerMutation = { __typename?: 'mutation_root', updateCustomer?: { __typename: 'customers', id: any, firstName?: string | null | undefined, lastName?: string | null | undefined, phone?: string | null | undefined, vip?: boolean | null | undefined } | null | undefined };

export type UpdateCustomersMutationVariables = Exact<{
  customers?: Maybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
}>;


export type UpdateCustomersMutation = { __typename?: 'mutation_root', updateCustomers?: { __typename?: 'customers_mutation_response', affected_rows: number, returning: Array<{ __typename: 'customers', id: any, firstName?: string | null | undefined, lastName?: string | null | undefined, phone?: string | null | undefined, vip?: boolean | null | undefined }> } | null | undefined };

export type Update_Customers_ManyMutationVariables = Exact<{
  updates: Array<Customers_Updates> | Customers_Updates;
}>;


export type Update_Customers_ManyMutation = { __typename?: 'mutation_root', update_customers_many?: Array<{ __typename?: 'customers_mutation_response', affected_rows: number, returning: Array<{ __typename: 'customers', id: any, firstName?: string | null | undefined, lastName?: string | null | undefined, phone?: string | null | undefined, vip?: boolean | null | undefined }> } | null | undefined> | null | undefined };

export type CustomerCrudFragment = { __typename: 'customers', id: any, firstName?: string | null | undefined, lastName?: string | null | undefined, phone?: string | null | undefined, vip?: boolean | null | undefined };

export type CustomerFragment = { __typename: 'customers', id: any, firstName?: string | null | undefined, lastName?: string | null | undefined, phone?: string | null | undefined, vip?: boolean | null | undefined };

export type OrderFragment = { __typename: 'orders', id: any, title?: string | null | undefined, order_date?: any | null | undefined, shipped_date?: any | null | undefined };

export type Order_CustomerFragment = { __typename: 'customers', firstName?: string | null | undefined, id: any, lastName?: string | null | undefined };

export type Order_Order_Items_ProductFragment = { __typename: 'products', name?: string | null | undefined, id: any };

export type Order_Order_ItemsFragment = { __typename: 'orderItems', quantity?: number | null | undefined, id: any, price?: any | null | undefined };

export type ProductFragment = { __typename: 'products', id: any, name?: string | null | undefined, availability?: string | null | undefined, price?: any | null | undefined, quantity: number };

export type Product_SignedThumbnailImgPathFragment = { __typename: 'GetUrlReturn', url: string };

export const ProductFragmentDoc = gql`
    fragment product on products {
  id
  __typename
  name
  availability
  price
  quantity
}
    `;
export const ProductCrudFragmentDoc = gql`
    fragment productCrud on products {
  ...product
}
    ${ProductFragmentDoc}`;
export const OrderFragmentDoc = gql`
    fragment order on orders {
  id
  __typename
  title
  order_date
  shipped_date
}
    `;
export const OrderCrudFragmentDoc = gql`
    fragment orderCrud on orders {
  ...order
}
    ${OrderFragmentDoc}`;
export const CustomerFragmentDoc = gql`
    fragment customer on customers {
  id
  __typename
  firstName
  lastName
  phone
  vip
}
    `;
export const CustomerCrudFragmentDoc = gql`
    fragment customerCrud on customers {
  ...customer
}
    ${CustomerFragmentDoc}`;
export const Order_CustomerFragmentDoc = gql`
    fragment order_customer on customers {
  firstName
  id
  __typename
  lastName
}
    `;
export const Order_Order_Items_ProductFragmentDoc = gql`
    fragment order_order_items_product on products {
  name
  id
  __typename
}
    `;
export const Order_Order_ItemsFragmentDoc = gql`
    fragment order_order_items on orderItems {
  quantity
  id
  __typename
  price
}
    `;
export const Product_SignedThumbnailImgPathFragmentDoc = gql`
    fragment product_signedThumbnailImgPath on GetUrlReturn {
  url
  __typename
}
    `;
export const DummyDocument = gql`
    query dummy {
  __typename
}
    `;

export function useDummyQuery(options: Omit<Urql.UseQueryArgs<DummyQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DummyQuery>({ query: DummyDocument, ...options });
};
export const ProductDocument = gql`
    query product($id: uuid!) {
  product(id: $id) {
    ...productCrud
  }
}
    ${ProductCrudFragmentDoc}`;

export function useProductQuery(options: Omit<Urql.UseQueryArgs<ProductQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProductQuery>({ query: ProductDocument, ...options });
};
export const ProductsDocument = gql`
    query products($distinct_on: [products_select_column!], $limit: Int = 20, $offset: Int = 0, $order_by: [products_order_by!] = {updated_at: desc}, $where: products_bool_exp) {
  products(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...productCrud
    ...product
    signedThumbnailImgPath {
      ...product_signedThumbnailImgPath
    }
    ...product
    ...product
    ...product
  }
}
    ${ProductCrudFragmentDoc}
${ProductFragmentDoc}
${Product_SignedThumbnailImgPathFragmentDoc}`;

export function useProductsQuery(options: Omit<Urql.UseQueryArgs<ProductsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProductsQuery>({ query: ProductsDocument, ...options });
};
export const DeleteProductDocument = gql`
    mutation deleteProduct($id: uuid!) {
  deleteProduct(id: $id) {
    ...productCrud
  }
}
    ${ProductCrudFragmentDoc}`;

export function useDeleteProductMutation() {
  return Urql.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument);
};
export const DeleteProductsDocument = gql`
    mutation deleteProducts($where: products_bool_exp!) {
  deleteProducts(where: $where) {
    returning {
      ...productCrud
    }
    affected_rows
  }
}
    ${ProductCrudFragmentDoc}`;

export function useDeleteProductsMutation() {
  return Urql.useMutation<DeleteProductsMutation, DeleteProductsMutationVariables>(DeleteProductsDocument);
};
export const InsertProductDocument = gql`
    mutation insertProduct($products: products_insert_input!, $on_conflict: products_on_conflict) {
  insertProduct(object: $products, on_conflict: $on_conflict) {
    ...productCrud
  }
}
    ${ProductCrudFragmentDoc}`;

export function useInsertProductMutation() {
  return Urql.useMutation<InsertProductMutation, InsertProductMutationVariables>(InsertProductDocument);
};
export const InsertProductsDocument = gql`
    mutation insertProducts($products: [products_insert_input!]!, $on_conflict: products_on_conflict) {
  insertProducts(objects: $products, on_conflict: $on_conflict) {
    returning {
      ...productCrud
    }
    affected_rows
  }
}
    ${ProductCrudFragmentDoc}`;

export function useInsertProductsMutation() {
  return Urql.useMutation<InsertProductsMutation, InsertProductsMutationVariables>(InsertProductsDocument);
};
export const UpdateProductDocument = gql`
    mutation updateProduct($_inc: products_inc_input, $products: products_set_input, $pk_columns: products_pk_columns_input!) {
  updateProduct(_inc: $_inc, _set: $products, pk_columns: $pk_columns) {
    ...productCrud
  }
}
    ${ProductCrudFragmentDoc}`;

export function useUpdateProductMutation() {
  return Urql.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument);
};
export const UpdateProductsDocument = gql`
    mutation updateProducts($_inc: products_inc_input, $products: products_set_input, $where: products_bool_exp!) {
  updateProducts(_inc: $_inc, _set: $products, where: $where) {
    returning {
      ...productCrud
    }
    affected_rows
  }
}
    ${ProductCrudFragmentDoc}`;

export function useUpdateProductsMutation() {
  return Urql.useMutation<UpdateProductsMutation, UpdateProductsMutationVariables>(UpdateProductsDocument);
};
export const Update_Products_ManyDocument = gql`
    mutation update_products_many($updates: [products_updates!]!) {
  update_products_many(updates: $updates) {
    returning {
      ...productCrud
    }
    affected_rows
  }
}
    ${ProductCrudFragmentDoc}`;

export function useUpdate_Products_ManyMutation() {
  return Urql.useMutation<Update_Products_ManyMutation, Update_Products_ManyMutationVariables>(Update_Products_ManyDocument);
};
export const OrderDocument = gql`
    query order($id: uuid!) {
  order(id: $id) {
    ...orderCrud
    customer {
      ...order_customer
    }
  }
}
    ${OrderCrudFragmentDoc}
${Order_CustomerFragmentDoc}`;

export function useOrderQuery(options: Omit<Urql.UseQueryArgs<OrderQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OrderQuery>({ query: OrderDocument, ...options });
};
export const OrdersDocument = gql`
    query orders($distinct_on: [orders_select_column!], $limit: Int = 20, $offset: Int = 0, $order_by: [orders_order_by!] = {updated_at: desc}, $where: orders_bool_exp) {
  orders(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...orderCrud
    ...order
    ...order
    ...order
    order_items(order_by: {created_at: asc}) {
      product {
        ...order_order_items_product
      }
      ...order_order_items
    }
  }
}
    ${OrderCrudFragmentDoc}
${OrderFragmentDoc}
${Order_Order_Items_ProductFragmentDoc}
${Order_Order_ItemsFragmentDoc}`;

export function useOrdersQuery(options: Omit<Urql.UseQueryArgs<OrdersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OrdersQuery>({ query: OrdersDocument, ...options });
};
export const DeleteOrderDocument = gql`
    mutation deleteOrder($id: uuid!) {
  deleteOrder(id: $id) {
    ...orderCrud
  }
}
    ${OrderCrudFragmentDoc}`;

export function useDeleteOrderMutation() {
  return Urql.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument);
};
export const DeleteOrdersDocument = gql`
    mutation deleteOrders($where: orders_bool_exp!) {
  deleteOrders(where: $where) {
    returning {
      ...orderCrud
    }
    affected_rows
  }
}
    ${OrderCrudFragmentDoc}`;

export function useDeleteOrdersMutation() {
  return Urql.useMutation<DeleteOrdersMutation, DeleteOrdersMutationVariables>(DeleteOrdersDocument);
};
export const InsertOrderDocument = gql`
    mutation insertOrder($orders: orders_insert_input!, $on_conflict: orders_on_conflict) {
  insertOrder(object: $orders, on_conflict: $on_conflict) {
    ...orderCrud
  }
}
    ${OrderCrudFragmentDoc}`;

export function useInsertOrderMutation() {
  return Urql.useMutation<InsertOrderMutation, InsertOrderMutationVariables>(InsertOrderDocument);
};
export const InsertOrdersDocument = gql`
    mutation insertOrders($orders: [orders_insert_input!]!, $on_conflict: orders_on_conflict) {
  insertOrders(objects: $orders, on_conflict: $on_conflict) {
    returning {
      ...orderCrud
    }
    affected_rows
  }
}
    ${OrderCrudFragmentDoc}`;

export function useInsertOrdersMutation() {
  return Urql.useMutation<InsertOrdersMutation, InsertOrdersMutationVariables>(InsertOrdersDocument);
};
export const UpdateOrderDocument = gql`
    mutation updateOrder($orders: orders_set_input, $pk_columns: orders_pk_columns_input!) {
  updateOrder(_set: $orders, pk_columns: $pk_columns) {
    ...orderCrud
  }
}
    ${OrderCrudFragmentDoc}`;

export function useUpdateOrderMutation() {
  return Urql.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument);
};
export const UpdateOrdersDocument = gql`
    mutation updateOrders($orders: orders_set_input, $where: orders_bool_exp!) {
  updateOrders(_set: $orders, where: $where) {
    returning {
      ...orderCrud
    }
    affected_rows
  }
}
    ${OrderCrudFragmentDoc}`;

export function useUpdateOrdersMutation() {
  return Urql.useMutation<UpdateOrdersMutation, UpdateOrdersMutationVariables>(UpdateOrdersDocument);
};
export const Update_Orders_ManyDocument = gql`
    mutation update_orders_many($updates: [orders_updates!]!) {
  update_orders_many(updates: $updates) {
    returning {
      ...orderCrud
    }
    affected_rows
  }
}
    ${OrderCrudFragmentDoc}`;

export function useUpdate_Orders_ManyMutation() {
  return Urql.useMutation<Update_Orders_ManyMutation, Update_Orders_ManyMutationVariables>(Update_Orders_ManyDocument);
};
export const CustomerDocument = gql`
    query customer($id: uuid!) {
  customer(id: $id) {
    ...customerCrud
  }
}
    ${CustomerCrudFragmentDoc}`;

export function useCustomerQuery(options: Omit<Urql.UseQueryArgs<CustomerQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CustomerQuery>({ query: CustomerDocument, ...options });
};
export const CustomersDocument = gql`
    query customers($distinct_on: [customers_select_column!], $limit: Int = 20, $offset: Int = 0, $order_by: [customers_order_by!] = {updatedAt: desc}, $where: customers_bool_exp) {
  customers(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...customerCrud
    ...customer
    ...customer
    ...customer
    ...customer
  }
}
    ${CustomerCrudFragmentDoc}
${CustomerFragmentDoc}`;

export function useCustomersQuery(options: Omit<Urql.UseQueryArgs<CustomersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CustomersQuery>({ query: CustomersDocument, ...options });
};
export const DeleteCustomerDocument = gql`
    mutation deleteCustomer($id: uuid!) {
  deleteCustomer(id: $id) {
    ...customerCrud
  }
}
    ${CustomerCrudFragmentDoc}`;

export function useDeleteCustomerMutation() {
  return Urql.useMutation<DeleteCustomerMutation, DeleteCustomerMutationVariables>(DeleteCustomerDocument);
};
export const DeleteCustomersDocument = gql`
    mutation deleteCustomers($where: customers_bool_exp!) {
  deleteCustomers(where: $where) {
    returning {
      ...customerCrud
    }
    affected_rows
  }
}
    ${CustomerCrudFragmentDoc}`;

export function useDeleteCustomersMutation() {
  return Urql.useMutation<DeleteCustomersMutation, DeleteCustomersMutationVariables>(DeleteCustomersDocument);
};
export const InsertCustomerDocument = gql`
    mutation insertCustomer($customers: customers_insert_input!, $on_conflict: customers_on_conflict) {
  insertCustomer(object: $customers, on_conflict: $on_conflict) {
    ...customerCrud
  }
}
    ${CustomerCrudFragmentDoc}`;

export function useInsertCustomerMutation() {
  return Urql.useMutation<InsertCustomerMutation, InsertCustomerMutationVariables>(InsertCustomerDocument);
};
export const InsertCustomersDocument = gql`
    mutation insertCustomers($customers: [customers_insert_input!]!, $on_conflict: customers_on_conflict) {
  insertCustomers(objects: $customers, on_conflict: $on_conflict) {
    returning {
      ...customerCrud
    }
    affected_rows
  }
}
    ${CustomerCrudFragmentDoc}`;

export function useInsertCustomersMutation() {
  return Urql.useMutation<InsertCustomersMutation, InsertCustomersMutationVariables>(InsertCustomersDocument);
};
export const UpdateCustomerDocument = gql`
    mutation updateCustomer($customers: customers_set_input, $pk_columns: customers_pk_columns_input!) {
  updateCustomer(_set: $customers, pk_columns: $pk_columns) {
    ...customerCrud
  }
}
    ${CustomerCrudFragmentDoc}`;

export function useUpdateCustomerMutation() {
  return Urql.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument);
};
export const UpdateCustomersDocument = gql`
    mutation updateCustomers($customers: customers_set_input, $where: customers_bool_exp!) {
  updateCustomers(_set: $customers, where: $where) {
    returning {
      ...customerCrud
    }
    affected_rows
  }
}
    ${CustomerCrudFragmentDoc}`;

export function useUpdateCustomersMutation() {
  return Urql.useMutation<UpdateCustomersMutation, UpdateCustomersMutationVariables>(UpdateCustomersDocument);
};
export const Update_Customers_ManyDocument = gql`
    mutation update_customers_many($updates: [customers_updates!]!) {
  update_customers_many(updates: $updates) {
    returning {
      ...customerCrud
    }
    affected_rows
  }
}
    ${CustomerCrudFragmentDoc}`;

export function useUpdate_Customers_ManyMutation() {
  return Urql.useMutation<Update_Customers_ManyMutation, Update_Customers_ManyMutationVariables>(Update_Customers_ManyDocument);
};