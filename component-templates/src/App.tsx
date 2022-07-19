import React from 'react'
import { EntityTable } from './material-ui/dataTable'
import { I18nProvider } from './i18n'

interface AppData {
  messages: any
  locale: string
}

const App: React.FC<AppData> = ({ messages, locale }) => {
  return (
    <I18nProvider locale={locale} messages={messages}>
      <EntityTable data={[]} entityFields={{ name: 'entity', fields: [] }} />
    </I18nProvider>
  )
}

export default App
