import React from 'react'
import { EntityListPage } from './entity/EntityListPage'
import { EntityDetailContainer } from './entity/EntityDetailContainer'
import {
  getEntityNameFromFragmentDefinitionNode,
  getFragmentDefinition,
  isDocumentForDetailPage,
  isDocumentForListPage,
} from '@iteria-app/graphql-lowcode'

export const generatePagesRoutes = (graphqlGen: any) => {
  const routes = Object.values(graphqlGen)
    .map((node: any) => {
      if (isDocumentForDetailPage(node)) {
        const fragmentDefinition = getFragmentDefinition(node)
        const entityName =
          getEntityNameFromFragmentDefinitionNode(fragmentDefinition)
        if (entityName) {
          return {
            path: `${entityName}/:id/`,
            element: <EntityDetailContainer entity={entityName} />,
          }
        }
      } else if (isDocumentForListPage(node)) {
        const fragmentDefinition = getFragmentDefinition(node)
        const entityName =
          getEntityNameFromFragmentDefinitionNode(fragmentDefinition)
        if (entityName) {
          return {
            path: `${entityName}`,
            element: <EntityListPage entity={entityName} />,
          }
        }
      }
    })
    .filter(Boolean)
  return routes
}
