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
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(newTodo) {
    // alert(`Todo to create: ${newTodo}`);
    this.setState({ 
      todos: [...this.state.todos, newTodo]
    });
  }

  remove(id) {
    // alert(`Todo to remove: ${id}`);

    // filter() returns a new array w/ the elements that pass the test
    let newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  update(id, updatedTask) {
    // Method-#1 by Quinn:
    // const updatedTodos = this.state.todos.map(todo => {
    //   if (todo.id === id) {
    //     todo.task = updatedTask;
    //   }
    //   return todo;
    // });
    //
    // Method-#2 by Colt:
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        // Take what's exiting in the todo , but overrides the task property
        return { ...todo, task: updatedTask };
      }
      // If it's not, take it as-is and put it in the array
      return todo;
    });

    // Remember!! Don't mutate the state directly inside setState()
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    let updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
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
              updateTodo={this.update}
              toggleTodo={this.toggleCompletion}
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