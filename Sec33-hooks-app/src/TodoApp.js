import React, { useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import useTodoState from "./hooks/useTodoState";

function TodoApp() {
  //const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  //
  // Replaced last ln to use useLocalStorageState.js hook
  const initialTodos = [{id: 1, task: "Get gas", completed: false}];

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  // (Demo only) We can also use useLocalStorageState hook directly.
  // It shows how easy it is to have a piece of state we use that's also syncing w/ localStorage
  //
  //const [mood, setMood] = useLocalStorageState("mood", "happy");
  //console.log(mood);  // Also type localStorage in Chrome Dev-Tools, we see
                      // mood is totally separate from todos

  // Moved to useLocalStorageState.js to form a custom hook
  //
  // - If we had another piece of state we want distinct to localStorage, whenever it changes we'd need to duplicate ln-14 and the useEffect() below.  Instead, we could use a custom hook called, useLocalStorageState.js
  // ex. If we want to add a dark/light mode, a language preference Eng/Fre, we might want to store that in localStorage.  But that doesn't belong to the "todos" in that array.  We'd need a separate piece of state, a separate piece of localStorage.  So it's best to use a custom hook.
  //
  // useEffect(() => {
  //   window.localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

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
