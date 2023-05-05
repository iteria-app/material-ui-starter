import React from 'react'
// import { InputLabel, TableCell } from '@mui/material'
import { Formik, useFormikContext } from 'formik' // Formik import required for react generator
import { FormikFieldWrapper } from '@iteria-app-mui/common/src/components/fields/FormikFieldWrapper' // FormikFieldWrapper import required for react generator
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/form/FormatEntityField'
import {
  FormatFieldCellWrapper,
  TableRow,
  TranslateTableCellWrapper,
} from '@iteria-app/component-templates'

interface IProps {
  rootName?: string
  relationshipName?: string
  index?: number
  value?: any
}

const EntityForm: React.FC<IProps> = ({
  rootName,
  relationshipName,
  index,
  value,
}) => {
  const columns = [
    <TableRow key={'FIELD'}>
      <TranslateTableCellWrapper
        headerName={'HEADER_NAME'}
        entityName={'Entity'}
        fieldToReplace={'FIELD'}
      />
      <FormatFieldCellWrapper>
        <FormatEntityField
          type={'string'}
          rootName={rootName}
          relationshipName={relationshipName}
          index={index}
          value={value?.FIELD}
        />
      </FormatFieldCellWrapper>
    </TableRow>,
  ]

  return <>{columns}</>
}

export default EntityForm
