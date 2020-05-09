import React from "react";
//
import { connect } from "react-redux";
import "./user-styles.css";
//

function User(props) {
  let message = props.chat.items;

  return (
      <div className="user-container">
        <figure className="img-perfil-container">
          <img
            className="img-perfil-user"
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            alt="imgUser"
          />
        </figure>

        <div className="received-container">
          <div className="name-container">
            <p className="name-user">Johnny Depp</p>
          </div>
          <div className="preview-message">
            <span className="last-message">
              <span>{message[message.length - 1].content}</span>
            </span>
            <div className="time-container">
              <span className="time-message">
                <abbr title={message[message.length - 1].date}>
                  {" "}
                  {message[message.length - 1].date}
                </abbr>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return { chat: state.chat };
};
export default connect(mapStateToProps, null)(User);
