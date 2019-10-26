import React, { useContext } from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import { TodosContext } from "./context/todos.context";
//
// 注意: No need b/c TodosProvider is used in ln-50~ln-53 in TodoApp.js to setup subscriber comps
//import { TodosProvider } from "./context/todos.context";


//function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
function TodoList() {
  
  // useContext()
  // - Accepts a context object and returns the current context value for that context. 
  const { todos } = useContext(TodosContext);

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <Todo
                {...todo}
                key={todo.id}
              />
              {i < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default TodoList;
