import fs from 'fs'
import path from 'path'
import { IncomingMessage, ServerResponse } from 'http'

export const checkExtension = (path: string, extensions: string[]): boolean => {
  if (extensions.length > 0) {
    for (const ext of extensions) {
      if (path.endsWith(ext)) {
        return true
      }
    }
    return false
  }

  return true
}

export const getAllFiles = (
  dirPath: string,
  extensions: string[],
  depth = 1
): string[] => {
  console.log('getAllFiles', dirPath, depth)
  if (depth === 0) {
    return []
  }

  const dirFiles = fs.readdirSync(dirPath)
  let ret: string[] = []
  for (const file of dirFiles) {
    const filePath = path.join(dirPath, '/', file)
    if (fs.statSync(filePath).isDirectory()) {
      ret = [...ret, ...getAllFiles(filePath, extensions, depth - 1)]
    } else if (checkExtension(file, extensions)) {
      ret = [...ret, filePath]
    }
  }

  return ret
}

export const httpReadFile = (
  req: IncomingMessage,
  res: ServerResponse
): void => {
  let body = ''
  let filePath = ''
  req.on('readable', function () {
    const chunk = req.read()
    if (chunk !== null) {
      body += chunk
    }
  })
  req.on('end', function () {
    filePath = JSON.parse(body).path
    if (filePath) {
      if (!fs.existsSync(filePath)) {
        res.statusCode = 404
        // TODO res.setHeader(content type application/json)
        res.end(JSON.stringify({ message: 'File does not exists' }))
      } else {
        fs.readFile(filePath, (err, data) => {
          if (err) {
            res.statusCode = 500
            res.end(err)
          } else {
            res.write(data)
            res.end()
          }
        })
      }
    }
  })
}

export const httpWriteFile = (
  req: IncomingMessage,
  res: ServerResponse
): void => {
  let body = ''
  let filePath = ''
  req.on('readable', function () {
    const chunk = req.read()
    if (chunk !== null) {
      body += chunk
    }
  })
  req.on('end', function () {
    const bodyData = JSON.parse(body)
    filePath = bodyData.path
    const data = bodyData.data
    if (filePath) {
      let dir = filePath.substring(0, filePath.lastIndexOf('/'))
      if (dir === '') dir = filePath.substring(0, filePath.lastIndexOf('\\'))
      fs.mkdirSync(dir, { recursive: true })
      const file = fs.createWriteStream(filePath)
      file.write(data)
      res.end(JSON.stringify({ message: 'Success' }))
    } else {
      res.end(JSON.stringify({ message: 'Missing file path' }))
    }
  })
}

export const httpDeleteFile = (
  req: IncomingMessage,
  res: ServerResponse
): void => {
  let body = ''
  let filePath = ''
  req.on('readable', function () {
    const chunk = req.read()
    if (chunk !== null) {
      body += chunk
    }
  })
  req.on('end', function () {
    const bodyData = JSON.parse(body)
    filePath = bodyData.path
    if (filePath) {
      fs.access(filePath, fs.constants.R_OK, (err) => {
        if (err) {
          res.end(JSON.stringify({ message: 'File path does not exists' }))
          return
        }
        fs.unlink(filePath, (err) => {
          if (err) {
            res.end(
              JSON.stringify({ message: 'There was problem to delete file' })
            )
            return
          }
          res.end(JSON.stringify({ message: 'File was successfully deleted' }))
        })
      })
    }
  })
}

export const httpReadDir = (
  req: IncomingMessage,
  res: ServerResponse
): void => {
  let body = ''
  let filePath = ''
  req.on('readable', function () {
    const chunk = req.read()
    if (chunk !== null) {
      body += chunk
    }
  })
  req.on('end', function () {
    filePath = JSON.parse(body).path
    const dirPath = filePath
    if (dirPath) {
      const files = getAllFiles(dirPath, [], 1)
      console.log(files)
      res.end(JSON.stringify(files))
    }
  })
}
