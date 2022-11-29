import React from 'react'
import { Grid } from '@mui/material'
import OrdersListItem from './OrdersListItem'
import { OrdersFragment } from '../../../generated/graphql'
export interface OrdersListProps {
  data?: OrdersFragment[]
  relationshipName?: string
}
const OrdersListView: React.FC<OrdersListProps> = ({
  data,
  relationshipName,
}) => {
  return (
    <Grid container width="100%" sx={{ overflow: 'hidden', marginTop: '20px' }}>
      {data?.map((orders, index) => (
        <>
          <OrdersListItem
            data={orders}
            key={orders.id}
            relationshipName={relationshipName}
            index={index}
          />
        </>
      ))}
    </Grid>
  )
}
export default OrdersListView
