import { TypographyOptions } from '@mui/material/styles/createTypography'

const typography: TypographyOptions = {
  h1: {
    fontWeight: 500,
    fontSize: 35,
  },
  h2: {
    fontWeight: 500,
    fontSize: 29,
  },
  h3: {
    fontWeight: 500,
    fontSize: 24,
  },
  h4: {
    fontWeight: 500,
    fontSize: 20,
  },
  h5: {
    fontWeight: 500,
    fontSize: 16,
  },
  h6: {
    fontWeight: 500,
    fontSize: 14,
  },
  body1: {
    fontWeight: 400,
    fontSize: 14,
  },
  body2: {
    fontWeight: 400,
    fontSize: 14,
  },
  allVariants: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
}

export default typography