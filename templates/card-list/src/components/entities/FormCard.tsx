import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  styled,
  Table,
  TableBody,
  Typography,
} from '@mui/material'
import {
  stringPrettyCapitalize,
  Translate,
} from '@iteria-app/component-templates'
import React from 'react'

interface Props {
  title: string
}

const PREFIX = 'StyledCard'
const classes = {
  box: `${PREFIX}-box`,
}
const StyledCard = styled(Card)(({ theme }) => ({
  [`& .${classes.box}`]: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}))

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
