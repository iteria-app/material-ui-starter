import {
  httpReadFile,
  httpReadDir,
  httpWriteFile,
  httpDeleteFile,
} from './fsHttp'
import {
  Plugin,
  HtmlTagDescriptor,
  IndexHtmlTransformContext,
} from 'vite'
export interface IHTMLTag {
  [key: string]: string | boolean
}

interface Options {
  graphQLEndpoint?: string
  version?: string
  cwd?: string
  command: 'build' | 'serve'
  mode: 'development' | 'production' | string
  injectMode?: 'jamstack' | 'devServer'
}

export type ScriptTag = Record<string, string | boolean> | string
export default function iteriaLowcode(options: Options): Plugin {
  const isViteDevServer =
    options.injectMode === 'devServer' &&
    (options.command === 'serve' ||
      (options.mode === 'development' && options.command === 'build'))

  const ideDevServerIteriaAppInitConf = {
    fsPort: 3000,
    isDev: isViteDevServer,
    ...(options.cwd ? { cwd: options.cwd } : {}),
    ...(options.graphQLEndpoint
      ? { graphQLEndpoint: options.graphQLEndpoint }
      : {}),
  }

  const ideDevserverPath = `'https://unpkg.com/@iteria-app/ide-devserver@${options.version ?? '1.2.8'}/dist/ide-devserver.es.js'`
  const injectDevServer = options?.version === 'workspace:*' ? false : true

  const metas: IHTMLTag[] = []
  const links: IHTMLTag[] = [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@iteria-app/wysiwyg@1.5.4/dist/style.css',
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
  const headScripts: ScriptTag[] = [
    {
      type: 'module',
      src: 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js',
    },
  ]
  let scripts: ScriptTag[] = [
    {
      type: 'module',
      content: `
      import reactRefresh from 'https://esm.sh/react-refresh?dev'
      window.reactRefresh = reactRefresh
      `,
    },
    {
      content: `
      import buffer from 'https://cdn.skypack.dev/buffer'
      window.buffer = buffer
      window.Buffer = buffer.Buffer
      window.process = {
        env: {},
        version: 'version',
        versions: {
          node: 'version.node',
        },
      }
      window.global = {}
    `,
    },
    {
      src: 'https://kit.fontawesome.com/90ec8eceb4.js',
      crossorigin: 'anonymous',
    },
    injectDevServer && {
      type: 'module',
      content: `
        import { iteriaApp } from ${ideDevserverPath}
        iteriaApp(
          ${JSON.stringify(ideDevServerIteriaAppInitConf)}
        )`,
    },
  ].filter(Boolean)

  const devtoolsScript = {
    src: 'https://react-devtools-inline-initialize.netlify.app/react-devtools-inline-initialize.umd.js',
  }

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
        attrs: { type: 'module', ...attr },
        children: `${content} `,
      }
    } else {
      result = {
        tag: 'script',
        injectTo,
        children: `${script} `,
      }
    }
    return result
  }

  return {
    name: '@iteria-app/vite-plugin-lowcode',
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
          htmlResult.push(getScriptContent(script, 'body-prepend'))
        })
      }
      htmlResult.push(getScriptContent(devtoolsScript, 'body-prepend'))
      return htmlResult
    },
    configureServer(server) {
      // return a post hook that is called after internal middlewares
      // return () => {
      server.middlewares.use('/__fetchfs/read/file/' /* path */, httpReadFile)
      server.middlewares.use('/__fetchfs/write/file/' /* path */, httpWriteFile)
      server.middlewares.use(
        '/__fetchfs/delete/file/' /* path */,
        httpDeleteFile
      )
      server.middlewares.use('/__fetchfs/read/dir/' /* path */, httpReadDir)
      // }
    },
  }
}
