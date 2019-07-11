import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    alert(`You types: ${this.state.username}`);
    this.setState( {username: evt.target.value} );
  }

  render() {
    return(
      <form  >
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;