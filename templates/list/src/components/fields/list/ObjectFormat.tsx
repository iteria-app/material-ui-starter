import React from 'react'
import EntityListItem from '@iteria-app-mui/list/src/components/entities/Entity/EntityListItem'
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
      {value && (
        <EntityListItem
          data={value}
          relationshipName={'FIELD'}
          rootName={'ROOT_NAME'}
        />
      )}
      {setFieldValue && (
        <EntityLookupDialogWrapperForForm
          setFieldValue={setFieldValue}
          replacedValue={`${'ROOT_NAME'}.${'FIELD'}`}
        />
      )}
    </FormCard>
  )
}
