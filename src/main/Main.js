import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import MainRouters from './MainRoute';
import baseConfig from './baseConfig/baseConfig';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <p>这是框架</p>
                <Switch>
                    {
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
                    }

                </Switch>
            </div>

        );
    }
}

export default Main;