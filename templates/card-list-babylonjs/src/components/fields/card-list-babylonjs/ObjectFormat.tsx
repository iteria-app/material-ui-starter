import React from 'react'
import EntityBabylonView from '../Entity/EntityBabylonView'
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
      <EntityBabylonView data={value} />
      <EntityLookupDialogWrapperForForm
        setFieldValue={setFieldValue}
        replacedValue={'FIELD'}
      />
    </FormCard>
  )
}
