import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createServer } from 'vite';
import historyApiFallback from 'connect-history-api-fallback';

export default defineConfig({
  plugins: [react()],
  base: "/refugio-onirico",
  server: {
    middleware: [historyApiFallback()]
  }
});
