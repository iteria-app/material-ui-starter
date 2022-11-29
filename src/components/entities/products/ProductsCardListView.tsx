import React from 'react'
import { Grid } from '@mui/material'
import ProductsCardListItem from './ProductsCardListItem'
import { ProductsFragment } from '../../../generated/graphql'
export interface ProductsCardListProps {
  data: ProductsFragment[]
  relationshipName?: string
}
const ProductsCardListView: React.FC<ProductsCardListProps> = ({
  data,
  relationshipName,
}) => {
  return (
    <Grid container width="100%" sx={{ overflow: 'hidden', marginTop: '20px' }}>
      {data?.map((products, index) => (
        <ProductsCardListItem
          data={products}
          key={products.id}
          relationshipName={relationshipName}
          index={index}
        />
      ))}
    </Grid>
  )
}
export default ProductsCardListView
