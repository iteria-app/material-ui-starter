import React from 'react'
import ProductsCardListView from '../../components/entities/products/ProductsCardListView'
import ProductsCardListContainer from '../../components/entities/products/ProductsCardListContainer'
const ProductsManyPage: React.FC = () => {
  return (
    <ProductsCardListContainer
      View={({ data }) => <ProductsCardListView data={data} />}
    />
  )
}
export default ProductsManyPage
