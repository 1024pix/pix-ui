import { fileURLToPath, URL } from 'node:url'

import {resolve} from "node:path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
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
    vue({
      template: {
        compilerOptions:
          {
            // This tells vite to handle matching html tags in component template as custom elements
            isCustomElement: (tag) => tag.includes('-'),
          },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
