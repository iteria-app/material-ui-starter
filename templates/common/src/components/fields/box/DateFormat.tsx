import { Box } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const DateFormat = ({ value }: { value?: string | number | Date }) => {
  const intl = useIntl()
  return <Box>{value ? intl.formatDate(value) : ''}</Box>
}
