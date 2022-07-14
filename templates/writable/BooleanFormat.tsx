import { FormControlLabel, Grid,  Checkbox as CheckboxInput } from '@mui/material'
import React from 'react'
import { FastField as FormikField } from 'formik'

export const BooleanFormat = ({ value, label }) => {
  return (
    <Grid item md={6} xs={12}>
      <FormikField name={value}>
      {({ field }: any) => {
        return (
          <FormControlLabel
            control={<CheckboxInput checked={field.value} {...field} />}
            label={label}
          />
        )
      }}
    </FormikField>
    </Grid>
  )
}