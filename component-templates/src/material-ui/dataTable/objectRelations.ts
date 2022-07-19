import { IEntityTableProps } from '../listPage/ListPagePlaceholder'
import { Field } from '../../gql'

const isObject = (fieldType: string) =>
  fieldType === 'Object' || fieldType === 'object'

const isArray = (fieldType: string) =>
  fieldType === 'Array' || fieldType === 'array'

export const objectRelations = (props: IEntityTableProps) => {
  let column = 0
  while (props.entityFields?.fields[column]) {
    const field: Field = props.entityFields?.fields[column]
    if (isObject(field.type) || isArray(field.type)) {
      const fields = field.entityFields?.fields
        .map((nestedField: Field): Field | null => {
          if (nestedField.name !== 'id') {
            const nestedName = field.name + '.' + nestedField.name

            props.data.map(
              (eF: Field) =>
                (eF[nestedName] = eF[field.name]?.[nestedField.name])
            )

            nestedField.name = nestedName
            return nestedField
          }
          return null
        })
        .filter((field) => field !== null)
      // props.data.map((eF: Field) => delete eF[field.name]);
      props.entityFields?.fields.splice(column, 1, ...fields)
      column += fields?.length - 1
    } else {
      column++
    }
  }
  return props
}
