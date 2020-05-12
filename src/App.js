import React, { Component } from 'react';
import './App.css';
//
import Sidebar from "./components/Chat/sidebar/Sidebar";
import ChatContainer from "./components/Chat/chat-container/ChatContainer";

class App extends Component{
  render(){

    return (
      <div className="App">
        <div className="chatApp">
                  <Sidebar/>
        <ChatContainer/>
        </div>

      </div>
    );
  }

}

export default App;
