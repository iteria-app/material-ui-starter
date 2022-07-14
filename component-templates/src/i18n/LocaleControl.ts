import { useContext, useCallback } from 'react'
import { I18nProvider } from './I18nProvider'
import { LocaleContext } from './LocaleContext'

export const useLocale = (): string => {
  const { state } = useContext(LocaleContext)

  return state?.locale ?? 'en'
}

export const useSetLocale = (): SetLocale => {
  const { state, dispatch } = useContext(LocaleContext)

  return useCallback(
    (newLocale: string) =>
      new Promise((resolve) => {
        resolve(I18nProvider)
      })
        .then(() => {
          const locale = newLocale

          dispatch({ type: 'setLocale', locale })
        })
        .catch((error) => {
          console.error(error)
        }),
    [state, dispatch]
  )
}

type SetLocale = (locale: String) => Promise<void>
