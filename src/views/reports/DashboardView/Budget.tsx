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
import { theme } from '../../../theme'
const Budget: React.FC<any> = ({ className, ...rest }) => {
  return (
    <Card sx={{ height: '100%' }} {...rest}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              <Translate entityName="budget" />
            </Typography>
            <Typography color="textPrimary" variant="h3">
              $24,000
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Grid container justifyContent="right">
              <Avatar
                sx={{
                  bgcolor: theme.palette.error.main,
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
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
Budget.propTypes = {
  className: PropTypes.string,
}
export default Budget
