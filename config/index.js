const path = require('path');
const proxyConfig = require('./dev.proxy');
module.exports = {
    build: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        index: path.resolve(__dirname, '../dist/template/react/index.html'),
        productionGzipExtensions: ['js', 'css'],
    },
    dev: {
        proxyTable: proxyConfig.enable ? {
            '/api': {
                target: proxyConfig.target,
                changeOrigin: true,
                headers: {
                    cookie: proxyConfig.cookie,
                },
            },
            '/**/*.json': {
                target: proxyConfig.target,
                changeOrigin: true,
                headers: {
                    cookie: proxyConfig.cookie,
                },
            },
        } : {},
    },
};
