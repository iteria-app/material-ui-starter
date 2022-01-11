import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
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
  jsonb: any;
  numeric: any;
  time: any;
  timestamp: any;
  timestamptz: any;
  timetz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "customer" */
export type Customer = {
  __typename?: 'customer';
  address?: Maybe<Scalars['jsonb']>;
  avatarUrl?: Maybe<Scalars['String']>;
  bigInteger?: Maybe<Scalars['bigint']>;
  createdAt: Scalars['timestamptz'];
  date?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  float?: Maybe<Scalars['float8']>;
  id: Scalars['uuid'];
  jsonB?: Maybe<Scalars['jsonb']>;
  manager?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  seq?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  test2?: Maybe<Scalars['Int']>;
  test3?: Maybe<Scalars['String']>;
  testdate?: Maybe<Scalars['date']>;
  time?: Maybe<Scalars['timetz']>;
  timeStamp2?: Maybe<Scalars['timestamptz']>;
  timeStampZ?: Maybe<Scalars['timestamp']>;
  timeZ?: Maybe<Scalars['time']>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "customer" */
export type CustomerAddressArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "customer" */
export type CustomerJsonBArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "customer" */
export type Customer_Aggregate = {
  __typename?: 'customer_aggregate';
  aggregate?: Maybe<Customer_Aggregate_Fields>;
  nodes: Array<Customer>;
};

/** aggregate fields of "customer" */
export type Customer_Aggregate_Fields = {
  __typename?: 'customer_aggregate_fields';
  avg?: Maybe<Customer_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Customer_Max_Fields>;
  min?: Maybe<Customer_Min_Fields>;
  stddev?: Maybe<Customer_Stddev_Fields>;
  stddev_pop?: Maybe<Customer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customer_Stddev_Samp_Fields>;
  sum?: Maybe<Customer_Sum_Fields>;
  var_pop?: Maybe<Customer_Var_Pop_Fields>;
  var_samp?: Maybe<Customer_Var_Samp_Fields>;
  variance?: Maybe<Customer_Variance_Fields>;
};


/** aggregate fields of "customer" */
export type Customer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Customer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "customer" */
export type Customer_Aggregate_Order_By = {
  avg?: Maybe<Customer_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Customer_Max_Order_By>;
  min?: Maybe<Customer_Min_Order_By>;
  stddev?: Maybe<Customer_Stddev_Order_By>;
  stddev_pop?: Maybe<Customer_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Customer_Stddev_Samp_Order_By>;
  sum?: Maybe<Customer_Sum_Order_By>;
  var_pop?: Maybe<Customer_Var_Pop_Order_By>;
  var_samp?: Maybe<Customer_Var_Samp_Order_By>;
  variance?: Maybe<Customer_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Customer_Append_Input = {
  address?: Maybe<Scalars['jsonb']>;
  jsonB?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "customer" */
export type Customer_Arr_Rel_Insert_Input = {
  data: Array<Customer_Insert_Input>;
  on_conflict?: Maybe<Customer_On_Conflict>;
};

/** aggregate avg on columns */
export type Customer_Avg_Fields = {
  __typename?: 'customer_avg_fields';
  bigInteger?: Maybe<Scalars['Float']>;
  float?: Maybe<Scalars['Float']>;
  seq?: Maybe<Scalars['Float']>;
  test2?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "customer" */
export type Customer_Avg_Order_By = {
  bigInteger?: Maybe<Order_By>;
  float?: Maybe<Order_By>;
  seq?: Maybe<Order_By>;
  test2?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "customer". All fields are combined with a logical 'AND'. */
export type Customer_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Customer_Bool_Exp>>>;
  _not?: Maybe<Customer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Customer_Bool_Exp>>>;
  address?: Maybe<Jsonb_Comparison_Exp>;
  avatarUrl?: Maybe<String_Comparison_Exp>;
  bigInteger?: Maybe<Bigint_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  date?: Maybe<Date_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  float?: Maybe<Float8_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  jsonB?: Maybe<Jsonb_Comparison_Exp>;
  manager?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  seq?: Maybe<Int_Comparison_Exp>;
  state?: Maybe<String_Comparison_Exp>;
  test2?: Maybe<Int_Comparison_Exp>;
  test3?: Maybe<String_Comparison_Exp>;
  testdate?: Maybe<Date_Comparison_Exp>;
  time?: Maybe<Timetz_Comparison_Exp>;
  timeStamp2?: Maybe<Timestamptz_Comparison_Exp>;
  timeStampZ?: Maybe<Timestamp_Comparison_Exp>;
  timeZ?: Maybe<Time_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer" */
export enum Customer_Constraint {
  /** unique or primary key constraint */
  CustomerPkey = 'customer_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Customer_Delete_At_Path_Input = {
  address?: Maybe<Array<Maybe<Scalars['String']>>>;
  jsonB?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Customer_Delete_Elem_Input = {
  address?: Maybe<Scalars['Int']>;
  jsonB?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Customer_Delete_Key_Input = {
  address?: Maybe<Scalars['String']>;
  jsonB?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "customer" */
export type Customer_Inc_Input = {
  bigInteger?: Maybe<Scalars['bigint']>;
  float?: Maybe<Scalars['float8']>;
  seq?: Maybe<Scalars['Int']>;
  test2?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "customer" */
export type Customer_Insert_Input = {
  address?: Maybe<Scalars['jsonb']>;
  avatarUrl?: Maybe<Scalars['String']>;
  bigInteger?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  float?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  jsonB?: Maybe<Scalars['jsonb']>;
  manager?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  seq?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  test2?: Maybe<Scalars['Int']>;
  test3?: Maybe<Scalars['String']>;
  testdate?: Maybe<Scalars['date']>;
  time?: Maybe<Scalars['timetz']>;
  timeStamp2?: Maybe<Scalars['timestamptz']>;
  timeStampZ?: Maybe<Scalars['timestamp']>;
  timeZ?: Maybe<Scalars['time']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Customer_Max_Fields = {
  __typename?: 'customer_max_fields';
  avatarUrl?: Maybe<Scalars['String']>;
  bigInteger?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  float?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  seq?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  test2?: Maybe<Scalars['Int']>;
  test3?: Maybe<Scalars['String']>;
  testdate?: Maybe<Scalars['date']>;
  time?: Maybe<Scalars['timetz']>;
  timeStamp2?: Maybe<Scalars['timestamptz']>;
  timeStampZ?: Maybe<Scalars['timestamp']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "customer" */
export type Customer_Max_Order_By = {
  avatarUrl?: Maybe<Order_By>;
  bigInteger?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  float?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  seq?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  test2?: Maybe<Order_By>;
  test3?: Maybe<Order_By>;
  testdate?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
  timeStamp2?: Maybe<Order_By>;
  timeStampZ?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Customer_Min_Fields = {
  __typename?: 'customer_min_fields';
  avatarUrl?: Maybe<Scalars['String']>;
  bigInteger?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  float?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  seq?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  test2?: Maybe<Scalars['Int']>;
  test3?: Maybe<Scalars['String']>;
  testdate?: Maybe<Scalars['date']>;
  time?: Maybe<Scalars['timetz']>;
  timeStamp2?: Maybe<Scalars['timestamptz']>;
  timeStampZ?: Maybe<Scalars['timestamp']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "customer" */
export type Customer_Min_Order_By = {
  avatarUrl?: Maybe<Order_By>;
  bigInteger?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  float?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  seq?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  test2?: Maybe<Order_By>;
  test3?: Maybe<Order_By>;
  testdate?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
  timeStamp2?: Maybe<Order_By>;
  timeStampZ?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "customer" */
export type Customer_Mutation_Response = {
  __typename?: 'customer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Customer>;
};

/** input type for inserting object relation for remote table "customer" */
export type Customer_Obj_Rel_Insert_Input = {
  data: Customer_Insert_Input;
  on_conflict?: Maybe<Customer_On_Conflict>;
};

/** on conflict condition type for table "customer" */
export type Customer_On_Conflict = {
  constraint: Customer_Constraint;
  update_columns: Array<Customer_Update_Column>;
  where?: Maybe<Customer_Bool_Exp>;
};

/** ordering options when selecting data from "customer" */
export type Customer_Order_By = {
  address?: Maybe<Order_By>;
  avatarUrl?: Maybe<Order_By>;
  bigInteger?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  float?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jsonB?: Maybe<Order_By>;
  manager?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  seq?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  test2?: Maybe<Order_By>;
  test3?: Maybe<Order_By>;
  testdate?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
  timeStamp2?: Maybe<Order_By>;
  timeStampZ?: Maybe<Order_By>;
  timeZ?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "customer" */
export type Customer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Customer_Prepend_Input = {
  address?: Maybe<Scalars['jsonb']>;
  jsonB?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "customer" */
export enum Customer_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  BigInteger = 'bigInteger',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Date = 'date',
  /** column name */
  Email = 'email',
  /** column name */
  Float = 'float',
  /** column name */
  Id = 'id',
  /** column name */
  JsonB = 'jsonB',
  /** column name */
  Manager = 'manager',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Seq = 'seq',
  /** column name */
  State = 'state',
  /** column name */
  Test2 = 'test2',
  /** column name */
  Test3 = 'test3',
  /** column name */
  Testdate = 'testdate',
  /** column name */
  Time = 'time',
  /** column name */
  TimeStamp2 = 'timeStamp2',
  /** column name */
  TimeStampZ = 'timeStampZ',
  /** column name */
  TimeZ = 'timeZ',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "customer" */
export type Customer_Set_Input = {
  address?: Maybe<Scalars['jsonb']>;
  avatarUrl?: Maybe<Scalars['String']>;
  bigInteger?: Maybe<Scalars['bigint']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  float?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  jsonB?: Maybe<Scalars['jsonb']>;
  manager?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  seq?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  test2?: Maybe<Scalars['Int']>;
  test3?: Maybe<Scalars['String']>;
  testdate?: Maybe<Scalars['date']>;
  time?: Maybe<Scalars['timetz']>;
  timeStamp2?: Maybe<Scalars['timestamptz']>;
  timeStampZ?: Maybe<Scalars['timestamp']>;
  timeZ?: Maybe<Scalars['time']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Customer_Stddev_Fields = {
  __typename?: 'customer_stddev_fields';
  bigInteger?: Maybe<Scalars['Float']>;
  float?: Maybe<Scalars['Float']>;
  seq?: Maybe<Scalars['Float']>;
  test2?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "customer" */
export type Customer_Stddev_Order_By = {
  bigInteger?: Maybe<Order_By>;
  float?: Maybe<Order_By>;
  seq?: Maybe<Order_By>;
  test2?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Customer_Stddev_Pop_Fields = {
  __typename?: 'customer_stddev_pop_fields';
  bigInteger?: Maybe<Scalars['Float']>;
  float?: Maybe<Scalars['Float']>;
  seq?: Maybe<Scalars['Float']>;
  test2?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "customer" */
export type Customer_Stddev_Pop_Order_By = {
  bigInteger?: Maybe<Order_By>;
  float?: Maybe<Order_By>;
  seq?: Maybe<Order_By>;
  test2?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Customer_Stddev_Samp_Fields = {
  __typename?: 'customer_stddev_samp_fields';
  bigInteger?: Maybe<Scalars['Float']>;
  float?: Maybe<Scalars['Float']>;
  seq?: Maybe<Scalars['Float']>;
  test2?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "customer" */
export type Customer_Stddev_Samp_Order_By = {
  bigInteger?: Maybe<Order_By>;
  float?: Maybe<Order_By>;
  seq?: Maybe<Order_By>;
  test2?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Customer_Sum_Fields = {
  __typename?: 'customer_sum_fields';
  bigInteger?: Maybe<Scalars['bigint']>;
  float?: Maybe<Scalars['float8']>;
  seq?: Maybe<Scalars['Int']>;
  test2?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "customer" */
export type Customer_Sum_Order_By = {
  bigInteger?: Maybe<Order_By>;
  float?: Maybe<Order_By>;
  seq?: Maybe<Order_By>;
  test2?: Maybe<Order_By>;
};

/** update columns of table "customer" */
export enum Customer_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  BigInteger = 'bigInteger',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Date = 'date',
  /** column name */
  Email = 'email',
  /** column name */
  Float = 'float',
  /** column name */
  Id = 'id',
  /** column name */
  JsonB = 'jsonB',
  /** column name */
  Manager = 'manager',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Seq = 'seq',
  /** column name */
  State = 'state',
  /** column name */
  Test2 = 'test2',
  /** column name */
  Test3 = 'test3',
  /** column name */
  Testdate = 'testdate',
  /** column name */
  Time = 'time',
  /** column name */
  TimeStamp2 = 'timeStamp2',
  /** column name */
  TimeStampZ = 'timeStampZ',
  /** column name */
  TimeZ = 'timeZ',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Customer_Var_Pop_Fields = {
  __typename?: 'customer_var_pop_fields';
  bigInteger?: Maybe<Scalars['Float']>;
  float?: Maybe<Scalars['Float']>;
  seq?: Maybe<Scalars['Float']>;
  test2?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "customer" */
export type Customer_Var_Pop_Order_By = {
  bigInteger?: Maybe<Order_By>;
  float?: Maybe<Order_By>;
  seq?: Maybe<Order_By>;
  test2?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Customer_Var_Samp_Fields = {
  __typename?: 'customer_var_samp_fields';
  bigInteger?: Maybe<Scalars['Float']>;
  float?: Maybe<Scalars['Float']>;
  seq?: Maybe<Scalars['Float']>;
  test2?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "customer" */
export type Customer_Var_Samp_Order_By = {
  bigInteger?: Maybe<Order_By>;
  float?: Maybe<Order_By>;
  seq?: Maybe<Order_By>;
  test2?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Customer_Variance_Fields = {
  __typename?: 'customer_variance_fields';
  bigInteger?: Maybe<Scalars['Float']>;
  float?: Maybe<Scalars['Float']>;
  seq?: Maybe<Scalars['Float']>;
  test2?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "customer" */
export type Customer_Variance_Order_By = {
  bigInteger?: Maybe<Order_By>;
  float?: Maybe<Order_By>;
  seq?: Maybe<Order_By>;
  test2?: Maybe<Order_By>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "customer" */
  deleteCustomer?: Maybe<Customer>;
  /** delete data from the table: "customer" */
  deleteCustomers?: Maybe<Customer_Mutation_Response>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "utilization" */
  delete_utilization?: Maybe<Utilization_Mutation_Response>;
  /** delete single row from the table: "utilization" */
  delete_utilization_by_pk?: Maybe<Utilization>;
  /** insert a single row into the table: "customer" */
  insertCustomer?: Maybe<Customer>;
  /** insert data into the table: "customer" */
  insertCustomers?: Maybe<Customer_Mutation_Response>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "utilization" */
  insert_utilization?: Maybe<Utilization_Mutation_Response>;
  /** insert a single row into the table: "utilization" */
  insert_utilization_one?: Maybe<Utilization>;
  /** update single row of the table: "customer" */
  updateCustomer?: Maybe<Customer>;
  /** update data of the table: "customer" */
  updateCustomers?: Maybe<Customer_Mutation_Response>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "utilization" */
  update_utilization?: Maybe<Utilization_Mutation_Response>;
  /** update single row of the table: "utilization" */
  update_utilization_by_pk?: Maybe<Utilization>;
};


/** mutation root */
export type Mutation_RootDeleteCustomerArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteCustomersArgs = {
  where: Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UtilizationArgs = {
  where: Utilization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Utilization_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertCustomerArgs = {
  object: Customer_Insert_Input;
  on_conflict?: Maybe<Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCustomersArgs = {
  objects: Array<Customer_Insert_Input>;
  on_conflict?: Maybe<Customer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UtilizationArgs = {
  objects: Array<Utilization_Insert_Input>;
  on_conflict?: Maybe<Utilization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Utilization_OneArgs = {
  object: Utilization_Insert_Input;
  on_conflict?: Maybe<Utilization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateCustomerArgs = {
  _append?: Maybe<Customer_Append_Input>;
  _delete_at_path?: Maybe<Customer_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Customer_Delete_Elem_Input>;
  _delete_key?: Maybe<Customer_Delete_Key_Input>;
  _inc?: Maybe<Customer_Inc_Input>;
  _prepend?: Maybe<Customer_Prepend_Input>;
  _set?: Maybe<Customer_Set_Input>;
  pk_columns: Customer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateCustomersArgs = {
  _append?: Maybe<Customer_Append_Input>;
  _delete_at_path?: Maybe<Customer_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Customer_Delete_Elem_Input>;
  _delete_key?: Maybe<Customer_Delete_Key_Input>;
  _inc?: Maybe<Customer_Inc_Input>;
  _prepend?: Maybe<Customer_Prepend_Input>;
  _set?: Maybe<Customer_Set_Input>;
  where: Customer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UtilizationArgs = {
  _inc?: Maybe<Utilization_Inc_Input>;
  _set?: Maybe<Utilization_Set_Input>;
  where: Utilization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Utilization_By_PkArgs = {
  _inc?: Maybe<Utilization_Inc_Input>;
  _set?: Maybe<Utilization_Set_Input>;
  pk_columns: Utilization_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  media: Scalars['String'];
  test?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  totalDownloads: Scalars['numeric'];
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Products_Bool_Exp>>>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Products_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  media?: Maybe<String_Comparison_Exp>;
  test?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  totalDownloads?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductsPkey = 'products_pkey',
  /** unique or primary key constraint */
  ProductsTestKey = 'products_test_key'
}

/** input type for incrementing integer column in table "products" */
export type Products_Inc_Input = {
  totalDownloads?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  media?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  totalDownloads?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** on conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns: Array<Products_Update_Column>;
  where?: Maybe<Products_Bool_Exp>;
};

/** ordering options when selecting data from "products" */
export type Products_Order_By = {
  createdAt?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  media?: Maybe<Order_By>;
  test?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  totalDownloads?: Maybe<Order_By>;
};

/** primary key columns input for table: "products" */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Media = 'media',
  /** column name */
  Test = 'test',
  /** column name */
  Title = 'title',
  /** column name */
  TotalDownloads = 'totalDownloads'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  media?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  totalDownloads?: Maybe<Scalars['numeric']>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Media = 'media',
  /** column name */
  Test = 'test',
  /** column name */
  Title = 'title',
  /** column name */
  TotalDownloads = 'totalDownloads'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customer" using primary key columns */
  customer?: Maybe<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customerAggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" */
  customers: Array<Customer>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "utilization" */
  utilization: Array<Utilization>;
  /** fetch data from the table: "utilization" using primary key columns */
  utilization_by_pk?: Maybe<Utilization>;
};


/** query root */
export type Query_RootCustomerArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootCustomerAggregateArgs = {
  distinct_on?: Maybe<Array<Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Order_By>>;
  where?: Maybe<Customer_Bool_Exp>;
};


/** query root */
export type Query_RootCustomersArgs = {
  distinct_on?: Maybe<Array<Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Order_By>>;
  where?: Maybe<Customer_Bool_Exp>;
};


/** query root */
export type Query_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/** query root */
export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  user_id: Scalars['Int'];
};


/** query root */
export type Query_RootUtilizationArgs = {
  distinct_on?: Maybe<Array<Utilization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utilization_Order_By>>;
  where?: Maybe<Utilization_Bool_Exp>;
};


/** query root */
export type Query_RootUtilization_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customer" using primary key columns */
  customer?: Maybe<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customerAggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" */
  customers: Array<Customer>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "utilization" */
  utilization: Array<Utilization>;
  /** fetch data from the table: "utilization" using primary key columns */
  utilization_by_pk?: Maybe<Utilization>;
};


/** subscription root */
export type Subscription_RootCustomerArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootCustomerAggregateArgs = {
  distinct_on?: Maybe<Array<Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Order_By>>;
  where?: Maybe<Customer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCustomersArgs = {
  distinct_on?: Maybe<Array<Customer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customer_Order_By>>;
  where?: Maybe<Customer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  user_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUtilizationArgs = {
  distinct_on?: Maybe<Array<Utilization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utilization_Order_By>>;
  where?: Maybe<Utilization_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUtilization_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type time. All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: Maybe<Scalars['time']>;
  _gt?: Maybe<Scalars['time']>;
  _gte?: Maybe<Scalars['time']>;
  _in?: Maybe<Array<Scalars['time']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['time']>;
  _lte?: Maybe<Scalars['time']>;
  _neq?: Maybe<Scalars['time']>;
  _nin?: Maybe<Array<Scalars['time']>>;
};


/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type timetz. All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timetz']>;
  _gt?: Maybe<Scalars['timetz']>;
  _gte?: Maybe<Scalars['timetz']>;
  _in?: Maybe<Array<Scalars['timetz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timetz']>;
  _lte?: Maybe<Scalars['timetz']>;
  _neq?: Maybe<Scalars['timetz']>;
  _nin?: Maybe<Array<Scalars['timetz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  user_id: Scalars['Int'];
  username: Scalars['String'];
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  user_id?: Maybe<Int_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserUsernameKey = 'user_username_key'
}

/** input type for incrementing integer column in table "user" */
export type User_Inc_Input = {
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  user_id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  user_id?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  user_id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  user_id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** columns and relationships of "utilization" */
export type Utilization = {
  __typename?: 'utilization';
  available: Scalars['Boolean'];
  availableValue: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  percent: Scalars['Int'];
  used: Scalars['Boolean'];
  usedValue: Scalars['String'];
  value: Scalars['String'];
};

/** input type for inserting array relation for remote table "utilization" */
export type Utilization_Arr_Rel_Insert_Input = {
  data: Array<Utilization_Insert_Input>;
  on_conflict?: Maybe<Utilization_On_Conflict>;
};

/** Boolean expression to filter rows from the table "utilization". All fields are combined with a logical 'AND'. */
export type Utilization_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Utilization_Bool_Exp>>>;
  _not?: Maybe<Utilization_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Utilization_Bool_Exp>>>;
  available?: Maybe<Boolean_Comparison_Exp>;
  availableValue?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  percent?: Maybe<Int_Comparison_Exp>;
  used?: Maybe<Boolean_Comparison_Exp>;
  usedValue?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "utilization" */
export enum Utilization_Constraint {
  /** unique or primary key constraint */
  UtilizationPkey = 'utilization_pkey'
}

/** input type for incrementing integer column in table "utilization" */
export type Utilization_Inc_Input = {
  percent?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "utilization" */
export type Utilization_Insert_Input = {
  available?: Maybe<Scalars['Boolean']>;
  availableValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Int']>;
  used?: Maybe<Scalars['Boolean']>;
  usedValue?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "utilization" */
export type Utilization_Mutation_Response = {
  __typename?: 'utilization_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Utilization>;
};

/** input type for inserting object relation for remote table "utilization" */
export type Utilization_Obj_Rel_Insert_Input = {
  data: Utilization_Insert_Input;
  on_conflict?: Maybe<Utilization_On_Conflict>;
};

/** on conflict condition type for table "utilization" */
export type Utilization_On_Conflict = {
  constraint: Utilization_Constraint;
  update_columns: Array<Utilization_Update_Column>;
  where?: Maybe<Utilization_Bool_Exp>;
};

/** ordering options when selecting data from "utilization" */
export type Utilization_Order_By = {
  available?: Maybe<Order_By>;
  availableValue?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  used?: Maybe<Order_By>;
  usedValue?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "utilization" */
export type Utilization_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "utilization" */
export enum Utilization_Select_Column {
  /** column name */
  Available = 'available',
  /** column name */
  AvailableValue = 'availableValue',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Percent = 'percent',
  /** column name */
  Used = 'used',
  /** column name */
  UsedValue = 'usedValue',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "utilization" */
export type Utilization_Set_Input = {
  available?: Maybe<Scalars['Boolean']>;
  availableValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Int']>;
  used?: Maybe<Scalars['Boolean']>;
  usedValue?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "utilization" */
export enum Utilization_Update_Column {
  /** column name */
  Available = 'available',
  /** column name */
  AvailableValue = 'availableValue',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Percent = 'percent',
  /** column name */
  Used = 'used',
  /** column name */
  UsedValue = 'usedValue',
  /** column name */
  Value = 'value'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type UpdateCustomerDetailMutationVariables = Exact<{
  id?: Scalars['uuid'];
  name?: Scalars['String'];
  email?: Scalars['String'];
  phone?: Scalars['String'];
}>;


export type UpdateCustomerDetailMutation = (
  { __typename?: 'mutation_root' }
  & { updateCustomer?: Maybe<(
    { __typename?: 'customer' }
    & Pick<Customer, 'name' | 'id'>
  )> }
);

export type SearchCustomersQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type SearchCustomersQuery = (
  { __typename?: 'query_root' }
  & { customers: Array<(
    { __typename?: 'customer' }
    & Pick<Customer, 'id' | 'email' | 'name' | 'phone' | 'address' | 'avatarUrl' | 'createdAt' | 'updatedAt'>
  )> }
);

export type AllCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCustomersQuery = (
  { __typename?: 'query_root' }
  & { customers: Array<(
    { __typename: 'customer' }
    & Pick<Customer, 'updatedAt' | 'phone' | 'name' | 'id' | 'email' | 'createdAt' | 'avatarUrl'>
  )> }
);

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = (
  { __typename?: 'query_root' }
  & { products: Array<(
    { __typename: 'products' }
    & Pick<Products, 'id' | 'media' | 'title' | 'totalDownloads' | 'description'>
  )> }
);


export const UpdateCustomerDetailDocument = gql`
    mutation updateCustomerDetail($id: uuid! = "", $name: String! = "", $email: String! = "", $phone: String! = "") {
  updateCustomer(
    pk_columns: {id: $id}
    _set: {name: $name, email: $email, phone: $phone}
  ) {
    name
    id
  }
}
    `;

export function useUpdateCustomerDetailMutation() {
  return Urql.useMutation<UpdateCustomerDetailMutation, UpdateCustomerDetailMutationVariables>(UpdateCustomerDetailDocument);
};
export const SearchCustomersDocument = gql`
    query searchCustomers($search: String!) {
  customers(where: {name: {_ilike: $search}}, order_by: {name: asc}) {
    id
    email
    name
    phone
    address
    avatarUrl
    createdAt
    updatedAt
  }
}
    `;

export function useSearchCustomersQuery(options: Omit<Urql.UseQueryArgs<SearchCustomersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SearchCustomersQuery>({ query: SearchCustomersDocument, ...options });
};
export const AllCustomersDocument = gql`
    query AllCustomers {
  customers(order_by: {name: asc}) {
    __typename
    updatedAt
    phone
    name
    id
    email
    createdAt
    avatarUrl
  }
}
    `;

export function useAllCustomersQuery(options: Omit<Urql.UseQueryArgs<AllCustomersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllCustomersQuery>({ query: AllCustomersDocument, ...options });
};
export const AllProductsDocument = gql`
    query AllProducts {
  products(order_by: {title: asc}) {
    __typename
    id
    media
    title
    totalDownloads
    description
  }
}
    `;

export function useAllProductsQuery(options: Omit<Urql.UseQueryArgs<AllProductsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllProductsQuery>({ query: AllProductsDocument, ...options });
};