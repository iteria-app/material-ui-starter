import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
} from '@mui/material'
import { ArrowUpward, People } from '@mui/icons-material'
import { Translate } from '@iteria-app/component-templates'
import { theme } from '../../../theme'
export const TotalCustomers = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              <Translate entityName="total.customers" />
            </Typography>
            <Typography color="textPrimary" variant="h3">
              1,600
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Grid container justifyContent="right">
              <Avatar
                sx={{
                  bgcolor: theme.palette.success.main,
                  height: 56,
                  width: 56,
                }}
              >
                <People />
              </Avatar>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center">
          <ArrowUpward sx={{ color: colors.green[900] }} />
          <Typography sx={{ color: colors.green[900], mr: 2 }} variant="body2">
            16%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
