import React from 'react'
import { Grid } from '@mui/material'
import EntityDashboardCardItem from './EntityDashboardCardItem'
import { EntitiesQuery } from '../../../generated/graphql'

export interface EntityCardListProps {
  data: EntitiesQuery
  loading: boolean
}

const EntityCardListView: React.FC<EntityCardListProps> = ({ data, loading }) => {
  return (
    <Grid
      container
      width={'100%'}
      sx={{ overflow: 'hidden', marginTop: '20px' }}
    >
      {!loading ? data?.Entity?.map(
        (entity) => (
          <EntityDashboardCardItem data={entity} key={entity.id} />
        )
      ) : 'Loading...'}
    </Grid>
  )
}

export default EntityCardListView
