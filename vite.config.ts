import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dsv from '@rollup/plugin-dsv';

// https://vite.dev/config/
// https://www.npmjs.com/package/@rollup/plugin-dsv
export default defineConfig({
  plugins: [react(), dsv()],
})
