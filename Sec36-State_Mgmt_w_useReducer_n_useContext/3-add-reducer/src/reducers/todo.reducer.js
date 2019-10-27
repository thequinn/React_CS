import React, { useReducer }  from 'react';
import { TodosContext } from "../context/todos.context";

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      return [...state, { id: uuid(), task: action.task, completed: false }];
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...state, completed: !todo.completed } : todo
      );
    case 'EDIT':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.task } : todo
      );
    default:
      return state;
  }
}

export default reducer;