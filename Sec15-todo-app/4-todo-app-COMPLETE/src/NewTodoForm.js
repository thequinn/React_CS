import React, { Component } from 'react';
import uuid from 'uuid/v4';
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*************************************************************/
  // 2-step-process to use a controlled form to create a new todo 
  handleChange(evt) {
    // Same as next ln
    // this.setState({ taskName: this.target.value });  
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();

    // Track "completed" property to add strickthrough CSS style
    let newTodo = { ...this.state, id: uuid(), completed: false };
    this.props.createTodo(newTodo);
        
    this.setState({ task: "" });
    // alert(`You types: ${this.state.taskName}`);
  }
  /*************************************************************/
  
  render() {
    return (
      <div>
        <form className="NewTodoForm" onSubmit={this.handleSubmit}>
          <label htmlFor="taskName"/>
          <input type="text" 
                 id="task" 
                 name="task" 
                 value={this.state.task} 
                 onChange={this.handleChange}
          />
          {/* <input type="submit" value="Add" /> */}
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;