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
  date: any;
  numeric: any;
  timestamptz: any;
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

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  created_at: Scalars['timestamptz'];
  date_of_birth?: Maybe<Scalars['date']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_valid: Scalars['Boolean'];
  last_name: Scalars['String'];
  /** An array relationship */
  orders: Array<Orders>;
  updated_at: Scalars['timestamptz'];
  vip: Scalars['Boolean'];
};


/** columns and relationships of "customers" */
export type CustomersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_of_birth?: InputMaybe<Date_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_valid?: InputMaybe<Boolean_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vip?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint */
  CustomersPkey = 'customers_pkey'
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  date_of_birth?: InputMaybe<Scalars['date']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  vip?: InputMaybe<Scalars['Boolean']>;
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
  created_at?: InputMaybe<Order_By>;
  date_of_birth?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_valid?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vip?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfBirth = 'date_of_birth',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Vip = 'vip'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  date_of_birth?: InputMaybe<Scalars['date']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  DateOfBirth = 'date_of_birth',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Vip = 'vip'
}

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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  abortMultipartUpload?: Maybe<AbortMultipartUploadReturn>;
  completeMultipartUpload?: Maybe<CompleteMultipartUploadReturn>;
  createMultipartUpload?: Maybe<CreateMultipartUploadReturn>;
  /** insert a single row into the table: "test.test1_tables" */
  insertTest1Table?: Maybe<Test1Tables>;
  /** insert data into the table: "test.test1_tables" */
  insertTest1Tables?: Maybe<Test1Tables_Mutation_Response>;
  /** insert a single row into the table: "test.test_tables" */
  insertTestTable?: Maybe<TestTables>;
  /** insert data into the table: "test.test_tables" */
  insertTestTables?: Maybe<TestTables_Mutation_Response>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "order_products" */
  insert_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** insert a single row into the table: "order_products" */
  insert_order_products_one?: Maybe<Order_Products>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** update single row of the table: "test.test1_tables" */
  updateTest1Table?: Maybe<Test1Tables>;
  /** update data of the table: "test.test1_tables" */
  updateTest1Tables?: Maybe<Test1Tables_Mutation_Response>;
  /** update single row of the table: "test.test_tables" */
  updateTestTable?: Maybe<TestTables>;
  /** update data of the table: "test.test_tables" */
  updateTestTables?: Maybe<TestTables_Mutation_Response>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update data of the table: "order_products" */
  update_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** update single row of the table: "order_products" */
  update_order_products_by_pk?: Maybe<Order_Products>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
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
export type Mutation_RootInsertTest1TableArgs = {
  object: Test1Tables_Insert_Input;
  on_conflict?: InputMaybe<Test1Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest1TablesArgs = {
  objects: Array<Test1Tables_Insert_Input>;
  on_conflict?: InputMaybe<Test1Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTestTableArgs = {
  object: TestTables_Insert_Input;
  on_conflict?: InputMaybe<TestTables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTestTablesArgs = {
  objects: Array<TestTables_Insert_Input>;
  on_conflict?: InputMaybe<TestTables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_ProductsArgs = {
  objects: Array<Order_Products_Insert_Input>;
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Products_OneArgs = {
  object: Order_Products_Insert_Input;
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateTest1TableArgs = {
  _set?: InputMaybe<Test1Tables_Set_Input>;
  pk_columns: Test1Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTest1TablesArgs = {
  _set?: InputMaybe<Test1Tables_Set_Input>;
  where: Test1Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTestTableArgs = {
  _set?: InputMaybe<TestTables_Set_Input>;
  pk_columns: TestTables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTestTablesArgs = {
  _set?: InputMaybe<TestTables_Set_Input>;
  where: TestTables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_ProductsArgs = {
  _inc?: InputMaybe<Order_Products_Inc_Input>;
  _set?: InputMaybe<Order_Products_Set_Input>;
  where: Order_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Products_By_PkArgs = {
  _inc?: InputMaybe<Order_Products_Inc_Input>;
  _set?: InputMaybe<Order_Products_Set_Input>;
  pk_columns: Order_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
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

/** columns and relationships of "order_products" */
export type Order_Products = {
  __typename?: 'order_products';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_valid: Scalars['Boolean'];
  name: Scalars['String'];
  /** An object relationship */
  order: Orders;
  order_id: Scalars['Int'];
  price: Scalars['numeric'];
  updated_at: Scalars['timestamptz'];
};

/** order by aggregate values of table "order_products" */
export type Order_Products_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Products_Max_Order_By>;
  min?: InputMaybe<Order_Products_Min_Order_By>;
  stddev?: InputMaybe<Order_Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Products_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_products" */
export type Order_Products_Arr_Rel_Insert_Input = {
  data: Array<Order_Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};

/** order by avg() on columns of table "order_products" */
export type Order_Products_Avg_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_products". All fields are combined with a logical 'AND'. */
export type Order_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Products_Bool_Exp>>;
  _not?: InputMaybe<Order_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Products_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_valid?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_products" */
export enum Order_Products_Constraint {
  /** unique or primary key constraint */
  OrderProductsPkey = 'order_products_pkey'
}

/** input type for incrementing numeric columns in table "order_products" */
export type Order_Products_Inc_Input = {
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "order_products" */
export type Order_Products_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** order by max() on columns of table "order_products" */
export type Order_Products_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "order_products" */
export type Order_Products_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_products" */
export type Order_Products_Mutation_Response = {
  __typename?: 'order_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Products>;
};

/** on_conflict condition type for table "order_products" */
export type Order_Products_On_Conflict = {
  constraint: Order_Products_Constraint;
  update_columns?: Array<Order_Products_Update_Column>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "order_products". */
export type Order_Products_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_valid?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_products */
export type Order_Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "order_products" */
export enum Order_Products_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "order_products" */
export type Order_Products_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** order by stddev() on columns of table "order_products" */
export type Order_Products_Stddev_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "order_products" */
export type Order_Products_Stddev_Pop_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "order_products" */
export type Order_Products_Stddev_Samp_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "order_products" */
export type Order_Products_Sum_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** update columns of table "order_products" */
export enum Order_Products_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price'
}

/** order by var_pop() on columns of table "order_products" */
export type Order_Products_Var_Pop_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "order_products" */
export type Order_Products_Var_Samp_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "order_products" */
export type Order_Products_Variance_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  created_at: Scalars['timestamptz'];
  customer_id: Scalars['uuid'];
  /** An object relationship */
  customers: Customers;
  id: Scalars['Int'];
  is_valid: Scalars['Boolean'];
  note?: Maybe<Scalars['String']>;
  order_date: Scalars['timestamptz'];
  /** An array relationship */
  order_products: Array<Order_Products>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "orders" */
export type OrdersOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
  stddev?: InputMaybe<Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer_id?: InputMaybe<Uuid_Comparison_Exp>;
  customers?: InputMaybe<Customers_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_valid?: InputMaybe<Boolean_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  order_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  order_products?: InputMaybe<Order_Products_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  customer_id?: InputMaybe<Scalars['uuid']>;
  customers?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  order_date?: InputMaybe<Scalars['timestamptz']>;
  order_products?: InputMaybe<Order_Products_Arr_Rel_Insert_Input>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
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
  customer_id?: InputMaybe<Order_By>;
  customers?: InputMaybe<Customers_Order_By>;
  id?: InputMaybe<Order_By>;
  is_valid?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  order_products_aggregate?: InputMaybe<Order_Products_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['Int'];
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
  IsValid = 'is_valid',
  /** column name */
  Note = 'note',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  customer_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['Int']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  order_date?: InputMaybe<Scalars['timestamptz']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Note = 'note',
  /** column name */
  OrderDate = 'order_date'
}

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  downloadGetUrl?: Maybe<GetUrlReturn>;
  downloadGetUrls?: Maybe<GetUrlsReturn>;
  file?: Maybe<File>;
  listParts?: Maybe<Part>;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** An array relationship */
  orders: Array<Orders>;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  part?: Maybe<Part>;
  prepareUploadParts?: Maybe<GetUrlReturn>;
  /** fetch data from the table: "test.test1_tables" using primary key columns */
  test1Table?: Maybe<Test1Tables>;
  /** fetch data from the table: "test.test1_tables" */
  test1Tables: Array<Test1Tables>;
  /** fetch data from the table: "test.test_tables" using primary key columns */
  testTable?: Maybe<TestTables>;
  /** fetch data from the table: "test.test_tables" */
  testTables: Array<TestTables>;
  /** fetch data from the table: "xr_models" using primary key columns */
  xrModel?: Maybe<XrModels>;
  /** fetch data from the table: "xr_models" */
  xrModels: Array<XrModels>;
  /** fetch data from the table: "xr_model_animations" */
  xr_model_animations: Array<Xr_Model_Animations>;
  /** fetch data from the table: "xr_model_animations" using primary key columns */
  xr_model_animations_by_pk?: Maybe<Xr_Model_Animations>;
  /** fetch data from the table: "xr_model_attachments" */
  xr_model_attachments: Array<Xr_Model_Attachments>;
  /** fetch data from the table: "xr_model_attachments" using primary key columns */
  xr_model_attachments_by_pk?: Maybe<Xr_Model_Attachments>;
  /** fetch data from the table: "xr_model_files" */
  xr_model_files: Array<Xr_Model_Files>;
  /** fetch data from the table: "xr_model_files" using primary key columns */
  xr_model_files_by_pk?: Maybe<Xr_Model_Files>;
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDownloadGetUrlArgs = {
  fileKey: Scalars['String'];
};


export type Query_RootDownloadGetUrlsArgs = {
  fileKeys: Array<InputMaybe<Scalars['String']>>;
};


export type Query_RootListPartsArgs = {
  fileKey: Scalars['String'];
  uploadId: Scalars['String'];
};


export type Query_RootOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Query_RootOrder_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPrepareUploadPartsArgs = {
  fileKey: Scalars['String'];
  partNumber: Scalars['Int'];
  uploadId: Scalars['String'];
};


export type Query_RootTest1TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest1TablesArgs = {
  distinct_on?: InputMaybe<Array<Test1Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test1Tables_Order_By>>;
  where?: InputMaybe<Test1Tables_Bool_Exp>;
};


export type Query_RootTestTableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTestTablesArgs = {
  distinct_on?: InputMaybe<Array<TestTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestTables_Order_By>>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};


export type Query_RootXrModelArgs = {
  id: Scalars['uuid'];
};


export type Query_RootXrModelsArgs = {
  distinct_on?: InputMaybe<Array<XrModels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<XrModels_Order_By>>;
  where?: InputMaybe<XrModels_Bool_Exp>;
};


export type Query_RootXr_Model_AnimationsArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Animations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Animations_Order_By>>;
  where?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
};


export type Query_RootXr_Model_Animations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootXr_Model_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Attachments_Order_By>>;
  where?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
};


export type Query_RootXr_Model_Attachments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootXr_Model_FilesArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Files_Order_By>>;
  where?: InputMaybe<Xr_Model_Files_Bool_Exp>;
};


export type Query_RootXr_Model_Files_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** An array relationship */
  orders: Array<Orders>;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "test.test1_tables" using primary key columns */
  test1Table?: Maybe<Test1Tables>;
  /** fetch data from the table: "test.test1_tables" */
  test1Tables: Array<Test1Tables>;
  /** fetch data from the table: "test.test_tables" using primary key columns */
  testTable?: Maybe<TestTables>;
  /** fetch data from the table: "test.test_tables" */
  testTables: Array<TestTables>;
  /** fetch data from the table: "xr_models" using primary key columns */
  xrModel?: Maybe<XrModels>;
  /** fetch data from the table: "xr_models" */
  xrModels: Array<XrModels>;
  /** fetch data from the table: "xr_model_animations" */
  xr_model_animations: Array<Xr_Model_Animations>;
  /** fetch data from the table: "xr_model_animations" using primary key columns */
  xr_model_animations_by_pk?: Maybe<Xr_Model_Animations>;
  /** fetch data from the table: "xr_model_attachments" */
  xr_model_attachments: Array<Xr_Model_Attachments>;
  /** fetch data from the table: "xr_model_attachments" using primary key columns */
  xr_model_attachments_by_pk?: Maybe<Xr_Model_Attachments>;
  /** fetch data from the table: "xr_model_files" */
  xr_model_files: Array<Xr_Model_Files>;
  /** fetch data from the table: "xr_model_files" using primary key columns */
  xr_model_files_by_pk?: Maybe<Xr_Model_Files>;
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Subscription_RootOrder_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTest1TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTest1TablesArgs = {
  distinct_on?: InputMaybe<Array<Test1Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test1Tables_Order_By>>;
  where?: InputMaybe<Test1Tables_Bool_Exp>;
};


export type Subscription_RootTestTableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTestTablesArgs = {
  distinct_on?: InputMaybe<Array<TestTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestTables_Order_By>>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};


export type Subscription_RootXrModelArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootXrModelsArgs = {
  distinct_on?: InputMaybe<Array<XrModels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<XrModels_Order_By>>;
  where?: InputMaybe<XrModels_Bool_Exp>;
};


export type Subscription_RootXr_Model_AnimationsArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Animations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Animations_Order_By>>;
  where?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
};


export type Subscription_RootXr_Model_Animations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootXr_Model_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Attachments_Order_By>>;
  where?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
};


export type Subscription_RootXr_Model_Attachments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootXr_Model_FilesArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Files_Order_By>>;
  where?: InputMaybe<Xr_Model_Files_Bool_Exp>;
};


export type Subscription_RootXr_Model_Files_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "test.test1_tables" */
export type Test1Tables = {
  __typename?: 'test1Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  test?: Maybe<Scalars['String']>;
  test2?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "test.test1_tables". All fields are combined with a logical 'AND'. */
export type Test1Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test1Tables_Bool_Exp>>;
  _not?: InputMaybe<Test1Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test1Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  test?: InputMaybe<String_Comparison_Exp>;
  test2?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test1_tables" */
export enum Test1Tables_Constraint {
  /** unique or primary key constraint */
  Test1TablesPkey = 'test1_tables_pkey'
}

/** input type for inserting data into table "test.test1_tables" */
export type Test1Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  test2?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test1_tables" */
export type Test1Tables_Mutation_Response = {
  __typename?: 'test1Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test1Tables>;
};

/** on_conflict condition type for table "test.test1_tables" */
export type Test1Tables_On_Conflict = {
  constraint: Test1Tables_Constraint;
  update_columns?: Array<Test1Tables_Update_Column>;
  where?: InputMaybe<Test1Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test1_tables". */
export type Test1Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test?: InputMaybe<Order_By>;
  test2?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test1Tables */
export type Test1Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test1_tables" */
export enum Test1Tables_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test = 'test',
  /** column name */
  Test2 = 'test2',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.test1_tables" */
export type Test1Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  test2?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test1_tables" */
export enum Test1Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test = 'test',
  /** column name */
  Test2 = 'test2',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.test_tables" */
export type TestTables = {
  __typename?: 'testTables';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "test.test_tables". All fields are combined with a logical 'AND'. */
export type TestTables_Bool_Exp = {
  _and?: InputMaybe<Array<TestTables_Bool_Exp>>;
  _not?: InputMaybe<TestTables_Bool_Exp>;
  _or?: InputMaybe<Array<TestTables_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test_tables" */
export enum TestTables_Constraint {
  /** unique or primary key constraint */
  TestTablesPkey = 'test_tables_pkey'
}

/** input type for inserting data into table "test.test_tables" */
export type TestTables_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test_tables" */
export type TestTables_Mutation_Response = {
  __typename?: 'testTables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TestTables>;
};

/** on_conflict condition type for table "test.test_tables" */
export type TestTables_On_Conflict = {
  constraint: TestTables_Constraint;
  update_columns?: Array<TestTables_Update_Column>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test_tables". */
export type TestTables_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: testTables */
export type TestTables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test_tables" */
export enum TestTables_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "test.test_tables" */
export type TestTables_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test_tables" */
export enum TestTables_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

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

/** columns and relationships of "xr_models" */
export type XrModels = {
  __typename?: 'xrModels';
  /** An array relationship */
  animations: Array<Xr_Model_Animations>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  logoPath?: Maybe<Scalars['String']>;
  minimapGlbPath?: Maybe<Scalars['String']>;
  minimapImgPath?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  thumbnailPath?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  xrModelAttachments: Array<Xr_Model_Attachments>;
  /** An array relationship */
  xrModelFiles: Array<Xr_Model_Files>;
};


/** columns and relationships of "xr_models" */
export type XrModelsAnimationsArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Animations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Animations_Order_By>>;
  where?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
};


/** columns and relationships of "xr_models" */
export type XrModelsXrModelAttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Attachments_Order_By>>;
  where?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
};


/** columns and relationships of "xr_models" */
export type XrModelsXrModelFilesArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Files_Order_By>>;
  where?: InputMaybe<Xr_Model_Files_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "xr_models". All fields are combined with a logical 'AND'. */
export type XrModels_Bool_Exp = {
  _and?: InputMaybe<Array<XrModels_Bool_Exp>>;
  _not?: InputMaybe<XrModels_Bool_Exp>;
  _or?: InputMaybe<Array<XrModels_Bool_Exp>>;
  animations?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  logoPath?: InputMaybe<String_Comparison_Exp>;
  minimapGlbPath?: InputMaybe<String_Comparison_Exp>;
  minimapImgPath?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  thumbnailPath?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  xrModelAttachments?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
  xrModelFiles?: InputMaybe<Xr_Model_Files_Bool_Exp>;
};

/** Ordering options when selecting data from "xr_models". */
export type XrModels_Order_By = {
  animations_aggregate?: InputMaybe<Xr_Model_Animations_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  logoPath?: InputMaybe<Order_By>;
  minimapGlbPath?: InputMaybe<Order_By>;
  minimapImgPath?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  thumbnailPath?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  xrModelAttachments_aggregate?: InputMaybe<Xr_Model_Attachments_Aggregate_Order_By>;
  xrModelFiles_aggregate?: InputMaybe<Xr_Model_Files_Aggregate_Order_By>;
};

/** select columns of table "xr_models" */
export enum XrModels_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  LogoPath = 'logoPath',
  /** column name */
  MinimapGlbPath = 'minimapGlbPath',
  /** column name */
  MinimapImgPath = 'minimapImgPath',
  /** column name */
  Name = 'name',
  /** column name */
  ThumbnailPath = 'thumbnailPath',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "xr_model_animations" */
export type Xr_Model_Animations = {
  __typename?: 'xr_model_animations';
  glbPath?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  xr_model?: Maybe<XrModels>;
  xr_model_id?: Maybe<Scalars['uuid']>;
};

/** order by aggregate values of table "xr_model_animations" */
export type Xr_Model_Animations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Xr_Model_Animations_Max_Order_By>;
  min?: InputMaybe<Xr_Model_Animations_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "xr_model_animations". All fields are combined with a logical 'AND'. */
export type Xr_Model_Animations_Bool_Exp = {
  _and?: InputMaybe<Array<Xr_Model_Animations_Bool_Exp>>;
  _not?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
  _or?: InputMaybe<Array<Xr_Model_Animations_Bool_Exp>>;
  glbPath?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  xr_model?: InputMaybe<XrModels_Bool_Exp>;
  xr_model_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "xr_model_animations" */
export type Xr_Model_Animations_Max_Order_By = {
  glbPath?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "xr_model_animations" */
export type Xr_Model_Animations_Min_Order_By = {
  glbPath?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "xr_model_animations". */
export type Xr_Model_Animations_Order_By = {
  glbPath?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  xr_model?: InputMaybe<XrModels_Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** select columns of table "xr_model_animations" */
export enum Xr_Model_Animations_Select_Column {
  /** column name */
  GlbPath = 'glbPath',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  XrModelId = 'xr_model_id'
}

/** columns and relationships of "xr_model_attachments" */
export type Xr_Model_Attachments = {
  __typename?: 'xr_model_attachments';
  element_path?: Maybe<Scalars['String']>;
  file_path?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  xr_model?: Maybe<XrModels>;
  xr_model_id?: Maybe<Scalars['uuid']>;
};

/** order by aggregate values of table "xr_model_attachments" */
export type Xr_Model_Attachments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Xr_Model_Attachments_Max_Order_By>;
  min?: InputMaybe<Xr_Model_Attachments_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "xr_model_attachments". All fields are combined with a logical 'AND'. */
export type Xr_Model_Attachments_Bool_Exp = {
  _and?: InputMaybe<Array<Xr_Model_Attachments_Bool_Exp>>;
  _not?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
  _or?: InputMaybe<Array<Xr_Model_Attachments_Bool_Exp>>;
  element_path?: InputMaybe<String_Comparison_Exp>;
  file_path?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  xr_model?: InputMaybe<XrModels_Bool_Exp>;
  xr_model_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "xr_model_attachments" */
export type Xr_Model_Attachments_Max_Order_By = {
  element_path?: InputMaybe<Order_By>;
  file_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "xr_model_attachments" */
export type Xr_Model_Attachments_Min_Order_By = {
  element_path?: InputMaybe<Order_By>;
  file_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "xr_model_attachments". */
export type Xr_Model_Attachments_Order_By = {
  element_path?: InputMaybe<Order_By>;
  file_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  xr_model?: InputMaybe<XrModels_Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** select columns of table "xr_model_attachments" */
export enum Xr_Model_Attachments_Select_Column {
  /** column name */
  ElementPath = 'element_path',
  /** column name */
  FilePath = 'file_path',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  XrModelId = 'xr_model_id'
}

/** columns and relationships of "xr_model_files" */
export type Xr_Model_Files = {
  __typename?: 'xr_model_files';
  glb_path?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  usdz_path?: Maybe<Scalars['String']>;
  /** An object relationship */
  xr_model?: Maybe<XrModels>;
  xr_model_id?: Maybe<Scalars['uuid']>;
};

/** order by aggregate values of table "xr_model_files" */
export type Xr_Model_Files_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Xr_Model_Files_Max_Order_By>;
  min?: InputMaybe<Xr_Model_Files_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "xr_model_files". All fields are combined with a logical 'AND'. */
export type Xr_Model_Files_Bool_Exp = {
  _and?: InputMaybe<Array<Xr_Model_Files_Bool_Exp>>;
  _not?: InputMaybe<Xr_Model_Files_Bool_Exp>;
  _or?: InputMaybe<Array<Xr_Model_Files_Bool_Exp>>;
  glb_path?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  usdz_path?: InputMaybe<String_Comparison_Exp>;
  xr_model?: InputMaybe<XrModels_Bool_Exp>;
  xr_model_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "xr_model_files" */
export type Xr_Model_Files_Max_Order_By = {
  glb_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  usdz_path?: InputMaybe<Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "xr_model_files" */
export type Xr_Model_Files_Min_Order_By = {
  glb_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  usdz_path?: InputMaybe<Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "xr_model_files". */
export type Xr_Model_Files_Order_By = {
  glb_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  usdz_path?: InputMaybe<Order_By>;
  xr_model?: InputMaybe<XrModels_Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** select columns of table "xr_model_files" */
export enum Xr_Model_Files_Select_Column {
  /** column name */
  GlbPath = 'glb_path',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UsdzPath = 'usdz_path',
  /** column name */
  XrModelId = 'xr_model_id'
}

export type DummyQueryVariables = Exact<{ [key: string]: never; }>;


export type DummyQuery = { __typename: 'query_root' };

export type OrdersQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Orders_Select_Column> | Orders_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By> | Orders_Order_By>;
  where?: InputMaybe<Orders_Bool_Exp>;
}>;


export type OrdersQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', id: number, note?: string | null, order_date: any }> };

export type Orders_By_PkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Orders_By_PkQuery = { __typename?: 'query_root', orders_by_pk?: { __typename?: 'orders', id: number, note?: string | null, order_date: any } | null };

export type Insert_OrdersMutationVariables = Exact<{
  orders: Array<Orders_Insert_Input> | Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
}>;


export type Insert_OrdersMutation = { __typename?: 'mutation_root', insert_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', created_at: any, customer_id: any, id: number, is_valid: boolean, note?: string | null, order_date: any, updated_at: any }> } | null };

export type Insert_Orders_OneMutationVariables = Exact<{
  orders: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
}>;


export type Insert_Orders_OneMutation = { __typename?: 'mutation_root', insert_orders_one?: { __typename?: 'orders', id: number, note?: string | null, order_date: any } | null };

export type Update_OrdersMutationVariables = Exact<{
  _inc?: InputMaybe<Orders_Inc_Input>;
  orders?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
}>;


export type Update_OrdersMutation = { __typename?: 'mutation_root', update_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', created_at: any, customer_id: any, id: number, is_valid: boolean, note?: string | null, order_date: any, updated_at: any }> } | null };

export type Update_Orders_By_PkMutationVariables = Exact<{
  _inc?: InputMaybe<Orders_Inc_Input>;
  orders?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
}>;


export type Update_Orders_By_PkMutation = { __typename?: 'mutation_root', update_orders_by_pk?: { __typename?: 'orders', id: number, note?: string | null, order_date: any } | null };

export type Orders_OrdersFragment = { __typename?: 'orders', id: number, note?: string | null, order_date: any };

export type Orders_By_Pk_OrdersFragment = { __typename?: 'orders', id: number, note?: string | null, order_date: any };

export type Insert_Orders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', created_at: any, customer_id: any, id: number, is_valid: boolean, note?: string | null, order_date: any, updated_at: any }> };

export type Insert_Orders_One_OrdersFragment = { __typename?: 'orders', id: number, note?: string | null, order_date: any };

export type Update_Orders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', created_at: any, customer_id: any, id: number, is_valid: boolean, note?: string | null, order_date: any, updated_at: any }> };

export type Update_Orders_By_Pk_OrdersFragment = { __typename?: 'orders', id: number, note?: string | null, order_date: any };

export type CustomersQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Customers_Select_Column> | Customers_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By> | Customers_Order_By>;
  where?: InputMaybe<Customers_Bool_Exp>;
}>;


export type CustomersQuery = { __typename?: 'query_root', customers: Array<{ __typename?: 'customers', id: any, first_name?: string | null, last_name: string, date_of_birth?: any | null, created_at: any, updated_at: any, is_valid: boolean }> };

export type Customers_By_PkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Customers_By_PkQuery = { __typename?: 'query_root', customers_by_pk?: { __typename?: 'customers', id: any, first_name?: string | null, last_name: string, date_of_birth?: any | null } | null };

export type Insert_CustomersMutationVariables = Exact<{
  customers: Array<Customers_Insert_Input> | Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
}>;


export type Insert_CustomersMutation = { __typename?: 'mutation_root', insert_customers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', created_at: any, date_of_birth?: any | null, first_name?: string | null, id: any, is_valid: boolean, last_name: string, updated_at: any, vip: boolean }> } | null };

export type Insert_Customers_OneMutationVariables = Exact<{
  customers: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
}>;


export type Insert_Customers_OneMutation = { __typename?: 'mutation_root', insert_customers_one?: { __typename?: 'customers', id: any, first_name?: string | null, last_name: string, date_of_birth?: any | null } | null };

export type Update_CustomersMutationVariables = Exact<{
  customers?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
}>;


export type Update_CustomersMutation = { __typename?: 'mutation_root', update_customers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', created_at: any, date_of_birth?: any | null, first_name?: string | null, id: any, is_valid: boolean, last_name: string, updated_at: any, vip: boolean }> } | null };

export type Update_Customers_By_PkMutationVariables = Exact<{
  customers?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
}>;


export type Update_Customers_By_PkMutation = { __typename?: 'mutation_root', update_customers_by_pk?: { __typename?: 'customers', id: any, first_name?: string | null, last_name: string, date_of_birth?: any | null } | null };

export type Customers_CustomersFragment = { __typename?: 'customers', id: any, first_name?: string | null, last_name: string, date_of_birth?: any | null, created_at: any, updated_at: any, is_valid: boolean };

export type Customers_By_Pk_CustomersFragment = { __typename?: 'customers', id: any, first_name?: string | null, last_name: string, date_of_birth?: any | null };

export type Insert_Customers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', created_at: any, date_of_birth?: any | null, first_name?: string | null, id: any, is_valid: boolean, last_name: string, updated_at: any, vip: boolean }> };

export type Insert_Customers_One_CustomersFragment = { __typename?: 'customers', id: any, first_name?: string | null, last_name: string, date_of_birth?: any | null };

export type Update_Customers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', created_at: any, date_of_birth?: any | null, first_name?: string | null, id: any, is_valid: boolean, last_name: string, updated_at: any, vip: boolean }> };

export type Update_Customers_By_Pk_CustomersFragment = { __typename?: 'customers', id: any, first_name?: string | null, last_name: string, date_of_birth?: any | null };

export const Orders_OrdersFragmentDoc = gql`
    fragment orders_orders on orders {
  id
  note
  order_date
}
    `;
export const Orders_By_Pk_OrdersFragmentDoc = gql`
    fragment orders_by_pk_orders on orders {
  id
  note
  order_date
}
    `;
export const Insert_Orders_Orders_Mutation_ResponseFragmentDoc = gql`
    fragment insert_orders_orders_mutation_response on orders_mutation_response {
  returning {
    created_at
    customer_id
    id
    is_valid
    note
    order_date
    updated_at
  }
}
    `;
export const Insert_Orders_One_OrdersFragmentDoc = gql`
    fragment insert_orders_one_orders on orders {
  id
  note
  order_date
}
    `;
export const Update_Orders_Orders_Mutation_ResponseFragmentDoc = gql`
    fragment update_orders_orders_mutation_response on orders_mutation_response {
  returning {
    created_at
    customer_id
    id
    is_valid
    note
    order_date
    updated_at
  }
}
    `;
export const Update_Orders_By_Pk_OrdersFragmentDoc = gql`
    fragment update_orders_by_pk_orders on orders {
  id
  note
  order_date
}
    `;
export const Customers_CustomersFragmentDoc = gql`
    fragment customers_customers on customers {
  id
  first_name
  last_name
  date_of_birth
  created_at
  updated_at
  is_valid
}
    `;
export const Customers_By_Pk_CustomersFragmentDoc = gql`
    fragment customers_by_pk_customers on customers {
  id
  first_name
  last_name
  date_of_birth
}
    `;
export const Insert_Customers_Customers_Mutation_ResponseFragmentDoc = gql`
    fragment insert_customers_customers_mutation_response on customers_mutation_response {
  returning {
    created_at
    date_of_birth
    first_name
    id
    is_valid
    last_name
    updated_at
    vip
  }
}
    `;
export const Insert_Customers_One_CustomersFragmentDoc = gql`
    fragment insert_customers_one_customers on customers {
  id
  first_name
  last_name
  date_of_birth
}
    `;
export const Update_Customers_Customers_Mutation_ResponseFragmentDoc = gql`
    fragment update_customers_customers_mutation_response on customers_mutation_response {
  returning {
    created_at
    date_of_birth
    first_name
    id
    is_valid
    last_name
    updated_at
    vip
  }
}
    `;
export const Update_Customers_By_Pk_CustomersFragmentDoc = gql`
    fragment update_customers_by_pk_customers on customers {
  id
  first_name
  last_name
  date_of_birth
}
    `;
export const DummyDocument = gql`
    query dummy {
  __typename
}
    `;

export function useDummyQuery(options?: Omit<Urql.UseQueryArgs<DummyQueryVariables>, 'query'>) {
  return Urql.useQuery<DummyQuery>({ query: DummyDocument, ...options });
};
export const OrdersDocument = gql`
    query orders($distinct_on: [orders_select_column!], $limit: Int, $offset: Int, $order_by: [orders_order_by!] = {updated_at: desc}, $where: orders_bool_exp) {
  orders(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...orders_orders
  }
}
    ${Orders_OrdersFragmentDoc}`;

export function useOrdersQuery(options?: Omit<Urql.UseQueryArgs<OrdersQueryVariables>, 'query'>) {
  return Urql.useQuery<OrdersQuery>({ query: OrdersDocument, ...options });
};
export const Orders_By_PkDocument = gql`
    query orders_by_pk($id: Int!) {
  orders_by_pk(id: $id) {
    ...orders_by_pk_orders
  }
}
    ${Orders_By_Pk_OrdersFragmentDoc}`;

export function useOrders_By_PkQuery(options: Omit<Urql.UseQueryArgs<Orders_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Orders_By_PkQuery>({ query: Orders_By_PkDocument, ...options });
};
export const Insert_OrdersDocument = gql`
    mutation insert_orders($orders: [orders_insert_input!]!, $on_conflict: orders_on_conflict) {
  insert_orders(objects: $orders, on_conflict: $on_conflict) {
    ...insert_orders_orders_mutation_response
  }
}
    ${Insert_Orders_Orders_Mutation_ResponseFragmentDoc}`;

export function useInsert_OrdersMutation() {
  return Urql.useMutation<Insert_OrdersMutation, Insert_OrdersMutationVariables>(Insert_OrdersDocument);
};
export const Insert_Orders_OneDocument = gql`
    mutation insert_orders_one($orders: orders_insert_input!, $on_conflict: orders_on_conflict) {
  insert_orders_one(object: $orders, on_conflict: $on_conflict) {
    ...insert_orders_one_orders
  }
}
    ${Insert_Orders_One_OrdersFragmentDoc}`;

export function useInsert_Orders_OneMutation() {
  return Urql.useMutation<Insert_Orders_OneMutation, Insert_Orders_OneMutationVariables>(Insert_Orders_OneDocument);
};
export const Update_OrdersDocument = gql`
    mutation update_orders($_inc: orders_inc_input, $orders: orders_set_input, $where: orders_bool_exp!) {
  update_orders(_inc: $_inc, _set: $orders, where: $where) {
    ...update_orders_orders_mutation_response
  }
}
    ${Update_Orders_Orders_Mutation_ResponseFragmentDoc}`;

export function useUpdate_OrdersMutation() {
  return Urql.useMutation<Update_OrdersMutation, Update_OrdersMutationVariables>(Update_OrdersDocument);
};
export const Update_Orders_By_PkDocument = gql`
    mutation update_orders_by_pk($_inc: orders_inc_input, $orders: orders_set_input, $pk_columns: orders_pk_columns_input!) {
  update_orders_by_pk(_inc: $_inc, _set: $orders, pk_columns: $pk_columns) {
    ...update_orders_by_pk_orders
  }
}
    ${Update_Orders_By_Pk_OrdersFragmentDoc}`;

export function useUpdate_Orders_By_PkMutation() {
  return Urql.useMutation<Update_Orders_By_PkMutation, Update_Orders_By_PkMutationVariables>(Update_Orders_By_PkDocument);
};
export const CustomersDocument = gql`
    query customers($distinct_on: [customers_select_column!], $limit: Int, $offset: Int, $order_by: [customers_order_by!] = {updated_at: desc}, $where: customers_bool_exp) {
  customers(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...customers_customers
  }
}
    ${Customers_CustomersFragmentDoc}`;

export function useCustomersQuery(options?: Omit<Urql.UseQueryArgs<CustomersQueryVariables>, 'query'>) {
  return Urql.useQuery<CustomersQuery>({ query: CustomersDocument, ...options });
};
export const Customers_By_PkDocument = gql`
    query customers_by_pk($id: uuid!) {
  customers_by_pk(id: $id) {
    ...customers_by_pk_customers
  }
}
    ${Customers_By_Pk_CustomersFragmentDoc}`;

export function useCustomers_By_PkQuery(options: Omit<Urql.UseQueryArgs<Customers_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Customers_By_PkQuery>({ query: Customers_By_PkDocument, ...options });
};
export const Insert_CustomersDocument = gql`
    mutation insert_customers($customers: [customers_insert_input!]!, $on_conflict: customers_on_conflict) {
  insert_customers(objects: $customers, on_conflict: $on_conflict) {
    ...insert_customers_customers_mutation_response
  }
}
    ${Insert_Customers_Customers_Mutation_ResponseFragmentDoc}`;

export function useInsert_CustomersMutation() {
  return Urql.useMutation<Insert_CustomersMutation, Insert_CustomersMutationVariables>(Insert_CustomersDocument);
};
export const Insert_Customers_OneDocument = gql`
    mutation insert_customers_one($customers: customers_insert_input!, $on_conflict: customers_on_conflict) {
  insert_customers_one(object: $customers, on_conflict: $on_conflict) {
    ...insert_customers_one_customers
  }
}
    ${Insert_Customers_One_CustomersFragmentDoc}`;

export function useInsert_Customers_OneMutation() {
  return Urql.useMutation<Insert_Customers_OneMutation, Insert_Customers_OneMutationVariables>(Insert_Customers_OneDocument);
};
export const Update_CustomersDocument = gql`
    mutation update_customers($customers: customers_set_input, $where: customers_bool_exp!) {
  update_customers(_set: $customers, where: $where) {
    ...update_customers_customers_mutation_response
  }
}
    ${Update_Customers_Customers_Mutation_ResponseFragmentDoc}`;

export function useUpdate_CustomersMutation() {
  return Urql.useMutation<Update_CustomersMutation, Update_CustomersMutationVariables>(Update_CustomersDocument);
};
export const Update_Customers_By_PkDocument = gql`
    mutation update_customers_by_pk($customers: customers_set_input, $pk_columns: customers_pk_columns_input!) {
  update_customers_by_pk(_set: $customers, pk_columns: $pk_columns) {
    ...update_customers_by_pk_customers
  }
}
    ${Update_Customers_By_Pk_CustomersFragmentDoc}`;

export function useUpdate_Customers_By_PkMutation() {
  return Urql.useMutation<Update_Customers_By_PkMutation, Update_Customers_By_PkMutationVariables>(Update_Customers_By_PkDocument);
};