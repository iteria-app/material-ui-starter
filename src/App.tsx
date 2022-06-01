import 'react-perfect-scrollbar/dist/css/styles.css'
import React from 'react'
import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import PropTypes from 'prop-types'
import {
  I18nProvider,
  useLocale,
  DataContext,
  GraphqlcodegenDataProvider
} from '@iteria-app/component-templates'
import '../src/mixins/chartjs'
import { theme } from '../src/theme'
import routes from '../src/routes'
import { messages } from './locale'
import * as graphqlgen from './generated/graphql'
import introspection from './generated/introspect.json'
import {
  cacheExchange,
  createClient,
  debugExchange,
  fetchExchange,
  Provider as UrqlProvider
} from 'urql'

const graphqlcodegenDataProvider = new GraphqlcodegenDataProvider(
  graphqlgen,
  introspection.__schema as any
)

const client = createClient({
  url: 'https://demo-orders.hasura.app/v1/graphql',
  exchanges: [debugExchange, cacheExchange, fetchExchange],
})

const App = () => {
  const routing = useRoutes(routes)
  const locale = useLocale()
  const messagesObject = messages(locale)

  return (
    <DataContext.Provider value={graphqlcodegenDataProvider}>
      <UrqlProvider value={client}>
        <I18nProvider locale={locale} messages={messagesObject}>
          <ThemeProvider theme={theme}>
            {routing}
          </ThemeProvider>
        </I18nProvider>
      </UrqlProvider>
    </DataContext.Provider>
  )
}

App.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object
}
export default App