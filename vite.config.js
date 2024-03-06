import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createServer } from 'vite';
import historyApiFallback from 'connect-history-api-fallback';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/refugio-onirico",
  server: {
    middleware: []
  }
});
