import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Routers from '../Router';
import MainRouters from './MainRoute';
import FrontendAuth from '../core/FrontendAuth';
import PrivateRoute from '../core/PrivateRoute';
import './Main.less';
import { Link, NavLink, Redirect } from "react-router-dom";
import Home1 from './home/Home1'
import Home4 from './home/Home4'
import Home5 from './home/Home5'
import Menu from '../components/Menu';
import HomeRouter from './home/HomeRouter';
import BaseConfig from './baseConfig/BaseConfig';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            r_children: []
        };
    }
    routeClick = (route) => {
        this.props.history.push(route.path);
    }
    render() {
        const currentRouteConfig = HomeRouter;
        return (
            <div id="main-warp">
                <div className="header">11111</div>
                <div className="nav">
                    {
                        MainRouters.map((r, key) => {
                            if (r.title) {
                                return (
                                    // <span key={key} onClick={this.routeClick.bind(this, r)} > {r.title}</span>

                                    <NavLink key={key} to={r.path} activeClassName="selected">{r.title}</NavLink>

                                )
                            }
                        })
                    }
                </div>
                <div className="content">
                    <Menu routers={currentRouteConfig} history={this.props.history}></Menu>
                    <div className="content-box">
                        {
                            MainRouters.map((route1, key1) => {
                                if(!route1.isnot){
                                    return (
                                        <Route key={key1} exact path={route1.path} component={route1.component} />
                                    )
                                }
                            }) 
                        }
                        {/* <Route path="/main/home/home4" component={Home4}/> */}
                        {
                            
                            currentRouteConfig.map((route, key) => {
                                if(route.routers){
                                    // debugger;
                                    const item = route.routers.map( (c,key) =>{
                                        return (
                                            <Route key={key} exact path={c.path} component={c.component} />
                                        )
                                    })
                                    return(
                                        <div key={key}>
                                        {item}
                                        </div>
                                    )
                                }else{
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