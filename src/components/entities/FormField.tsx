import React from 'react'
import { Formik, useFormikContext, useField, Field, FieldProps } from 'formik'
import { useAbilityContext } from './Casl'
interface ChildrenProps {
  fieldProps: FieldProps
  setFieldValue: (val: any, flag: boolean) => void
}
interface Props {
  fieldName: string
  relationshipName?: string
  rootName?: string
  index?: number
  children?: (props) => React.ReactElement<ChildrenProps>
}
export const FormField = ({
  fieldName,
  relationshipName,
  rootName,
  index,
  children,
}: Props) => {
  const indexText = index !== undefined ? `[${index}]` : null
  const fieldArr = [rootName, relationshipName, indexText, fieldName].filter(
    Boolean
  )
  const formFieldName = fieldArr.join('.')
  const [field, meta, helpers] = useField(formFieldName)
  const { setFieldValue, values } = useFormikContext()
  const ability = useAbilityContext()
  const disabled = !ability.can('modify', values, formFieldName)
  const required = ability.can('required', values, formFieldName)
  // console.log('ability', values, formFieldName, field, meta, helpers, ability, {
  //   disabled,
  //   required,
  // })
  const setFieldValueWithoutName = (value: any, flag: boolean) => {
    setFieldValue(formFieldName, value, flag)
  }
  if (field) {
    return children({
      field: { ...field, disabled, required },
      meta,
      helpers,
      setFieldValue: setFieldValueWithoutName,
    })
  }
  return <></>
}
