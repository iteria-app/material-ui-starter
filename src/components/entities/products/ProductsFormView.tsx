import React from 'react'
import { Formik, FormikValues } from 'formik'
import ProductsDataTableView from './ProductsDataTableView'
import ProductsDataTableContainer from './ProductsDataTableContainer'
import { FormCard } from '../FormCard'
import { LookupDialog } from '../LookupDialog'
import ProductsForm from '../../entities/products/ProductsForm'
import { useNavigate } from 'react-router-dom'
import { Box, Button, CardActions, CardContent, Grid } from '@mui/material'
import { ArrowBack, FileCopy, Save, Search } from '@mui/icons-material'
import { createEmptyObject, Translate } from '@iteria-app/component-templates'
import { LoadingButton } from '@mui/lab'
import * as generatedGraphql from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'
let saveLoading = false
let copyLoading = false
interface Props {
  data?: generatedGraphql.ProductsQuery
  onSubmit: (values: FormikValues) => void
  onCopy?: (values: any) => void
  saveButtonDisabled?: boolean
}
const ProductsFormView: React.FC<Props> = ({
  data,
  onSubmit,
  onCopy,
  saveButtonDisabled,
}) => {
  data =
    data?.product ??
    createEmptyObject('products', generatedGraphql, introspection)
  const navigate = useNavigate()
  return (
    <div style={{ marginLeft: 25, marginRight: 25 }}>
      <Button onClick={() => navigate('/test/products/')}>
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
                    <FormCard title={undefined ?? 'products'}>
                      <ProductsForm relationshipName={undefined} />
                      {undefined && (
                        <LookupDialog
                          Container={ProductsDataTableContainer}
                          View={ProductsDataTableView}
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
export default ProductsFormView
