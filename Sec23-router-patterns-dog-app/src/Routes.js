import React, { Component } from 'react';
import {Route, Switch, Redirect} from "react-router-dom";

import DogList from './DogList';
import DogDetails from './DogDetails';


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/dogs' 
          render={routeProps => <DogList {...routeProps} />}   
        />
        <Route exact path='/dogs/:name' 
          render={routeProps => <DogDetails {...routeProps} />} 
        />
        <Redirect to='/dogs' />
      </Switch>
    );
  }
}

export default Routes;