import { Typography } from '@mui/material'
import React from 'react'

export const JsonFormat = ({
  value,
}: {
  value?: Record<string, any> | any[]
}) => {
  return (
    <Typography>
      {JSON.stringify(value)}
    </Typography>
  )
}
