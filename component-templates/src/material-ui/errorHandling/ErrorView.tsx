import { Container, Grid, Typography } from '@mui/material'

export const ErrorView = () => (
  <Container maxWidth="md">
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      height={'90vmin'}
      flexDirection={'column'}
      gap={'30px'}
    >
      <Grid item textAlign={'center'} marginTop={'16px'}>
        <Typography variant="h4">Something went wrong!</Typography>
        <Typography
          marginTop={'6px'}
          display={'inline-block'}
          textAlign={'center'}
          fontSize={'1rem'}
          fontWeight={400}
          lineHeight={'26px'}
          color={'#354967'}
        >
          Try reloading the page or contact administrator.
        </Typography>
      </Grid>
    </Grid>
  </Container>
)
