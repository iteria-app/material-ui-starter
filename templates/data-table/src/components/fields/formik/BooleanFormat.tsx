import { Checkbox as CheckboxInput } from '@mui/material'
import React from 'react'
import { FastField as FormikField } from 'formik'

export const BooleanFormat = ({ value, relationshipName, index }) => {
  return (
    <FormikField
      name={
        relationshipName
          ? index !== undefined
            ? `${relationshipName}[${index}].${'FIELD'}`
            : `${relationshipName}.${'FIELD'}`
          : 'FIELD'
      }
    >
      {({ field }: any) => {
        return <CheckboxInput checked={field.value} {...field} />
      }}
    </FormikField>
  )
}
