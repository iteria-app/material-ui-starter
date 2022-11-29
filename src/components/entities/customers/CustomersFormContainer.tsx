import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  useCustomerQuery,
  useInsertCustomersMutation,
} from '../../../generated/graphql'
import {
  deepClone,
  Error,
  ErrorBoundary,
  Fetching,
  QueryBoundary,
  showErrorSnackbar,
  showSuccessSnackbar,
} from '@iteria-app/component-templates'
import { FormikValues } from 'formik'
import { getUpsertQuery } from '@iteria-app/graphql-lowcode'
import * as generatedGraphql from '../../../generated/graphql'
interface IViewProps {
  data: generatedGraphql.CustomersQuery
  onSubmit: (values: FormikValues) => void
  onCopy: (values: FormikValues) => void
}
interface CustomersFormContainerProps {
  View: React.FC<IViewProps>
}
const CustomersFormContainer: React.FC<CustomersFormContainerProps> = ({
  View,
}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [insertedData, insertMutation] = useInsertCustomersMutation()
  let data
  if (!(id === 'create')) {
    ;[data] = useCustomerQuery({
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
        <View data={data?.data} onSubmit={handleSubmit} onCopy={handleCopy} />
      </QueryBoundary>
    </ErrorBoundary>
  )
}
export default CustomersFormContainer
