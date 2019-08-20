import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Routers from '../Router';
import MainRouters from './MainRoute';
import FrontendAuth from '../core/FrontendAuth';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        // const config = {...Routers, ...MainRouters};
        // const config = Object.assign({},Routers,MainRouters);
        // const config = [ ...MainRouters];
        return (
            <div>
                <p>这是框架</p>
                
                <Switch>
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

                <FrontendAuth config={MainRouters}></FrontendAuth>
                </Switch>
            </div>

        );
    }
}

export default Main;