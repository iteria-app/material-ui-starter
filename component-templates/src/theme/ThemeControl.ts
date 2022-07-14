import { useContext, useCallback } from 'react'
import { ThemeProvider } from './ThemeProvider'
import { ThemeContext } from './ThemeContext'

export const useSetTheme = (): SetTheme => {
  const { state, dispatch } = useContext(ThemeContext)

  return useCallback(
    (newTheme) =>
      new Promise((resolve) => {
        resolve(ThemeProvider)
      })
        .then(() => {
          const theme = newTheme

          dispatch({ type: 'setTheme', theme })
        })
        .catch((error) => {
          console.error(error)
        }),
    [state, dispatch]
  )
}

type SetTheme = (theme) => Promise<void>
