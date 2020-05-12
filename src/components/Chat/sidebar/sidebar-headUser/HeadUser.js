import React from "react";
//CSS
import "./headuser-styles.css";
//ICONS
import IconOptions from "../../../IconsComponent/HeadIcons/option/Options";
import IconMessages from "../../../IconsComponent/HeadIcons/messages/Messages";

export default function HeadUser() {
  return (
    <div className="head-useragent">
      <figure className="img-perfil-head-container">
        <img
          className="img-perfil-headuser"
          src="https://bootdey.com/img/Content/avatar/avatar1.png"
          alt="PerfilImage"
        />
      </figure>

      <div className="space-head"></div>
      <IconMessages/>
      <IconOptions />
    </div>
  );
}
