import {useState, useEffect} from "react";

// If nothing under localStorage in the key, use defaultVal
function UseLocalStorageState(key, defaultVal) {
  // Make piece of state, based off of value in localStorage or default
  //
  // Lazy Initial State:
  // - You can put a var or callback func as arg in useState().  The arg is the initial state used during the initial render.  In subsequent renders, it's disregarded. If the initial state takes extra work, use a callback instead.
  //
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    }
    catch(e) {
      val = defaultVal;
    }
    return val;
  });

  // Use useEffect() to update localStorage when state changes
  //
  // [state] in 2nd arg:
  // - we only want useEffect() hook to run when [state] changes.
  // - ex. If we use the hook twice, one time we pass in todos as the key, and 2nd time we pass in like lanaguage preference as the key, we'll only update localStorage when each of those changes, but not setting them at once.
  //
  useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default UseLocalStorageState;
