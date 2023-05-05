import { valueText } from '@iteria-app/component-templates'
import { Slider } from '@mui/material'
import React from 'react'

interface Props {
  value: number
  name: string
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const DecimalFormat = ({ value, setFieldValue, name }: Props) => {
  return (
    <Slider
      name={name}
      type="number"
      value={value}
      onChange={(_, newValue) => setFieldValue(name, newValue)}
      getAriaValueText={valueText}
    />
  )
}
