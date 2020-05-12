import React from "react";
//SVG
import clip from "../../../../assets/clip.svg";
//CSS
import '../../HeadIcons/head-icons.css';
import './clip.css';

export default function IconClip() {
  return (
    <div className="container-icon i_c_clip i_c_h_clip noselectable">
      <img src={clip} className="icons i_clip" alt="clip" />
      <span className="icon_span"></span>
    </div>
  );
}
