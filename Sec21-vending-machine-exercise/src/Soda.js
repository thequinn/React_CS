import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Message from './Message';
import sodaImg from './Soda.png';
import './Soda.css';

class Soda extends Component {
  render() {
    return (
      <div className='Soda'>
        <img src={sodaImg} alt='coca cola can' />
        {/* <Message> */}
          <h1>Soda Page</h1>
          <h3>Choice of soda today: Coca Cola</h3>
          <Link to='/'>Go Back</Link>
        {/* </Message> */}

        <img src={sodaImg} alt='coca cola can' />
      </div>
    );
  }
}

export default Soda;