// 对api请求 

import axios from './http';
const a = axios.post('http://192.168.100.149:8060/uk-bsc/v1/searchbilllists/',{
    "method": "get",
    "req_type": "10",
    "data": {"type":1,"pagenumber":1,"pagesize":10}
})
console.log(a);