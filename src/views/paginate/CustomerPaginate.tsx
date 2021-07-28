import React, { useState } from 'react'
import CustomerCard from './CustomerCard';
import InfiniteScroll from "react-infinite-scroll-component";
import Typography from '@material-ui/core/Typography';
import { usePaginateCustomersQuery } from '../../generated/graphql'

const CustomerPaginate = () => {
  const paginationStep = 2
  const [first, setFirst] = useState<number>(4)
  const [hasMore, setHasMore] = useState<boolean>(true)

  const [result] = usePaginateCustomersQuery({ variables: { first: first } })
  const { data, error, fetching } = result

  if (error) return <p>Oh no... {error.message}</p>
  const customers = data?.customer_connection?.edges
  console.log(data?.customer_connection, 'data?.customer_connection');

  const onBottomScroll = () => {
    if (fetching === false) {
      setFirst(first + paginationStep)
    }
    hasMorePages()
  }

  const hasMorePages = () => {
    const customerConnection =  data?.customer_connection
    const customerHasNextPage =  customerConnection.pageInfo?.hasNextPage
    if (customerHasNextPage === false) {
      setHasMore(false)
    }
  }

  return (
    <>
      <InfiniteScroll
        dataLength={customers ? customers.length : 0}
        next={onBottomScroll}
        hasMore={hasMore}
        loader={<Typography variant="subtitle1" align={'center'} gutterBottom>Loading...</Typography>}
        scrollableTarget="scrollableContent"
      >
        <CustomerCard customers={customers} />
      </InfiniteScroll>
    </>
  )
};

export default CustomerPaginate
