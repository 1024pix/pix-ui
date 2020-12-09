module.exports = {
  addons: [
    '@storybook/addon-notes/register-panel',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
  ],
  stories: ['../addon/**/*.stories.js'],
};
