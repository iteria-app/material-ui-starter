import React from 'react';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { useIntlContext } from 'src/translations/IntlContext';

const LanguageSwitch = () => {
  const { locale, localeKeys, switchToLanguage } = useIntlContext()

  const handleChangeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switchToLanguage(event.target.value)
  };
  return (
    <>
      <FormControl variant="outlined">
        <InputLabel id="select-language">
        </InputLabel>
        <Select
          labelId="select-language"
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

export default LanguageSwitch;

