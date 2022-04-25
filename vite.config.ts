import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import iteriaLowcode from '@iteria-app/vite-plugin-lowcode'

process.env.CWD = process.cwd()
process.env.VITE_CWD = process.cwd()

export default ({ command, mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
    VITE_CWD: process.cwd(),
  }

  return defineConfig({
    plugins: [
      react(),
      iteriaLowcode({
        command,
        mode,
        graphQLEndpoint: process.env.VITE_HASURA_GRAPHQL_ENDPOINT,
        cwd: process.cwd(),
      })
    ],
    define: {
      'process.env.NODE_ENV': `"development"`
    }
  })
}
