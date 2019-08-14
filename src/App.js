import React from 'react';
// import Button from 'antd/es/button';
import { Button } from 'antd';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Routers from './Router';
import baseConfig from './main/baseConfig/baseConfig'

function App() {

  return (
    <div id="wrap">
      {/* <Button type="primary">按钮</Button> */}
      <Router>
        <Switch>
          {
            Routers.map((route, key) => {
              if (route.exact) {
                return (
                  <Route
                    key={key}
                    exact
                    path={route.path}
                    component={route.component}
                  />
                )
              } else {
                return (
                  <Route key={key} path={route.path}
                  component={route.component} />
                )

              }
            })
          }
          {/* <Redirect from="/*" to="/login" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
