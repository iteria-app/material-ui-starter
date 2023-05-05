import React from 'react'
import EntityTabs from '../Entity/EntityTabs'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'

interface ArrayFormatProps {
  value: EntityFragment[]
}

export const ArrayFormat = ({ value }: ArrayFormatProps) => (
  <FormCard title={'Title'} length={12}>
    <EntityTabs data={value} />
  </FormCard>
)
