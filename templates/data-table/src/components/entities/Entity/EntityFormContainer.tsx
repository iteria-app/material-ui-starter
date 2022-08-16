import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  useEntityByIdQuery,
  useInsertEntityMutation,
} from '../../../generated/graphql'
import {
  deepClone,
  Error,
  ErrorBoundary,
  Fetching,
  IFilterQuery,
  IFilterState,
  QueryBoundary,
  showErrorSnackbar,
  showSuccessSnackbar,
  useLocale,
} from '@iteria-app/component-templates'
import { FormikValues } from 'formik'
import { getUpsertQuery } from '@iteria-app/graphql-lowcode'
import { IntlProvider } from 'react-intl'
import { messages } from '../../../locale'

import * as generatedGraphql from '../../../generated/graphql'
import { GridRowParams, MuiEvent } from '@mui/x-data-grid'

interface IViewProps {
  onClickRow?: (
    params: GridRowParams,
    event?: MuiEvent<React.SyntheticEvent>
  ) => void
  onChangeFilter?: (state: Partial<IFilterState>) => void
  data: any
  filter?: IFilterQuery
  onChangePage: (state: number) => void
  onPageSize: (state: number) => void
  onSort: (state: object) => void
  onFilter: (state: object | undefined) => void
  offset: number
  page: number
  pageSize: number
  countRows: number
  setCountToRows: (state: number) => void
  onDeleteRow?: (value: any) => void
  onClickCreate?: () => void
  loading: boolean
  error: any
  topBar: boolean
}

interface EntityFormContainerProps {
  View: React.FC<IViewProps>
}

const EntityFormContainer: React.FC<EntityFormContainerProps> = ({ View }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const locale = useLocale()
  const messagesObject = messages(locale)

  const [insertedData, insertMutation] = useInsertEntityMutation()

  let data
  if (!(id === 'create')) {
    ;[data] = useEntityByIdQuery({
      variables: { id },
    })
  }

  const handleSubmit = (values: FormikValues) => {
    insertMutation(getUpsertQuery(values, generatedGraphql)).then(
      (response) => {
        if (response.error) {
          showErrorSnackbar('Submit failed!')
          console.error('Submit error:', response.error)
        } else {
          showSuccessSnackbar('Submit successful')
        }

        const newId =
          response.data?.[`${Object.keys(response.data)[0]}`]?.returning?.[0]
            ?.id

        if (newId) {
          navigate(-1)
        }
      }
    )
  }

  const handleCopy = (values: FormikValues) => {
    handleSubmit(deepClone(values))
  }

  if (data?.fetching) return <Fetching />
  if (data?.error) return <Error error={data?.error} />

  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <IntlProvider
          locale={locale}
          messages={messagesObject}
          onError={() => console.debug}
        >
          <View data={data?.data} onSubmit={handleSubmit} onCopy={handleCopy} />
        </IntlProvider>
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityFormContainer
