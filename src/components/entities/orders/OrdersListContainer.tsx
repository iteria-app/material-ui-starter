import React from 'react'
import { OrdersFragment, useOrdersQuery } from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'
import {
  ErrorBoundary,
  QueryBoundary,
  useFilter,
  InfiniteScrolling,
  Toolbar,
  CreateButton,
} from '@iteria-app/component-templates'
import {
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Skeleton,
  useTheme,
} from '@mui/material'
interface ViewProps {
  data: OrdersFragment[] | null
}
interface OrdersListContainerProps {
  View: React.FC<ViewProps>
}
const OrdersListContainer: React.FC<OrdersListContainerProps> = ({ View }) => {
  const filterProps = useFilter()
  const theme = useTheme()
  const entityIntrospection = introspection?.__schema?.types?.find(
    (type) => type?.name === 'orders'
  )?.fields
  const [data] = useOrdersQuery({
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
        <Toolbar filterProps={filterProps} introspection={entityIntrospection}>
          <CreateButton entityName="orders" />
        </Toolbar>
        <InfiniteScrolling
          filterProps={filterProps}
          data={data}
          loadingSkeleton={
            <Grid container direction="row">
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
          <View data={data?.data?.orders} />
        </InfiniteScrolling>
      </QueryBoundary>
    </ErrorBoundary>
  )
}
export default OrdersListContainer
