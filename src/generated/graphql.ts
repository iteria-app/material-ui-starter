import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
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

export type Boolean_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _cast?: InputMaybe<Boolean_Cast_Exp>;
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

export type Int_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _cast?: InputMaybe<Int_Cast_Exp>;
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

export type Bigint_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _cast?: InputMaybe<Bigint_Cast_Exp>;
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

/** update columns of table "customer_types" */
export enum Customer_Types_Update_Column {
  /** column name */
  Type = 'type'
}

/** List of customers */
export type Customers = {
  __typename?: 'customers';
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  customer_type?: Maybe<Customer_Types>;
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  lastName: Scalars['String'];
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
  vip: Scalars['Boolean'];
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

export type Date_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _cast?: InputMaybe<Date_Cast_Exp>;
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

/** update columns of table "enum_test_types" */
export enum Enum_Test_Types_Update_Column {
  /** column name */
  IntEnum = 'int_enum'
}

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

export type Json_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _cast?: InputMaybe<Json_Cast_Exp>;
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

/** columns and relationships of "lalala" */
export type Lalala = {
  __typename?: 'lalala';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "lalala" */
export type Lalala_Aggregate = {
  __typename?: 'lalala_aggregate';
  aggregate?: Maybe<Lalala_Aggregate_Fields>;
  nodes: Array<Lalala>;
};

/** aggregate fields of "lalala" */
export type Lalala_Aggregate_Fields = {
  __typename?: 'lalala_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Lalala_Max_Fields>;
  min?: Maybe<Lalala_Min_Fields>;
};


/** aggregate fields of "lalala" */
export type Lalala_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Lalala_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "lalala". All fields are combined with a logical 'AND'. */
export type Lalala_Bool_Exp = {
  _and?: InputMaybe<Array<Lalala_Bool_Exp>>;
  _not?: InputMaybe<Lalala_Bool_Exp>;
  _or?: InputMaybe<Array<Lalala_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "lalala" */
export enum Lalala_Constraint {
  /** unique or primary key constraint on columns "id" */
  LalalaPkey = 'lalala_pkey'
}

/** input type for inserting data into table "lalala" */
export type Lalala_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Lalala_Max_Fields = {
  __typename?: 'lalala_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Lalala_Min_Fields = {
  __typename?: 'lalala_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "lalala" */
export type Lalala_Mutation_Response = {
  __typename?: 'lalala_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Lalala>;
};

/** on_conflict condition type for table "lalala" */
export type Lalala_On_Conflict = {
  constraint: Lalala_Constraint;
  update_columns?: Array<Lalala_Update_Column>;
  where?: InputMaybe<Lalala_Bool_Exp>;
};

/** Ordering options when selecting data from "lalala". */
export type Lalala_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: lalala */
export type Lalala_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "lalala" */
export enum Lalala_Select_Column {
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

/** input type for updating data in table "lalala" */
export type Lalala_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "lalala" */
export enum Lalala_Update_Column {
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

export type Money_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _cast?: InputMaybe<Money_Cast_Exp>;
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
  /** delete single row from the table: "customers" */
  deleteCustomer?: Maybe<Customers>;
  /** delete data from the table: "customers" */
  deleteCustomers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "lalala" */
  deleteLalal?: Maybe<Lalala>;
  /** delete data from the table: "lalala" */
  deleteLalala?: Maybe<Lalala_Mutation_Response>;
  /** delete single row from the table: "Romi" */
  deleteRom?: Maybe<Romi>;
  /** delete data from the table: "Romi" */
  deleteRomi?: Maybe<Romi_Mutation_Response>;
  /** delete single row from the table: "table" */
  deleteTabl?: Maybe<Table>;
  /** delete data from the table: "table" */
  deleteTable?: Maybe<Table_Mutation_Response>;
  /** delete single row from the table: "test" */
  deleteTes?: Maybe<Test>;
  /** delete data from the table: "test" */
  deleteTest?: Maybe<Test_Mutation_Response>;
  /** delete data from the table: "customer_types" */
  delete_customer_types?: Maybe<Customer_Types_Mutation_Response>;
  /** delete single row from the table: "customer_types" */
  delete_customer_types_by_pk?: Maybe<Customer_Types>;
  /** delete data from the table: "enum_test_types" */
  delete_enum_test_types?: Maybe<Enum_Test_Types_Mutation_Response>;
  /** delete single row from the table: "enum_test_types" */
  delete_enum_test_types_by_pk?: Maybe<Enum_Test_Types>;
  /** delete data from the table: "order_items" */
  delete_order_items?: Maybe<Order_Items_Mutation_Response>;
  /** delete single row from the table: "order_items" */
  delete_order_items_by_pk?: Maybe<Order_Items>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "organization_partnership_levels" */
  delete_organization_partnership_levels?: Maybe<Organization_Partnership_Levels_Mutation_Response>;
  /** delete single row from the table: "organization_partnership_levels" */
  delete_organization_partnership_levels_by_pk?: Maybe<Organization_Partnership_Levels>;
  /** delete data from the table: "organization_types" */
  delete_organization_types?: Maybe<Organization_Types_Mutation_Response>;
  /** delete single row from the table: "organization_types" */
  delete_organization_types_by_pk?: Maybe<Organization_Types>;
  /** delete data from the table: "organizations" */
  delete_organizations?: Maybe<Organizations_Mutation_Response>;
  /** delete single row from the table: "organizations" */
  delete_organizations_by_pk?: Maybe<Organizations>;
  /** delete data from the table: "product_availability" */
  delete_product_availability?: Maybe<Product_Availability_Mutation_Response>;
  /** delete single row from the table: "product_availability" */
  delete_product_availability_by_pk?: Maybe<Product_Availability>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "status_types" */
  delete_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** delete single row from the table: "status_types" */
  delete_status_types_by_pk?: Maybe<Status_Types>;
  /** delete data from the table: "types_test" */
  delete_types_test?: Maybe<Types_Test_Mutation_Response>;
  /** delete single row from the table: "types_test" */
  delete_types_test_by_pk?: Maybe<Types_Test>;
  /** insert a single row into the table: "customers" */
  insertCustomer?: Maybe<Customers>;
  /** insert data into the table: "customers" */
  insertCustomers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "lalala" */
  insertLalal?: Maybe<Lalala>;
  /** insert data into the table: "lalala" */
  insertLalala?: Maybe<Lalala_Mutation_Response>;
  /** insert a single row into the table: "Romi" */
  insertRom?: Maybe<Romi>;
  /** insert data into the table: "Romi" */
  insertRomi?: Maybe<Romi_Mutation_Response>;
  /** insert a single row into the table: "table" */
  insertTabl?: Maybe<Table>;
  /** insert data into the table: "table" */
  insertTable?: Maybe<Table_Mutation_Response>;
  /** insert a single row into the table: "test" */
  insertTes?: Maybe<Test>;
  /** insert data into the table: "test" */
  insertTest?: Maybe<Test_Mutation_Response>;
  /** insert data into the table: "customer_types" */
  insert_customer_types?: Maybe<Customer_Types_Mutation_Response>;
  /** insert a single row into the table: "customer_types" */
  insert_customer_types_one?: Maybe<Customer_Types>;
  /** insert data into the table: "enum_test_types" */
  insert_enum_test_types?: Maybe<Enum_Test_Types_Mutation_Response>;
  /** insert a single row into the table: "enum_test_types" */
  insert_enum_test_types_one?: Maybe<Enum_Test_Types>;
  /** insert data into the table: "order_items" */
  insert_order_items?: Maybe<Order_Items_Mutation_Response>;
  /** insert a single row into the table: "order_items" */
  insert_order_items_one?: Maybe<Order_Items>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "organization_partnership_levels" */
  insert_organization_partnership_levels?: Maybe<Organization_Partnership_Levels_Mutation_Response>;
  /** insert a single row into the table: "organization_partnership_levels" */
  insert_organization_partnership_levels_one?: Maybe<Organization_Partnership_Levels>;
  /** insert data into the table: "organization_types" */
  insert_organization_types?: Maybe<Organization_Types_Mutation_Response>;
  /** insert a single row into the table: "organization_types" */
  insert_organization_types_one?: Maybe<Organization_Types>;
  /** insert data into the table: "organizations" */
  insert_organizations?: Maybe<Organizations_Mutation_Response>;
  /** insert a single row into the table: "organizations" */
  insert_organizations_one?: Maybe<Organizations>;
  /** insert data into the table: "product_availability" */
  insert_product_availability?: Maybe<Product_Availability_Mutation_Response>;
  /** insert a single row into the table: "product_availability" */
  insert_product_availability_one?: Maybe<Product_Availability>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "status_types" */
  insert_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** insert a single row into the table: "status_types" */
  insert_status_types_one?: Maybe<Status_Types>;
  /** insert data into the table: "types_test" */
  insert_types_test?: Maybe<Types_Test_Mutation_Response>;
  /** insert a single row into the table: "types_test" */
  insert_types_test_one?: Maybe<Types_Test>;
  /** update single row of the table: "customers" */
  updateCustomer?: Maybe<Customers>;
  /** update data of the table: "customers" */
  updateCustomers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "lalala" */
  updateLalal?: Maybe<Lalala>;
  /** update data of the table: "lalala" */
  updateLalala?: Maybe<Lalala_Mutation_Response>;
  /** update single row of the table: "Romi" */
  updateRom?: Maybe<Romi>;
  /** update data of the table: "Romi" */
  updateRomi?: Maybe<Romi_Mutation_Response>;
  /** update single row of the table: "table" */
  updateTabl?: Maybe<Table>;
  /** update data of the table: "table" */
  updateTable?: Maybe<Table_Mutation_Response>;
  /** update single row of the table: "test" */
  updateTes?: Maybe<Test>;
  /** update data of the table: "test" */
  updateTest?: Maybe<Test_Mutation_Response>;
  /** update data of the table: "customer_types" */
  update_customer_types?: Maybe<Customer_Types_Mutation_Response>;
  /** update single row of the table: "customer_types" */
  update_customer_types_by_pk?: Maybe<Customer_Types>;
  /** update data of the table: "enum_test_types" */
  update_enum_test_types?: Maybe<Enum_Test_Types_Mutation_Response>;
  /** update single row of the table: "enum_test_types" */
  update_enum_test_types_by_pk?: Maybe<Enum_Test_Types>;
  /** update data of the table: "order_items" */
  update_order_items?: Maybe<Order_Items_Mutation_Response>;
  /** update single row of the table: "order_items" */
  update_order_items_by_pk?: Maybe<Order_Items>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "organization_partnership_levels" */
  update_organization_partnership_levels?: Maybe<Organization_Partnership_Levels_Mutation_Response>;
  /** update single row of the table: "organization_partnership_levels" */
  update_organization_partnership_levels_by_pk?: Maybe<Organization_Partnership_Levels>;
  /** update data of the table: "organization_types" */
  update_organization_types?: Maybe<Organization_Types_Mutation_Response>;
  /** update single row of the table: "organization_types" */
  update_organization_types_by_pk?: Maybe<Organization_Types>;
  /** update data of the table: "organizations" */
  update_organizations?: Maybe<Organizations_Mutation_Response>;
  /** update single row of the table: "organizations" */
  update_organizations_by_pk?: Maybe<Organizations>;
  /** update data of the table: "product_availability" */
  update_product_availability?: Maybe<Product_Availability_Mutation_Response>;
  /** update single row of the table: "product_availability" */
  update_product_availability_by_pk?: Maybe<Product_Availability>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "status_types" */
  update_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** update single row of the table: "status_types" */
  update_status_types_by_pk?: Maybe<Status_Types>;
  /** update data of the table: "types_test" */
  update_types_test?: Maybe<Types_Test_Mutation_Response>;
  /** update single row of the table: "types_test" */
  update_types_test_by_pk?: Maybe<Types_Test>;
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
export type Mutation_RootDeleteCustomerArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteCustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteLalalArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteLalalaArgs = {
  where: Lalala_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteRomArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRomiArgs = {
  where: Romi_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTablArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTableArgs = {
  where: Table_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTesArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTestArgs = {
  where: Test_Bool_Exp;
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
export type Mutation_RootDelete_Enum_Test_TypesArgs = {
  where: Enum_Test_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Enum_Test_Types_By_PkArgs = {
  int_enum: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Order_ItemsArgs = {
  where: Order_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
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
export type Mutation_RootDelete_OrganizationsArgs = {
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organizations_By_PkArgs = {
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
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
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
export type Mutation_RootDelete_Types_TestArgs = {
  where: Types_Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Types_Test_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootInsertLalalArgs = {
  object: Lalala_Insert_Input;
  on_conflict?: InputMaybe<Lalala_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertLalalaArgs = {
  objects: Array<Lalala_Insert_Input>;
  on_conflict?: InputMaybe<Lalala_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertRomArgs = {
  object: Romi_Insert_Input;
  on_conflict?: InputMaybe<Romi_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertRomiArgs = {
  objects: Array<Romi_Insert_Input>;
  on_conflict?: InputMaybe<Romi_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTablArgs = {
  object: Table_Insert_Input;
  on_conflict?: InputMaybe<Table_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTableArgs = {
  objects: Array<Table_Insert_Input>;
  on_conflict?: InputMaybe<Table_On_Conflict>;
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
export type Mutation_RootInsert_Order_ItemsArgs = {
  objects: Array<Order_Items_Insert_Input>;
  on_conflict?: InputMaybe<Order_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Items_OneArgs = {
  object: Order_Items_Insert_Input;
  on_conflict?: InputMaybe<Order_Items_On_Conflict>;
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
export type Mutation_RootInsert_OrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organizations_OneArgs = {
  object: Organizations_Insert_Input;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
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
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
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
export type Mutation_RootUpdateLalalArgs = {
  _set?: InputMaybe<Lalala_Set_Input>;
  pk_columns: Lalala_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateLalalaArgs = {
  _set?: InputMaybe<Lalala_Set_Input>;
  where: Lalala_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateRomArgs = {
  _set?: InputMaybe<Romi_Set_Input>;
  pk_columns: Romi_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateRomiArgs = {
  _set?: InputMaybe<Romi_Set_Input>;
  where: Romi_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTablArgs = {
  _set?: InputMaybe<Table_Set_Input>;
  pk_columns: Table_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTableArgs = {
  _set?: InputMaybe<Table_Set_Input>;
  where: Table_Bool_Exp;
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
export type Mutation_RootUpdate_Order_ItemsArgs = {
  _inc?: InputMaybe<Order_Items_Inc_Input>;
  _set?: InputMaybe<Order_Items_Set_Input>;
  where: Order_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Items_By_PkArgs = {
  _inc?: InputMaybe<Order_Items_Inc_Input>;
  _set?: InputMaybe<Order_Items_Set_Input>;
  pk_columns: Order_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
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
export type Mutation_RootUpdate_OrganizationsArgs = {
  _inc?: InputMaybe<Organizations_Inc_Input>;
  _set?: InputMaybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_By_PkArgs = {
  _inc?: InputMaybe<Organizations_Inc_Input>;
  _set?: InputMaybe<Organizations_Set_Input>;
  pk_columns: Organizations_Pk_Columns_Input;
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
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
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

export type Numeric_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _cast?: InputMaybe<Numeric_Cast_Exp>;
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
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "order_items" */
export type Order_Items_Aggregate = {
  __typename?: 'order_items_aggregate';
  aggregate?: Maybe<Order_Items_Aggregate_Fields>;
  nodes: Array<Order_Items>;
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
  UpdatedAt = 'updated_at'
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
  UpdatedAt = 'updated_at'
}

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
  order_status?: InputMaybe<Status_Types_Enum_Comparison_Exp>;
  shipped_date?: InputMaybe<Date_Comparison_Exp>;
  status_type?: InputMaybe<Status_Types_Bool_Exp>;
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
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  shipped_date?: InputMaybe<Order_By>;
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
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  shipped_date?: InputMaybe<Order_By>;
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
  UpdatedAt = 'updated_at'
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
  UpdatedAt = 'updated_at'
}

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

/** update columns of table "organization_partnership_levels" */
export enum Organization_Partnership_Levels_Update_Column {
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name'
}

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

/** update columns of table "organization_types" */
export enum Organization_Types_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** List of organizations */
export type Organizations = {
  __typename?: 'organizations';
  created_at: Scalars['timestamptz'];
  crn: Scalars['numeric'];
  /** An array relationship */
  customers: Array<Customers>;
  /** An aggregate relationship */
  customers_aggregate: Customers_Aggregate;
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  name: Scalars['String'];
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

/** update columns of table "product_availability" */
export enum Product_Availability_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type'
}

/** Types of products */
export type Products = {
  __typename?: 'products';
  availability?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Items_Aggregate;
  price: Scalars['money'];
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
  order_items?: InputMaybe<Order_Items_Bool_Exp>;
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
  downloadGetUrl?: Maybe<GetUrlReturn>;
  downloadGetUrls?: Maybe<GetUrlsReturn>;
  /** fetch data from the table: "enum_test_types" */
  enum_test_types: Array<Enum_Test_Types>;
  /** fetch aggregated fields from the table: "enum_test_types" */
  enum_test_types_aggregate: Enum_Test_Types_Aggregate;
  /** fetch data from the table: "enum_test_types" using primary key columns */
  enum_test_types_by_pk?: Maybe<Enum_Test_Types>;
  file?: Maybe<File>;
  /** fetch data from the table: "lalala" using primary key columns */
  lalal?: Maybe<Lalala>;
  /** fetch data from the table: "lalala" */
  lalala: Array<Lalala>;
  /** fetch aggregated fields from the table: "lalala" */
  lalalaAggregate: Lalala_Aggregate;
  listParts?: Maybe<Part>;
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Items_Aggregate;
  /** fetch data from the table: "order_items" using primary key columns */
  order_items_by_pk?: Maybe<Order_Items>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
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
  /** An aggregate relationship */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  part?: Maybe<Part>;
  prepareUploadParts?: Maybe<GetUrlReturn>;
  /** fetch data from the table: "product_availability" */
  product_availability: Array<Product_Availability>;
  /** fetch aggregated fields from the table: "product_availability" */
  product_availability_aggregate: Product_Availability_Aggregate;
  /** fetch data from the table: "product_availability" using primary key columns */
  product_availability_by_pk?: Maybe<Product_Availability>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "Romi" using primary key columns */
  rom?: Maybe<Romi>;
  /** fetch data from the table: "Romi" */
  romi: Array<Romi>;
  /** fetch aggregated fields from the table: "Romi" */
  romiAggregate: Romi_Aggregate;
  /** fetch data from the table: "status_types" */
  status_types: Array<Status_Types>;
  /** fetch aggregated fields from the table: "status_types" */
  status_types_aggregate: Status_Types_Aggregate;
  /** fetch data from the table: "status_types" using primary key columns */
  status_types_by_pk?: Maybe<Status_Types>;
  /** fetch data from the table: "table" using primary key columns */
  tabl?: Maybe<Table>;
  /** fetch data from the table: "table" */
  table: Array<Table>;
  /** fetch aggregated fields from the table: "table" */
  tableAggregate: Table_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  tes?: Maybe<Test>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  testAggregate: Test_Aggregate;
  /** fetch data from the table: "types_test" */
  types_test: Array<Types_Test>;
  /** fetch aggregated fields from the table: "types_test" */
  types_test_aggregate: Types_Test_Aggregate;
  /** fetch data from the table: "types_test" using primary key columns */
  types_test_by_pk?: Maybe<Types_Test>;
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


export type Query_RootLalalArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLalalaArgs = {
  distinct_on?: InputMaybe<Array<Lalala_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Lalala_Order_By>>;
  where?: InputMaybe<Lalala_Bool_Exp>;
};


export type Query_RootLalalaAggregateArgs = {
  distinct_on?: InputMaybe<Array<Lalala_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Lalala_Order_By>>;
  where?: InputMaybe<Lalala_Bool_Exp>;
};


export type Query_RootListPartsArgs = {
  fileKey: Scalars['String'];
  uploadId: Scalars['String'];
};


export type Query_RootOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Query_RootOrder_Items_AggregateArgs = {
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


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
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


export type Query_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPrepareUploadPartsArgs = {
  fileKey: Scalars['String'];
  partNumber: Scalars['Int'];
  uploadId: Scalars['String'];
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


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRomArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRomiArgs = {
  distinct_on?: InputMaybe<Array<Romi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Romi_Order_By>>;
  where?: InputMaybe<Romi_Bool_Exp>;
};


export type Query_RootRomiAggregateArgs = {
  distinct_on?: InputMaybe<Array<Romi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Romi_Order_By>>;
  where?: InputMaybe<Romi_Bool_Exp>;
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


export type Query_RootTablArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTableArgs = {
  distinct_on?: InputMaybe<Array<Table_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Table_Order_By>>;
  where?: InputMaybe<Table_Bool_Exp>;
};


export type Query_RootTableAggregateArgs = {
  distinct_on?: InputMaybe<Array<Table_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Table_Order_By>>;
  where?: InputMaybe<Table_Bool_Exp>;
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


export type Query_RootTestAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
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

/** columns and relationships of "Romi" */
export type Romi = {
  __typename?: 'romi';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "Romi" */
export type Romi_Aggregate = {
  __typename?: 'romi_aggregate';
  aggregate?: Maybe<Romi_Aggregate_Fields>;
  nodes: Array<Romi>;
};

/** aggregate fields of "Romi" */
export type Romi_Aggregate_Fields = {
  __typename?: 'romi_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Romi_Max_Fields>;
  min?: Maybe<Romi_Min_Fields>;
};


/** aggregate fields of "Romi" */
export type Romi_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Romi_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Romi". All fields are combined with a logical 'AND'. */
export type Romi_Bool_Exp = {
  _and?: InputMaybe<Array<Romi_Bool_Exp>>;
  _not?: InputMaybe<Romi_Bool_Exp>;
  _or?: InputMaybe<Array<Romi_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Romi" */
export enum Romi_Constraint {
  /** unique or primary key constraint on columns "id" */
  RomiPkey = 'Romi_pkey'
}

/** input type for inserting data into table "Romi" */
export type Romi_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Romi_Max_Fields = {
  __typename?: 'romi_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Romi_Min_Fields = {
  __typename?: 'romi_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "Romi" */
export type Romi_Mutation_Response = {
  __typename?: 'romi_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Romi>;
};

/** on_conflict condition type for table "Romi" */
export type Romi_On_Conflict = {
  constraint: Romi_Constraint;
  update_columns?: Array<Romi_Update_Column>;
  where?: InputMaybe<Romi_Bool_Exp>;
};

/** Ordering options when selecting data from "Romi". */
export type Romi_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: romi */
export type Romi_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Romi" */
export enum Romi_Select_Column {
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

/** input type for updating data in table "Romi" */
export type Romi_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "Romi" */
export enum Romi_Update_Column {
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
  status?: InputMaybe<String_Comparison_Exp>;
  types_tests?: InputMaybe<Types_Test_Bool_Exp>;
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

/** update columns of table "status_types" */
export enum Status_Types_Update_Column {
  /** column name */
  Status = 'status'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
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
  /** fetch data from the table: "enum_test_types" */
  enum_test_types: Array<Enum_Test_Types>;
  /** fetch aggregated fields from the table: "enum_test_types" */
  enum_test_types_aggregate: Enum_Test_Types_Aggregate;
  /** fetch data from the table: "enum_test_types" using primary key columns */
  enum_test_types_by_pk?: Maybe<Enum_Test_Types>;
  /** fetch data from the table: "lalala" using primary key columns */
  lalal?: Maybe<Lalala>;
  /** fetch data from the table: "lalala" */
  lalala: Array<Lalala>;
  /** fetch aggregated fields from the table: "lalala" */
  lalalaAggregate: Lalala_Aggregate;
  /** An array relationship */
  order_items: Array<Order_Items>;
  /** An aggregate relationship */
  order_items_aggregate: Order_Items_Aggregate;
  /** fetch data from the table: "order_items" using primary key columns */
  order_items_by_pk?: Maybe<Order_Items>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
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
  /** An aggregate relationship */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table: "product_availability" */
  product_availability: Array<Product_Availability>;
  /** fetch aggregated fields from the table: "product_availability" */
  product_availability_aggregate: Product_Availability_Aggregate;
  /** fetch data from the table: "product_availability" using primary key columns */
  product_availability_by_pk?: Maybe<Product_Availability>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "Romi" using primary key columns */
  rom?: Maybe<Romi>;
  /** fetch data from the table: "Romi" */
  romi: Array<Romi>;
  /** fetch aggregated fields from the table: "Romi" */
  romiAggregate: Romi_Aggregate;
  /** fetch data from the table: "status_types" */
  status_types: Array<Status_Types>;
  /** fetch aggregated fields from the table: "status_types" */
  status_types_aggregate: Status_Types_Aggregate;
  /** fetch data from the table: "status_types" using primary key columns */
  status_types_by_pk?: Maybe<Status_Types>;
  /** fetch data from the table: "table" using primary key columns */
  tabl?: Maybe<Table>;
  /** fetch data from the table: "table" */
  table: Array<Table>;
  /** fetch aggregated fields from the table: "table" */
  tableAggregate: Table_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  tes?: Maybe<Test>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  testAggregate: Test_Aggregate;
  /** fetch data from the table: "types_test" */
  types_test: Array<Types_Test>;
  /** fetch aggregated fields from the table: "types_test" */
  types_test_aggregate: Types_Test_Aggregate;
  /** fetch data from the table: "types_test" using primary key columns */
  types_test_by_pk?: Maybe<Types_Test>;
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


export type Subscription_RootLalalArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLalalaArgs = {
  distinct_on?: InputMaybe<Array<Lalala_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Lalala_Order_By>>;
  where?: InputMaybe<Lalala_Bool_Exp>;
};


export type Subscription_RootLalalaAggregateArgs = {
  distinct_on?: InputMaybe<Array<Lalala_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Lalala_Order_By>>;
  where?: InputMaybe<Lalala_Bool_Exp>;
};


export type Subscription_RootOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Items_Order_By>>;
  where?: InputMaybe<Order_Items_Bool_Exp>;
};


export type Subscription_RootOrder_Items_AggregateArgs = {
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


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
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


export type Subscription_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_By_PkArgs = {
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


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRomArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRomiArgs = {
  distinct_on?: InputMaybe<Array<Romi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Romi_Order_By>>;
  where?: InputMaybe<Romi_Bool_Exp>;
};


export type Subscription_RootRomiAggregateArgs = {
  distinct_on?: InputMaybe<Array<Romi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Romi_Order_By>>;
  where?: InputMaybe<Romi_Bool_Exp>;
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


export type Subscription_RootTablArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTableArgs = {
  distinct_on?: InputMaybe<Array<Table_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Table_Order_By>>;
  where?: InputMaybe<Table_Bool_Exp>;
};


export type Subscription_RootTableAggregateArgs = {
  distinct_on?: InputMaybe<Array<Table_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Table_Order_By>>;
  where?: InputMaybe<Table_Bool_Exp>;
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


export type Subscription_RootTestAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
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

/** columns and relationships of "table" */
export type Table = {
  __typename?: 'table';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "table" */
export type Table_Aggregate = {
  __typename?: 'table_aggregate';
  aggregate?: Maybe<Table_Aggregate_Fields>;
  nodes: Array<Table>;
};

/** aggregate fields of "table" */
export type Table_Aggregate_Fields = {
  __typename?: 'table_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Table_Max_Fields>;
  min?: Maybe<Table_Min_Fields>;
};


/** aggregate fields of "table" */
export type Table_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Table_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "table". All fields are combined with a logical 'AND'. */
export type Table_Bool_Exp = {
  _and?: InputMaybe<Array<Table_Bool_Exp>>;
  _not?: InputMaybe<Table_Bool_Exp>;
  _or?: InputMaybe<Array<Table_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "table" */
export enum Table_Constraint {
  /** unique or primary key constraint on columns "id" */
  TablePkey = 'table_pkey'
}

/** input type for inserting data into table "table" */
export type Table_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Table_Max_Fields = {
  __typename?: 'table_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Table_Min_Fields = {
  __typename?: 'table_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "table" */
export type Table_Mutation_Response = {
  __typename?: 'table_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Table>;
};

/** on_conflict condition type for table "table" */
export type Table_On_Conflict = {
  constraint: Table_Constraint;
  update_columns?: Array<Table_Update_Column>;
  where?: InputMaybe<Table_Bool_Exp>;
};

/** Ordering options when selecting data from "table". */
export type Table_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: table */
export type Table_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "table" */
export enum Table_Select_Column {
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

/** input type for updating data in table "table" */
export type Table_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "table" */
export enum Table_Update_Column {
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

/** columns and relationships of "test" */
export type Test = {
  __typename?: 'test';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "test" */
export type Test_Aggregate = {
  __typename?: 'test_aggregate';
  aggregate?: Maybe<Test_Aggregate_Fields>;
  nodes: Array<Test>;
};

/** aggregate fields of "test" */
export type Test_Aggregate_Fields = {
  __typename?: 'test_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test_Max_Fields>;
  min?: Maybe<Test_Min_Fields>;
};


/** aggregate fields of "test" */
export type Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Bool_Exp>>;
  _not?: InputMaybe<Test_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test" */
export enum Test_Constraint {
  /** unique or primary key constraint on columns "id" */
  TestPkey1 = 'test_pkey1'
}

/** input type for inserting data into table "test" */
export type Test_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Test_Max_Fields = {
  __typename?: 'test_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Test_Min_Fields = {
  __typename?: 'test_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test" */
export type Test_Mutation_Response = {
  __typename?: 'test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test>;
};

/** on_conflict condition type for table "test" */
export type Test_On_Conflict = {
  constraint: Test_Constraint;
  update_columns?: Array<Test_Update_Column>;
  where?: InputMaybe<Test_Bool_Exp>;
};

/** Ordering options when selecting data from "test". */
export type Test_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test */
export type Test_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test" */
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
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test" */
export type Test_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test" */
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
  UpdatedAt = 'updatedAt'
}

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

export type Timestamp_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _cast?: InputMaybe<Timestamp_Cast_Exp>;
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

export type Timestamptz_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _cast?: InputMaybe<Timestamptz_Cast_Exp>;
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

export type Timetz_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timetz". All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _cast?: InputMaybe<Timetz_Cast_Exp>;
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

/** columns and relationships of "types_test" */
export type Types_Test = {
  __typename?: 'types_test';
  big_int_test?: Maybe<Scalars['bigint']>;
  checkbox_test?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date_test?: Maybe<Scalars['date']>;
  email_test?: Maybe<Scalars['String']>;
  enum_test?: Maybe<Status_Types_Enum>;
  enum_test_2_nonull: Enum_Test_Types_Enum;
  /** An object relationship */
  enum_test_type: Enum_Test_Types;
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

export type Uuid_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _cast?: InputMaybe<Uuid_Cast_Exp>;
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
