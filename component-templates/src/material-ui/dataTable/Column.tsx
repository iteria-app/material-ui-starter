import React from 'react'
import { Field } from 'gql'
import { valueFormatterFunction } from '../formatting'
import { useIntl } from 'react-intl'
import Translate from '../../i18n/Translate'

export const columnFromField = (field: Field) => {
  const intl = useIntl()

  return {
    field: field.name,
    flex: 1,
    type: field.type,
    valueFormatter: valueFormatterFunction(field.type, intl),
    renderHeader: () => (
      <Translate
        entityName={field.entityFields?.name || ''}
        fieldName={field.name}
      />
    ),
  }
}
