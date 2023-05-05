import React from 'react'
import {
  Box,
  TableRow,
} from '@mui/material'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/typography/FormatEntityField'
import { FormatFieldCellWrapper, TranslateTableCellWrapper } from '@iteria-app/component-templates'
import { EntityFragment } from '../../../generated/graphql'
import { useFormikContext } from 'formik'

interface EntityTabProps {
  data: EntityFragment
  visible: boolean
  relationshipName?: string
  index?: number
}

const EntityTab: React.FC<EntityTabProps> = ({
  data,
  visible,
  relationshipName,
  index,
}) => {
  let formikContext
  if (relationshipName) formikContext = useFormikContext()
  const setFieldValue = formikContext?.setFieldValue
  const columns = [
    <TableRow key={'FIELD'}>
      <TranslateTableCellWrapper
        headerName={'HEADER_NAME'}
        entityName={'Entity'}
        fieldToReplace={'FIELD'}
      />
      <FormatFieldCellWrapper>
        <FormatEntityField
          key={'FIELD'}
          type={'string'}
          value={data?.FIELD}
          relationshipName={relationshipName}
          setFieldValue={setFieldValue}
          index={index}
        />
      </FormatFieldCellWrapper>
    </TableRow>,
  ]
  return (
    <div role="tabpanel" hidden={!visible}>
      {visible && <Box sx={{ p: 3 }}>{columns}</Box>}
    </div>
  )
}

export default EntityTab
