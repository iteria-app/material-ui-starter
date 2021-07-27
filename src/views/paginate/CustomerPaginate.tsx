import React, { useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

import {
  Box
} from '@material-ui/core';
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
      console.log('iss Bottom');
    }
    if (data?.customer_connection?.pageInfo?.hasNextPage === false) {
      setHasMore(false)
    }
    console.log(hasMore,'hasMore'); 
  }

  return (
    <InfiniteScroll
      dataLength={customers ? customers.length : 0}
      next={onBottomScroll}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      scrollableTarget="scrollableContent"
    >
      {customers ?
        customers.map((customer, index) => (
          <Box key={index} padding={"50px"} fontSize={"200px"}>
            {customer?.node?.name}
          </Box>
        ))
        :
        null
      }
    </InfiniteScroll>
  )
};

export default CustomerPaginate
