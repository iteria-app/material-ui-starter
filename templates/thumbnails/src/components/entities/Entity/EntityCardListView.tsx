import React from 'react'
import { Grid } from '@mui/material'
import EntityCardListItem from './EntityCardListItem'
import { EntityFragment } from '../../../generated/graphql'
import { ViewGridTemplate } from '@iteria-app/component-templates'

export interface EntityCardListProps {
  data: EntityFragment[]
  relationshipName?: string
  rootName?: string
}

const EntityCardListView: React.FC<EntityCardListProps> = ({
  data,
  relationshipName,
  rootName
}) => {
  return (
    <ViewGridTemplate>
      {data?.map((entity, index) => (
        <EntityCardListItem
          data={entity}
          key={entity.id}
          relationshipName={relationshipName}
          index={index}
          rootName={rootName}
        />
      ))}
    </ViewGridTemplate>
  )
}

export default EntityCardListView
