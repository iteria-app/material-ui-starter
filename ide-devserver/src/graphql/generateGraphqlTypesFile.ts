import {
  buildClientSchema,
  DocumentNode,
  getIntrospectionQuery,
  parse,
  printSchema,
} from 'graphql'
import { load } from 'js-yaml'
import { generateTypes } from './generateTypes'
import { CONFIG_PATH } from '../util/constants'
import { CodeRW } from '@iteria-app/react-lowcode/esm/io'
import { frontendActions } from '..'
import { IFiles } from '../types'
export interface ConfigProps {
  schema: string
  generates: string
}

export interface DocumentNodeLocation {
  location: string
  document: DocumentNode
}

async function fetchGraphqlSchema(schema: string) {
  try {
    const response = await fetch(`${schema}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        variables: {},
        query: getIntrospectionQuery(),
      }),
    })
    const { data } = await response.json()
    const buildSchema = buildClientSchema(data)
    const generatedSchema = printSchema(buildSchema)

    return generatedSchema
  } catch (e) {
    console.error(e)
    frontendActions.transpileError(e)
  }
}

export async function generateGraphqlTypesFile(
  graphqlEndpoint: string,
  config: string,
  documents: DocumentNodeLocation[] | undefined
) {
  const generatedSchema = (await fetchGraphqlSchema(graphqlEndpoint)) || ''
  const result = await generateTypes({
    config,
    generatedSchema,
    documents,
  })

  return result
}

export async function loadGraphqlCodegenConfig(io: CodeRW) {
  const config = (await io.readFile(CONFIG_PATH)) ?? ''
  return load(config) as ConfigProps
}

export async function getURLFromConfig(io: CodeRW) {
  const { schema } = await loadGraphqlCodegenConfig(io)
  return schema
}

export async function fetchGraphqlIntrospectionSchema(schema: string) {
  try {
    const response = await fetch(`${schema}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        variables: {},
        query: getIntrospectionQuery(),
      }),
    })
    const { data } = await response.json()
    return data.__schema // FIXME hardcoded !!!
  } catch (e) {
    console.log(e)
    frontendActions.transpileError(e)
  }
}

export async function getGeneratesFileSourceFromConfig(io: CodeRW) {
  const { generates } = await loadGraphqlCodegenConfig(io)
  const genFiles = Object.keys(generates ?? {})
  if (genFiles?.length > 0) {
    return io.readFile(genFiles[0])
  }
}

export async function getGeneratesFileNameFromConfig(io: CodeRW) {
  const { generates } = await loadGraphqlCodegenConfig(io)
  const genFiles = Object.keys(generates ?? {})
  if (genFiles?.length > 0) {
    return genFiles[0]
  }
}
export function findGraphQlFiles(
  files: IFiles,
  editedDocumentData: string,
  currentDocumentPath: string
) {
  const documents: DocumentNodeLocation[] = []
  try {
    for (const filePath in files) {
      if (filePath.endsWith('.graphql')) {
        const changedFile =
          currentDocumentPath === filePath
            ? editedDocumentData
            : files[filePath]
        documents.push({ location: filePath, document: parse(changedFile) })
      }
    }

    return documents
  } catch (e) {
    console.error(e)
    frontendActions.transpileError(e)
  }
}

interface GraphqlCodeGenerator {
  workbench: CodeRW
  files: IFiles
  data?: string
  path?: string
}

export async function graphqlCodegen({
  workbench,
  files,
  data,
  path,
}: GraphqlCodeGenerator) {
  const editedDocumentData = data ?? ''
  const editedDocumentPath = path ?? ''
  const documents = findGraphQlFiles(
    files,
    editedDocumentData,
    editedDocumentPath
  )

  const config = await workbench.readFile(CONFIG_PATH)
  const generated = (await generateGraphqlTypesFile(workbench.graphQLEndpoint, config, documents)) ?? ''
  const generatedFilePath =
    (await getGeneratesFileNameFromConfig(workbench)) ?? ''
  // workbench.writeFile(generatedFilePath, generated)
  return { generatedFilePath, generated }
}
