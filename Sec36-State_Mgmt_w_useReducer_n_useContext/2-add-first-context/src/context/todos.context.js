import React, { createContext } from 'react';
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true }
];

// Create a context obj
export const TodosContext = createContext();

export function TodosProvider(props) {

  // Get the obj returned from useTodoState()
  // - The obj returned is { todos, addTodo, removeTodo, toggleTodo, editTodo } 
  // - The obj properties will be used as "value" prop ln-20 to be passed to consuming comps in ln-24
  const todoStuff = useTodoState(defaultTodos);  

  return (
    <TodosContext.Provider value={todoStuff}>
      {/* 
      {this.props.children} equals to the "nested comps" passed into <TodosProvider> ln-29~32 in TodoApp.js.  And these nested/child comps  can access the "value" prop in the provider.  Think of this as a pattern.
      */}
      {props.children}
    </TodosContext.Provider>
  );
}
