import React,{ Component } from 'react';

class User extends Component{

    render(){

        return(
            <div className="user-container">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="imgUser"></img>
                <div className="name-comtainer">
                    <p>Name</p>
                </div>
                <div className="time-container">
                    <span>time</span>
                </div>
            </div>
        );
    }
}

export default User;