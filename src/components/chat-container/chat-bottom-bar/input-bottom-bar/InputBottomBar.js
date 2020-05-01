import React, { Component } from 'react';
//
import './input-bottom-bar.css';
//
import SendButton from '../send-button/SendButton';

class InputBottomBar extends Component {

    render() {

        return(
            <div className="send-message-container">
            <input className="input-text-message" type="text" placeholder="Send Message" />
            <SendButton/>
            </div>
        );
    }
}

export default InputBottomBar;