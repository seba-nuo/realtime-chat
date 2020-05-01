import React from "react";
//
import "./chat-container-style.css";
//
import ChatHead from "./chat-head/ChatHead";
import MessageChat from './chat-message/MessageChat';
import ChatBottomBar from './chat-bottom-bar/ChatBottomBar';
//

export default function ChatContainer(){
    return(
        <div className="chat-container">
            <ChatHead/>    
            <MessageChat/>
            <ChatBottomBar/>
        </div>
        
    )
}
