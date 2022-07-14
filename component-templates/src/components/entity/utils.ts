import { getFragmentDefinition, isDocumentForDetailPage } from "@iteria-app/graphql-lowcode"
import { generateEntityValueObject } from "../../gql"
import { ASTNode, DocumentNode } from "graphql"
import { graphqlEntityFields } from "./DataProvider"


export const isRequired = (entityName: string, field: string, graphqlgen: any, introspection: any) => {
  const entityFields = graphqlEntityFields(
    getDetailEntityDocument(entityName, graphqlgen) as ASTNode,
    introspection.__schema
  )

  const found = entityFields.fields.find((f) => f.name === field)
  return found ? found.required ?? false : false
}

export const createEmptyObject = (entityName: string, graphqlgen: any, introspection: any) => {
  const entityFields = graphqlEntityFields(
    getDetailEntityDocument(entityName, graphqlgen) as ASTNode,
    introspection.__schema
  )
  const object =  generateEntityValueObject(entityFields!)
  const timeFormats = ['timestamptz','timestamp', 'datetime']
  const dateTimes = entityFields.fields.filter((f) => timeFormats.includes(f.type))
  dateTimes.forEach((dateTime) => {
    object[`${dateTime.name}`] = new Date().toISOString()
  })
  object.__typename = entityName

  return object
}

export const getDetailEntityDocument = (entityName: string, graphqlgen: any) => {
  const detailDocuments = Object.values(graphqlgen).filter((node) =>
    isDocumentForDetailPage(node as ASTNode)
  )
  const detailDocumentWithEntityName = detailDocuments.find((document) => {
    const fragmentDefinition = getFragmentDefinition(
      document as DocumentNode
    )
    if (fragmentDefinition?.typeCondition?.name?.value === entityName)
      return true
  }) as ASTNode

  return detailDocumentWithEntityName
}

export const lowerFirstLetter = (text: string): string => {
  return text.charAt(0).toLowerCase() + text.slice(1)
}