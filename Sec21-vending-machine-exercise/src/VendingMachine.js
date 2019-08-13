import React, { Component } from 'react';
import {Link} from "react-router-dom";

import Message from './Message';
import './VendingMachine.css';
import './Message.css';
import vendingMachineImg from './VendingMachine.png';

class VendingMachine extends Component {
  render() {
    return (
      <div
        className='VendingMachine'
        style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
        <Message>
          <h1>Home Page</h1>
          <h3>I am a vending machine. Please place your order.</h3>
        </Message>

        <Message>
          <h2><Link to='/avacado'>Avacado</Link></h2>       
          <h2><Link to='/chips'>Chips</Link></h2>
          <h2><Link to='/soda'>Soda</Link></h2>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;
