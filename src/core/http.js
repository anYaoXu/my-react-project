// import React, { Component } from 'react';
import axios from 'axios';
import {message} from 'antd';
import UtilService from './util.service';

// 创建axios实例
const service = axios.create({
    baseURL: '',
    timeout: 5000,
    withCredentials: true, // 跨域携带cookie
    xsrfCookieName: 'xsrf-token' //当创建实例的时候配置默认配置
});
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 添加请求拦截器，此处可以配置每次请求都需要携带的参数，比如token
service.interceptors.request.use(
    (config) => {
        // 每次请求都带上token
        // if(store.getter.token){
        //     config.header['token'] = getToken()
        // }
        return config;
    }, (error) => {
        // 多错误做些什么
        return Promise.reject(error);
    });

// 响应拦截器 response是接收服务器返回后的结果，可以在这里做些状态判断
service.interceptors.response.use(
    response => {
        // 判断服务器是否请求成功
        if (response.data.code === 200) {
            return Promise.resolve(response);
        }else{
            return Promise.reject(response)
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    console.log('未登录，跳转登录');
                    break;
                case 404:
                    message.error('访问接口不存在');
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

    })
    function getCommonParams(params){
        const loginData = UtilService.getLoginInfo();
        return {
            data: params,
            req_type: '10',
            token: params.token || (loginData ? loginData.token : ''),
            bodyparams: '',
            method:'post',
            action: params.action || ''
          };
    }

    function getAxios(url, params = {}){
        return new Promise((resolve,reject)=>{
            service.get(url, params).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.data);
            })
        })

    }
    function postAxios(url, params = {}){
        const queryData = getCommonParams(params);
        return new Promise((resolve, reject) => {
            service.post(url,queryData).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

export default {getAxios,postAxios};


