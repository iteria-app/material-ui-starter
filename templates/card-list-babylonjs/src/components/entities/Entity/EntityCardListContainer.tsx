import React from 'react'
import { useEntityQuery } from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'
import {
  ErrorBoundary,
  QueryBoundary,
  InfiniteScrolling,
  useFilter,
  Toolbar,
} from '@iteria-app/component-templates'
import { Box, Grid, Skeleton } from '@mui/material'

interface ViewProps {
  data: any
  error: any
  loading: boolean
}

interface EntityListContainerProps {
  View: React.FC<ViewProps>
}

const EntityCardListContainer: React.FC<EntityListContainerProps> = ({
  View,
}) => {
  const filterProps = useFilter()
  const [data] = useEntityQuery({
    variables: {
      where: filterProps.filter,
      limit: filterProps.pageSize,
      offset: filterProps.offset,
      order_by: filterProps.sort,
    },
  })

  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
          <Toolbar filterProps={filterProps} introspection={introspection} />
          <InfiniteScrolling
            filterProps={filterProps}
            data={data}
            loadingSkeleton={
              <Grid container>
                {[...Array(6)].map((_, index) => (
                  <Box key={index} p={'5px'} m={'5px'} maxWidth={'200px'}>
                    <Skeleton
                      variant="rectangular"
                      animation="pulse"
                      width={200}
                      height={150}
                    />
                    <Box marginTop={'5px'}>
                      <Skeleton variant="text" animation="pulse" />
                      <Skeleton variant="text" animation="pulse" width={100} />
                    </Box>
                  </Box>
                ))}
              </Grid>
            }
          >
            <View data={data?.data} error={data?.error} loading={false} />
          </InfiniteScrolling>
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityCardListContainer
