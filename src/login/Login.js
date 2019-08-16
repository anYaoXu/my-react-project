import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.less';
import axiosService from '../core/http';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginType: 2,
            userName:'',
            password:''
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // "loginname":"test-admin","password":"123456","logintype":1,"countrycode":"+86 中国大陆"
        // console.log(this.state.userName, this.state.password);
        const param = {
            loginname:this.state.userName,
            password:this.state.password,
            logintype: 1,
            countrycode:'+86 中国大陆'
        }
        const url='http://192.168.100.149:8060/uk-bsc/v1/login/ss';
        const a = axiosService.postAxios(url, param);
        console.log(a);
        // this.props.history.push('/main');
    }
    showLoginBox = (type) => {
        console.log(type)
        this.setState({
            loginType: type
        })
    }
    userNameChange = (event)=>{
        this.setState({
            userName:event.target.value
        })
    }
    pwdChange = (event)=>{
        this.setState({
            password:event.target.value
        })
    } 
    render() {
        const type = this.state.loginType;
        let lognBox;
        if (this.state.loginType === 2) {
            lognBox = (
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(244,121,131)' }} />} placeholder="请输入用户名" value={this.state.userName} onChange={this.userNameChange} />
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<Icon type="lock" theme="filled" style={{ color: 'rgba(244,121,131)' }} />} placeholder="请输入密码" type="password"  value={this.state.password} onChange={this.pwdChange}/>
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>记住我</Checkbox>
                        <a className="login-form-forgot" href="">忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        or <a href="">去注册</a>
                    </Form.Item>
                </Form>
            )
        }else{
            lognBox = (
                <p>2222222222222</p>
            )
        }
        return (
            <div id="loginWrap">
                <div className="header">
                </div>
                <div className="content">
                    <div className="left"></div>
                    <div className="right">
                        <div className="form-box">
                            <div className="form-header">
                                <div className={`login-left ${this.state.loginType === 1?'active':null}`} onClick={this.showLoginBox.bind(this, 1)}>扫码登录</div>
                                <div className={`login-right ${this.state.loginType === 2?'active':null}`} onClick={this.showLoginBox.bind(this, 2)}>账号登录</div>
                            </div>

                            {lognBox}

                        </div>
                    </div>
                </div>
                <div className="footer"> Copyright 2019 希瓜科技有限公司 </div>
            </div>
        )
    }
}

export default Login;