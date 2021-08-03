import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import sk from './compiled-lang/sk.json';
import en from './compiled-lang/en.json';
import {
  createClient,
  Provider,
  debugExchange,
  cacheExchange,
  fetchExchange
} from 'urql';
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

const loadLocaleData = locale => {
  switch (locale) {
    case 'sk':
    case 'sk-SK':
      return sk;
    default:
      return en;
  }
};

const client = createClient({
  url: 'https://iteria-app-example01.herokuapp.com/v1/graphql',
  exchanges: [debugExchange, cacheExchange, fetchExchange]
});

// @ts-ignore
if (!window.__skip_render) {
  const locale = navigator.language;
  const messages = loadLocaleData(locale);

  ReactDOM.render(
    <BrowserRouter>
    <Auth0ProviderWithHistory>
      <Provider value={client}>
        <App locale={locale} messages={messages} />
      </Provider>     
    </Auth0ProviderWithHistory>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./app";
// import { BrowserRouter as Router } from "react-router-dom";
// import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

// import "./index.css";

// ReactDOM.render(
//   <Router>
//     <Auth0ProviderWithHistory>
//       <App />
//     </Auth0ProviderWithHistory>
//   </Router>,
//   document.getElementById("root")
// );
