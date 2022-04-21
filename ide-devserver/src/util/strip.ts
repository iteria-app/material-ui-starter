export const stripExtension = (fileName: string) => {
  const dot = fileName.lastIndexOf('.')
  const hasExtension = dot > 0 && dot < fileName.length
  if (hasExtension) {
    return fileName.substring(0, dot)
  }

  return fileName
}
