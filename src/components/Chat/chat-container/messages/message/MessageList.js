import React from 'react';
import './message-list-style.css';

import { firestore } from '../../../../../firebase/config-utils';
import { connect } from 'react-redux';

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    }
    
    async componentDidMount() {
        await firestore.collection("messages")
                    .get()
                    .then((querySnapshot) => {
                        let arrayMessages =[];
                        querySnapshot.forEach((doc) => {
                           arrayMessages.unshift(doc.data())
                    });
                    if(arrayMessages.length >0){
                        this.setState({messages: arrayMessages})
                    }

            });
        }
    render(){
        return(
            <div>
            {this.state.messages.map((message, i) => {return(
                <div className="message" key={i}>
                    <span className="message-text">{ message.content }</span>
                    <div className="message-date-container">
                        <span className="message-date">{ message.date }</span>
                    </div>
                </div>
            )})
        }
            </div>
            )
    }
}
                    
const mapStateToProps = state => {
    return {chat: state.chat}
}
export default connect(mapStateToProps, null)(Message);