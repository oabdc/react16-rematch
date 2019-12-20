import Loadable from 'react-loadable';
const Loading = () => null;

export const home = Loadable({
    loader: () => import('../containers/home/index'),
    loading: Loading,
});
export const about = Loadable({
    loader: () => import('../containers/about/index'),
    loading: Loading,
});
