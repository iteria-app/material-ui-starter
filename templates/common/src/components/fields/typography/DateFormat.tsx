import { Typography } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const DateFormat = ({
  value,
}: {
  value?: Date | string | number
}): JSX.Element => {
  const intl = useIntl()
  return (
    <Typography>
      {value ? intl.formatDate(value) : ''}
    </Typography>
  )
}
