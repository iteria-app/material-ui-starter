import React from 'react'
import { Entity, Field } from '../../gql'
import EntityLink from '../components/EntityLink'
const isArray = (fieldType: string) =>
  fieldType === 'Array' || fieldType === 'array'
const isObject = (fieldType: string) =>
  fieldType === 'Object' || fieldType === 'object'
const containsAttributes = (field: any) => field?.name ?? field?.title

const deepSearchEntityFields = (
  wantedField: String,
  entityFields: Entity
): Entity => {
  /* tries to find wantedField (object by its name) on the same level of entityFields passed in parameter; if not found, dive deeper into all objects of .type array and find it there recursively; repeat for all objects of .type array inside; if not found even in nested arrays, return original entityFields */
  return (
    entityFields?.fields?.find((field: Field) => field?.name === wantedField)
      ?.entityFields ??
    entityFields?.fields
      ?.filter((field: Field) => isArray(field?.type))
      .map((mappedField: Field) =>
        deepSearchEntityFields(wantedField, mappedField?.entityFields)
      )
      .find((foundField: Entity) => foundField?.name === wantedField) ??
    entityFields
  )
}

export const guessEntityFieldTitle = (
  currentField: any,
  entityFields: Entity
): React.ReactElement | String => {
  if (currentField?.__typename !== entityFields.name) {
    entityFields = deepSearchEntityFields(
      currentField?.__typename,
      entityFields
    )
  }

  const name = containsAttributes(currentField)

  if (!name) {
    const nestedObject =
      entityFields?.fields?.find((field: Field) => isObject(field?.type))
        ?.name ??
      entityFields?.fields?.find((field: Field) => isArray(field?.type))?.name

    if (nestedObject) {
      // has valid Field name
      if (currentField?.[nestedObject]?.length) {
        // array
        return currentField[nestedObject].map((arrayField: any) => (
          <EntityLink
            id={arrayField?.id}
            label={containsAttributes(arrayField)}
            typename={arrayField?.__typename}
          />
        ))
      } else {
        // object
        return (
          <EntityLink
            id={currentField?.[nestedObject]?.id}
            label={containsAttributes(currentField?.[nestedObject])}
            typename={currentField?.[nestedObject]?.__typename}
          />
        )
      }
    } else {
      return ''
    }
  } else {
    return (
      <EntityLink
        id={currentField?.id}
        label={name}
        typename={currentField?.__typename}
      />
    )
  }
}
