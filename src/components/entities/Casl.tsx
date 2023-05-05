import { createContext } from 'react'
import { defineAbility } from '@casl/ability'
import { useAbility } from '@casl/react'
interface ObjectWithType {
  __typename?: string // graphql typename
}
export const detectSubjectType = (object: ObjectWithType) => {
  return object.__typename ?? object.constructor.name
}
const defaultAbility = defineAbility((can, cannot) => {}, { detectSubjectType })
export const AbilityContext = createContext(defaultAbility)
export const useAbilityContext = () => useAbility(AbilityContext)
