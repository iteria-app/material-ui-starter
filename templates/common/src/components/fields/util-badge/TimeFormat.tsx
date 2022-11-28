import { Badge } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const TimeFormat = ({ value }: { value?: string | number | Date }) => {
  const intl = useIntl()
  return <Badge badgeContent={value ? intl.formatTime(value) : ''} />
}
