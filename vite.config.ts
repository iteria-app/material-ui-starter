import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import iteriaLowcode from './src/index'

export default ({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()), VITE_CWD: process.cwd() }

  console.log(command, mode)

  return defineConfig({
    plugins: [react(),
    iteriaLowcode({
      command: 'build',
      mode: 'development',
      graphQLEndpoint: process.env.VITE_HASURA_GRAPHQL_ENDPOINT,
      cwd: process.cwd(),
      injectMode: 'devServer'
    })]
  })
}

