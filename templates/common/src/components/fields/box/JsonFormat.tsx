import { Box } from '@mui/material'
import React from 'react'

export const JsonFormat = ({
  value,
}: {
  value?: Record<string, any> | any[]
}) => {
  return <Box>{JSON.stringify(value)}</Box>
}
