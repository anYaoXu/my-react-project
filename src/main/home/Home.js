import React, {Component} from 'react';
import { Link,NavLink } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <p>这是home-page</p>
            </div>
        );  
    }
}

export default Home;