import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4';

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

function TodoApp() {
  const initialTodos = [
    { id:1, task:"Drink juice", completed: false },
    { id:2, task:"Go to school", completed: true },
    { id:3, task:"Get coffee", completed: false}
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTodoText => {
    setTodos( [...todos, {id: uuid(), task: newTodoText, completed: false}] );
  };

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  }

  const editTodo = (todoId, newTodoText) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? {...todo, task: newTodoText} : todo
    );
    setTodos(updatedTodos);
  }

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo => {
      // WRONG!!
      // - map() returns a todo{}, but a prop of a todo{}
      //return todo.id === todoId ? todo.completed = !todo.completed : todo
      //
      // Correct:
      return todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    });
    setTodos(updatedTodos);
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>

      <Grid container justify='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo}/>
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>

    </Paper>
  );
};

export default TodoApp;
