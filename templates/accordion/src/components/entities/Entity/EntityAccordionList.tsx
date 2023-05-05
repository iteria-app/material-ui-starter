import React from 'react'
import EntityAccordion from './EntityAccordion'
import { EntityFragment } from '../../../generated/graphql'
import { ViewGridTemplate } from '@iteria-app/component-templates'

export interface EntityAccordionListProps {
  data?: EntityFragment[]
  relationshipName?: string
  rootName?: string
}

const EntityAccordionList: React.FC<EntityAccordionListProps> = ({
  data,
  relationshipName,
  rootName,
}) => {
  return (
    <>
      {/* {data?.map((entity, index) => ( */}
      {/* <> */}
      <EntityAccordion
        data={data}
        key={data?.id}
        relationshipName={relationshipName}
        rootName={rootName}
        index={0}
      />
      {/* </> */}
      {/* ))} */}
    </>
  )
}

export default EntityAccordionList
