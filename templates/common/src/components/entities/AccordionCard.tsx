import React, { ReactNode } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
  Table,
  TableBody,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Translate,
  stringPrettyCapitalize,
} from '@iteria-app/component-templates'
interface Props {
  title: string
  children: ReactNode
  length?: number
}
export const AccordionCard = ({ title, children, length }: Props) => {
  return (
    <Grid item md={length ?? 6 > 7 ? 12 : 6}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`Accordion-${title}`}
          data-test={`Accordion-${title}`}
        >
          <Typography sx={{ marginY: '12px', textTransform: 'uppercase' }}>
            <Translate
              entityName={title}
              defaultMessage={stringPrettyCapitalize(title)}
            />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table sx={{ tableLayout: 'fixed' }}>
            <TableBody
              sx={{
                'tr:nth-of-type(odd)': {
                  background: '#F2F3F4',
                },
              }}
            >
              {children}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
    </Grid>
  )
}
