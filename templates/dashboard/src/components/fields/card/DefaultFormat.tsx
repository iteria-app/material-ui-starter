import React from 'react'
import PropTypes from 'prop-types'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
} from '@mui/material'
import { Translate } from '@iteria-app/component-templates'
import { ArrowDownward, Money } from '@mui/icons-material'

interface Props {
  value: string
}

export const DefaultFormat: React.FC<Props> = ({ value }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              <Translate entityName="TITLE" />
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {value}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Grid container justifyContent="right">
              <Avatar
                sx={{
                  bgcolor: colors.red[600],
                  height: 56,
                  width: 56,
                }}
              >
                <Money />
              </Avatar>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center">
          <ArrowDownward sx={{ color: colors.red[900] }} />
          <Typography sx={{ color: colors.red[900], mr: 2 }} variant="body2">
            12%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Caption
          </Typography>
        </Box>
      </CardContent>
    </Card>
    // 
  )
}
