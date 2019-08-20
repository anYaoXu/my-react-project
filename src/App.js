import React from 'react';
import { BrowserRouter as Router, Route,  Redirect, Switch } from "react-router-dom";
import Routers from './Router';
import './App.css';
import FrontendAuth from './core/FrontendAuth';


function App() {

  return (
    <div id="wrap">
      {/* <Button type="primary">按钮</Button> */}
      <Router>
        <Switch>
          {/* {
            Routers.map((route, key) => {
              return (
                <Route key={key} path={route.path}
                component={route.component} />
              )
            })
          }
          <Redirect from="/" to="/login" /> */}
          <FrontendAuth config={Routers}></FrontendAuth>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
