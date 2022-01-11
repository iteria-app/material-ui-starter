import 'react-perfect-scrollbar/dist/css/styles.css'
import React from 'react'
import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
//import { GraphqlcodegenDataProvider } from '@iteria-app/generator/src/index'
import { DataContext } from '@iteria-app/component-templates/src/graphql'
import GlobalStyles from '../src/components/GlobalStyles'
import PropTypes from 'prop-types'
import {
  I18nProvider,
  useLocale,
} from '@iteria-app/component-templates/src/i18n'
import { IntlProvider } from 'react-intl'
import '../src/mixins/chartjs'
import theme from '../src/theme'
import routes from '../src/routes'
import { messages } from './locale'
import * as graphqlgen from './generated/graphql'
import * as introspection from './generated/introspect.json'
import {
  cacheExchange,
  createClient,
  debugExchange,
  fetchExchange,
  Provider as UrqlProvider
} from 'urql'

/*const graphqlcodegenDataProvider = new GraphqlcodegenDataProvider(
  graphqlgen,
  introspection as any
)*/

const client = createClient({
  url: import.meta.env.VITE_HASURA_GRAPHQL_ENDPOINT as string,
  exchanges: [debugExchange, cacheExchange, fetchExchange],
})

const App = () => {
  const routing = useRoutes(routes)
  const locale = useLocale()
  return (
    <UrqlProvider value={client}>
      <I18nProvider locale={locale} messages={messages(locale)}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {routing}
        </ThemeProvider>
      </I18nProvider>
    </UrqlProvider>
  )
}

App.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object
}
export default App