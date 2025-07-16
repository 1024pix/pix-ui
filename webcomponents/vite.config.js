/// <reference types="vitest/config" />
// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const dirname =
  // eslint-disable-next-line no-undef
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
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
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "@assets/pix-design-tokens/index.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@assets': fileURLToPath(new URL('../assets', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, './src/main.js'),
      name: 'PixUI',
      // the proper extensions will be added
      fileName: 'pix-ui',
    },
    target: ['es2015'],
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.js'],
        },
      },
      {
        extends: true,
        test: {
          name: 'test',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
            screenshotFailures: false,
          },
        },
      },
    ],
  },
});
