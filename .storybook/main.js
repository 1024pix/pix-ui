const config = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-mdx-gfm'],
  stories: ['../docs/**/*.@(mdx|stories.@(mdx))', '../app/*/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  staticDirs: ['../dist'],
  framework: {
    name: '@1024pix/storybook-ember',
    options: {}
  },
};
export default config;
