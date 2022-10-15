import { useCallback, useState } from 'react'

const fragment3 = `fragment Entities_signedThumbnailImgPath on GetUrlReturn {
  url
}
`

const fragment1 = `
fragment Entities_Entities on Entities {
  id
  name
  availability
  price
  thumbnailImgPath
  signedThumbnailImgPath {
    ${fragment3}
  }
}
`

const fragment2 = `
fragment Entities_by_pk_Entities on Entities {
  id
  name
  availability
  thumbnailImgPath
  signedThumbnailImgPath {
    ${fragment3}
  }
}
`

const EntityQueryDocument = /* gql */ `
query Entities($distinct_on: [Entities_select_column!], $limit: Int, $offset: Int, $order_by: [Entities_order_by!] = {updated_at: desc}, $where: Entities_bool_exp) {
  Entity: entities(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ${fragment1}
    signedThumbnailImgPath {
      ...Entities_signedThumbnailImgPath
    }
  }
}`

const EntityByIdQueryDocument = /* gql */ `
query Entities_by_pk($id: uuid!) {
  Entity: entity(id: $id) {
    ...Entities_by_pk_Entities
    ${fragment2}
  }
}`

export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  bigint: any
  date: any
  interval: any
  json: any
  jsonb: any
  money: any
  numeric: any
  time: any
  timestamp: any
  timestamptz: any
  timetz: any
  uuid: any
}

export type GetUrlReturn = {
  __typename?: 'GetUrlReturn'
  url: Scalars['String']
}

export type EntityFragment = {
  __typename?: 'Entity'
  id: string
  FIELD: Scalars['json']
}

export type EntitiesQuery = {
  __typename?: 'query_root'
  Entity?: EntityFragment[]
}
export type EntityQuery = {
  __typename?: 'query_root'
  EntityById?: EntityFragment | null
}

export interface IError {
  error: {
    readonly name: string
    readonly message: string
    readonly networkError?: Error
  }
}

// TODO const refetchData = () => {}
const useQuery = (query: string, opts: any) => {
  if (query === EntityQueryDocument) {
    const data: EntitiesQuery = {
      Entity: [
        {
          id: '660dff87-e6d0-4da6-9998-925cfcabcb13',
          geoJson:
            '{"type": "Feature","properties": {"name": "Coors Field","amenity": "Baseball Stadium","popupContent": "This is where the Rockies play!"},"geometry": {"type": "Point","coordinates": [-104.99404, 39.75621]}}',
        },
        {
          id: 'a4381b52-3e77-4dae-bc73-4b1129b2d503',
          geoJson:
            '[{     "type": "LineString",     "coordinates": [[-100, 40], [-105, 45], [-110, 55]] }, {     "type": "LineString",     "coordinates": [[-105, 40], [-110, 45], [-115, 55]] }]',
        },
        {
          id: '6d1b4ea8-3708-4caa-9369-2f306082cd7d',
          geoJson:
          '[{     "type": "Feature",     "properties": {         "name": "Coors Field",         "show_on_map": true     },     "geometry": {         "type": "Point",         "coordinates": [-104.99404, 39.75621]     } }, {     "type": "Feature",     "properties": {         "name": "Busch Field",         "show_on_map": false     },     "geometry": {         "type": "Point",         "coordinates": [-104.98404, 39.74621]     } }]',
        },
      ],
    }
    const fetching = false // TODO setTimeout fetching=true and after fiew millis fetching=false
    return [{ data, fetching, error: null }]
  }

  if (query === EntityByIdQueryDocument) {
    const data: EntityQuery = {
      EntityById: {
        id: '660dff87-e6d0-4da6-9998-925cfcabcb13',
        geoJson:
          '"{\\"type\\": \\"Feature\\",\\"properties\\": {\\"party\\": \\"Republican\\"},\\"geometry\\": {\\"type\\": \\"Polygon\\",\\"coordinates\\": [[[-104.05, 48.99],[-97.22,  48.98],[-96.58,  45.94],[-104.03, 45.94],[-104.05, 48.99]]]} }"',
      },
    }
    const fetching = false
    const error = null
    return [{ data, fetching, error }]
  }

  const data = null
  const fetching = false
  const err: IError = {
    error: { name: 'unknown query', message: 'Error returning mock data' },
  }
  return [{ data, fetching, error: err.error }]
}

export const useEntityQuery = (
  opts: any
): {
  data: EntitiesQuery
  fetching: boolean
  error: null
}[] => {
  return useQuery(EntityQueryDocument, opts)
}

export const useEntityByIdQuery = (
  opts: any
): {
  data: EntityQuery
  fetching: boolean
  error: null
}[] => {
  return useQuery(EntityByIdQueryDocument, opts)
}

export interface UseMutationState<Data = any /* , Variables = object */> {
  fetching: boolean
  stale: boolean
  data?: Data
  error?: any // CombinedError;
  // extensions?: Record<string, any>;
  // operation?: Operation<Data, Variables>;
}

export type UseMutationResponse<Data = any /* , Variables = object */> = [
  any, // UseMutationState<Data, Variables>,
  (
    variables?: any, // Variables,
    context?: any // Partial<OperationContext>
  ) => Promise<any /* OperationResult<Data, Variables> */>
]

export const useMutation = (): UseMutationResponse => {
  const state = useState({ fetching: false, stale: false, error: undefined })

  const insertMutation = useCallback((query: string) => {
    return Promise.resolve({ data: { todo: { returning: {} } }, error: null })
  }, [])
  return [state, insertMutation]
}

export const useInsertEntityMutation = (): UseMutationResponse => {
  return useMutation()
}
