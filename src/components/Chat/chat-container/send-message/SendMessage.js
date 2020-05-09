import React from "react";
import './send-message-style.css';

import { addMessage } from'../../../redux/mensajes/message-actions';
import { connect } from "react-redux";

class SendMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: "" 
        };
    }

    updateInput = input => {
        this.setState({ input });        
    };
    
    addMessage = () => {

        let fecha = new Date();
		let options = { day: 'numeric', month: 'long' };
        fecha = new Intl.DateTimeFormat('es-ES', options).format(fecha);

        this.props.addMessage(this.state.input, fecha);
        this.setState({ input: "" });
    };

    render(){
        return(
            <div className="send-message-container">
                <input 
                    className="send-message-input"
                    placeholder="Send a Message..."
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                    />
                <button 
                    onClick={this.addMessage}>
                    <i className="fa fa-paper-plane pull-right"></i>
                    </button>
            </div>
        )
    }
}
  
  export default connect(
    null,
    {addMessage}
  )(SendMessage);