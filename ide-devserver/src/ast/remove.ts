import { encodeEmptyLines, printFormattedSourceFile } from './encode'
import { removeElementInAst, SourceLineCol } from '@iteria-app/generator'

export const removeElement = async (code: string, source: SourceLineCol) => {
  const encoded = encodeEmptyLines(code)
  const alteredAst = removeElementInAst(encoded, source)
  if (!alteredAst) return console.error('Unable to remove Element from AST')
  const newCode = await printFormattedSourceFile(alteredAst)
  return newCode
}
