import React from 'react'
import OrdersListView from '../../components/entities/orders/OrdersListView'
import OrdersListContainer from '../../components/entities/orders/OrdersListContainer'
const OrdersManyPage: React.FC = () => {
  return (
    <OrdersListContainer View={({ data }) => <OrdersListView data={data} />} />
  )
}
export default OrdersManyPage
