import React from 'react'
import { Field } from '@iteria-app/component-templates/src/gql/index'
import { formInput, IFormInputRenderProps } from '../formatting/formInput'
import { EntityDialog } from '../dialog/EntityDialog'
import { FormikProps, FormikValues } from 'formik'

interface IFieldItemProps {
  name: string
  value: any
  label?: JSX.Element | ((entityName: string, fieldName: string) => JSX.Element)
  entityName: string
  entityField: Field
  render?: (props: IFormInputRenderProps) => JSX.Element
  formikProps: FormikProps<FormikValues>
  index?: number
}

export const FieldItem: React.FC<IFieldItemProps> = ({
  name,
  value,
  label,
  entityName,
  entityField,
  render,
  formikProps,
  index,
}: IFieldItemProps) => {
  if (entityField.type === 'array') {
    return (
      <EntityDialog
        name={name}
        entityName={entityName}
        entityField={entityField}
        data={value}
        render={render}
        formikProps={formikProps}
      />
    )
  } else {
    return formInput({
      entityName,
      entityField: entityField,
      name,
      value,
      label,
      render,
      formikProps,
      index,
    })
  }
}
