import React from 'react'
import EntityAccordion from '../Entity/EntityAccordion'
import EntityListItem from '../Entity/EntityListItem'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'
import { EntityLookupDialogWrapperForForm } from '@iteria-app-mui/common/src/components/entities/EntityLookupDialogWrapperForForm'
import { AccordionCard } from '@iteria-app-mui/common/src/components/entities/AccordionCard'

interface ObjectFormatProps {
  value: EntityFragment
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const ObjectFormat = ({ value, setFieldValue }: ObjectFormatProps) => {
  return (
    <FormCard title={'FIELD'}>
      <EntityAccordion data={value} relationshipName={'FIELD'}>
        <EntityListItem data={value} relationshipName={'FIELD'} />
      </EntityAccordion>
      <EntityLookupDialogWrapperForForm
        setFieldValue={setFieldValue}
        replacedValue={'FIELD'}
      />
    </FormCard>
  )
}
