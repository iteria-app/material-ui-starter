import { useState } from 'react';
import { useThemeContext } from 'src/theme/themeContext';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NightsStayIcon from '@material-ui/icons/NightsStay'
import ToggleButton from '@material-ui/lab/ToggleButton';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';

const useStyles = makeStyles(() => ({
  root: {},
  buttonToggle: {
    "&.MuiToggleButton-root": {
      border: 'none',
      color: '#FFF',
      "&:hover": {
        background: 'none'
      }
    },
    "&.Mui-selected": {
      background: 'none',
      color: '#3949AB'
    }
  },
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles()
  const {darken, switchTheme } = useThemeContext()
  const [selected, setSelected] = useState(darken ? true : false)
  const handleChangeTheme = () => {
    setSelected(!selected)
    !selected ? switchTheme(true) : switchTheme(false)
  }
  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <ToggleButton
          className={classes.buttonToggle}
          value="check"
          selected={selected}
          onChange={handleChangeTheme}
          disableRipple
        >
          <NightsStayIcon />
        </ToggleButton>
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={1}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
