//@ts-ignore
import untar from 'js-untar'
import pako from 'pako'

import { IFiles } from '../types'

const stripString = (str: string, char: string) =>
  str.startsWith(char) ? str.slice(1) : str

export const fetchProjectTar = async (repoUrl: string, injectMode: 'jamstack' | 'devServer') => {
  try {
    const normalizedRepoUrl = stripString(repoUrl, '/')
    const res = await fetch(`${normalizedRepoUrl}/Sources.tar.gz`)
    const arrayBuffer = await res.arrayBuffer()

    let inflated
    if (injectMode === 'jamstack') {
      inflated = new Uint8Array(arrayBuffer)
    } else {
      inflated = pako.inflate(new Uint8Array(arrayBuffer))
    }

    const untarred = await untar(inflated.buffer)
    const files: IFiles = {}
    var decoder = new TextDecoder('utf-8')
    untarred.forEach((f) => {
      if (!f.name.endsWith('/')) {
        const fileKey = stripString(f.name, '.')
        const decoded = decoder.decode(f.buffer)
        files[fileKey] = decoded
      }
    })

    return files
  } catch (err) {
    throw new Error(err)
  }
}
