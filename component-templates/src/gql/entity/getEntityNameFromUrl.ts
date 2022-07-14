export const detailPageRegex = /^-?\d+$/
export const detailPageFullRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export const getEntityNameFromUrl = () => {
  const url = window.location.href
  const urlParts = url.split('/').filter(Boolean)

  if (
    detailPageRegex.test(urlParts[urlParts.length - 1]) ||
    detailPageFullRegex.test(urlParts[urlParts.length - 1]) ||
    urlParts[urlParts.length - 1] === 'create'
  ) {
    return urlParts[urlParts.length - 2]
  } else return urlParts[urlParts.length - 1]
}
