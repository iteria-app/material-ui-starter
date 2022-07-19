import React, { useReducer, createContext } from 'react'

interface IThemeContextData {
  state: {
    theme: any
  }
  dispatch: React.Dispatch<any>
}

const ThemeContext = createContext<IThemeContextData>()

const reducer = (state, action) => {
  switch (action.type) {
    case 'setTheme':
      // localStorage.setItem('theme', action.theme)
      return { ...state, theme: action.theme }
  }
}

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {})
  const value = { state, dispatch }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const ThemeContextConsumer = ThemeContext.Consumer

export { ThemeContext, ThemeContextProvider, ThemeContextConsumer }
