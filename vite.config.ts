import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    reporters: [
      [
        'default',
        {
          summary: false, // disables the long summary
        },
      ],
    ],
    silent: true, // optional: reduces noisy console output
    // Você pode adicionar aqui outras configs se precisar
  },
})
