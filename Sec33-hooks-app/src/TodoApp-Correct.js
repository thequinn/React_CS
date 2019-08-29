import React, { useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

// Import Material-UI
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

// Import my custimized hook
import useTodoState from "./hooks/useTodoState";

function TodoApp() {
  // Make some initial todos for testing at the beginning
  // const initialTodos = [
  //   { id:1, task:"Drink juice", completed: false },
  //   { id:2, task:"Go to school", completed: true },
  //   { id:3, task:"Get coffee", completed: false}
  // ];
  //
  // localStorage.getItem() returns a str.  Since initialTodos[] is an arr, we need JSON.parse() to convert the given JSON text (a str) into the corresponding "O"bject. 
  // ex. JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
  //
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  useEffect(() => {
    // We use localStorage.setItem() to store in LocalStorage w/ a key-val pair.  So we need to stringify todos{} into a str.
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // By default, func effects (func's in 1st arg of useEffect()) run after every completed render, but you can choose to fire it only when certain values have changed.  Adding [todos] in useEffec()'s 2nd arg tells useEffect() that it only exec its effects when there're changes in "todos"

  return (
    // <Paper> creates a background and a container here.
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
          <TodoForm addTodo={addTodo} />
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
}
export default TodoApp;
