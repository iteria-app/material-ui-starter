import React from 'react'
import EntityAccordionList from '../Entity/EntityAccordionList'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { AccordionCard } from '@iteria-app-mui/common/src/components/entities/AccordionCard'
import { EntityFragment } from '../../../generated/graphql'

interface ArrayFormatProps {
  value: EntityFragment[]
  length: number
}

export const ArrayFormat = ({ value, length }: ArrayFormatProps) => (
  <FormCard title={'FIELD'} length={length}>
    <EntityAccordionList
      data={[...Array(2)]}
      relationshipName={'FIELD'}
      rootName={'ROOT_NAME'}
    />
  </FormCard>
)
