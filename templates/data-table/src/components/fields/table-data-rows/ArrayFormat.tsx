import React from 'react'
import EntityTableView from '../Entity/EntityTableView'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'
import { AccordionCard } from '@iteria-app-mui/common/src/components/entities/AccordionCard'

interface ArrayFormatProps {
  value: EntityFragment[]
  length: number
}

export const ArrayFormat = ({ value, length }: ArrayFormatProps) => {
  return (
    <FormCard title={'FIELD'} length={length}>
      <EntityTableView
        data={value}
        relationshipName={'FIELD'}
        rootName={'ROOT_NAME'}
      />
    </FormCard>
  )
}
