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
    readonly name: string
    readonly message: string
    readonly networkError?: Error
}

// TODO const refetchData = () => {}
const useQuery = (query: string, opts: any) => {
  if (query === EntityQueryDocument) {
    const data: EntitiesQuery = {
      Entity: [
        {
          id: '660dff87-e6d0-4da6-9998-925cfcabcb13',
          FIELD: '$157.00',
          name: 'Coat',
          availability: 'In stock',
          quantity: 3,
          thumbnailImgPath: 'taras-chernus-iIjResyhhW0-unsplash.jpg',
          signedThumbnailImgPath: {
            url: 'https://cdni.llbean.net/is/image/wim/260347_2772_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2',
          },
        },
        {
          id: 'a4381b52-3e77-4dae-bc73-4b1129b2d503',
          FIELD: '$149.00',
          name: 'Tie',
          availability: 'Unavailable',
          quantity: 0,
          thumbnailImgPath: 'pexels-dom-j-45055.jpg',
          signedThumbnailImgPath: {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDpDNtdp3SU9jgvRh-us52nhLDvRlzllu9k_DrervKog&s',
          },
        },
      ],
    }
    const fetching = false // TODO setTimeout fetching=true and after fiew millis fetching=false
    const error: IError | null = null
    return [{ data, fetching, error }]
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
    const error: IError | null = null
    return [{ data, fetching, error }]
  }

  const data = null
  const fetching = false
  const error: IError =  { name: 'unknown query', message: 'Error returning mock data' }
  return [{ data, fetching, error }]
}

export const useEntityQuery = (
  opts: any
): {
  data: EntitiesQuery
  fetching: boolean
  error: IError | null
}[] => {
  return useQuery(EntityQueryDocument, opts)
}

export const useEntityByIdQuery = (
  opts: any
): {
  data: EntityQuery
  fetching: boolean
  error: IError | null
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
