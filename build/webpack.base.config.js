const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

// const babelQuery = {
//     plugins: [
//         ['external-helpers'],
//         ['babel-plugin-transform-runtime'],
//         ['transform-decorators-legacy'],
//         ['transform-runtime'],
//         ['import', [{ libraryName: 'antd', style: true }]],
//         // ["react-loadable/babel"],
//     ],
//     presets: [
//         'es2015',
//         'stage-2',
//         'react',
//     ],
// };
module.exports = {
    // 出口，指定编译文件路径，和命名
    output: {
        path: path.join(__dirname, '../dist'),
        // path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
        // __dirname  当前模块的文件夹名称
        filename: 'static/js/[name].[hash].js',
        // [name] 被 chunk 的 name 替换。
        // [hash] 被 compilation 生命周期的 hash 替换。
        // [chunkhash] 被 chunk 的 hash 替换。


        // publicPath: devMode ? '/' : 'https://www.lgstatic.com/alpha/',
        // 大型项目 静态资源会发布cdn 此处为了测试我们都放在服务器中
        publicPath: devMode ? '/' : '../',
    },
    //
    resolve: {
        // 简易模块引入方式
        alias: {},
        // 自动解析扩展
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        // path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径
        rules: [
            {
                test: /\.js[x]?$/,
                enforce: 'pre',
                use: [{
                    loader: 'eslint-loader',
                    // options: { fix: true },
                }],
                include: path.resolve(__dirname, './src/**/*.js'),
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                // include: [path.resolve('__dirname', 'src')],
                // query: babelQuery,
            },
            {
                test: /\.css$/,
                use: [
                    !devMode ? MiniCssExtractPlugin.loader : { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    !devMode ? MiniCssExtractPlugin.loader : { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                            // 设置UI库主题颜色
                            modifyVars: {
                                '@primary-color': '#00b38a',
                            },
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'static/img/[name].[hash:7].[ext]',
                        },
                    },

                ],

            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'static/fonts/[name].[hash:7].[ext]',
                },
            },
        ],
    },

    node: {
        fs: 'empty',
    },

};

