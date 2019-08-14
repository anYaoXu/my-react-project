import Login from './login/Login';
import Main from './main/Main';

const RoutersConfig =[
    {
        path:'/login',
        component:Login,
        exact: true
    },
    {
        path:'/main',
        component:Main,
        exact: true
    }
];
export default RoutersConfig;