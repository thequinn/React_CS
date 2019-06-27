import React, { Component } from "react";

class NumberItem extends Component {
  render() {
    return (
      <li>
        {this.props.value}

        {/* To make the btn to work, need to call remove func "in" the parent */}
        <button onClick={this.props.remove}>X</button>
      </li>
    );
  }
}

export default NumberItem;
