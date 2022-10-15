import en from '../compiled-lang/en.json'

const localeDirectory = {
  './compiled-lang/en.json': {
    default: en,
  }
}

const gatherLocales = Object.keys(localeDirectory).reduce(
  (gatherLocales, file) => {
    const locale = file.substring(
      file.lastIndexOf('/') + 1,
      file.indexOf('.json')
    )

    return { ...gatherLocales, [locale.toUpperCase()]: locale }
  },
  {}
)

export const locales = {
  ...gatherLocales,
}

export const messages = (locale: string) => {
  const path = Object.keys(localeDirectory).find((element) =>
    element.endsWith(locale.split('-')[0] + '.json')
  )
  const defaultPath = Object.keys(localeDirectory).find((element) =>
    element.endsWith('en.json')
  )

  return localeDirectory?.[`${path}`]?.default ?? localeDirectory?.[`${defaultPath}`]?.default
}
