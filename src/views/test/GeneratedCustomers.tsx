import React, { useState } from 'react';
import GeneratedTable from './GeneratedCustomersTable'
import { useFilterCustomerGridDataQuery } from 'src/generated/graphql'

const GeneratedCustomers = () => {
  const [sort, setSortCustomers] = React.useState<object>();
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(2);
  const [filter, setFilter] = useState<object>()
  const offset = page * pageSize
  const [result] = useFilterCustomerGridDataQuery({
    variables: { where: filter, limit: pageSize, offset: offset, order_by: sort }
  })

  console.log(result, 'result');
  const { data, error, fetching } = result;

  const totalCustomers: number = data?.customerAggregate?.aggregate?.count

  if (error) return <p>Oh no... {error.message}</p>;

  const onSortCustomers = (sort) => {
    setSortCustomers(sort)
  }

  const onChangePageCustomers = (page: number) => {
    setPage(page)
    console.log(page, 'page');
  }

  const onPageSize = (pageSize: number) => {
    setPageSize(pageSize)
  }

  const onFilterCustomers = (query: object) => {
    setFilter(query)
  }

  return (
    <GeneratedTable customers={fetching ? [] : data.customers}
      totalCustomers={totalCustomers} onChangePageCustomers={onChangePageCustomers} offset={offset} page={page} onPageSize={onPageSize} onSortCustomers={onSortCustomers} onFilterCustomers={onFilterCustomers} pageSize={pageSize} />
  );
};
export default GeneratedCustomers
