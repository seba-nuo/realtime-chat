import React from "react";
//SVG
import options from "../../../../assets/menu.svg";
//CSS
import '../../HeadIcons/head-icons.css';
import './options.css';

export default function IconOptions() {
  return (
    <div className="container-icon i_c_options i_c_h_options noselectable">
      <img src={options} className="icons i_options" alt="options" />
      <span className="icon_span"></span>
    </div>
  );
}
