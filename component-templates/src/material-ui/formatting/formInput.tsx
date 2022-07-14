import React, { ReactNode } from 'react'
import { Field } from '@iteria-app/component-templates/src/gql/index'
import { TextField } from '../form/TextField'
import { CheckboxField } from '../form/CheckboxField'
import {
  DateTimeField,
  FormEntityTable,
} from '@iteria-app/component-templates/material-ui'
import { ObjectField } from '../form/ObjectField'
import { FormikProps, FormikValues } from 'formik'

export interface IFormInputRenderProps {
  children: ReactNode
  entityField: Field
}
export interface IFormInputProps {
  entityName: string
  entityField: Field
  name: string
  value: any
  label?: JSX.Element | ((entityName: string, fieldName: string) => JSX.Element)
  index?: number
  render?: (props: IFormInputRenderProps) => JSX.Element
  formikProps: FormikProps<FormikValues>
}

export const formInput = ({
  entityName,
  entityField,
  name,
  value,
  label,
  index,
  render = ({ children }: IFormInputRenderProps) => {
    return <>{children}</>
  },
  formikProps,
}: IFormInputProps): JSX.Element => {
  const getLabelValue = () => {
    return typeof label === 'function'
      ? label(entityName, entityField.name)
      : label
  }
  switch (entityField.type.toLowerCase()) {
    case 'boolean':
      return render({
        entityField,
        children: (
          <CheckboxField
            entityName={entityName}
            entityField={entityField}
            name={name}
            value={value}
            label={getLabelValue()}
            index={index}
          />
        ),
      })
    case 'array':
      if (entityField.entityFields) {
        return (
          <FormEntityTable
            entityField={entityField}
            data={value}
            formikProps={formikProps}
          />
        )
      }
    case 'object':
      if (entityField.entityFields) {
        return (
          <ObjectField
            name={name}
            entityName={entityName}
            entityField={entityField}
            value={value}
            render={render}
            label={label}
            formikProps={formikProps}
            index={index}
          />
        )
      }
    case 'timestamp':
    case 'timestamptz':
    case 'datetime':
    // return render({
    //   entityField,
    //   children: (
    //     <DateTimeField
    //       entityName={entityName}
    //       entityField={entityField}
    //       name={name}
    //       value={value}
    //     />
    //   ),
    // })
    case 'string':
    case 'number':
    case 'int':
    case 'jsonb':
    case 'uuid':
    case 'time':
    case 'date':
    default:
      return render({
        entityField,
        children: (
          <TextField
            entityName={entityName}
            entityField={entityField}
            name={name}
            value={value}
            label={getLabelValue()}
            formikProps={formikProps}
            index={index}
          />
        ),
      })
  }
}
