import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Root by default, which is what the live site and `npm run dev` both want.
  // A preview host that serves the site from a sub-path sets DEPLOY_BASE, e.g.
  // DEPLOY_BASE=/website-of-awj/ npm run build
  base: process.env.DEPLOY_BASE || '/',
  plugins: [react()],
  server: { port: 5173, host: true },
});
