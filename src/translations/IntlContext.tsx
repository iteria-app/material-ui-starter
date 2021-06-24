import React, { useState, useContext } from "react";
import { IntlProvider } from "react-intl";
import sk from '../compiled-lang/sk.json';
import en from '../compiled-lang/en.json';

const Context = React.createContext(null);

//TODO waiting for what the array will look like
const languageMessageData = [
  {
    "locale": "en",
    "message": en
  },
  {
    "locale": "sk",
    "message": sk
  }
]

//TODO I'm waiting for what the array will look like. Then refactoring the code
const loadLocaleData = (locale) => {
  for (let i = 0; i < languageMessageData.length; i++){
    if(languageMessageData[i].locale === locale){
      return languageMessageData[i].message
    }
  } 
  return en
};

const localeNavigatorLang = navigator.language.slice(0, 2)

//TODO if we dont have local language from localeNavigatorLang
//I'm waiting for what the array will look like. Then refactoring the code
const langFromNavigator = () => {
  for (let i = 0; i < languageMessageData.length; i++){
    if(languageMessageData[i].locale === localeNavigatorLang){
      return languageMessageData[i].locale
    }
  }
  return 'en' 
}

//TODO I'm waiting for what the array will look like. Then refactoring the code
const localeKeysFromLanguageData = () => {
  let localeKeys = []
  for (let i = 0; i < languageMessageData.length; i++){
    localeKeys = [...localeKeys, languageMessageData[i].locale]
  }
  return localeKeys
}

const IntlProviderWrapper = (props) => {

  const switchToLanguage = (lang) => {
    setLanguageData({ ...languageData, locale: lang, messages: loadLocaleData(lang) })
  }

  interface LanguageData {
    locale: string,
    messages,
    localeKeys: string[],
    switchToLanguage,
  }

  const [languageData, setLanguageData] = useState<LanguageData>({
    locale: langFromNavigator(),
    messages: loadLocaleData(localeNavigatorLang),
    localeKeys: localeKeysFromLanguageData(),
    switchToLanguage: switchToLanguage
  });

  const { children } = props
  return (
    <Context.Provider value={languageData}>
      <IntlProvider
        key={languageData.locale}
        locale={languageData.locale}
        messages={languageData.messages}
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  )
}

const useIntlContext = () => useContext(Context)

export { IntlProviderWrapper as IntlProvider, useIntlContext }
