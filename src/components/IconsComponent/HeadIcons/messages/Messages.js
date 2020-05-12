import React from "react";
//SVG
import messages from "../../../../assets/messages.svg";
//CSS
import "../../HeadIcons/head-icons.css";
import "./messages.css";

export default function IconMessages() {
  return (
    <div className="container-icon i_c_message noselectable">
      <img src={messages} className="icons i_message" alt="Message" />
      <span className="icon_span"></span>
    </div>
  );
}
