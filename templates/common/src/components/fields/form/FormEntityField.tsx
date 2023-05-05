import React from 'react'
import { BooleanFormat } from './BooleanFormat'
import { DateFormat } from './DateFormat'
import { DateTimeFormat } from './DateTimeFormat'
import { TimeFormat } from './TimeFormat'
import { DefaultFormat } from './DefaultFormat'
import { ObjectFormat } from './ObjectFormat'
import { JsonFormat } from './JsonFormat'
import { StringFormat } from './StringFormat'

type Props = {
  type?: string
  value?: string
  index?: number
  relationshipName?: string
  setFieldValue?: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void
  name?: string
  title?: string
}

export const FormEntityField = (props: Props) => {
  switch (props?.type?.toLocaleLowerCase()) {
    case 'string':
      return <StringFormat {...props} />
    case 'boolean':
      return <BooleanFormat {...props} />
    case 'date':
      return <DateFormat {...props} />
    case 'datetime':
      return <DateTimeFormat {...props} />
    case 'time':
      return <TimeFormat {...props} />
    case 'object':
      return <ObjectFormat {...props} />
    case 'json':
      return <JsonFormat {...props} />
    default:
      return <DefaultFormat {...props} />
  }
}
