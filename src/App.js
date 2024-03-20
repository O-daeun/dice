import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum((prev) => prev + nextNum);
  };

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
  };

  return (
    <div>
      <Button onClick={handleRollClick}>던지기</Button>
      <Button onClick={handleClearClick}>처음부터</Button>
      <div>
        <h2>나</h2>
        <Dice num={num} />
        <p>총점: {sum}점</p>
      </div>
    </div>
  );
}

export default App;
