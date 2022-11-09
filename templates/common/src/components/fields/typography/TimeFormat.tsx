import { Typography } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'
import { parseTime } from '@iteria-app/component-templates'

export const TimeFormat = ({ value }: { value?: any }) => {
  const intl = useIntl()
  return (
    <Typography fontSize={'14px'} fontWeight={400}>
      {value ? intl.formatTime(parseTime(value)) : ''}
    </Typography>
  )
}
