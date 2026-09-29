import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    // Builds into public/build with a manifest that Blade's @vite reads, and
    // in dev tells Laravel where the dev server is (public/hot).
    laravel({
      input: ['resources/js/main.tsx'],
      refresh: true,
    }),
    react(),
  ],
  server: {
    watch: {
      ignored: ['**/storage/framework/views/**'],
    },
  },
});
