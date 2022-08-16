const titleRegExps = [/^[^_]*name$/i, /title$/i]

export const getName = (fields: { [key: string]: any }) => {
  let listName = ''
  Object.keys(fields).forEach((key) => {
    if (/^[^_]*name$/i.test(key)) listName += `${fields[key] ?? ''} `
  })
  if (listName) return listName.trim()

  const listNameKey = Object.keys(fields).find((key) =>
    titleRegExps.some((rx) => rx.test(key))
  )
  if (listNameKey) return fields[listNameKey]

  const stringField = Object.keys(fields).find(
    (field) => fields?.[field]?.type === 'String'
  )
  if (stringField) return stringField

  return ''
}
