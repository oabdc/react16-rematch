import Loadable from 'react-loadable';
const Loading = () => null;

export const home = Loadable({
    loader: () => import('../containers/home/index'),
    loading: Loading,
});
