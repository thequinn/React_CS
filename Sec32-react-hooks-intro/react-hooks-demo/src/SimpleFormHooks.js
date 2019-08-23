import React, {useState} from "react";

export default function SimpleFormHooks() {
  const [words, setWords] = useState("");

  // Regular func
  function handleChange(evt) {
    setWords(evt.target.value);
  }
  // Func expression 
  // const handleChange = function(evt) {
  //   setWords(evt.target.value);
  // }
  // Arrow func
  // const handleChange = evt => {
  //   setWords(evt.target.value);
  // }

  return (
    <div>
      <h1>The value is {words}</h1>
      
      <input 
        type='text' 
        value={words} 
        // Method-#1: Inline func for event handler
        // onChange={(evt) => { setWords(evt.target.value) }}
        //
        // Method-#2: Independent func for event handler
        onChange={handleChange}
      />

      <button onClick={() => { setWords("") }}>Submit</button>
    </div>
  );
}