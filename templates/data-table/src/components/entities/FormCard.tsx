import { Table, TableBody, Typography } from '@mui/material'
import {
  stringPrettyCapitalize,
  Translate,
} from '@iteria-app/component-templates'
import React from 'react'

interface Props {
  title: string
}

const FormCard: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Typography sx={{ marginY: '12px', textTransform: 'uppercase' }}>
        <Translate
          entityName={title}
          defaultMessage={stringPrettyCapitalize(title)}
        />
      </Typography>
      <Table sx={{ tableLayout: 'fixed' }}>
        <TableBody
          sx={{
            'tr:nth-child(odd)': {
              background: '#F2F3F4',
            },
          }}
        >
          {children}
        </TableBody>
      </Table>
    </>
  )
}

export default FormCard
