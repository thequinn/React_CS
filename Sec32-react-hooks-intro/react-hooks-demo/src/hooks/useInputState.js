import { useState } from "react";

export default initialVal => {
  const [value, setValue] = useState(initialVal);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  // You can return an array or an obj from a hook
  return [value, handleChange, reset];
};
