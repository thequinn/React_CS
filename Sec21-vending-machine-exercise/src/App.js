import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import './App.css';

class App extends Component {
  render () {
    return (
      <div>


        {/* <Navbar /> */}



        <div className="App">
          <Switch>
            <Route exact path='/' render={() => <VendingMachine />} />
            <Route exact path='/soda' render={() => <Soda />} />
            <Route exact path='/chips' render={() => <Chips />} />
            <Route exact path='/Sardines' render={() => <Sardines />} />          
          </Switch>        
        </div>
      </div>
    );
  }
}

export default App;
