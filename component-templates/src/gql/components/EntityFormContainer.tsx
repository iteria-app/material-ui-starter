import React from 'react'
import { useParams } from 'react-router-dom'
import { Fetching, Error, DetailPagePlaceholder } from '../../material-ui'
import {
  useGeneratedByIdQuery,
  useUpdateTemplateMutation,
} from '../../gql/generated'
import { Entity } from 'gql'
import { FormikValues } from 'formik'

export const DetailPageContainer: React.FC = () => {
  const { id } = useParams()
  const [result] = useGeneratedByIdQuery({ variables: { id: parseInt(id!) } })

  const useEntityFieldsQuery = (): Entity => {
    return { name: '', fields: [] }
  }

  const entityFields = useEntityFieldsQuery()

  const handleSubmit = (_values: FormikValues) => {
    useUpdateTemplateMutation()
    // {
    //     where: { id: { _eq: values.id } },
    //     smena: values,
    //     _inc: {}
    //   }
  }
  if (result.fetching) return <Fetching />
  if (result.error) return <Error error={result.error} />
  return (
    <DetailPagePlaceholder
      data={result.data}
      entityFields={entityFields}
      onSubmit={handleSubmit}
    />
  )
}
