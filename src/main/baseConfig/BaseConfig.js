import React, { Component } from 'react';
// import Menu from '../../components/Menu';

class BaseConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="baseC-wrap">
                这是 基础配置 page
            </div>
        );
    }
}

export default BaseConfig;