const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfigDev = {
    // 当前环境配置选项
    mode: 'development',
    // 入口
    entry: {
        app: [
            'webpack-hot-middleware/client?reload=true',
            // 'react-hot-loader/patch',
            './src/main',
        ],
    },
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};
module.exports = merge(webpackConfigBase, webpackConfigDev);
