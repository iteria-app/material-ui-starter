import { Typography } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const TimeFormat = ({ value }) => {
  const intl = useIntl()
  return <Typography>{value ? intl.formatTime(value) : ''}</Typography>
}
