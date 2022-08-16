import React from 'react'
import { Divider, Grid } from '@mui/material'
import EntityListItem from './EntityListItem'

export interface EntityListProps {
  data: any
  loading: boolean
  error: any
}

const EntityListView: React.FC<EntityListProps> = ({
  data,
  loading,
  error,
}) => {
  return (
    <Grid
      container
      width={'100%'}
      sx={{ overflow: 'hidden', marginTop: '20px' }}
    >
      {data?.Entity.map((entity) => (
        <>
          <EntityListItem data={entity} />
          <Divider />
        </>
      ))}
    </Grid>
  )
}

export default EntityListView
