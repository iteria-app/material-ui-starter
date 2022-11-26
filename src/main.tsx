import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'

import App from './App'
import {
  LocaleContextProvider,
  ErrorBoundary,
  ThemeContextProvider,
  AuthContextProvider,
  initializeProvider
} from '@iteria-app/component-templates'

const provider = import.meta.env.VITE_AUTH_PROVIDER as string
const firebaseAuthDomain = import.meta.env.VITE_FIREBASE_DOMAIN as string
const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY as string
const persistance = import.meta.env.VITE_FIREBASE_PERSISTANCE as string
const config = {
  provider: provider,
  domain: firebaseAuthDomain,
  apiKey: firebaseApiKey,
  persistance: persistance
  //domain: auth0Domain,
  //clientId: aut0ClientID,
  //audience: auth0Audience,
  //domain: keycloakDomain,
  //realm: keycloakRealm,
  //clientId: keycloakClientID,
  //clientSecret: keycloakClientSecret,
  //adminSecret: keycloakAdminSecret,
}

const authProvider = initializeProvider(config)

ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <LocaleContextProvider>
        <ThemeContextProvider>
          <AuthContextProvider auth={authProvider}>
            <App />
          </AuthContextProvider>
        </ThemeContextProvider>
      </LocaleContextProvider>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
)
