module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  stories: ['../docs/**/*.stories.@(mdx)', '../app/**/*.stories.@(js|mdx)'],
  staticDirs: ['../dist'],
  core: {
    builder: 'webpack5',
  },
};
