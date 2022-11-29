import React from 'react'
import CustomersDataTableContainer from '../../components/entities/customers/CustomersDataTableContainer'
import CustomersDataTableView from '../../components/entities/customers/CustomersDataTableView'
const CustomersManyPage: React.FC = () => {
  return (
    <CustomersDataTableContainer
      View={({ data, error, loading, onClickRow, filterProps }) => {
        return (
          <CustomersDataTableView
            data={data}
            filterProps={filterProps}
            onClickRow={onClickRow}
            loading={loading}
            error={error}
          />
        )
      }}
    />
  )
}
export default CustomersManyPage
