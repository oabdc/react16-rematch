> react16.0 + rematch + react-router4.0 + axios + webpack4.0 + antd + eslint + mock + less

此项目会把 react项目搭建最佳实践方案 在此更新

## 1.使用简介

推荐使用nvm维护node版本
node 10.0.0
npm install

npm run dev

npm run build

## 2.项目结构
```
├─build         webpack配置
├─config        基础配置参数
├─mock          mock数据
├─src
|  ├─api        对请求库的封装及获取数据的方法
|  ├─assets     webpack处理的资源
|  ├─components 公共组件
|  ├─containers 页面组件
|  ├─modals     store的model文件，创建state、reducers、effects 工具函数
|  ├─server     接口服务的处理
|  ├─store      store配置
|  ├─routes     路由配置
├─static        静态资源
├─.eslintrc.js  eslint配置
├─.gitignore    git项目管理忽略文件夹
├─index.html   模版文件
|
```
- 1.0.1

使用web-dev-server代替hot-middleware 简化配置，
moker-api代替moke，简化moke数据方式

- 1.0.2

优化打包体积，（antd内置moment，moment语言包体积较大，可webpack忽略第三方包，需要时指定引入）



