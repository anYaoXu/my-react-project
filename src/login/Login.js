import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Login.less';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginType: 1,
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('执行登录操作');
        this.props.history.push('/main');
    }
    showLoginBox = (type) => {
        console.log(type)
        this.setState({
            loginType: type
        })
    }
    render() {
        const type = this.state.loginType;
        console.log('1111',type);
        let lognBox;
        if (this.state.loginType === 1) {
            lognBox = (
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