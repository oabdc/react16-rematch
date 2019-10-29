import React from 'react';
import { main, Switch, Route } from 'react-router-dom';
import * as load from './routerComponents';
const ROUTE = [
    {
        path: '/',
        component: load.home,
    },
];
class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    {ROUTE.map((val, key) =>
                        <Route key={key} path={val.path} component={val.component} excat={val.exact} />,
                    )}
                </Switch>
            </main>
        );
    }
}

export const App = () => (
    <div>
         <Main />
    </div>
);

