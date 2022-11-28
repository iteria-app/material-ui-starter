import { Typography } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'
import { parseTime } from '@iteria-app/component-templates'

export const TimeFormat = ({ value }: { value?: Date | string | number }) => {
  const intl = useIntl()
  return (
    <Typography>
      {value ? intl.formatTime(parseTime(value)) : ''}
    </Typography>
  )
}
