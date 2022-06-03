import { createTheme } from '@mui/material'
import shadows from './shadows'
import typography from './typography'
import colors from './colors.json'

export const theme = createTheme({
  palette: {
    primary: {
      main: colors?.primary ?? '#1976d2',
    },
    secondary: {
      main: colors?.secondary ?? '#9c27b0',
    },
    error: {
      main: colors?.error ?? '#d32f2f',
    },
    warning: {
      main: colors?.warning ?? '#ed6c02',
    },
    info: {
      main: colors?.info ?? '#0288d1',
    },
    success: {
      main: colors?.success ?? '#2e7d32',
    },
    text: {
      primary: colors?.primary ?? '#1976d2',
      secondary: colors?.secondary ?? '#9c27b0',
    },
    background: {
      default: colors?.background ?? '#ffffff',
    },
    divider: colors?.divider ?? 'rgba(0, 0, 0, 0.12)',
  },
  shadows,
  typography,
})
