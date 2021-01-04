module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
  ],
  stories: ['../addon/**/*.stories.@(js|mdx)'],
};
