import React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Table,
  TableBody,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Translate from '../../i18n/Translate'
import { stringPrettyCapitalize } from '../formatting'

export const EntityCard: React.FC<{ title: string; action?: JSX.Element }> = ({
  title,
  action,
  children,
}) => {
  return (
    // @ts-ignore
    <>
      <Typography sx={{ marginY: '12px', textTransform: 'uppercase' }}>
        <Translate
          entityName={title}
          defaultMessage={stringPrettyCapitalize(title)}
        />
      </Typography>
      {action}
      <Table sx={{ tableLayout: 'fixed' }}>
        <TableBody>{children}</TableBody>
      </Table>
    </>
  )
}
