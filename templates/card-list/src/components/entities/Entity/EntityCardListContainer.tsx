import React from 'react'
import { useEntityQuery } from '../../../generated/graphql'
import {
  ErrorBoundary,
  QueryBoundary,
  useFilter,
  useLocale,
} from '@iteria-app/component-templates'
import { Box, Grid, Skeleton } from '@mui/material'
import { EntityCardListToolbar } from './EntityCardListToolbar'
import { InfiniteScrolling } from '../InfiniteScrolling'
import { messages } from '../../../locale'
import { IntlProvider } from 'react-intl'

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
  const locale = useLocale()
  const messagesObject = messages(locale)
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
        <IntlProvider
          locale={locale}
          messages={messagesObject}
          onError={() => console.debug}
        >
          <EntityCardListToolbar filterProps={filterProps} />
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
        </IntlProvider>
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityCardListContainer
