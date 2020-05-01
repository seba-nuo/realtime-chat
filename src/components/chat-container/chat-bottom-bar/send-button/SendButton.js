import React, { Component } from 'react';
//
import './send-button.css'
//

//
class SendButton extends Component {

    render() {

        return(
            <input className="input-button-send" type="button" value="Enviar" />
        );
    }
}

export default SendButton;