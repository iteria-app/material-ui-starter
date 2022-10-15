import React from 'react'
import {
  I18nProvider,
  ThemeProvider,
  useLocale,
  theme
} from '@iteria-app/component-templates'
import PropTypes from 'prop-types'
import DashboardPage from './pages/dashboard'
import { messages } from './locale'

const App = (): JSX.Element => {
  const locale = useLocale()
  const messagesObject = messages(locale)

  return (
    <I18nProvider locale={locale} messages={messagesObject}>
      <ThemeProvider theme={theme}>
        <DashboardPage />
      </ThemeProvider>
    </I18nProvider>
  )
}

App.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
}

export default App
