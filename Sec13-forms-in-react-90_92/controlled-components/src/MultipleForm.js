import React, { Component } from 'react'

class MultipleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState( { [evt.target.name]: evt.target.value } );
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert(`You typed: ${this.state.username}`);
    this.setState( { [evt.target.name]: "" } );
  }
  render() {
    return(
      <div>
        <h1>Form with Multiple Inputs</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="username" 
            value={this.state.username} 
            placeholder="username" 
            onChange={this.handleChange} 
          />
          <input 
            type="text" 
            name="email" 
            value={this.state.email} 
            placeholder="email" 
            onChange={this.handleChange} 
          />
          <input 
            type="text" 
            name="password" 
            value={this.state.password} 
            placeholder="password" 
            onChange={this.handleChange} 
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default MultipleForm;