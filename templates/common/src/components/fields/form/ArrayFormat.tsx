import React from 'react'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import EntityFormList from '../Entity/EntityFormList'
import { EntityFragment } from '../../../generated/graphql'
import { AccordionCard } from '@iteria-app-mui/common/src/components/entities/AccordionCard'

interface ArrayFormatProps {
  value: EntityFragment[]
  length: number
  rootName?: string
}

export const ArrayFormat = ({ value, length, rootName }: ArrayFormatProps) => {
  return (
    <FormCard title={'FIELD'} length={length}>
      <EntityFormList
        data={value}
        relationshipName={'FIELD'}
        rootName={rootName ?? 'ROOT_NAME'}
        index={index}
      />
    </FormCard>
  )
}
