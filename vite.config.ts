import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    // Builds into public/build with a manifest that Blade's @vite reads, and
    // in dev tells Laravel where the dev server is (public/hot).
    laravel({
      input: [
        // Public site (React).
        'resources/js/main.tsx',
        // Admin panel (Blade + Tailwind + Alpine); kept separate from the site.
        'resources/css/admin.css',
        'resources/js/admin/admin.js',
      ],
      refresh: true,
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      ignored: ['**/storage/framework/views/**'],
    },
  },
});
