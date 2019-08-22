import Home from './Home';
import Home1 from './Home1';
import Home2 from './Home2';
import Home4 from './Home4';
import Home5 from './Home5';

const HomeRouter =[
    {
        path: '/main',
        component: Home,
        title: ''
    },
    {
        path: '/main/home/home1',
        component: Home1,
        title: 'home1'
    },
    {
        path: '/main/home/home2',
        component: Home2,
        title: 'home2'
    },
    {
        title:'组',
        routers:[
            {
               path:'/main/home/home3',
               component: Home4
            },
            {
                path:'/main/home/home4',
                component: Home5
            }
        ]
    }
]
export default HomeRouter