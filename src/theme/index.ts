import { createTheme, colors } from '@mui/material'
import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
  palette: {
    background: {
      // @ts-ignore
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: colors.indigo[500]
    },
    secondary: {
      main: colors.indigo[500]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
  // @ts-ignore
  shadows,
  typography
});

export default theme;
