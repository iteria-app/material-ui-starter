import { Components, createTheme, Theme } from '@mui/material'
import typography from './typography'
import colors from './colors.json'

const paletteR = {
  primary: {
    light: '#e2838a',
    main: '#db656d',
    dark: '#99464c',
    contrastText: '#fff5f5',
  },
  secondary: {
    light: '#fbbcbc',
    main: '#faacac',
    dark: '#af7878',
    contrastText: '#221111',
  },
  error: {
    main: '#93000a',
  },
  warning: {
    main: '#fdac42',
  },
  info: {
    main: '#3b6470',
  },
  success: {
    main: '#4e7d42',
  },
  text: {
    primary: '#221111',
    secondary: '#332222',
  },
  background: {
    default: '#fefcfb',
    paper: '#ffffff',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
}

const paletteG = {
  primary: {
    light: '#96f7b8',
    main: '#7ada9e',
    dark: '#00210f',
    contrastText: '#ffffff',
  },
  secondary: {
    light: '#d1e8d5',
    main: '#4f6354',
    dark: '#0c1f13',
    contrastText: '#ffffff',
  },
  error: {
    main: '#93000a',
  },
  warning: {
    main: '#fdac42',
  },
  info: {
    main: '#3b6470',
  },
  success: {
    main: '#4e7d42',
  },
  text: {
    primary: '#112211',
    secondary: '#223322',
  },
  background: {
    default: '#fbfefb',
    paper: '#ffffff',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
}

const palette = {
  primary: {
    light: '#c2effe',
    main: colors?.primary ?? '#03c9d7',
    dark: '#004f55',
    contrastText: '#ffffff',
  },
  secondary: {
    light: '#cce8ea',
    main: colors?.secondary ?? '#b1cbce',
    dark: '#4a6365',
    contrastText: '#ffffff',
  },
  error: {
    main: colors?.error ?? '#93000a',
  },
  warning: {
    main: colors?.warning ?? '#fdac42',
  },
  info: {
    main: colors?.info ?? '#3b6470',
  },
  success: {
    main: colors?.success ?? '#4e7d42',
  },
  text: {
    primary: '#111122',
    secondary: '#222233',
  },
  background: {
    default: colors?.background ?? '#fbfbfe',
    paper: '#ffffff',
  },
  divider: colors?.divider ?? 'rgba(0, 0, 0, 0.12)',
}

const components: Components<Theme> = {
  MuiTypography:{
    styleOverrides:{
      root:{
        fontFamily: `'Montserrat', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'`
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        height: '40px',
        fontSize: '14px',
        fontWeight: 600,
        padding: '16px',
        borderRadius: 23,
        textTransform: 'none',
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      input: {},
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        borderRadius: 23,
        padding: '10px 35px 10px 20px!important',
        background: '#f5f3f2',
      },
      notchedOutline: {
        border: 'none',
      },
    },
  },
  // @ts-ignore
  MuiDataGrid: {
    styleOverrides: {
      root: {
        border: 'none',
        color: 'secondary.main',
        fontWeight: 400,
        padding: '16px',
      },
      row: {
        cursor: 'pointer',
        borderRadius: '8px',
      },
      cell: {
        border: 'none',
      },
      columnHeaders: {
        background: '#f5f3f2',
        border: 'none',
        fontWeight: 550,
        fontSize: '14px',
        color: 'secondary.dark',
        borderRadius: '8px',
        height: '40px',
        minHeight: '0px !important',
      },
      columnSeparator: {
        visibility: 'hidden',
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        background: '#f5f3f2',
        border: 'none',
        fontWeight: 550,
        fontSize: '14px',
        color: 'secondary.dark',
        borderRadius: '8px',
        height: '40px',
        minHeight: '0px !important',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        padding: '0 14px',
      },
      root: {
        whiteSpace: 'nowrap',
        background: 'none',
        border: 'none',
        padding: '10px 0',
        ':first-of-type': {
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        },
        ':last-child': {
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
        },
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        marginTop: '42px',
        borderRadius: '8px',
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: '12px',
        boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        background: palette.background.paper,
        boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        border: 'none!important',
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        padding: '0',
        margin: '10px 0'
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        margin: '0',
        padding: '10px 16px',
        borderRadius: '20px',
        ':hover': {
          background: 'rgba(0, 0, 0, 0.2)',
        },
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: '32px',
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        background: palette.background.default,
        boxShadow: 'none',
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: 'default',
        margin: '0 5px',
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      // @ts-ignore
      root: {
        margin: '0 15px',
        ':before': {
          visibility: 'hidden',
        },
      },
    },
  },
  MuiPagination: {
    defaultProps: {
      variant: 'outlined',
      color: 'primary',
      shape: 'rounded',
    },
  },
}

export const mTheme = createTheme({
  palette,
  components,
  typography,
})
