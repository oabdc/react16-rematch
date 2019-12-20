const merge = require('webpack-merge');
const ora = require('ora');
const config = require('../config');
const webpackConfigBase = require('./webpack.base.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackConfigProd = {
    entry: './src/main',
    mode: 'production',
    performance: {
        hints: 'warning',
        maxAssetSize: 3000000,
        maxEntrypointSize: 2000000,
    },
    // webpack4 打包分割

    /*
    app         项目代码
    vendor      第三方依赖
    manifest    webpack 的 runtime 和 manifest，管理所有模块的交互
     */
    optimization: {
        runtimeChunk: {
            name: 'manifest',
        },
        splitChunks: {
            cacheGroups: {
                vender: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vender',
                    priority: -10,
                    chunks: 'all',
                },
            },
        },
        minimizer: [
            // 压缩代码  开发环境压缩代码耗时间
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false, // 去掉注释
                        beautify: false,
                    },
                    compress: {
                        warnings: false, // 忽略警告
                    },
                },
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: process.env.NODE_ENV === 'testing'
                ? 'index.html'
                : config.build.index,
            template: 'index.html',
            inject: true,
            chunksSortMode: 'none',
        }),
        // 提取css
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].css',
        }),
        new webpack.IgnorePlugin(/\.\/locale/, /moment/),
        new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
    ],
};
const spinner = ora('building for production...');
spinner.start();
const webpackConfig = merge(webpackConfigBase, webpackConfigProd);
webpack(webpackConfig, (err, status) => {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(`${status.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
    })}\n`);
});
