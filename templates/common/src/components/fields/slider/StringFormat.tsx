import { valueText } from '@iteria-app/component-templates'
import { Slider } from '@mui/material'
import React from 'react'

interface Props {
  value: string
  name: string
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const StringFormat = ({ value, setFieldValue, name }: Props) => {
  return (
    <Slider
      name={name}
      type="number"
      value={parseInt(value)}
      onChange={(_, newValue) => setFieldValue(name, newValue)}
      getAriaValueText={valueText}
    />
  )
}
