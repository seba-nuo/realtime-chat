import React from 'react';
//
import './chat-head-style.css';
//
import UserPhoto from "./userPhoto/UserPhoto";
import UserName from "./userName/UserName";
import UserOptions from "./userOptions/UserOptions";


export default function ChatHead(){
    return(
        <div className="chat-head">
            <UserPhoto/>
            <UserName/>
            <UserOptions/>
        </div>
    )
}