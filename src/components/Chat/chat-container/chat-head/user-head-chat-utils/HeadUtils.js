import React from "react";
//CSS
import "./head-utils.css";
//IconsComponent
import UserChatOptions from "./userChatOptions/UserChatOptions";
import UserChatSearch from "./userChatSearch/UserChatSearch";
import UserChatClip from "./userChatClip/UserChatClip";

export default function headUtils() {
  return (
    <div className="head-chat-utils-container">
      <UserChatSearch />
      <UserChatClip />
      <UserChatOptions />
    </div>
  );
}
