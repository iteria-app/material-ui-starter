import { Box } from '@mui/material'
import React from 'react'

export const DecimalFormat = ({ value }: { value?: string | number }) => {
  return <Box>{value ?? ''}</Box>
}
