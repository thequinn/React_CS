import React, { useState } from "react";

// Using a single functional comp to manage the state
function CounterHooks() {
  /*
  useState() is a React Hook.  
  - It returns (1) the state passed from CounterClass.js, which is count (2) a func to update that state, which is setCount
  - useState(0) initialize the state "count" to 0 in CounterClass.js
  */
  const [count, setCount] = useState(0); // Array destructuring to grab (1)(2)

  return (
    <div>
      <h1>The Count Is: {count}</h1>

      {/* When onClick is triggered, setCount() will update the count to increment by 1, which will replace the 0 in useState() to 1 (ln-10) */}
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}
export default CounterHooks;
