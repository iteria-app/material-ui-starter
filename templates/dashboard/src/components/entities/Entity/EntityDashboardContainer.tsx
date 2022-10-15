import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useEntityQuery } from '../../../generated/graphql'
import {
  ErrorBoundary,
  QueryBoundary,
  useFilter,
} from '@iteria-app/component-templates'
import { Box, CircularProgress, Grid, Skeleton } from '@mui/material'

interface ViewProps {
  data: any
}

interface EntityDashboardContainerProps {
  View: React.FC<ViewProps>
}

const EntityDashboardContainer: React.FC<EntityDashboardContainerProps> = ({
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
        {!data?.fetching ? (
          <View data={data?.data} />
        ) : (
          <Grid
            container
            width="100%"
            height="50vh"
            justifyContent="center"
            alignItems="center"
            sx={{ overflow: 'hidden' }}
          >
            <CircularProgress />
          </Grid>
        )}
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityDashboardContainer
