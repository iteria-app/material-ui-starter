import { IntlShape } from 'react-intl'
import Toastify from 'toastify-js'

const colors = {
  error: 'rgb(229, 57, 53)',
  success: 'rgb(45, 196, 51)',
  info: 'rgb(57, 73, 171)',
  warn: 'rgb(255, 192, 0)',
  load: '#7819A2',
}

const icons = {
  error: 'https://img.icons8.com/color/20/undefined/cancel--v1.png',
  success: 'https://img.icons8.com/color/20/undefined/ok--v1.png',
  info: 'https://img.icons8.com/color/20/undefined/info--v1.png',
  warn: 'https://img.icons8.com/color/20/undefined/error--v1.png',
  load: 'https://img.icons8.com/fluency/20/undefined/spinner-frame-5.png',
}

interface IToast {
  message: string
  type: 'error' | 'success' | 'info' | 'warn' | 'load'
}

const toast = (options: IToast) => {
  Toastify({
    text: options.message,
    className: `iteria-snackbar ${options.type}`,
    duration: options.type === 'load' ? 1500 : 5000,
    avatar: icons[options.type],
    style: {
      transition: '0.3s',
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(36, 36, 36, 0.75)',
      padding: '15px 25px',
      color: '#FFF',
      fontSize: '0.9rem',
      maxWidth: '35vh',
      zIndex: '2500',
      position: 'fixed',
      top: '80px',
      right: '30px',
      borderRadius: '4px',
      borderLeft: `3px solid ${colors[options.type]}`,
      boxShadow: '0 4px 12px rgb(0 0 0 / 15%)',
    },
  }).showToast()
  document
    .getElementsByClassName('toastify')?.[0]
    ?.classList?.add('iteria-ignore')
}

export const showErrorSnackbar = (message: string) => {
  toast({
    type: 'error',
    message,
  })
}

export const showSuccessSnackbar = (message: string) => {
  toast({
    type: 'success',
    message,
  })
}

export const showInfoSnackbar = (message: string) => {
  toast({
    type: 'info',
    message,
  })
}

export const showWarningSnackbar = (message: string) => {
  toast({
    type: 'warn',
    message,
  })
}

export const showLoadingSnackbar = (message: string) => {
  toast({
    type: 'load',
    message,
  })
}

export const parseRequestErrors = (error: string, intl: IntlShape) => {
  switch (true) {
    case error?.includes?.('hasura cloud limit'):
      return intl.formatMessage({
        id: 'errorHasuraRateLimit',
        defaultMessage: 'Database rate limit exceeded',
      })
    case error?.includes?.('JWTExpired'):
      return intl.formatMessage({
        id: 'errorJWTExpired',
        defaultMessage: 'Login token expired - please re-login',
      })
    case error?.includes?.('not found in type'):
      return intl.formatMessage({
        id: 'errorPermissins',
        defaultMessage: 'Insufficient permissions',
      })
    default:
      return error
  }
}
