import ts from 'typescript'
import { encodeEmptyLines, printFormattedSourceFile } from './encode'
import {
  SourceLineCol,
  cloneElementInAst,
  cloneAndRenameElementInAst,
} from '@iteria-app/generator'

export const cloneElement = async (code: string, source: SourceLineCol) => {
  // Encode empty lines as comment so ts-compiler won't remove them
  const encoded = encodeEmptyLines(code)
  const alteredAst = cloneElementInAst(encoded, source)
  if (!alteredAst) return console.error('Unable to clone Element in AST')

  const newCode = await printFormattedSourceFile(alteredAst as ts.SourceFile)
  return newCode
}

export const cloneAndRenameElement = async (
  code: string,
  source: SourceLineCol,
  oldField: string,
  newField: string
) => {
  const encoded = encodeEmptyLines(code)
  const alteredAst = cloneAndRenameElementInAst(
    encoded,
    source,
    oldField,
    newField
  )
  if (!alteredAst) return console.error('Unable to clone Element in AST')

  const newCode = await printFormattedSourceFile(alteredAst as ts.SourceFile)

  return newCode
}
