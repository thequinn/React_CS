import React, { Component } from "react";
import "./WiseSquare.css";

class WiseSquare extends Component {
  dispenseWisdom() {
    console.log("WiseSquare.js, ln-6, this: <<<", this, '>>>');
    let messages = [
      /* wise messages go here */
      "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
      "Educating the mind without educating the heart is no education at all.",
      "Not everything that is faced can be changed, but nothing can be changed until it is faced."
    ];
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log("WiseSquare.js, ln-14, messages[rIndex]: ", messages[rIndex]);
  }

  render() {
    console.log("WiseSquare.js, render(), ln-18, this: <<<", this, ">>>");
    return (
      // WRONG!! No binding of this component
      <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
        😃
      </div>

      // Method #1: Binding in-line
      // <div className='WiseSquare' onMouseEnter={this.dispenseWisdom.bind(this)}>
      // 😃
      // </div>

      // Method #2: Using Arrow function in-line (rather than binding)
      // <div className='WiseSquare' onMouseEnter={() => this.dispenseWisdom()}>
      //    😃
      // </div>
    );
  }
}

export default WiseSquare;
