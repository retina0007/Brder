
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Die Basis auf './' setzen, damit alle Assets relativ zur index.html geladen werden
  base: './', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
