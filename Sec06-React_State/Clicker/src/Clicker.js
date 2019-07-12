import React, { Component } from "react";

class Clicker extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  num: 0,
  	  isClicked: false  // Not needed working w/ ln-26
  	};
  	this.genRand = this.genRand.bind(this);
  }

  genRand() {
    let rand = Math.floor(Math.random() * 5) + 1;
    this.setState({ num: rand });

   }

  render() {
    return (
  	  <div>
  	    <h1>Number is {this.state.num}</h1>
  	    {this.state.num === 3 ? (
  		    <h4>You Win</h4>
  		  ) : (
  		    <button onClick={this.genRand}>Random Number</button>
  		  )}
      </div>
	  );
  }
}

export default Clicker;
