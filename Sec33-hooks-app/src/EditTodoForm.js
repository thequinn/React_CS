import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

export default ({task, id, editTodo, toggleEditForm}) => {
  const [todoText, handleChange, reset] = useInputState(task);

  return (
    <form 
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, todoText);
        reset();
        toggleEditForm();
      }}
    >
      <TextField 
        value={todoText} 
        onChange={handleChange} 
        margin='normal' 
        fullWidth 
      />
    </form>
  );
}