import { Box, Card, CardContent, CardHeader, Grid, styled } from '@mui/material'
import { stringPrettyCapitalize, Translate } from '@iteria-app/component-templates'
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

const EntityFormCard: React.FC<Props> = ({ title, children }) => {
  return (
    <StyledCard>
      <Box className={classes.box}>
        <CardHeader
          title={
            <Translate
              entityName={title}
              defaultMessage={stringPrettyCapitalize(title)}
            />
          }
        />
      </Box>
      <CardContent>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </CardContent>
    </StyledCard>
  )
}

export default EntityFormCard