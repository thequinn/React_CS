import React, { Component } from "react";

class BetterNumberItem extends Component {
  constructor(props) {
    super(props);
    // Don't forget to bind the event handler, handleRemove, that will use "this" (ln-11) inside of it.
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(evt) {
    console.log("INSIDE HANDLE REMOVE");
    this.props.remove(this.props.value);
  }
  render() {
    return (
      <li>
        {this.props.value}

        {/* WRONG !! 
        - Here, we pass {this.props.remove}, which is the event obj itself, to the onClick handler
        - Compare how remove func's are sent from their parent comp's in NumberList.js and BetterNumberList.js
        */}
        {/* <button onClick={this.props.remove}>X</button> */}
        {/* CORRECT */}
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}

export default BetterNumberItem;
