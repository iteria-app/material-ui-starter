import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useTheme,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/typography/FormatEntityField'
import { getRowId, getTitle } from '@iteria-app/component-templates'
import { EntityFragment } from '../../../generated/graphql'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useFormikContext } from 'formik'

interface EntityAccordion {
  data: EntityFragment
  relationshipName?: string
  rootName?: string
  index?: number
  children?: React.ReactNode
  onExpand?: (event: React.SyntheticEvent, isExpanded: boolean) => void
}

const EntityAccordion: React.FC<EntityAccordion> = ({
  data,
  relationshipName,
  rootName,
  index,
  children,
  onExpand,
}) => {
  const theme = useTheme()
  const navigate = useNavigate()
  let formikContext
  if (relationshipName) formikContext = useFormikContext()
  const setFieldValue = formikContext?.setFieldValue
  const columns = [
    <>
      <FormatEntityField
        key={'FIELD'}
        type={'string'}
        value={data?.FIELD}
        rootName={rootName}
        relationshipName={relationshipName}
        setFieldValue={setFieldValue}
        index={index}
      />
    </>,
  ]
  return (
    <Accordion onChange={onExpand}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        data-test-id={`Accordion-${'Entity'}-${getRowId(data)}`}
        data-test={`Accordion-${'Entity'}`}
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {getTitle(data)}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>Subtitle</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {columns}
        {children}
      </AccordionDetails>
    </Accordion>
  )
}

export default EntityAccordion
