import {
  getEntityNameFromFragmentDefinitionNode,
  getFragmentDefinition,
  isDocumentForDetailPage,
} from '@iteria-app/graphql-lowcode'
import { stringPrettyCapitalize } from '../formatting'

interface MenuItem {
  href: string
  title: string
  label: string
  icon: string
  codeHref: string
  codeIcon: string
}

export const calculateMenuItems = (graphqlGen: any, usersIcon: any, codeIcon: any) => {
  const items = new Map<String, MenuItem>()
  const detailDocuments = Object.values(graphqlGen).filter((node) =>
    isDocumentForDetailPage(node)
  )

  detailDocuments?.forEach((document) => {
    const fragmentDefinition = getFragmentDefinition(document)
    const entityName =
      getEntityNameFromFragmentDefinitionNode(fragmentDefinition)

    if (entityName) {
      items.set(entityName, {
        href: '/app/' + entityName,
        icon: usersIcon,
        label: 'menu.' + entityName,
        title: stringPrettyCapitalize(entityName),
        codeHref: '/test/' + entityName,
        codeIcon: codeIcon
      })
    }
  })

  return [...items.values()].sort((item1, item2) =>
    item1.title.localeCompare(item2.title)
  )
}
