import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import iteriaLowcode from './plugin.js'
import path from 'path'

export default ({ command, mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
    VITE_CWD: process.cwd(),
    VITE_MODE: mode,
    VITE_BRANCH: process.env.BRANCH,
    VITE_REPOSITORY_URL: process.env.REPOSITORY_URL,
    VITE_SITE_ID: process.env.SITE_ID,
    NODE_ENV: "development"
  }

  return defineConfig({
    optimizeDeps: {
      exclude: ['@iteria-app/wysiwyg'],
      include: ['@iteria-app/component-templates'],
    },
    resolve: {
      alias: {
        os: 'os-browserify',
        path: 'path-browserify',
        module: path.resolve(__dirname, './src/constants.ts'),
      },
    },
    plugins: [
      react(),
      iteriaLowcode({
        command,
        mode,
        graphQLEndpoint: process.env.VITE_HASURA_GRAPHQL_ENDPOINT,
        cwd: process.cwd(),
        features: {
          tippy: true,
          generator: true,
          addFields: true,
          translations: true,
          themeEditor: true,
          graphQLEndpoint: true,
          floatingButton: true,
        },
        version: "1.3.0",
        whitelistedEnvs: ['VITE_HASURA_GRAPHQL_ENDPOINT']
      }),
    ],
    define: {
      'process.env.NODE_ENV': `"development"` //for monorepo netlify preview pull req purposes only
    }
  })
}
