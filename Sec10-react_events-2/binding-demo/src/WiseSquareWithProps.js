import React, { Component } from "react";

class WiseSquareWithProps extends Component {
  constructor(props) {
    super(props);
    // Method #3: Binding "this" in constructor
    // this.dispenseWisdom = this.dispenseWisdom.bind(this);
  }
  static defaultProps = {
    messages: [
      "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
      "Educating the mind without educating the heart is no education at all.",
      "Not everything that is faced can be changed, but nothing can be changed until it is faced."
    ]
  };

  dispenseWisdom() {
    let { messages } = this.props;

    let rIndex = Math.floor(Math.random() * messages.length);
  }

  render() {

    return (
      // WRONG!! No binding of "this" component
      <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
        😃
      </div>

      // Method #1: Binding in-line
      // <div className="WiseSquare" onMouseEnter={this.dispenseWisdom.bind(this)}>
      //   😃
      // </div>

      // Method #2: Using Arrow function in-line (rather than binding)
      // <div className="WiseSquare" onMouseEnter={() => this.dispenseWisdom()}>
      //   😃
      // </div>

      // Method #3: See ln-7
    );
  }
}

export default WiseSquareWithProps;
