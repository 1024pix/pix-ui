module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-notes/register-panel',
    '@storybook/addon-a11y',
  ],
  stories: ['../addon/**/*.stories.@(js|mdx)'],
};
