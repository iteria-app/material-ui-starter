import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'

export const I18nProvider = ({ children, locale, messages }) => {
  return (
    <IntlProvider
      onError={() => {}}
      locale={locale}
      textComponent={Fragment}
      messages={messages}
    >
      {children}
    </IntlProvider>
  )
}
