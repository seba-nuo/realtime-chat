import React from 'react';
import UserPhoto from "./userPhoto/UserPhoto";
import UserName from "./userName/UserName";
import UserOptions from "./userOptions/UserOptions";
import './chat-head-style.css';

export default function ChatHead(){
    return(
        <div className="chat-head">
            <UserPhoto/>
            <UserName/>
            <UserOptions/>
        </div>
    )
}