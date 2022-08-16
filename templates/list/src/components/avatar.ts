const stringToColor = (s: string) => {
  let hash = 0
  let i = 0
  while (i < s.length) {
    hash = s.charCodeAt(i++) + ((hash << 5) - hash)
  }

  let color = '#'
  i = 0
  while (i < 3) {
    const value = (hash >> (i++ * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }

  return color
}

export const stringAvatar = (name: string) => {
  if (!name) return {}
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name?.split(' ')?.[0]?.[0] ?? ''}${
      name?.split(' ')?.[1]?.[0] ?? ''
    }`,
  }
}
