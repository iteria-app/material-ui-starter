import 'react-perfect-scrollbar/dist/css/styles.css'
import React from 'react'
import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { GraphqlcodegenDataProvider } from '@iteria-app/graphql-lowcode'
import { DataContext } from '@iteria-app/component-templates/src/gql'
import GlobalStyles from '../src/components/GlobalStyles'
import PropTypes from 'prop-types'
import {
  I18nProvider,
  useLocale,
} from '@iteria-app/component-templates/src/i18n'
import '../src/mixins/chartjs'
import theme from '../src/theme'
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
  return (
    <DataContext.Provider value={graphqlcodegenDataProvider}>
      <UrqlProvider value={client}>
        <I18nProvider locale={locale} messages={messages(locale)}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
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