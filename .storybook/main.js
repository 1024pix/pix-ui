module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-mdx-gfm'],
  stories: ['../docs/**/*.stories.@(mdx)', '../app/**/*.stories.@(js|mdx)'],
  framework: {
    name: '@storybook/ember',
    options: {}
  },
  docs: {
    autodocs: true
  }
};