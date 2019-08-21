import React, { Component } from 'react';
import { Route,  Redirect } from "react-router-dom";
import $ from 'jquery';

class FrontendAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {  };        
    }
    getRouter(pathname,config) {
        let con
        config.map(v =>{
            if(v.children){
                v.children.map( c => {if(c.path === pathname){
                    con =  c;
                }})
            }else{
                // debugger;
                if(v.path === pathname){
                    if(v.redirect){
                        // this.getRouter(v.redirect, config)
                        con = config.find( a => a.path === v.redirect);
                        return;
                    }else{
                        con =  v;
                    }
                }else if(pathname.indexOf(v.path) > -1){
                    if(v.redirect){
                        // this.getRouter(v.redirect, config);
                        con = config.find( a => a.path === v.redirect);
                        return;
                    }else{
                        con =  v;
                    }
                    // con =  v;
                };
            }
        })
        return con;
    }
    render() {
        const { location,config } = this.props;
        const { pathname } = location;
        const isLogin = $.cookie('token');
        const targetRouterConfig = this.getRouter(pathname, config);  
        if((!targetRouterConfig) || (targetRouterConfig && targetRouterConfig.auth && !isLogin)){
            return <Redirect to='/login' />
        }else{
            const {path,component,exact,children} = targetRouterConfig;
            if(exact){
                return <Route exact path={path} component={component} />
            }else if(children){
                return <Route exact path={path} 
                        component={component} />
            }else{
                return <Route path={path} component={component} />
            }
            
        }      
    }
}

export default FrontendAuth;