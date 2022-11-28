import { Typography } from '@mui/material'
import React from 'react'

export const DefaultFormat = ({ value }: { value?: any }) => {
  return <Typography>{JSON.stringify(value)}</Typography>
}
