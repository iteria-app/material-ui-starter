import { Badge } from '@mui/material'
import React from 'react'
import {
  Translate,
} from '@iteria-app/component-templates'

export const EnumFormat = ({ value }: { value?: string }) => {
  return (
    <Translate
      entityName={'Entity'}
      fieldName={`${'FIELD'}.${value}`}
      defaultMessage={value}
    >
      {(val) =>  val != null && <Badge color="primary" badgeContent={val} />}
    </Translate>
  )
}
