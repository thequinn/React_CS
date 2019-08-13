import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Avacado from './Avacado';
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <Navbar /> 

        <div className="App">
          <Switch>
            <Route exact path='/' render={() => <VendingMachine />} />
            <Route exact path='/avacado' render={() => <Avacado />} />        
            <Route exact path='/chips' render={() => <Chips />} />
            <Route exact path='/soda' render={() => <Soda />} />
          </Switch>        
        </div>
      </div>
    );
  }
}

export default App;
