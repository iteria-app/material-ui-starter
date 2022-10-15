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
  id: any
  name: Scalars['String']
  availability: Scalars['String']
  FIELD?: Scalars['String']
  quantity?: number
  thumbnailImgPath
  signedThumbnailImgPath: GetUrlReturn
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
    const data: any = {
      customersAggregate: {
        aggregate: {
          count: 33,
        },
      },
      orders: [
        {
          order_date: '2022-01-20',
          shipped_date: null,
          order_status: 'Confirmed',
        },
        {
          order_date: '2022-02-15',
          shipped_date: null,
          order_status: 'Processing',
        },
        {
          order_date: '2022-02-19',
          shipped_date: null,
          order_status: 'Cancelled',
        },
        {
          order_date: '2022-01-29',
          shipped_date: '2022-06-10',
          order_status: 'Refounded',
        },
        {
          order_date: '2022-02-08',
          shipped_date: '2022-05-08',
          order_status: 'Delivered',
        },
        {
          order_date: '2022-01-12',
          shipped_date: '2022-04-23',
          order_status: 'Delivered',
        },
        {
          order_date: '2022-02-16',
          shipped_date: null,
          order_status: 'Confirmed',
        },
        {
          order_date: '2022-01-24',
          shipped_date: null,
          order_status: 'Cancelled',
        },
        {
          order_date: '2022-03-28',
          shipped_date: null,
          order_status: 'Processing',
        },
        {
          order_date: '2022-01-17',
          shipped_date: null,
          order_status: 'Confirmed',
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
        FIELD: '$157.00',
        name: 'Coat',
        availability: 'In stock',
        quantity: 3,
        thumbnailImgPath: 'taras-chernus-iIjResyhhW0-unsplash.jpg',
        signedThumbnailImgPath: {
          url: 'https://unsplash.com/photos/iIjResyhhW0',
        },
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
