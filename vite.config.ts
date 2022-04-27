import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
//import iteriaLowcode from '@iteria-app/vite-plugin-lowcode'
import iteriaLowcode from './vite-plugin';
import * as path from 'path';

export default ({ command, mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
    VITE_BRANCH: process.env.BRANCH,
    VITE_REPOSITORY_URL: process.env.REPOSITORY_URL,
    VITE_SITE_ID: process.env.SITE_ID
  };

  return defineConfig({
    optimizeDeps: {
      exclude: ['@iteria-app/wysiwyg'] //, '@iteria-app/component-templates', '@iteria-app/ide-devserver', '@iteria-app/generator', '@iteria-app/graphql-lowcode']
    },
    resolve: {
      alias: {
        os: 'os-browserify',
        path: 'path-browserify',
        module: path.resolve(__dirname, './src/constants.ts')
      }
    },
    server: {
      port: 3000
    },
    plugins: [
      react(),
      iteriaLowcode({
        command,
        mode,
        graphQLEndpoint: process.env.VITE_HASURA_GRAPHQL_ENDPOINT,
        cwd: process.cwd(),
        // version: "workspace:*",
        injectMode: Boolean(process.env.GITPOD_WORKSPACE_ID)
          ? 'devServer'
          : 'jamstack'
      })
    ],
    assetsInclude: ['ide-devserver/ide-devserver.es.js'],
    define: {
      'process.env.NODE_ENV': `"development"`
    }
  });
};

// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'
// // import iteriaLowcode from '@iteria-app/vite-plugin-lowcode'
// import iteriaLowcode from './vite-plugin'

// process.env.CWD = process.cwd()
// process.env.VITE_CWD = process.cwd()

// const endpointURL = loadEnv(
//   process.env.NODE_ENV ?? 'development',
//   process.env.CWD
// )?.VITE_HASURA_GRAPHQL_ENDPOINT

// export default defineConfig(
//   {
//   plugins: [react(),
//   iteriaLowcode({
//     graphQLEndpoint: endpointURL,
//     //injectDevServer: true
//   })],
//   define: {
//     "process.env.NODE_ENV": `"development"`,
//   },
// })
