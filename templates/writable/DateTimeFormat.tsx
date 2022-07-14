import React from 'react'
import { FastField as FormikField } from 'formik'
import { Grid, Input, InputLabel } from '@mui/material'
import { isRequired } from '@iteria-app/component-templates'
import * as generatedGraphql from '../../generated/graphql'
import introspection from '../../generated/introspect.json'

export const DateTimeFormat = ({ value, label }) => {
  return (
    <Grid item md={6} xs={12}>
      <FormikField name={value}>
        {({ field }: any) => {
          return (
            <>
              <InputLabel>{label}</InputLabel>
              <Input
                name={field.name}
                type='datetime-local'
                required={isRequired('Entity', value, generatedGraphql, introspection)}
                value={field.value ? field.value.slice(0, 19) : new Date().toISOString().slice(0, 19)}
                fullWidth={true}
              ></Input>
            </>
          )
        }}
      </FormikField>
    </Grid>
  )
}