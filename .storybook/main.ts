// @ts-nocheck
import type {StorybookConfig} from '@storybook/nextjs'
const path = require("path");
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config, {
    configType
  }) => {
    
    config.resolve.modules.push(path.resolve(__dirname, '../src'));
    
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack')
    });
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
