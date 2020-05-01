import React, { Component } from 'react';
//
import './sidebar-styles.css'
//
import HeadUser from './sidebar-headUser/HeadUser';
import Search from './sidebar-search/Search';
import Users from "./sidebar-users/Users";

class Sidebar extends Component {

    render(){
        return(
            <div className="container-sidebar">
                <HeadUser/>
                <Search/>
                <Users/>
            </div>
        );
    }
}
export default Sidebar;