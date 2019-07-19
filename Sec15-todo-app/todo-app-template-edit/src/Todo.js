import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    // alert(`In NewTodoForm.js, this.props.id: ${this.props.id}`);
    this.props.removeTodo(this.props.id);
  }

  render() {
    return (
      <div>
        <li>
          {this.props.todo.task} &emsp;
          {this.props.todo.time} &emsp; 
          <button type="button" onClick={this.edit}>Edit</button> &emsp; 
          <button type="button" onClick={this.handleRemove}>Delete</button>
        </li>
      </div>
    );
  }
}

export default Todo;