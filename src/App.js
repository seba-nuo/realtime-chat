import React, { Component } from 'react';
import './App.css';
//
import Sidebar from "./components/sidebar/Sidebar";
import ChatContainer from "./components/chat-container/ChatContainer";

class App extends Component{
  render(){

      return (
    <div className="App">
      <Sidebar/>
      <ChatContainer/>
    </div>
  );
  }

}

export default App;
