import React from 'react'
import { useEntityQuery } from '../../../generated/graphql'
import {
  ErrorBoundary,
  QueryBoundary,
  useFilter,
  useLocale,
} from '@iteria-app/component-templates'
import { IntlProvider } from 'react-intl'
import { messages } from '../../../locale'
import {
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Skeleton,
  useTheme,
} from '@mui/material'
import { InfiniteScrolling } from '../InfiniteScrolling'
import { EntityListToolbar } from './EntityListToolbar'

interface ViewProps {
  data: any
  error: any
  loading: boolean
}

interface EntityListContainerProps {
  View: React.FC<ViewProps>
}

const EntityListContainer: React.FC<EntityListContainerProps> = ({ View }) => {
  const locale = useLocale()
  const messagesObject = messages(locale)
  const filterProps = useFilter()
  const theme = useTheme()

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
          <EntityListToolbar filterProps={filterProps} />
          <InfiniteScrolling
            filterProps={filterProps}
            data={data}
            loadingSkeleton={
              <Grid container direction={'row'}>
                {[...Array(6)].map((_, index) => (
                  <ListItem
                    key={index}
                    disablePadding
                    sx={{
                      background: theme.palette.background.paper,
                      borderRadius: '20px',
                    }}
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Skeleton variant="circular" width={40} height={40} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Skeleton
                            variant="text"
                            width={150}
                            sx={{ fontSize: '1rem' }}
                          />
                        }
                        secondary={
                          <Skeleton
                            variant="text"
                            width={400}
                            sx={{ fontSize: '1rem' }}
                          />
                        }
                      />
                    </ListItemButton>
                  </ListItem>
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

export default EntityListContainer
