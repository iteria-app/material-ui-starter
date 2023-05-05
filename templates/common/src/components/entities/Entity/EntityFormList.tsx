import React from 'react'
import EntityForm from './EntityForm'
import { EntityFragment } from '../../../generated/graphql'

export interface EntityFormListProps {
  data?: EntityFragment[]
  relationshipName?: string
  rootName?: string
}

const EntityFormList: React.FC<EntityFormListProps> = ({
  data,
  relationshipName,
  rootName,
}) => {
  return (
    data?.map((entity, index) => (
      <>
        <EntityForm
          data={entity}
          key={entity?.id}
          relationshipName={relationshipName}
          rootName={rootName}
          index={index}
        />
      </>
    )) ?? []
  )
}

export default EntityFormList
