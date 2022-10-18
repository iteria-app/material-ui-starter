import React from 'react'
import EntityBarGraphView from '../../entities/Entity/EntityBarGraphView'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'

interface ObjectFormatProps {
  value: EntityFragment
}

export const ObjectFormat = ({ value }: ObjectFormatProps) => {
  return (
    <FormCard title={'FIELD'}>
      <EntityBarGraphView data={value} relationshipName={'FIELD'} />
    </FormCard>
  )
}
