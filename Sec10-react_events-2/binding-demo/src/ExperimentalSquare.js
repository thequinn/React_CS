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

  // Using this ln gets an error of Cannot read property 'props' of undefined. So I added ln-13-14, but didn't fix the bug.  The real fix is using ln-19
  // dispenseWisdom() { 
  // 
  dispenseWisdom = () => {
    console.log("ExperimentalSquare.js, ln-20, this: <<<", this, '>>>');
    let { messages } = this.props;
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log("ExperimentalSquare.js, render(), ln-23, messages[rIndex]: ", messages[rIndex]);
  };

  render() {
    console.log("ExpermentalSquare.js, render(), ln-27, this: <<<", this, ">>>");
    return (
      <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
        😃
      </div>
    );
  }
}

export default ExperimentalSquare;
