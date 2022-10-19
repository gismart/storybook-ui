const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    // 👈 and add this here
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, '../src/components'),
      constants: path.resolve(__dirname, '../src/constants'),
      models: path.resolve(__dirname, '../src/models'),
      content: path.resolve(__dirname, '../src/content'),
      styles: path.resolve(__dirname, '../src/styles'),
    }
    return config
  },
}
