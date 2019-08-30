import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

class Menus extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const menulist = this.props.routers.map((child, key) => {
            if (child.title) {
                if (child.routers) {
                    return (<SubMenu
                        key={key}
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>{child.title}</span>
                            </span>
                        }
                    >
                        {
                            child.routers.map((route, rkey)=>{
                                return (<Menu.Item key={key+rkey}>{route.title}</Menu.Item>)
                            })
                        }
                    </SubMenu>
                    )
                } else {
                    return (
                        <Menu.Item key={key}>
                            <Icon type="mail" />
                            {child.title}
                        </Menu.Item>
                    )
                }
            }
        })
        return (
            <div className="menu">
                <Menu mode='inline'>
                {menulist}
                </Menu>


{/* 
                {
                    this.props.routers.map((child, key) => {
                        if (child.title) {
                            if (child.routers) {
                                const item = child.routers.map((c, key) => {
                                    return (
                                        <div key={key}>

                                            <span onClick={this.routeClick.bind(this, c)}>{c.title}</span>
                                        </div>
                                    )
                                })
                                return (
                                    <div key={key}>

                                        <p>{child.title}</p>
                                        {item}
                                    </div>

                                )
                            } else {
                                return (
                                    <div key={key}>
                                        <span onClick={this.routeClick.bind(this, child)}>{child.title}</span>
                                        <br />
                                    </div>
                                )
                            }
                        }
                    })
                } */}
            </div>
        )
    }
}

export default Menus;