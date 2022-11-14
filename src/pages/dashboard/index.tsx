import React from 'react'
import { Container, Grid, styled } from '@mui/material'
import {
  Budget,
  TasksProgress,
  TotalCustomers,
  TotalProfit,
  Sales,
  TrafficByDevice,
  LatestProducts,
  LatestOrders,
} from '../../views/reports/DashboardView'
import Page from "../../components/Page"

const PREFIX = 'DashboardView'
const classes = {
  root: `${PREFIX}-root`,
}
const StyledPage = styled(Page)(({ theme }) => ({
  [`&.${classes.root}`]: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}))
const Dashboard: React.FC = () => {
  return (
    <StyledPage className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TasksProgress />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TotalProfit />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Sales />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <TrafficByDevice />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </StyledPage>
  )
}
export default Dashboard
