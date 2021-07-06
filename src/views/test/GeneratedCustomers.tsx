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
  // const [totalCustomer, setTotalCustomer] = useState<number>();
  const [where, setFilter] = useState({
    name: {
      _ilike: "%%"
    }
  }
  );

  // React.useEffect(() => {
  //   // if(data?.customerAggregate?.aggregate?.count){
  //     setTotalCustomer(data?.customerAggregate?.aggregate?.count)
  //     // totalCustomerOnLoad()
  //   // }
  //   console.log(totalCustomer,'totalCustomer'); 
  // });

  const offset = (page - 1) * limit

  const [result] = useSearchCustomers2Query({
    // @ts-ignore
    variables: { where, limit, offset, order_by }
  })


  console.log(result, 'result');
  const { data, error, fetching } = result;

  const totalCustomer = data?.customerAggregate?.aggregate?.count
  
  if (error) return <p>Oh no... {error.message}</p>;
  const onOrderCustomer = (sort) => {
    setSortCustomers(sort)
  }
  const onPageChangeCustomer = (page) => {
    // console.log(page,'page'); 
    setPage(page)
    console.log(page,'page'); 
  }
  const limitCustomer = (limit) => {
    setLimit(limit)
  }
  const onFilterCustomer = (query) => {
    setFilter(query)
  }
  
  return (
    <GeneratedTable customers={fetching ? [] : data.customers}
      totalCustomer={totalCustomer}
      onPageChangeCustomer={onPageChangeCustomer} page={page} limitCustomer={limitCustomer} onOrderCustomer={onOrderCustomer} onFilterCustomer={onFilterCustomer} limit={limit} />
  );
};
export default GeneratedCustomers
