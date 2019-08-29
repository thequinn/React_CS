// import React from 'react';
import React from 'react';
import useInputState from './hooks/useInputState';
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';

function TodoForm({addTodo}) {
  const [todoText, handleChange, reset] = useInputState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   addTodo(todoText);
  //   reset();
  // }
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={ 
        e => {
          e.preventDefault();
          addTodo(todoText);          
          reset();
        }
      }>
        <TextField 
          name='todoText'
          value={todoText}
          onChange={handleChange}
          label="Add new todo"        
          margin="normal"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;