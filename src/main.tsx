import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import {
  ErrorBoundary,
} from '@iteria-app/component-templates'
import { LocaleContextProvider } from '@iteria-app/component-templates/src/i18n'
import { ThemeContextProvider } from '@iteria-app/component-templates/src/theme/ThemeContext'

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
