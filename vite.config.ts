import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import iteriaLowcode from '@iteria-app/vite-plugin-lowcode'

process.env.CWD = process.cwd()
const endpointURL = loadEnv(
  process.env.NODE_ENV,
  process.env.CWD
)?.VITE_HASURA_GRAPHQL_ENDPOINT

console.log(process.env.NODE_ENV)

export default defineConfig({
  plugins: [react(),
  iteriaLowcode({ 
    graphQLEndpoint: endpointURL,
    define: {
      "process.env.NODE_ENV": `"development"`,
    },
    //injectDevServer: true
  })],
})

