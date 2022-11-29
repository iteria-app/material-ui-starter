import React from 'react'
import OrdersFormView from '../../components/entities/orders/OrdersFormView'
import OrdersFormContainer from '../../components/entities/orders/OrdersFormContainer'
const OrdersFormPage: React.FC = () => {
  return (
    <OrdersFormContainer
      View={({ data, onSubmit, onCopy }) => (
        <OrdersFormView data={data} onSubmit={onSubmit} onCopy={onCopy} />
      )}
    />
  )
}
export default OrdersFormPage
