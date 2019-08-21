
import Home from './home/Home';
import baseConfig from './baseConfig/baseConfig';
import HomeRouter from './home/HomeRouter';

import Home1 from './home/Home1';
import Home2 from './home/Home2';


const MainRouters = [
    {
        path: '/main',
        exact: false,
        title: '首页',
        component: Home,
        routes: [
            {
                path: '/main/home/home1',
                component: Home1,
                title: 'home1'
            },
            {
                path: '/main/home/home2',
                component: Home2,
                title: 'home2'
            }
        ]
    },
    {
        path: '/main/baseC',
        component: baseConfig,
        exact: true,
        title: '基础设置',
    }
]

export default MainRouters