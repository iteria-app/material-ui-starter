import React from 'react'
import { Grid } from '@mui/material'
import EntityListItem from './EntityListItem'
import { EntitiesQuery } from '../../../generated/graphql'

export interface EntityListProps {
  data: EntitiesQuery | null
}

const EntityListView: React.FC<EntityListProps> = ({ data }) => {
  return (
    <Grid
      container
      width={'100%'}
      sx={{ overflow: 'hidden', marginTop: '20px' }}
    >
      {data?.map((entity) => (
        <>
          <EntityListItem key={entity?.id} data={entity} />
        </>
      ))}
    </Grid>
  )
}

export default EntityListView
