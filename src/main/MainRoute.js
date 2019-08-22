
import Home from './home/Home';
import BaseConfig from './baseConfig/BaseConfig';
import HomeRouter from './home/HomeRouter';


const MainRouters = [
    {
        path: '/main',
        exact: true,
        title: '首页',
        component: Home,
        childrenRouterName:'HomeRouter',
        isnot: true
    },
    {
        path: '/main/baseC',
        component: BaseConfig,
        exact: true,
        title: '基础设置',
    }
    
]

export default MainRouters