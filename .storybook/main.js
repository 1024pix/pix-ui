module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  stories: [
    '../docs/**/*.stories.@(mdx)',
    '../addon/**/*.stories.@(js|mdx)',
  ],
};
