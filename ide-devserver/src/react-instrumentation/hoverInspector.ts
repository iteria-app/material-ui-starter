import { SourceLineCol, startOfJsxIdentifier } from '@iteria-app/generator'
import { getSourceFromElement } from '../devtools/source'
import { DevWorkbench } from '../workbench/Workbench'

export class HoverInspector {
  constructor(workbench: DevWorkbench) {
    this.workbench = workbench
  }

  private workbench: DevWorkbench
  private cachedSource: SourceLineCol
  private cachedFileContent: string

  async getComponentName(el: HTMLElement) {
    const source = getSourceFromElement(el)
    if (!source) return

    const fileContent = await this.getCachedFileContent(source)
    if (!fileContent) return console.warn('File not found')

    const tooltipText = this.getParsedTagRegxp(fileContent, source)
    return tooltipText
  }

  async getCachedFileContent(source: SourceLineCol) {
    if (!this.cachedSource) this.cachedSource = source

    if (
      !this.cachedFileContent ||
      source.fileName !== this.cachedSource.fileName
    ) {
      const fileContent = await this.workbench.readFile(source.fileName)
      this.cachedFileContent = fileContent
      this.cachedSource = source
    }

    return this.cachedFileContent
  }

  // Parse tag from file at speciffic position, using Regexp,
  // faster but less accurate version without using AST
  getParsedTagRegxp(fileContent: string, source: SourceLineCol) {
    const startOfJsxTag = startOfJsxIdentifier(fileContent, source)
    if (fileContent.charAt(startOfJsxTag - 1) === '<') {
      return fileContent?.substring(startOfJsxTag)?.match(/\w+/)?.pop()
    }
  }
}
