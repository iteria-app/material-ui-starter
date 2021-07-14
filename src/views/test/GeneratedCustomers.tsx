import React from 'react';
import GeneratedTable from './GeneratedCustomersTable'
import { useAllCustomersQuery } from 'src/generated/graphql'

const GeneratedCustomers = () => {
  const [result] = useAllCustomersQuery()
  const { data, error, fetching } = result;

  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <GeneratedTable customers={fetching ? [] : data.customers} />
  );
};
export default GeneratedCustomers
