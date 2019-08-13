import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Message from "./Message";
import "./Avacado.css";

class Avacado extends Component {
  render() {
    return (
      <div
        className='Avacado'
        style={{
          backgroundImage:
            "url(https://media.giphy.com/media/13gvXfEVlxQjDO/giphy.gif)"
        }}
      >
        <Message>
          <h1>Avacado Page</h1>
          <h3>Fun Fact: Avocado trees do not self-pollinate; they need another avocado tree close by in order to grow.</h3>
          <Link to='/'>Go Back</Link>
        </Message>
      </div>
    );
  }
}

export default Avacado;