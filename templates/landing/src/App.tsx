import React from 'react'

import PropTypes from 'prop-types'

import { LandingPage } from './pages/landing'

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
      <LandingPage />
  )
}

App.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
}

export default App
