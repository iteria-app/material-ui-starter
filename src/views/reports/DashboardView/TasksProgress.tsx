import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material'
import { InsertChart } from '@mui/icons-material'
import { Translate } from '@iteria-app/component-templates'
import { theme } from '../../../theme'

export const TasksProgress = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              <Translate entityName="tasks.progress" />
            </Typography>
            <Typography color="textPrimary" variant="h3">
              88%
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Grid container justifyContent="right">
              <Avatar
                sx={{
                  bgcolor: theme.palette.warning.main,
                  height: 56,
                  width: 56,
                }}
              >
                <InsertChart />
              </Avatar>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress value={75.5} variant="determinate" />
        </Box>
      </CardContent>
    </Card>
  )
}
