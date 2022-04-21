export const getResourceHtmlElements = (
  htmlString: string,
  vercelString: string
) => {
  const el = document.createElement('html')
  el.innerHTML = htmlString

  const linkTags = parseLocalLinkTags(el, vercelString)
  const scriptTags = parseLocalScriptTags(el, vercelString)

  return [...linkTags, ...scriptTags]
}

const parseLocalLinkTags = (el: HTMLElement, cdnString: string) => {
  const linkTags = [...el.getElementsByTagName('link')]
    .filter((lt) => {
      const attribute = lt.getAttribute('href')
      if (attribute) return !attribute.startsWith('http')
      else return false
    })
    .map((lt) => {
      lt.href = cdnString + lt.getAttribute('href')
      return lt
    })

  return linkTags
}

const parseLocalScriptTags = (el: HTMLElement, cdnString: string) => {
  const scriptTags = [...el.getElementsByTagName('script')]
    .filter((st) => {
      const attribute = st.getAttribute('src')
      if (attribute) return !attribute.startsWith('http')
      else return true
    })
    .map((st) => {
      if (st.getAttribute('src')) st.src = cdnString + st.getAttribute('src')
      return st
    })

  return scriptTags
}
