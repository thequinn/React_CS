import React, { Component } from 'react';
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Track whether a todo form (adding a new todo) or a edit form (updateing an existing todo) is showing.
      isEditing: false,
      task: this.props.todo.task
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove() {
    // alert(`In NewTodoForm.js, this.props.id: ${this.props.id}`);
    this.props.removeTodo(this.props.id);
  }

  // Toggle whether a todo item's edit form appears when the Edit btn clicks, or the todo item stays.
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  /*************************************************************/
  // This controlled form is to edit/update a controlled form.  But it's the same 2-step-process as using a controlled form to create a new todo in NewTodoForm.js
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleUpdate(evt) {
    evt.preventDefault(); 
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false })
  }
  /*************************************************************/

  // Handle when a todo is strikethrough
  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let result;

    /*
    When a todo item is under editing, an input form appears.  When it's not, the original li stays.

    HowTo Test: 
    Method-#1) checking/un-chicking the isEditing state in React in Chrome Dev-Tools, 
    Method-#2) Add onClick to the Edit button 
    */
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input type="text" 
                   name="task"
                   value={this.state.task} 
                   onChange={this.handleChange} 
            />
            {/* <input type="submit" value="Save" /> */}
            <button>Save</button>
          </form>
        </div>
      );
    } else {
     result = (
      <div className="Todo">
        <li className={this.props.todo.completed ? "Todo-task completed" : "Todo-task"} 
            onClick={this.handleToggle}
        >
          {this.props.todo.task} &emsp;               
        </li>

        <div className='Todo-buttons'>
          <button onClick={this.toggleForm}>
            <i className='fas fa-pen' />
          </button>
          <button onClick={this.handleRemove}>
            <i className='fas fa-trash' />
          </button> 
        </div>       
      </div>
     );
    }

    return result;
  }
}

export default Todo;