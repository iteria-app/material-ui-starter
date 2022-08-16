const titleRegExps = [/.*price$/i]

export const getCardPrice = (fields: { [key: string]: any }) => {
  const cardPrice = Object.keys(fields).find((key) =>
    titleRegExps.some((rx) => rx.test(key))
  )

  if (cardPrice) return fields[cardPrice]
  return undefined
}
