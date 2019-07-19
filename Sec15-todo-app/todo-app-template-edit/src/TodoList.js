import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Data used for testing only
      // todos: [
      //   { task: "Massage eyes", id: uuid() },
      //   { task: "Work Tai-Chi", id: uuid() }
      // ]
      //
      todos:[]
    };

    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  create(newTodo) {
    // alert(`Todo to create: ${newTodo}`);
    this.setState({ 
      todos: [...this.state.todos, newTodo]
    });
  }

  remove(id) {
    // alert(`Todo to remove: ${id}`);
    let newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  // Display Todo List - Method #1:
  display() {
    const display = this.state.todos.map(todo => {
      return (
        <Todo key={todo.id} 
              id={todo.id} 
              todo={todo} 
              removeTodo={this.remove} 
        />
      );
    });
    return display;
  }

  render() {
    // Display Todo List - Method #2:
    // - display_local is a var saving this.state.todos.map()'s return val. So when display_local is used (ln-70), no '()' behind display_local.
    const display_local = this.state.todos.map(todo => {
      return (
        <Todo key={todo.id} 
              id={todo.id} 
              todo={todo} 
              removeTodo={this.remove} 
        />
      );
    });

    return (
      <div>
        <div>
          <h1>Todo List</h1>
          {/* Display Todo List - Method #1: */}
          {/* <ul>{this.display()}</ul> */}
          {/* Display Todo List - Method #2: */}
          <ul>{display_local}</ul>
        </div>
        <br/><hr/>
        <div>
          <h3>New Todo</h3>
          <NewTodoForm createTodo={this.create} />
        </div>
      </div>
    );
  }
}

export default TodoList;