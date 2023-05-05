import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default () => {
  return defineConfig({
    resolve: {
      dedupe: ['react', 'react-dom', 'react-router', 'react-router-dom'],
    },
    server: {
      port: 3000,
    },
    plugins: [
      react(),
    ],
  })
}
