import React from 'react'
import { Badge } from '@mui/material'

export const BooleanFormat = ({ value }: { value: boolean }) => {
  return (
    <Translate
      entityName={'Entity'}
      fieldName={`${'FIELD'}`}
      defaultMessage={`${'FIELD'}`}
    >
      {(val) => value && <Badge color="primary" badgeContent={val} />}
    </Translate>
  )
}
