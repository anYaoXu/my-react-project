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
                <Link to='/main/home/home1'>home1</Link><br/>
                <Link to='/main/home/home2'>home2</Link><br/>
                
                <NavLink to="/main/home/home2" activeClassName="selected">FAQs</NavLink>
                <p>这是home</p>
            </div>
        );
    }
}

export default Home;