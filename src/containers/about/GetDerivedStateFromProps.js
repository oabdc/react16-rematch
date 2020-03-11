import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default class Children extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState);
        // 返回一个对象来更新 state 或者返回 null 来表示接收到的 props 不需要更新 state
        return {
            num: nextProps.num,
        };
    }

    render() {
        const { num } = this.state;
        return (
            <div>{num}</div>
        );
    }
}
