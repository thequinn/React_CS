import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './VendingMachine.css';
import vendingMachineImg from './VendingMachine.png';

class VendingMachine extends Component {
  render() {
    return (
      <div
        className='VendingMachine'
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
        <h1>Home Page</h1>
        <Link to='/soda'>Soda</Link>
        <Link to='/chips'>Chips</Link>
        <Link to='/sardines'>Sardines</Link>        
      </div>
    );
  }
}

export default VendingMachine;