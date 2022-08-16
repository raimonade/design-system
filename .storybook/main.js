const path = require('path');

const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/docs/Intro.stories.mdx', '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app', 'storybook-dark-mode'],
  babel: async options => {
    return { ...options,
      plugins: [...options.plugins, ['@emotion', {
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: '[local]',
        cssPropOptimization: true
      }]]
    };
  },

  webpackFinal(config) {
    delete config.resolve.alias['emotion-theming'];
    delete config.resolve.alias['@emotion/styled'];
    delete config.resolve.alias['@emotion/core'];
    return config;
  } // typescript: {
  //   reactDocgen: 'none',
  // },
  ,

  core: {
    builder: 'webpack5'
  }
};