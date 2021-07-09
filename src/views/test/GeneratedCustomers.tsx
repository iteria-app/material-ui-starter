import React, { useState } from 'react';
import GeneratedTable from './GeneratedCustomersTable'
import { useSearchCustomers2Query } from 'src/generated/graphql'
// import { Customer_Order_By } from 'src/generated/graphql'

const GeneratedCustomers = () => {
  const [sort, setSortCustomers] = React.useState(
    {
      name: 'asc'
    }
  );
  const [limit, setLimit] = useState<number>(2);
  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>((page - 1) * limit);
  const [filter, setFilter] = useState<object>({
    name: {
      _ilike: "%%"
    }
  }
  )

  const [result] = useSearchCustomers2Query({
    // @ts-ignore
    variables: { where: filter, limit, offset, order_by: sort }
  })


  console.log(result, 'result');
  const { data, error, fetching } = result;

  const totalCustomers: number = data?.customerAggregate?.aggregate?.count

  if (error) return <p>Oh no... {error.message}</p>;

  const onSortCustomers = (sort) => {
    console.log(sort, 'sort/////////');
    setSortCustomers(sort)
  }

  const onChangePageCustomers = (page: number) => {
    setPage(page)
    setOffset((page - 1) * limit)
    console.log(page, 'page');
  }

  const onPageSize = (limit: number) => {
    setLimit(limit)
  }

  const onFilterCustomers = (query: object) => {
    setFilter(query)
  }

  return (
    <GeneratedTable customers={fetching ? [] : data.customers}
      totalCustomers={totalCustomers}
      onChangePageCustomers={onChangePageCustomers} offset={offset} page={page} onPageSize={onPageSize} onSortCustomers={onSortCustomers} onFilterCustomers={onFilterCustomers} limit={limit} />
  );
};
export default GeneratedCustomers
