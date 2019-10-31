import axios from 'axios';
import Network from '../server/index';
// 获取数据
export const getData = (url) => {
    return axios.get(url);
};
export const getCity = () => {
    return Network.get('/api/lbsInfos/108343');
};
//

