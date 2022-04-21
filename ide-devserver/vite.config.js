import path from 'path'
import { defineConfig } from 'vite'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import dts from 'vite-plugin-dts'

export default defineConfig({
  server: {
    port: 3003,
  },
  resolve: {
    alias: {
      os: 'os-browserify',
      path: 'path-browserify',
      module: path.resolve(__dirname, './src/constants.ts'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'iteriaIDE',
      formats: ['es'],
      rollupOptions: {
        output: {
          inlineDynamicImports: true, // <== here the entry
        },
      },
    },
    sourcemap: false
  },
  plugins: [peerDepsExternal(), dts()],
})
