import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { App } from './index';

const mapDispatch = ({ common: { setUserData, getUserData } }) => ({
    setUserData,
    getUserData,
});
@connect(null, mapDispatch)
export default class RouterGuard extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <App />
                </Router>
            </div>
        );
    }
}
