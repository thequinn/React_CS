import React from 'react';
import useInputState from './hooks/useInputState';

export default function SimpleFormInputHook() {
  const [words, setWords, resetWords] = useInputState("");
  const [phrase, setPhrase, resetPhrase] = useInputState("");
  
  return (
    <div>
      <h1>The words are {words}, the phrase are {phrase}</h1> 
           
      <input type='text' value={words} onChange={setWords} />
      <button onClick={() => { resetWords("") }}>Reset words</button>

      <input type='text' value={phrase} onChange={setPhrase} />
      <button onClick={() => { resetPhrase("") }}>Reset phrae</button>
    </div>
  );
}