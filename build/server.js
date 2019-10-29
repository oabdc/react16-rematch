const express = require('express');
const path = require('path');
const opn = require('opn');
const app = express();
const webpack = require('webpack');
const config = require('../config');
// 代理中间件
const proxyMiddleware = require('http-proxy-middleware');

const proxyConfig = require('../config/dev.proxy');
const proxyTable = config.dev.proxyTable;
const webpackConfig = process.env.NODE_ENV === 'development'
    ? require('./webpack.dev.config')
    : require('./webpack.prod.config');

const compiler = webpack(webpackConfig);

const PORT = 9999;
const uri = `http://localhost:${PORT}`;
// 对更改的文件进行监控 它可以把 webpack 处理过的文件发送到一个 server
const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
    quiet: true,
});
// 热加载中间件
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    // log: () => {}
});
// html-webpack-plugin-after-emit事件是提供给其他插件使用的，用于改变html的内容， html-webpack-plugin插件在插入静态资源时存在一些问题
compiler.hooks.entryOption.tap('compilation', (compilation) => {
    compilation.hooks.rebuildModule.tap('html-webpack-plugin-after-emit', (data, cb) => {
        hotMiddleware.publish({ action: 'reload' });
        cb();
    });
});

// proxy api requests
Object.keys(proxyTable).forEach((context) => {
    let options = proxyTable[context];
    if (typeof options === 'string') {
        options = { target: options };
    }
    app.use(proxyMiddleware(context, options));
});

app.use(require('connect-history-api-fallback')());
app.use(devMiddleware);
app.use(hotMiddleware);
// 引入静态资源
app.use(express.static(path.join(__dirname, '../static')));
devMiddleware.waitUntilValid(() => {
    console.log(`> Listening at ${uri}\n`);
    opn(uri);
});
// 监听接口 mock
app.use((req, res, next) => {
    // console.log(req.path);
    if (!proxyConfig.enable) {
        res.json(require(path.join(__dirname, '../mock', req.path)));
    } else {
        next();
    }
});
app.listen(PORT);
