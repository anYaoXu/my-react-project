import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import $ from 'jquery';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const isLogin = $.cookie('token');
        const { location,config } = this.props;
        console.log(location);
        if (isLogin) {
            if (config.children) {
                const route = config.children.find(c=> c.path === location.pathname) || config;
                return (
                    <Route path={route.path}
                        component={route.component} />
                )
            } else {
                return (
                    <Route path={config.path}
                        component={config.component} />
                )
            }

        } else {
            return (
                <Redirect to='/login' />
            );
        }

    }
}

export default PrivateRoute;