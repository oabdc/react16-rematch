import axios from 'axios';
// 获取数据
export const getData = (url) => {
    return axios.get(url);
};
