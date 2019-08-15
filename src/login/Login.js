import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.less';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};        
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        console.log('执行登录操作');
        this.props.history.push('/main');
    }
    render() {
        return (
            <div id="loginWrap">
                <div className="header">
                </div>
                <div className="content">
                    <div className="left"></div>
                    <div className="right">
                        <div className="form-box">
                            <div className="form-header">
                                <div className="login-left">扫码登录</div>
                                <div className="login-right active">账号登录</div>
                            </div>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(244,121,131)' }} />} placeholder="请输入用户名" />
                                </Form.Item>
                                <Form.Item>
                                    <Input prefix={<Icon type="lock" theme="filled" style={{ color: 'rgba(244,121,131)' }} />} placeholder="请输入密码" type="password" />
                                </Form.Item>
                                <Form.Item>
                                    <Checkbox>记住我</Checkbox>
                                    <a className="login-form-forgot" href="">忘记密码</a>
                                    <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                                    or <a href="">去注册</a>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="footer"> Copyright 2019 希瓜科技有限公司 </div>
            </div>
        )
    }
}

export default Login;