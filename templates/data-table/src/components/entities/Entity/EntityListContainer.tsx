import React from 'react'
import { useEntityQuery } from '../../../generated/graphql'
import {
  ErrorBoundary,
  QueryBoundary,
  useFilter,
  useLocale,
} from '@iteria-app/component-templates'
import { IntlProvider } from 'react-intl'
import { messages } from '../../../locale'
import { useNavigate } from 'react-router-dom'

interface IViewProps {
  data: any
  onChangePage: (state: number) => void
  filterProps: any
}

interface IEnitityListContainerProps {
  View: React.FC<IViewProps>
}

const EntityListContainer: React.FC<IEnitityListContainerProps> = ({
  View,
}) => {
  const locale = useLocale()
  const messagesObject = messages(locale)
  const filterProps = useFilter()
  const navigate = useNavigate()

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
          onError={() => console.debug}
        >
          <View
            data={data?.data}
            error={data?.error}
            loading={data?.fetching}
            onClickRow={(row) => {
              navigate(row.id.toString())
            }}
            topBar
            filterProps={filterProps}
          />
        </IntlProvider>
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityListContainer
