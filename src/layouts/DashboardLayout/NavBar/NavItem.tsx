import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, ListItem } from '@mui/material'
import { styled } from '@mui/material'

const PREFIX = 'StyledListItem'
const classes = {
  root: `${PREFIX}-root`,
  item: `${PREFIX}-item`,
  button: `${PREFIX}-button`,
  icon: `${PREFIX}-icon`,
  title: `${PREFIX}-title`,
  active: `${PREFIX}-active`,
}
const StyledListItem = styled(ListItem)(({ theme }) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.item}`]: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  [`& .${classes.button}`]: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%',
  },
  [`& .${classes.icon}`]: {
    marginRight: theme.spacing(1),
  },
  [`& .${classes.title}`]: {
    marginRight: 'auto',
  },
  [`& .${classes.active}`]: {
    color: theme.palette.primary.main,
    [`& .${classes.title}`]: {
      fontWeight: theme.typography.fontWeightMedium,
    },
    [`& .${classes.icon}`]: {
      color: theme.palette.primary.main,
    },
  },
}))

const removeLinkName = (props) => {
  const { linkname, ...newProps } = props
  return newProps
}

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink {...removeLinkName(props)} className={props.linkname} />
))

const NavItem = ({ className, href, icon: Icon, title, ...rest }) => {
  return (
    <StyledListItem className={classes.item} disableGutters {...rest}>
      <Button
        //@ts-ignore
        linkname={({ isActive }) =>
          isActive ? classes.active + ' ' + classes.button : classes.button
        }
        className={classes.button}
        component={LinkBehavior}
        to={href}
      >
        {Icon && <Icon className={classes.icon} size="20" />}
        <span className={classes.title}>{title}</span>
      </Button>
    </StyledListItem>
  )
}

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
}

export default NavItem
