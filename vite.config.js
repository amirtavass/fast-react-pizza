import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

import eslint from '@nabla/vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    eslint({
      // This will run ESLint when Vite starts
      lintOnStart: true,
      // Shows errors as overlay (visible in the browser)
      emitError: true,
      // Shows warnings as overlay
      emitWarning: true,
    }),
  ],
});
