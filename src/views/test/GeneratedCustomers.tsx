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
  // const [totalCustomers, settotalCustomers] = useState<number>();
  const [where, setFilter] = useState({
    name: {
      _ilike: "%%"
    }
  }
  );

  // React.useEffect(() => {
  //   // if(data?.customerAggregate?.aggregate?.count){
  //     settotalCustomers(data?.customerAggregate?.aggregate?.count)
  //     // totalCustomersOnLoad()
  //   // }
  //   console.log(totalCustomers,'totalCustomers'); 
  // });

  const offset = (page - 1) * limit

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
  const onPageChangeCustomers = (page) => {
    // console.log(page,'page'); 
    setPage(page)
    console.log(page,'page'); 
  }
  const limitCustomers = (limit) => {
    setLimit(limit)
  }
  const onFilterCustomers = (query) => {
    setFilter(query)
  }
  
  return (
    <GeneratedTable customers={fetching ? [] : data.customers}
      totalCustomers={totalCustomers}
      onPageChangeCustomers={onPageChangeCustomers} page={page} limitCustomers={limitCustomers} onSortCustomers={onSortCustomers} onFilterCustomers={onFilterCustomers} limit={limit} />
  );
};
export default GeneratedCustomers
