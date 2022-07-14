export { GraphqlcodegenDataProvider } from './components/entity/DataProvider'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDom from 'react-dom'

import App from './App'

ReactDom.render(
  <BrowserRouter>
    <App messages={null} locale={'en'} />
  </BrowserRouter>,
  document.getElementById('root')
)

export * from './components'
export * from './i18n'
export * from './gql'
export * from './material-ui'
export * from './theme'
