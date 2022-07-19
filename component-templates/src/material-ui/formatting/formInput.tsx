import React, { ReactNode } from 'react'
import { FormikProps, FormikValues } from 'formik'
import { Field } from '../../gql/index'
import {
  TextField,
  CheckboxField,
  DateField,
  DateTimeField,
  TimeField,
} from '../form'
import { ObjectField } from '../form/ObjectField'
import { FormEntityTable } from '../dataTable'
import { EnumField } from '../form/EnumField'


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
    case 'date':
      return render({
        entityField,
        children: (
          <DateField
            entityName={entityName}
            entityField={entityField}
            name={name}
            value={value}
            label={getLabelValue()}
            index={index}
          />
        ),
      })
    case 'timestamp':
    case 'timestamptz':
    case 'datetime':
      return render({
        entityField,
        children: (
          <DateTimeField
            entityName={entityName}
            entityField={entityField}
            name={name}
            value={value}
            label={getLabelValue()}
            index={index}
          />
        ),
      })
    case 'time':
    case 'timetz':
      return render({
        entityField,
        children: (
          <TimeField
            entityName={entityName}
            entityField={entityField}
            name={name}
            value={value}
            label={getLabelValue()}
            index={index}
          />
        ),
      })
    case 'string':
    case 'number':
    case 'int':
    case 'jsonb':
    case 'uuid':
    default:
      if (entityField.type.toLowerCase().endsWith('_enum')) {
        return <EnumField
          entityField={entityField}
          entityName={entityName}
          name={name}
          value={value}
          index={index}
          formikProps={formikProps}
          label={getLabelValue()}
        />
      }

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
