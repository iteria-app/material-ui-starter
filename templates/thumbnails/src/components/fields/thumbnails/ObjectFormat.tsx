import React from 'react'
import EntityCardListItem from '../../entities/Entity/EntityCardListItem'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'
import { EntityLookupDialogWrapperForForm } from '@iteria-app-mui/common/src/components/entities/EntityLookupDialogWrapperForForm'
import { AccordionCard } from '@iteria-app-mui/common/src/components/entities/AccordionCard'

interface ObjectFormatProps {
  value: EntityFragment
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const ObjectFormat = ({ value, setFieldValue }: ObjectFormatProps) => (
  <FormCard title={'FIELD'}>
    <EntityCardListItem
      data={value}
      relationshipName={'FIELD'}
      rootName={'ROOT_NAME'}
    />
    <EntityLookupDialogWrapperForForm
      setFieldValue={setFieldValue}
      replacedValue={`${'ROOT_NAME'}.${'FIELD'}`}
    />
  </FormCard>
)
