
import Home from './home/Home';
import BaseConfig1 from './baseConfig/BaseConfig1';
import HomeRouter from './home/HomeRouter';


const MainRouters = [
    {
        path: '/main',
        exact: true,
        title: '首页',
        component: Home,
        childrenRouterPath:'./home/HomeRouter',
        childrenRouterName:'HomeRouter',
        isnot: true
    },
    {
        path: '/main/baseC',
        component: BaseConfig1,
        exact: true,
        title: '基础设置',
        childrenRouterPath:'./baseConfig/BaseCRouter',
        childrenRouterName:'BaseCRouter',
        isnot: true
    }
    
]

export default MainRouters