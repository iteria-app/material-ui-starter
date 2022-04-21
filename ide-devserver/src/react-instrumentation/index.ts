import { PERFORM_REACT_REFRESH } from '../messaging/messageTypes'
import IMessaging from '../messaging/messaging'
import { getResourceHtmlElements } from './parse'
import { windowHasProperty } from './windowProps'

export interface RefreshIframeData {
  bundle: string
}

export type PerformReactRefreshData = RefreshIframeData

export interface DevtoolsTreeNode {
  children: number[]
  depth: number
  displayName: string | null
  hocDisplayNames: string[] | null
  id: number
  isCollapsed: boolean
  key: number | null
  ownerID: number
  parentID: number
  type: number
  weight: number
}

export class ReactInstrumentation {
  constructor(messagingService: IMessaging) {
    //@ts-ignore
    window.$RefreshSig$ = () => (type) => type
    //@ts-ignore
    window.$RefreshRegGlobal$ = window.reactRefresh.register
    this.resourceHtmlElements = []
    this.appendCustomRequires()

    messagingService.addEventListener<PerformReactRefreshData>(
      PERFORM_REACT_REFRESH,
      async ({ bundle }) => {
        const s = document.createElement('script')
        s.text = bundle
        await windowHasProperty(window, '__deps')
        document.body.appendChild(s)
        // @ts-ignore
        const refreshed = window.reactRefresh.performReactRefresh()
      }
    )
  }

  private resourceHtmlElements: (HTMLScriptElement | HTMLLinkElement)[]

  private appendCustomRequires() {
    // @ts-ignore
    window.requireDefault = (dependency: string) => {
      const depParts = dependency.split('/')

      let pointerDeps = window.__deps
      let pointerDepsDefault = window.__deps_default

      depParts.forEach((dp: string) => {
        if (pointerDeps) pointerDeps = pointerDeps[dp]
        if (pointerDepsDefault) pointerDepsDefault = pointerDepsDefault[dp]
      })

      return pointerDepsDefault ?? pointerDeps
    }

    //@ts-ignore
    window.require = (dependency: string) => {
      const depParts = dependency.split('/')
      let pointerDeps = window.__deps

      depParts.forEach((dp: string) => {
        if (pointerDeps) pointerDeps = pointerDeps[dp]
      })

      return pointerDeps
    }
  }

  //odtialto
  async setResourceHtmlElements(vercelUrl: string) {
    try {
      const res = await fetch(vercelUrl)
      const data = await res.text()
      this.resourceHtmlElements = getResourceHtmlElements(data, vercelUrl)
      this.appendCustomRequires()
      window.__skip_render = true
      this.getCdnBundle()
    } catch (err) {
      throw new Error(err)
    }
  }

  private async getCdnBundle() {
    try {
      this.resourceHtmlElements.forEach((re) => {
        if (re instanceof HTMLLinkElement) {
          console.log('link', re)
          document.head.appendChild(re)
        } else if (re instanceof HTMLScriptElement) {
          const url = re.getAttribute('src')
          console.log('script', re)

          if (!url) return (0, eval)(re.innerText)

          fetch(url)
            .then((res) => res.text())
            .then((data) => (0, eval)(data))
        }
      })
    } catch (err) {
      throw new Error(err)
    }
  }
}
