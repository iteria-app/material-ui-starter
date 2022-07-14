import { Field } from '../../gql'
const isArray = (fieldType: string) =>
  fieldType === 'Array' || fieldType === 'array'
const isObject = (fieldType: string) =>
  fieldType === 'Object' || fieldType === 'object'
const isLeaf = (field: Field) =>
  field?.name &&
  field?.name !== 'id' &&
  !isArray(field?.type) &&
  !isObject(field?.type)

interface TranslateProps {
  fieldName: string
  entityName: string
}

export const translateNestedField = (
  currentField: Field,
  entityName: string
): TranslateProps => {
  if (isArray(currentField?.type) || isObject(currentField?.type)) {
    const objectWithName = currentField?.entityFields?.fields?.find(
      (field: Field) => isLeaf(field)
    )
    if (objectWithName) {
      return {
        fieldName: objectWithName.name,
        /* entityName: entityName + '.' + currentField.name, */
        entityName: currentField.name,
      }
    } else {
      const nestedObject = currentField?.entityFields?.fields?.find(
        (field: Field) => isObject(field?.type) || isArray(field?.type)
      )
      if (nestedObject) {
        return translateNestedField(
          nestedObject,
          /* entityName + '.' + currentField.name */
          currentField.name
        )
      } else {
        return { fieldName: currentField.name, entityName: entityName }
      }
    }
  }
  return { fieldName: currentField?.name, entityName: entityName }
}
