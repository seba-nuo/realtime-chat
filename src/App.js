import React, { Component } from 'react';
import './App.css';
//
import Sidebar from "./components/sidebar/Sidebar";

class App extends Component{
  render(){

      return (
    <div className="App">
      <h1>ChatRealTime</h1>
      <Sidebar/>
    </div>
  );
  }

}

export default App;
