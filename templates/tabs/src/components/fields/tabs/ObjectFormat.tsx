import React from 'react'
import EntityTabs from '../Entity/EntityTabs'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'
import { getTabsValues } from '@iteria-app/component-templates'

interface ObjectFormatProps {
  value: EntityFragment
  onTabsChanged?: (event, newValue, value) => void
}

export const ObjectFormat = ({ value, onTabsChanged }: ObjectFormatProps) => (
  <FormCard title={'Title'} length={12}>
    <EntityTabs data={getTabsValues(value)} onTabsChanged={onTabsChanged} />
  </FormCard>
)
