import React, { Component } from "react";
import './App.css';
import Clicker from "./Clicker";

class App extends Component {
  render() {
    return (
      <div className='myApp'>
        <Clicker />
      </div>
    );
  }
}

export default App;
