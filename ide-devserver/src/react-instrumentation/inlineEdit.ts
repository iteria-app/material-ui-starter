import { guessCurrentWorkingDirectory } from '@iteria-app/generator'
import { parseLocaleJSON } from '@iteria-app/generator'
import DOMPurify from 'dompurify'

const escapeSpecialChars = (str: string) => {
  return str
    .replace(/[\n]+$/g, '') // remove \n from end of string
    .replace(/^[\n]+/g, '') // remove \n from start of string
    .replace(/[\n]/g, '\\n') // escape/remove other special characters
    .replace(/[\']/g, "'")
    .replace(/[\"]/g, '\\"')
    .replace(/[\r]/g, '')
    .replace(/[\t]/g, '')
    .replace(/[\b]/g, '')
    .replace(/[\f]/g, '')
}

const findSpanNode = (el: any) => {
  if (el.tagName === 'SPAN' && el.dataset.messageId) {
    return el
  }
  const MAX_DEPTH = 10
  let depth = 0
  while (el.parentNode && depth < MAX_DEPTH) {
    el.removeAttribute('data-editable')
    if (!el.classList.length) {
      el.removeAttribute('class')
    }
    el = el.parentNode
    if (el.tagName === 'SPAN' && el.dataset.messageId) {
      return el
    }
    depth++
  }
  return null
}

export const forceSaveLocaleElement = (
  target: any,
  inspectedElement: any,
  event: any,
  workbench: any,
  onShowUserFeedback?: (data: any) => void
) => {
  const cwd = guessCurrentWorkingDirectory() ?? workbench?.cwd
  const LANGS_PATH = cwd + '/src/compiled-lang'

  const langLocale =
    window.localStorage.getItem('langLocale') ??
    navigator.language.split('-')[0]
  const localeSourceUrl = LANGS_PATH + `/${langLocale}.json`
  let data: string
  workbench.readFile(localeSourceUrl).then((originalLocaleStringJSON) => {
    const originalMessages = parseLocaleJSON(originalLocaleStringJSON as string)
    let newValue = ''
    const spanNode = findSpanNode(target)
    if (spanNode) {
      newValue = DOMPurify.sanitize(spanNode.innerHTML)
    }
    newValue = escapeSpecialChars(newValue)

    const messageId = event
      ? (event.messageId as string)
      : inspectedElement.props.data === null ||
        inspectedElement.props.data === void 0
      ? void 0
      : inspectedElement.props.data.id
    const found = originalMessages.find((message) => message.id === messageId)
    // Return early if the field wasn't changed
    console.log(newValue, found?.value)
    if (newValue === found?.value) return
    if (onShowUserFeedback)
      onShowUserFeedback({ type: 'LOCAL_MESSAGE_TRANSLATE_INFO' })
    if (found === undefined) {
      for (let i = originalMessages.length - 1; i >= 0; i--) {
        if (
          originalMessages[i].id ===
          originalMessages[originalMessages.length - 1].id
        ) {
          const before = originalLocaleStringJSON?.substring(
            0,
            originalMessages[i].position.end
          )

          const after = originalLocaleStringJSON?.substring(
            originalMessages[i].position.end
          )
          const newRow = `"${messageId}": "${newValue}"`
          originalLocaleStringJSON = before + ',\n  ' + newRow + after
        }
      }
      data = originalLocaleStringJSON as string
    }
    if (originalMessages && found) {
      for (let i = originalMessages.length - 1; i >= 0; i--) {
        if (originalMessages[i].id === messageId) {
          const before = originalLocaleStringJSON?.substring(
            0,
            originalMessages[i].position.pos + 2
          )
          const after = originalLocaleStringJSON?.substring(
            originalMessages[i].position.end - 1
          )
          originalLocaleStringJSON = before + newValue + after
        }
      }
      data = originalLocaleStringJSON as string
    }
    if (onShowUserFeedback) {
      onShowUserFeedback({ type: 'LOCAL_MESSAGE_TRANSLATE_SUCESS' })
    }
    workbench.writeFile(localeSourceUrl, data)
  })
}
