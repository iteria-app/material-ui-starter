import { Badge } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const DateFormat = ({ value }) => {
  const intl = useIntl()
  return (
    <Badge color="primary" badgeContent={value ? intl.formatDate(value) : ''} />
  )
}
