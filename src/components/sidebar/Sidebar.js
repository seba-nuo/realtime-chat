import React, { Component } from 'react';
//
import HeadUser from './headUser/HeadUser';
import Search from './search/Search';
import Users from "./users/Users";

class Sidebar extends Component {

    render(){
        return(
            <div className="container sidebar">
                <HeadUser/>
                <Search/>
                <Users/>
            </div>
        );
    }
}
export default Sidebar;