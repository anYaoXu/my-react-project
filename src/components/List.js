import React, {Component} from 'react';
import Mock from 'mockjs';
import axiosService from '../core/http';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        const list = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-5': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }]
        })
        console.log(list);
        console.log(JSON.stringify(list, null, 5));
    }
    componentDidMount(){
        const a = axiosService.getAxios('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20',{
        })
        console.log(a);
        // AxiosService.co();
    }

    render() {
        return (
            <p>list</p>
        );
    }
}

export default List;