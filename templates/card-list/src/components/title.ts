const titleRegExps = [/name$/i, /title$/i, /.*_name$/i]

export const getCardTitle = (fields: { [key: string]: any }) => {
  const cardTitle = Object.keys(fields).find((key) =>
    titleRegExps.some((rx) => rx.test(key))
  )

  if (cardTitle) return fields[cardTitle]
  const stringField = Object.values(fields)?.find(
    (field) => typeof field === 'string'
  )
  if (stringField) return stringField
  else return 'Card Title'
}
