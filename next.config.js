// @ts-check

const path = require('path');
const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const AppTheme = require('./public/theme');

module.exports = withBundleAnalyzer(withLess(
    withCSS({
        lessLoaderOptions: {
            javascriptEnabled: true,
            modifyVars: AppTheme,
        },
        webpack: config => {
            const webpackConfig = config;
            webpackConfig.resolve.alias['@components'] = `${path.resolve(__dirname)}/components`;
            webpackConfig.resolve.alias['@src'] = `${path.resolve(__dirname)}/src`;
            webpackConfig.resolve.alias['@public'] = `${path.resolve(__dirname)}/public`;
            webpackConfig.resolve.alias['@services'] = `${path.resolve(__dirname)}/services`;

            return webpackConfig;
        },
    }),
));
