import React from 'react'
import { useEntityQuery } from '../../generated/graphql'
import EntityListView from './EntityListView'
import { ErrorBoundary, QueryBoundary, useFilter } from '@iteria-app/component-templates'

const EntityListContainer: React.FC = () => {
  const filterProps = useFilter()

  const [data] = useEntityQuery({
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
        <EntityListView
          data={data?.data}
          loading={data?.fetching}
          error={data?.error}
          {...filterProps}
        />
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityListContainer
