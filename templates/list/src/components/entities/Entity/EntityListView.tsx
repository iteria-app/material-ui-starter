import React from 'react'
import { Grid } from '@mui/material'
import EntityListItem from './EntityListItem'
import { EntityFragment } from '../../../generated/graphql'

export interface EntityListProps {
  data?: EntityFragment[]
  relationshipName?: string
}

const EntityListView: React.FC<EntityListProps> = ({ data, relationshipName }) => {
  return (
    <Grid
      container
      width={'100%'}
      sx={{ overflow: 'hidden', marginTop: '20px' }}
    >
      {data?.map((entity, index) => (
        <>
          <EntityListItem
            data={entity}
            key={entity.id}
            relationshipName={relationshipName}
            index={index}
          />
        </>
      ))}
    </Grid>
  )
}

export default EntityListView
