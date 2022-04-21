import {
  showErrorSnackbar,
  showSuccessSnackbar,
  showInfoSnackbar,
} from '@iteria-app/wysiwyg/dist/index.esm.js'

export type UserFeedbackError =
  | 'GENERATE_PAGE_ERROR'
  | 'CLONE_FIELD_ERROR'
  | 'CLONE_ELEMENT_ERROR'
  | 'REMOVE_ELEMENT_ERROR'
  | 'NAVIGATE_TO_SOURCE_CODE_ERROR'
  | 'CHANGE_GRAPHQL_ENDPOINT_ERROR'
  | 'LOCAL_MESSAGE_TRANSLATE_ERROR'
  | 'LOAD_INTROSPECTION_ERROR'
  | 'CHANGE_THEME_ERROR'
  | 'CREATE_TABLE_ERROR'
  | 'ADD_COLUMN_ERROR'
  | 'TRANSLATE_ELEMENT_ERROR'
  | 'REORDER_ELEMENT_ERROR'
export type UserFeedbackSuccess =
  | 'GENERATE_PAGE_SUCCESS'
  | 'CLONE_FIELD_SUCCESS'
  | 'CLONE_ELEMENT_SUCCESS'
  | 'REMOVE_ELEMENT_SUCCESS'
  | 'CHANGE_GRAPHQL_ENDPOINT_SUCESS'
  | 'LOCAL_MESSAGE_TRANSLATE_SUCESS'
  | 'LOAD_INTROSPECTION_SUCCESS'
  | 'REORDER_ELEMENT_SUCCESS'
  | 'CHANGE_THEME_SUCESS'
  | 'CREATE_TABLE_SUCCESS'
  | 'ADD_COLUMN_SUCCESS'
export type UserFeedbackInfo =
  | 'GENERATE_PAGE_INFO'
  | 'CLONE_FIELD_INFO'
  | 'CHANGE_GRAPHQL_ENDPOINT'
  | 'REORDER_ELEMENT_INFO'
  | 'CHANGE_THEME'
  | 'CREATE_TABLE_INFO'
  | 'ADD_COLUMN_INFO'
  | 'LOCAL_MESSAGE_TRANSLATE_INFO'
  | 'ERD_VIEW_INFO'
export type UserFeedbackType =
  | UserFeedbackError
  | UserFeedbackSuccess
  | UserFeedbackInfo

export interface UserFeedback {
  type: UserFeedbackType
  payload?: any
}

const isUserFeedbackError = (type: string): type is UserFeedbackError =>
  type === 'GENERATE_PAGE_ERROR' ||
  type === 'CLONE_FIELD_ERROR' ||
  type === 'CLONE_ELEMENT_ERROR' ||
  type === 'REMOVE_ELEMENT_ERROR' ||
  type === 'NAVIGATE_TO_SOURCE_CODE_ERROR' ||
  type === 'CHANGE_GRAPHQL_ENDPOINT_ERROR' ||
  type === 'LOAD_INTROSPECTION_ERROR' ||
  type === 'REORDER_ELEMENT_ERROR' ||
  type === 'TRANSLATE_ELEMENT_ERROR' ||
  type === 'CHANGE_THEME_ERROR' ||
  type === 'CREATE_TABLE_ERROR' ||
  type === 'ADD_COLUMN_ERROR' ||
  type === 'LOCAL_MESSAGE_TRANSLATE_ERROR' ||
  type === 'LOAD_INTROSPECTION_ERROR'

const isUserFeedbackSuccess = (type: string): type is UserFeedbackSuccess =>
  type === 'GENERATE_PAGE_SUCCESS' ||
  type === 'CLONE_FIELD_SUCCESS' ||
  type === 'CLONE_ELEMENT_SUCCESS' ||
  type === 'REMOVE_ELEMENT_SUCCESS' ||
  type === 'CHANGE_GRAPHQL_ENDPOINT_SUCESS' ||
  type === 'REORDER_ELEMENT_SUCESS' ||
  type === 'CHANGE_THEME_SUCESS' ||
  type === 'CREATE_TABLE_SUCCESS' ||
  type === 'ADD_COLUMN_SUCCESS' ||
  type === 'LOCAL_MESSAGE_TRANSLATE_SUCESS' ||
  type === 'LOAD_INTROSPECTION_SUCCESS'

const isUserFeedbackInfo = (type: string): type is UserFeedbackInfo =>
  type === 'GENERATE_PAGE_INFO' ||
  type === 'CLONE_FIELD_INFO' ||
  type === 'REORDER_ELEMENT_INFO' ||
  type === 'CREATE_TABLE_INFO' ||
  type === 'ADD_COLUMN_INFO' ||
  type === 'LOCAL_MESSAGE_TRANSLATE_INFO' ||
  type === 'ERD_VIEW_INFO'

export const showUserFeedback = (feedback: UserFeedback) => {
  if (isUserFeedbackSuccess(feedback.type)) showSuccess(feedback)
  if (isUserFeedbackError(feedback.type)) showError(feedback)
  if (isUserFeedbackInfo(feedback.type)) showInfo(feedback)
}

const showSuccess = (feedback: UserFeedback) => {
  switch (feedback.type) {
    case 'GENERATE_PAGE_SUCCESS':
      const entityName = feedback.payload.entity
      showSuccessSnackbar(`New page generated at /app/${entityName}`)
      break
    case 'CLONE_FIELD_SUCCESS':
      showSuccessSnackbar('Field added successfully.')
      break
    case 'CLONE_ELEMENT_SUCCESS':
      showSuccessSnackbar('Element cloned successfully.')
      break
    case 'REMOVE_ELEMENT_SUCCESS':
      showSuccessSnackbar('Element removed successfully.')
      break
    case 'CHANGE_GRAPHQL_ENDPOINT_SUCESS':
      showSuccessSnackbar('GraphQL endpoint changed successfully.')
      break
    case 'LOAD_INTROSPECTION_SUCCESS':
      showSuccessSnackbar('Introspection schema loaded successfully.')
      break
    case 'REORDER_ELEMENT_SUCCESS':
      showSuccessSnackbar('Element was moved successfully.')
    case 'CHANGE_THEME_SUCESS':
      showSuccessSnackbar('Theme changed successfully.')
      break
    case 'CREATE_TABLE_SUCCESS':
      showSuccessSnackbar('Table created successfully.')
      break
    case 'ADD_COLUMN_SUCCESS':
      showSuccessSnackbar('New Column added successfully.')
      break
    case 'LOCAL_MESSAGE_TRANSLATE_SUCESS':
      showSuccessSnackbar('Element was successfully translated.')
      break
    default:
      throw new Error(`Unhandled succes type: ${feedback.type}`)
  }
}

const showError = (feedback: UserFeedback) => {
  switch (feedback.type) {
    case 'GENERATE_PAGE_ERROR':
      showErrorSnackbar(
        'Error while generating page. Check console for error and stacktrace.'
      )
      break
    case 'CLONE_FIELD_ERROR':
      showErrorSnackbar(
        'Error while generating page.Check console for error and stacktrace.'
      )
      break
    case 'CLONE_ELEMENT_ERROR':
      showErrorSnackbar(
        'Error while cloning element. Check console for error and stacktrace.'
      )
      break
    case 'REMOVE_ELEMENT_ERROR':
      showErrorSnackbar(
        'Error while removing element. Check console for error and stacktrace.'
      )
      break
    case 'NAVIGATE_TO_SOURCE_CODE_ERROR':
      showErrorSnackbar(
        'Error while navigating to code. Check console for error and stacktrace.'
      )
    case 'CHANGE_GRAPHQL_ENDPOINT_ERROR':
      showErrorSnackbar(
        'Error when changing GraphQL endpoint. Check console for error and stacktrace.'
      )
      break
    case 'LOCAL_MESSAGE_TRANSLATE_ERROR':
      showErrorSnackbar('Error with saving translation')
      break
    case 'LOAD_INTROSPECTION_ERROR':
      showErrorSnackbar(
        'Error while loading Introspection schema. Check console for error and stacktrace.'
      )
      break
    case 'CHANGE_THEME_ERROR':
      showErrorSnackbar(
        'Error while changing theme. Check console for error and stacktrace.'
      )
    case 'CREATE_TABLE_ERROR':
      showErrorSnackbar(
        'Error while creating table. Check console for error and stacktrace.'
      )
      break
    case 'ADD_COLUMN_ERROR':
      showErrorSnackbar(
        'Error while adding new column. Check console for error and stacktrace.'
      )
      break
    case 'TRANSLATE_ELEMENT_ERROR':
      showErrorSnackbar(
        'Error while translating element. Check console for error and stacktrace.'
      )
      break
    case 'REORDER_ELEMENT_ERROR':
      showErrorSnackbar(
        'Error while moving element. Check console for error and stacktrace.'
      )
      break
    default:
      throw new Error(`Unhandled error type: ${feedback.type}`)
  }
}

const showInfo = (feedback: UserFeedback) => {
  switch (feedback.type) {
    case 'GENERATE_PAGE_INFO':
      const entityName = feedback.payload.entity
      showInfoSnackbar(`Generating new page at /app/${entityName}`)
      break
    case 'CLONE_FIELD_INFO':
      showInfoSnackbar('Adding field')
      break
    case 'REORDER_ELEMENT_INFO':
      showInfoSnackbar('Moving element to position')
    case 'CREATE_TABLE_INFO':
      showInfoSnackbar('Creating table')
      break
    case 'ADD_COLUMN_INFO':
      showInfoSnackbar('Adding new column')
      break
    case 'LOCAL_MESSAGE_TRANSLATE_INFO':
      showInfoSnackbar('Translating element')
      break
    case 'ERD_VIEW_INFO':
      showInfoSnackbar('Loading Entity-Relationship Diagram')
      break
    default:
      throw new Error(`Unhandled info type: ${feedback.type}`)
  }
}
