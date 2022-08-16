import { Typography } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const TimeFormat = ({ value }) => {
  const intl = useIntl()
  return value ? (
    <Typography>{intl.formatTime(value)}</Typography>
  ) : (
    <Typography></Typography>
  )
}
