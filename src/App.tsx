import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { GraphqlcodegenDataProvider } from '@iteria-app/graphql-lowcode';
import { DataContext } from '@iteria-app/component-templates/src/gql';
import GlobalStyles from '../src/components/GlobalStyles';
import PropTypes from 'prop-types';
import {
  I18nProvider,
  useLocale
} from '@iteria-app/component-templates/src/i18n';
import '../src/mixins/chartjs';
import theme from '../src/theme';
import routes from '../src/routes';
import { messages } from './locale';
import * as graphqlgen from './generated/graphql';
import * as introspection from './generated/introspect.json';
import {
  cacheExchange,
  createClient,
  debugExchange,
  fetchExchange,
  Provider as UrqlProvider
} from 'urql';

const graphqlcodegenDataProvider = new GraphqlcodegenDataProvider(
  graphqlgen,
  introspection.__schema as any
);

const client = createClient({
  url: 'https://demo-orders.hasura.app/v1/graphql',
  exchanges: [debugExchange, cacheExchange, fetchExchange]
});

///////////////////Testing netlify api/////////////////////////

// const fetchNetlifyApi = async (accessToken: string) => {
//   const response = await fetch('https://api.netlify.com/api/v1/sites', {
//     headers: {
//       Authorization: accessToken
//     }
//   });

//   if (response.ok) console.log('OK');
//   else
//     console.log({
//       message: 'Access denied. Wrong access token or url!',
//       status: response.status
//     });

//   const data = await response.json();
//   return data;
// };

// fetchNetlifyApi('Bearer 2DCk741ZnfcCtzo1sMPvtCCdmG-SOOrqpymtnpZvatU').then(
//   (data) => {
//     console.log('Data:', data);
//   }
// );

const repository = import.meta.env.VITE_REPOSITORY_URL;
const branch = import.meta.env.VITE_BRANCH;
const head = import.meta.env.VITE_HEAD;
const siteId = import.meta.env.VITE_SITE_ID;

console.log('Repo', repository);
console.log(
  'RepositoryNameWithOwner',
  repository.toString().replace('https://github.com/', '')
);
console.log('Branch', branch);
console.log('SiteId', siteId);

const App = () => {
  const routing = useRoutes(routes);
  const locale = useLocale();
  return (
    <DataContext.Provider value={graphqlcodegenDataProvider}>
      <UrqlProvider value={client}>
        <I18nProvider locale={locale} messages={messages(locale)}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {routing}
          </ThemeProvider>
        </I18nProvider>
      </UrqlProvider>
    </DataContext.Provider>
  );
};

App.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object
};
export default App;
