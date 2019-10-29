import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './assets/styles/index.less';
import RouterGuard from './routes/routerGuard';

ReactDOM.render(
    <Provider store={store}>
        <RouterGuard />
    </Provider>
    , document.getElementById('app'),
);

