export const SEARCH_CUSTOMER_QUERY = `
  query Search($search: String!) {
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

export const UPDATE_CUSTOMER_MUTATION = `
  mutation MyMutation( $id: uuid! = "", $name: String! = "", $email: String! = "", $phone: String = "") {
    updateCustomer(pk_columns: {id: $id}, _set: {name: $name, email: $email, phone: $phone}) {
      name
      id
    }
  }
`;
