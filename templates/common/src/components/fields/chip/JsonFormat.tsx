import { Chip } from '@mui/material'
import React from 'react'

export const JsonFormat = ({
  value,
}: {
  value?: Record<string, any> | any[]
}) => {
  return (
    <>{value != null && <Chip label={JSON.stringify(value)} size="small" />}</>
  )
}
