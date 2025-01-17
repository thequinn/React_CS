import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './Food.css';

class Food extends Component {
  render() {
    const name = this.props.match.params.name;
    const url = `https://source.unsplash.com/1600x900/?${name}`;

    return (      
      <div className='Food'>
        { /\d/.test(name) ? (
          <Redirect to='/' />
        ) : (
          <div>
            <h1>I love {name}</h1>
            <img src={url} alt={name} />
          </div>
        )}        
      </div>
    );
  }
}

export default Food;
