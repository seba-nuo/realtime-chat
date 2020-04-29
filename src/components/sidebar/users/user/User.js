import React,{ Component } from 'react';
//
import './user-styles.css';
//
class User extends Component{

    render(){

        return(
            <div className="user-container">
                <figure className="img-perfil-container">
                    <img className="img-perfil-user" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="imgUser"/>
                </figure>
                <div className="name-container">
                    <p className="name-user">Johnny Depp</p>
                </div>
                <div className="time-container">
                    <span className="time-message">18:48</span>
                </div>
            </div>
        );
    }
}

export default User;