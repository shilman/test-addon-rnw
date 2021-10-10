module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-react-native-web', '@storybook/addon-essentials'],
  features: {
    babelModeV7: false,
  },
};
