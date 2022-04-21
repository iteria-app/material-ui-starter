import { createPrinter, SourceFile } from 'typescript'
import parserTypeScript from 'prettier/parser-typescript'

export const encodeEmptyLines = (code: string) =>
  code.replace(/\n\n/g, '\n/** THIS_IS_A_NEWLINE **/\n')

export const decodeEmptyLines = (code: string) =>
  code.replace(/\/\*\* THIS_IS_A_NEWLINE \*\*\//g, '')

export const printFormattedSourceFile = async (sourceFile: SourceFile) => {
  const printer = createPrinter()
  const code = printer.printFile(sourceFile)
  const decoded = decodeEmptyLines(code)
  const formattedCode = await formatCode(decoded)
  return formattedCode
}

const formatCode = async (code: string) => {
  const prettier = (
    await import(
      //@ts-ignore
      'https://unpkg.com/prettier@2.4.1/esm/standalone.mjs'
    )
  ).default
  const formattedCode = prettier.format(code, {
    parser: 'typescript',
    plugins: [parserTypeScript],
  })

  return formattedCode
}
