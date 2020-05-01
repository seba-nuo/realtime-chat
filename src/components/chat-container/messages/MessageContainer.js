import React from 'react';
import Message from "./message/MessageList";
import './message-container-style.css';

export default function MessageContainer(props){
    return(
        <div className="message-container">
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
        </div>
    )
}