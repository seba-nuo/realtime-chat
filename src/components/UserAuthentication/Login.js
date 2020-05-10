import React from "react";
import {Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  setCurrentRegister,
  setCurrentLogin,
  register
} from "../../redux/login/user-actions";

function Login(props) {
  let { email, password } = props.user.currentRegister;
  let { emailLogin, passwordLogin } = props.user.currentLogin;

  return (
    <div className="App">
      <div className="register">
        <h2>Registro</h2>
        <form
        className="register-form"
          onSubmit={e => {
            e.preventDefault();
            props.register();
          }}
        >
          <input
            onChange={e => props.setCurrentRegister(e)}
            name="email"
            type="email"
            placeholder="Correo Electronico"
            autoComplete="off"
            value={email}
          />
          <input
            onChange={e => props.setCurrentRegister(e)}
            name="password"
            type="password"
            placeholder="Contraseña"
            autoComplete="off"
            value={password}
          />
          <button>Registrarme</button>
        </form>
        <br />
        {`CurrentRegister: ${JSON.stringify(props.user.currentRegister)}`}
      </div>
      <div className="login">
        <h2>Iniciar Sesión</h2>
        <form
        className="login-form"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            onChange={e => props.setCurrentLogin(e)}
            name="email"
            type="email"
            placeholder="Correo Electronico"
            autoComplete="off"
            value={emailLogin}
          />
          <input
            onChange={e => props.setCurrentLogin(e)}
            name="password"
            type="password"
            placeholder="Contraseña"
            autoComplete="off"
            value={passwordLogin}
          />
          <Link to="/chat">Click Here! Iniciar Sesion</Link>
        </form>
        <br />
        {`currentLogin: ${JSON.stringify(props.user.currentLogin)}`}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentRegister: event => dispatch(setCurrentRegister(event)),
    setCurrentLogin: event => dispatch(setCurrentLogin(event)),
    register: () => dispatch(register())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
