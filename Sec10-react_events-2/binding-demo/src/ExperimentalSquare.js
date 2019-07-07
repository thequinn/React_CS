import React, { Component } from "react";

class ExperimentalSquare extends Component {
  static defaultProps = {
    messages: [
      "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
      "Educating the mind without educating the heart is no education at all.",
      "Not everything that is faced can be changed, but nothing can be changed until it is faced."
    ]
  };

  // constructor(props) {
  //   super(props);
  // }


  // Method #4: Using React's Experimental Public Class Field
  dispenseWisdom = () => {
    let { messages } = this.props;
    let rIndex = Math.floor(Math.random() * messages.length);
  };

  render() {
   
    return (
      <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
        😃
      </div>
    );
  }
}

export default ExperimentalSquare;
