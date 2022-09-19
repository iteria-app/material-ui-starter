import React, { useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/material'
import Page from '../../components/Page'
import NavBar from '../../layouts/DashboardLayout/NavBar'
import TopBar from '../../layouts/DashboardLayout/TopBar'

const PREFIX = 'StyledNotFound'
const classes = {
  root: `${PREFIX}-root`,
  image: `${PREFIX}-image`,
  box: `${PREFIX}-box`,
}
const StyledNotFound = styled(Page)(({ theme }) => ({
  [`&.${classes.root}`]: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  [`& .${classes.image}`]: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 560,
  },
  [`& .${classes.box}`]: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
}))

const NotFoundView = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <StyledNotFound className={classes.root} title="404">
      <TopBar className="" onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <Box className={classes.box}>
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h1">
            404: The page you are looking for isn’t here
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <Box textAlign="center">
            <img
              alt="Under development"
              className={classes.image}
              src="/static/images/undraw_page_not_found_su7k.svg"
            />
          </Box>
        </Container>
      </Box>
    </StyledNotFound>
  )
}

export default NotFoundView
