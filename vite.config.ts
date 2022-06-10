import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import iteriaLowcode from '@iteria-app/vite-plugin-lowcode'
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
        whitelistedEnvs: ['VITE_HASURA_GRAPHQL_ENDPOINT', 'VITE_BRANCH', 'VITE_REPOSITORY_URL', 'VITE_SITE_ID', 'VITE_NETLIFY']
      }),
    ],
  })
}
