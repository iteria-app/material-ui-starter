import React from 'react'
import { FormattedMessage } from 'react-intl'

interface TranslateProps {
  entityName: string
  fieldName?: string
  defaultMessage?: string
  values?: Record<string, React.ReactNode>
}

const Translate: React.FC<TranslateProps> = ({
  entityName,
  fieldName,
  defaultMessage,
  values,
}) => {
  let dataField = fieldName
  let dataEntity = entityName
  if (fieldName && fieldName.split('___').length === 2) {
    dataField = fieldName.split('___')[1]
    dataEntity = fieldName.split('___')[0]
  } else if (fieldName && fieldName.split('__').length === 2) {
    dataField = fieldName.split('__')[1]
  }

  return (
    <FormattedMessage
      tagName={({ children }: any) => (
        <span
          className="translate"
          dangerouslySetInnerHTML={{ __html: children }}
          data-message-id={
            fieldName ? `${entityName}.${fieldName}` : `${entityName}`
          }
          data-field={dataField}
          data-entity={dataEntity}
        />
      )}
      id={fieldName ? `${entityName}.${fieldName}` : `${entityName}`}
      defaultMessage={
        defaultMessage ??
        (fieldName ? `${fieldName} (${entityName})` : entityName)
      }
      values={values}
    />
  )
}

export default Translate
