import { ASTNode, DocumentNode, FieldNode, visit } from 'graphql'
import { IFilterProps, Entity } from '@iteria-app/component-templates-api'
import { generateEntityValueObject } from '../../gql/entity/helper'
import {
  getNestedOfType,
  getUpsertQuery,
  getFragmentDefinition,
  isListField,
  isDocumentForDetailPage,
  isDocumentForListPage,
  IntrospectionQuery,
  TypesObject,
} from '@iteria-app/graphql-lowcode'
import ts from 'typescript'

enum PageType {
  LIST,
  DETAIL,
}

export class GraphqlcodegenDataProvider {
  getDetailEntityDocument: (entityName: string) => ASTNode | undefined
  getListEntityDocument: (entityName: string) => ASTNode
  getQueryHook: (entityName: string, page: PageType) => any | undefined
  listPageQueryName: (entityName: string) => string | undefined
  detailPageQueryName: (entityName: string) => string | undefined
  entityUpsertMutation: (entityName: string) => any
  capitalize: (name: string) => string
  intro: IntrospectionQuery
  graphqlgen: (ASTNode | ts.Node)[]
  constructor(graphqlgen: any, intro: IntrospectionQuery) {
    this.intro = intro
    this.graphqlgen = graphqlgen as ASTNode[]

    //Returns document for detail page
    this.getDetailEntityDocument = (entityName: string) => {
      const detailDocuments = Object.values(this.graphqlgen).filter((node) =>
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

    //Returns document for list page
    this.getListEntityDocument = (entityName: string) => {
      const detailDocuments = Object.values(this.graphqlgen).filter((node) =>
        isDocumentForListPage(node as ASTNode)
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

    this.capitalize = (name: string) => {
      return name.charAt(0).toUpperCase() + name.slice(1)
    }

    this.getQueryHook = (entityName: string, page: PageType) => {
      let pageQueryName: string | undefined

      if (page === PageType.LIST)
        pageQueryName = this.listPageQueryName(entityName)

      if (page === PageType.DETAIL)
        pageQueryName = this.detailPageQueryName(entityName)

      if (!pageQueryName)
        return {
          error: {
            name: 'Introspection error',
            message: `Table ${entityName} not found in introspection.json`,
          },
        }

      const formattedQueryName = pageQueryName
        .split('_')
        .map((string) => this.capitalize(string))
        .join('_')

      const queryHookName = `use${formattedQueryName}Query`
      const queryByPkHookName = `use${formattedQueryName}_By_PkQuery`

      const queryHookByPk =
        page === PageType.DETAIL ? graphqlgen[queryByPkHookName] : undefined
      const queryHook = graphqlgen[queryHookName]

      return (
        queryHookByPk ??
        queryHook ?? {
          error: {
            name: 'Introspection error',
            message: `Query ${queryHookName} or ${queryByPkHookName} not found in graphgl.ts`,
          },
        }
      )
    }
    this.detailPageQueryName = (entityName: string) => {
      const queryRoot = this.intro.types.find(
        (type) => type.name === this.intro.queryType?.name
      )
      const queriesReturningEntity = queryRoot?.fields?.filter(
        (field) => getNestedOfType(field).name === entityName
      )
      const detailPageQuery = queriesReturningEntity?.find((query) =>
        query.args.some((arg) => arg.name === 'id')
      )

      if (!detailPageQuery) return
      return detailPageQuery.name
    }
    this.listPageQueryName = (entityName: string) => {
      const queryRoot = this.intro.types.find(
        (type) => type.name === this.intro.queryType?.name
      )

      const queriesReturningEntity = queryRoot?.fields?.filter(
        (field) => getNestedOfType(field).name === entityName
      )
      const listPageQueryName = queriesReturningEntity?.find((query) =>
        query.args.some((arg) => arg.name === 'where')
      )

      if (!listPageQueryName) return
      return listPageQueryName.name
    }
    this.entityUpsertMutation = (entityName: string) => {
      const mutationName = Object.keys(graphqlgen).find(
        (key) =>
          key.toUpperCase() ===
          `useInsert_${this.capitalize(entityName)}Mutation`.toUpperCase() ||
          key.toUpperCase() ===
          `useInsert${this.capitalize(entityName)}Mutation`.toUpperCase()
      )
      if (mutationName) return graphqlgen[mutationName]
    }
  }
  getMany = (entityName: string, filterProps: IFilterProps) => {
    const queryHook = this.getQueryHook(entityName, PageType.LIST)
    if (typeof queryHook != 'function') return queryHook

    const [result] = queryHook({
      variables: {
        where: filterProps.filter,
        limit: filterProps.pageSize + filterProps.pageSize,
        offset: filterProps.offset,
        order_by: filterProps.sort,
      },
    })

    const entityFields = graphqlEntityFields(
      this.getListEntityDocument(entityName),
      this.intro
    )

    const listPageQueryName = this.listPageQueryName(entityName) ?? entityName

    return {
      data: result.data?.[listPageQueryName] ?? [],
      fetching: result.fetching,
      error: result.error,
      entityFields,
    }
  }

  getOne = (entityName: string, options: any) => {
    const creating = options.variables?.id === 'create'

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [result] = this.getQueryHook(
      entityName,
      PageType.DETAIL
    )({
      ...options,
      pause: creating,
    })

    const entityFields = graphqlEntityFields(
      this.getDetailEntityDocument(entityName) as ASTNode,
      this.intro
    )

    if (entityFields) {
      entityFields.name = entityName
    }

    const setDisabledNestedObjects = (
      entityFields: Entity,
      disabled: boolean
    ) => {
      entityFields.fields.map((field) => {
        field.disabled = disabled
        if (field.type === 'object' && field?.entityFields) {
          setDisabledNestedObjects(field.entityFields, true)
        }
        if (field.type === 'array' && field?.entityFields)
          setDisabledNestedObjects(field.entityFields, disabled)
      })
    }

    setDisabledNestedObjects(entityFields, false)

    const detailPageQueryName =
      this.detailPageQueryName(entityName) ?? entityName

    return {
      data: creating
        ? generateEntityValueObject(entityFields!)
        : result.data?.[detailPageQueryName] ?? {},
      fetching: result.fetching,
      error: result.error,
      entityFields,
    }
  }

  upsert = (entityName: string) => {
    if (this.entityUpsertMutation(entityName)) {
      const [, save] = this.entityUpsertMutation(entityName)()
      return {
        execute: (entityValue: object) => {
          const options = getUpsertQuery(entityValue, this.graphqlgen)
          return save(options)
        },
      }
    }
  }

  isReadOnly = (entityName: string) => {
    if (this.entityUpsertMutation(entityName)) return true
    else return false
  }
}

export const graphqlEntityFields = (
  queryAST: ASTNode,
  introspection: IntrospectionQuery
) => {
  const objectTypes = introspectionObjectTypesMap(introspection)
  const queryRootName = introspection?.queryType?.name ?? 'query_root'
  const fragments = fragmentsEntityFields(queryAST, objectTypes)
  const operations = operationsEntityFields(
    queryAST,
    objectTypes,
    queryRootName,
    fragments
  )

  return operations?.[0]?.fields?.[0]?.entityFields
}

const introspectionObjectTypesMap = (introspection: IntrospectionQuery) => {
  return introspection.types
    .filter((objectType) => objectType.kind === 'OBJECT' || objectType.kind === 'ENUM')
    .reduce((ret, objectType) => {
      ret[objectType.name] = objectType
      return ret
    }, {} as ObjectTypesMap)
}

type Fragments = { [fragmentName: string]: Entity }

type ObjectTypesMap = { [fragmentName: string]: TypesObject }

class Hierarchy {
  parent?: { from: TypesObject; to: Entity }
  ancestors: { from: TypesObject; to: Entity }[] = []
  objectTypes: ObjectTypesMap

  constructor(parentEntityName: string, objectTypes: ObjectTypesMap) {
    this.parent = {
      from: objectTypes[parentEntityName],
      to: { name: parentEntityName, fields: [] },
    }
    this.objectTypes = objectTypes
  }

  enterField(node: FieldNode) {
    const name = node.name.value

    const introField = this.parent?.from?.fields?.find(
      (introField) => introField.name == name
    )

    if (introField && this.parent) {
      if (node.selectionSet) {
        const type = isListField(introField) ? 'array' : 'object'
        const newEntity: Entity = { name, fields: [] }
        this?.parent?.to?.fields?.push({ name, type, entityFields: newEntity })
        this.ancestors.push(this.parent)
        const introFieldType = getNestedOfType(introField)
        if (introFieldType?.name) {
          const objectType = this.objectTypes[introFieldType.name]
          this.parent = { from: objectType, to: newEntity }
        }
      } else {
        const introFieldType = getNestedOfType(introField)
        this.parent?.to?.fields?.push({
          name,
          type: introFieldType.name ?? 'String',
          //@ts-ignore
          required: introField?.type?.kind === 'NON_NULL',
        })
      }
    }
  }

  leaveField(node: FieldNode) {
    if (node.selectionSet) {
      this.parent = this.ancestors.pop()
    }
  }
}

const fragmentsEntityFields = (
  queryAST: ASTNode,
  objectTypes: ObjectTypesMap
): Fragments => {
  let hierarchy: Hierarchy | undefined
  const fragments: Fragments = {}

  visit(queryAST, {
    enter: {
      FragmentDefinition(node) {
        const fragmentType = node.typeCondition.name.value
        hierarchy = new Hierarchy(fragmentType, objectTypes)
        if (hierarchy.parent?.to) {
          fragments[node.name.value] = hierarchy.parent?.to
        }
        return node
      },
      Field(node) {
        if (hierarchy) {
          hierarchy.enterField(node)
        }
        return node
      },
    },
    leave: {
      FragmentDefinition(node) {
        hierarchy = undefined
        return node
      },
      Field(node) {
        if (hierarchy) {
          hierarchy.leaveField(node)
        }
        return node
      },
    },
  })

  return fragments
}

function operationsEntityFields(
  queryAST: ASTNode,
  objectTypes: ObjectTypesMap,
  queryRootName: string,
  fragments: Fragments
) {
  let hierarchy: Hierarchy | undefined
  const operations: Entity[] = []

  visit(queryAST, {
    enter: {
      OperationDefinition(node) {
        if (node?.name?.value) {
          hierarchy = new Hierarchy(queryRootName, objectTypes)
          if (hierarchy.parent?.to) {
            operations.push(hierarchy.parent.to)
          }
        }
        return node
      },
      Field(node) {
        if (hierarchy) {
          hierarchy.enterField(node)
        }
        return node
      },
      FragmentSpread(node) {
        const fragment = fragments[node.name.value]
        if (fragment) {
          fragment.fields?.forEach((item) => {
            if (item.type.endsWith('_enum')) {
              const fieldName = Object.keys(objectTypes)
                .find(field => field === item.type)

              const fieldType = objectTypes[fieldName]
              const enumValues = fieldType?.enumValues
                .map(enumValue => enumValue.name)

              item.enumValues = enumValues
            }
            hierarchy?.parent?.to?.fields?.push(item)
          }
          )
        }
      },
    },
    leave: {
      OperationDefinition(node) {
        hierarchy = undefined
        return node
      },
      Field(node) {
        if (hierarchy) {
          hierarchy.leaveField(node)
        }
        return node
      },
    },
  })
  return operations
}
