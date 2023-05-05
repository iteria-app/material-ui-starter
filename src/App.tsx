import React, { useEffect } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'
import { theme } from './theme'
import {
  GraphqlcodegenDataProvider,
  DataContext,
  ThemeProvider,
  I18nProvider,
  useLocale,
  authExchange,
} from '@iteria-app/component-templates'
import { IntlProvider } from 'react-intl'
import {
  createClient,
  Provider as UrqlProvider,
  debugExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  ClientOptions,
} from 'urql'
import PropTypes from 'prop-types'
import '../src/mixins/chartjs'
import routes from './routes'
import { messages } from './locale'
import * as graphqlgen from './generated/graphql'
import introspection from './generated/introspect.json'

const graphqlcodegenDataProvider = new GraphqlcodegenDataProvider(
  graphqlgen,
  introspection.__schema as any
)

const App = () => {
  const routing = useRoutes(routes)
  const locale = useLocale()
  const messagesObject = messages(locale)

  const clientOptions: ClientOptions = {
    url: import.meta.env.VITE_HASURA_GRAPHQL_ENDPOINT as string,
    requestPolicy: 'cache-and-network',
    exchanges: [
      dedupExchange,
      debugExchange,
      cacheExchange,
      authExchange(),
      fetchExchange,
    ],
  }
  const superClient = createClient({
    url: import.meta.env.VITE_HASURA_GRAPHQL_ENDPOINT as string,
    requestPolicy: 'cache-and-network',
    exchanges: [dedupExchange, debugExchange, cacheExchange, fetchExchange],
    fetchOptions: {
      headers: {
        'x-hasura-admin-secret': import.meta.env
          .VITE_HASURA_GRAPHQL_SECRET as string,
      },
    },
  })

  let client = createClient(clientOptions)

  if (import.meta.env.VITE_AUTH_MODE === 'admin_secret') client = superClient

  return (
    <DataContext.Provider value={graphqlcodegenDataProvider}>
      <UrqlProvider value={client}>
        <I18nProvider locale={locale} messages={messagesObject}>
          <IntlProvider
            locale={locale}
            messages={messagesObject}
            onError={() => console.debug}
          >
            <ThemeProvider theme={theme}>{routing}</ThemeProvider>
          </IntlProvider>
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
