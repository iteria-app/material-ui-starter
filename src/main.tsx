import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'

import App from './App'
import {
  LocaleContextProvider,
  ErrorBoundary,
  ThemeContextProvider,
} from '/component-templates/component-templates.es.js'

ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <LocaleContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </LocaleContextProvider>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
)
