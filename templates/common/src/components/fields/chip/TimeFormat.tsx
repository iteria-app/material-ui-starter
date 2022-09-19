import { Chip } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const TimeFormat = ({ value }) => {
  const intl = useIntl()
  return <Chip label={value ? intl.formatTime(value) : ''} size="small" />
}
