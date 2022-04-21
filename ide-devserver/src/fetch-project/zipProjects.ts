//@ts-ignore
import FileSaver from 'file-saver'
import JSZip from 'jszip'

import { IFiles } from '../types'

export const zipAndSaveProject = async (files: IFiles) => {
  const zip = new JSZip()
  for (const file in files) {
    zip.file(file, files[file])
  }
  const data = await zip.generateAsync({ type: 'blob' })
  FileSaver.saveAs(data, 'Sources.zip')
}
