import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useEntityQuery } from '../../../generated/graphql'
import {
  ErrorBoundary,
  QueryBoundary,
  useFilter,
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

const EntityListContainer: React.FC<EntityListContainerProps> = ({ View }) => {
  const filterProps = useFilter()
  const [pageSize, setPageSize] = useState(20)

  const [data] = useEntityQuery({
    variables: {
      where: filterProps.filter,
      limit: pageSize,
      offset: filterProps.offset,
      order_by: filterProps.sort,
    },
  })

  const loader = useRef(null)
  const handleObserver = useCallback((entries) => {
    const target = entries[0]
    if (target.isIntersecting) {
      setPageSize((prev) => prev + 10)
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loader.current) observer.observe(loader.current)
  }, [handleObserver])

  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <>
          <View data={data?.data} error={data?.error} loading={false} />
          {data?.fetching && (
            <Grid container width={'100%'} sx={{ overflow: 'hidden' }}>
              {[...Array(6)].map((skeleton, index) => (
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
          )}
          <div ref={loader} />
        </>
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityListContainer
