import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBox = this.handleRemoveBox.bind(this);
  }
  handleRemoveBox() {
    this.props.removeBox(this.props.id);
  }
  render() {
    return (
      <div>
        <div style={{
               height: `${this.props.height}em`,
               width:  `${this.props.width}em`,
               backgroundColor: this.props.color
             }}
        />       
        <button onClick={this.handleRemoveBox}>Remove Box</button>     
      </div>
    );
  }
}

export default Box;