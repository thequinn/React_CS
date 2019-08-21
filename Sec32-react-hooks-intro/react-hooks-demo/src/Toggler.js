/* Method #1: 
- Using useState as React Hooks.  
- But when more methods grow, the code becomes more clunky 
*/

// import React , { useState } from "react";  // useState is a React Hook

// function Toggler() {
//   const [isHappy, setIsHappy] = useState(true);
//   const [isHeartbroken, setIsHeartbroken] = useState(false);
//   const [isBanana, setIsBanana] = useState(true);

//   const toggleIsHappy = () => {
//     setIsHappy(!isHappy);    
//   };
//   const toggleIsHeartbroken = () => {
//     setIsHeartbroken(!isHeartbroken);
//   };
//   const toggleIsBanana = () => {
//     setIsBanana(!isBanana);
//   };

//   return (
//     <div>
//       <h1 onClick={toggleIsHappy}>{isHappy ? "😄" : "😢"}</h1>
//       <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "💔" : "❤️"}</h1>
//       <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "🍏"}</h1>
//     </div>
//   );
// }

// export default Toggler;

/********************************************************/
/* Method #2: 
- Create our own hook in useToggle.js, and use it here.
- ./hooks/useToggle.js is a reusable piece of stateful logic.

*/

import React from "react";
import useToggle from "./hooks/useToggle";  // Create our own hook

function Toggler() {
  // Compare to ln-9~21, the following 3 ln's re-use the hook of ./hooks/useToggle.js
  const [isHappy, toggleIsHappy] = useToggle(true); 
  const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);
  const [isBanana, toggleIsBanana] = useToggle(true);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "😄" : "😢"}</h1>
      <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "💔" : "❤️"}</h1>
      <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "🍏"}</h1>
    </div>
  );
}

export default Toggler;
