import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import uuid from 'uuid/v4';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { taskName: "Massage eyes", id: uuid() },
        { taskName: "Work Tai-Chi", id: uuid() }
      ]
    };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(newTodo) {
    // alert(`Todo to add: ${newTodo}`);
    this.setState({ 
      todos: [...this.state.todos, newTodo]
    });
  }

  remove(id) {
    // alert(`Todo to remove: ${id}`);
    let newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  displayTodos() {
    const display = this.state.todos.map(todo => {
      return <Todo key={todo.id} id={todo.id} todo={todo} removeTodo={this.remove} />
    });
    return display;
  }

  render() {
    return (
      <div>
        <div>
          <h1>Todo List</h1>
          <ul>{this.displayTodos()}</ul>
        </div>
        <br/><hr/>
        <div>
          <h3>New Todo</h3>
          <NewTodoForm addTodo={this.add} />
        </div>
      </div>
    );
  }
}

export default TodoList;