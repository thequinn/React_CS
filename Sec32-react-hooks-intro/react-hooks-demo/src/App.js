import React, { Component } from "react";

import CounterClass from "./CounterClass";
import CounterHooks from "./CounterHooks";

import SimpleFormClass from "./SimpleFormClass";
import SimpleFormHooks from "./SimpleFormHooks";
import SimpleFormInputHook from "./SimpleFormInputHook";

import Toggler from "./Toggler";
import Clicker from "./Clicker";
import SWMovies from "./SWMovies";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CounterClass />
        <CounterHooks />

        {/* Toggler comp calls ./hooks/useToggle.js as hook */}
        <Toggler />

        <SimpleFormClass />
        <SimpleFormHooks />
        {/* SimpleFormInputHook comp calls ./hooks/useInputState.js as hook */}
        <SimpleFormInputHook />
        
        <Clicker />   {/* Using useEffect */}

        <SWMovies />  {/* Using useEffect */}
      </div>
    );
  }
}

export default App;
