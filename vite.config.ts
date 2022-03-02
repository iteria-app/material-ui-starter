import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import iteriaLowcode from '@iteria-app/vite-plugin-lowcode'

process.env.CWD = process.cwd()
process.env.VITE_CWD = process.cwd()

const endpointURL = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.env.CWD
)?.VITE_HASURA_GRAPHQL_ENDPOINT

export default defineConfig({
  plugins: [react(),
  iteriaLowcode({
    graphQLEndpoint: endpointURL,
    injectDevServer: true,
  })],
})
