import React from 'react'
import {
  EntitiesQuery,
  IError,
  useEntityQuery,
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
  filterProps: FilterProps
}

interface IEnitityListContainerProps {
  View: React.FC<IViewProps>
  LoadingView?: React.FC<IViewProps>
}

const EntityListContainer: React.FC<IEnitityListContainerProps> = ({
  View,
  LoadingView,
}) => {
  const filterProps = useFilter()
  const navigate = useNavigate()

  const [data]: {
    data: EntitiesQuery
    fetching: boolean
    error: IError | null
  }[] = useEntityQuery({
    variables: {
      where: filterProps.filter,
      limit: filterProps.pageSize,
      offset: filterProps.offset,
      order_by: filterProps.sort,
    },
  })

  if (data?.fetching && LoadingView) {
    (
      <ErrorBoundary>
        <QueryBoundary queryResponse={data}>
          <LoadingView
            data={data?.data?.Entity}
            error={data?.error}
            loading={data?.fetching}
            filterProps={filterProps}
          />
        </QueryBoundary>
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <View
          data={data?.data?.Entity}
          error={data?.error}
          loading={data?.fetching}
          filterProps={filterProps}
        />
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityListContainer
