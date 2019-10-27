// Goal:
// - Replace custom useState(), useLocalStorageState(), by useReduce()

//import { useState, useEffect } from "react";
import { useReducer, useEffect } from "react";

//function useLocalStorageState(key, defaultVal) {
function useLocalStorageReducer(key, defaultVal, reducer) {

  //const [state, setState] = useState(() => {
  //
  // The 3rd arg is a func that establish the initial state.  So what's returned by this func will be stored initially in state.
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;

    try {
      // If localStorage has the key, use the existing todos.  Else, use the String version of the defaultVal.
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (e) {
      value = defaultVal;
    }
    return value;
  });

  // useEffect() will cause the localStorage to sync when [state] changes.
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}

//export { useLocalStorageState };
export { useLocalStorageReducer };
