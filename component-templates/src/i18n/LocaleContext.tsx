import React, { useReducer, createContext } from 'react'

interface ILocaleContextData {
  state: {
    locale: string
  }
  dispatch: React.Dispatch<any>
}

export const LocaleContext = createContext<ILocaleContextData>({
  state: { locale: 'en' },
  dispatch: () => {},
})

const reducer = (state, action) => {
  switch (action.type) {
    case 'setLocale':
      localStorage.setItem('langLocale', action.locale)
      return { ...state, locale: action.locale }
  }
}

export const LocaleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    locale: localStorage.getItem('langLocale') ?? navigator.language ?? 'en',
  })
  const value = { state, dispatch }

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export const LocaleContextConsumer = LocaleContext.Consumer
