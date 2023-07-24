module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-mdx-gfm'],
  stories: ['../docs/**/*.stories.@(mdx)', '../app/**/*.stories.@(js|mdx)'],
  staticDirs: ['../dist'],
  framework: {
    name: '@1024pix/storybook-ember',
    options: {}
  },
};
