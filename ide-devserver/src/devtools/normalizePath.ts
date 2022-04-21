export const normalizePath = (path: string) => {
  if (!path?.startsWith('/src/') && path?.includes('src')) {
    const relativePath = path.split('/src/')?.[1] ?? path.split('src/')?.[1]
    return '/src/' + relativePath
  }

  return path
}
