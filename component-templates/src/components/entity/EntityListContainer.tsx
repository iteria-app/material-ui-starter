import React from 'react'
import { Error, ErrorBoundary, ListPagePlaceholder } from '../../material-ui'
import { useEntityList } from '../../gql'
import { useFilter } from '../../gql/filter'
import { QueryBoundary } from '../QueryBoundary'

interface EntityListContainerProps {
  onClickRow: (entity: any /* TODO fragment*/) => void
  onDeleteRow?: (value: any) => void
  onClickCreate?: () => void
  entity: string
}

export const EntityListContainer: React.FC<EntityListContainerProps> = (
  props
) => {
  const filterProps = useFilter()
  const result = useEntityList(props.entity, filterProps)

  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={result}>
        <ListPagePlaceholder
          loading={result?.fetching}
          data={result?.data}
          entityFields={result?.entityFields}
          {...props}
          {...filterProps}
        />
      </QueryBoundary>
    </ErrorBoundary>
  )
}
