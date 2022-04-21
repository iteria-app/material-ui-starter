import { CodeDir, CodeRW } from '@iteria-app/generator'
import { FrontendActions } from '../messaging/actions'

const defaultTheme = {
  primary: '#3f51b5',
  secondary: '#9c27b0',
  error: '#d32f2f',
  warning: '#ed6c02',
  info: '#0288d1',
  success: '#2e7d32',
  background: '#ffffff',
  divider: 'rgba(0, 0, 0, 0.12)',
}

const createThemeFile = async (
  file: string,
  frontendActions: FrontendActions
) => {
  frontendActions.fileWrite(file, JSON.stringify(defaultTheme, undefined, 2))
}

export const getTheme = async (
  path: string,
  fileName: string = 'colors',
  io: CodeRW & CodeDir,
  frontendActions: FrontendActions
) => {
  if (path) {
    const file = ((await io.readDirectory(path)) as any).find(
      (dir) => dir?.fileName === fileName + '.json'
    )

    if (!file) {
      createThemeFile(path + '/' + fileName + '.json', frontendActions)
    }

    const theme = await io.readFile(file?.filePath)

    if (!theme) {
      console.log('Theme does not exist, creating...') // TODO: showSnackbar

      return null
    }

    return { file: file.filePath, [fileName]: JSON.parse(theme) }
  }

  return null
}
