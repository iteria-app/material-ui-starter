import { Typography } from '@mui/material'
import React from 'react'
import { Translate } from '@iteria-app/component-templates'

export const DefaultFormat = () => (
  <Typography>
    <Translate
      entityName={'Entity'}
      fieldName="message"
      defaultMessage={'Edit this text using the translate tool'}
    />
  </Typography>
)
