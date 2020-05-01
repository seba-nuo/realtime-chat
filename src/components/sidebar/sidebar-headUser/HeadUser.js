import React, { Component } from "react";
//
import "./headuser-styles.css";
class HeadUser extends Component {
  render() {
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
        <i className="fa fa-comments fa-2x  pull-right" aria-hidden="true"></i>
        <i
          className="fa fa-ellipsis-v fa-2x  pull-right"
          aria-hidden="true"
        ></i>
      </div>
    );
  }
}
export default HeadUser;
