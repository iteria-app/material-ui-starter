import React from 'react'
import { Field, getVisibleFields } from '../../gql'
import { FieldItem } from './FieldItem'
import { IFormInputRenderProps } from '../formatting/formInput'
import { FormikProps, FormikValues } from 'formik'
interface IObjectFieldProps {
  name: string
  value: any
  entityName: string
  entityField: Field
  render?: (props: IFormInputRenderProps) => JSX.Element
  label?: JSX.Element | ((entityName: string, fieldName: string) => JSX.Element)
  formikProps: FormikProps<FormikValues>
  index?: number
}

export const ObjectField: React.FC<IObjectFieldProps> = ({
  name,
  value,
  entityName,
  entityField,
  render,
  label,
  formikProps,
  index,
}: IObjectFieldProps) => {
  return (
    <>
      {getVisibleFields(entityField.entityFields).map((field) => {
        return (
          <FieldItem
            name={`${name}.${field.name}`}
            value={value?.[field.name]}
            label={label}
            entityName={entityField.name}
            entityField={field}
            render={render}
            formikProps={formikProps}
            index={index}
          />
        )
      })}
    </>
  )
}
