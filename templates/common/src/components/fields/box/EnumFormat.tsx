import { Box } from '@mui/material'
import React from 'react'
import { Translate } from '@iteria-app/component-templates'

export const EnumFormat = ({ value }: { value?: string }) => (
  <Box>
    <Translate
      entityName={'Entity'}
      fieldName={`${'FIELD'}.${value}`}
      defaultMessage={value ?? ' '}
    />
  </Box>
)
