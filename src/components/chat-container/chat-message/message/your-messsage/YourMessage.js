import React, {Component} from 'react';
//
import './your-message.css'
//
class YourMessage extends Component {

    render(){

        return(
            <div className="your-message-container">
            <p className="your-message">Your Message</p>
            <span className="time-your-message">18:08</span>
        </div>
        );
    }
}

export default YourMessage;