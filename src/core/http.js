// import React, { Component } from 'react';
import axios from 'axios';
import {message} from 'antd';

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
        if (response.code) {
            return response.data;
        }else{
            message.error(res.msg);
        }
    },
    error => {
        debugger;
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
        const loginData = getLoginInfo();
        return {
            data: params,
            req_type: '10',
            token: params.token || (loginData ? loginData.token : ''),
            bodyparams: '',
            method:'post',
            action: params.action || ''
          };
    }
    function getLoginInfo(){
        // return {
        //     username: $.cookie('username'),
        //     userid: $.cookie('userid'),
        //     loginname: $.cookie('loginname'),
        //     mobile: $.cookie('mobile'),
        //     token: $.cookie('token'),
        //     headimg: $.cookie('headimg'),
        //   };
        return {}
    }
    function getAxios(url, params = {}){
        service.get(url,{}).then(response => {
            return response;
        }).catch(error => {
            return error;
        })
    }
    function postAxios(url, params = {}){
        const queryData = getCommonParams(params);
        service.post(url,queryData).then(response => {;
            return response;
        }).catch(error => {
            return error;
        })
    }

export default {getAxios,postAxios};


