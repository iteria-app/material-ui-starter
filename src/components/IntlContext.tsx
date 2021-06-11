import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import sk from '../compiled-lang/sk';
import en from '../compiled-lang/en';

const Context = React.createContext(null);

const IntlConsumer = (props) => {
  const loadLocaleData = locale => {
    switch (locale) {
      case 'sk':
      case 'sk-SK':
        return sk;
      default:
        return en;
    }
  };

  const switchToLanguage = (lang) => {
    setLocaleMessage({ ...localeMessage, locale: lang, messages: loadLocaleData(lang) })
  }

  interface localeMessageInterface {
    locale: string,
    messages,
    localeDatas: string[],
    switchToLanguage,
  }

  const localeNavigatorLang = navigator.language.slice(0,2);

  const [localeMessage, setLocaleMessage] = useState<localeMessageInterface>({
    locale: localeNavigatorLang,
    messages: loadLocaleData(localeNavigatorLang),
    localeDatas: ['en', 'sk'],
    switchToLanguage: switchToLanguage
  });

  const { children } = props;
  return (
    <Context.Provider value={localeMessage}>
      <IntlProvider
        key={localeMessage.locale}
        locale={localeMessage.locale}
        messages={localeMessage.messages}
        defaultLocale="en"
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  )
}

export { IntlConsumer, Context as IntlContext }
