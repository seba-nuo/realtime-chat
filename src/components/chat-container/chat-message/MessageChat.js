import React, {Component} from 'react';
//
import './message-chat.css'
//
import './message/my-message/MyMessage';
import './message/your-messsage/YourMessage'
import MyMessage from './message/my-message/MyMessage';
import YourMessage from './message/your-messsage/YourMessage';
//
class MessageChat extends Component {

    render(){

        return(
            <div className="message-chat-container">
                <MyMessage/>
                <YourMessage/>
            </div>
        );
    }
}

export default MessageChat;