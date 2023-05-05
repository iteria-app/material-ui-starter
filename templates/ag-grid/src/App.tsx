import React from 'react'
import { useRoutes } from 'react-router-dom'
import {
  I18nProvider,
  ThemeProvider,
  useLocale,
  theme,
} from '@iteria-app/component-templates'
import PropTypes from 'prop-types'
import { messages } from './locale'
import routes from './routes'

const App = (): JSX.Element => {
  const routing = useRoutes(routes)
  const locale = useLocale()
  const messagesObject = messages(locale)

  return (
    <I18nProvider locale={locale} messages={messagesObject}>
      <ThemeProvider theme={theme}>{routing}</ThemeProvider>
    </I18nProvider>
  )
}

App.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
}

export default App
