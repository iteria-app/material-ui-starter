import { Badge, Typography } from '@mui/material'
import React from 'react'

export const JsonFormat = ({
  value,
}: {
  value?: Record<string, any> | any[]
}) => {
  return (
    <Badge color="primary" badgeContent={JSON.stringify(value)} />
  )
}
