import React from 'react'
// import { InputLabel, TableCell } from '@mui/material'
import { Formik, useFormikContext } from 'formik' // Formik import required for react generator
import { FormikFieldWrapper } from '@iteria-app-mui/common/src/components/fields/FormikFieldWrapper' // FormikFieldWrapper import required for react generator
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/form/FormatEntityField'
import {
  FormatFieldCellWrapper,
  TableRow,
  TranslateTableCellWrapper,
  getName,
} from '@iteria-app/component-templates'

interface IProps {
  rootName?: string
  relationshipName?: string
  index?: number
  data?: any
}

const EntityFormAlt: React.FC<IProps> = ({
  rootName,
  relationshipName,
  index,
  data,
}) => {
  const columns = [
    <FormatFieldCellWrapper key={'FIELD'}>
      <FormatEntityField
        type={'string'}
        rootName={rootName}
        relationshipName={relationshipName}
        index={index}
        value={data?.FIELD}
      />
    </FormatFieldCellWrapper>,
  ]

  return (
    <TableRow key={'FIELD'}>
      <TranslateTableCellWrapper
        headerName={getName(data)}
        entityName={'Entity'}
        fieldToReplace={getName(data)}
      />
      {columns}
    </TableRow>
  )
}

export default EntityFormAlt
