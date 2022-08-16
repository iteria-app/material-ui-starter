import { Box } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const DateFormat = ({ value }) => {
  const intl = useIntl()
  return <Box>{value ? intl.formatDate(value) : ''}</Box>
}
