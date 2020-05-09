import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//
import $ from 'jquery';
//
import "./login-styles.css";
//
// import './assets/undraw_authentication_fsn5.svg';
// import './assets/undraw_fingerprint_swrc.svg';
// import './assets/undraw_personal_data_29co.svg';
// import './assets/Wave.png'
export default class Login extends Component{

          
    // $(document).ready(function () {
    //   $(".owl-carousel").owlCarousel({
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 2000,
    //     autoplayHoverPause: true,
    //     items: 1
    //   });
    // });



  render() {
    return (
      <div className="container">
        <div className="panel">
          <div className="row">
            <div className="col liquid">
              <h4>
                {/* <i className="fas fa-drafting-compass"></i> */}
                Chat-RealTime.
              </h4>
              {/* Owl-Carousel  */}

              <div className="owl-carousel owl-theme">
                <img
                  src="./assets/undraw_authentication_fsn5.svg"
                  alt=""
                  className="login_img"
                />
                <img
                  src="./assets/undraw_personal_data_29co.svg"
                  alt=""
                  className="login_img"
                />
                <img
                  src="./assets/undraw_fingerprint_swrc.svg"
                  alt=""
                  className="login_img"
                />
              </div>

              {/* /Owl-Carousel  */}
            </div>
            <div className="col login">
              <button type="button" className="btn btn-signup">
                Sign Up
              </button>
              <form>
                <div className="titles">
                  <h6>We keep everything</h6>
                  <h3>Ready to Login</h3>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-input"
                  />
                  <div className="input-icon">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-input"
                  />
                  <div className="input-icon">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-input"
                  />
                  <div className="input-icon">
                    <i className="fas fa-user-lock"></i>
                  </div>
                </div>
                <NavLink to="/chat" className="btn btn-login">Login</NavLink>
                {/* <button type="submit" className="btn btn-login">
                  Login
                </button> */}
                
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
