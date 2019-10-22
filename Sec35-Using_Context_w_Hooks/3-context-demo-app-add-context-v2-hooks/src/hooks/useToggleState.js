import { useState } from "react";

// Initialize the default state to false if a user doesn't pass in a val in useToggleState()
function useToggle(initialVal = false) {

  // call useState, "reserve piece of state"
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState(!state);
  };

  // return piece of state AND a function to toggle it
  return [state, toggle];
}

export default useToggle;
