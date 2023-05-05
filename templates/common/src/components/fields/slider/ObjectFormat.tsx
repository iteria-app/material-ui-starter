import { valueText } from '@iteria-app/component-templates'
import { Slider } from '@mui/material'
import React from 'react'

interface Props {
  value: number
  name: string
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const ObjectFormat = ({ value, setFieldValue, name }: Props) => {
  return (
    <Slider
      name={name}
      type="number"
      value={value}
      onChange={(event) => setFieldValue(name, event)}
      getAriaValueText={valueText}
    />
  )
}
