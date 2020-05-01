import React from 'react';
import './message-list-style.css';

export default function Message(props){
    return(
        <div className="message">
            <span className="message-text">Hola</span>
            <div className="message-date-container">
                <span className="message-date">18:48</span>
            </div>
        </div>
    )
}