import React, { useState, useEffect } from "react";

function Clicker() {
  const [count, setCount] = useState(0);

  /*
  useEffect() 
  - If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
  - It runs after every render(), including the very first render()
  */
  useEffect(() => {
    // document.title is displayed on the curr tab of the browser
    document.title = `You clicked ${count} times`;
  });

  return <button onClick={() => setCount(count + 1)}>Click Me {count}</button>;
}

export default Clicker;
