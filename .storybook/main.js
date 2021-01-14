module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-controls',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ]
};
