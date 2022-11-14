import React from 'react'
import { EntityFragment, useEntityQuery } from '../../../generated/graphql'
import {
  ErrorBoundary,
  FilterProps,
  QueryBoundary,
  useFilter,
} from '@iteria-app/component-templates'

interface ViewProps {
  data: EntityFragment[] | null
  filterProps: FilterProps
}

interface EntityListContainerProps {
  View: React.FC<ViewProps>
}

const EntityListContainer: React.FC<EntityListContainerProps> = ({ View }) => {
  const filterProps = useFilter()

  const [data] = useEntityQuery({
    variables: {
      where: filterProps.filter,
      limit: 1000,
      offset: filterProps.offset,
      order_by: filterProps.sort,
    },
  })

  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <View data={data?.data?.Entity} filterProps={filterProps} />
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityListContainer
