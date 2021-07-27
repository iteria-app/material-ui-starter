import React, { useState } from 'react'
import CustomerPaginateCards from './CustomerPaginateCards'
import { usePaginateCustomersQuery } from '../../generated/graphql'

const CustomerPaginateList = () => {
  const paginationStep = 2
  const [first, setFirst] = useState<number>(4)
  const [result] = usePaginateCustomersQuery({ variables: { first: first } })
  const { data, error, fetching } = result

  if (error) return <p>Oh no... {error.message}</p>
  const customers = data?.customer_connection?.edges
  console.log(data?.customer_connection, 'data?.customer_connection');

  const onBottomScroll = () => {
    if (fetching === false) {
      setFirst(first + paginationStep)
    }
  }

  return (
    <div>
      {() => console.log(customers,'x')} 
      {/* <CustomerPaginateCards customers={customers} paginationStep={paginationStep} onBottomScroll={onBottomScroll} /> */}
    </div>
  )
};
export default CustomerPaginateList
