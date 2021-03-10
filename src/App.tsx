import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';

const App = ({ locale, messages }) => {
  const routing = useRoutes(routes);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </IntlProvider>
  );
};

App.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object
};
export default App;