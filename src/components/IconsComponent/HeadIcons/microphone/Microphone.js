import React from "react";
//SVG
import micro from "../../../../assets/microphone.svg";
//CSS
import '../../HeadIcons/head-icons.css';
import './microphone.css';

export default function IconMicro() {
  return (
    <div className="container-icon i_c_micro i_c_h_micro noselectable">
      <img src={micro} className="icons i_micro" alt="micro" />
      <span className="icon_span"></span>
    </div>
  );
}
