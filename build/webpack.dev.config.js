const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const proxyConfig = require('../config/dev.proxy');
const apiMocker = require('mocker-api');
const path = require('path');
const webpackConfigDev = {
    // 配置服务器代理
    devServer: {
        historyApiFallback: true,
        open: true,
        hot: true,
        inline: true,
        port: 8090,
        proxy: proxyConfig._proxy,
        before(app) {
            apiMocker(app, path.resolve('./mock/index.js'),
                proxyConfig._proxy,
            );
        },
    },
    // 当前环境配置选项
    mode: 'development',
    // 入口
    entry: {
        app: [
            './src/main',
        ],
    },

    // devServer: {
    //     before(app) {
    //         apiMocker(app, path.resolve('./mock/index.js'), {
    //             proxy: proxyConfig._proxy,
    //             changeHost: true,
    //         });
    //     },
    // },
    plugins: [
        // 模版文件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            chunksSortMode: 'none',
        }),
        // 提取css
        new MiniCssExtractPlugin({
            filename: 'style.[hash:4].css',
            chunkFilename: '[id].css',
        }),
        // 热更新相关
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoEmitOnErrorsPlugin(),
    ],
};
module.exports = merge(webpackConfigBase, webpackConfigDev);
