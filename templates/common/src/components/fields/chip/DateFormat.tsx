import { Chip } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const DateFormat = ({ value }) => {
  const intl = useIntl()
  return <Chip label={value ? intl.formatDate(value) : ''}  size="small" />
}
