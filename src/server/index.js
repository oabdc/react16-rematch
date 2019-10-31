import axios from 'axios';

const Network = {};

Network.get = (path, params) => {
    return axios.get(path, params);
};
Network.post = (path, params) => {
    return axios.post(path, params);
};
export default Network;
