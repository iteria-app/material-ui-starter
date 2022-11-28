import { Grid, Table, TableBody, Typography } from '@mui/material'
import {
  stringPrettyCapitalize,
  Translate,
} from '@iteria-app/component-templates'
import React, { ReactNode } from 'react'
interface Props {
  title: string
  children: ReactNode
  length?: number
}
export const FormCard: React.FC<Props> = ({ title, children, length }) => {
  return (
    <Grid item md={length ?? 6 > 7 ? 12 : 6}>
      <Typography sx={{ marginY: '12px', textTransform: 'uppercase' }}>
        <Translate
          entityName={title}
          defaultMessage={stringPrettyCapitalize(title)}
        />
      </Typography>
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
    </Grid>
  )
}
