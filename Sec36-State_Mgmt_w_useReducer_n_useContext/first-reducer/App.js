// Lecture ex: https://reactjs.org/docs/hooks-reference.html#usereducer

import React, { useReducer } from 'react';
import './App.css';

// The reducer takes the "action" and then update the state.
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.amount};
    case 'decrement':
      return {count: state.count - action.amount};
    case 'reset':
      return {count: 0};
    default:
      throw new Error();
  }
}

function App() {
  // 技巧: useReducer() is an alternative to useState()
  //
  // dispatch() is a func returned by useReducer() that's generated base off of the reducer callback we passed in.  (簡單説:  dispatch() uses reducer callback to update the state)
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <div className='App'>
       <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({type: 'increment', amount: 1})}>+1</button>
      <button onClick={() => dispatch({type: 'increment', amount: 5})}>+5</button>
      <button onClick={() => dispatch({type: 'decrement', amount: 1})}>-1</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button>
    </div>
  );
}

export default App;
