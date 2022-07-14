import { NodeReplacementMatch } from './interface'

export const renameFileName = (): NodeReplacementMatch[] => [
  { match: /(.*)Entity(*.)/g, replace: 'yy' },
]
