import React from "react";
//
import ChatHead from "./chat-head/ChatHead";
import MessageContainer from './messages/MessageContainer';
import SendMessage from './send-message/SendMessage';

import "./chat-container-style.css";
//

export default function ChatContainer(){
    return(
        <div className="chat-container">
            <ChatHead/>
            <MessageContainer/>
            <SendMessage/>
        </div>
    )
}
