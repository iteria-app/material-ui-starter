const imagePathRegExps = [
  /signed.*ThumbnailPath$/i,
  /signed.*LogoPath$/i,
  /signed.*ImgPath$/i,
]

export const getImagePath = (fields: { [key: string]: any }) => {
  const imageFieldName = Object.keys(fields).find((key) =>
    imagePathRegExps.some((rx) => rx.test(key))
  )
  if (imageFieldName)
    return fields[imageFieldName]?.url ?? fields[imageFieldName]
}
