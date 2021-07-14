import React from 'react';
import GeneratedProductsTable from './GeneratedProductsTable'
import { useAllProductsQuery } from 'src/generated/graphql'

const GeneratedProducts = () => {
  const [result] = useAllProductsQuery()
  const { data, error, fetching } = result;

  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <GeneratedProductsTable products={fetching ? [] : data.Products} />
  );
};
export default GeneratedProducts
