import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import GetDerivedStateFromProps from './GetDerivedStateFromProps.js';
import GetSnapshotBeforeUpdate from './GetSnapshotBeforeUpdate.js';
import Hooks from './Hooks.js';
export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
        };
    }
    render() {
        return (
            <div>
                {/* 16.8生命周期 */}
                {/* <GetDerivedStateFromProps num="2" /> */}
                {/* <GetSnapshotBeforeUpdate /> */}
                <Hooks num="0" />
                </div>
        );
    }
}

