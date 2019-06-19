import React, { Component } from 'react';
import "./Lottery.css";
import Ball from './Ball';

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery Game",
    numBalls: 6,
    maxNum: 40
  };
  
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({length: this.props.numBalls}) };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState((currState, currProps) => {
      return {
        nums: currState.nums.map(
          num => Math.floor(Math.random() * this.props.maxNum) + 1
        )
      }
    });
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <div className='Lottery'>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(num => 
            <Ball num={num}></Ball>
          )}          
        </div>
        <button onClick={this.handleClick}>
            Generate New Numbers
        </button>
      </div>
    );
  }
}

export default Lottery;