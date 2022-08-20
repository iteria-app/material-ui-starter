import React from 'react'

import PropTypes from 'prop-types'

import { DashboardPage } from './pages/dashboard'

const App = () => {
  //const locale = useLocale()
  //const messagesObject = messages(locale)

  //   <IntlProvider
  //   locale={locale}
  //   messages={messagesObject}
  //   onError={() => console.debug}
  // >
  // </IntlProvider>
  return (
      <DashboardPage />
  )
}

App.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
}

export default App
