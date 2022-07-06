import React from 'react'
import { useRoutes } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  ThemeProvider,
  I18nProvider,
  useLocale,
  DataContext,
  GraphqlcodegenDataProvider
} from '@iteria-app/component-templates'
import '../src/mixins/chartjs'
import { theme } from './theme'
import routes from './routes'
import { messages } from './locale'
import * as graphqlgen from './generated/graphql'
import introspection from './generated/introspect.json'
import {
  cacheExchange,
  createClient,
  debugExchange,
  fetchExchange,
  Provider as UrqlProvider,
} from 'urql'

const graphqlcodegenDataProvider = new GraphqlcodegenDataProvider(
  graphqlgen,
  introspection.__schema as any
)

const client = createClient({
  url: import.meta.env.VITE_HASURA_GRAPHQL_ENDPOINT as string,
  exchanges: [debugExchange, cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      'x-hasura-admin-secret': import.meta.env.VITE_HASURA_GRAPHQL_SECRET as string
    }
  },
})

const App = () => {
  const routing = useRoutes(routes)
  const locale = useLocale()
  const messagesObject = messages(locale)

  return (
    <DataContext.Provider value={graphqlcodegenDataProvider}>
      <UrqlProvider value={client}>
        <I18nProvider locale={locale} messages={messagesObject}>
          <ThemeProvider theme={theme}>{routing}</ThemeProvider>
        </I18nProvider>
      </UrqlProvider>
    </DataContext.Provider>
  )
}

App.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
}

export default App
