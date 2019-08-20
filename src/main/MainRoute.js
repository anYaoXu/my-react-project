
import Home from './home/Home';
import baseConfig from './baseConfig/baseConfig';
import Home1 from './home/Home1';
import Home2 from './home/Home2';


const MainRouters = [    
    {
        path:'/main',
        component:Home,
        exact: true
    },
    {
        path:'/main/home',
        component:Home,
        exact: false,
        children:[
            {
                path:'/main/home/home1',
                component:Home1,
            },
            {
                path:'/main/home/home2',
                component:Home2,
            }
        ]
    },
    {
        path:'/main/baseC',
        component:baseConfig,
        exact: true
    }
]

export default MainRouters