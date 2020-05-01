import React, { Component } from 'react';
//
import './chat-bottom-bar.css';
//
import InputBottomBar from './input-bottom-bar/InputBottomBar';
//
class ChatBottomBar extends Component {

    render() {

        return(
            <div className="chat-bottom-bar-container">
                <InputBottomBar/>
            </div>
        );
    }
}

export default ChatBottomBar;