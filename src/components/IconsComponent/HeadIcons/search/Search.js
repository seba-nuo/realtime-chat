import React from "react";
//SVG
import search from "../../../../assets/search.svg";
//CSS
import '../../HeadIcons/head-icons.css';
import './search.css';


export default function IconSearch() {
  return (
    <div className="container-icon i_c_search i_c_h_search noselectable">
      <img src={search} className="icons i_search" alt="search" />
      <span className="icon_span"></span>
    </div>
  );
}
