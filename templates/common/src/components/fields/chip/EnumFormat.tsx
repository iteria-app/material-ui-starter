import { Chip } from '@mui/material'
import React from 'react'
import { Translate } from '@iteria-app/component-templates'

export const EnumFormat = ({ value }: { value?: string }) => (
  <Translate
    entityName={'Entity'}
    fieldName={`${'FIELD'}.${value}`}
    defaultMessage={value}
  >
    {(val) => val != null && <Chip label={val} size="small" />}
  </Translate>
)
