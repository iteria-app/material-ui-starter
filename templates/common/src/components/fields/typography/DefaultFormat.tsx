import { Typography } from '@mui/material'
import React from 'react'

export const DefaultFormat = ({ value }: {value?: any}) => {
  return <Typography fontSize={'14px'} fontWeight={400}>{value}</Typography>
}
