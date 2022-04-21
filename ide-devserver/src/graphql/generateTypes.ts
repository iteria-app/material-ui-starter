import { load } from 'js-yaml'
import { codegen } from '@graphql-codegen/core'
import { parse } from 'graphql'
import hrtime from 'browser-process-hrtime'
import { DocumentNodeLocation } from './generateGraphqlTypesFile'
import { frontendActions } from '..'

interface GenerateProps {
  config: string
  generatedSchema: string
  documents: DocumentNodeLocation[] | undefined
}
interface ConfigI {
  generates: [string, any][any]
}
interface HRTime {
  (time?: [number, number]): [number, number]
  bigint(): bigint
}

function setupConfig(generates: ConfigI) {
  let options = []
  for (const [filename, outputOptions] of Object.entries(generates) as [
    string,
    any
  ][any]) {
    options.push({
      filename: filename,
      config: outputOptions?.config,
    })
  }
  return options[0]
}
export async function generateTypes({
  config,
  generatedSchema,
  documents,
}: GenerateProps) {
  process.hrtime = hrtime as HRTime
  const typescriptPlugin = await import('@graphql-codegen/typescript')
  const operationsPlugin = await import(
    '@graphql-codegen/typescript-operations'
  )
  const urqlPlugin = await import('@graphql-codegen/typescript-urql')

  try {
    const cleanTabs = config.replace(/\t/g, '  ')
    const { generates } = load(cleanTabs) as ConfigI

    const runConfigurations = []
    let output = ''

    const options = setupConfig(generates)
    const plugins = [
      { typescript: {} },
      { 'typescript-operations': {} },
      { 'typescript-urql': {} },
    ]

    const pluginMap = {
      typescript: typescriptPlugin,
      'typescript-operations': operationsPlugin,
      'typescript-urql': urqlPlugin,
    }

    if (generatedSchema !== '') {
      runConfigurations.push({
        filename: options?.filename,
        plugins,
        schema: parse(generatedSchema),
        documents: documents,
        config: options?.config,
        pluginMap,
      })
      output = await codegen(runConfigurations[0] as any)
    }
    return output
  } catch (e) {
    // tslint:disable-next-line: no-console
    console.error(e.message)
    frontendActions.transpileError(e)
  }
}
