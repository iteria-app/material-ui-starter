import { v4 as uuidv4 } from 'uuid'
import { Entity, Field, getEntityDeleteFieldOptions } from '..'

export const isAutoGeneratedIdField = (field: Field) => {
  return field.name === 'id' && field.type !== 'uuid'
}

export const generateEntityFieldValue = (
  entityField: Field,
  depth?: number,
): any => {
  const entityDeleteFieldOptions = getEntityDeleteFieldOptions(entityField)

  if (entityDeleteFieldOptions) {
    return entityDeleteFieldOptions.notDeleted
  } else {
    switch (entityField.type.toLocaleLowerCase()) {
      case 'array':
        return []
      case 'object':
        return generateEntityFieldValueObject(entityField, depth + 1)
      case 'boolean':
        return false
      case 'uuid':
        const url = window.location.href
        const urlParts = url.split('/').filter(Boolean)
        if ((!depth || depth < 1) &&
          urlParts[urlParts.length - 1] === 'create') return uuidv4()
        return null
      default:
        return null
    }
  }
}

export const generateEntityValueObject = (entity: Entity): object => {
  let generatedItem: any = {}
  entity.fields
    .filter((field) => !isAutoGeneratedIdField(field))
    .forEach((field) => {
      generatedItem[field.name] = generateEntityFieldValue(field, -100000)
    })

  return { ...generatedItem, __typename: entity.name }
}

export const generateEntityFieldValueObject = (
  entityField: Field,
  depth?: number
): object => {
  let generatedItem: any = {}

  entityField.entityFields?.fields
    .filter((field) => !isAutoGeneratedIdField(field))
    .forEach((field) => {
      generatedItem[field.name] = generateEntityFieldValue(field, depth)
    })

  return { ...generatedItem, __typename: entityField.name }
}

export const fillFlatEntityFieldValueObject = (object: object, entity: any) => {
  const entries = Object.entries(object)

  const flatEntries = entries.map((e) => {
    if (e[0] == 'id' && e[1]) return e
    if (
      e[1] == undefined ||
      typeof e[1] === 'boolean' ||
      e[1].constructor === Array
    ) {
      return [e[0], entity[e[0]]]
    }
    if (e[1].constructor === Object) {
      if (entity.__typename == e[0])
        return [e[0], fillFlatEntityFieldValueObject(e[1], entity)]
      else return [e[0], fillFlatEntityFieldValueObject(e[1], entity[e[0]])]
    }
    return e
  })

  return Object.fromEntries(flatEntries)
}

export const isHidden = (entityField: Field): boolean => {
  return (
    entityField.name === 'id' ||
    entityField.name === 'platny' ||
    entityField.name.match(/.*Path$/i) !== null
  )
}

export const getVisibleFields = (entityField?: Entity): Field[] => {
  return entityField
    ? entityField.fields.filter((field) => isHidden(field) === false)
    : []
}

export const deepClone = (data: any, keepIds: boolean = false) => {
  const isArray = Array.isArray(data)
  const result = isArray ? [] : {}

  if (typeof data !== 'object' || data === null) {
    return data
  }

  for (const key in data) {
    if (!keepIds && key === 'id') {
      if (!Number.isInteger(parseInt(data[key]))) {
        result[key] = uuidv4()
      }
    } else {
      result[key] = deepClone(data[key], !isArray)
    }
  }

  return result
}

export const findPathRoot = (entityName: string) => {
  if (!entityName) return window.location.hostname
  const loc = location.pathname.toLowerCase().split('/')
  const index = loc.indexOf(entityName.toLowerCase())
  return loc.slice(0, index).join('/')
}
