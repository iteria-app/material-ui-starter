import React from 'react'
import EntityTabs from '../Entity/EntityTabs'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'

interface DefaultFormatProps {
  value: EntityFragment[]
}

export const DefaultFormat = ({ value }: DefaultFormatProps) => (
  <FormCard title={'Title'} length={12}>
    <EntityTabs data={[...Array(2)]} />
  </FormCard>
)