import { frontendActions, workbench } from './index'
import { generateDirectory } from '@iteria-app/generator'
import {
  CLONE_ELEMENT,
  NAVIGATE_TO_SOURCE_CODE,
  REMOVE_ELEMENT,
  GENERATE_PAGE,
  SHOW_USER_FEEDBACK,
  CHANGE_GRAPHQL_ENDPOINT,
  REORDER_ELEMENT,
  CHANGE_THEME,
  CLONE_AND_RENAME_ELEMENT,
  PROJECT_LOADED,
  TRANSPILER_ERROR,
  SAVE_ZIP,
  CONNECT_ELEMENT_HIGHLIGHT,
  BUNDLER_ERROR,
} from './messaging/messageTypes'
import IMessaging from './messaging/messaging'
import { cloneAndRenameElement, cloneElement } from './ast/clone'
import { removeElement } from './ast/remove'
import { addColumn, removeColumn } from '@iteria-app/generator'
import { showUserFeedback } from './react-instrumentation/userFeedback'
import { UserFeedback } from './react-instrumentation/userFeedback'
import {
  changeGraphQLEndpoint,
  getRoots,
  getNestedOfType,
} from '@iteria-app/graphql-lowcode'
import { guessCurrentWorkingDirectory } from '@iteria-app/generator'
import { delay } from './util/delay'
import { SourceLineCol } from '@iteria-app/generator'
import { reorderElement } from './ast/reorder'
import { reorderFields } from '@iteria-app/generator/src/generation/functions/detail-page/reorderFields'
import { reorderRoutes } from '@iteria-app/generator/src/generation/functions/routes/reorderRoutes'
import { guessCurrentWorkingDirectory } from '@iteria-app/generator/src/cwd'
import { ProjectLoadedData } from './workbench/Workbench'
import { BundlerError } from './bundler'
import {
  addElementHighlight,
  updateWysiwygErrors,
} from './react-instrumentation/elementHighlight'
import { zipAndSaveProject } from './fetch-project/zipProjects'
import { navigateToSourceCodeVscode } from './workbench/func'

export const addFrontendListeners = (
  messagingService: IMessaging,
  injectMode: 'jamstack' | 'devServer'
) => {
  messagingService.addEventListener(SAVE_ZIP, () => {
    const files = workbench.transformFsTreeToObject(workbench.getRoot())
    zipAndSaveProject(files)
  })

  messagingService.addEventListener(CONNECT_ELEMENT_HIGHLIGHT, () =>
    addElementHighlight(window, injectMode)
  )

  messagingService.addEventListener<BundlerError>(BUNDLER_ERROR, (err) =>
    updateWysiwygErrors({ type: BUNDLER_ERROR, ...err })
  )

  messagingService.addEventListener<BundlerError>(TRANSPILER_ERROR, (err) =>
    updateWysiwygErrors({ type: TRANSPILER_ERROR, ...err })
  )

  messagingService.addEventListener<ProjectLoadedData>(
    PROJECT_LOADED,
    ({ files }) => {
      frontendActions.connectElementHighlight()
      frontendActions.transpileFiles(files)
    }
  )

  messagingService.addEventListener<SourceLineCol>(
    CLONE_ELEMENT,
    async (source: any) => {
      const { fileName, columnToAdd, entityName, clonedColumnIndex, page } =
        source
      // TODO fix any
      if (columnToAdd) {
        addColumn(
          workbench.introspection,
          entityName,
          columnToAdd,
          page,
          workbench as any,
          clonedColumnIndex,
          guessCurrentWorkingDirectory() ?? workbench?.cwd
        )
          .then(() => delay(5000))
          .then(() => {
            window.postMessage({
              type: 'SHOW_USER_FEEDBACK',
              payload: {
                type: `CLONE_FIELD_SUCCESS`,
                entity: source.fieldToGenerate,
              },
            })
          })
          .catch((err) => {
            window.postMessage({
              type: 'SHOW_USER_FEEDBACK',
              payload: {
                type: `CLONE_FIELD_ERROR`,
                entity: err,
              },
            })
            console.error(err)
          })

        window.postMessage({
          type: 'SHOW_USER_FEEDBACK',
          payload: {
            type: `CLONE_FIELD_INFO`,
          },
        })

        return
      }
      const file = await workbench.readFile(fileName)

      if (!file) throw new Error('File not found on FS')
      console.log('KLONUJEM........z lokalneho ide-devservera', source)
      cloneElement(file, source)
        .then((code) => {
          if (code) {
            frontendActions.fileWrite(fileName, code)
            window.postMessage({
              type: 'SHOW_USER_FEEDBACK',
              payload: {
                type: `CLONE_ELEMENT_SUCCESS`,
              },
            })
          }
        })
        .catch((err) =>
          window.postMessage({
            type: 'SHOW_USER_FEEDBACK',
            payload: {
              type: `CLONE_ELEMENT_ERROR`,
              payload: err,
            },
          })
        )
    }
  )

  messagingService.addEventListener<SourceLineCol>(
    CLONE_AND_RENAME_ELEMENT,
    async (source: any) => {
      const { fileName, fieldToBeAdded } = source
      const file = await workbench.readFile(fileName)

      if (!file) throw new Error('File not found on FS')
      delay(4000).then(() => {
        cloneAndRenameElement(file, source, fieldToBeAdded).then((code) => {
          if (code) frontendActions.fileWrite(fileName, code)
        })
      })
    }
  )

  messagingService.addEventListener<SourceLineCol>(
    REMOVE_ELEMENT,
    async (source: any) => {
      const { colIndex, schema, page, entityName, columnToDelete } = source
      const file = await workbench.readFile(source.fileName)

      if (!file) throw new Error('File not found on FS')

      if (columnToDelete) {
        await removeColumn(
          schema,
          entityName,
          columnToDelete,
          page,
          workbench as any,
          colIndex
        )
        return
      }

      removeElement(file, source)
        .then((code) => {
          if (code) {
            frontendActions.fileWrite(source.fileName, code)
            window.postMessage({
              type: 'SHOW_USER_FEEDBACK',
              payload: {
                type: `REMOVE_ELEMENT_SUCCESS`,
              },
            })
          }
        })
        .catch((err) => {
          window.postMessage({
            type: 'SHOW_USER_FEEDBACK',
            payload: {
              type: `REMOVE_ELEMENT_ERROR`,
              payload: err,
            },
          })
          console.error(err)
        })
    }
  )

  messagingService.addEventListener<SourceLineCol>(
    NAVIGATE_TO_SOURCE_CODE,
    async (source) => {
      const { fileName, columnNumber, lineNumber } = source
      if (injectMode === 'jamstack') {
        navigateToSourceCodeVscode(source)
      } else {
        window.open(`vscode://file/${fileName}:${lineNumber}:${columnNumber}`)
      }
    }
  )

  messagingService.addEventListener<SourceLineCol>(
    GENERATE_PAGE,
    async (source: any) => {
      const intro = workbench.introspection

      const [queryRoot] = getRoots(intro)
      const selectedField = queryRoot.fields.find(
        (field) => field.name === source.fieldToGenerate
      )
      const selectedFieldType = getNestedOfType(selectedField)
      const fieldToGenerate = selectedFieldType.name

      generateDirectory(intro, workbench, {
        entities: [fieldToGenerate],
        templateUri:
          'https://github.com/mecirmartin/lowcode-monorepo/blob/main/packages/component-templates/src/material-ui/generate/index.tsx',
        outputDir: '',
      })
        .then(() => delay(5000))
        .then(() => {
          window.postMessage({
            type: 'SHOW_USER_FEEDBACK',
            payload: {
              type: `GENERATE_PAGE_SUCCESS`,
              payload: { entity: source.fieldToGenerate },
            },
          })
        })
        .catch((err) => {
          window.postMessage({
            type: 'SHOW_USER_FEEDBACK',
            payload: {
              type: `GENERATE_PAGE_ERROR`,
              payload: err,
            },
          })
          console.error(err)
        })

      window.postMessage({
        type: 'SHOW_USER_FEEDBACK',
        payload: {
          type: `GENERATE_PAGE_INFO`,
          payload: { entity: source.fieldToGenerate },
        },
      })
    }
  )

  messagingService.addEventListener<SourceLineCol>(
    CHANGE_GRAPHQL_ENDPOINT,
    async (source: any) => {
      const newEndpointURL = source.newEndpointURL

      //TODO env file name could change
      const envFile = await workbench.readFile('./.env.development')
      if (!envFile)
        return window.postMessage({
          type: 'SHOW_USER_FEEDBACK',
          payload: {
            type: `CHANGE_GRAPHQL_ENDPOINT_ERROR`,
          },
        })

      const modifiedEnvFile = await changeGraphQLEndpoint(
        envFile,
        'VITE_HASURA_GRAPHQL_ENDPOINT',
        newEndpointURL
      )
      if (!modifiedEnvFile)
        return window.postMessage({
          type: 'SHOW_USER_FEEDBACK',
          payload: {
            type: `CHANGE_GRAPHQL_ENDPOINT_ERROR`,
          },
        })

      workbench.writeFile('./.env.development', modifiedEnvFile).then(() => {
        window.postMessage({
          type: 'SHOW_USER_FEEDBACK',
          payload: {
            type: `CHANGE_GRAPHQL_ENDPOINT_SUCESS`,
          },
        })
      })

      //TODO remove all .graphql files
      const viteConfig = await workbench.readFile('./vite.config.ts')
      workbench.writeFile('./vite.config.ts', viteConfig)
    }
  )

  messagingService.addEventListener<SourceLineCol>(
    CHANGE_THEME,
    async (source: any) => {
      const newTheme = JSON.stringify(source.theme)
      const cwd = guessCurrentWorkingDirectory() ?? workbench?.cwd

      if (cwd) {
        const THEME_DIR = cwd + '/src/theme'
        const file = ((await workbench.readDirectory(THEME_DIR)) as any).find(
          (dir) => dir?.fileName === 'colors.json'
        )
        const theme = JSON.stringify(
          JSON.parse(await workbench.readFile(file?.filePath))
        )

        if (theme === newTheme) {
          return window.postMessage({
            type: 'SHOW_USER_FEEDBACK',
            payload: {
              type: `CHANGE_THEME_SUCESS`,
            },
          })
        } else {
          return window.postMessage({
            type: 'SHOW_USER_FEEDBACK',
            payload: {
              type: `CHANGE_THEME_ERROR`,
            },
          })
        }
      }
    }
  )

  messagingService.addEventListener<UserFeedback>(SHOW_USER_FEEDBACK, (data) =>
    showUserFeedback(data)
  )

  messagingService.addEventListener<SourceLineCol>(
    REORDER_ELEMENT,
    async (data: any) => {
      if (data.hasFields) {
        reorderFields(workbench.introspection, workbench as any, data)
          .then(() => {
            window.postMessage({
              type: SHOW_USER_FEEDBACK,
              payload: { type: `${REORDER_ELEMENT}_SUCCESS` },
            })
          })
          .catch((err) => {
            window.postMessage({
              type: SHOW_USER_FEEDBACK,
              payload: {
                type: `${REORDER_ELEMENT}_ERROR`,
                payload: err,
              },
            })
            console.error(err)
          })
      } else if (data.hasRoutes) {
        reorderRoutes(workbench as any, data)
          .then(() => {
            window.postMessage({
              type: SHOW_USER_FEEDBACK,
              payload: { type: `${REORDER_ELEMENT}_SUCCESS` },
            })
          })
          .catch((err) => {
            window.postMessage({
              type: SHOW_USER_FEEDBACK,
              payload: {
                type: `${REORDER_ELEMENT}_ERROR`,
                payload: err,
              },
            })
            console.error(err)
          })
      } else {
        const file = await workbench.readFile(data.fileName)

        if (!file) throw new Error('File not found on FS')
        reorderElement(file, data)
          .then((code) => {
            if (code) {
              frontendActions.fileWrite(data.fileName, code)
              window.postMessage({
                type: SHOW_USER_FEEDBACK,
                payload: { type: `${REORDER_ELEMENT}_SUCCESS` },
              })
            }
          })
          .catch((err) => {
            window.postMessage({
              type: SHOW_USER_FEEDBACK,
              payload: {
                type: `${REORDER_ELEMENT}_ERROR`,
                payload: err,
              },
            })
            console.error(err)
          })
      }
    }
  )
}
