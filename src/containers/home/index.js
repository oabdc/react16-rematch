import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
    useEffect(() => {
        props.getCity();
    });
    return (
        <div>111</div>
    );
}

const HomeManage = connect(mapState, mapDispatch)(Home);
export default HomeManage;
