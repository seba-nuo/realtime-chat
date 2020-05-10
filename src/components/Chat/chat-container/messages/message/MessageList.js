import React from 'react';
import './message-list-style.css';

// import { firestore } from '../../../../../firebase/;config-utils';
import { connect } from 'react-redux';

function Message(){
    // console.log("List ", props.chat) // 👌🏻
    // console.log("Message:",props.chat.items[props.chat.items.length-1].content)
    var messages = [{
        content: "hola message",
        date: "10 de maio",
        id: 0,
    }];
    // firestore.collection("messages")
    //             .get()
    //             .then((querySnapshot) => {
    //                 querySnapshot.forEach((doc) => {                        
    //                     messages.push(doc.data());   
	// 		        });
                    
	// 	        });   
    return(
        <div>
        {messages.map((m,i) => {
            console.log("Message: ",m);
            return(
                    <h1 key={i}>{m.content}</h1>
                );
            })
        }
        {/* <h1 key={messages.id}>{messages[0].content}</h1> */}

            { /*messages.forEach(message => {        
                return(<h1>{message.content}</h1>)
                return (
                    <div className="message" key={message.id}>
                        <span className="message-text">{ message.content }</span>
                        <div className="message-date-container">
                            <span className="message-date">{ message.date }</span>
                        </div>
                    </div>
                )
            })*/}
        </div>
    );
}

                    
const mapStateToProps = state => {
    return {chat: state.chat}
}
export default connect(mapStateToProps, null)(Message);