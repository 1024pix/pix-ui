'use strict';

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: 'module',
    babelOptions: {
      plugins: [['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }]],
    },
  },
  plugins: ['ember', 'qunit'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:qunit/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    'no-restricted-imports': [
      'error',
      'lodash',
      {
        name: '@ember/test-helpers',
        importNames: ['render', 'visit', 'find'],
        message:
          "Please import 'render' from '@1024pix/ember-testing-library'.\n Please import 'visit' from '@1024pix/ember-testing-library'.\n. 'find' should be replaced with '@1024pix/ember-testing-library' 'find...'/'get...'/'query...' methods to enforce accessible usages.",
      },
    ],
  },
  overrides: [
    // node files
    {
      files: [
        'scripts/*.js',
        '.eslintrc.js',
        './.prettierrc.js',
        './.stylelintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/**/*.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js',
      ],
      excludedFiles: ['addon/**', 'addon-test-support/**', 'app/**', 'tests/dummy/app/**'],
      env: {
        browser: false,
        node: true,
      },
      extends: ['plugin:n/recommended'],
    },
    {
      // test files
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
    },
  ],
};
