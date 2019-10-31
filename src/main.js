import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Provider } from 'react-redux';
import store from './store';
import './assets/styles/index.less';
import RouterGuard from './routes/routerGuard';
moment.locale('zh-cn');

ReactDOM.render(
    <Provider store={store}>
        <RouterGuard />
    </Provider>
    , document.getElementById('app'),
);

