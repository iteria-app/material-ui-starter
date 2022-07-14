// Intl will be provided in scope by our template
let intl: IntlShape

const dateFormatFunctionTemplate = ({ value }: any) =>
  value ? intl.formatDate(value) : ''

const dateTimeFormatTemplate = ({ value }: any) =>
  value ? `${intl.formatDate(value)}, ${intl.formatTime(value)}` : ''

const timeFormatTemplate = ({ value }: any) =>
  value ? intl.formatTime(value) : ''

const basicFormatTemplate = ({ value }: any) => value

export const valueFormatterFunction = (type: string) => {
  switch (type.toLowerCase()) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'int':
    case 'jsonb':
    case 'uuid':
      return basicFormatTemplate
    case 'date':
      return dateFormatFunctionTemplate
    case 'datetime':
    case 'timestamp':
    case 'timestamptz':
      return dateTimeFormatTemplate
    case 'time':
      return timeFormatTemplate
    case 'array':
      return ({ value }: any) => 'TODO array'
    default:
      return basicFormatTemplate
  }
}
