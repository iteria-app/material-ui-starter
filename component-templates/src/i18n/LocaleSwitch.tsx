import React from 'react'
import { useLocale, useSetLocale } from './LocaleControl'
import { Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material'

export const LocaleSwitch: React.FC<{ locales }> = ({
  locales,
}): JSX.Element => {
  const locale = useLocale()
  const setLocale = useSetLocale()

  const getEventValue = (event: SelectChangeEvent<string>) => {
    const locale = event?.target?.value ?? 'en'

    setLocale(locale)
  }

  const browserLocale = locale.split('-')[0]
  const defaultLocale = Object.keys(locales).includes(browserLocale)
    ? browserLocale
    : 'en'

  return (
    <FormControl variant="standard">
      <Select
        className="MuiSelect-root"
        labelId="select-locale"
        value={defaultLocale}
        onChange={getEventValue}
      >
        {Object.keys(locales).map(function (locale) {
          return (
            <MenuItem key={locale} value={locales[locale]}>
              {locale.toUpperCase()}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}
