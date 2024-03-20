import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {

  const [num, setNum] = useState(1);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
  };

  return (
    <div>
      <Dice num={num} />
      <Button onClick={handleRollClick}>던지기</Button>
      <Button>처음부터</Button>
    </div>
  );
}

export default App;
