//import React, { createContext, useReducer } from "react";
import React, { createContext } from "react";

import todoReducer from "../reducers/todo.reducer.js";

// Since the beginning of this sec, the project hasn't incorporate localStorage.  Here, we add a custom hook, Reducer + localStorage
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";


const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  // This reducer doesn't have localStorage
  //const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  //
  // This reducer has localStorage
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
