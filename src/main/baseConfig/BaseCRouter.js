import BaseConfig1 from './BaseConfig1';
import BaseConfig2 from './BaseConfig2';

const BaseCRouters = [
    {
        path: '/main/baseC',
        component: BaseConfig1,
        title:'base1'
    },
    {
        path: '/main/basec2',
        component: BaseConfig2,
        title:'base2'
    },
]

export default BaseCRouters;