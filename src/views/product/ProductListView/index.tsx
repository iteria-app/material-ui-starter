import { useState } from 'react'
import { Box, Container, Grid, makeStyles } from '@mui/material'
import { Pagination } from '@mui/lab'
import Page from '../../../components/Page'
import Toolbar from './Toolbar'
import ProductCard from './ProductCard'
import data from './data'

const ProductList = () => {
  const [products] = useState(data);

  return (
    <Page title="Products">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid container spacing={3}>
            {products.map(product => (
              <Grid item key={product.id} lg={4} md={6} xs={12}>
                <ProductCard
                  product={product}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mt={3} display="flex" justifyContent="center">
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Page>
  );
};

export default ProductList;
