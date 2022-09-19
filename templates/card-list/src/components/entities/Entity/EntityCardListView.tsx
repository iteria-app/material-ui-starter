import React from 'react'
import { Grid } from '@mui/material'
import EntityCardListItem from './EntityCardListItem'
import { EntitiesQuery } from '../../../generated/graphql'

export interface EntityCardListProps {
  data: EntitiesQuery
}

const EntityCardListView: React.FC<EntityCardListProps> = ({ data }) => {
  return (
    <Grid
      container
      width={'100%'}
      sx={{ overflow: 'hidden', marginTop: '20px' }}
    >
      {data?.map(
        (entity) => (
          <EntityCardListItem data={entity} key={entity.id} />
        )
      )}
    </Grid>
  )
}

export default EntityCardListView
