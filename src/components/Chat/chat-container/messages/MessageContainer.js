import React from 'react';
import Message from "./message/MessageList";
import './message-container-style.css';

export default function MessageContainer(){
    return(        
        <div className="message-container">
            <Message/>
        </div>
    )
}