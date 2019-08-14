
import Home from './home/Home';
import baseConfig from './baseConfig/baseConfig';

const MainRouters = [    
    {
        path:'/main',
        component:Home,
        exact: true
    },
    {
        path:'/main/baseC',
        component:baseConfig,
        exact: true
    }
]

export default MainRouters