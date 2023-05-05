import React from 'react'
import EntityListItem from './EntityListItem'
import { EntityFragment } from '../../../generated/graphql'
import { ViewGridTemplate } from '@iteria-app/component-templates'

export interface EntityListProps {
  data?: EntityFragment[]
  relationshipName?: string
  rootName?: string
}

const EntityListView: React.FC<EntityListProps> = ({
  data,
  relationshipName,
  rootName,
}) => {
  return (
    <ViewGridTemplate>
      {data?.map((entity, index) => (
        <>
          <EntityListItem
            data={entity}
            key={entity.id}
            relationshipName={relationshipName}
            index={index}
            rootName={rootName}
          />
        </>
      ))}
    </ViewGridTemplate>
  )
}

export default EntityListView
