import React from "react";
import "./send-message-style.css";
//Icon
import IconMicro from "../../../IconsComponent/HeadIcons/microphone/Microphone";

import { firestore } from "./../../../../firebase/config-utils";
import { addMessage } from "../../../../redux/mensajes/message-actions";
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
        if(this.state.input.length > 0){
            let fecha = new Date();
            let options = { day: 'numeric', month: 'long' };
            fecha = new Intl.DateTimeFormat('es-ES', options).format(fecha);
                
            firestore.collection('messages').add({
                id: 1,
                content: this.state.input,
                date: fecha
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
            this.setState({ input: "" });
            
        }
    };
  

  updateInput = (input) => {
    this.setState({ input });
  };

  addMessage = async () => {
    if (this.state.input.length > 0) {
      let fecha = new Date();
      let options = { day: "numeric", month: "long" };
      fecha = new Intl.DateTimeFormat("es-ES", options).format(fecha);

      await firestore
        .collection("messages")
        .add({
          id: 1,
          content: this.state.input,
          date: fecha,
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
      this.setState({ input: "" });
    }
  };

  render() {
    return (
      <div className="send-message-container">
        <IconMicro />
        <input
          className="send-message-input"
          placeholder="Send a Message..."
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button onClick={this.addMessage}>
          <i className="fa fa-paper-plane"></i>
        </button>
      </div>
    );
  }

}
export default connect(null, { addMessage })(SendMessage);
