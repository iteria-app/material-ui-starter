export * from './entityDeleteHelper'
export * from './getEntityNameFromUrl'
export * from './guessEntityFieldTitle'
export * from './translateNestedField'
export * from './helper'

export interface Field {
  [key: string]: any
  name: any
  type: string
  entityFields?: Entity
  required?: boolean
}
export interface Entity {
  name: string
  readonly fields: Field[]
}
