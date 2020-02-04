const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config) => {
    const webpackConfig = config;
    webpackConfig.resolve.alias['@components'] = `${path.resolve(
      __dirname,
    )}/components`;
    webpackConfig.resolve.alias['@src'] = `${path.resolve(__dirname)}/src`;
    webpackConfig.resolve.alias['@public'] = `${path.resolve(
      __dirname,
    )}/public`;
    return webpackConfig;
  },
});

const data = [{ id: 1, name: 'Josh' }];
const isArray = Array.isArray(data);
console.log(isArray);
