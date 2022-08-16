import { Typography } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const DateTimeFormat = ({ value }) => {
  const intl = useIntl()
  return (
    <Typography fontSize={'14px'} fontWeight={400}>
      {`${intl.formatDate(value)} ${intl.formatTime(value)}`}
    </Typography>
  )
}
