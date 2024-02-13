import { fileURLToPath, URL } from 'node:url'

import {resolve} from "node:path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.js'),
      name: 'PixUI',
      // the proper extensions will be added
      fileName: 'pix-ui',
    },
    target: ['es2015'],
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
