import React from 'react'
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import {getRandomColor, stringPrettyCapitalize} from '@iteria-app/component-templates'

interface Props {
  value: string
}

export const DefaultFormat: React.FC<Props> = ({ value }) => {
  return (
      <Card sx={{ minWidth: '300px' }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <Typography color="textSecondary" gutterBottom variant="h6">
                {stringPrettyCapitalize('FIELD')}
              </Typography>
              <Typography color="textPrimary" variant="h3">
                {value}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Grid container justifyContent="right">
                <Avatar
                    sx={{
                      bgcolor: getRandomColor('FIELD').color,
                      height: 56,
                      width: 56,
                    }}
                >
                  {getRandomColor('FIELD').character}
                </Avatar>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
  )
}
