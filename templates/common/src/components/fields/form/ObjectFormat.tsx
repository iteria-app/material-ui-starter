import React from 'react'
import EntityForm from '@iteria-app-mui/common/src/components/entities/Entity/EntityForm'
import { EntityLookupDialogWrapperForForm } from '@iteria-app-mui/common/src/components/entities/EntityLookupDialogWrapperForForm'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { AccordionCard } from '@iteria-app-mui/common/src/components/entities/AccordionCard'

type ObjectFormatProps = {
  rootName: string
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  value?: any
}

export const ObjectFormat = ({
  rootName,
  setFieldValue,
  value,
}: ObjectFormatProps): JSX.Element => (
  <FormCard title={'FIELD' ?? 'Entity'}>
    <EntityForm
      rootName={rootName ?? 'ROOT_NAME'}
      relationshipName={'FIELD'}
      value={value}
    />
    {'FIELD' && setFieldValue && (
      <EntityLookupDialogWrapperForForm
        setFieldValue={setFieldValue}
        replacedValue={`${'ROOT_NAME'}.${'FIELD'}`}
      />
    )}
  </FormCard>
)
