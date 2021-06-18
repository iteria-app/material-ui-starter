import React, { useState } from "react";
import { useContext} from 'react';
import { ThemeProvider } from '@material-ui/core';
import themeLight from 'src/theme/theme-light';
import themeDark from 'src/theme/theme-dark';

const Context = React.createContext(null);

const ThemeConsumer = (props) => {

  const switchTheme = (isDarken: boolean) => {
    let theme = isDarken ? themeDark : themeLight
    setThemeData({ ...themeData, theme: theme, darken: isDarken })
  }

  interface ThemeData {
    theme,
    darken: boolean,
    switchTheme,
  }

  const [themeData, setThemeData] = useState<ThemeData>({
    theme: themeLight,
    darken: false,
    switchTheme: switchTheme
  });

  const { children } = props
  return (
    <Context.Provider value={themeData}>
      <ThemeProvider theme={themeData.theme}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  )
}

const useThemeContext = () => useContext(Context)

export { ThemeConsumer as ThemeProvider, useThemeContext }