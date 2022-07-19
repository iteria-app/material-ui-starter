import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  logLevel: 'info',
  plugins: [peerDepsExternal(), react(), dts()],
  build: {
    lib: {
      entry: 'src/index.tsx',
      formats: ['es'],
    },
  },
})
