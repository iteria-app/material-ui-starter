import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { LocaleContextProvider } from '@iteria-app/component-templates/src/i18n'

// @ts-ignore
if (!window.__skip_render) {
  ReactDOM.render(
    <LocaleContextProvider>
      <Router>
        <App />
      </Router>
    </LocaleContextProvider>,
    document.getElementById('root')
  )
}
