import { valueText } from '@iteria-app/component-templates'
import { Slider, Typography } from '@mui/material'
import React from 'react'

interface Props {
  value: [number, number]
  name: string
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const IntegerFormat = ({ name, setFieldValue, value }: Props) => {
  return (
    <>
      {name && <Typography>{name}</Typography>}
      <Slider
        name={name}
        value={[value?.[0], value?.[1]]}
        onChange={(event) => setFieldValue(name, event)}
        getAriaValueText={valueText}
      />
    </>
  )
}
