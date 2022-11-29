import React from 'react'
import {
  EntitiesQuery,
  IError,
  useCustomersQuery,
} from '../../../generated/graphql'
import {
  ErrorBoundary,
  FilterProps,
  QueryBoundary,
  useFilter,
} from '@iteria-app/component-templates'
import { useNavigate } from 'react-router-dom'
interface IViewProps {
  data: EntitiesQuery
  error: IError | null
  loading: boolean
  onClickRow: (state: any) => void
  filterProps: FilterProps
}
interface IEnitityListContainerProps {
  View: React.FC<IViewProps>
}
const CustomersListContainer: React.FC<IEnitityListContainerProps> = ({
  View,
}) => {
  const filterProps = useFilter()
  const navigate = useNavigate()
  const [data]: {
    data: EntitiesQuery
    fetching: boolean
    error: IError | null
  }[] = useCustomersQuery({
    variables: {
      where: filterProps.filter,
      limit: filterProps.pageSize + filterProps.pageSize,
      offset: filterProps.offset,
      order_by: filterProps.sort,
    },
  })
  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <View
          data={data?.data?.customers}
          error={data?.error}
          loading={data?.fetching}
          onClickRow={(row) => {
            navigate(row?.id?.toString())
          }}
          filterProps={filterProps}
        />
      </QueryBoundary>
    </ErrorBoundary>
  )
}
export default CustomersListContainer
