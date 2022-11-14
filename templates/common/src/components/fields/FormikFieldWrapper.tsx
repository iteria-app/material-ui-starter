import React from 'react'
import { Field as FormikField, FieldProps } from 'formik'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/form/FormatEntityField'
import { columnCount } from '@iteria-app/component-templates'

type Props = {
  relationshipName: string
  index: unknown
  type: string
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void
}

export const FormikFieldWrapper = ({
  relationshipName,
  index,
  type,
  setFieldValue,
}: Props): JSX.Element => {
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
      {(fieldProps: FieldProps) => {
        return (
          <FormatEntityField
            name={
              relationshipName
                ? index !== undefined
                  ? `${relationshipName}[${index}].${'FIELD'}`
                  : `${relationshipName}.${'FIELD'}`
                : 'FIELD'
            }
            value={fieldProps.field.value}
            onChange={fieldProps.field.onChange}
            onBlur={fieldProps.field.onBlur}
            setFieldValue={setFieldValue}
            length={columnCount(fieldProps.field.value)}
            type={type}
          />
        )
      }}
    </FormikField>
  )
}
