import React from 'react'
import { useEntityQuery } from '../../generated/graphql'
import EntityListView from './EntityListView'
import { useFilter, useLocale, ErrorBoundary, QueryBoundary } from '@iteria-app/component-templates'
import { IntlProvider } from 'react-intl'
import { messages } from '../../locale'

const EntityListContainer: React.FC = () => {
  const locale = useLocale()
  const messagesObject = messages(locale)
  const filterProps = useFilter()

  const [data] = useEntityQuery({
    variables: {
      where: filterProps.filter,
      limit: filterProps.pageSize + filterProps.pageSize,
      offset: filterProps.offset,
      order_by: filterProps.sort,
    },
  })

  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <IntlProvider 
          locale={locale}
          messages={messagesObject} 
          onError={() => {}}
        >
          <EntityListView
            data={data?.data}
            loading={data?.fetching}
            error={data?.error}
            {...filterProps}
          />
        </IntlProvider>
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityListContainer
