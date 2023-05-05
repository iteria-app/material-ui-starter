import React from 'react'
import EntityBarGraphView from '../Entity/EntityBarGraphView'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'
import { AccordionCard } from '@iteria-app-mui/common/src/components/entities/AccordionCard'

interface ArrayFormatProps {
  value: EntityFragment[]
}

export const ArrayFormat = ({ value }: ArrayFormatProps) => (
  <FormCard title={'FIELD'}>
    <EntityBarGraphView data={value} relationshipName={'FIELD'} />
  </FormCard>
)
