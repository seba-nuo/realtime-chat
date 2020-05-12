import React from 'react';
//
import './chat-head-style.css';
//
import UserPhoto from "./userPhoto/UserPhoto";
import UserName from "./userName/UserName";
import HeadUtils from "./user-head-chat-utils/HeadUtils";


export default function ChatHead(){
    return(
        <div className="chat-head">
            <UserPhoto/>
            <UserName/>
            <HeadUtils/>
        </div>
    )
}