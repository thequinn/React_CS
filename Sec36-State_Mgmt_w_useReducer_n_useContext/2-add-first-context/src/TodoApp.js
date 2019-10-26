import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

// No need b/c useTodoState.js is used by todos.context.js 
//import useTodoState from "./hooks/useTodoState";

// 注意: No need (See comment for ln-29)
//import TodosContext from "./contexts/todos.context";
//
import { TodosProvider } from "./context/todos.context";

function TodoApp() {
  // const initialTodos = [{ id: 1, task: "Walk The Goldfish", completed: true }];

  // 注意: No need b/c we use <TodosProvider> to provide context of { todos, addTodo, removeTodo, toggleTodo, editTodo }
  // 
  // const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
  //   initialTodos
  // );

  // useContext()
  // - Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
  // ==> So, no need ln-12 & next ln to do it since we don't need to use the func's in TodosContext obj in todos.context.js
  //
  //const value = useContext(TodosContext);
  
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

          {/* Set up subscribers comps that'll use TodosProvider's context */}
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>

        </Grid>
      </Grid>
    </Paper>
  );
}
export default TodoApp;
