import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import '@iteria-app/component-templates/src/theme/index.css'

import App from './App'
import { ErrorBoundary, LocaleContextProvider } from '@iteria-app/component-templates'

ReactDOM.render(
  <ErrorBoundary>
    <Router>
    <LocaleContextProvider>
      <App />
      </LocaleContextProvider>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
)
