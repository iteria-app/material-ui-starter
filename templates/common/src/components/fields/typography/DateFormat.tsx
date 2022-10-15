import { Typography } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const DateFormat = ({ value }: {value?: any}): JSX.Element => {
  const intl = useIntl()
  return <Typography fontSize={'14px'} fontWeight={400}>{value ? intl.formatDate(value) : ''}</Typography>
}
