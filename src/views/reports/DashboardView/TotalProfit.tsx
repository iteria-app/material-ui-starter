import React from 'react'
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { Translate } from '@iteria-app/component-templates'
import { theme } from '../../../theme'

export const TotalProfit = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              <Translate entityName="total.profit" />
            </Typography>
            <Typography color="textPrimary" variant="h3">
              $23,200
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Grid container justifyContent="right">
              <Avatar
                sx={{ bgcolor: theme.palette.info.main, height: 56, width: 56 }}
              >
                <AttachMoneyIcon />
              </Avatar>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
