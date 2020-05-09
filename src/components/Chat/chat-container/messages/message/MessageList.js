import React from 'react';
import './message-list-style.css';

import { connect } from 'react-redux';

function Message(props){
    console.log("List ", props.chat) // 👌🏻
    console.log("Message:",props.chat.items[props.chat.items.length-1].content)
    return(
        props.chat.items.map((message,id) => { 
            return (
                <div className="message" key={id}>
                    <span className="message-text">{ message.content }</span>
                    <div className="message-date-container">
                        <span className="message-date">{ message.date }</span>
                    </div>
                </div>
            )
        })
    )
}

const mapStateToProps = state => {
    return {chat: state.chat}
}
export default connect(mapStateToProps, null)(Message);