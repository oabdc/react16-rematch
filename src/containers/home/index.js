import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './style.less';

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

function Home(props) {
    // useEffect(() => {
    //     props.getCity();
    // });
    return (
        <div>
            <NavLink to="/about">jump about</NavLink>
            <div>我是index</div>
            </div>
    );
}

const HomeManage = connect(mapState, mapDispatch)(Home);
export default HomeManage;
