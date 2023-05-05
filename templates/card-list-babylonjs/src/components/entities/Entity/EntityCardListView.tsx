import React from 'react'
import EntityCardListItem from './EntityCardListItem'
import { EntityFragment } from '../../../generated/graphql'
import { ViewGridTemplate } from '@iteria-app/component-templates'

export interface EntityCardListProps {
  data: EntityFragment[]
  relationshipName?: string
}

const EntityCardListView: React.FC<EntityCardListProps> = ({
  data,
  relationshipName,
}) => {
  return (
    <ViewGridTemplate>
      {data?.map((entity, index) => (
        <EntityCardListItem
          data={entity}
          key={entity.id}
          relationshipName={relationshipName}
          index={index}
        />
      ))}
    </ViewGridTemplate>
  )
}

export default EntityCardListView
