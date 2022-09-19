import { useCallback, useState } from 'react'

const fragment3 = `
fragment xrModels_xrModels on xrModels {
  id
  name
  background_color
  createdBy
  logoPath
  minimapGlbPath
  minimapImgPath
  thumbnailPath
  createdAt
  updatedAt
  __typename
}
`

const fragment1 = `
fragment xrModel_xrModelFiles_signedGlbPath on GetUrlReturn {
  url
  __typename
}
`

const fragment2 = `
fragment xrModel_xrModelFiles on xrModelFiles {
  name
  id
  __typename
}
`

const EntityQueryDocument = /* gql */ `
query xrModels(
  $distinct_on: [xrModels_select_column!]
  $limit: Int
  $offset: Int
  $order_by: [xrModels_order_by!] = { updatedAt: desc }
  $where: xrModels_bool_exp
) {
  xrModels(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ${fragment3}
    ...xrModels_xrModels
  }
}`

const EntityByIdQueryDocument = /* gql */ `
query xrModel($id: uuid!) {
  xrModel(id: $id) {
    ...xrModel_xrModels
    xrModelFiles {
      ${fragment2}
      signedGlbPath {
        ${fragment1}
        ...xrModel_xrModelFiles_signedGlbPath
      }
      ...xrModel_xrModelFiles
    }
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

export type EntityFiles = {
  __typename: "xrModelFiles"
  id: string
  name: string
  glbPath?: string | null
  usdzPath?: string | null
  createdAt?: any
  updatedAt?: any
  signedGlbPath?: { __typename?: 'GetUrlReturn'; url: string } | null
}

export type EntityFragment = {
  id: string;
  name: string;
  // eslint-disable-next-line camelcase
  background_color: string;
  createdBy?: any;
  logoPath: string | null;
  minimapGlbPath?: any;
  minimapImgPath?: any;
  thumbnailPath: string | null;
  createdAt: Scalars['date'];
  updatedAt: Scalars['date'];
  xrModelFiles?: EntityFiles[],
  __typename: string;
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
          id: "fb29bef4-4bf8-4468-86a4-c6627f13bc42",
          name: "FLEXNODE Mechanical Room",
          background_color: "skybox",
          createdBy: "sofia.matulikova@akular.com",
          logoPath: null,
          minimapGlbPath: null,
          minimapImgPath: null,
          thumbnailPath: null,
          createdAt: "2022-08-24T14:54:12.496173+00:00",
          updatedAt: "2022-08-24T15:07:28.612536+00:00",
          __typename: "xrModels"
        },
        {
          id: "1df618dc-5aea-4d5e-95b2-f9fd44e33da5",
          name: "V2_02_mechanical_room_with_FLEXNODE",
          background_color: "skybox",
          createdBy: null,
          logoPath: "xrModels/28fcc74b-6a7d-4583-8bb6-f36719f5195b_thumbnail_flex_logo_black_safeframed.png",
          minimapGlbPath: null,
          minimapImgPath: null,
          thumbnailPath: "xrModels/31b923cb-9689-48b4-9367-bbe789aaa9fd_thumbnail_mechanicalroomimg.png",
          createdAt: "2022-05-27T12:52:47.789495+00:00",
          updatedAt: "2022-08-24T15:07:10.536488+00:00",
          __typename: "xrModels"
        }
      ],
    }
    const fetching = false // TODO setTimeout fetching=true and after fiew millis fetching=false
    return [{ data, fetching, error: null }]
  }

  if (query === EntityByIdQueryDocument) {
    const data: EntityQuery = {
      Entity:{
        id: "fb29bef4-4bf8-4468-86a4-c6627f13bc42",
        name: "FLEXNODE Mechanical Room",
        background_color: "skybox",
        createdBy: "sofia.matulikova@akular.com",
        logoPath: null,
        minimapGlbPath: null,
        minimapImgPath: null,
        thumbnailPath: null,
        createdAt: "2022-08-24T14:54:12.496173+00:00",
        updatedAt: "2022-08-24T15:07:28.612536+00:00",
        __typename: "xrModels",
        xrModelFiles: [
          {
            signedGlbPath: {
              url: "https://s3.dualstack.eu-central-1.amazonaws.com/akular-devel-eu/XrModelVersion/6a8a8c58-dd09-4d7c-90ce-36c4bc87b036_mechanical_room.glb?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZJPG5F6MVTNR72KT%2F20220826%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20220826T073459Z&X-Amz-Expires=3000&X-Amz-Signature=c26423f2ba502f5b0ec368d7f48e8cf4453d593f7417593eb904f685afe71d58&X-Amz-SignedHeaders=host",
              __typename: "GetUrlReturn"
            },
            name: "mechanical_room",
            id: "f610d8b2-0540-4af4-a87c-4c7daf3e08f2",
            __typename: "xrModelFiles"
          }
        ]
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

export const useEntityQuery = (opts: any) => {
  return useQuery(EntityQueryDocument, opts)
}

export const useEntityByIdQuery = (opts: any) => {
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
