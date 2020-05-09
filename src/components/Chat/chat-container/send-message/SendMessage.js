import React from "react";
import './send-message-style.css';

export default function SendMessage(){
    return(
        <div className="send-message-container">
            <input className="send-message-input" type="text" placeholder="Send a Message..."/>
            <i className="fa fa-paper-plane pull-right"></i>
        </div>
    )
}