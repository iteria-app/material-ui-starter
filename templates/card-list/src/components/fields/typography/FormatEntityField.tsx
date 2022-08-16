import React from 'react'
import { BooleanFormat } from './BooleanFormat'
import { DateFormat } from './DateFormat'
import { DateTimeFormat } from './DateTimeFormat'
import { TimeFormat } from './TimeFormat'
import { DefaultFormat } from './DefaultFormat'

type Props = {
  type: string
  value: any
}

export const FormatEntityField = (props: Props) => {
  switch (props?.type?.toLocaleLowerCase()) {
    case 'boolean':
      return <BooleanFormat {...props} />
    case 'date':
      return <DateFormat {...props} />
    case 'datetime':
      return <DateTimeFormat {...props} />
    case 'time':
      return <TimeFormat {...props} />
    default:
      return <DefaultFormat {...props} />
  }
}
