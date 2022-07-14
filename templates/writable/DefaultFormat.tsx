import React from 'react'
import { FastField as FormikField } from 'formik'
import { Grid, Input, InputLabel } from '@mui/material'
import { isRequired } from '@iteria-app/component-templates'
import * as generatedGraphql from '../../generated/graphql'
import introspection from '../../generated/introspect.json'

export const DefaultFormat = ({ value, label }) => {
  return (
    <Grid item md={6} xs={12}>
    <FormikField name={value}>
      {({ field }: any) => {
        return (
          <>
            <InputLabel>{label}</InputLabel>
            <Input
              {...field}
              required={isRequired('Entity', value, generatedGraphql, introspection)}
              fullWidth={true}
              value={field.value ?? ''}
            ></Input>
          </>
        )
      }}
    </FormikField>
    </Grid>
  )
}