import { Checkbox as CheckboxInput } from '@mui/material'
import React from 'react'
import { FastField as FormikField } from 'formik'

export const BooleanFormat = ({ value }) => {
  return (
    <FormikField name={value}>
      {({ field }: any) => {
        return <CheckboxInput checked={field.value} {...field} />
      }}
    </FormikField>
  )
}
