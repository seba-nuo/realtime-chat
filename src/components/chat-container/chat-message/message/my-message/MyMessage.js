import React, {Component} from 'react';
//
import './my-message.css'
//
class MyMessage extends Component {

    render(){

        return(
            <div className="my-message-container">
                <p className="my-message">My Message</p>
                <span className="time-my-message">18:08</span>
            </div>
        );
    }
}

export default MyMessage;