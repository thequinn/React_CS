import { useState } from "react";

/* 
useToggle.js 
- It is a reusable piece of stateful logic.  So when a comp needs a piece of logic that flips a state, this hook can be re-used.
- Insteaed of defining our own 3 diff toggleIsXXXXXX() defined in Toggler comp, we combine the 3 into useToggle() and have it defined in this hook, called useToggle.js.  And then Toggler comp can call this hook.
*/
function useToggle(initialVal = false) {
  /*
  - Call useState(). It returns (1) the piece of state passed fromToggler.js, which is state (2) a func to update that state, which is setState.
  - Note: state and setState here are confusing names.  They're not this.state  and this.setState in React.
  */
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState(!state); // The setState() here is from ln-9
  };

  // return the piece of state AND a function to toggle it
  return [state, toggle];
}

export default useToggle;
