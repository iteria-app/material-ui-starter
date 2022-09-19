import { Typography } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const TimeFormat = ({ value }: {value?: any}) => {
  const intl = useIntl()
  return <Typography fontSize={'14px'} fontWeight={400}>{value ? intl.formatTime(value) : ''}</Typography>
}
