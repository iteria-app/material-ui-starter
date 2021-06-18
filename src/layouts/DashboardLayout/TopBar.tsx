import { Link as RouterLink } from 'react-router-dom';
import { useIntlContext } from 'src/translations/IntlContext';
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
import FormControl from "@material-ui/core/FormControl";
import InputIcon from '@material-ui/icons/Input';
import InputLabel from "@material-ui/core/InputLabel";
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import Select from "@material-ui/core/Select";
import Logo from 'src/components/Logo';

const useStyles = makeStyles(() => ({
  root: {},
  formControl: {
    "& .MuiInputBase-root, & .MuiSvgIcon-root": {
      color: '#fff'
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: 'none'
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
  const { locale, localeKeys, switchToLanguage } = useIntlContext()

  const handleChangeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switchToLanguage(event.target.value)
  };

  const LanguageSwitch = () => {
    return (
      <>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="select-label">
          </InputLabel>
          <Select
            labelId="select-label"
            value={locale}
            onChange={handleChangeLocale}
          >
            {localeKeys.map(locale => (
              <MenuItem key={locale} value={locale}>{locale.toUpperCase()}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </>
    );
  };

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
        <LanguageSwitch />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
