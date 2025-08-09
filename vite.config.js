import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures correct asset paths for Vercel & root deployment
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000, // optional: run locally on localhost:3000
  }
});
