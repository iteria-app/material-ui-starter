import React from 'react'
import {
  ErrorBoundary,
  QueryBoundary,
  useFilter,
  InfiniteScrolling,
  Toolbar,
  CreateButton,
} from '@iteria-app/component-templates'
import { Box, Grid, Skeleton } from '@mui/material'
import { ProductsFragment, useProductsQuery } from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'
interface ViewProps {
  data: ProductsFragment[]
}
interface ProductsListContainerProps {
  View: React.FC<ViewProps>
}
const ProductsCardListContainer: React.FC<ProductsListContainerProps> = ({
  View,
}) => {
  const filterProps = useFilter()
  const entityIntrospection = introspection?.__schema?.types?.find(
    (type) => type?.name === 'products'
  )?.fields
  const [data] = useProductsQuery({
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
          <CreateButton entityName="products" />
        </Toolbar>
        <InfiniteScrolling
          filterProps={filterProps}
          data={data}
          loadingSkeleton={
            <Grid container>
              {[...Array(6)].map((_, index) => (
                <Box key={index} p="5px" m="5px" maxWidth="200px">
                  <Skeleton
                    variant="rectangular"
                    animation="pulse"
                    width={200}
                    height={150}
                  />
                  <Box marginTop="5px">
                    <Skeleton variant="text" animation="pulse" />
                    <Skeleton variant="text" animation="pulse" width={100} />
                  </Box>
                </Box>
              ))}
            </Grid>
          }
        >
          <View data={data?.data?.products} />
        </InfiniteScrolling>
      </QueryBoundary>
    </ErrorBoundary>
  )
}
export default ProductsCardListContainer
