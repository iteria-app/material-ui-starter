import React from 'react'
import EntityDashboardInfoCard from '../Entity/EntityDashboardInfoCard'
import { EntityFragment } from '../../../generated/graphql'

interface ObjectFormatProps {
  value: EntityFragment
}

export const ObjectFormat = ({ value }: ObjectFormatProps) => (
  <EntityDashboardInfoCard data={value} relationshipName={'FIELD'} />
)
