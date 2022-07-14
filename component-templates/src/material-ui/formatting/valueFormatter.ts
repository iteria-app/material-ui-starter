import { IntlShape } from 'react-intl'
import { Entity } from '../../gql'
import { guessEntityFieldTitle } from '../../gql/entity/guessEntityFieldTitle'
import { booleanFormatTemplate } from './booleanFormatTemplate'

const dateFormatFunctionTemplate =
  (intl: IntlShape) =>
  ({ value }: any) =>
    value ? intl.formatDate(value) : ''

const dateTimeFormatTemplate =
  (intl: IntlShape) =>
  ({ value }: any) =>
    value ? `${intl.formatDate(value)}, ${intl.formatTime(value)}` : ''

const timeFormatTemplate =
  (intl: IntlShape) =>
  ({ value }: any) =>
    value?.substring(0, '00:00:00'.length) || '' //value ? intl.formatTime(value) : ''

const basicFormatTemplate =
  (intl: IntlShape) =>
  ({ value }: any) =>
    value

const arrayFormatTemplate =
  (intl: IntlShape, entityFields: Entity) =>
  ({ value }: any) => {
    const names =
      value?.map(
        (field: any) => field?.name ?? field?.title ?? field?.id
        // TODO guessEntityFieldTitle(field, entityFields)
        // TODO optimalizovat - nazov field vypocitat pred cyklom
        // TODO zjednodusit - vo vnutri cyklu len formatovat komponentom
      ) ?? []
    return names.length ? names.join(', ') : ''
  }

const objectFormatTemplate =
  (intl: IntlShape, entityFields: Entity) =>
  ({ value }: any) =>
    guessEntityFieldTitle(value, entityFields)

export const valueFormatterFunction = (
  type: string,
  intl: IntlShape,
  entityFields: Entity
) => {
  switch (type.toLowerCase()) {
    case 'string':
    case 'number':
    case 'int':
    case 'jsonb':
    case 'uuid':
      return basicFormatTemplate(intl)
    case 'boolean':
      return booleanFormatTemplate
    case 'date':
      return dateFormatFunctionTemplate(intl)
    case 'datetime':
    case 'timestamp':
    case 'timestamptz':
      return dateTimeFormatTemplate(intl)
    case 'time':
    case 'timez':
      return timeFormatTemplate(intl)
    case 'array':
      return arrayFormatTemplate(intl, entityFields)
    case 'object':
      return objectFormatTemplate(intl, entityFields)
    default:
      return basicFormatTemplate(intl)
  }
}
