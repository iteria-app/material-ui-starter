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
  jsonb: any;
  timestamptz: any;
  uuid: any;
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

/** columns and relationships of "customer" */
export type Customer = {
  __typename?: 'customer';
  address?: Maybe<Scalars['jsonb']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "customer" */
export type CustomerAddressArgs = {
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
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Customer_Max_Fields>;
  min?: Maybe<Customer_Min_Fields>;
};


/** aggregate fields of "customer" */
export type Customer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Customer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "customer" */
export type Customer_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Customer_Max_Order_By>;
  min?: Maybe<Customer_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Customer_Append_Input = {
  address?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "customer" */
export type Customer_Arr_Rel_Insert_Input = {
  data: Array<Customer_Insert_Input>;
  on_conflict?: Maybe<Customer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "customer". All fields are combined with a logical 'AND'. */
export type Customer_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Customer_Bool_Exp>>>;
  _not?: Maybe<Customer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Customer_Bool_Exp>>>;
  address?: Maybe<Jsonb_Comparison_Exp>;
  avatarUrl?: Maybe<String_Comparison_Exp>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
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
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Customer_Delete_Elem_Input = {
  address?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Customer_Delete_Key_Input = {
  address?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "customer" */
export type Customer_Insert_Input = {
  address?: Maybe<Scalars['jsonb']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Customer_Max_Fields = {
  __typename?: 'customer_max_fields';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "customer" */
export type Customer_Max_Order_By = {
  avatarUrl?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Customer_Min_Fields = {
  __typename?: 'customer_min_fields';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "customer" */
export type Customer_Min_Order_By = {
  avatarUrl?: Maybe<Order_By>;
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
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
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "customer" */
export type Customer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Customer_Prepend_Input = {
  address?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "customer" */
export enum Customer_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "customer" */
export type Customer_Set_Input = {
  address?: Maybe<Scalars['jsonb']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "customer" */
export enum Customer_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  UpdatedAt = 'updatedAt'
}


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
  /** insert a single row into the table: "customer" */
  insertCustomer?: Maybe<Customer>;
  /** insert data into the table: "customer" */
  insertCustomers?: Maybe<Customer_Mutation_Response>;
  /** update single row of the table: "customer" */
  updateCustomer?: Maybe<Customer>;
  /** update data of the table: "customer" */
  updateCustomers?: Maybe<Customer_Mutation_Response>;
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
export type Mutation_RootUpdateCustomerArgs = {
  _append?: Maybe<Customer_Append_Input>;
  _delete_at_path?: Maybe<Customer_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Customer_Delete_Elem_Input>;
  _delete_key?: Maybe<Customer_Delete_Key_Input>;
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
  _prepend?: Maybe<Customer_Prepend_Input>;
  _set?: Maybe<Customer_Set_Input>;
  where: Customer_Bool_Exp;
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

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customer" using primary key columns */
  customer?: Maybe<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customerAggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" */
  customers: Array<Customer>;
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

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customer" using primary key columns */
  customer?: Maybe<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customerAggregate: Customer_Aggregate;
  /** fetch data from the table: "customer" */
  customers: Array<Customer>;
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