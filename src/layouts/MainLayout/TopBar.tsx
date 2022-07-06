import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AppBar, Toolbar } from '@mui/material'
import { styled } from '@mui/material'
import Logo from '../../components/Logo'

const PREFIX = 'StyledAppBar'
const classes = {
  root: `${PREFIX}-root`,
  toolbar: `${PREFIX}-toolbar`,
}
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.toolbar}`]: {
    height: 64,
  },
}))

const TopBar = ({ className, ...rest }) => {
  return (
    <StyledAppBar className={classes.root} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/app/generated-customers">
          <Logo />
        </RouterLink>
      </Toolbar>
    </StyledAppBar>
  )
}

TopBar.propTypes = {
  className: PropTypes.string,
}

export default TopBar
