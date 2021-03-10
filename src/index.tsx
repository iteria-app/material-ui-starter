import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
const loadLocaleData = (locale) => {
  switch (locale) {
    case 'sk':
    case 'sk-SK':
      return import('./compiled-lang/sk.json');
    default:
      return import('./compiled-lang/en.json');
  }
};

// @ts-ignore
if (!window.__skip_render) {
  const locale = navigator.language;
  loadLocaleData(locale).then((messages) => {
    ReactDOM.render(
      <BrowserRouter>
        <App locale={locale} messages={messages} />
      </BrowserRouter>,
      document.getElementById('root')
    );
  });
}
serviceWorker.unregister();