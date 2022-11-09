import React from 'react'
import { Grid } from '@mui/material'
import EntityCardListItem from './EntityCardListItem'
import { EntityFragment } from '../../../generated/graphql'

export interface EntityCardListProps {
  data: EntityFragment[]
  relationshipName?: string
}

const EntityCardListView: React.FC<EntityCardListProps> = ({
  data,
  relationshipName,
}) => {
  return (
    <Grid
      container
      width={'100%'}
      sx={{ overflow: 'hidden', marginTop: '20px' }}
    >
      {data?.map((entity, index) => (
        <EntityCardListItem
          data={entity}
          key={entity.id}
          relationshipName={relationshipName}
          index={index}
        />
      ))}
    </Grid>
  )
}

export default EntityCardListView
