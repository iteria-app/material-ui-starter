const fragment1 = `
fragment Entities_Entities on Entities {
  id
  name
  availability
  price
  thumbnailImgPath
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
  Entity?: EntityFragment | null
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
          FIELD: '$157.00',
          name: 'Coat',
          availability: 'In stock',
          quantity: 3,
          thumbnailImgPath: 'taras-chernus-iIjResyhhW0-unsplash.jpg',
          signedThumbnailImgPath: {
            url: 'https://unsplash.com/photos/iIjResyhhW0',
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
    return [{ data, fetching, error: null }]
  }

  const data = null
  const fetching = false
  const err: IError = {
    error: { name: 'unknown query', message: 'Error returning mock data' },
  }
  return [{ data, fetching, error: err.error }]
}

export const useDashboardyQuery = (opts: any) => {
  return useQuery(EntityQueryDocument, opts)
}
