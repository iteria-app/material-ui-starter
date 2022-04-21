import {
  CLONE_ELEMENT,
  ElementHighlightMessageType,
  NAVIGATE_TO_SOURCE_CODE,
  REMOVE_ELEMENT,
  GENERATE_PAGE,
  CHANGE_GRAPHQL_ENDPOINT,
  CHANGE_THEME,
  TRANSLATE_ELEMENT,
  REORDER_ELEMENT,
  CLONE_AND_RENAME_ELEMENT,
} from '../messaging/messageTypes'
import {
  findTypenameValue,
  getDataFromElement,
  getSourceFromElement,
} from '../devtools/source'
import { frontendActions, workbench } from '../index'
import { forceSaveLocaleElement } from './inlineEdit'
import {
  getColIndex,
  getFieldNameFromElement,
  isColumnTitle,
} from '../devtools/table'
import { TransferableError, Translations } from '../types'
import { HoverInspector } from './hoverInspector'
import {
  entityExists,
  fetchHasuraMetadata,
  fetchHasuraQuery,
  filterIntrospection,
  getRoots,
  isByPkQuery,
  PageType,
} from '@iteria-app/graphql-lowcode'
import { normalizePath } from '../devtools/normalizePath'
import { fetchGraphqlIntrospectionSchema } from '@iteria-app/graphql-lowcode'
import debounce from 'lodash.debounce'
import { stripExtension } from '../util/strip'
import { FileDeleteData, FileWriteData } from '../workbench/Workbench'
import {
  astFindSource,
  guessCurrentWorkingDirectory,
} from '@iteria-app/generator'
import { isInsideTable, shouldDisplayElementHighlight } from './table'
import { CodeDir, CodeRW } from '@iteria-app/generator'
import {
  detailPageRegex,
  detailPageFullRegex,
  getEntityNameFromUrl,
} from '@iteria-app/component-templates/src/gql/entity/getEntityNameFromUrl'
import {
  createTable,
  trackTable,
  ColumnProps,
  getTablesInfo,
  getConstraintInfo,
} from '@iteria-app/graphql-lowcode'
import { createPermissions } from '@iteria-app/graphql-lowcode'
import {
  createColumn,
  handleErrors,
  resolveForeignKey,
} from '@iteria-app/graphql-lowcode'
import { showUserFeedback } from './userFeedback'
import * as Editable from '@livingdocs/editable.js'
import {
  handleReorderElements,
  setEndOfContenteditable,
} from '../helpers/editable'
import { generateSQLData } from '@iteria-app/graphql-lowcode/src/generate/sql/SQLDataGenerator'
import createVuerdTemplate from '@iteria-app/graphql-lowcode/src/generate/sql/createJSON'
import { getTheme } from './theme'
import { listenToVsCodeEvent } from '../vscode/listeners'
import { VSCODE_IFRAME_ID } from '../util/constants'

import { SQLData } from '@iteria-app/graphql-lowcode/src/generate/sql/interfaces'
import { findFields } from '@iteria-app/generator'
import { cloneAndRenameElement } from '../ast/clone'

export interface FeatureFlags {
  tippy?: boolean
  generator?: boolean
  addFields?: boolean
  translations?: boolean
  themeEditor?: boolean
  graphQLEndpoint?: boolean
  floatingButton?: boolean
}

const ElementEditable = (() => {
  const editable = new Editable.Editable()
  let editingElement = undefined
  let buttonElement = undefined
  let prevContent = undefined

  const findClosestBtn = (el: any) => {
    const MAX_DEPTH = 5
    let depth = 0
    while (el.parentNode && depth < MAX_DEPTH) {
      el = el.parentNode
      if (el.onclick || el.tagName === 'A' || el.tagName === 'BUTTON') {
        return el
      }
      depth++
    }
    return null
  }

  const save = () => {
    if (editingElement) {
      if (buttonElement) {
        buttonElement.setAttribute('style', 'pointer-events: auto')
        buttonElement.removeAttribute('contenteditable', 'true')
        editingElement.removeAttribute('data-editable')
      }
      editable.remove(editingElement)
      editingElement.blur()
      editingElement.removeAttribute('style', 'display: block; outline: 0')
      const inspectedElement = getDataFromElement(editingElement)
      forceSaveLocaleElement(
        editingElement,
        inspectedElement,
        undefined,
        workbench
      )
      editingElement = undefined
      buttonElement = undefined
      prevContent = undefined
    }
  }

  return {
    editingElement: (el: any) => {
      if (!el) return
      editingElement = el
      buttonElement = findClosestBtn(editingElement)
      editingElement.focus()
      editable.add(editingElement)
      if (buttonElement) {
        if (buttonElement.tagName === 'A') {
          buttonElement.setAttribute('contenteditable', 'true')
        } else {
          buttonElement.setAttribute('style', 'pointer-events: none')
        }
        setEndOfContenteditable(
          editingElement,
          editingElement,
          editingElement.innerHTML.length / 2
        ) // set carot cursor to middle of button content
      } else {
        setEndOfContenteditable(editingElement, editingElement) // set carot cursor to the end
        editingElement.setAttribute('style', 'display: block; outline: 0')
      }
      editable.add(editingElement)

      if (prevContent === undefined) {
        prevContent = el.innerHTML
      }

      const inspectedElement = getDataFromElement(editingElement)
      if (inspectedElement) {
        if (
          inspectedElement.displayName === 'Anonymous' ||
          inspectedElement.displayName.indexOf('FormattedMessage') !== -1 ||
          inspectedElement.displayName === 'Translate'
        ) {
          inspectedElement.displayName = 'FormattedMessage'
        }
      }
    },
    saveChanges: save,
    cancelChanges: () => {
      if (prevContent !== undefined) {
        editingElement.innerHTML = prevContent
      }
      save()
    },
  }
})()

export const updateWysiwygErrors = (error: TransferableError) => {
  const el = document.getElementById('iteria-wysiwyg')
  el.id = 'iteria-wysiwyg'
  // @ts-ignore
  if (el) el.bundlerError = error
}

export const addElementHighlight = async (
  window: Window,
  injectMode: 'jamstack' | 'devServer',
  features?: FeatureFlags
) => {
  const el = document.createElement('iteria-wysiwyg')
  //@ts-ignore
  if (features) el.features = features

  el.addEventListener('iframeLoaded', () => {
    const vscodeIframe = document.getElementById(
      VSCODE_IFRAME_ID
    ) as HTMLIFrameElement
    const { contentWindow } = vscodeIframe
    if (!contentWindow) {
      throw new Error('Unable to destructure window from Iframe')
    }

    window.addEventListener('message', async ({ data }) => {
      if (!data.command) {
        return
      }
      listenToVsCodeEvent(data, workbench, contentWindow)
    })

    // @ts-ignore
    el.win = contentWindow
  })

  el.addEventListener('saveProjectZip', () => frontendActions.saveZip())

  const hoverInspector = new HoverInspector(workbench)

  const hoverCallback = async (e: any) => {
    const {
      detail: { inspect, hoverElement },
    } = e
    const tooltipText = await hoverInspector.getComponentName(hoverElement)
    const display = shouldDisplayElementHighlight(hoverElement)

    //@ts-ignore
    el.isInsideTable =
      isInsideTable(hoverElement) || hoverElement.nodeName === 'INPUT'

    const formattedMessageElement = getFormattedMessageElement(hoverElement)

    inspect({
      display,
      tooltipText:
        tooltipText === 'Translate' ? 'FormattedMessage' : tooltipText,
      disabled: false,
      icon: 'settings',
      icons: [],
      extraPayload: {
        formattedMessageElement: formattedMessageElement,
      },
    })
  }
  const debouncedHoverCallback = debounce(hoverCallback, 50)

  el.addEventListener('hover', debouncedHoverCallback)

  el.addEventListener('delete', (e: any) => {
    const editingElement = e?.detail?.editingElement

    if (isColumnTitle(editingElement) && isDataGridCell(editingElement)) {
      handleRemoveTableColumn(window, editingElement, REMOVE_ELEMENT)
    } else if (isFormInput(editingElement)) {
      handleRemoveFormColumn(window, editingElement, REMOVE_ELEMENT)
    } else {
      handleIconClick(window, editingElement, REMOVE_ELEMENT)
    }
  })

  el.addEventListener('clone', async (e: any) => {
    const type = e.detail.type

    if (type === 'CLONE_ELEMENT') {
      const element = e.detail.payload.element
      handleIconClick(window, element, CLONE_ELEMENT)
    } else if (type === 'CLONE_COLUMN') {
      const selectedFields = e.detail.payload.fields

      const payloadArr: any[] = Array.isArray(selectedFields)
        ? selectedFields
        : [selectedFields]

      payloadArr.forEach((field) => cloneColumn(field))
    } else if (type === 'CLONE_AND_RENAME_ELEMENT') {
      const element = e.detail.payload.element
      const source = getSourceFromElement(element)

      if (!source) return console.error('Source not found', el)

      const selectedFields = e.detail.payload.fields

      const { fileName } = source
      const code = await workbench.readFile(fileName)

      const __typename = e.detail.payload.__typename

      const fields = workbench.introspection.types
        .find((type) => type.name === __typename)
        ?.fields?.map((field) => field.name)
      const node = astFindSource(code, source)
      const foundFields = findFields(node, fields)

      const newField = selectedFields.split('.').slice(1).join('.')

      if (foundFields?.length !== 1) return

      const payloadArr: any[] = Array.isArray(selectedFields)
        ? selectedFields
        : [selectedFields]

      payloadArr.forEach((field) => cloneColumn(field, __typename))
      const clonedAndRenamedFieldsFile = await cloneAndRenameElement(
        code,
        source,
        foundFields[0],
        newField
      )
      if (clonedAndRenamedFieldsFile)
        workbench.writeFile(fileName, clonedAndRenamedFieldsFile)
    }
  })

  el.addEventListener('showsource', (e: any) => {
    const editingElement = e?.detail?.editingElement
    console.log('showsource event', e, 'editingElement:', editingElement)

    handleIconClick(window, editingElement, NAVIGATE_TO_SOURCE_CODE)
  })

  el.addEventListener('translate', (e: any) => {
    const editingElement = e?.detail?.editingElement
    console.log('translate event', e, 'editingElement:', editingElement)
    handleIconClick(window, editingElement, TRANSLATE_ELEMENT)
    ElementEditable.editingElement(editingElement)
  })

  el.addEventListener('confirmaction', (e: any) => {
    if (e.detail.actionType === 'translate') {
      ElementEditable.saveChanges()
    } else if (e.detail.actionType === 'drag_and_drop_grid') {
      handleReorderElements(
        window,
        e.detail.payload,
        REORDER_ELEMENT,
        frontendActions
      )
    }
  })

  el.addEventListener('cancelaction', (e: any) => {
    if (e.detail.actionType === 'translate') {
      ElementEditable.cancelChanges()
    }
  })
  el.addEventListener('editing', async (e: any) => {
    const __typename = findTypenameValue()
    if (!__typename) return

    const editingElement = e?.detail?.editingElement
    const source = getSourceFromElement(editingElement)
    const fields = workbench.introspection.types
      .find((type) => type.name === __typename)
      ?.fields?.map((field) => field.name)

    if (!source || !fields) return
    const { fileName } = source

    const code = await workbench.readFile(fileName)
    const node = astFindSource(code, source)
    const foundFields = findFields(node, fields)

    //@ts-ignore
    if (foundFields?.length === 1) el.__typename = __typename
  })

  el.addEventListener('modechange', async (e: any) => {})

  el.addEventListener('generatePage', async (e: any) => {
    handleGeneratePageClick(window, GENERATE_PAGE, e)
  })

  el.addEventListener('listAllTranslations', async (e: any) => {
    handleShowAllTranslations(e)
  })

  el.addEventListener('changeGraphqlEndpoint', async (e: any) => {
    handleChangeGraphqlEndpoint(CHANGE_GRAPHQL_ENDPOINT, e)
  })

  el.addEventListener('changeTheme', async (e: CustomEvent) => {
    handleChangeTheme(CHANGE_THEME, e)
  })

  el.addEventListener('createTable', async (e: any) => {
    handleCreateTable(el, e)
  })

  el.addEventListener('addNewColumn', async (e: any) => {
    handleAddColumn(el, e)
  })

  el.addEventListener('viewERD', async (e: any) => {
    handleViewERD(e)
  })

  el.addEventListener('loadIntrospection', async () => {
    const introspection = await loadIntrospection({ viewMessage: true })
    if (introspection) {
      workbench.setIntrospection(introspection)
      //@ts-ignore
      el.introspection = introspection
    }
  })

  el.addEventListener('filterIntrospection', async () => {
    let entityName = getEntityNameFromUrl()
    //@ts-ignore
    if (!workbench.introspection.types.some((type) => type.name === entityName))
      entityName = el.__typename ?? findTypenameValue()

    const filteredIntrospection = filterIntrospection(
      workbench.introspection,
      entityName
    )
    //@ts-ignore
    el.introspection = filteredIntrospection
  })

  document.body.appendChild(el)

  el.id = 'iteria-wysiwyg'

  // Set introspection when creating element
  const introspection = await loadIntrospection({ viewMessage: false })
  //@ts-ignore
  el.introspection = introspection
  workbench.setIntrospection(introspection)
  // @ts-ignore
  el.win = window
  // @ts-ignore
  el.isDevserver = injectMode === 'devServer'
}

const loadIntrospection = async (
  options: { viewMessage: boolean } = { viewMessage: true }
) => {
  try {
    const schema = await fetchGraphqlIntrospectionSchema(
      workbench.graphQLEndpoint
    )
    if (options.viewMessage) {
      window.postMessage({
        type: 'SHOW_USER_FEEDBACK',
        payload: { type: 'LOAD_INTROSPECTION_SUCCESS' },
      })
    }
    return schema
  } catch (err) {
    window.postMessage({
      type: 'SHOW_USER_FEEDBACK',
      payload: { type: 'LOAD_INTROSPECTION_ERROR', payload: err },
    })
    console.error(err)
    return null
  }
}

const getPageTypeFromUrl = () => {
  const url = window.location.href
  const urlParts = url.split('/').filter(Boolean)

  // url could be in format /entityName/:id, where id is a number or uuid
  if (
    detailPageRegex.test(urlParts[urlParts.length - 1]) ||
    detailPageFullRegex.test(urlParts[urlParts.length - 1])
  ) {
    return PageType.DETAIL
  } else return PageType.LIST
}

const cloneColumn = async (selectedFields: string, entity?: string) => {
  const entityFromUrl = entity ?? getEntityNameFromUrl()
  const entityName = entityExists(workbench.introspection.types, entityFromUrl)
    ? entityFromUrl
    : findTypenameValue()

  let source: any = {}
  source.columnToAdd = selectedFields
  source.clonedColumnIndex = 1
  source.entityName = entityName
  source.page = getPageTypeFromUrl()

  frontendActions.elementHighlightClick(CLONE_ELEMENT, source)
}

export const getAllTranslations = async (
  path: string,
  io: CodeRW & CodeDir
) => {
  if (path) {
    const allTranslations: Translations = {
      langs: {},
    }

    const directory = await io.readDirectory(path)
    if (directory) {
      const langs = Object.values(directory)
      for (let index in langs) {
        const item = langs[index] as any
        const fileName = item.fileName
        const lang = stripExtension(fileName)
        const translation = await io.readFile(item.filePath)
        if (translation) {
          allTranslations['langs'][lang] = JSON.parse(translation)
          allTranslations[fileName] = item.filePath
        }
      }
      return allTranslations
    }
  }
  return { langs: {} }
}

export const handleShowAllTranslations = async (event: any) => {
  const dialog = event?.detail?.dialogTranslationSheet
  const hide = event?.detail?.hide

  const cwd = guessCurrentWorkingDirectory() ?? workbench?.cwd
  const LANGS_PATH = cwd + '/src/compiled-lang'
  const translation: Translations = await getAllTranslations(
    LANGS_PATH,
    workbench
  )

  await dialog({
    translations: translation.langs,
    ok: async (e: any, changedTranslations: Set<string>) => {
      let langsToWrite: FileWriteData[] = Object.keys(e)
        .map((localeLang: string) =>
          !(localeLang in translation.langs) ||
          changedTranslations.has(localeLang)
            ? {
                path: LANGS_PATH + '/' + localeLang + '.json',
                data: JSON.stringify(e[localeLang], undefined, 2),
              }
            : null
        )
        .filter(Boolean)
      const langsToDelete: FileDeleteData[] = Object.keys(translation.langs)
        .map((localeLang) =>
          localeLang in e
            ? null
            : { path: LANGS_PATH + '/' + localeLang + '.json' }
        )
        .filter(Boolean)
      if (langsToDelete.length)
        frontendActions.multipleFileDelete(langsToDelete)
      if (langsToWrite.length) frontendActions.multipleFileWrite(langsToWrite)
      if (typeof hide === 'function') hide()
    },
  })
}

export const handleCloneTableColumn = async (
  type: ElementHighlightMessageType,
  event: CustomEvent
) => {
  const dialog = event.detail.dialogInsertField
  const hide = event.detail.hide

  const entityName = getEntityNameFromUrl()
  const filteredIntrospection = filterIntrospection(
    workbench.introspection,
    entityName
  )

  let source: any = {}

  await dialog({
    intro: filteredIntrospection,
    fieldSelected: async (e: any) => {
      source.columnToAdd = e.selectedFields
      source.clonedColumnIndex = 1
      source.entityName = entityName
      source.page = PageType.LIST
      frontendActions.elementHighlightClick(type, source)
      hide()
    },
  })
}

export const handleCloneFormInput = async (
  window: Window,
  el: HTMLElement,
  type: ElementHighlightMessageType,
  event: CustomEvent
) => {
  if (!window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
    throw new Error(
      '__REACT_DEVTOOLS_GLOBAL_HOOK__ not available on window object'
    )
  const source = getSourceFromElement(el) as any
  const filePath = normalizePath(source.fileName)

  const dialog = event.detail.dialogInsertField
  const hide = event.detail.hide

  const schema = await fetchGraphqlIntrospectionSchema(
    workbench.graphQLEndpoint
  )

  const entityName = getEntityNameFromUrl()
  const filteredSchema = filterIntrospection(schema, entityName)

  await dialog({
    intro: filteredSchema,
    fieldSelected: async (e: any) => {
      source.columnToAdd = e.selectedFields
      source.entityName = entityName
      source.filePath = filePath
      source.intro = schema
      source.page = PageType.DETAIL
      frontendActions.elementHighlightClick(type, source)
      if (typeof hide === 'function') hide()
    },
  })
}

export const handleRemoveTableColumn = async (
  window: Window,
  el: HTMLElement,
  type: ElementHighlightMessageType
) => {
  if (!window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
    throw new Error(
      '__REACT_DEVTOOLS_GLOBAL_HOOK__ not available on window object'
    )

  const entityName = getEntityNameFromUrl()

  const source = getSourceOfTable(el, window) as any
  if (!source) return console.error('Source not found', el)

  source.colIndex = getColIndex(el)
  source.schema = workbench.introspection
  source.page = PageType.LIST
  source.entityName = entityName
  source.columnToDelete = getFieldNameFromElement(el)

  if (!source) return console.error('Source not found', el)
  frontendActions.elementHighlightClick(type, source)
}

export const handleRemoveFormColumn = async (
  contentWindow: Window,
  el: HTMLElement,
  type: ElementHighlightMessageType
) => {
  const schema = await fetchGraphqlIntrospectionSchema(
    workbench.graphQLEndpoint
  )

  const entityName = getEntityNameFromUrl()

  const source = getSourceFromElement(el) as any
  if (!source) return console.error('Source not found', el)

  source.schema = schema
  source.page = PageType.DETAIL
  source.entityName = entityName
  source.columnToDelete = el.getAttribute('name')

  if (!source) return console.error('Source not found', el)
  frontendActions.elementHighlightClick(type, source)
}

export const handleIconClick = (
  window: Window,
  el: HTMLElement,
  type: ElementHighlightMessageType
) => {
  const source = getSourceFromElement(el)
  if (!window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
    throw new Error(
      '__REACT_DEVTOOLS_GLOBAL_HOOK__ not available on window object'
    )
  if (!source) {
    window.postMessage({
      type: 'SHOW_USER_FEEDBACK',
      payload: { type: `${type}_ERROR` },
    })
    return console.error('Source not found', el)
  }

  frontendActions.elementHighlightClick(type, source)
}

export const handleGeneratePageClick = async (
  window: Window,
  type: ElementHighlightMessageType,
  event: CustomEvent
) => {
  //TODO change graphql-lowcode getRoots to work with copy of introspection, not with the initial introspection
  const introspection = JSON.parse(JSON.stringify(workbench.introspection))

  const dialog = event?.detail?.dialogChooseEntityFields
  const hide = event?.detail?.hide

  //filters out _by_pk queries
  const [queryRoot] = getRoots(introspection)
  queryRoot.fields = queryRoot.fields.filter((field) => !isByPkQuery(field))

  introspection.types.map((type) => {
    if (type.name === 'query_root') {
      type.fields = queryRoot.fields
    }
  })

  await dialog({
    intro: introspection,
    fieldSelected: async (e: any) => {
      const source: any = {}
      source.fieldToGenerate = e.selectedFields
      source.typeOfField = e.selectedFields.type
      source.intro = introspection
      frontendActions.elementHighlightClick(type, source)
      hide()
    },
  })
}

export const handleChangeGraphqlEndpoint = async (
  type: ElementHighlightMessageType,
  event: CustomEvent
) => {
  const graphqlEndpointURL = workbench.graphQLEndpoint
  const dialog = event?.detail?.dialogChangeGraphqlEndpoint

  await dialog({
    currentEndpoint: graphqlEndpointURL,
    endpointChanged: async (e: any) => {
      const source: any = {}
      source.newEndpointURL = e
      frontendActions.elementHighlightClick(type, source)
    },
  })
}

export const handleChangeTheme = async (
  type: ElementHighlightMessageType,
  event: CustomEvent
) => {
  const THEME_NAME = 'colors'
  const dialog = event?.detail?.dialogThemeEditor
  const cwd = guessCurrentWorkingDirectory() ?? workbench?.cwd

  if (cwd) {
    const THEME_DIR = cwd + '/src/theme'
    const theme = await getTheme(
      THEME_DIR,
      THEME_NAME,
      workbench,
      frontendActions
    )

    if (theme) {
      await dialog({
        theme: theme[THEME_NAME],
        save: async (e: any) => {
          const source: any = {}
          source.theme = e
          frontendActions.fileWrite(theme.file, JSON.stringify(e, undefined, 2))
          frontendActions.elementHighlightClick(type, source)
        },
      })
    }
  }
}

export const handleCreateTable = async (
  el: HTMLElement,
  event: CustomEvent
) => {
  const dialog = event?.detail?.dialogCreateTable
  const envFile = await workbench.readFile('./.env.development')

  await dialog({
    tableCreated: async (tableInfo: {
      schema: string
      name: string
      migration: boolean
    }) => {
      showUserFeedback({ type: 'CREATE_TABLE_INFO' })
      fetchHasuraQuery(
        createTable(tableInfo),
        'create_table_' + tableInfo.name,
        tableInfo.migration,
        envFile
      )
        .then(handleErrors)
        .then(() => {
          fetchHasuraMetadata(
            trackTable({ name: tableInfo.name, schema: tableInfo.schema }),
            'track_table_' + tableInfo.name,
            tableInfo.migration,
            envFile
          )
            .then(handleErrors)
            .then(() => {
              createPermissions(
                { name: tableInfo.name, schema: tableInfo.schema },
                tableInfo.migration,
                envFile
              ).then(() => loadNewIntrospection(el))
            })
            .catch((res) => console.log(res))
        })
        .catch(() => showUserFeedback({ type: 'CREATE_TABLE_ERROR' }))
    },
  })
}

export const handleAddColumn = async (el: HTMLElement, event: CustomEvent) => {
  const dialog = event?.detail?.dialogAddNewColum
  const envFile = await workbench.readFile('./.env.development')

  await dialog({
    columnAdded: async (e: ColumnProps) => {
      addNewColumn(el, e, envFile)
    },
  })
}

export const handleViewERD = async (event: CustomEvent) => {
  const dialog = event?.detail?.dialogViewERD
  const introspection = JSON.parse(JSON.stringify(workbench.introspection))
  let tablesInfo: Array<Array<string>>
  let constraintInfo: Array<Array<string>>
  let error: boolean = false
  const envFile = await workbench.readFile('./.env.development')

  showUserFeedback({ type: 'ERD_VIEW_INFO' })

  await fetchHasuraQuery(getTablesInfo(), 'get_tables_info', false, envFile)
    .then(handleErrors)
    .then((res) => {
      tablesInfo = res.result
    })
    .catch(() => {
      error = true
    })

  await fetchHasuraQuery(
    getConstraintInfo(),
    'get_constraints_info',
    false,
    envFile
  )
    .then(handleErrors)
    .then((res) => {
      constraintInfo = res.result
    })
    .catch(() => {
      error = true
    })

  if (error || !introspection) {
    showUserFeedback({ type: 'LOAD_INTROSPECTION_ERROR' })
  }

  let sqlData: SQLData = generateSQLData(
    introspection,
    tablesInfo,
    constraintInfo
  )

  await dialog({
    data: createVuerdTemplate(sqlData),
  })
}

const getSourceOfTable = (el: HTMLElement, window: Window) => {
  let currElement = el

  while (currElement.parentElement) {
    if (currElement.classList.contains('MuiDataGrid-root')) {
      return getSourceFromElement(currElement)
    }
    currElement = currElement.parentElement
  }
}

const isDataGridCell = (el: HTMLElement) =>
  el.classList.contains('MuiDataGrid-columnHeaderTitleContainer') ||
  isColumnTitle(el)

const isFormInput = (el: HTMLElement) =>
  el.classList.contains('MuiTextField-root') ||
  el.classList.contains('MuiInput-input') ||
  el.classList.contains('MuiInputBase-input')

const findFormattedMessageElementUp = (el: any) => {
  let foundedFormattedMessageElement = undefined
  if (el.tagName === 'SPAN' && el.dataset.messageId) {
    foundedFormattedMessageElement = el
  } else {
    const existParentFormattedMessage = (el: any) => {
      let depth = 5
      while (el.parentNode && depth--) {
        el = el.parentNode
        if (el.tagName === 'SPAN' && el.dataset.messageId) {
          foundedFormattedMessageElement = el
          break
        }
      }
    }
    existParentFormattedMessage(el)
  }
  return foundedFormattedMessageElement
}

const getFormattedMessageElement = (element: Element): Element => {
  let foundedFormattedMessageElement = undefined
  const findFormattedMessageElement = (el: any, depth: number): any => {
    if (el.tagName === 'SPAN' && el.dataset.messageId) {
      foundedFormattedMessageElement = el
      return el
    }
    if (depth === 0) {
      return el
    }
    el.childNodes.forEach((node) => {
      return findFormattedMessageElement(node, depth - 1)
    })
  }
  findFormattedMessageElement(element, 5)
  return (
    foundedFormattedMessageElement || findFormattedMessageElementUp(element)
  )
}

const addNewColumn = async (
  el: HTMLElement,
  columnProps: ColumnProps,
  envFile: string | undefined
) => {
  showUserFeedback({ type: 'ADD_COLUMN_INFO' })
  let promise = createColumn(columnProps, envFile)

  resolveForeignKey(columnProps, promise, envFile).then(() =>
    loadNewIntrospection(el)
  )
}

export async function loadNewIntrospection(el: HTMLElement) {
  const introspection = await loadIntrospection({ viewMessage: true })
  if (introspection) {
    workbench.setIntrospection(introspection)
    //@ts-ignore
    el.introspection = introspection
  }
}
