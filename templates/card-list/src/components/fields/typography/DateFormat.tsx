import { Typography } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const DateFormat = ({ value }) => {
  const intl = useIntl()
  return <Typography>{value ? intl.formatDate(value) : ''}</Typography>
}
