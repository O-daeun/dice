import Dice from "./Dice";

function Board({ name, color, history }) {
  const num = history[history.length - 1] || 1;
  const sum = history.reduce((a, b) => a + b, 0);
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <Dice color={color} num={num} />
        <p>총점: {sum}점</p>
        <p>기록: {history.join(", ")}</p>
      </div>
    </div>
  );
}

export default Board;
