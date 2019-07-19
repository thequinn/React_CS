import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    // this.setState({ taskName: this.target.value });  // Same as next ln
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    let newTodo = { ...this.state, id: uuid() };
    this.props.addTodo(newTodo);
    
    evt.preventDefault();
    this.setState({ taskName: "" });
    // alert(`You types: ${this.state.taskName}`);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="taskName"/>
          <input type="text" 
                 id="taskName" 
                 name="taskName" 
                 value={this.state.taskName} 
                 onChange={this.handleChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default NewTodoForm;