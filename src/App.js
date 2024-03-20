import { useState } from "react";
import Button from "./Button";
import React from "react";
import Board from "./Board";

function random(n) {
  return Math.ceil(Math.random() * n);
}

export default function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory((prev) => [...prev, nextNum]);
    setOtherHistory((prev) => [...prev, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };
  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board
          name='나'
          color='blue'
          history={myHistory}
        />
        <Board
          name='상대'
          color='red'
          history={otherHistory}
        />
      </div>
    </div>
  );
}
