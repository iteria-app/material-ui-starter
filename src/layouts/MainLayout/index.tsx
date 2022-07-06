import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material'
import TopBar from './TopBar'

const PREFIX = 'StyledMainLayout'
const classes = {
  root: `${PREFIX}-root`,
  wrapper: `${PREFIX}-wrapper`,
  contentContainer: `${PREFIX}-contentContainer`,
  content: `${PREFIX}-content`,
}
const StyledMainLayout = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  [`& .${classes.wrapper}`]: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  [`& .${classes.contentContainer}`]: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  [`& .${classes.content}`]: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}))

const MainLayout = () => {
  return (
    <StyledMainLayout className={classes.root}>
      <TopBar className="" />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </StyledMainLayout>
  )
}

export default MainLayout
