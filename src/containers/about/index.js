import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import './style.less';

const mapState = ({ common }) => {
    return {
        city: common.city,
    };
};
const mapDispatch = ({ common }) => {
    return {
        getCity: common.getCity,
    };
};

function About(props) {
    return (
        <div>
            <NavLink to="/">jump index</NavLink>
            <div>我是about</div>
            </div>
    );
}

const Wrap = connect(mapState, mapDispatch)(About);
export default Wrap;
