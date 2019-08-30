import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Routers from '../Router';
import MainRouters from './MainRoute';
import FrontendAuth from '../core/FrontendAuth';
import PrivateRoute from '../core/PrivateRoute';
import './Main.less';
import { Link, NavLink, Redirect } from "react-router-dom";
// import Home1 from './home/Home1';
// import Home4 from './home/Home4';
// import Home5 from './home/Home5';
import Menus from '../components/Menus';
import HomeRouter from './home/HomeRouter';
import BaseConfig1 from './baseConfig/BaseConfig1';
import BaseCRouters from './baseConfig/BaseCRouter';

import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            r_children: 'HomeRouter'
        };
    }
    routeClick = (route) => {

        this.setState({
            r_children: route.childrenRouterName
        });
        this.props.history.push(route.path);
    }
    render() {
        // const currentRouteConfig = this.state.r_children;
        // import currentRouteConfig from ''
        // debugger;

        let currentRouteConfig = HomeRouter;


        // const path = this.state.r_children;

        // const as = () => import router from path;
        // debugger;
        // console.log(as());
        // const ad = require(path);
        // console.log(ad);
        // import currentRouteConfig from {path};

        if (this.state.r_children === 'HomeRouter') {
            currentRouteConfig = HomeRouter;
        } else if (this.state.r_children === 'BaseCRouter') {
            currentRouteConfig = BaseCRouters;
        }

        const menuList = MainRouters.map((nav, key) => {
            if (nav.title) {
                return (
                    <Menu.Item key={key}>
                        <span onClick={this.routeClick.bind(this, nav)}>
                        {nav.title}
                        </span>
                    </Menu.Item>
                )
            }
        })

        return (
            <div id="main-warp">
                <div className="header"></div>
                <div className="nav">
                    <Menu mode="horizontal">
                        {
                            menuList
                        }
                    </Menu>
                </div>
                <div className="content">
                    <Menus routers={currentRouteConfig} history={this.props.history}></Menus>
                    <div className="content-box">
                        {
                            MainRouters.map((route1, key1) => {
                                if (!route1.isnot) {
                                    return (
                                        <Route key={key1} exact path={route1.path} component={route1.component} />
                                    )
                                }
                            })
                        }
                        {

                            currentRouteConfig.map((route, key) => {
                                if (route.routers) {
                                    // debugger;
                                    const item = route.routers.map((c, key) => {
                                        return (
                                            <Route key={key} exact path={c.path} component={c.component} />
                                        )
                                    })
                                    return (
                                        <div key={key}>
                                            {item}
                                        </div>
                                    )
                                } else {
                                    return (
                                        <Route key={key} exact path={route.path} component={route.component} />
                                    )

                                }
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
