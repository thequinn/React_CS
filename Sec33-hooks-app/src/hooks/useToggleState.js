import {useState} from 'react';

export default (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  function toggle() {
    setState(!state);
  }

  return [state, toggle];
}