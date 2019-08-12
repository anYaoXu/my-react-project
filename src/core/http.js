// import React, { Component } from 'react';
import axios from 'axios';

// 创建axios实例
const service = axios.create({
    baseURL: '',
    timeout: 5000,
    withCredentials: true, // 跨域携带cookie
    xsrfCookieName: 'xsrf-token' //当创建实例的时候配置默认配置
});

// 添加请求拦截器，此处可以配置每次请求都需要携带的参数，比如token
service.interceptors.request.use(
    (config) => {
        // 每次请求都带上token
        // if(store.getter.token){
        //     config.header['token'] = getToken()
        // }
        config.header['token'] = '1c0717ac45534b6b568eba5cfaf10b06'
        config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        return config;
    }, (error) => {
        // 多错误做些什么
        return Promise.reject(error);
    });

// 响应拦截器 response是接收服务器返回后的结果，可以在这里做些状态判断
service.interceptors.response.use(
    response => {
        // 判断服务器是否请求成功
        const res = response.data;
        if (res.success) {
            return res;
        }else{
            console.info("错误xxxx");
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    console.log('未登录，跳转登录');
                    break;
                case 404:
                    console.info("404");
                    break;
                case 403:
                    console.log('登录过期，跳转登录');
                    //清除全局 cookie
                    // localStorage.removeItem('token');
                    // store.commit('loginSuccess', null);
                    break;
                case 500:
                    console.log('服务器错误');
                    break;
                default:
                    console.info("其他错误")

            }
        }
        else {
            return Promise.reject(error);
        }

    }
)

    function getAxios(url, params = {}){
        service.get(url,{}).then(response => {
            return response;
        }).catch(error => {
            return error;
        })
    }
    function postAxios(url, params = {}){
        service.post(url,params).then(response => {
            return response;
        }).catch(error => {
            return error;
        })
    }

export default {getAxios,postAxios};


