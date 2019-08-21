import React from "react";
import useInputState from "./hooks/useInputState";

export default function SimpleFormInputHook() {
  // Both ln-6 and ln-7 re-use the hook of ./hooks/useInputState.js
  const [email, updateEmail, resetEmail] = useInputState("");
  const [password, updatePassword, resetPassword] = useInputState("");

  return (
    <div>
      <h1>
        Email is: {email} & Password is: {password}
      </h1>
      <input type='text' value={email} onChange={updateEmail} />
      <button onClick={resetEmail}>Reset Email</button>
      <input type='text' value={password} onChange={updatePassword} />      
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  );
}
