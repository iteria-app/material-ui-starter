import React from 'react'
import { FieldProps, useFormikContext } from 'formik'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/form/FormatEntityField'
import { FormField } from '@iteria-app-mui/common/src/components/entities/FormField'
import { columnCount } from '@iteria-app/component-templates'

interface Props {
  relationshipName: string
  rootName: string
  index: number
  type: string
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void
  onTabsChanged?: (event: Event) => void
}

export const FormikFieldWrapper = ({
  relationshipName,
  rootName,
  index,
  type,
  onTabsChanged,
}: Props) => {
  const formikProps = useFormikContext()
  return (
    <FormField
      fieldName={'FIELD'}
      rootName={rootName}
      relationshipName={relationshipName}
      index={index}
    >
      {(fieldProps: FieldProps) => {
        return (
          <FormatEntityField
            name={fieldProps.field.name}
            value={fieldProps.field.value}
            onChange={fieldProps.field.onChange}
            onBlur={fieldProps.field.onBlur}
            onTabsChanged={onTabsChanged}
            setFieldValue={formikProps?.setFieldValue}
            length={columnCount(fieldProps.field.value)}
            rootName={rootName}
            type={type}
          />
        )
      }}
    </FormField>
  )
}
