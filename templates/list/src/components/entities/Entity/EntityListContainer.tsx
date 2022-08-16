import React, { useCallback, useEffect, useRef, useState } from 'react'
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
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Skeleton,
  useTheme,
} from '@mui/material'

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
      <QueryBoundary queryResponse={result}>
        <IntlProvider
          locale={locale}
          messages={messagesObject}
          onError={() => console.debug}
        >
          <View data={data?.data} error={data?.error} loading={false} />
          {data?.fetching &&
            [...Array(6)].map((_, index) => (
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
                        width={40}
                        sx={{ fontSize: '1rem' }}
                      />
                    }
                    secondary={
                      <Skeleton
                        variant="text"
                        width={60}
                        sx={{ fontSize: '1rem' }}
                      />
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          <div ref={loader} />
        </IntlProvider>
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityListContainer
