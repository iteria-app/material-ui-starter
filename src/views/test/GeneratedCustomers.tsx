import React, { useState } from 'react';
import GeneratedTable from './GeneratedCustomersTable'
import { useSearchCustomers2Query } from 'src/generated/graphql'
// import { Customer_Order_By } from 'src/generated/graphql'


const GeneratedCustomers = () => {
  const [order_by, setSortCustomers] = React.useState(
    {
      name: "asc"
    }
  );
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState((page - 1) * limit);
  const [where, setFilter] = useState({
    name: {
      _ilike: "%%"
    }
  }
  );

  const [result] = useSearchCustomers2Query({
    // @ts-ignore
    variables: { where, limit, offset, order_by }
  })


  console.log(result, 'result');
  const { data, error, fetching } = result;

  const totalCustomers = data?.customerAggregate?.aggregate?.count
  
  if (error) return <p>Oh no... {error.message}</p>;
  const onSortCustomers = (sort) => {
    setSortCustomers(sort)
  }
  const onChangePageCustomers = (page) => {
    // console.log(page,'page'); 
    setPage(page)
    setOffset((page - 1) * limit)
    console.log(page,'page'); 
  }
  const onPageSize = (limit) => {
    setLimit(limit)
  }
  const onFilterCustomers = (query) => {
    setFilter(query)
  }
  
  return (
    <GeneratedTable customers={fetching ? [] : data.customers}
      totalCustomers={totalCustomers}
      onChangePageCustomers={onChangePageCustomers}  offset={offset} page={page} onPageSize={onPageSize} onSortCustomers={onSortCustomers} onFilterCustomers={onFilterCustomers} limit={limit} />
  );
};
export default GeneratedCustomers
