import React, {useState} from "react";

function Toggler_1() {
  const [isHappy, setIsHappy] = useState(true);
  const [isHeartbroken, setIsHeartbroken] = useState(false);
  const [isBanana, setIsBanana] = useState(true);

  const toggleIsHappy = () => {
    setIsHappy(!isHappy);
  };
  const toggleIsHeartbroken = () => {
    setIsHeartbroken(!isHeartbroken);
  };
  const toggleIsBanana = () => {
    setIsBanana(!isBanana);
  }

  return (
    <div>     
      <h1 onClick={toggleIsHappy}>{isHappy ? "😄" : "😢"}</h1>
      <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ?  "💔" : "❤️"}</h1>
      <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "🍏"}</h1>
    </div>
  );
}

export default Toggler_1;