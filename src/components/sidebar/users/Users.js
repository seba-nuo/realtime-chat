import React, { Component } from 'react';
import User from './user/User';
//
class Users extends Component{

    render(){

        return(
            <div className="users-container">
                <User/>
            </div>
        );
    }
}

export default Users;