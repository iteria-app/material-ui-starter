import React from 'react'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'

export const ThemeProvider = ({ children, theme }) => {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
}
