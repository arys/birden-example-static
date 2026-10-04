import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// assetsInlineLimit: 0 so logo.svg is always emitted as a hashed file in dist/assets
export default defineConfig({ plugins: [react()], build: { assetsInlineLimit: 0 } });
