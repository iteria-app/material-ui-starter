import React from 'react'
import { Translate } from '@iteria-app/component-templates'

export const BooleanFormat = ({ value }: { value: boolean }): JSX.Element => (
  <Translate
    entityName={'Entity'}
    fieldName={`${'FIELD'}.${!!value}`}
    defaultMessage={value ? 'FIELD' : `Not ${'FIELD'}`}
  />
)
