import { httpReadFile, httpReadDir, httpWriteFile } from './fsHttp'

import { Plugin, HtmlTagDescriptor, IndexHtmlTransformContext } from 'vite'
export interface IHTMLTag {
  [key: string]: string | boolean
}
export type ScriptTag = Record<string, string | boolean> | string
// export interface Options {
//   // devProductionMode?: enum = DEV_ONLY;
// }
export default function iteriaLowcode(): Plugin {
  const metas: IHTMLTag[] = []
  const links: IHTMLTag[] = [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@iteria-app/wysiwyg@1.3.10/dist/style.css',
    },
    {
      href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      rel: 'stylesheet',
    },
    {
      href: 'https://bossanova.uk/jspreadsheet/v4/jexcel.css',
      rel: 'stylesheet',
    },
  ]
  const headScripts: ScriptTag[] = []
  const scripts: ScriptTag[] = [
    {
      content: `
      if (!window.$RefreshSig$) {
        window.$RefreshSig$ = () => type => type;
      }
      if (!window.$RefreshReg$) {
        window.$RefreshReg$ = () => {};
      }
    `,
    },
    {
      src: 'https://kit.fontawesome.com/90ec8eceb4.js',
      crossorigin: 'anonymous',
    },
    {
      type: "module",
      content: `
      import { iteriaApp } from 'https://unpkg.com/@iteria-app/ide-devserver@1.1.1/dist/ide-devserver.es.js'
      iteriaApp({ fsPort: 3000 })
      `
    }
  ]

  const getScriptContent = (
    script: ScriptTag,
    injectTo: 'head' | 'body' | 'head-prepend' | 'body-prepend'
  ) => {
    let result = {} as HtmlTagDescriptor
    if (typeof script === 'object' && script.src) {
      result = {
        tag: 'script',
        injectTo,
        attrs: { ...script },
      }
    } else if (typeof script === 'object' && script.content) {
      const { content, ...attr } = script
      result = {
        tag: 'script',
        injectTo,
        attrs: { defer: '', type: 'module', ...attr },
        children: `${content}`,
      }
    } else {
      result = {
        tag: 'script',
        injectTo,
        children: `${script}`,
      }
    }
    return result
  }

  return {
    name: '@iteria-app/lowcode-vite-plugin',
    config: (config) => {
      const hmr = process?.env?.GITPOD_WORKSPACE_ID
        ? {
          clientPort: 443,
          path: '/__vite_hmr',
        }
        : undefined

      return {
        ...config,
        server: {
          ...config.server,
          hmr,
          fs: {
            ...config.server?.fs,
            strict: false,
          },
        },
      }
    },
    transformIndexHtml(html: string, ctx: IndexHtmlTransformContext) {
      const htmlResult = [] as HtmlTagDescriptor[]
      if (metas.length) {
        metas.forEach((meta) => {
          htmlResult.push({
            tag: 'meta',
            injectTo: 'head',
            attrs: { ...meta },
          })
        })
      }
      if (links.length) {
        links.forEach((meta) => {
          htmlResult.push({
            tag: 'link',
            injectTo: 'head',
            attrs: { ...meta },
          })
        })
      }
      if (headScripts.length) {
        headScripts.forEach((script) => {
          htmlResult.push(getScriptContent(script, 'head'))
        })
      }
      if (scripts.length) {
        scripts.forEach((script) => {
          htmlResult.push(getScriptContent(script, 'body'))
        })
      }

      return htmlResult
    },

    configureServer(server) {
      // return a post hook that is called after internal middlewares
      // return () => {
      server.middlewares.use('/__fetchfs/read/file/' /* path */, httpReadFile)
      server.middlewares.use('/__fetchfs/write/file/' /* path */, httpWriteFile)
      server.middlewares.use('/__fetchfs/read/dir/' /* path */, httpReadDir)
      // }
    },
  }
}
