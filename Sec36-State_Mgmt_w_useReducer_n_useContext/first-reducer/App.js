import React, { useReducer } from 'react';
import './App.css';

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
