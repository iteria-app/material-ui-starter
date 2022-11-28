import { Chip } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'

export const TimeFormat = ({ value }: { value?: string | number | Date }) => {
  const intl = useIntl()
  return <>{value && <Chip label={intl.formatTime(value)} size="small" />}</>
}
