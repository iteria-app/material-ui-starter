import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import iteriaLowcode from './plugin'

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
        injectMode: process.env.VITE_INJECT_MODE,
        whitelistedEnvs: ['VITE_HASURA_GRAPHQL_ENDPOINT']
      }),
    ],
    define: {
      'process.env.NODE_ENV': `"development"`
    }
  })
}
