import React from 'react';
import './message-list-style.css';

import { connect } from 'react-redux';

function Message(props){
    console.log(props.chat)
    return(
        props.chat.items.map(message => { 
            return (
                <div className="message">
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