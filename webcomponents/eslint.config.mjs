import pixRecommendedConfig from '@1024pix/eslint-plugin/config';
import babelParser from '@babel/eslint-parser';
import i18nJsonPlugin from 'eslint-plugin-i18n-json';
import prettierRecommendedConfig from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

const compiledOutputFiles = ['dist/*', 'tmp/*'];
const dependenciesFiles = ['node_modules/*'];
const miscFiles = [
  'index.js',
  'coverage/*',
  '!**/.*',
  '**/.eslintcache',
  '.circleci/**',
  '.github/**',
  '.template-lintrc.js',
  'tests/dummy/**'
];
const nonPhraseGeneratedFiles = ['translations/en.json', 'translations/fr.json'];

const nodeFiles = [
  'eslint.config.js',
  'testem.js',
  'config/**/*.js',
  'lib/*/index.js'
];

export default [
  ...pixRecommendedConfig,
  prettierRecommendedConfig,
  {
    ignores: [
      ...compiledOutputFiles,
      ...dependenciesFiles,
      ...miscFiles,
      ...nodeFiles,
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          configFile: false,
          babelrc: false,
          plugins: [['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }]],
        },
      },
    },
    rules: {
      'no-irregular-whitespace': 'off',
      'no-restricted-imports': ['error', { paths: ['lodash'] }],
    },
  },
  {
    files: ['tests/**/*.js'],

    languageOptions: {
      globals: {
        server: false,
      },
    },
  },
  {
    files: nonPhraseGeneratedFiles,
    plugins: { 'i18n-json': i18nJsonPlugin },
    processor: {
      meta: { name: '.json' },
      ...i18nJsonPlugin.processors['.json'],
    },
    rules: {
      ...i18nJsonPlugin.configs.recommended.rules,
    },
  },
];
