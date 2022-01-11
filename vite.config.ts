import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import iteriaLowcode from './lowcode-vite'

process.env.CWD = process.cwd()
export default defineConfig({
  plugins: [react(), iteriaLowcode()],
  resolve: {
    // alias: {
    //   os: 'os-browserify',
    //   module: path.resolve(__dirname, './src/constants.ts'),
    // },
  },
})
