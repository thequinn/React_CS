import React, { createContext, useReducer } from "react";
//import useTodoState from "../hooks/useTodoState";
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  //const todosStuff = useTodoState(defaultTodos);
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={ todos, dispatchs }>
      {props.children}
    </TodosContext.Provider>
  );
}
