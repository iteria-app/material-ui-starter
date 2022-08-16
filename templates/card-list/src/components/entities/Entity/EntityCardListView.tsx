import React from 'react'
import { Grid } from '@mui/material'
import EntityCardItem from './EntityCardItem'
import { EntitiesQuery } from '../../../generated/graphql'

export interface EntityCardProps {
  data: EntitiesQuery
  loading: boolean
}

const EntityCardListView: React.FC<EntityCardProps> = ({ data, loading }) => {
  return (
    <Grid
      container
      width={'100%'}
      sx={{ overflow: 'hidden', marginTop: '20px' }}
    >
      {data?.Entity?.map(
        (entity) => (
          <EntityCardItem data={entity} key={entity.id} />
        ) /* TODO key={getId(entity)} */
      )}
    </Grid>
  )
}

export default EntityCardListView
