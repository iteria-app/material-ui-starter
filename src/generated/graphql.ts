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
  /** insert a single row into the table: "test.new1_tables" */
  insertNew1Table?: Maybe<New1Tables>;
  /** insert data into the table: "test.new1_tables" */
  insertNew1Tables?: Maybe<New1Tables_Mutation_Response>;
  /** insert a single row into the table: "test.new2_tables" */
  insertNew2Table?: Maybe<New2Tables>;
  /** insert data into the table: "test.new2_tables" */
  insertNew2Tables?: Maybe<New2Tables_Mutation_Response>;
  /** insert a single row into the table: "test.new3_tables" */
  insertNew3Table?: Maybe<New3Tables>;
  /** insert data into the table: "test.new3_tables" */
  insertNew3Tables?: Maybe<New3Tables_Mutation_Response>;
  /** insert a single row into the table: "test.new4_tables" */
  insertNew4Table?: Maybe<New4Tables>;
  /** insert data into the table: "test.new4_tables" */
  insertNew4Tables?: Maybe<New4Tables_Mutation_Response>;
  /** insert a single row into the table: "test.new5_tables" */
  insertNew5Table?: Maybe<New5Tables>;
  /** insert data into the table: "test.new5_tables" */
  insertNew5Tables?: Maybe<New5Tables_Mutation_Response>;
  /** insert a single row into the table: "test.new6_tables" */
  insertNew6Table?: Maybe<New6Tables>;
  /** insert data into the table: "test.new6_tables" */
  insertNew6Tables?: Maybe<New6Tables_Mutation_Response>;
  /** insert a single row into the table: "test.new8_tables" */
  insertNew8Table?: Maybe<New8Tables>;
  /** insert data into the table: "test.new8_tables" */
  insertNew8Tables?: Maybe<New8Tables_Mutation_Response>;
  /** insert a single row into the table: "test.new_tables" */
  insertNewTable?: Maybe<NewTables>;
  /** insert data into the table: "test.new_tables" */
  insertNewTables?: Maybe<NewTables_Mutation_Response>;
  /** insert a single row into the table: "test2_tables" */
  insertTest2Table?: Maybe<Test2Tables>;
  /** insert data into the table: "test2_tables" */
  insertTest2Tables?: Maybe<Test2Tables_Mutation_Response>;
  /** insert a single row into the table: "test5_tables" */
  insertTest5Table?: Maybe<Test5Tables>;
  /** insert data into the table: "test5_tables" */
  insertTest5Tables?: Maybe<Test5Tables_Mutation_Response>;
  /** insert a single row into the table: "test6_tables" */
  insertTest6Table?: Maybe<Test6Tables>;
  /** insert data into the table: "test6_tables" */
  insertTest6Tables?: Maybe<Test6Tables_Mutation_Response>;
  /** insert a single row into the table: "test_tables" */
  insertTestTable?: Maybe<TestTables>;
  /** insert data into the table: "test_tables" */
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
  /** update single row of the table: "test.new1_tables" */
  updateNew1Table?: Maybe<New1Tables>;
  /** update data of the table: "test.new1_tables" */
  updateNew1Tables?: Maybe<New1Tables_Mutation_Response>;
  /** update single row of the table: "test.new2_tables" */
  updateNew2Table?: Maybe<New2Tables>;
  /** update data of the table: "test.new2_tables" */
  updateNew2Tables?: Maybe<New2Tables_Mutation_Response>;
  /** update single row of the table: "test.new3_tables" */
  updateNew3Table?: Maybe<New3Tables>;
  /** update data of the table: "test.new3_tables" */
  updateNew3Tables?: Maybe<New3Tables_Mutation_Response>;
  /** update single row of the table: "test.new4_tables" */
  updateNew4Table?: Maybe<New4Tables>;
  /** update data of the table: "test.new4_tables" */
  updateNew4Tables?: Maybe<New4Tables_Mutation_Response>;
  /** update single row of the table: "test.new5_tables" */
  updateNew5Table?: Maybe<New5Tables>;
  /** update data of the table: "test.new5_tables" */
  updateNew5Tables?: Maybe<New5Tables_Mutation_Response>;
  /** update single row of the table: "test.new6_tables" */
  updateNew6Table?: Maybe<New6Tables>;
  /** update data of the table: "test.new6_tables" */
  updateNew6Tables?: Maybe<New6Tables_Mutation_Response>;
  /** update single row of the table: "test.new8_tables" */
  updateNew8Table?: Maybe<New8Tables>;
  /** update data of the table: "test.new8_tables" */
  updateNew8Tables?: Maybe<New8Tables_Mutation_Response>;
  /** update single row of the table: "test.new_tables" */
  updateNewTable?: Maybe<NewTables>;
  /** update data of the table: "test.new_tables" */
  updateNewTables?: Maybe<NewTables_Mutation_Response>;
  /** update single row of the table: "test2_tables" */
  updateTest2Table?: Maybe<Test2Tables>;
  /** update data of the table: "test2_tables" */
  updateTest2Tables?: Maybe<Test2Tables_Mutation_Response>;
  /** update single row of the table: "test5_tables" */
  updateTest5Table?: Maybe<Test5Tables>;
  /** update data of the table: "test5_tables" */
  updateTest5Tables?: Maybe<Test5Tables_Mutation_Response>;
  /** update single row of the table: "test6_tables" */
  updateTest6Table?: Maybe<Test6Tables>;
  /** update data of the table: "test6_tables" */
  updateTest6Tables?: Maybe<Test6Tables_Mutation_Response>;
  /** update single row of the table: "test_tables" */
  updateTestTable?: Maybe<TestTables>;
  /** update data of the table: "test_tables" */
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
export type Mutation_RootInsertNew1TableArgs = {
  object: New1Tables_Insert_Input;
  on_conflict?: InputMaybe<New1Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNew1TablesArgs = {
  objects: Array<New1Tables_Insert_Input>;
  on_conflict?: InputMaybe<New1Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNew2TableArgs = {
  object: New2Tables_Insert_Input;
  on_conflict?: InputMaybe<New2Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNew2TablesArgs = {
  objects: Array<New2Tables_Insert_Input>;
  on_conflict?: InputMaybe<New2Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNew3TableArgs = {
  object: New3Tables_Insert_Input;
  on_conflict?: InputMaybe<New3Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNew3TablesArgs = {
  objects: Array<New3Tables_Insert_Input>;
  on_conflict?: InputMaybe<New3Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNew4TableArgs = {
  object: New4Tables_Insert_Input;
  on_conflict?: InputMaybe<New4Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNew4TablesArgs = {
  objects: Array<New4Tables_Insert_Input>;
  on_conflict?: InputMaybe<New4Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNew5TableArgs = {
  object: New5Tables_Insert_Input;
  on_conflict?: InputMaybe<New5Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNew5TablesArgs = {
  objects: Array<New5Tables_Insert_Input>;
  on_conflict?: InputMaybe<New5Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNew6TableArgs = {
  object: New6Tables_Insert_Input;
  on_conflict?: InputMaybe<New6Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNew6TablesArgs = {
  objects: Array<New6Tables_Insert_Input>;
  on_conflict?: InputMaybe<New6Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNew8TableArgs = {
  object: New8Tables_Insert_Input;
  on_conflict?: InputMaybe<New8Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNew8TablesArgs = {
  objects: Array<New8Tables_Insert_Input>;
  on_conflict?: InputMaybe<New8Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNewTableArgs = {
  object: NewTables_Insert_Input;
  on_conflict?: InputMaybe<NewTables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertNewTablesArgs = {
  objects: Array<NewTables_Insert_Input>;
  on_conflict?: InputMaybe<NewTables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest2TableArgs = {
  object: Test2Tables_Insert_Input;
  on_conflict?: InputMaybe<Test2Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest2TablesArgs = {
  objects: Array<Test2Tables_Insert_Input>;
  on_conflict?: InputMaybe<Test2Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest5TableArgs = {
  object: Test5Tables_Insert_Input;
  on_conflict?: InputMaybe<Test5Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest5TablesArgs = {
  objects: Array<Test5Tables_Insert_Input>;
  on_conflict?: InputMaybe<Test5Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest6TableArgs = {
  object: Test6Tables_Insert_Input;
  on_conflict?: InputMaybe<Test6Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest6TablesArgs = {
  objects: Array<Test6Tables_Insert_Input>;
  on_conflict?: InputMaybe<Test6Tables_On_Conflict>;
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
export type Mutation_RootUpdateNew1TableArgs = {
  _set?: InputMaybe<New1Tables_Set_Input>;
  pk_columns: New1Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateNew1TablesArgs = {
  _set?: InputMaybe<New1Tables_Set_Input>;
  where: New1Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateNew2TableArgs = {
  _set?: InputMaybe<New2Tables_Set_Input>;
  pk_columns: New2Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateNew2TablesArgs = {
  _set?: InputMaybe<New2Tables_Set_Input>;
  where: New2Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateNew3TableArgs = {
  _set?: InputMaybe<New3Tables_Set_Input>;
  pk_columns: New3Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateNew3TablesArgs = {
  _set?: InputMaybe<New3Tables_Set_Input>;
  where: New3Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateNew4TableArgs = {
  _set?: InputMaybe<New4Tables_Set_Input>;
  pk_columns: New4Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateNew4TablesArgs = {
  _set?: InputMaybe<New4Tables_Set_Input>;
  where: New4Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateNew5TableArgs = {
  _set?: InputMaybe<New5Tables_Set_Input>;
  pk_columns: New5Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateNew5TablesArgs = {
  _set?: InputMaybe<New5Tables_Set_Input>;
  where: New5Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateNew6TableArgs = {
  _set?: InputMaybe<New6Tables_Set_Input>;
  pk_columns: New6Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateNew6TablesArgs = {
  _set?: InputMaybe<New6Tables_Set_Input>;
  where: New6Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateNew8TableArgs = {
  _set?: InputMaybe<New8Tables_Set_Input>;
  pk_columns: New8Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateNew8TablesArgs = {
  _set?: InputMaybe<New8Tables_Set_Input>;
  where: New8Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateNewTableArgs = {
  _set?: InputMaybe<NewTables_Set_Input>;
  pk_columns: NewTables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateNewTablesArgs = {
  _set?: InputMaybe<NewTables_Set_Input>;
  where: NewTables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTest2TableArgs = {
  _set?: InputMaybe<Test2Tables_Set_Input>;
  pk_columns: Test2Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTest2TablesArgs = {
  _set?: InputMaybe<Test2Tables_Set_Input>;
  where: Test2Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTest5TableArgs = {
  _set?: InputMaybe<Test5Tables_Set_Input>;
  pk_columns: Test5Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTest5TablesArgs = {
  _set?: InputMaybe<Test5Tables_Set_Input>;
  where: Test5Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTest6TableArgs = {
  _set?: InputMaybe<Test6Tables_Set_Input>;
  pk_columns: Test6Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTest6TablesArgs = {
  _set?: InputMaybe<Test6Tables_Set_Input>;
  where: Test6Tables_Bool_Exp;
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

/** columns and relationships of "test.new1_tables" */
export type New1Tables = {
  __typename?: 'new1Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  myNote?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "test.new1_tables". All fields are combined with a logical 'AND'. */
export type New1Tables_Bool_Exp = {
  _and?: InputMaybe<Array<New1Tables_Bool_Exp>>;
  _not?: InputMaybe<New1Tables_Bool_Exp>;
  _or?: InputMaybe<Array<New1Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  myNote?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.new1_tables" */
export enum New1Tables_Constraint {
  /** unique or primary key constraint */
  New1TablesPkey = 'new1_tables_pkey'
}

/** input type for inserting data into table "test.new1_tables" */
export type New1Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  myNote?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.new1_tables" */
export type New1Tables_Mutation_Response = {
  __typename?: 'new1Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<New1Tables>;
};

/** on_conflict condition type for table "test.new1_tables" */
export type New1Tables_On_Conflict = {
  constraint: New1Tables_Constraint;
  update_columns?: Array<New1Tables_Update_Column>;
  where?: InputMaybe<New1Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.new1_tables". */
export type New1Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  myNote?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: new1Tables */
export type New1Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.new1_tables" */
export enum New1Tables_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  MyNote = 'myNote',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.new1_tables" */
export type New1Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  myNote?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.new1_tables" */
export enum New1Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  MyNote = 'myNote',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.new2_tables" */
export type New2Tables = {
  __typename?: 'new2Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An object relationship */
  new3Table: New3Tables;
  test3Id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** order by aggregate values of table "test.new2_tables" */
export type New2Tables_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<New2Tables_Max_Order_By>;
  min?: InputMaybe<New2Tables_Min_Order_By>;
};

/** input type for inserting array relation for remote table "test.new2_tables" */
export type New2Tables_Arr_Rel_Insert_Input = {
  data: Array<New2Tables_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<New2Tables_On_Conflict>;
};

/** Boolean expression to filter rows from the table "test.new2_tables". All fields are combined with a logical 'AND'. */
export type New2Tables_Bool_Exp = {
  _and?: InputMaybe<Array<New2Tables_Bool_Exp>>;
  _not?: InputMaybe<New2Tables_Bool_Exp>;
  _or?: InputMaybe<Array<New2Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  new3Table?: InputMaybe<New3Tables_Bool_Exp>;
  test3Id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.new2_tables" */
export enum New2Tables_Constraint {
  /** unique or primary key constraint */
  New2TablesPkey = 'new2_tables_pkey'
}

/** input type for inserting data into table "test.new2_tables" */
export type New2Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  new3Table?: InputMaybe<New3Tables_Obj_Rel_Insert_Input>;
  test3Id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "test.new2_tables" */
export type New2Tables_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test3Id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "test.new2_tables" */
export type New2Tables_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test3Id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "test.new2_tables" */
export type New2Tables_Mutation_Response = {
  __typename?: 'new2Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<New2Tables>;
};

/** on_conflict condition type for table "test.new2_tables" */
export type New2Tables_On_Conflict = {
  constraint: New2Tables_Constraint;
  update_columns?: Array<New2Tables_Update_Column>;
  where?: InputMaybe<New2Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.new2_tables". */
export type New2Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  new3Table?: InputMaybe<New3Tables_Order_By>;
  test3Id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: new2Tables */
export type New2Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.new2_tables" */
export enum New2Tables_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test3Id = 'test3Id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.new2_tables" */
export type New2Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test3Id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.new2_tables" */
export enum New2Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test3Id = 'test3Id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.new3_tables" */
export type New3Tables = {
  __typename?: 'new3Tables';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  new2Tables: Array<New2Tables>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "test.new3_tables" */
export type New3TablesNew2TablesArgs = {
  distinct_on?: InputMaybe<Array<New2Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New2Tables_Order_By>>;
  where?: InputMaybe<New2Tables_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "test.new3_tables". All fields are combined with a logical 'AND'. */
export type New3Tables_Bool_Exp = {
  _and?: InputMaybe<Array<New3Tables_Bool_Exp>>;
  _not?: InputMaybe<New3Tables_Bool_Exp>;
  _or?: InputMaybe<Array<New3Tables_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  new2Tables?: InputMaybe<New2Tables_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.new3_tables" */
export enum New3Tables_Constraint {
  /** unique or primary key constraint */
  New3TablesPkey = 'new3_tables_pkey'
}

/** input type for inserting data into table "test.new3_tables" */
export type New3Tables_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  new2Tables?: InputMaybe<New2Tables_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.new3_tables" */
export type New3Tables_Mutation_Response = {
  __typename?: 'new3Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<New3Tables>;
};

/** input type for inserting object relation for remote table "test.new3_tables" */
export type New3Tables_Obj_Rel_Insert_Input = {
  data: New3Tables_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<New3Tables_On_Conflict>;
};

/** on_conflict condition type for table "test.new3_tables" */
export type New3Tables_On_Conflict = {
  constraint: New3Tables_Constraint;
  update_columns?: Array<New3Tables_Update_Column>;
  where?: InputMaybe<New3Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.new3_tables". */
export type New3Tables_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  new2Tables_aggregate?: InputMaybe<New2Tables_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: new3Tables */
export type New3Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.new3_tables" */
export enum New3Tables_Select_Column {
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

/** input type for updating data in table "test.new3_tables" */
export type New3Tables_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.new3_tables" */
export enum New3Tables_Update_Column {
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

/** columns and relationships of "test.new4_tables" */
export type New4Tables = {
  __typename?: 'new4Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  myNote?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  text2?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "test.new4_tables". All fields are combined with a logical 'AND'. */
export type New4Tables_Bool_Exp = {
  _and?: InputMaybe<Array<New4Tables_Bool_Exp>>;
  _not?: InputMaybe<New4Tables_Bool_Exp>;
  _or?: InputMaybe<Array<New4Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  myNote?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  text2?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.new4_tables" */
export enum New4Tables_Constraint {
  /** unique or primary key constraint */
  New4TablesPkey = 'new4_tables_pkey'
}

/** input type for inserting data into table "test.new4_tables" */
export type New4Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  myNote?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  text2?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.new4_tables" */
export type New4Tables_Mutation_Response = {
  __typename?: 'new4Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<New4Tables>;
};

/** on_conflict condition type for table "test.new4_tables" */
export type New4Tables_On_Conflict = {
  constraint: New4Tables_Constraint;
  update_columns?: Array<New4Tables_Update_Column>;
  where?: InputMaybe<New4Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.new4_tables". */
export type New4Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  myNote?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  text2?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: new4Tables */
export type New4Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.new4_tables" */
export enum New4Tables_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  MyNote = 'myNote',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  Text2 = 'text2',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.new4_tables" */
export type New4Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  myNote?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  text2?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.new4_tables" */
export enum New4Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  MyNote = 'myNote',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  Text2 = 'text2',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.new5_tables" */
export type New5Tables = {
  __typename?: 'new5Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  myNote?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  text2?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "test.new5_tables". All fields are combined with a logical 'AND'. */
export type New5Tables_Bool_Exp = {
  _and?: InputMaybe<Array<New5Tables_Bool_Exp>>;
  _not?: InputMaybe<New5Tables_Bool_Exp>;
  _or?: InputMaybe<Array<New5Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  myNote?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  text2?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.new5_tables" */
export enum New5Tables_Constraint {
  /** unique or primary key constraint */
  New5TablesPkey = 'new5_tables_pkey'
}

/** input type for inserting data into table "test.new5_tables" */
export type New5Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  myNote?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  text2?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.new5_tables" */
export type New5Tables_Mutation_Response = {
  __typename?: 'new5Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<New5Tables>;
};

/** on_conflict condition type for table "test.new5_tables" */
export type New5Tables_On_Conflict = {
  constraint: New5Tables_Constraint;
  update_columns?: Array<New5Tables_Update_Column>;
  where?: InputMaybe<New5Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.new5_tables". */
export type New5Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  myNote?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  text2?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: new5Tables */
export type New5Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.new5_tables" */
export enum New5Tables_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  MyNote = 'myNote',
  /** column name */
  Name = 'name',
  /** column name */
  Text2 = 'text2',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.new5_tables" */
export type New5Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  myNote?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  text2?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.new5_tables" */
export enum New5Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  MyNote = 'myNote',
  /** column name */
  Name = 'name',
  /** column name */
  Text2 = 'text2',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.new6_tables" */
export type New6Tables = {
  __typename?: 'new6Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  myNote?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "test.new6_tables". All fields are combined with a logical 'AND'. */
export type New6Tables_Bool_Exp = {
  _and?: InputMaybe<Array<New6Tables_Bool_Exp>>;
  _not?: InputMaybe<New6Tables_Bool_Exp>;
  _or?: InputMaybe<Array<New6Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  myNote?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.new6_tables" */
export enum New6Tables_Constraint {
  /** unique or primary key constraint */
  New6TablesPkey = 'new6_tables_pkey'
}

/** input type for inserting data into table "test.new6_tables" */
export type New6Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  myNote?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.new6_tables" */
export type New6Tables_Mutation_Response = {
  __typename?: 'new6Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<New6Tables>;
};

/** on_conflict condition type for table "test.new6_tables" */
export type New6Tables_On_Conflict = {
  constraint: New6Tables_Constraint;
  update_columns?: Array<New6Tables_Update_Column>;
  where?: InputMaybe<New6Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.new6_tables". */
export type New6Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  myNote?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: new6Tables */
export type New6Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.new6_tables" */
export enum New6Tables_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  MyNote = 'myNote',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.new6_tables" */
export type New6Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  myNote?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.new6_tables" */
export enum New6Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  MyNote = 'myNote',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.new8_tables" */
export type New8Tables = {
  __typename?: 'new8Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An object relationship */
  newTable: NewTables;
  test?: Maybe<Scalars['String']>;
  test1Id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** order by aggregate values of table "test.new8_tables" */
export type New8Tables_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<New8Tables_Max_Order_By>;
  min?: InputMaybe<New8Tables_Min_Order_By>;
};

/** input type for inserting array relation for remote table "test.new8_tables" */
export type New8Tables_Arr_Rel_Insert_Input = {
  data: Array<New8Tables_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<New8Tables_On_Conflict>;
};

/** Boolean expression to filter rows from the table "test.new8_tables". All fields are combined with a logical 'AND'. */
export type New8Tables_Bool_Exp = {
  _and?: InputMaybe<Array<New8Tables_Bool_Exp>>;
  _not?: InputMaybe<New8Tables_Bool_Exp>;
  _or?: InputMaybe<Array<New8Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  newTable?: InputMaybe<NewTables_Bool_Exp>;
  test?: InputMaybe<String_Comparison_Exp>;
  test1Id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.new8_tables" */
export enum New8Tables_Constraint {
  /** unique or primary key constraint */
  New8TablesPkey = 'new8_tables_pkey'
}

/** input type for inserting data into table "test.new8_tables" */
export type New8Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  newTable?: InputMaybe<NewTables_Obj_Rel_Insert_Input>;
  test?: InputMaybe<Scalars['String']>;
  test1Id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "test.new8_tables" */
export type New8Tables_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test?: InputMaybe<Order_By>;
  test1Id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "test.new8_tables" */
export type New8Tables_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test?: InputMaybe<Order_By>;
  test1Id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "test.new8_tables" */
export type New8Tables_Mutation_Response = {
  __typename?: 'new8Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<New8Tables>;
};

/** on_conflict condition type for table "test.new8_tables" */
export type New8Tables_On_Conflict = {
  constraint: New8Tables_Constraint;
  update_columns?: Array<New8Tables_Update_Column>;
  where?: InputMaybe<New8Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.new8_tables". */
export type New8Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  newTable?: InputMaybe<NewTables_Order_By>;
  test?: InputMaybe<Order_By>;
  test1Id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: new8Tables */
export type New8Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.new8_tables" */
export enum New8Tables_Select_Column {
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
  Test1Id = 'test1Id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.new8_tables" */
export type New8Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  test1Id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.new8_tables" */
export enum New8Tables_Update_Column {
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
  Test1Id = 'test1Id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.new_tables" */
export type NewTables = {
  __typename?: 'newTables';
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  new8Tables: Array<New8Tables>;
  test2?: Maybe<Scalars['String']>;
  test5Id: Scalars['uuid'];
  /** An object relationship */
  test5Table: Test5Tables;
  text?: Maybe<Scalars['String']>;
  text2?: Maybe<Scalars['String']>;
  text3?: Maybe<Scalars['String']>;
  text4?: Maybe<Scalars['String']>;
  text5?: Maybe<Scalars['String']>;
};


/** columns and relationships of "test.new_tables" */
export type NewTablesNew8TablesArgs = {
  distinct_on?: InputMaybe<Array<New8Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New8Tables_Order_By>>;
  where?: InputMaybe<New8Tables_Bool_Exp>;
};

/** order by aggregate values of table "test.new_tables" */
export type NewTables_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<NewTables_Max_Order_By>;
  min?: InputMaybe<NewTables_Min_Order_By>;
};

/** input type for inserting array relation for remote table "test.new_tables" */
export type NewTables_Arr_Rel_Insert_Input = {
  data: Array<NewTables_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<NewTables_On_Conflict>;
};

/** Boolean expression to filter rows from the table "test.new_tables". All fields are combined with a logical 'AND'. */
export type NewTables_Bool_Exp = {
  _and?: InputMaybe<Array<NewTables_Bool_Exp>>;
  _not?: InputMaybe<NewTables_Bool_Exp>;
  _or?: InputMaybe<Array<NewTables_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  new8Tables?: InputMaybe<New8Tables_Bool_Exp>;
  test2?: InputMaybe<String_Comparison_Exp>;
  test5Id?: InputMaybe<Uuid_Comparison_Exp>;
  test5Table?: InputMaybe<Test5Tables_Bool_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  text2?: InputMaybe<String_Comparison_Exp>;
  text3?: InputMaybe<String_Comparison_Exp>;
  text4?: InputMaybe<String_Comparison_Exp>;
  text5?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.new_tables" */
export enum NewTables_Constraint {
  /** unique or primary key constraint */
  NewTablesPkey = 'new_tables_pkey',
  /** unique or primary key constraint */
  NewTablesText2Key = 'new_tables_text2_key',
  /** unique or primary key constraint */
  NewTablesTextKey = 'new_tables_text_key'
}

/** input type for inserting data into table "test.new_tables" */
export type NewTables_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  new8Tables?: InputMaybe<New8Tables_Arr_Rel_Insert_Input>;
  test2?: InputMaybe<Scalars['String']>;
  test5Id?: InputMaybe<Scalars['uuid']>;
  test5Table?: InputMaybe<Test5Tables_Obj_Rel_Insert_Input>;
  text?: InputMaybe<Scalars['String']>;
  text2?: InputMaybe<Scalars['String']>;
  text3?: InputMaybe<Scalars['String']>;
  text4?: InputMaybe<Scalars['String']>;
  text5?: InputMaybe<Scalars['String']>;
};

/** order by max() on columns of table "test.new_tables" */
export type NewTables_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test2?: InputMaybe<Order_By>;
  test5Id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  text2?: InputMaybe<Order_By>;
  text3?: InputMaybe<Order_By>;
  text4?: InputMaybe<Order_By>;
  text5?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "test.new_tables" */
export type NewTables_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test2?: InputMaybe<Order_By>;
  test5Id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  text2?: InputMaybe<Order_By>;
  text3?: InputMaybe<Order_By>;
  text4?: InputMaybe<Order_By>;
  text5?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "test.new_tables" */
export type NewTables_Mutation_Response = {
  __typename?: 'newTables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<NewTables>;
};

/** input type for inserting object relation for remote table "test.new_tables" */
export type NewTables_Obj_Rel_Insert_Input = {
  data: NewTables_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<NewTables_On_Conflict>;
};

/** on_conflict condition type for table "test.new_tables" */
export type NewTables_On_Conflict = {
  constraint: NewTables_Constraint;
  update_columns?: Array<NewTables_Update_Column>;
  where?: InputMaybe<NewTables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.new_tables". */
export type NewTables_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  new8Tables_aggregate?: InputMaybe<New8Tables_Aggregate_Order_By>;
  test2?: InputMaybe<Order_By>;
  test5Id?: InputMaybe<Order_By>;
  test5Table?: InputMaybe<Test5Tables_Order_By>;
  text?: InputMaybe<Order_By>;
  text2?: InputMaybe<Order_By>;
  text3?: InputMaybe<Order_By>;
  text4?: InputMaybe<Order_By>;
  text5?: InputMaybe<Order_By>;
};

/** primary key columns input for table: newTables */
export type NewTables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.new_tables" */
export enum NewTables_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Test2 = 'test2',
  /** column name */
  Test5Id = 'test5Id',
  /** column name */
  Text = 'text',
  /** column name */
  Text2 = 'text2',
  /** column name */
  Text3 = 'text3',
  /** column name */
  Text4 = 'text4',
  /** column name */
  Text5 = 'text5'
}

/** input type for updating data in table "test.new_tables" */
export type NewTables_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  test2?: InputMaybe<Scalars['String']>;
  test5Id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
  text2?: InputMaybe<Scalars['String']>;
  text3?: InputMaybe<Scalars['String']>;
  text4?: InputMaybe<Scalars['String']>;
  text5?: InputMaybe<Scalars['String']>;
};

/** update columns of table "test.new_tables" */
export enum NewTables_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Test2 = 'test2',
  /** column name */
  Test5Id = 'test5Id',
  /** column name */
  Text = 'text',
  /** column name */
  Text2 = 'text2',
  /** column name */
  Text3 = 'text3',
  /** column name */
  Text4 = 'text4',
  /** column name */
  Text5 = 'text5'
}

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
  /** fetch data from the table: "test.new1_tables" using primary key columns */
  new1Table?: Maybe<New1Tables>;
  /** fetch data from the table: "test.new1_tables" */
  new1Tables: Array<New1Tables>;
  /** fetch data from the table: "test.new2_tables" using primary key columns */
  new2Table?: Maybe<New2Tables>;
  /** An array relationship */
  new2Tables: Array<New2Tables>;
  /** fetch data from the table: "test.new3_tables" using primary key columns */
  new3Table?: Maybe<New3Tables>;
  /** fetch data from the table: "test.new3_tables" */
  new3Tables: Array<New3Tables>;
  /** fetch data from the table: "test.new4_tables" using primary key columns */
  new4Table?: Maybe<New4Tables>;
  /** fetch data from the table: "test.new4_tables" */
  new4Tables: Array<New4Tables>;
  /** fetch data from the table: "test.new5_tables" using primary key columns */
  new5Table?: Maybe<New5Tables>;
  /** fetch data from the table: "test.new5_tables" */
  new5Tables: Array<New5Tables>;
  /** fetch data from the table: "test.new6_tables" using primary key columns */
  new6Table?: Maybe<New6Tables>;
  /** fetch data from the table: "test.new6_tables" */
  new6Tables: Array<New6Tables>;
  /** fetch data from the table: "test.new8_tables" using primary key columns */
  new8Table?: Maybe<New8Tables>;
  /** An array relationship */
  new8Tables: Array<New8Tables>;
  /** fetch data from the table: "test.new_tables" using primary key columns */
  newTable?: Maybe<NewTables>;
  /** An array relationship */
  newTables: Array<NewTables>;
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
  /** fetch data from the table: "test2_tables" using primary key columns */
  test2Table?: Maybe<Test2Tables>;
  /** fetch data from the table: "test2_tables" */
  test2Tables: Array<Test2Tables>;
  /** fetch data from the table: "test5_tables" using primary key columns */
  test5Table?: Maybe<Test5Tables>;
  /** An array relationship */
  test5Tables: Array<Test5Tables>;
  /** fetch data from the table: "test6_tables" using primary key columns */
  test6Table?: Maybe<Test6Tables>;
  /** fetch data from the table: "test6_tables" */
  test6Tables: Array<Test6Tables>;
  /** fetch data from the table: "test_tables" using primary key columns */
  testTable?: Maybe<TestTables>;
  /** fetch data from the table: "test_tables" */
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


export type Query_RootNew1TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNew1TablesArgs = {
  distinct_on?: InputMaybe<Array<New1Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New1Tables_Order_By>>;
  where?: InputMaybe<New1Tables_Bool_Exp>;
};


export type Query_RootNew2TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNew2TablesArgs = {
  distinct_on?: InputMaybe<Array<New2Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New2Tables_Order_By>>;
  where?: InputMaybe<New2Tables_Bool_Exp>;
};


export type Query_RootNew3TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNew3TablesArgs = {
  distinct_on?: InputMaybe<Array<New3Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New3Tables_Order_By>>;
  where?: InputMaybe<New3Tables_Bool_Exp>;
};


export type Query_RootNew4TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNew4TablesArgs = {
  distinct_on?: InputMaybe<Array<New4Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New4Tables_Order_By>>;
  where?: InputMaybe<New4Tables_Bool_Exp>;
};


export type Query_RootNew5TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNew5TablesArgs = {
  distinct_on?: InputMaybe<Array<New5Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New5Tables_Order_By>>;
  where?: InputMaybe<New5Tables_Bool_Exp>;
};


export type Query_RootNew6TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNew6TablesArgs = {
  distinct_on?: InputMaybe<Array<New6Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New6Tables_Order_By>>;
  where?: InputMaybe<New6Tables_Bool_Exp>;
};


export type Query_RootNew8TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNew8TablesArgs = {
  distinct_on?: InputMaybe<Array<New8Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New8Tables_Order_By>>;
  where?: InputMaybe<New8Tables_Bool_Exp>;
};


export type Query_RootNewTableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNewTablesArgs = {
  distinct_on?: InputMaybe<Array<NewTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NewTables_Order_By>>;
  where?: InputMaybe<NewTables_Bool_Exp>;
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


export type Query_RootTest2TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest2TablesArgs = {
  distinct_on?: InputMaybe<Array<Test2Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test2Tables_Order_By>>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};


export type Query_RootTest5TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest5TablesArgs = {
  distinct_on?: InputMaybe<Array<Test5Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test5Tables_Order_By>>;
  where?: InputMaybe<Test5Tables_Bool_Exp>;
};


export type Query_RootTest6TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest6TablesArgs = {
  distinct_on?: InputMaybe<Array<Test6Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test6Tables_Order_By>>;
  where?: InputMaybe<Test6Tables_Bool_Exp>;
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
  /** fetch data from the table: "test.new1_tables" using primary key columns */
  new1Table?: Maybe<New1Tables>;
  /** fetch data from the table: "test.new1_tables" */
  new1Tables: Array<New1Tables>;
  /** fetch data from the table: "test.new2_tables" using primary key columns */
  new2Table?: Maybe<New2Tables>;
  /** An array relationship */
  new2Tables: Array<New2Tables>;
  /** fetch data from the table: "test.new3_tables" using primary key columns */
  new3Table?: Maybe<New3Tables>;
  /** fetch data from the table: "test.new3_tables" */
  new3Tables: Array<New3Tables>;
  /** fetch data from the table: "test.new4_tables" using primary key columns */
  new4Table?: Maybe<New4Tables>;
  /** fetch data from the table: "test.new4_tables" */
  new4Tables: Array<New4Tables>;
  /** fetch data from the table: "test.new5_tables" using primary key columns */
  new5Table?: Maybe<New5Tables>;
  /** fetch data from the table: "test.new5_tables" */
  new5Tables: Array<New5Tables>;
  /** fetch data from the table: "test.new6_tables" using primary key columns */
  new6Table?: Maybe<New6Tables>;
  /** fetch data from the table: "test.new6_tables" */
  new6Tables: Array<New6Tables>;
  /** fetch data from the table: "test.new8_tables" using primary key columns */
  new8Table?: Maybe<New8Tables>;
  /** An array relationship */
  new8Tables: Array<New8Tables>;
  /** fetch data from the table: "test.new_tables" using primary key columns */
  newTable?: Maybe<NewTables>;
  /** An array relationship */
  newTables: Array<NewTables>;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** An array relationship */
  orders: Array<Orders>;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "test2_tables" using primary key columns */
  test2Table?: Maybe<Test2Tables>;
  /** fetch data from the table: "test2_tables" */
  test2Tables: Array<Test2Tables>;
  /** fetch data from the table: "test5_tables" using primary key columns */
  test5Table?: Maybe<Test5Tables>;
  /** An array relationship */
  test5Tables: Array<Test5Tables>;
  /** fetch data from the table: "test6_tables" using primary key columns */
  test6Table?: Maybe<Test6Tables>;
  /** fetch data from the table: "test6_tables" */
  test6Tables: Array<Test6Tables>;
  /** fetch data from the table: "test_tables" using primary key columns */
  testTable?: Maybe<TestTables>;
  /** fetch data from the table: "test_tables" */
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


export type Subscription_RootNew1TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNew1TablesArgs = {
  distinct_on?: InputMaybe<Array<New1Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New1Tables_Order_By>>;
  where?: InputMaybe<New1Tables_Bool_Exp>;
};


export type Subscription_RootNew2TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNew2TablesArgs = {
  distinct_on?: InputMaybe<Array<New2Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New2Tables_Order_By>>;
  where?: InputMaybe<New2Tables_Bool_Exp>;
};


export type Subscription_RootNew3TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNew3TablesArgs = {
  distinct_on?: InputMaybe<Array<New3Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New3Tables_Order_By>>;
  where?: InputMaybe<New3Tables_Bool_Exp>;
};


export type Subscription_RootNew4TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNew4TablesArgs = {
  distinct_on?: InputMaybe<Array<New4Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New4Tables_Order_By>>;
  where?: InputMaybe<New4Tables_Bool_Exp>;
};


export type Subscription_RootNew5TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNew5TablesArgs = {
  distinct_on?: InputMaybe<Array<New5Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New5Tables_Order_By>>;
  where?: InputMaybe<New5Tables_Bool_Exp>;
};


export type Subscription_RootNew6TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNew6TablesArgs = {
  distinct_on?: InputMaybe<Array<New6Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New6Tables_Order_By>>;
  where?: InputMaybe<New6Tables_Bool_Exp>;
};


export type Subscription_RootNew8TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNew8TablesArgs = {
  distinct_on?: InputMaybe<Array<New8Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<New8Tables_Order_By>>;
  where?: InputMaybe<New8Tables_Bool_Exp>;
};


export type Subscription_RootNewTableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNewTablesArgs = {
  distinct_on?: InputMaybe<Array<NewTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NewTables_Order_By>>;
  where?: InputMaybe<NewTables_Bool_Exp>;
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


export type Subscription_RootTest2TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTest2TablesArgs = {
  distinct_on?: InputMaybe<Array<Test2Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test2Tables_Order_By>>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};


export type Subscription_RootTest5TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTest5TablesArgs = {
  distinct_on?: InputMaybe<Array<Test5Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test5Tables_Order_By>>;
  where?: InputMaybe<Test5Tables_Bool_Exp>;
};


export type Subscription_RootTest6TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTest6TablesArgs = {
  distinct_on?: InputMaybe<Array<Test6Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test6Tables_Order_By>>;
  where?: InputMaybe<Test6Tables_Bool_Exp>;
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

/** columns and relationships of "test2_tables" */
export type Test2Tables = {
  __typename?: 'test2Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  test_tables: Array<TestTables>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "test2_tables" */
export type Test2TablesTest_TablesArgs = {
  distinct_on?: InputMaybe<Array<TestTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestTables_Order_By>>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "test2_tables". All fields are combined with a logical 'AND'. */
export type Test2Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test2Tables_Bool_Exp>>;
  _not?: InputMaybe<Test2Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test2Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  test_tables?: InputMaybe<TestTables_Bool_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test2_tables" */
export enum Test2Tables_Constraint {
  /** unique or primary key constraint */
  Test2TablesPkey = 'test2_tables_pkey'
}

/** input type for inserting data into table "test2_tables" */
export type Test2Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test_tables?: InputMaybe<TestTables_Arr_Rel_Insert_Input>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test2_tables" */
export type Test2Tables_Mutation_Response = {
  __typename?: 'test2Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test2Tables>;
};

/** input type for inserting object relation for remote table "test2_tables" */
export type Test2Tables_Obj_Rel_Insert_Input = {
  data: Test2Tables_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Test2Tables_On_Conflict>;
};

/** on_conflict condition type for table "test2_tables" */
export type Test2Tables_On_Conflict = {
  constraint: Test2Tables_Constraint;
  update_columns?: Array<Test2Tables_Update_Column>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test2_tables". */
export type Test2Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test_tables_aggregate?: InputMaybe<TestTables_Aggregate_Order_By>;
  text?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test2Tables */
export type Test2Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test2_tables" */
export enum Test2Tables_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test2_tables" */
export type Test2Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test2_tables" */
export enum Test2Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test5_tables" */
export type Test5Tables = {
  __typename?: 'test5Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  newTables: Array<NewTables>;
  test6Id: Scalars['uuid'];
  /** An object relationship */
  test6Table: Test6Tables;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "test5_tables" */
export type Test5TablesNewTablesArgs = {
  distinct_on?: InputMaybe<Array<NewTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NewTables_Order_By>>;
  where?: InputMaybe<NewTables_Bool_Exp>;
};

/** order by aggregate values of table "test5_tables" */
export type Test5Tables_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Test5Tables_Max_Order_By>;
  min?: InputMaybe<Test5Tables_Min_Order_By>;
};

/** input type for inserting array relation for remote table "test5_tables" */
export type Test5Tables_Arr_Rel_Insert_Input = {
  data: Array<Test5Tables_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Test5Tables_On_Conflict>;
};

/** Boolean expression to filter rows from the table "test5_tables". All fields are combined with a logical 'AND'. */
export type Test5Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test5Tables_Bool_Exp>>;
  _not?: InputMaybe<Test5Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test5Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  newTables?: InputMaybe<NewTables_Bool_Exp>;
  test6Id?: InputMaybe<Uuid_Comparison_Exp>;
  test6Table?: InputMaybe<Test6Tables_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test5_tables" */
export enum Test5Tables_Constraint {
  /** unique or primary key constraint */
  Test5TablesPkey = 'test5_tables_pkey'
}

/** input type for inserting data into table "test5_tables" */
export type Test5Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  newTables?: InputMaybe<NewTables_Arr_Rel_Insert_Input>;
  test6Id?: InputMaybe<Scalars['uuid']>;
  test6Table?: InputMaybe<Test6Tables_Obj_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "test5_tables" */
export type Test5Tables_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test6Id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "test5_tables" */
export type Test5Tables_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test6Id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "test5_tables" */
export type Test5Tables_Mutation_Response = {
  __typename?: 'test5Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test5Tables>;
};

/** input type for inserting object relation for remote table "test5_tables" */
export type Test5Tables_Obj_Rel_Insert_Input = {
  data: Test5Tables_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Test5Tables_On_Conflict>;
};

/** on_conflict condition type for table "test5_tables" */
export type Test5Tables_On_Conflict = {
  constraint: Test5Tables_Constraint;
  update_columns?: Array<Test5Tables_Update_Column>;
  where?: InputMaybe<Test5Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test5_tables". */
export type Test5Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  newTables_aggregate?: InputMaybe<NewTables_Aggregate_Order_By>;
  test6Id?: InputMaybe<Order_By>;
  test6Table?: InputMaybe<Test6Tables_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test5Tables */
export type Test5Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test5_tables" */
export enum Test5Tables_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test6Id = 'test6Id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test5_tables" */
export type Test5Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test6Id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test5_tables" */
export enum Test5Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test6Id = 'test6Id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test6_tables" */
export type Test6Tables = {
  __typename?: 'test6Tables';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  test5Tables: Array<Test5Tables>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "test6_tables" */
export type Test6TablesTest5TablesArgs = {
  distinct_on?: InputMaybe<Array<Test5Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test5Tables_Order_By>>;
  where?: InputMaybe<Test5Tables_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "test6_tables". All fields are combined with a logical 'AND'. */
export type Test6Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test6Tables_Bool_Exp>>;
  _not?: InputMaybe<Test6Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test6Tables_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  test5Tables?: InputMaybe<Test5Tables_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test6_tables" */
export enum Test6Tables_Constraint {
  /** unique or primary key constraint */
  Test6TablesPkey = 'test6_tables_pkey'
}

/** input type for inserting data into table "test6_tables" */
export type Test6Tables_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test5Tables?: InputMaybe<Test5Tables_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test6_tables" */
export type Test6Tables_Mutation_Response = {
  __typename?: 'test6Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test6Tables>;
};

/** input type for inserting object relation for remote table "test6_tables" */
export type Test6Tables_Obj_Rel_Insert_Input = {
  data: Test6Tables_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Test6Tables_On_Conflict>;
};

/** on_conflict condition type for table "test6_tables" */
export type Test6Tables_On_Conflict = {
  constraint: Test6Tables_Constraint;
  update_columns?: Array<Test6Tables_Update_Column>;
  where?: InputMaybe<Test6Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test6_tables". */
export type Test6Tables_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test5Tables_aggregate?: InputMaybe<Test5Tables_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test6Tables */
export type Test6Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test6_tables" */
export enum Test6Tables_Select_Column {
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

/** input type for updating data in table "test6_tables" */
export type Test6Tables_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test6_tables" */
export enum Test6Tables_Update_Column {
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

/** columns and relationships of "test_tables" */
export type TestTables = {
  __typename?: 'testTables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  test?: Maybe<Scalars['String']>;
  test2Id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  test2Table?: Maybe<Test2Tables>;
  updatedAt: Scalars['timestamptz'];
};

/** order by aggregate values of table "test_tables" */
export type TestTables_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<TestTables_Max_Order_By>;
  min?: InputMaybe<TestTables_Min_Order_By>;
};

/** input type for inserting array relation for remote table "test_tables" */
export type TestTables_Arr_Rel_Insert_Input = {
  data: Array<TestTables_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TestTables_On_Conflict>;
};

/** Boolean expression to filter rows from the table "test_tables". All fields are combined with a logical 'AND'. */
export type TestTables_Bool_Exp = {
  _and?: InputMaybe<Array<TestTables_Bool_Exp>>;
  _not?: InputMaybe<TestTables_Bool_Exp>;
  _or?: InputMaybe<Array<TestTables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  test?: InputMaybe<String_Comparison_Exp>;
  test2Id?: InputMaybe<Uuid_Comparison_Exp>;
  test2Table?: InputMaybe<Test2Tables_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test_tables" */
export enum TestTables_Constraint {
  /** unique or primary key constraint */
  TestTablesPkey = 'test_tables_pkey'
}

/** input type for inserting data into table "test_tables" */
export type TestTables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  test2Id?: InputMaybe<Scalars['uuid']>;
  test2Table?: InputMaybe<Test2Tables_Obj_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "test_tables" */
export type TestTables_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test?: InputMaybe<Order_By>;
  test2Id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "test_tables" */
export type TestTables_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test?: InputMaybe<Order_By>;
  test2Id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "test_tables" */
export type TestTables_Mutation_Response = {
  __typename?: 'testTables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TestTables>;
};

/** on_conflict condition type for table "test_tables" */
export type TestTables_On_Conflict = {
  constraint: TestTables_Constraint;
  update_columns?: Array<TestTables_Update_Column>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};

/** Ordering options when selecting data from "test_tables". */
export type TestTables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test?: InputMaybe<Order_By>;
  test2Id?: InputMaybe<Order_By>;
  test2Table?: InputMaybe<Test2Tables_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: testTables */
export type TestTables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test_tables" */
export enum TestTables_Select_Column {
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
  Test2Id = 'test2Id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test_tables" */
export type TestTables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  test2Id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test_tables" */
export enum TestTables_Update_Column {
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
  Test2Id = 'test2Id',
  /** column name */
  UpdatedAt = 'updatedAt'
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

export type CustomersQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Customers_Select_Column> | Customers_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By> | Customers_Order_By>;
  where?: InputMaybe<Customers_Bool_Exp>;
}>;


export type CustomersQuery = { __typename?: 'query_root', customers: Array<{ __typename?: 'customers', id: any, first_name?: string | null | undefined, last_name: string, date_of_birth?: any | null | undefined }> };

export type Customers_By_PkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Customers_By_PkQuery = { __typename?: 'query_root', customers_by_pk?: { __typename?: 'customers', id: any, first_name?: string | null | undefined, last_name: string, date_of_birth?: any | null | undefined } | null | undefined };

export type Insert_CustomersMutationVariables = Exact<{
  customers: Array<Customers_Insert_Input> | Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
}>;


export type Insert_CustomersMutation = { __typename?: 'mutation_root', insert_customers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', created_at: any, date_of_birth?: any | null | undefined, first_name?: string | null | undefined, id: any, is_valid: boolean, last_name: string, updated_at: any, vip: boolean }> } | null | undefined };

export type Insert_Customers_OneMutationVariables = Exact<{
  customers: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
}>;


export type Insert_Customers_OneMutation = { __typename?: 'mutation_root', insert_customers_one?: { __typename?: 'customers', id: any, first_name?: string | null | undefined, last_name: string, date_of_birth?: any | null | undefined } | null | undefined };

export type Update_CustomersMutationVariables = Exact<{
  customers?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
}>;


export type Update_CustomersMutation = { __typename?: 'mutation_root', update_customers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', created_at: any, date_of_birth?: any | null | undefined, first_name?: string | null | undefined, id: any, is_valid: boolean, last_name: string, updated_at: any, vip: boolean }> } | null | undefined };

export type Update_Customers_By_PkMutationVariables = Exact<{
  customers?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
}>;


export type Update_Customers_By_PkMutation = { __typename?: 'mutation_root', update_customers_by_pk?: { __typename?: 'customers', id: any, first_name?: string | null | undefined, last_name: string, date_of_birth?: any | null | undefined } | null | undefined };

export type Customers_CustomersFragment = { __typename?: 'customers', id: any, first_name?: string | null | undefined, last_name: string, date_of_birth?: any | null | undefined };

export type Customers_By_Pk_CustomersFragment = { __typename?: 'customers', id: any, first_name?: string | null | undefined, last_name: string, date_of_birth?: any | null | undefined };

export type Insert_Customers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', created_at: any, date_of_birth?: any | null | undefined, first_name?: string | null | undefined, id: any, is_valid: boolean, last_name: string, updated_at: any, vip: boolean }> };

export type Insert_Customers_One_CustomersFragment = { __typename?: 'customers', id: any, first_name?: string | null | undefined, last_name: string, date_of_birth?: any | null | undefined };

export type Update_Customers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', created_at: any, date_of_birth?: any | null | undefined, first_name?: string | null | undefined, id: any, is_valid: boolean, last_name: string, updated_at: any, vip: boolean }> };

export type Update_Customers_By_Pk_CustomersFragment = { __typename?: 'customers', id: any, first_name?: string | null | undefined, last_name: string, date_of_birth?: any | null | undefined };

export const Customers_CustomersFragmentDoc = gql`
    fragment customers_customers on customers {
  id
  first_name
  last_name
  date_of_birth
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

export function useCustomersQuery(options: Omit<Urql.UseQueryArgs<CustomersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CustomersQuery>({ query: CustomersDocument, ...options });
};
export const Customers_By_PkDocument = gql`
    query customers_by_pk($id: uuid!) {
  customers_by_pk(id: $id) {
    ...customers_by_pk_customers
  }
}
    ${Customers_By_Pk_CustomersFragmentDoc}`;

export function useCustomers_By_PkQuery(options: Omit<Urql.UseQueryArgs<Customers_By_PkQueryVariables>, 'query'> = {}) {
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