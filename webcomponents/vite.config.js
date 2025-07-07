import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // traiter toutes les balises avec un tiret comme des éléments personnalisés
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, './src/main.js'),
      name: 'PixUI',
      // the proper extensions will be added
      fileName: 'pix-ui',
    },
    target: ['es2015'],
  },
});
