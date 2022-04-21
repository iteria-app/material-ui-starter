import {
  SourceLineCol,
  astFindSource,
  reorderElementsInAst,
} from '@iteria-app/generator'
import ts from 'typescript'
import { encodeEmptyLines, printFormattedSourceFile } from './encode'

export const reorderElement = async (
  code: string,
  data: {
    fileName: string
    elementsPosEnd: SourceLineCol
    chained_changes: [{ prevIndex: number; newIndex: number }]
  }
) => {
  // Encode empty lines as comment so ts-compiler won't remove them
  const encoded = encodeEmptyLines(code)

  Object.keys(data.elementsPosEnd).forEach((key) => {
    const { pos, end } = astFindSource(encoded, data.elementsPosEnd[key])
    data.elementsPosEnd[key] = { pos, end }
  })

  const alteredAst = reorderElementsInAst(encoded, data as any)
  if (!alteredAst) return console.error('Unable to remove Element from AST')
  const newCode = await printFormattedSourceFile(alteredAst as ts.SourceFile)
  return newCode
}
