import React from 'react'
import { useRoutes } from 'react-router-dom'
import { theme } from '../src/theme'
import { GraphqlcodegenDataProvider } from '@iteria-app/component-templates'
import {
  DataContext,
  ThemeProvider,
  //I18nProvider,
  //useLocale,
} from '@iteria-app/component-templates'
import {
  createClient,
  Provider as UrqlProvider,
  debugExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from 'urql'
import PropTypes from 'prop-types'
import '../src/mixins/chartjs'
import routes from './routes'
//import { messages } from './locale'

import { IntlProvider } from 'react-intl'
import { messages } from '../../../locale'

const App = () => {
  const routing = useRoutes(routes)
  //const locale = useLocale()
  //const messagesObject = messages(locale)

  //   <IntlProvider
  //   locale={locale}
  //   messages={messagesObject}
  //   onError={() => console.debug}
  // >
  // </IntlProvider>
  return (
    <I18nProvider locale={locale} messages={messagesObject}>
      {routing}
    </I18nProvider>
  )
}

App.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
}

export default App
