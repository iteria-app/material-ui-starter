import { Entity, Field } from '..'

export const deleteFieldsOptions = [
  { name: 'platny', deleted: false, notDeleted: true },
  { name: 'isDeleted', deleted: true, notDeleted: false },
]

export const guessEntityDeleteField = (entity: Entity): Field | undefined => {
  return entity?.fields?.find((field) =>
    deleteFieldsOptions.some((f) => f?.name === field?.name)
  )
}

export const getEntityDeleteFieldOptions = (field: Field) => {
  return deleteFieldsOptions.find((f) => f.name === field.name)
}

export const isDeleted = (field: Field, item: any): boolean | undefined => {
  const entityDeleteFieldOptions = getEntityDeleteFieldOptions(field)

  if (entityDeleteFieldOptions) {
    return (
      item[entityDeleteFieldOptions.name] === entityDeleteFieldOptions.deleted
    )
  }
}

export const setDeleted = (field: Field, item: any, deleted: boolean) => {
  const entityDeleteFieldOptions = getEntityDeleteFieldOptions(field)

  if (entityDeleteFieldOptions) {
    item[field.name] = deleted
      ? entityDeleteFieldOptions.deleted
      : entityDeleteFieldOptions.notDeleted
  }

  return item
}
