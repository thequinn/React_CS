import React, { Component } from 'react'

class SimpleFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = { words: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({
      words: evt.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>You entered {this.state.words}</h1>
        {/* Compare to ln-9~13 in SimpleFormHooks.js */}
        <input 
          type='text' 
          value={this.state.words} 
          onChange={this.handleChange} 
        />
      </div>
    );
  }
}

export default SimpleFormClass;