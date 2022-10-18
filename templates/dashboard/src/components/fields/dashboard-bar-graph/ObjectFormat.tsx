import React from 'react'
import EntityDashboardBarGraph from '../Entity/EntityDashboardBarGraph'
import { EntityFragment } from '../../../generated/graphql'

interface ObjectFormatProps {
  value: EntityFragment
}

export const ObjectFormat = ({ value }: ObjectFormatProps) => (
  <EntityDashboardBarGraph data={value} relationshipName={'FIELD'} />
)
