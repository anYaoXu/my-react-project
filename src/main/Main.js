import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Routers from '../Router';
import MainRouters from './MainRoute';
import FrontendAuth from '../core/FrontendAuth';
import PrivateRoute from '../core/PrivateRoute';
import './Main.less';
import { Link, NavLink, Redirect } from "react-router-dom";
import Home1 from './home/Home1'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            r_children: []
        };
    }
    routeClick = (route, type) => {
        this.props.history.push(route.path);
        if (type === 'nav') {
            if (route.routes) {
                this.setState({
                    r_children: route.routes
                })
            } else {
                this.setState({
                    r_children: []
                })
            }
        }
    }
    render() {
        return (
            <div id="main-warp">
                <div className="header"></div>
                <div className="nav">
                    {
                        MainRouters.map((r, key) => {
                            if (r.title) {
                                return (
                                    <span key={key} onClick={this.routeClick.bind(this, r, 'nav')} > {r.title}</span>
                                )
                            }
                        })
                    }
                </div>
                <div className="content">
                    <div className="menu">
                        {
                            this.state.r_children.map((child, key) => {
                                return (
                                    <span key={key} onClick={this.routeClick.bind(this, child, 'menu')}>{child.title}</span>
                                )
                            })
                        }
                    </div>
                    <div className="content-box">
                        {/* <Switch> */}
                            {/* <FrontendAuth config={MainRouters}></FrontendAuth> */}
                            {/* {
                                MainRouters.map((route, key) => {
                                    if (route.exact) {
                                        return (
                                            <Route
                                                key={key}
                                                exact
                                                path={route.path}
                                                render={props => (
                                                    <route.component {...props} routes={route.routes} />
                                                )}
                                            />
                                        )
                                    } else {
                                        return (
                                            <Route key={key} path={route.path}
                                                render={props => (
                                                    <route.component {...props} routes={route.routes} />
                                                )}
                                            />
                                        )

                                    }
                                })
                            } */}
                        {/* </Switch> */}
                        {
                            MainRouters.map((route, key) => {
                                return (
                                        <Route key={key} path={route.path} component={route.component}/>
                                    )
                                })
                        }
                        <Route path='/main/home/home1' component={Home1}/>
                        
                    </div>
                </div>
            </div>

        );
    }
}

export default Main;