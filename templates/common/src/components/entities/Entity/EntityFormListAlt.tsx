import React from 'react'
import EntityFormAlt from './EntityFormAlt'
import { EntityFragment } from '../../../generated/graphql'

export interface EntityFormListProps {
  data?: EntityFragment[]
  relationshipName?: string
  rootName?: string
}

const EntityFormListAlt: React.FC<EntityFormListProps> = ({
  data,
  relationshipName,
  rootName,
}) => {
  return (
    data?.map((entity, index) => (
      <>
        <EntityFormAlt
          data={entity}
          key={entity?.id}
          relationshipName={relationshipName}
          index={index}
          rootName={rootName}
        />
      </>
    )) ?? []
  )
}

export default EntityFormListAlt
