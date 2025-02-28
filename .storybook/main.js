const config = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-webpack5-compiler-babel',
    'storybook-addon-tag-badges',
  ],

  stories: ['../docs/**/*.@(mdx|stories.@(mdx))', '../app/*/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  staticDirs: ['../dist'],

  framework: {
    name: '@storybook/ember',
    options: {},
  },

  docs: {},
};
export default config;
