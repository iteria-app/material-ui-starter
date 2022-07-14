onst localeDirectory = import.meta.globEager('./compiled-lang/*.json')

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

export const messages = (locale) => {
  const path = Object.keys(localeDirectory).find((element) =>
    element.endsWith(locale.split('-')[0] + '.json')
  )
  const defaultPath = Object.keys(localeDirectory).find((element) =>
    element.endsWith('en.json')
  )

  return localeDirectory[path]?.default ?? localeDirectory[defaultPath]?.default
}
