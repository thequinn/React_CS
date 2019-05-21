import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  num: 0,
	  isClicked: false
	};
	this.genRand = this.genRand.bind(this);
  }

  genRand() {
    this.setState(state => ({
	  num: Math.floor((Math.random() * 5) + 1),
	  isClicked: this.state.num === 3
    }));
  }

  render() {
    return (
	  <div>
	    <h1>Number is {this.state.num}</h1>
	    {this.state.isClicked ? (
		  <h4>You Win</h4>
		 ) : (
		  <button onClick={this.genRand}>Random Number</button>
		 )}
	  </div>
	);
  }
}

export default Clicker;