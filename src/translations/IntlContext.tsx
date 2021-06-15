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
    setLanguageData({ ...languageData, locale: lang, messages: loadLocaleData(lang) })
  }

  interface languageDataInterface {
    locale: string,
    messages,
    localeKeys: string[],
    switchToLanguage,
  }

  const localeNavigatorLang = navigator.language.slice(0,2)
  const localeKeys = ['en', 'sk']

  const [languageData, setLanguageData] = useState<languageDataInterface>({
    locale: localeNavigatorLang,
    messages: loadLocaleData(localeNavigatorLang),
    localeKeys: localeKeys,
    switchToLanguage: switchToLanguage
  });

  const { children } = props
  return (
    <Context.Provider value={languageData}>
      <IntlProvider
        key={languageData.locale}
        locale={languageData.locale}
        messages={languageData.messages}
        defaultLocale="en"
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  )
}

export { IntlConsumer as IntlProvider, Context as IntlContext }
