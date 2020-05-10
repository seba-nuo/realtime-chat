import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
/*         COMPONENTS


 */
import Login from './components/UserAuthentication/Login';
import App from './App';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* Rutas y Páginas*/}
        <Switch>
            <Route exact path="/"  component={Login}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/chat" component={App}  />
            <Route render={() => (
              <>
                <h1>Error 404 :o</h1>
                
              </>
            )}
            />
        </Switch>
      </BrowserRouter>
    );
  }
}
