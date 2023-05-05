import { Typography } from '@mui/material'
import React from 'react'
import { Translate } from '@iteria-app/component-templates'

export const DefaultFormat = () => (
  <Typography variant="h1">
    <Translate
      entityName={'Entity'}
      fieldName="heading"
      defaultMessage={'Entity'}
    />
  </Typography>
)
