const config = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-webpack5-compiler-babel',
  ],

  stories: ['../docs/**/*.@(mdx|stories.@(mdx))', '../app/*/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  staticDirs: ['../dist'],

  framework: {
    name: '@storybook/ember',
    options: {},
  },

  docs: {
    autodocs: true,
  },
};
export default config;
