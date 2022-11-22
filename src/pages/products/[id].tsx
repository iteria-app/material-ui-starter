import React from 'react'
import ProductsFormView from '../../components/entities/products/ProductsFormView'
import ProductsFormContainer from '../../components/entities/products/ProductsFormContainer'
const ProductsFormPage: React.FC = () => {
  return (
    <ProductsFormContainer
      View={({ data, onSubmit, onCopy }) => (
        <ProductsFormView data={data} onSubmit={onSubmit} onCopy={onCopy} />
      )}
    />
  )
}
export default ProductsFormPage
