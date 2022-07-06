import { createTheme } from '@mui/material'
import typography from './typography'

export const defaultTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000000',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  components: {
    // @ts-ignore
    MuiDataGrid: {
      defaultProps: {
        autoPageSize: true,
        autoHeight: true,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          margin: '0 5px',
          color: 'inherit',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        // @ts-ignore
        root: {
          margin: '0 15px',
          color: 'inherit',
        },
      },
    },
  },
  typography,
})
