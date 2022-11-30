const localeDirectory = import.meta.globEager('./compiled-lang/*.json')

// vite globEager and jamstack globEager is different, vite globEager has values hidden under default
// that is why we need to create new object without default when default is present
const localeDirectoryKeys = Object.keys(localeDirectory)
const hasDefault = localeDirectoryKeys.some(
  (meta) => localeDirectory[meta]?.default
)

const transformedLocales = hasDefault
  ? Object.fromEntries(
      Object.keys(localeDirectory).map((k) => [k, localeDirectory[k].default])
    )
  : localeDirectory

const gatherLocales = Object.keys(transformedLocales).reduce(
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
  const path = Object.keys(transformedLocales).find((element) =>
    element.endsWith(locale.split('-')[0] + '.json')
  )
  const defaultPath = Object.keys(transformedLocales).find((element) =>
    element.endsWith('en.json')
  )

  return transformedLocales[path] ?? transformedLocales[defaultPath]
}