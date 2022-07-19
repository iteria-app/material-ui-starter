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
  float8: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
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
  createdAt: Scalars['timestamptz'];
  dateOfBirth?: Maybe<Scalars['date']>;
  firstName?: Maybe<Scalars['String']>;
  glbPath?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isValid: Scalars['Boolean'];
  lastName: Scalars['String'];
  /** An array relationship */
  orders: Array<Orders>;
  updatedAt: Scalars['timestamptz'];
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

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
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

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  dateOfBirth?: InputMaybe<Date_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  glbPath?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isValid?: InputMaybe<Boolean_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
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
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dateOfBirth?: InputMaybe<Scalars['date']>;
  firstName?: InputMaybe<Scalars['String']>;
  glbPath?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isValid?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateOfBirth?: Maybe<Scalars['date']>;
  firstName?: Maybe<Scalars['String']>;
  glbPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateOfBirth?: Maybe<Scalars['date']>;
  firstName?: Maybe<Scalars['String']>;
  glbPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
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
  createdAt?: InputMaybe<Order_By>;
  dateOfBirth?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  glbPath?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isValid?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
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
  CreatedAt = 'createdAt',
  /** column name */
  DateOfBirth = 'dateOfBirth',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GlbPath = 'glbPath',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'isValid',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Vip = 'vip'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dateOfBirth?: InputMaybe<Scalars['date']>;
  firstName?: InputMaybe<Scalars['String']>;
  glbPath?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isValid?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateOfBirth = 'dateOfBirth',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GlbPath = 'glbPath',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'isValid',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updatedAt',
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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** insert a single row into the table: "customers" */
  insertCustomer?: Maybe<Customers>;
  /** insert data into the table: "customers" */
  insertCustomers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "test.test" */
  insertTes?: Maybe<Test>;
  /** insert data into the table: "test.test" */
  insertTest?: Maybe<Test_Mutation_Response>;
  /** insert a single row into the table: "test.test1_tables" */
  insertTest1Table?: Maybe<Test1Tables>;
  /** insert data into the table: "test.test1_tables" */
  insertTest1Tables?: Maybe<Test1Tables_Mutation_Response>;
  /** insert a single row into the table: "test.test2_tables" */
  insertTest2Table?: Maybe<Test2Tables>;
  /** insert data into the table: "test.test2_tables" */
  insertTest2Tables?: Maybe<Test2Tables_Mutation_Response>;
  /** insert a single row into the table: "test.test4_tables" */
  insertTest4Table?: Maybe<Test4Tables>;
  /** insert data into the table: "test.test4_tables" */
  insertTest4Tables?: Maybe<Test4Tables_Mutation_Response>;
  /** insert a single row into the table: "test.test5_tables" */
  insertTest5Table?: Maybe<Test5Tables>;
  /** insert data into the table: "test.test5_tables" */
  insertTest5Tables?: Maybe<Test5Tables_Mutation_Response>;
  /** insert a single row into the table: "test.test_tables" */
  insertTestTable?: Maybe<TestTables>;
  /** insert data into the table: "test.test_tables" */
  insertTestTables?: Maybe<TestTables_Mutation_Response>;
  /** insert data into the table: "order_products" */
  insert_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** insert a single row into the table: "order_products" */
  insert_order_products_one?: Maybe<Order_Products>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "test.test3_tables" */
  insert_test_test3_tables?: Maybe<Test_Test3_Tables_Mutation_Response>;
  /** insert a single row into the table: "test.test3_tables" */
  insert_test_test3_tables_one?: Maybe<Test_Test3_Tables>;
  /** update single row of the table: "customers" */
  updateCustomer?: Maybe<Customers>;
  /** update data of the table: "customers" */
  updateCustomers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "test.test" */
  updateTes?: Maybe<Test>;
  /** update data of the table: "test.test" */
  updateTest?: Maybe<Test_Mutation_Response>;
  /** update single row of the table: "test.test1_tables" */
  updateTest1Table?: Maybe<Test1Tables>;
  /** update data of the table: "test.test1_tables" */
  updateTest1Tables?: Maybe<Test1Tables_Mutation_Response>;
  /** update single row of the table: "test.test2_tables" */
  updateTest2Table?: Maybe<Test2Tables>;
  /** update data of the table: "test.test2_tables" */
  updateTest2Tables?: Maybe<Test2Tables_Mutation_Response>;
  /** update single row of the table: "test.test4_tables" */
  updateTest4Table?: Maybe<Test4Tables>;
  /** update data of the table: "test.test4_tables" */
  updateTest4Tables?: Maybe<Test4Tables_Mutation_Response>;
  /** update single row of the table: "test.test5_tables" */
  updateTest5Table?: Maybe<Test5Tables>;
  /** update data of the table: "test.test5_tables" */
  updateTest5Tables?: Maybe<Test5Tables_Mutation_Response>;
  /** update single row of the table: "test.test_tables" */
  updateTestTable?: Maybe<TestTables>;
  /** update data of the table: "test.test_tables" */
  updateTestTables?: Maybe<TestTables_Mutation_Response>;
  /** update data of the table: "order_products" */
  update_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** update single row of the table: "order_products" */
  update_order_products_by_pk?: Maybe<Order_Products>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "test.test3_tables" */
  update_test_test3_tables?: Maybe<Test_Test3_Tables_Mutation_Response>;
  /** update single row of the table: "test.test3_tables" */
  update_test_test3_tables_by_pk?: Maybe<Test_Test3_Tables>;
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
export type Mutation_RootInsertTesArgs = {
  object: Test_Insert_Input;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTestArgs = {
  objects: Array<Test_Insert_Input>;
  on_conflict?: InputMaybe<Test_On_Conflict>;
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
export type Mutation_RootInsertTest4TableArgs = {
  object: Test4Tables_Insert_Input;
  on_conflict?: InputMaybe<Test4Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest4TablesArgs = {
  objects: Array<Test4Tables_Insert_Input>;
  on_conflict?: InputMaybe<Test4Tables_On_Conflict>;
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
export type Mutation_RootInsert_Test_Test3_TablesArgs = {
  objects: Array<Test_Test3_Tables_Insert_Input>;
  on_conflict?: InputMaybe<Test_Test3_Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_Test3_Tables_OneArgs = {
  object: Test_Test3_Tables_Insert_Input;
  on_conflict?: InputMaybe<Test_Test3_Tables_On_Conflict>;
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
export type Mutation_RootUpdateTesArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  pk_columns: Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTestArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  where: Test_Bool_Exp;
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
export type Mutation_RootUpdateTest4TableArgs = {
  _set?: InputMaybe<Test4Tables_Set_Input>;
  pk_columns: Test4Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTest4TablesArgs = {
  _set?: InputMaybe<Test4Tables_Set_Input>;
  where: Test4Tables_Bool_Exp;
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


/** mutation root */
export type Mutation_RootUpdate_Test_Test3_TablesArgs = {
  _inc?: InputMaybe<Test_Test3_Tables_Inc_Input>;
  _set?: InputMaybe<Test_Test3_Tables_Set_Input>;
  where: Test_Test3_Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_Test3_Tables_By_PkArgs = {
  _inc?: InputMaybe<Test_Test3_Tables_Inc_Input>;
  _set?: InputMaybe<Test_Test3_Tables_Set_Input>;
  pk_columns: Test_Test3_Tables_Pk_Columns_Input;
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
  order_id: Scalars['Int'];
  /** An object relationship */
  orders: Orders;
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
  order_id?: InputMaybe<Int_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_products" */
export enum Order_Products_Constraint {
  /** unique or primary key constraint on columns "id" */
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
  order_id?: InputMaybe<Scalars['Int']>;
  orders?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
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
  order_id?: InputMaybe<Order_By>;
  orders?: InputMaybe<Orders_Order_By>;
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
  /** unique or primary key constraint on columns "id" */
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
  /** fetch data from the table: "customers" using primary key columns */
  customer?: Maybe<Customers>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customersAggregate: Customers_Aggregate;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** An array relationship */
  orders: Array<Orders>;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "test.test" using primary key columns */
  tes?: Maybe<Test>;
  /** fetch data from the table: "test.test" */
  test: Array<Test>;
  /** fetch data from the table: "test.test1_tables" using primary key columns */
  test1Table?: Maybe<Test1Tables>;
  /** fetch data from the table: "test.test1_tables" */
  test1Tables: Array<Test1Tables>;
  /** fetch data from the table: "test.test2_tables" using primary key columns */
  test2Table?: Maybe<Test2Tables>;
  /** fetch data from the table: "test.test2_tables" */
  test2Tables: Array<Test2Tables>;
  /** fetch data from the table: "test.test4_tables" using primary key columns */
  test4Table?: Maybe<Test4Tables>;
  /** fetch data from the table: "test.test4_tables" */
  test4Tables: Array<Test4Tables>;
  /** fetch data from the table: "test.test5_tables" using primary key columns */
  test5Table?: Maybe<Test5Tables>;
  /** fetch data from the table: "test.test5_tables" */
  test5Tables: Array<Test5Tables>;
  /** fetch data from the table: "test.test_tables" using primary key columns */
  testTable?: Maybe<TestTables>;
  /** fetch data from the table: "test.test_tables" */
  testTables: Array<TestTables>;
  /** fetch data from the table: "test.test3_tables" */
  test_test3_tables: Array<Test_Test3_Tables>;
  /** fetch data from the table: "test.test3_tables" using primary key columns */
  test_test3_tables_by_pk?: Maybe<Test_Test3_Tables>;
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


export type Query_RootCustomerArgs = {
  id: Scalars['uuid'];
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


export type Query_RootTesArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
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


export type Query_RootTest4TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest4TablesArgs = {
  distinct_on?: InputMaybe<Array<Test4Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test4Tables_Order_By>>;
  where?: InputMaybe<Test4Tables_Bool_Exp>;
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


export type Query_RootTest_Test3_TablesArgs = {
  distinct_on?: InputMaybe<Array<Test_Test3_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Test3_Tables_Order_By>>;
  where?: InputMaybe<Test_Test3_Tables_Bool_Exp>;
};


export type Query_RootTest_Test3_Tables_By_PkArgs = {
  id: Scalars['uuid'];
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
  /** fetch data from the table: "customers" using primary key columns */
  customer?: Maybe<Customers>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customersAggregate: Customers_Aggregate;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** An array relationship */
  orders: Array<Orders>;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "test.test" using primary key columns */
  tes?: Maybe<Test>;
  /** fetch data from the table: "test.test" */
  test: Array<Test>;
  /** fetch data from the table: "test.test1_tables" using primary key columns */
  test1Table?: Maybe<Test1Tables>;
  /** fetch data from the table: "test.test1_tables" */
  test1Tables: Array<Test1Tables>;
  /** fetch data from the table: "test.test2_tables" using primary key columns */
  test2Table?: Maybe<Test2Tables>;
  /** fetch data from the table: "test.test2_tables" */
  test2Tables: Array<Test2Tables>;
  /** fetch data from the table: "test.test4_tables" using primary key columns */
  test4Table?: Maybe<Test4Tables>;
  /** fetch data from the table: "test.test4_tables" */
  test4Tables: Array<Test4Tables>;
  /** fetch data from the table: "test.test5_tables" using primary key columns */
  test5Table?: Maybe<Test5Tables>;
  /** fetch data from the table: "test.test5_tables" */
  test5Tables: Array<Test5Tables>;
  /** fetch data from the table: "test.test_tables" using primary key columns */
  testTable?: Maybe<TestTables>;
  /** fetch data from the table: "test.test_tables" */
  testTables: Array<TestTables>;
  /** fetch data from the table: "test.test3_tables" */
  test_test3_tables: Array<Test_Test3_Tables>;
  /** fetch data from the table: "test.test3_tables" using primary key columns */
  test_test3_tables_by_pk?: Maybe<Test_Test3_Tables>;
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


export type Subscription_RootCustomerArgs = {
  id: Scalars['uuid'];
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


export type Subscription_RootTesArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
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


export type Subscription_RootTest4TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTest4TablesArgs = {
  distinct_on?: InputMaybe<Array<Test4Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test4Tables_Order_By>>;
  where?: InputMaybe<Test4Tables_Bool_Exp>;
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


export type Subscription_RootTest_Test3_TablesArgs = {
  distinct_on?: InputMaybe<Array<Test_Test3_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Test3_Tables_Order_By>>;
  where?: InputMaybe<Test_Test3_Tables_Bool_Exp>;
};


export type Subscription_RootTest_Test3_Tables_By_PkArgs = {
  id: Scalars['uuid'];
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

/** columns and relationships of "test.test" */
export type Test = {
  __typename?: 'test';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  orderStatus?: Maybe<Test_EnumTest_Enum>;
  testName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "test.test1_tables" */
export type Test1Tables = {
  __typename?: 'test1Tables';
  createdAt: Scalars['timestamptz'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  test?: Maybe<Scalars['String']>;
  test2?: Maybe<Scalars['Boolean']>;
  test2Name?: Maybe<Scalars['String']>;
  test3Name?: Maybe<Scalars['String']>;
  test4Name?: Maybe<Scalars['String']>;
  test5Name?: Maybe<Scalars['String']>;
  testName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "test.test1_tables". All fields are combined with a logical 'AND'. */
export type Test1Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test1Tables_Bool_Exp>>;
  _not?: InputMaybe<Test1Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test1Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  test?: InputMaybe<String_Comparison_Exp>;
  test2?: InputMaybe<Boolean_Comparison_Exp>;
  test2Name?: InputMaybe<String_Comparison_Exp>;
  test3Name?: InputMaybe<String_Comparison_Exp>;
  test4Name?: InputMaybe<String_Comparison_Exp>;
  test5Name?: InputMaybe<String_Comparison_Exp>;
  testName?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test1_tables" */
export enum Test1Tables_Constraint {
  /** unique or primary key constraint on columns "id" */
  Test1TablesPkey = 'test1_tables_pkey'
}

/** input type for inserting data into table "test.test1_tables" */
export type Test1Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  test2?: InputMaybe<Scalars['Boolean']>;
  test2Name?: InputMaybe<Scalars['String']>;
  test3Name?: InputMaybe<Scalars['String']>;
  test4Name?: InputMaybe<Scalars['String']>;
  test5Name?: InputMaybe<Scalars['String']>;
  testName?: InputMaybe<Scalars['String']>;
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
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test?: InputMaybe<Order_By>;
  test2?: InputMaybe<Order_By>;
  test2Name?: InputMaybe<Order_By>;
  test3Name?: InputMaybe<Order_By>;
  test4Name?: InputMaybe<Order_By>;
  test5Name?: InputMaybe<Order_By>;
  testName?: InputMaybe<Order_By>;
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
  FirstName = 'firstName',
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
  Test2Name = 'test2Name',
  /** column name */
  Test3Name = 'test3Name',
  /** column name */
  Test4Name = 'test4Name',
  /** column name */
  Test5Name = 'test5Name',
  /** column name */
  TestName = 'testName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.test1_tables" */
export type Test1Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  test2?: InputMaybe<Scalars['Boolean']>;
  test2Name?: InputMaybe<Scalars['String']>;
  test3Name?: InputMaybe<Scalars['String']>;
  test4Name?: InputMaybe<Scalars['String']>;
  test5Name?: InputMaybe<Scalars['String']>;
  testName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test1_tables" */
export enum Test1Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FirstName = 'firstName',
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
  Test2Name = 'test2Name',
  /** column name */
  Test3Name = 'test3Name',
  /** column name */
  Test4Name = 'test4Name',
  /** column name */
  Test5Name = 'test5Name',
  /** column name */
  TestName = 'testName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.test2_tables" */
export type Test2Tables = {
  __typename?: 'test2Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  test2Name?: Maybe<Scalars['String']>;
  test3Name?: Maybe<Scalars['String']>;
  test4Name?: Maybe<Scalars['String']>;
  test5Name?: Maybe<Scalars['String']>;
  test6Name?: Maybe<Scalars['String']>;
  testName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "test.test2_tables". All fields are combined with a logical 'AND'. */
export type Test2Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test2Tables_Bool_Exp>>;
  _not?: InputMaybe<Test2Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test2Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  test2Name?: InputMaybe<String_Comparison_Exp>;
  test3Name?: InputMaybe<String_Comparison_Exp>;
  test4Name?: InputMaybe<String_Comparison_Exp>;
  test5Name?: InputMaybe<String_Comparison_Exp>;
  test6Name?: InputMaybe<String_Comparison_Exp>;
  testName?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test2_tables" */
export enum Test2Tables_Constraint {
  /** unique or primary key constraint on columns "id" */
  Test2TablesPkey = 'test2_tables_pkey'
}

/** input type for inserting data into table "test.test2_tables" */
export type Test2Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test2Name?: InputMaybe<Scalars['String']>;
  test3Name?: InputMaybe<Scalars['String']>;
  test4Name?: InputMaybe<Scalars['String']>;
  test5Name?: InputMaybe<Scalars['String']>;
  test6Name?: InputMaybe<Scalars['String']>;
  testName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test2_tables" */
export type Test2Tables_Mutation_Response = {
  __typename?: 'test2Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test2Tables>;
};

/** on_conflict condition type for table "test.test2_tables" */
export type Test2Tables_On_Conflict = {
  constraint: Test2Tables_Constraint;
  update_columns?: Array<Test2Tables_Update_Column>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test2_tables". */
export type Test2Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test2Name?: InputMaybe<Order_By>;
  test3Name?: InputMaybe<Order_By>;
  test4Name?: InputMaybe<Order_By>;
  test5Name?: InputMaybe<Order_By>;
  test6Name?: InputMaybe<Order_By>;
  testName?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test2Tables */
export type Test2Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test2_tables" */
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
  Test2Name = 'test2Name',
  /** column name */
  Test3Name = 'test3Name',
  /** column name */
  Test4Name = 'test4Name',
  /** column name */
  Test5Name = 'test5Name',
  /** column name */
  Test6Name = 'test6Name',
  /** column name */
  TestName = 'testName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.test2_tables" */
export type Test2Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test2Name?: InputMaybe<Scalars['String']>;
  test3Name?: InputMaybe<Scalars['String']>;
  test4Name?: InputMaybe<Scalars['String']>;
  test5Name?: InputMaybe<Scalars['String']>;
  test6Name?: InputMaybe<Scalars['String']>;
  testName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test2_tables" */
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
  Test2Name = 'test2Name',
  /** column name */
  Test3Name = 'test3Name',
  /** column name */
  Test4Name = 'test4Name',
  /** column name */
  Test5Name = 'test5Name',
  /** column name */
  Test6Name = 'test6Name',
  /** column name */
  TestName = 'testName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.test4_tables" */
export type Test4Tables = {
  __typename?: 'test4Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "test.test4_tables". All fields are combined with a logical 'AND'. */
export type Test4Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test4Tables_Bool_Exp>>;
  _not?: InputMaybe<Test4Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test4Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test4_tables" */
export enum Test4Tables_Constraint {
  /** unique or primary key constraint on columns "id" */
  Test4TablesPkey = 'test4_tables_pkey'
}

/** input type for inserting data into table "test.test4_tables" */
export type Test4Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test4_tables" */
export type Test4Tables_Mutation_Response = {
  __typename?: 'test4Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test4Tables>;
};

/** on_conflict condition type for table "test.test4_tables" */
export type Test4Tables_On_Conflict = {
  constraint: Test4Tables_Constraint;
  update_columns?: Array<Test4Tables_Update_Column>;
  where?: InputMaybe<Test4Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test4_tables". */
export type Test4Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test4Tables */
export type Test4Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test4_tables" */
export enum Test4Tables_Select_Column {
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

/** input type for updating data in table "test.test4_tables" */
export type Test4Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test4_tables" */
export enum Test4Tables_Update_Column {
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

/** columns and relationships of "test.test5_tables" */
export type Test5Tables = {
  __typename?: 'test5Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "test.test5_tables". All fields are combined with a logical 'AND'. */
export type Test5Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test5Tables_Bool_Exp>>;
  _not?: InputMaybe<Test5Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test5Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test5_tables" */
export enum Test5Tables_Constraint {
  /** unique or primary key constraint on columns "id" */
  Test5TablesPkey = 'test5_tables_pkey'
}

/** input type for inserting data into table "test.test5_tables" */
export type Test5Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test5_tables" */
export type Test5Tables_Mutation_Response = {
  __typename?: 'test5Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test5Tables>;
};

/** on_conflict condition type for table "test.test5_tables" */
export type Test5Tables_On_Conflict = {
  constraint: Test5Tables_Constraint;
  update_columns?: Array<Test5Tables_Update_Column>;
  where?: InputMaybe<Test5Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test5_tables". */
export type Test5Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test5Tables */
export type Test5Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test5_tables" */
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
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.test5_tables" */
export type Test5Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test5_tables" */
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
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.test_tables" */
export type TestTables = {
  __typename?: 'testTables';
  created_at: Scalars['timestamptz'];
  hocico?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  name: Scalars['String'];
  test?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "test.test_tables". All fields are combined with a logical 'AND'. */
export type TestTables_Bool_Exp = {
  _and?: InputMaybe<Array<TestTables_Bool_Exp>>;
  _not?: InputMaybe<TestTables_Bool_Exp>;
  _or?: InputMaybe<Array<TestTables_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hocico?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  test?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test_tables" */
export enum TestTables_Constraint {
  /** unique or primary key constraint on columns "name", "id" */
  TestTablesNameIdKey = 'test_tables_name_id_key',
  /** unique or primary key constraint on columns "id" */
  TestTablesPkey = 'test_tables_pkey',
  /** unique or primary key constraint on columns "test", "hocico" */
  TestTablesTestHocicoKey = 'test_tables_test_hocico_key'
}

/** input type for inserting data into table "test.test_tables" */
export type TestTables_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hocico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
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
  hocico?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test?: InputMaybe<Order_By>;
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
  Hocico = 'hocico',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test = 'test',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "test.test_tables" */
export type TestTables_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hocico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test_tables" */
export enum TestTables_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hocico = 'hocico',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test = 'test',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to filter rows from the table "test.test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Bool_Exp>>;
  _not?: InputMaybe<Test_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orderStatus?: InputMaybe<Test_EnumTest_Enum_Comparison_Exp>;
  testName?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test" */
export enum Test_Constraint {
  /** unique or primary key constraint on columns "id" */
  TestPkey = 'test_pkey'
}

export enum Test_EnumTest_Enum {
  Delivered = 'Delivered',
  Proccessing = 'Proccessing',
  Shipped = 'Shipped'
}

/** Boolean expression to compare columns of type "test_enumTest_enum". All fields are combined with logical 'AND'. */
export type Test_EnumTest_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Test_EnumTest_Enum>;
  _in?: InputMaybe<Array<Test_EnumTest_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Test_EnumTest_Enum>;
  _nin?: InputMaybe<Array<Test_EnumTest_Enum>>;
};

/** input type for inserting data into table "test.test" */
export type Test_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  orderStatus?: InputMaybe<Test_EnumTest_Enum>;
  testName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test" */
export type Test_Mutation_Response = {
  __typename?: 'test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test>;
};

/** on_conflict condition type for table "test.test" */
export type Test_On_Conflict = {
  constraint: Test_Constraint;
  update_columns?: Array<Test_Update_Column>;
  where?: InputMaybe<Test_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test". */
export type Test_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderStatus?: InputMaybe<Order_By>;
  testName?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test */
export type Test_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test" */
export enum Test_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  OrderStatus = 'orderStatus',
  /** column name */
  TestName = 'testName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.test" */
export type Test_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  orderStatus?: InputMaybe<Test_EnumTest_Enum>;
  testName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "test.test3_tables" */
export type Test_Test3_Tables = {
  __typename?: 'test_test3_tables';
  created_at: Scalars['timestamp'];
  double_precision?: Maybe<Scalars['float8']>;
  id: Scalars['uuid'];
  is_deleted?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "test.test3_tables". All fields are combined with a logical 'AND'. */
export type Test_Test3_Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Test3_Tables_Bool_Exp>>;
  _not?: InputMaybe<Test_Test3_Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Test3_Tables_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  double_precision?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test3_tables" */
export enum Test_Test3_Tables_Constraint {
  /** unique or primary key constraint on columns "id" */
  Test3TablesPkey = 'test3_tables_pkey'
}

/** input type for incrementing numeric columns in table "test.test3_tables" */
export type Test_Test3_Tables_Inc_Input = {
  double_precision?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "test.test3_tables" */
export type Test_Test3_Tables_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  double_precision?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test3_tables" */
export type Test_Test3_Tables_Mutation_Response = {
  __typename?: 'test_test3_tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test_Test3_Tables>;
};

/** on_conflict condition type for table "test.test3_tables" */
export type Test_Test3_Tables_On_Conflict = {
  constraint: Test_Test3_Tables_Constraint;
  update_columns?: Array<Test_Test3_Tables_Update_Column>;
  where?: InputMaybe<Test_Test3_Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test3_tables". */
export type Test_Test3_Tables_Order_By = {
  created_at?: InputMaybe<Order_By>;
  double_precision?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test_test3_tables */
export type Test_Test3_Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test3_tables" */
export enum Test_Test3_Tables_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DoublePrecision = 'double_precision',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "test.test3_tables" */
export type Test_Test3_Tables_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  double_precision?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test3_tables" */
export enum Test_Test3_Tables_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DoublePrecision = 'double_precision',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** update columns of table "test.test" */
export enum Test_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  OrderStatus = 'orderStatus',
  /** column name */
  TestName = 'testName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

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


export const DummyDocument = gql`
    query dummy {
  __typename
}
    `;

export function useDummyQuery(options: Omit<Urql.UseQueryArgs<DummyQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<DummyQuery>({ query: DummyDocument, ...options });
};