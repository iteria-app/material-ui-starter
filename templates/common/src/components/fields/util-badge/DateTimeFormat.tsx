import { Badge } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const DateTimeFormat = ({
  value,
}: {
  value?: string | number | Date
}) => {
  const intl = useIntl()
  return (
    <Badge
      color="primary"
      badgeContent={
        value ? `${intl.formatDate(value)} ${intl.formatTime(value)}` : ''
      }
    />
  )
}
