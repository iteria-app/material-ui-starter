import React from 'react'
import EntityForm from '../../entities/Entity/EntityForm'
import { EntityCreateLazyWrapper } from '@iteria-app-mui/common/src/components/entities/EntityCreateLazyWrapper'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { AccordionCard } from '@iteria-app-mui/common/src/components/entities/AccordionCard'

type ObjectFormatProps = {
  rootName: string
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const ObjectFormat = ({
  rootName,
  setFieldValue,
}: ObjectFormatProps): JSX.Element => (
  <FormCard title={'FIELD' ?? 'Entity'}>
    <EntityCreateLazyWrapper
      setFieldValue={setFieldValue}
      replacedValue={`${'ROOT_NAME'}.${'FIELD'}`}
    />
  </FormCard>
)
