import axios from 'axios';

axios.interceptors.request.use((req) => {});
axios.interceptors.response.use((res) => {});

export const Network = {};

Network.get = (path, params) => {
    return axios.get(path, params);
};
Network.post = (path, params) => {
    return axios.post(path, params);
};

