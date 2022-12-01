module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  stories: [
    '../docs/**/*.stories.@(mdx)',
    '../app/**/*.stories.@(js|mdx)',
  ],
  core: {
    builder: 'webpack5',
  },
};
