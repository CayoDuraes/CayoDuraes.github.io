import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User page (cayoduraes.github.io) é servida na raiz do domínio → base '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
