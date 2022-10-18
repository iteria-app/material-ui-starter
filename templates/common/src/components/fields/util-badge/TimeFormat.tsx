import { Badge } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const TimeFormat = ({ value }) => {
  const intl = useIntl()
  return <Badge badgeContent={value ? intl.formatTime(value) : ''} />
}
