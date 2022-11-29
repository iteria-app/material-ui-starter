import React from 'react'
import CustomersFormView from '../../components/entities/customers/CustomersFormView'
import CustomersFormContainer from '../../components/entities/customers/CustomersFormContainer'
const CustomersFormPage: React.FC = () => {
  return (
    <CustomersFormContainer
      View={({ data, onSubmit, onCopy }) => (
        <CustomersFormView data={data} onSubmit={onSubmit} onCopy={onCopy} />
      )}
    />
  )
}
export default CustomersFormPage
