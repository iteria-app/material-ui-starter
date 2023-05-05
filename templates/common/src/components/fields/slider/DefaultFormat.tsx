import { valueText } from '@iteria-app/component-templates'
import { Slider } from '@mui/material'
import React from 'react'

interface Props {
  value: number
  name: string
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const DefaultFormat = ({ value, setFieldValue, name }: Props) => {
  return (
    <Slider
      value={value}
      type="number"
      name={name}
      onChange={(_, newValue) => setFieldValue(name, newValue)}
      getAriaValueText={valueText}
    />
  )
}
