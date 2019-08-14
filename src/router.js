import Login from './login/Login';
import Main from './main/Main';

const RoutersConfig =[
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/main',
        component:Main,
    }
];
export default RoutersConfig;