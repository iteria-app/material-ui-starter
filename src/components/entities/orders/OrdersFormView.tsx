import React from 'react'
import { Formik, FormikValues, Field as FormikField, FieldProps } from 'formik'
import OrderItemsDataTableView from '../order_items/OrderItemsDataTableView'
import CustomerDataTableView from './../customer/CustomerDataTableView'
import CustomerDataTableContainer from './../customer/CustomerDataTableContainer'
import CustomerForm from '../../entities/customer/CustomerForm'
import OrdersDataTableView from './OrdersDataTableView'
import OrdersDataTableContainer from './OrdersDataTableContainer'
import { FormCard } from '../FormCard'
import { LookupDialog } from '../LookupDialog'
import OrdersForm from '../../entities/orders/OrdersForm'
import { useNavigate } from 'react-router-dom'
import { Box, Button, CardActions, CardContent, Grid } from '@mui/material'
import { ArrowBack, FileCopy, Save, Search } from '@mui/icons-material'
import {
  createEmptyObject,
  Translate,
  columnCount,
} from '@iteria-app/component-templates'
import { LoadingButton } from '@mui/lab'
import * as generatedGraphql from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'
let saveLoading = false
let copyLoading = false
interface Props {
  data?: generatedGraphql.OrdersQuery
  onSubmit: (values: FormikValues) => void
  onCopy?: (values: any) => void
  saveButtonDisabled?: boolean
}
const OrdersFormView: React.FC<Props> = ({
  data,
  onSubmit,
  onCopy,
  saveButtonDisabled,
}) => {
  data =
    data?.order ?? createEmptyObject('orders', generatedGraphql, introspection)
  const navigate = useNavigate()
  return (
    <div style={{ marginLeft: 25, marginRight: 25 }}>
      <Button onClick={() => navigate('/test/orders/')}>
        <ArrowBack />
        <Translate entityName="Back" />
      </Button>
      <Box sx={{ marginY: 2 }}>
        <CardContent>
          <Formik
            initialValues={data}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {(formikProps) => {
              const { setFieldValue } = formikProps
              return (
                <form onSubmit={formikProps.handleSubmit}>
                  <Grid container spacing={3}>
                    <FormCard title={undefined ?? 'orders'}>
                      <OrdersForm relationshipName={undefined} />
                      {undefined && (
                        <LookupDialog
                          Container={OrdersDataTableContainer}
                          View={OrdersDataTableView}
                          onClickRow={(row) => {
                            setFieldValue(undefined, row, false)
                          }}
                          title={undefined}
                        >
                          <Button
                            color="secondary"
                            variant="contained"
                            startIcon={<Search />}
                            style={{ margin: '16px' }}
                          >
                            <Translate
                              entityName={undefined}
                              fieldName="lookup"
                              defaultMessage="Lookup FIELD"
                            />
                          </Button>
                        </LookupDialog>
                      )}
                    </FormCard>
                    <FormikField name="customer">
                      {(fieldProps: FieldProps) => {
                        return (
                          <FormCard title="customer">
                            <CustomerForm relationshipName="customer" />
                            {'customer' && (
                              <LookupDialog
                                Container={CustomerDataTableContainer}
                                View={CustomerDataTableView}
                                onClickRow={(row) => {
                                  setFieldValue('customer', row, false)
                                }}
                                title="customer"
                              >
                                <Button
                                  color="secondary"
                                  variant="contained"
                                  startIcon={<Search />}
                                  style={{ margin: '16px' }}
                                >
                                  <Translate
                                    entityName="customer"
                                    fieldName="lookup"
                                    defaultMessage="Lookup customer"
                                  />
                                </Button>
                              </LookupDialog>
                            )}
                          </FormCard>
                        )
                      }}
                    </FormikField>
                    <FormikField name="order_items">
                      {(fieldProps: FieldProps) => {
                        return (
                          <FormCard
                            title="order_items"
                            length={columnCount(fieldProps.field.value)}
                          >
                            <OrderItemsDataTableView
                              data={fieldProps.field.value}
                              relationshipName="order_items"
                            />
                          </FormCard>
                        )
                      }}
                    </FormikField>
                  </Grid>
                  <CardActions>
                    <LoadingButton
                      disabled={saveButtonDisabled}
                      loading={saveLoading}
                      loadingPosition="start"
                      startIcon={<Save />}
                      style={{
                        margin: '12px auto',
                      }}
                      variant="contained"
                      type="submit"
                      onClick={() => {
                        saveLoading = true
                        setTimeout(() => (saveLoading = false), 750)
                      }}
                      data-test-id="save-entity-button"
                    >
                      <Translate entityName="Save" />
                    </LoadingButton>
                    {onCopy !== undefined && (
                      <LoadingButton
                        disabled={saveButtonDisabled}
                        color="secondary"
                        loading={copyLoading}
                        loadingPosition="start"
                        startIcon={<FileCopy />}
                        style={{
                          margin: '12px auto',
                        }}
                        variant="contained"
                        onClick={() => {
                          copyLoading = true
                          setTimeout(() => (copyLoading = false), 750)
                          if (onCopy) {
                            onCopy(data)
                          }
                        }}
                        data-test-id="copy-entity-button"
                      >
                        <Translate entityName="Copy" />
                      </LoadingButton>
                    )}
                  </CardActions>
                </form>
              )
            }}
          </Formik>
        </CardContent>
      </Box>
    </div>
  )
}
export default OrdersFormView
