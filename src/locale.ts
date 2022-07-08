// const localeDirectory_ = import.meta.globEager('./compiled-lang/*.json')
import en from './compiled-lang/en.json'
import sk from './compiled-lang/sk.json'

const localeDirectory = {
  './compiled-lang/en.json': {
    default: en,
  },
  './compiled-lang/sk.json': {
    default: sk,
  },
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

export const messages = (locale: string): Record<string, string> => {
  const path = Object.keys(localeDirectory).find((element) =>
    element.toLowerCase().endsWith(locale.split('-')[0] + '.json')
  )
  return localeDirectory[path].default ?? ''
}
