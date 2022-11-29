import React from 'react'
import { Formik, FormikValues } from 'formik'
import CustomersDataTableView from './CustomersDataTableView'
import CustomersDataTableContainer from './CustomersDataTableContainer'
import { FormCard } from '../FormCard'
import { LookupDialog } from '../LookupDialog'
import CustomersForm from '../../entities/customers/CustomersForm'
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
  data?: generatedGraphql.CustomersQuery
  onSubmit: (values: FormikValues) => void
  onCopy?: (values: any) => void
  saveButtonDisabled?: boolean
}
const CustomersFormView: React.FC<Props> = ({
  data,
  onSubmit,
  onCopy,
  saveButtonDisabled,
}) => {
  data =
    data?.customer ??
    createEmptyObject('customers', generatedGraphql, introspection)
  const navigate = useNavigate()
  return (
    <div style={{ marginLeft: 25, marginRight: 25 }}>
      <Button onClick={() => navigate('/test/customers/')}>
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
                    <FormCard title={undefined ?? 'customers'}>
                      <CustomersForm relationshipName={undefined} />
                      {undefined && (
                        <LookupDialog
                          Container={CustomersDataTableContainer}
                          View={CustomersDataTableView}
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
export default CustomersFormView
