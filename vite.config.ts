import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import iteriaLowcode from '@iteria-app/vite-plugin-lowcode'
import path from 'path'

export default ({ command, mode }) => {
  const env = loadEnv(mode, '.')
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
        graphQLEndpoint: env.VITE_HASURA_GRAPHQL_ENDPOINT,
        graphQLSecret: env.VITE_HASURA_GRAPHQL_SECRET,
        cwd: process.cwd(),
        injectLowcode: true,
        features: {
          tippy: true,
          generator: true,
          addFields: true,
          translations: true,
          themeEditor: true,
          graphQLEndpoint: true,
          floatingButton: true,
        },
        version: "1.4.6",
        whitelistedEnvs: ['VITE_HASURA_GRAPHQL_ENDPOINT', 'VITE_HASURA_GRAPHQL_SECRET', 'VITE_BRANCH', 'VITE_REPOSITORY_URL', 'VITE_SITE_ID', 'VITE_NETLIFY']
      }),
    ],
  })
}
