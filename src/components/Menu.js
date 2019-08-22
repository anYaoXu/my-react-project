import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    routeClick = (route) => {
        this.props.history.push(route.path);
    }
    returnP = (list)=>{
        list.map( (item,key) => {
            return (
                <div key={key}>
                    <p>{item.title}</p>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="menu">
                {
                    this.props.routers.map((child, key) => {
                        if (child.title) {       
                            if(child.routers){
                                // {
                                //     this.returnP(child.routers);
                                // }
                                return (
                                    <p>{child.title}</p>
                                    // {this.returnP(child)}
                                )
                                // child.routers.map((c,key)=>{
                                //     return (
                                //         <div key={key}>
                                //         <span onClick={this.routeClick.bind(this, c)}>{c.title}</span>
                                //         </div>
                                //     )
                                // })
                            } else{
                                return (
                                    <div key={key}>
                                        <span onClick={this.routeClick.bind(this, child)}>{child.title}</span>
                                        <br/>
                                    </div>  
                                )
                            }
                        }                   
                    })
                }                       
             </div>
        )
   } 
}

export default Menu;