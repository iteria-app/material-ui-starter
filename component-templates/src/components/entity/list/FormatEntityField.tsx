import { BooleanFormat } from '../../readonly/BooleanFormat'
import { DateFormat } from '../../readonly/DateFormat'
import { DateTimeFormat } from '../../readonly/DateTimeFormat'
import { DefaultFormat } from '../../readonly/DefaultFormat'
import { TimeFormat } from '../../readonly/TimeFormat'
import React from 'react'

interface Props {
  value: any
  type: string
}

const FormatEntityField: React.FC<Props> = (props: Props) => {
  switch (props.type) {
    case 'string':
    case 'number':
    case 'int':
    case 'jsonb':
    case 'uuid':
      return <DefaultFormat value={props.value} />
    case 'boolean':
      return <BooleanFormat value={props.value} />
    case 'date':
      return <DateFormat value={props.value} />
    case 'datetime':
    case 'timestamp':
    case 'timestamptz':
      return <DateTimeFormat value={props.value} />
    case 'time':
    case 'timez':
      return <TimeFormat value={props.value} />
    default:
      return <DefaultFormat value={props.value} />
  }
}

export default FormatEntityField
