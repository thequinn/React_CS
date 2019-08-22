import React, { Component } from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggler_1 from "./Toggler_1";
import Toggler_2 from "./Toggler_2";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterClass />
        <CounterHooks />

        <Toggler_1 />
        <Toggler_2 />
      </div>
    );
  }
}

export default App;
