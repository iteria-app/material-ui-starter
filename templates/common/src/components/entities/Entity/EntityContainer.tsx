import React from 'react'
import { EntityFragment, useEntityQuery } from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'
import {
  ErrorBoundary,
  QueryBoundary,
  useFilter,
  InfiniteScrolling,
  FilterProps,
} from '@iteria-app/component-templates'
import { CircularProgress } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { IntroField } from '@iteria-app/graphql-lowcode'

interface ViewProps {
  data: EntityFragment[] | null
  filterCallbacks?: FilterProps
}

interface ToolbarProps {
  filterProps: FilterProps
  introspection: IntroField[]
  filterCallbacks: FilterProps
}

interface EntityContainer {
  View: React.FC<ViewProps>
  Toolbar: React.FC<ToolbarProps>
  Skeleton?: React.ReactNode
}

const EntityContainer: React.FC<EntityContainer> = ({
  View,
  Toolbar,
  Skeleton,
}) => {
  const [searchParams] = useSearchParams()
  const filterProps = useFilter(searchParams)
  const entityIntrospection = introspection?.__schema?.types?.find(
    (type) => type?.name === 'Entity'
  )?.fields

  const [data] = useEntityQuery({
    variables: {
      where: filterProps.filter,
      limit: filterProps.pageSize,
      offset: filterProps.offset,
      order_by: filterProps.sort,
      ...(filterProps?.constructedQueryRootVariables ?? {}),
    },
  })

  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <Toolbar
          filterProps={filterProps}
          introspection={entityIntrospection}
          filterCallbacks={filterProps}
          entityName="Entity"
        />
        <InfiniteScrolling
          filterProps={filterProps}
          data={data}
          loadingSkeleton={Skeleton ?? <CircularProgress />}
        >
          <View data={data?.data} filterCallbacks={filterProps} />
        </InfiniteScrolling>
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityContainer
