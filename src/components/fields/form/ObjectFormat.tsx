import React from 'react'
import { Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import CustomersForm from '../../entities/customers/CustomersForm'
import { LookupDialog } from '../../entities/LookupDialog'
import { FormCard } from '../../entities/FormCard'
import CustomersDataTableContainer from './../../entities/customers/CustomersDataTableContainer'
import CustomersDataTableView from './../../entities/customers/CustomersDataTableView'
import { Translate } from '@iteria-app/component-templates'
type ObjectFormatProps = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}
export const ObjectFormat = ({
  setFieldValue,
}: ObjectFormatProps): JSX.Element => (
  <FormCard title={'customers'}>
    <CustomersForm relationshipName="FIELD" />
    {'FIELD' && (
      <LookupDialog
        Container={CustomersDataTableContainer}
        View={CustomersDataTableView}
        onClickRow={(row) => {
          setFieldValue('FIELD', row, false)
        }}
        title="FIELD"
      >
        <Button
          color="secondary"
          variant="contained"
          startIcon={<Search />}
          style={{ margin: '16px' }}
        >
          <Translate
            entityName="FIELD"
            fieldName="lookup"
            defaultMessage="Lookup FIELD"
          />
        </Button>
      </LookupDialog>
    )}
  </FormCard>
)
